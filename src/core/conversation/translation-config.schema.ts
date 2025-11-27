import { z } from "zod";
import { BaseModelSchema, LanguageCodeSchema } from "../base.schema";

/**
 * @fileoverview Translation configuration schema definitions for translation services.
 * @module conversation/translation-config
 */

/**
 * Translation service request schema.
 *
 * @typedef {Object} TranslationServiceRequest
 * @property {string} initiator_id - Unique identifier for the initiator participant
 * @property {string} initiator_language_code - Language code of the initiator's spoken language
 * @property {string} participant_language_code - Language code of the participant's spoken language
 * @property {string} [session_id] - Optional session ID for tracking the translation session
 * @property {string} [translation_config_id] - Translation config ID to use for this translation service
 */
export const TranslationServiceRequestSchema = BaseModelSchema.safeExtend({
    initiator_id: z.string(),
    initiator_language_code: LanguageCodeSchema,
    participant_language_code: LanguageCodeSchema,
    session_id: z.string().optional().nullable(),
    translation_config_id: z.string().optional().nullable(),
});

/**
 * Translation conversation configuration schema.
 *
 * @typedef {Object} TranslationConversationConfig
 * @property {string} [sdrtn_id] - SDRTN (Session Description and Real-Time Networking) identifier for WebRTC connections
 * @property {string} channel_identifier - Unique identifier for the communication channel (phone number, chat ID, etc.)
 * @property {string} initiator_access_id - Unique identifier for the initiator participant
 * @property {string} initiator_token - Authentication token for the communication channel
 * @property {string} participant_access_id - Unique identifier for the participant
 * @property {string} participant_token - Authentication token for the participant
 */
export const TranslationConversationConfigSchema = z.object({
    sdrtn_id: z.string().optional().nullable(),
    channel_identifier: z.string(),
    initiator_access_id: z.string(),
    initiator_token: z.string(),
    participant_access_id: z.string(),
    participant_token: z.string(),
});

/**
 * Schema for creating a new translation service request.
 * Omits auto-generated fields.
 */
export const CreateTranslationServiceRequestSchema = TranslationServiceRequestSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export type TranslationServiceRequest = z.infer<typeof TranslationServiceRequestSchema>;
export type CreateTranslationServiceRequest = z.infer<typeof CreateTranslationServiceRequestSchema>;
export type TranslationConversationConfig = z.infer<typeof TranslationConversationConfigSchema>;
