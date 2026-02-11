import { z } from "zod";
import { LLMType, SupportedProprietor } from "../type-definitions/service-config.definitions";
/**
 * @fileoverview WIIL Platform support model schema definitions.
 *
 * The WIIL Platform Support Model Registry maintains a curated list of LLM models from various providers
 * (OpenAI, Anthropic, etc.) that are supported by the platform. This registry includes model metadata,
 * capabilities, and associated voices/languages for configuration and deployment.
 *
 * @module service-configuration/support-llm
 */
/**
 * Zod schema for WIIL Platform supported model configuration.
 *
 * Represents a language model registered in the WIIL Platform's support registry. The registry
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
 * **Model ID Distinction:**
 * - **modelId**: WIIL Platform unique model identifier (NOT the provider's model ID)
 * - **provider_model_id**: Original model ID from the provider's system (e.g., 'gpt-4-1106-preview' from OpenAI)
 *
 * @typedef {Object} WIILSupportModelProperties
 * @property {string} modelId - WIIL Platform unique model identifier used in Agent Configuration references (e.g., 'YUSI21217J1', 'EYUW&*EU@H$#')
 * @property {SupportedProprietor} proprietor - Model proprietor/provider organization (OPENAI, ANTHROPIC, GOOGLE, ELEVENLABS, etc.)
 * @property {string} name - Human-readable name of the model for display in UI (e.g., 'GPT-4 Turbo', 'Claude 3 Sonnet', 'ElevenLabs Multilingual v2')
 * @property {string} [provider_model_id] - Original model ID from the provider's system (e.g., 'gpt-4-1106-preview' for OpenAI, 'claude-3-sonnet-20240229' for Anthropic)
 * @property {string} description - Description of the model's capabilities, use cases, strengths, and limitations for selection guidance
 * @property {LLMType} type - Type of LLM functionality (TEXT for text generation, VOICE for TTS, MULTI_MODE for combined text/voice, etc.)
 * @property {boolean} discontinued - Whether this model has been discontinued and is only available for legacy support (default: false)
 * @property {Voice[] | null} [supportedVoices] - Array of voice configurations supported by this model (populated for TTS/voice models, null for text-only models)
 * @property {Language[] | null} [supportLanguages] - Array of languages supported by this model for processing and generation (null if language-agnostic)
 *
 * @example
 * ```typescript
 * const supportModel: WIILSupportModel = {
 *   modelId: 'YUSI21217J1',
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
export declare const WiilSupportModelSchema: z.ZodObject<{
    modelId: z.ZodString;
    proprietor: z.ZodEnum<typeof SupportedProprietor>;
    name: z.ZodString;
    provider_model_id: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    type: z.ZodEnum<typeof LLMType>;
    discontinued: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    supportedVoices: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        voiceId: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        gender: z.ZodEnum<{
            neutral: "neutral";
            male: "male";
            female: "female";
        }>;
        language: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    supportLanguages: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        languageId: z.ZodString;
        name: z.ZodString;
        code: z.ZodString;
        isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
/**
 * Type definition for WIIL Platform support model.
 *
 * Represents a complete model configuration in the WIIL Platform support registry.
 */
export type WiilSupportModel = z.infer<typeof WiilSupportModelSchema>;
