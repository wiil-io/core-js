"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTranslationChainConfigSchema = exports.CreateTranslationChainConfigSchema = exports.TranslationChainConfigSchema = exports.UpdateProvisioningConfigSchema = exports.CreateProvisioningConfigSchema = exports.ProvisioningConfigChainSchema = exports.TtsModelConfigSchema = exports.SttModelConfigSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Provisioning configuration chain schema definitions.
 *
 * Provisioning chains orchestrate the complete voice interaction pipeline by linking Speech-to-Text (STT),
 * Agent Configuration, and Text-to-Speech (TTS) models. Used for voice-based deployments with CHAINED
 * provisioning type.
 *
 * @module service-configuration/provisioning-config
 */
/**
 * Zod schema for Speech-to-Text (STT) model configuration.
 *
 * Defines the STT model used to convert user speech to text in voice-based interactions.
 * Part of the provisioning chain's input processing stage.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used In**: ProvisioningConfigChain (sttConfig field)
 * - **Purpose**: Converts incoming voice to text for agent processing
 * - **Pipeline Position**: First stage (Speech → Text)
 *
 * @typedef {Object} SttModelConfigProperties
 * @property {string} modelId - Identifier of the STT model from Wiil registry (e.g., 'whisper-v3', 'google-stt-enhanced')
 * @property {string} defaultLanguage - Default language code for speech recognition in ISO format (default: "en-US")
 *
 * @example
 * ```typescript
 * const sttConfig: SttModelConfig = {
 *   modelId: 'whisper-v3',
 *   defaultLanguage: 'en-US'
 * };
 * ```
 */
