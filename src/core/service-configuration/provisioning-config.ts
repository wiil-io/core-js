import z from "zod";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Provisioning configuration chain schema definitions.
 * @module service-configuration/provisioning-config
 */

/**
 * Zod schema for Speech-to-Text (STT) model configuration.
 *
 * @typedef {Object} SttModelConfigProperties
 * @property {string} modelId - Identifier of the STT model to use
 * @property {string} defaultLanguage - Default language code for speech recognition (default: "en-US")
 *
 * @example
 * ```typescript
 * const sttConfig: SttModelConfig = {
 *   modelId: 'whisper-v3',
 *   defaultLanguage: 'en-US'
 * };
 * ```
 */
export const SttModelConfigSchema = z.object({
    modelId: z.string(),
    defaultLanguage: z.string().default("en-US"),
});

/**
 * Type definition for STT model configuration.
 */
export type SttModelConfig = z.infer<typeof SttModelConfigSchema>;

/**
 * Zod schema for Text-to-Speech (TTS) model configuration.
 *
 * @typedef {Object} TtsModelConfigProperties
 * @property {string} modelId - Identifier of the TTS model to use
 * @property {string} voiceId - Identifier of the voice to use for speech synthesis
 * @property {string} defaultLanguage - Default language code for speech synthesis (default: "en-US")
 * @property {Record<string, any>} [voiceSettings] - Optional voice-specific settings (pitch, speed, etc.)
 *
 * @example
 * ```typescript
 * const ttsConfig: TtsModelConfig = {
 *   modelId: 'eleven-labs-v2',
 *   voiceId: 'adam',
 *   defaultLanguage: 'en-US',
 *   voiceSettings: { stability: 0.75, similarity_boost: 0.5 }
 * };
 * ```
 */
export const TtsModelConfigSchema = z.object({
    modelId: z.string(),
    voiceId: z.string(),
    defaultLanguage: z.string().default("en-US"),
    voiceSettings: z.record(z.string(), z.any()).optional(),
});

/**
 * Type definition for TTS model configuration.
 */
export type TtsModelConfig = z.infer<typeof TtsModelConfigSchema>;

/**
 * Zod schema for provisioning configuration chain.
 *
 * Represents a complete provisioning chain linking STT, agent configuration, and TTS
 * for end-to-end voice interaction processing.
 *
 * @typedef {Object} ProvisioningConfigChainProperties
 * @property {string} id - Unique identifier for the provisioning chain
 * @property {string} organizationId - ID of the organization that owns this chain
 * @property {string} chainName - Human-readable name for the provisioning chain
 * @property {string} [description] - Optional description of the chain's purpose
 * @property {SttModelConfig} sttConfig - Speech-to-text model configuration
 * @property {string} agentConfigurationId - ID of the agent configuration to use in the chain
 * @property {TtsModelConfig} ttsConfig - Text-to-speech model configuration
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
 *
 * @example
 * ```typescript
 * const provisioningChain: ProvisioningConfigChain = {
 *   id: 'chain-123',
 *   organizationId: 'org-456',
 *   chainName: 'Customer Support Voice Chain',
 *   description: 'Voice processing chain for customer support calls',
 *   sttConfig: {
 *     modelId: 'whisper-v3',
 *     defaultLanguage: 'en-US'
 *   },
 *   agentConfigurationId: 'agent-789',
 *   ttsConfig: {
 *     modelId: 'eleven-labs-v2',
 *     voiceId: 'adam',
 *     defaultLanguage: 'en-US'
 *   },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const ProvisioningConfigChainSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    chainName: z.string(),
    description: z.string().optional(),
    sttConfig: SttModelConfigSchema,
    agentConfigurationId: z.string(),
    ttsConfig: TtsModelConfigSchema,
});

/**
 * Type definition for provisioning configuration chain.
 */
export type ProvisioningConfigChain = z.infer<typeof ProvisioningConfigChainSchema>;

/**
 * Zod schema for creating a new provisioning configuration chain.
 *
 * Omits auto-generated fields that are populated by the system.
 *
 * @remarks
 * Use this schema when creating new provisioning chains.
 *
 * @example
 * ```typescript
 * const newChain: CreateProvisioningConfig = {
 *   organizationId: 'org-456',
 *   chainName: 'New Voice Chain',
 *   description: 'Processing chain for multilingual support',
 *   sttConfig: {
 *     modelId: 'whisper-v3',
 *     defaultLanguage: 'en-US'
 *   },
 *   agentConfigurationId: 'agent-789',
 *   ttsConfig: {
 *     modelId: 'eleven-labs-v2',
 *     voiceId: 'rachel',
 *     defaultLanguage: 'en-US'
 *   }
 * };
 * ```
 */
