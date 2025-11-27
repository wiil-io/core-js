import { z } from 'zod';

/**
 * @fileoverview Voice and language configuration schema definitions.
 * @module service-configuration/voice-language
 */

/**
 * Enum schema for voice gender classification.
 *
 * @example
 * ```typescript
 * const gender: VoiceGender = 'female';
 * ```
 */
const VoiceGender = z.enum(['male', 'female', 'neutral']);

/**
 * Type definition for voice gender.
 */
export type VoiceGender = z.infer<typeof VoiceGender>;

/**
 * Zod schema for voice configuration.
 *
 * Represents a voice option available for text-to-speech synthesis.
 *
 * @typedef {Object} VoiceProperties
 * @property {string} voiceId - Unique identifier for the voice
 * @property {string} name - Human-readable name of the voice
 * @property {string} description - Description of the voice characteristics
 * @property {VoiceGender} gender - Gender classification of the voice
 * @property {string | null} [language] - Language code this voice is optimized for
 * @property {boolean} isDefault - Whether this is the default voice (default: false)
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
const VoiceSchema = z.object({
    voiceId: z.string().min(1, 'Voice ID is required'),
    name: z.string().min(1, 'Voice name is required'),
    description: z.string().min(1, 'Voice description is required'),
    gender: VoiceGender,
    language: z.string().optional().nullable(),
    isDefault: z.boolean().default(false),
});

/**
 * Type definition for voice configuration.
 */
export type Voice = z.infer<typeof VoiceSchema>;

/**
 * Zod schema for language configuration.
 *
 * Represents a language supported by the platform for speech processing.
 *
 * @typedef {Object} LanguageProperties
 * @property {string} languageId - Unique identifier for the language
 * @property {string} name - Human-readable name of the language
 * @property {string} code - Language code (e.g., "en-US", "es-ES")
 * @property {boolean} [isDefault=false] - Whether this is the default language
 * @property {boolean} [isExperimental=false] - Whether this language is in experimental support
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
export const LanguageSchema = z.object({
    languageId: z.string().min(1, 'Language ID is required'),
    name: z.string().min(1, 'Language name is required'),
    code: z.string(),
    isDefault: z.boolean().optional().default(false),
    isExperimental: z.boolean().optional().default(false),
});

/**
 * Type definition for language configuration.
 */
export type Language = z.infer<typeof LanguageSchema>;

/**
 * Zod schema for an array of supported voices.
 *
 * Requires at least one voice to be provided.
 */
const SupportedVoicesSchema = z.array(VoiceSchema).min(1, 'At least one voice must be supported');

/**
 * Type definition for supported voices array.
 */
export type SupportedVoices = z.infer<typeof SupportedVoicesSchema>;

/**
 * Zod schema for an array of supported languages.
 *
 * Requires at least one language to be provided.
 */
export const SupportedLanguagesSchema = z.array(LanguageSchema).min(1, 'At least one language must be supported');

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
export const validateSupportedVoices = (voices: unknown): SupportedVoices => {
    return SupportedVoicesSchema.parse(voices);
};

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
export const isValidVoice = (voice: unknown): voice is Voice => {
    return VoiceSchema.safeParse(voice).success;
};

// Export schemas
export { VoiceSchema, VoiceGender, SupportedVoicesSchema };
