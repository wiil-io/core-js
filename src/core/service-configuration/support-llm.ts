import { z } from "zod";
import { LLMType, SupportedProprietor } from "../type-definitions/service-config.definitions";
import { LanguageSchema, VoiceSchema } from "./voice-language.schema";

/**
 * @fileoverview Travnex support model schema definitions.
 * @module service-configuration/support-llm
 */

/**
 * Zod schema for Travnex supported model configuration.
 *
 * Represents a model registered in the Travnex platform's support registry,
 * including model metadata, capabilities, and supported voices/languages.
 *
 * @typedef {Object} TravnexSupportModelProperties
 * @property {string} modelId - Unique identifier for the model in Travnex registry
 * @property {SupportedProprietor} proprietor - Model proprietor/provider (OpenAI, Anthropic, etc.)
 * @property {string} name - Human-readable name of the model
 * @property {string} [provider_model_id] - Original model ID from the provider (if different from modelId)
 * @property {string} description - Description of the model's capabilities and use cases
 * @property {LLMType} type - Type of LLM functionality (text, voice, multi-mode, etc.)
 * @property {boolean} discontinued - Whether this model is discontinued (default: false)
 * @property {Voice[] | null} [supportedVoices] - Array of voices supported by this model (for TTS models)
 * @property {Language[] | null} [supportLanguages] - Array of languages supported by this model
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
    modelId: z.string(),
    proprietor: z.enum(SupportedProprietor),
    name: z.string(),
    provider_model_id: z.string().optional(),
    description: z.string(),
    type: z.enum(LLMType),
    discontinued: z.boolean().optional().default(false),
    supportedVoices: z.array(VoiceSchema).optional().nullable(),
    supportLanguages: z.array(LanguageSchema).optional().nullable(),
});

/**
 * Type definition for Travnex support model.
 *
 * Represents a complete model configuration in the Travnex support registry.
 */
export type TravnexSupportModel = z.infer<typeof TravnexSupportModelSchema>;
