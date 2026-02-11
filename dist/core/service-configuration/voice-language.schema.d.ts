import { z } from 'zod';
/**
 * @fileoverview Voice and language configuration schema definitions.
 *
 * Voice and language configurations define the supported voices and languages for text-to-speech
 * synthesis and speech-to-text recognition. These configurations are referenced by support models
 * and provisioning chains for voice-based interactions.
 *
 * @module service-configuration/voice-language
 */
/**
 * Enum schema for voice gender classification.
 *
 * Categorizes synthetic voices by gender characteristics for user preference and selection.
 *
 * @example
 * ```typescript
 * const gender: VoiceGender = 'female';
 * ```
 */
declare const VoiceGender: z.ZodEnum<{
    neutral: "neutral";
    male: "male";
    female: "female";
}>;
/**
 * Type definition for voice gender.
 */
export type VoiceGender = z.infer<typeof VoiceGender>;
/**
 * Zod schema for voice configuration.
 *
 * Represents a synthetic voice option available for text-to-speech (TTS) synthesis. Voices are
 * associated with TTS models in the Wiil support registry and selected in provisioning chains
 * for voice-based deployments.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: WiilSupportModel (supportedVoices array for TTS models)
 * - **Referenced In**: TtsModelConfig (voiceId selection) and ProvisioningConfigChain
 * - **Purpose**: Defines available voice options for agent speech synthesis
 *
 * **Voice Characteristics:**
 * - **Identity**: Unique ID and human-readable name
 * - **Gender**: Male, female, or neutral classification
 * - **Language**: Optimal language for the voice
 * - **Default**: Flag for platform default selection
 *
 * @typedef {Object} VoiceProperties
 * @property {string} voiceId - Unique identifier for the voice used in configurations (e.g., 'adam', 'rachel', 'en-us-standard-a')
 * @property {string} name - Human-readable name of the voice for display in UI (e.g., 'Adam', 'Rachel', 'Google Standard A')
 * @property {string} description - Description of the voice characteristics including tone, accent, and use cases (e.g., 'Deep, authoritative male voice', 'Warm, friendly female voice')
 * @property {VoiceGender} gender - Gender classification of the voice (male, female, or neutral) for user preference filtering
 * @property {string | null} [language] - Language code this voice is optimized for (e.g., 'en-US', 'es-ES', 'fr-FR'), null if multi-language
 * @property {boolean} isDefault - Whether this is the default voice for its language or model (default: false)
 *
 * @example
 * ```typescript
 * const voice: Voice = {
 *   voiceId: 'adam',
 *   name: 'Adam',
 *   description: 'Deep, authoritative male voice',
 *   gender: 'male',
 *   language: 'en-US',
 *   isDefault: true
 * };
 * ```
 */
declare const VoiceSchema: z.ZodObject<{
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
}, z.core.$strip>;
/**
 * Type definition for voice configuration.
 */
export type Voice = z.infer<typeof VoiceSchema>;
/**
 * Zod schema for language configuration.
 *
 * Represents a language supported by the platform for speech processing (STT/TTS). Languages are
 * associated with models in the Wiil support registry and selected in provisioning chains
 * for voice-based and text-based interactions.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: WiilSupportModel (supportLanguages array)
 * - **Referenced In**: SttModelConfig and TtsModelConfig (defaultLanguage selection)
 * - **Purpose**: Defines supported languages for speech recognition and synthesis
 *
 * **Language Support Levels:**
 * - **Production**: Fully supported, tested languages (isExperimental: false)
 * - **Experimental**: Beta or limited support languages (isExperimental: true)
 * - **Default**: Platform default for automatic selection (isDefault: true)
 *
 * @typedef {Object} LanguageProperties
 * @property {string} languageId - Unique identifier for the language (e.g., 'en-us', 'es-es', 'fr-fr')
 * @property {string} name - Human-readable name of the language for display (e.g., 'English (United States)', 'Spanish (Spain)')
 * @property {string} code - Standard language code in ISO 639-1 format with optional region (e.g., 'en-US', 'es-ES', 'fr-FR')
 * @property {boolean} [isDefault=false] - Whether this is the default language for the platform or model, used for automatic language selection
 * @property {boolean} [isExperimental=false] - Whether this language is in experimental/beta support with potentially limited accuracy or features
 *
 * @example
 * ```typescript
 * const language: Language = {
 *   languageId: 'en-us',
 *   name: 'English (United States)',
 *   code: 'en-US',
 *   isDefault: true,
 *   isExperimental: false
 * };
 * ```
 */
export declare const LanguageSchema: z.ZodObject<{
    languageId: z.ZodString;
    name: z.ZodString;
    code: z.ZodString;
    isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
/**
 * Type definition for language configuration.
 */
export type Language = z.infer<typeof LanguageSchema>;
/**
 * Zod schema for an array of supported voices.
 *
 * Requires at least one voice to be provided.
 */
declare const SupportedVoicesSchema: z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>>;
/**
 * Type definition for supported voices array.
 */
export type SupportedVoices = z.infer<typeof SupportedVoicesSchema>;
/**
 * Zod schema for an array of supported languages.
 *
 * Requires at least one language to be provided.
 */
export declare const SupportedLanguagesSchema: z.ZodArray<z.ZodObject<{
    languageId: z.ZodString;
    name: z.ZodString;
    code: z.ZodString;
    isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>>;
/**
 * Type definition for supported languages array.
 */
export type SupportedLanguages = z.infer<typeof SupportedLanguagesSchema>;
/**
 * Validation function for supported voices.
 *
 * Parses and validates an array of voices, throwing an error if validation fails.
 *
 * @param voices - Unknown input to validate as supported voices
 * @returns Validated array of voices
 * @throws {ZodError} If validation fails
 *
 * @example
 * ```typescript
 * const voices = validateSupportedVoices([
 *   { voiceId: 'adam', name: 'Adam', description: 'Male voice', gender: 'male', isDefault: true }
 * ]);
 * ```
 */
export declare const validateSupportedVoices: (voices: unknown) => SupportedVoices;
/**
 * Type guard function to check if an object is a valid Voice.
 *
 * @param voice - Unknown input to check
 * @returns True if the input is a valid Voice, false otherwise
 *
 * @example
 * ```typescript
 * if (isValidVoice(data)) {
 *   console.log(data.voiceId); // TypeScript knows data is a Voice
 * }
 * ```
 */
export declare const isValidVoice: (voice: unknown) => voice is Voice;
export { VoiceSchema, VoiceGender, SupportedVoicesSchema };
