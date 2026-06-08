import { z } from "zod";
import { SmsStatus } from "../type-definitions";
/**
 * @fileoverview Outbound SMS request schema definitions.
 * @module conversation/outbound-sms
 *
 * SMS requests represent outbound text message communications sent through the platform.
 * Supports scheduling, templates, delivery tracking, and retry logic for failed deliveries.
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
 * @property {SmsStatus} status - Current delivery status
 * @property {string} [serviceConversationConfigId] - Linked conversation record
 * @property {number} [maxRetries] - Maximum retry attempts (0-5)
 * @property {number} retryCount - Current retry attempt count
 * @property {number} [retryDelayMinutes] - Delay between retries in minutes
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
    status: z.ZodDefault<z.ZodEnum<typeof SmsStatus>>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryCount: z.ZodDefault<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new SMS request.
 * Omits auto-generated fields.
 */
export declare const CreateSmsRequestSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof SmsStatus>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodString;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
    templateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variables: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    retryCount: z.ZodDefault<z.ZodNumber>;
    body: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing SMS request.
 * All fields optional except id (required).
 */
export declare const UpdateSmsRequestSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof SmsStatus>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>>;
    phoneConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    from: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    to: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    maxRetries: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    retryDelayMinutes: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    templateId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    variables: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>>;
    retryCount: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    body: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * SMS request result schema.
 * Response payload after submitting an SMS request.
 */
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
        status: z.ZodDefault<z.ZodEnum<typeof SmsStatus>>;
        maxRetries: z.ZodOptional<z.ZodNumber>;
        retryCount: z.ZodDefault<z.ZodNumber>;
        retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    }, z.core.$strip>>>;
    error_message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type SmsRequest = z.infer<typeof SmsRequestSchema>;
export type CreateSmsRequest = z.infer<typeof CreateSmsRequestSchema>;
export type UpdateSmsRequest = z.infer<typeof UpdateSmsRequestSchema>;
export type SmsRequestResult = z.infer<typeof SmsRequestResultSchema>;
/**
 * SMS request filter options.
 * @interface SmsRequestFilters
 */
export interface SmsRequestFilters {
    /** Text search across phone numbers and body */
    search?: string;
    /** Filter by phone configuration ID */
    phoneConfigurationId?: string;
    /** Filter by recipient phone number */
    to?: string;
    /** Filter by sender phone number */
    from?: string;
    /** Filter by template ID */
    templateId?: string;
    /** Filter by delivery status */
    status?: SmsStatus;
    /** Filter by linked conversation ID */
    serviceConversationConfigId?: string;
    /** Filter by scheduled date range */
    scheduledAtRange?: {
        from?: number;
        to?: number;
    };
}
/**
 * SMS request sorting options.
 * @interface SmsRequestSorting
 */
export interface SmsRequestSorting {
    /** Field to sort by */
    field: "createdAt" | "scheduledAt" | "status" | "retryCount";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * SMS request query options.
 * @interface SmsRequestQueryOptions
 */
export interface SmsRequestQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: SmsRequestFilters;
    /** Optional sorting */
    sorting?: SmsRequestSorting;
}
