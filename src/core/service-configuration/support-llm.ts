import { z } from "zod";
import { LLMType, SupportedProprietor } from "../type-definitions/service-config.definitions";
import { LanguageSchema, VoiceSchema } from "./voice-language.schema";

/**
 * @fileoverview Travnex support model schema definitions.
 *
 * The Travnex Support Model Registry maintains a curated list of LLM models from various providers
 * (OpenAI, Anthropic, etc.) that are supported by the platform. This registry includes model metadata,
 * capabilities, and associated voices/languages for configuration and deployment.
 *
 * @module service-configuration/support-llm
 */

/**
 * Zod schema for Travnex supported model configuration.
 *
 * Represents a language model registered in the Travnex platform's support registry. The registry
 * provides a centralized catalog of available models with their capabilities, supported languages,
 * and voices. Agent Configurations reference these models via modelId.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Agent Configuration (modelId reference)
 * - **Purpose**: Central registry of supported LLM models with their capabilities
 * - **Model Types**: TEXT (text-only), VOICE (speech), MULTI_MODE (combined), etc.
 * - **Providers**: OpenAI, Anthropic, Google, ElevenLabs, and other LLM proprietors
 *
 * **Model Lifecycle:**
 * - **Active**: Available for new deployments (discontinued: false)
 * - **Discontinued**: Legacy support only, not recommended for new deployments (discontinued: true)
 *
 * @typedef {Object} TravnexSupportModelProperties
 * @property {string} modelId - Unique identifier for the model in the Travnex registry (e.g., 'gpt-4-turbo', 'claude-3-sonnet', 'eleven-labs-multilingual-v2')
 * @property {SupportedProprietor} proprietor - Model proprietor/provider organization (OPENAI, ANTHROPIC, GOOGLE, ELEVENLABS, etc.)
 * @property {string} name - Human-readable name of the model for display in UI (e.g., 'GPT-4 Turbo', 'Claude 3 Sonnet', 'ElevenLabs Multilingual v2')
 * @property {string} [provider_model_id] - Original model ID from the provider if different from Travnex modelId (e.g., 'gpt-4-1106-preview' for OpenAI's internal ID)
 * @property {string} description - Description of the model's capabilities, use cases, strengths, and limitations for selection guidance
 * @property {LLMType} type - Type of LLM functionality (TEXT for text generation, VOICE for TTS, MULTI_MODE for combined text/voice, etc.)
 * @property {boolean} discontinued - Whether this model has been discontinued and is only available for legacy support (default: false)
 * @property {Voice[] | null} [supportedVoices] - Array of voice configurations supported by this model (populated for TTS/voice models, null for text-only models)
 * @property {Language[] | null} [supportLanguages] - Array of languages supported by this model for processing and generation (null if language-agnostic)
 *
 * @example
 * ```typescript
 * const supportModel: TravnexSupportModel = {
 *   modelId: 'gpt-4-turbo',
 *   proprietor: SupportedProprietor.OPENAI,
 *   name: 'GPT-4 Turbo',
 *   provider_model_id: 'gpt-4-1106-preview',
 *   description: 'Latest GPT-4 model with improved performance',
 *   type: LLMType.TEXT,
 *   discontinued: false,
 *   supportedVoices: null,
 *   supportLanguages: [
 *     { languageId: 'en', name: 'English', code: 'en-US', isDefault: true }
 *   ]
 * };
 * ```
 */
export const TravnexSupportModelSchema = z.object({
    modelId: z.string().describe("Unique identifier for the model in the Travnex registry, used in Agent Configuration references (e.g., 'gpt-4-turbo', 'claude-3-sonnet', 'whisper-v3')"),
    proprietor: z.enum(SupportedProprietor).describe("Model proprietor/provider organization that developed and maintains the model (OPENAI, ANTHROPIC, GOOGLE, ELEVENLABS, SIGNALWIRE, etc.)"),
    name: z.string().describe("Human-readable name of the model for display in administrative interfaces and model selection UI (e.g., 'GPT-4 Turbo', 'Claude 3 Sonnet')"),
    provider_model_id: z.string().optional().describe("Original model identifier from the provider's system if different from Travnex modelId (e.g., 'gpt-4-1106-preview' for OpenAI's internal versioning)"),
    description: z.string().describe("Comprehensive description of the model's capabilities, recommended use cases, strengths, limitations, and selection guidance for administrators"),
    type: z.enum(LLMType).describe("Type of LLM functionality provided by this model (TEXT for text generation, VOICE for speech synthesis, STT for speech recognition, MULTI_MODE for combined capabilities)"),
    discontinued: z.boolean().optional().default(false).describe("Whether this model has been discontinued by the provider and is only available for legacy support of existing deployments (not recommended for new deployments)"),
    supportedVoices: z.array(VoiceSchema).optional().nullable().describe("Array of voice configurations supported by this model (populated for TTS and voice models with available voice options, null for text-only models)"),
    supportLanguages: z.array(LanguageSchema).optional().nullable().describe("Array of languages supported by this model for processing, generation, and understanding (null if model is language-agnostic or supports all languages)"),
});

/**
 * Type definition for Travnex support model.
 *
 * Represents a complete model configuration in the Travnex support registry.
 */
export type TravnexSupportModel = z.infer<typeof TravnexSupportModelSchema>;
