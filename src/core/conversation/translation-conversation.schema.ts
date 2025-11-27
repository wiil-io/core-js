import { z } from "zod";
import { BaseModelSchema, LanguageCodeSchema } from "../base.schema";
import { ConversationMessageSchema } from "./conversation-config.schema";
import { ConversationStatus, TranslationDirection } from "../type-definitions";

/**
 * @fileoverview Translation conversation schema definitions for real-time translation services.
 * @module conversation/translation-conversation
 */

/**
 * Translation message schema - represents one translation interaction.
 *
 * @typedef {Object} TranslationMessage
 * @property {string} messageId - Unique identifier for this translation message
 * @property {string} speakerParticipantId - ID of the participant who spoke this message
 * @property {string} targetParticipantId - ID of the participant who will receive the translation
 * @property {string} [originalText] - Transcribed text from the speaker in their original language
 * @property {string} [translatedText] - Translated text in the target participant's language
 * @property {string} originalLanguage - Language code of the original spoken message
 * @property {string} targetLanguage - Language code for the translation output
 * @property {string} provisioningConfigId - Provisioning chain ID that processed this translation
 * @property {number} timestamp - Unix timestamp when this message was processed
 * @property {Object} [metadata] - Additional metadata like audio URLs, confidence scores, processing times
 */
export const TranslationMessageSchema = z.object({
    messageId: z.string(),
    speakerParticipantId: z.string(),
    targetParticipantId: z.string(),
    originalText: z.string().optional(),
    translatedText: z.string().optional(),
    originalLanguage: LanguageCodeSchema,
    targetLanguage: LanguageCodeSchema,
    provisioningConfigId: z.string(),
    timestamp: z.number(),
    metadata: z.record(z.string(), z.any()).optional(),
});

/**
 * Translation participant schema.
 *
 * @typedef {Object} TranslationParticipant
 * @property {string} [translationServiceLogId] - Translation service log ID
 * @property {string} [partnerParticipantRecordId] - Partner participant record ID
 * @property {string} [name] - Participant name
 * @property {boolean} isAnchor - Indicates if the participant is the anchor
 * @property {string} nativeLanguage - ISO 639-1 language code
 * @property {number} participantAccessId - Unique identifier for the participant
 * @property {string} participantToken - Authentication token for the participant
 * @property {Array} [transcriptions] - Array of translation messages
 * @property {Array} [participantTranscribedLogs] - Array of conversation messages
 */
export const TranslationParticipantSchema = BaseModelSchema.safeExtend({
    translationServiceLogId: z.string().optional(),
    partnerParticipantRecordId: z.string().optional(),
    name: z.string().optional(),
    isAnchor: z.boolean().default(false),
    nativeLanguage: z.string().min(2).max(5),
    participantAccessId: z.number(),
    participantToken: z.string(),
    transcriptions: z.array(TranslationMessageSchema).optional(),
    participantTranscribedLogs: z.array(ConversationMessageSchema).optional()
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
 * @typedef {Object} TranslationServiceLog
 * @property {string} organization_id - Account ID requesting the translation service
 * @property {string} [project_id] - Project ID associated with the translation service
 * @property {string} partner_initiator_id - Unique identifier for the initiator participant
 * @property {string} [partner_session_id] - Optional session ID for tracking the translation session
 * @property {string} [sdrtn_id] - SDRTN (Session Description and Real-Time Networking) identifier for WebRTC connections
 * @property {string} [translationConfigId] - Translation configuration ID to use for this translation service
 * @property {string[]} [participants] - Array of participant IDs
 * @property {number} durationInSeconds - Duration of the translation session in seconds
 * @property {string} status - Current status of the translation session
 * @property {string} direction - Translation direction (bidirectional, unidirectional)
 * @property {Array} [transcribedConversationLog] - Array of translation messages
 * @property {boolean} logTranscriptionInParticipantRecords - Flag to determine if transcriptions should be logged in participant records
 * @property {string} [translationSummary] - Optional summary of the translation session
 * @property {string} [created_day] - The day the message was created, formatted as YYYY-MM-DD
 */
export const TranslationServiceLogSchema = BaseModelSchema.safeExtend({
    organization_id: z.string(),
    project_id: z.string().optional(),
    partner_initiator_id: z.string(),
    partner_session_id: z.string().optional(),
    sdrtn_id: z.string().optional(),
    translationConfigId: z.string().optional().nullable(),
    participants: z.array(z.string()).optional(),
    durationInSeconds: z.number().nonnegative().optional().default(60),
    status: z.enum(ConversationStatus).default(ConversationStatus.ACTIVE),
    direction: z.enum(TranslationDirection).default(TranslationDirection.BIDIRECTIONAL),
    transcribedConversationLog: z.array(TranslationMessageSchema).optional(),
    logTranscriptionInParticipantRecords: z.boolean().default(false),
    translationSummary: z.string().optional(),
    created_day: z.string().optional(),
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
