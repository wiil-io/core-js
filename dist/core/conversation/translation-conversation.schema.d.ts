import { z } from "zod";
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
export declare const TranslationMessageSchema: z.ZodObject<{
    messageId: z.ZodString;
    speakerParticipantId: z.ZodString;
    targetParticipantId: z.ZodString;
    originalText: z.ZodOptional<z.ZodString>;
    translatedText: z.ZodOptional<z.ZodString>;
    originalLanguage: z.ZodString;
    targetLanguage: z.ZodString;
    provisioningConfigId: z.ZodString;
    timestamp: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
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
export declare const TranslationParticipantSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    translationServiceLogId: z.ZodOptional<z.ZodString>;
    partnerParticipantRecordId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    isAnchor: z.ZodDefault<z.ZodBoolean>;
    nativeLanguage: z.ZodString;
    participantAccessId: z.ZodNumber;
    participantToken: z.ZodString;
    transcriptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    participantTranscribedLogs: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        user_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        last_assistant_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
        assistant_message_id: z.ZodString;
        last_user_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        provider_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new translation participant.
 * Omits auto-generated fields.
 */
export declare const CreateTranslationParticipantSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    translationServiceLogId: z.ZodOptional<z.ZodString>;
    partnerParticipantRecordId: z.ZodOptional<z.ZodString>;
    isAnchor: z.ZodDefault<z.ZodBoolean>;
    nativeLanguage: z.ZodString;
    participantAccessId: z.ZodNumber;
    participantToken: z.ZodString;
    transcriptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    participantTranscribedLogs: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        user_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        last_assistant_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
        assistant_message_id: z.ZodString;
        last_user_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        provider_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing translation participant.
 * All fields are optional except id.
 */
export declare const UpdateTranslationParticipantSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    translationServiceLogId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    partnerParticipantRecordId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isAnchor: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    nativeLanguage: z.ZodOptional<z.ZodString>;
    participantAccessId: z.ZodOptional<z.ZodNumber>;
    participantToken: z.ZodOptional<z.ZodString>;
    transcriptions: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>>;
    participantTranscribedLogs: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        user_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        last_assistant_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
        assistant_message_id: z.ZodString;
        last_user_message_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.USER>>;
        provider_message_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        conversation_config_id: z.ZodString;
        message: z.ZodString;
        timestamp: z.ZodDefault<z.ZodNumber>;
        llm_conversation_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        subject: z.ZodString;
        isEmail: z.ZodDefault<z.ZodLiteral<true>>;
        message_type: z.ZodDefault<z.ZodLiteral<import("./conversation-message.schema").MessageType.AGENT>>;
    }, z.core.$strip>]>>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
export declare const TranslationServiceLogSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    organization_id: z.ZodString;
    project_id: z.ZodOptional<z.ZodString>;
    partner_initiator_id: z.ZodString;
    partner_session_id: z.ZodOptional<z.ZodString>;
    sdrtn_id: z.ZodOptional<z.ZodString>;
    translationConfigId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    participants: z.ZodOptional<z.ZodArray<z.ZodString>>;
    durationInSeconds: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    status: z.ZodDefault<z.ZodEnum<typeof ConversationStatus>>;
    direction: z.ZodDefault<z.ZodEnum<typeof TranslationDirection>>;
    transcribedConversationLog: z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    logTranscriptionInParticipantRecords: z.ZodDefault<z.ZodBoolean>;
    translationSummary: z.ZodOptional<z.ZodString>;
    created_day: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for creating a new translation service log.
 * Omits auto-generated fields.
 */
export declare const CreateTranslationServiceLogSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof ConversationStatus>>;
    organization_id: z.ZodString;
    project_id: z.ZodOptional<z.ZodString>;
    durationInSeconds: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    created_day: z.ZodOptional<z.ZodString>;
    direction: z.ZodDefault<z.ZodEnum<typeof TranslationDirection>>;
    sdrtn_id: z.ZodOptional<z.ZodString>;
    partner_initiator_id: z.ZodString;
    partner_session_id: z.ZodOptional<z.ZodString>;
    translationConfigId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    participants: z.ZodOptional<z.ZodArray<z.ZodString>>;
    transcribedConversationLog: z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    logTranscriptionInParticipantRecords: z.ZodDefault<z.ZodBoolean>;
    translationSummary: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for updating an existing translation service log.
 * All fields are optional except id.
 */
export declare const UpdateTranslationServiceLogSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ConversationStatus>>>;
    organization_id: z.ZodOptional<z.ZodString>;
    project_id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    durationInSeconds: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
    created_day: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    direction: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TranslationDirection>>>;
    sdrtn_id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    partner_initiator_id: z.ZodOptional<z.ZodString>;
    partner_session_id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    translationConfigId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    participants: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    transcribedConversationLog: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        messageId: z.ZodString;
        speakerParticipantId: z.ZodString;
        targetParticipantId: z.ZodString;
        originalText: z.ZodOptional<z.ZodString>;
        translatedText: z.ZodOptional<z.ZodString>;
        originalLanguage: z.ZodString;
        targetLanguage: z.ZodString;
        provisioningConfigId: z.ZodString;
        timestamp: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>>;
    logTranscriptionInParticipantRecords: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    translationSummary: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    id: z.ZodString;
}, z.core.$strip>;
export type CreateTranslationParticipant = z.infer<typeof CreateTranslationParticipantSchema>;
export type UpdateTranslationParticipant = z.infer<typeof UpdateTranslationParticipantSchema>;
export type CreateTranslationServiceLog = z.infer<typeof CreateTranslationServiceLogSchema>;
export type UpdateTranslationServiceLog = z.infer<typeof UpdateTranslationServiceLogSchema>;
export type TranslationMessage = z.infer<typeof TranslationMessageSchema>;
export type TranslationParticipant = z.infer<typeof TranslationParticipantSchema>;
export type TranslationServiceLog = z.infer<typeof TranslationServiceLogSchema>;