export const CreateProvisioningConfigSchema = ProvisioningConfigChainSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Type definition for creating a provisioning configuration chain.
 */
export type CreateProvisioningConfig = z.infer<typeof CreateProvisioningConfigSchema>;

/**
 * Zod schema for updating an existing provisioning configuration chain.
 *
 * All fields are optional (partial) except id, which is required to identify the chain.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 *
 * @example
 * ```typescript
 * const updateChain: UpdateProvisioningConfig = {
 *   id: 'chain-123',
 *   chainName: 'Updated Voice Chain',
 *   description: 'Updated description'
 * };
 * ```
 */
export const UpdateProvisioningConfigSchema = CreateProvisioningConfigSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Type definition for updating a provisioning configuration chain.
 */
export type UpdateProvisioningConfig = z.infer<typeof UpdateProvisioningConfigSchema>;

/**
 * Zod schema for translation chain configuration.
 *
 * Extends provisioning chain with translation-specific processing capabilities.
 *
 * @typedef {Object} TranslationChainConfigProperties
 * @property {string} id - Unique identifier for the translation chain
 * @property {string} organizationId - ID of the organization that owns this chain
 * @property {string} chainName - Human-readable name for the translation chain
 * @property {string} [description] - Optional description of the chain's purpose
 * @property {SttModelConfig} sttConfig - Speech-to-text model configuration
 * @property {string} processingModelId - ID of the model used for translation processing
 * @property {TtsModelConfig} ttsConfig - Text-to-speech model configuration
 * @property {boolean} isTranslation - Whether this chain performs translation (default: true)
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
 *
 * @example
 * ```typescript
 * const translationChain: TranslationChainConfig = {
 *   id: 'chain-123',
 *   organizationId: 'org-456',
 *   chainName: 'EN-ES Translation Chain',
 *   description: 'English to Spanish translation for customer support',
 *   sttConfig: {
 *     modelId: 'whisper-v3',
 *     defaultLanguage: 'en-US'
 *   },
 *   processingModelId: 'gpt-4-translator',
 *   ttsConfig: {
 *     modelId: 'eleven-labs-v2',
 *     voiceId: 'spanish-voice',
 *     defaultLanguage: 'es-ES'
 *   },
 *   isTranslation: true,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const TranslationChainConfigSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    chainName: z.string(),
    description: z.string().optional(),
    sttConfig: SttModelConfigSchema,
    processingModelId: z.string(),
    ttsConfig: TtsModelConfigSchema,
    isTranslation: z.boolean().default(true),
});

/**
 * Type definition for translation chain configuration.
 */
export type TranslationChainConfig = z.infer<typeof TranslationChainConfigSchema>;

/**
 * Zod schema for creating a new translation chain configuration.
 *
 * Omits auto-generated fields and sets isTranslation to true by default.
 *
 * @example
 * ```typescript
 * const newTranslationChain: CreateTranslationChainConfig = {
 *   organizationId: 'org-456',
 *   chainName: 'FR-EN Translation',
 *   description: 'French to English translation chain',
 *   sttConfig: {
 *     modelId: 'whisper-v3',
 *     defaultLanguage: 'fr-FR'
 *   },
 *   processingModelId: 'gpt-4-translator',
 *   ttsConfig: {
 *     modelId: 'eleven-labs-v2',
 *     voiceId: 'english-voice',
 *     defaultLanguage: 'en-US'
 *   },
 *   isTranslation: true
 * };
 * ```
 */
export const CreateTranslationChainConfigSchema = TranslationChainConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    isTranslation: z.boolean().default(true),
});

/**
 * Type definition for creating a translation chain configuration.
 */
export type CreateTranslationChainConfig = z.infer<typeof CreateTranslationChainConfigSchema>;

/**
 * Zod schema for updating an existing translation chain configuration.
 *
 * All fields are optional (partial) except id.
 *
 * @example
 * ```typescript
 * const updateTranslationChain: UpdateTranslationChainConfig = {
 *   id: 'chain-123',
 *   chainName: 'Updated Translation Chain',
 *   processingModelId: 'new-model-id'
 * };
 * ```
 */
export const UpdateTranslationChainConfigSchema = CreateTranslationChainConfigSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Type definition for updating a translation chain configuration.
 */
export type UpdateTranslationChainConfig = z.infer<typeof UpdateTranslationChainConfigSchema>;

/**
 * Union type for any chain configuration (provisioning or translation).
 */
export type ChainConfiguration = ProvisioningConfigChain | TranslationChainConfig;

/**
 * Union type for creating any chain configuration.
 */
export type CreateChainConfiguration = CreateProvisioningConfig | CreateTranslationChainConfig;

/**
 * Union type for updating any chain configuration.
 */
export type UpdateChainConfiguration = UpdateProvisioningConfig | UpdateTranslationChainConfig;
