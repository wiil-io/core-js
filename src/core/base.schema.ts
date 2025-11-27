import { z } from 'zod';
// import { TimezoneStringSchema } from './platform-regional-config';

/**
 * Zod schema for BaseModel with audit fields
 */
export const BaseModelSchema = z.object({
    id: z.string().describe("Unique identifier for the model"),
    createdAt: z.number().optional().describe("Date when the model was created"),
    updatedAt: z.number().optional().describe("Date when the model was last updated"),
    version: z.number().optional().describe("Version number for optimistic concurrency control"),
});


/**
 * Zod schema for address validation.
 */
export const AddressSchema = z.object({
    street: z.string().min(2, { message: "Street must be 2 or more characters long" }).describe("Primary street address including house/building number"),
    street2: z.string().optional().describe("Secondary address line for apartment, suite, or unit numbers"),
    city: z.string().min(2, { message: "City must be 2 or more characters long" }).describe("City or municipality name"),
    state: z.string().min(2, { message: "State must be 2 or more characters long" }).describe("State, province, or region code"),
    postalCode: z.string().min(2, { message: "Postal code must be 2 or more characters long" }).describe("ZIP code, postal code, or equivalent"),
    country: z.string().min(2, { message: "Country must be 3 or more characters long" }).describe("ISO country code or country name"),
});

/**
 * Language code schema (ISO 639-1 format)
 */
export const LanguageCodeSchema = z.string().min(2).max(5).describe("ISO 639-1/639-2 language code with optional region (e.g., 'en', 'es', 'zh-CN')"); // e.g., "en", "es", "zh-CN"


export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type BaseModelSchema = z.infer<typeof BaseModelSchema>;