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
/**
 * Extended base model schema with audit trail fields.
 *
 * Provides additional tracking for record creation, modification, and deletion
 * with user attribution and optimistic locking support. Use this schema for
 * entities requiring full audit compliance.
 *
 * @remarks
 * **Architecture Context:**
 * - **Extends**: BaseModelSchema with audit and versioning fields
 * - **Use Cases**: Outbound communications, transactional records, compliance-sensitive data
 * - **Soft Delete**: Uses deletedAt/deletedBy for recoverable deletion
 * - **Optimistic Locking**: Version field prevents concurrent modification conflicts
 */
export declare const BaseModelSchemaWithAudit: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    deletedAt: z.ZodOptional<z.ZodNumber>;
    deletedBy: z.ZodOptional<z.ZodString>;
    uniqueKey: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type PhoneNumber = z.infer<typeof PhoneNumberSchema>;
export type BaseModel = z.infer<typeof BaseModelSchema>;
export type BaseModelWithAudit = z.infer<typeof BaseModelSchemaWithAudit>;
