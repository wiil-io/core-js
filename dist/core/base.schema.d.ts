import { z } from 'zod';
/**
 * Zod schema for BaseModel with audit fields
 */
export declare const BaseModelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Zod schema for address validation.
 */
export declare const AddressSchema: z.ZodObject<{
    street: z.ZodString;
    street2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
}, z.core.$strip>;
export declare const phoneRegex: RegExp;
/**
 * Reusable phone number schema with international format support.
 * Accepts formats: +1-234-567-8900, (123) 456-7890, 123.456.7890, etc.
 */
export declare const PhoneNumberSchema: z.ZodString;
/**
 * Language code schema (ISO 639-1 format)
 */
export declare const LanguageCodeSchema: z.ZodString;
export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type PhoneNumber = z.infer<typeof PhoneNumberSchema>;
export type BaseModel = z.infer<typeof BaseModelSchema>;
