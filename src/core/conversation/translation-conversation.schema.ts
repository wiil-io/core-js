import { z } from "zod";
import { BaseModelSchema, LanguageCodeSchema } from "../base.schema";
import { ConversationMessageSchema } from "./conversation-config.schema";
import { ConversationStatus, TranslationDirection } from "../type-definitions";

/**
 * @fileoverview Translation conversation schema definitions for real-time translation services.
 *
 * Translation conversations manage the lifecycle, participants, and message history of real-time language
 * translation sessions. Tracks individual translation messages, participant metadata, session duration,
 * and conversation status for multilingual communication across language barriers.
 *
 * @module conversation/translation-conversation
 */

/**
 * Translation message schema - represents one translation interaction.
 *
 * Individual translation message capturing the complete translation pipeline from speaker's original speech
 * to translated output for the listener. Tracks both source and target text, languages, participants, and
 * the provisioning chain used for STT → Translation → TTS processing.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used In**: TranslationServiceLog.transcribedConversationLog array
 * - **Processing Pipeline**: Speaker audio → STT (originalText) → Translation (translatedText) → TTS → Target participant
 * - **Provisioning**: References ProvisioningConfigChain with isTranslation=true
 * - **Bidirectional**: Each spoken utterance creates messages for both participants in their languages
 *
 * **Translation Flow:**
 * 1. Participant A speaks in Language A → captured as audio
 * 2. STT transcribes audio → originalText in Language A
 * 3. Translation model translates → translatedText in Language B
 * 4. TTS synthesizes translatedText → audio for Participant B
 * 5. TranslationMessage stored with both texts, languages, and metadata
 *
 * **Metadata Examples:**
 * - audio_url: URL to original audio recording
 * - confidence_score: STT transcription confidence (0-1)
 * - processing_time_ms: Total pipeline latency
 * - translation_model: LLM model used for translation
 */
export const TranslationMessageSchema = z.object({
    messageId: z.string().describe("Unique identifier for this translation message (typically UUID) used for message ordering, deduplication, and reference tracking"),
    speakerParticipantId: z.string().describe("ID of the participant who spoke this message in their original language (references TranslationParticipant)"),
    targetParticipantId: z.string().describe("ID of the participant who will receive the translated message in their language (references TranslationParticipant)"),
    originalText: z.string().optional().describe("Transcribed text from the speaker in their original language as output by STT model (e.g., 'Hello, how are you?' from English speaker)"),
    translatedText: z.string().optional().describe("Translated text in the target participant's language as output by translation model (e.g., 'Hola, ¿cómo estás?' for Spanish listener)"),
    originalLanguage: LanguageCodeSchema.describe("ISO 639-1 language code of the original spoken message matching the speaker's native language (e.g., 'en-US', 'es-ES', 'fr-FR')"),
    targetLanguage: LanguageCodeSchema.describe("ISO 639-1 language code for the translation output matching the target participant's native language (e.g., 'ja-JP', 'de-DE', 'zh-CN')"),
    provisioningConfigId: z.string().describe("ID of the provisioning configuration chain that processed this translation including STT, translation LLM, and TTS models (references ProvisioningConfigChain with isTranslation=true)"),
    timestamp: z.number().describe("Unix timestamp in milliseconds when this message was processed through the translation pipeline, used for message ordering and latency analysis"),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional metadata as key-value pairs including audio recording URLs, STT confidence scores, processing times, translation model details, or quality metrics"),
});

/**
 * Translation participant schema.
 *
 * Represents an individual participant in a translation session including their language preferences,
 * authentication credentials, role, and message history. Participants can be anchors (session initiators)
 * or secondary participants joining the translation conversation.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseModelSchema with participant-specific fields
 * - **Relationship to Session**: N:1 - Multiple participants in one translation session
 * - **Referenced By**: TranslationMessage via speakerParticipantId and targetParticipantId
 * - **Access Control**: participantToken authenticates WebRTC connections
 *
 * **Participant Roles:**
 * - **Anchor (isAnchor=true)**: Session initiator, typically the customer or primary caller
 * - **Secondary (isAnchor=false)**: Joining participant, typically agent or secondary caller
 *
 * **Message Storage:**
 * - transcriptions: Translation messages where this participant is either speaker or target
 * - participantTranscribedLogs: Full conversation messages for audit and quality review
 *
 * **Integration:**
 * - partnerParticipantRecordId links to external systems (CRM, HR, contact databases)
 * - Enables unified participant profiles across multiple sessions
 */
export const TranslationParticipantSchema = BaseModelSchema.safeExtend({
    translationServiceLogId: z.string().optional().describe("ID of the translation service log this participant belongs to (N:1 relationship, references TranslationServiceLog)"),
    partnerParticipantRecordId: z.string().optional().describe("External partner or system participant record ID for integration with CRM, HR systems, or contact databases enabling unified participant profiles"),
    name: z.string().optional().describe("Human-readable name of the participant for display in UI and logs (e.g., 'John Smith', 'Customer Support Agent')"),
    isAnchor: z.boolean().default(false).describe("Flag indicating if this participant is the anchor/initiator of the session (true for session starter, false for joining participants)"),
    nativeLanguage: z.string().min(2).max(5).describe("ISO 639-1 language code of the participant's native spoken language (2-5 characters, e.g., 'en', 'en-US', 'es-MX') used for translation direction"),
    participantAccessId: z.number().describe("Unique numeric identifier for the participant used for WebRTC connection authentication and audio stream routing"),
    participantToken: z.string().describe("Authentication token for the participant's WebRTC connection, short-lived credential for secure session access (expires after session)"),
    transcriptions: z.array(TranslationMessageSchema).optional().describe("Array of translation messages where this participant is either the speaker or target, populated for participant-specific message history views"),
    participantTranscribedLogs: z.array(ConversationMessageSchema).optional().describe("Array of full conversation messages for this participant including both original and translated content for comprehensive audit logs and quality review")
});