exports.SttModelConfigSchema = zod_1.default.object({
    modelId: zod_1.default.string().describe("Identifier of the STT (Speech-to-Text) model from Wiil registry for converting user speech to text (e.g., 'whisper-v3', 'google-stt-enhanced', 'deepgram-nova')"),
    defaultLanguage: zod_1.default.string().default("en-US").describe("Default language code for speech recognition in ISO 639-1 format with region (e.g., 'en-US', 'es-ES', 'fr-FR'). Used when language auto-detection is not available or fails"),
});
/**
 * Zod schema for Text-to-Speech (TTS) model configuration.
 *
 * Defines the TTS model and voice used to convert agent text responses to speech in voice interactions.
 * Part of the provisioning chain's output generation stage.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used In**: ProvisioningConfigChain (ttsConfig field)
 * - **Purpose**: Converts agent text responses to natural speech
 * - **Pipeline Position**: Final stage (Text → Speech)
 * - **Voice Selection**: References voices from WiilSupportModel.supportedVoices
 *
 * @typedef {Object} TtsModelConfigProperties
 * @property {string} modelId - Identifier of the TTS model from Wiil registry (e.g., 'eleven-labs-v2', 'google-tts-wavenet')
 * @property {string} voiceId - Identifier of the specific voice for speech synthesis (e.g., 'adam', 'rachel', 'en-us-neural-female')
 * @property {string} defaultLanguage - Default language code for speech synthesis (default: "en-US")
 * @property {Record<string, any>} [voiceSettings] - Optional voice-specific settings (pitch, speed, stability, etc.)
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
exports.TtsModelConfigSchema = zod_1.default.object({
    modelId: zod_1.default.string().describe("Identifier of the TTS (Text-to-Speech) model from Wiil registry for converting agent responses to speech (e.g., 'eleven-labs-v2', 'google-tts-wavenet', 'azure-neural-tts')"),
    voiceId: zod_1.default.string().describe("Identifier of the specific voice to use for speech synthesis (e.g., 'adam', 'rachel', 'en-us-neural-female'). Must be available in the TTS model's supportedVoices"),
    defaultLanguage: zod_1.default.string().default("en-US").describe("Default language code for speech synthesis in ISO 639-1 format with region (e.g., 'en-US', 'es-MX', 'fr-CA')"),
    voiceSettings: zod_1.default.record(zod_1.default.string(), zod_1.default.any()).optional().describe("Optional voice-specific settings as key-value pairs for fine-tuning speech output (e.g., { stability: 0.75, similarity_boost: 0.5, pitch: 1.0, speed: 1.1 })"),
});
/**
 * Zod schema for provisioning configuration chain.
 *
 * Represents a complete voice interaction processing pipeline that chains Speech-to-Text (STT),
 * Agent Configuration, and Text-to-Speech (TTS) for end-to-end voice conversations. Referenced
 * by Deployment Configurations with CHAINED provisioning type.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Deployment Configuration (provisioningConfigChainId for CHAINED type)
 * - **Purpose**: Orchestrates complete voice interaction pipeline
 * - **Pipeline Flow**: User Speech → STT → Text → Agent → Text Response → TTS → Agent Speech
 * - **Organization**: Scoped to organization for multi-tenant isolation
 *
 * **Voice Processing Pipeline:**
 * 1. **STT Stage**: Converts incoming user speech to text using sttConfig
 * 2. **Agent Stage**: Processes text through agent (referenced by agentConfigurationId)
 * 3. **TTS Stage**: Converts agent text response to speech using ttsConfig
 *
 * @typedef {Object} ProvisioningConfigChainProperties
 * @property {string} id - Unique identifier for the provisioning chain
 * @property {string} chainName - Human-readable name for the provisioning chain for administrative identification
 * @property {string} [description] - Optional description of the chain's purpose, use case, and configuration details
 * @property {SttModelConfig} sttConfig - Speech-to-text model configuration for converting user voice to text (pipeline stage 1)
 * @property {string} agentConfigurationId - ID of the agent configuration to use for processing text interactions (pipeline stage 2)
 * @property {TtsModelConfig} ttsConfig - Text-to-speech model configuration for converting agent responses to voice (pipeline stage 3)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const provisioningChain: ProvisioningConfigChain = {
 *   id: 'chain-123',
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
exports.ProvisioningConfigChainSchema = base_schema_1.BaseModelSchema.safeExtend({
    chainName: zod_1.default.string().describe("Human-readable name for the provisioning chain used in administrative interfaces and deployment configuration (e.g., 'Customer Support Voice Chain', 'Multilingual Sales Pipeline')"),
    description: zod_1.default.string().optional().describe("Optional description of the chain's purpose, use case, language support, and configuration details for documentation"),
    sttConfig: exports.SttModelConfigSchema.describe("Speech-to-Text model configuration for the first stage of the pipeline, converting incoming user voice to text for agent processing"),
    agentConfigurationId: zod_1.default.string().describe("ID of the agent configuration to use in the middle stage of the pipeline for processing text interactions and generating text responses"),
    ttsConfig: exports.TtsModelConfigSchema.describe("Text-to-Speech model configuration for the final stage of the pipeline, converting agent text responses back to natural speech for the user"),
});
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
exports.CreateProvisioningConfigSchema = exports.ProvisioningConfigChainSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
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
exports.UpdateProvisioningConfigSchema = exports.CreateProvisioningConfigSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Zod schema for translation chain configuration.
 *
 * Extends the provisioning chain concept with translation-specific processing capabilities.
 * Enables real-time language translation in voice interactions (e.g., English caller to Spanish agent).
 *
 * @remarks
 * **Architecture Context:**
 * - **Extension Of**: ProvisioningConfigChain with translation capabilities
 * - **Purpose**: Real-time language translation for multilingual support
 * - **Pipeline Flow**: Speech (Lang A) → STT → Text (Lang A) → Translation → Text (Lang B) → TTS → Speech (Lang B)
 * - **Use Case**: Cross-language customer support, international business
 *
 * **Translation Pipeline:**
 * 1. **STT Stage**: Converts incoming speech to text in source language
 * 2. **Translation Stage**: Translates text between languages using processingModelId
 * 3. **TTS Stage**: Converts translated text to speech in target language
 *
 * @typedef {Object} TranslationChainConfigProperties
 * @property {string} id - Unique identifier for the translation chain
 * @property {string} chainName - Human-readable name for the translation chain (e.g., 'EN-ES Translation', 'Multilingual Support')
 * @property {string} [description] - Optional description of language pair, use case, and configuration
 * @property {SttModelConfig} sttConfig - Speech-to-text configuration for source language recognition
 * @property {string} processingModelId - ID of the LLM model used for translation processing between languages
 * @property {TtsModelConfig} ttsConfig - Text-to-speech configuration for target language synthesis
 * @property {boolean} isTranslation - Flag indicating this chain performs translation (default: true)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const translationChain: TranslationChainConfig = {
 *   id: 'chain-123',
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
exports.TranslationChainConfigSchema = base_schema_1.BaseModelSchema.safeExtend({
    chainName: zod_1.default.string().describe("Human-readable name for the translation chain identifying the language pair (e.g., 'EN-ES Translation', 'French to English Support')"),
    description: zod_1.default.string().optional().describe("Optional description of the translation language pair, use case, supported scenarios, and configuration details"),
    sttConfig: exports.SttModelConfigSchema.describe("Speech-to-Text configuration for recognizing and transcribing speech in the source language"),
    processingModelId: zod_1.default.string().describe("ID of the LLM model used for translation processing between source and target languages (e.g., 'gpt-4-translator', 'claude-multilingual')"),
    ttsConfig: exports.TtsModelConfigSchema.describe("Text-to-Speech configuration for synthesizing speech in the target language with appropriate voice and accent"),
    isTranslation: zod_1.default.boolean().default(true).describe("Flag indicating this chain performs real-time language translation (always true for translation chains)"),
});
/**
 * Zod schema for creating a new translation chain configuration.
 *
 * Omits auto-generated fields and sets isTranslation to true by default.
 *
 * @example
 * ```typescript
 * const newTranslationChain: CreateTranslationChainConfig = {
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
exports.CreateTranslationChainConfigSchema = exports.TranslationChainConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    isTranslation: zod_1.default.boolean().default(true),
});
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
exports.UpdateTranslationChainConfigSchema = exports.CreateTranslationChainConfigSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
