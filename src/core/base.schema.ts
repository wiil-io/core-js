import { z } from 'zod';
// import { TimezoneStringSchema } from './platform-regional-config';

/**
 * Zod schema for BaseModel with audit fields
 */
export const BaseModelSchema = z.object({
    id: z.string().describe("Unique identifier for the model"),
    createdAt: z.number().optional().describe("Date when the model was created"),
    updatedAt: z.number().optional().describe("Date when the model was last updated")
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

export const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(\d{1,3}\)[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

/**
 * Reusable phone number schema with international format support.
 * Accepts formats: +1-234-567-8900, (123) 456-7890, 123.456.7890, etc.
 */
export const PhoneNumberSchema = z.string()
    .regex(phoneRegex, { message: "Invalid phone number format" })
    .describe("Phone number in international or local format");


/**
 * Language code schema (ISO 639-1 format)
 */
export const LanguageCodeSchema = z.string().min(2).max(5).describe("ISO 639-1/639-2 language code with optional region (e.g., 'en', 'es', 'zh-CN')"); // e.g., "en", "es", "zh-CN"

export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type PhoneNumber = z.infer<typeof PhoneNumberSchema>;
export type BaseModel = z.infer<typeof BaseModelSchema>;