/**
 * Schema for creating a new translation participant.
 * Omits auto-generated fields.
 */
export const CreateTranslationParticipantSchema = TranslationParticipantSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing translation participant.
 * All fields are optional except id.
 */
export const UpdateTranslationParticipantSchema = CreateTranslationParticipantSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Translation service log schema.
 *
 * Complete record of a translation session including participant information, session metadata, message
 * history, and operational status. Primary entity for managing and tracking real-time translation services
 * across organizations and projects.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseModelSchema with translation session-specific fields
 * - **Relationship to Participants**: 1:N - One session has multiple participants
 * - **Relationship to Messages**: 1:N - One session contains multiple translation messages
 * - **Scoped To**: Organization and optionally Project for multi-tenant isolation
 *
 * **Translation Directions:**
 * - **BIDIRECTIONAL**: Both participants receive translations (A→B and B→A simultaneously)
 * - **UNIDIRECTIONAL**: Only one direction of translation (e.g., customer to agent only)
 *
 * **Session Lifecycle:**
 * - **ACTIVE**: Translation session in progress with real-time audio streaming
 * - **COMPLETED**: Session successfully concluded, participants disconnected
 * - **FAILED**: Session encountered errors (connection lost, processing failures)
 * - **ABANDONED**: Session abandoned by participants before completion
 *
 * **Message Logging:**
 * - transcribedConversationLog: Central message array for session-level history
 * - logTranscriptionInParticipantRecords: Controls whether messages also stored per-participant
 * - Enables both session-wide and participant-specific message retrieval
 *
 * **Use Cases:**
 * - Multilingual customer support call tracking
 * - International business meeting transcripts
 * - Cross-border service interaction logs
 * - Quality assurance and compliance auditing
 */
export const TranslationServiceLogSchema = BaseModelSchema.safeExtend({
    organization_id: z.string().describe("ID of the organization requesting the translation service for multi-tenant isolation, billing attribution, and access control"),
    project_id: z.string().optional().describe("Optional ID of the project associated with the translation service for organizational grouping, reporting, and project-specific analytics (references Project)"),
    partner_initiator_id: z.string().describe("Unique identifier for the initiator participant from external partner systems for cross-platform tracking and CRM integration"),
    partner_session_id: z.string().optional().describe("Optional external session ID for tracking the translation session in partner systems, enables correlation with external call/meeting records"),
    sdrtn_id: z.string().optional().describe("SDRTN (Session Description and Real-Time Networking) identifier for WebRTC connections enabling low-latency peer-to-peer audio streaming between participants"),
    translationConfigId: z.string().optional().nullable().describe("ID of the translation configuration chain to use for this service including STT, translation LLM, and TTS models (references ProvisioningConfigChain with isTranslation=true)"),
    participants: z.array(z.string()).optional().describe("Array of participant IDs involved in this translation session (references TranslationParticipant records, typically 2 for standard sessions, more for conference scenarios)"),
    durationInSeconds: z.number().nonnegative().optional().default(60).describe("Duration of the translation session in seconds for billing calculations, analytics reporting, and session quality metrics (default: 60 for minimum billing)"),
    status: z.enum(ConversationStatus).default(ConversationStatus.ACTIVE).describe("Current operational status of the translation session (ACTIVE: in progress, COMPLETED: concluded, FAILED: errors, ABANDONED: participants disconnected prematurely)"),
    direction: z.enum(TranslationDirection).default(TranslationDirection.BIDIRECTIONAL).describe("Translation direction mode (BIDIRECTIONAL: both participants receive translations simultaneously, UNIDIRECTIONAL: one-way translation only for specific use cases)"),
    transcribedConversationLog: z.array(TranslationMessageSchema).optional().describe("Array of translation messages capturing the complete conversation history with original and translated text for both participants, used for session playback and audit"),
    logTranscriptionInParticipantRecords: z.boolean().default(false).describe("Flag controlling whether translation messages are also stored in individual participant records (true for participant-specific history, false for session-only storage to reduce duplication)"),
    translationSummary: z.string().optional().describe("Optional AI-generated summary of the translation session including key discussion points, outcomes, and quality assessment for reporting and analytics"),
    created_day: z.string().optional().describe("The day the translation session was created in YYYY-MM-DD ISO format for daily aggregation queries, analytics partitioning, and billing period grouping"),
});

/**
 * Schema for creating a new translation service log.
 * Omits auto-generated fields.
 */
export const CreateTranslationServiceLogSchema = TranslationServiceLogSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing translation service log.
 * All fields are optional except id.
 */
export const UpdateTranslationServiceLogSchema = CreateTranslationServiceLogSchema.partial().safeExtend({
    id: z.string(),
});

export type CreateTranslationParticipant = z.infer<typeof CreateTranslationParticipantSchema>;
export type UpdateTranslationParticipant = z.infer<typeof UpdateTranslationParticipantSchema>;
export type CreateTranslationServiceLog = z.infer<typeof CreateTranslationServiceLogSchema>;
export type UpdateTranslationServiceLog = z.infer<typeof UpdateTranslationServiceLogSchema>;
export type TranslationMessage = z.infer<typeof TranslationMessageSchema>;
export type TranslationParticipant = z.infer<typeof TranslationParticipantSchema>;
export type TranslationServiceLog = z.infer<typeof TranslationServiceLogSchema>;
