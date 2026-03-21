import { z } from "zod";
/**
 * @fileoverview Outbound SMS request schema definitions.
 * @module conversation/outbound-sms
 */
/**
 * SMS request schema.
 *
 * @typedef {Object} SmsRequest
 * @property {string} [phoneConfigurationId] - Phone configuration for sender number
 * @property {string} to - Recipient phone number in E.164 format
 * @property {string} [from] - Sender phone number in E.164 format
 * @property {string} body - Text content of the SMS message
 * @property {string} [templateId] - Pre-defined template ID for structured content
 * @property {Object} [variables] - Template variable substitutions
 * @property {number} [scheduledAt] - Unix timestamp for scheduled delivery
 * @property {string} [serviceConversationConfigId] - Linked conversation record
 * @property {Object} [metadata] - Additional custom metadata
 */
export declare const SmsRequestSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodString;
    from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodString;
    templateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variables: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new SMS request.
 * Omits auto-generated fields.
 */
export declare const CreateSmsRequestSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodString;
    from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    templateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variables: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    body: z.ZodString;
}, z.core.$strip>;
export declare const SmsRequestResultSchema: z.ZodObject<{
    success: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        to: z.ZodString;
        from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        body: z.ZodString;
        templateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        variables: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
        scheduledAt: z.ZodOptional<z.ZodNumber>;
        serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, z.core.$strip>>>;
    error_message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type SmsRequest = z.infer<typeof SmsRequestSchema>;
export type CreateSmsRequest = z.infer<typeof CreateSmsRequestSchema>;
export type SmsRequestResult = z.infer<typeof SmsRequestResultSchema>;
