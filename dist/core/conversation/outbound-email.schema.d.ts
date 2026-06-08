import { z } from "zod";
import { EmailStatus } from "../type-definitions";
/**
 * @fileoverview Outbound email request and delivery tracking schema definitions.
 * @module conversation/outbound-email
 *
 * Email requests represent outbound email communications sent through the platform.
 * Supports scheduling, templates, attachments, and delivery tracking with retry logic.
 */
/**
 * Email recipient schema (embedded in EmailRequestSchema).
 *
 * @see EmailRequestSchema - Uses this for recipient arrays
 */
export declare const EmailRecipientSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EmailRecipient = z.infer<typeof EmailRecipientSchema>;
/**
 * Email attachment schema (embedded in EmailRequestSchema).
 *
 * @see EmailRequestSchema - Uses this for file attachments
 */
export declare const EmailAttachmentSchema: z.ZodObject<{
    filename: z.ZodString;
    content: z.ZodString;
    contentType: z.ZodString;
}, z.core.$strip>;
export type EmailAttachment = z.infer<typeof EmailAttachmentSchema>;
/**
 * Email request schema.
 *
 * @typedef {Object} EmailRequest
 * @property {string} [emailConfigurationId] - Email configuration for sender settings. May be provided or system falls back to default platform email
 * @property {string} [configuredEmailAddress] - Configured sender email address. May be provided or system falls back to default platform email
 * @property {string} [templateId] - Pre-defined template ID for structured content
 * @property {Array} to - Primary recipients (required, at least one)
 * @property {Array} [cc] - Carbon copy recipients
 * @property {Array} [bcc] - Blind carbon copy recipients
 * @property {string} [replyTo] - Reply-to email address
 * @property {string} subject - Email subject line
 * @property {string} bodyHtml - HTML content of the email body
 * @property {string} [bodyText] - Plain text alternative content
 * @property {Object} [variables] - Template variable substitutions
 * @property {Array} [attachments] - File attachments
 * @property {number} [scheduledAt] - Unix timestamp for scheduled delivery
 * @property {string} [serviceConversationConfigId] - Linked conversation record
 * @property {Object} [metadata] - Additional custom metadata
 */
export declare const EmailRequestSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    emailConfigurationId: z.ZodOptional<z.ZodString>;
    configuredEmailAddress: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodString>;
    to: z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    cc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    bcc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    replyTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodString;
    bodyHtml: z.ZodString;
    bodyText: z.ZodOptional<z.ZodString>;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    attachments: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        filename: z.ZodString;
        content: z.ZodString;
        contentType: z.ZodString;
    }, z.core.$strip>>>>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof EmailStatus>>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryCount: z.ZodDefault<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating a new email request.
 * Omits auto-generated fields.
 */
export declare const CreateEmailRequestSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof EmailStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    subject: z.ZodString;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
    emailConfigurationId: z.ZodOptional<z.ZodString>;
    configuredEmailAddress: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodString>;
    cc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    bcc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    replyTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bodyHtml: z.ZodString;
    bodyText: z.ZodOptional<z.ZodString>;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    attachments: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        filename: z.ZodString;
        content: z.ZodString;
        contentType: z.ZodString;
    }, z.core.$strip>>>>;
    retryCount: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Schema for updating an existing email request.
 * All fields optional except id (required).
 */
export declare const UpdateEmailRequestSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof EmailStatus>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    to: z.ZodOptional<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    subject: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    maxRetries: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    retryDelayMinutes: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    emailConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    configuredEmailAddress: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    templateId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    cc: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>>;
    bcc: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>>;
    replyTo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    bodyHtml: z.ZodOptional<z.ZodString>;
    bodyText: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    variables: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    attachments: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        filename: z.ZodString;
        content: z.ZodString;
        contentType: z.ZodString;
    }, z.core.$strip>>>>>;
    retryCount: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Email record schema for tracking delivery status.
 *
 * Records individual delivery events and status updates from email providers.
 * Links to the original EmailRequest and tracks provider-specific message IDs.
 *
 * @typedef {Object} EmailRecord
 * @property {string} emailRequestId - Reference to the original email request
 * @property {string} providerMessageId - Provider-specific message ID
 * @property {EmailStatus} status - Current delivery status
 * @property {number} [sentAt] - Timestamp when email was sent
 * @property {number} [deliveredAt] - Timestamp when email was delivered
 * @property {number} [bouncedAt] - Timestamp when email bounced
 * @property {string} [errorCode] - Provider error code if failed
 * @property {string} [errorMessage] - Provider error message if failed
 * @property {Object} [metadata] - Additional provider metadata
 */
export declare const EmailRecordSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    emailRequestId: z.ZodString;
    providerMessageId: z.ZodString;
    status: z.ZodEnum<typeof EmailStatus>;
    sentAt: z.ZodOptional<z.ZodNumber>;
    deliveredAt: z.ZodOptional<z.ZodNumber>;
    bouncedAt: z.ZodOptional<z.ZodNumber>;
    errorCode: z.ZodOptional<z.ZodString>;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Email request result schema.
 * Response payload after submitting an email request.
 */
export declare const EmailRequestResultSchema: z.ZodObject<{
    success: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        emailConfigurationId: z.ZodOptional<z.ZodString>;
        configuredEmailAddress: z.ZodOptional<z.ZodString>;
        templateId: z.ZodOptional<z.ZodString>;
        to: z.ZodArray<z.ZodObject<{
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        cc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>>;
        bcc: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>>;
        replyTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        subject: z.ZodString;
        bodyHtml: z.ZodString;
        bodyText: z.ZodOptional<z.ZodString>;
        variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        attachments: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            filename: z.ZodString;
            content: z.ZodString;
            contentType: z.ZodString;
        }, z.core.$strip>>>>;
        scheduledAt: z.ZodOptional<z.ZodNumber>;
        serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodDefault<z.ZodEnum<typeof EmailStatus>>;
        maxRetries: z.ZodOptional<z.ZodNumber>;
        retryCount: z.ZodDefault<z.ZodNumber>;
        retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    error_message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type EmailRequest = z.infer<typeof EmailRequestSchema>;
export type CreateEmailRequest = z.infer<typeof CreateEmailRequestSchema>;
export type UpdateEmailRequest = z.infer<typeof UpdateEmailRequestSchema>;
export type EmailRecord = z.infer<typeof EmailRecordSchema>;
export type EmailRequestResult = z.infer<typeof EmailRequestResultSchema>;
/**
 * Email request filter options.
 * @interface EmailRequestFilters
 */
export interface EmailRequestFilters {
    /** Text search across subject */
    search?: string;
    /** Filter by email configuration ID */
    emailConfigurationId?: string;
    /** Filter by configured email address */
    configuredEmailAddress?: string;
    /** Filter by template ID */
    templateId?: string;
    /** Filter by delivery status */
    status?: EmailStatus;
    /** Filter by linked conversation ID */
    serviceConversationConfigId?: string;
    /** Filter by scheduled date range */
    scheduledAtRange?: {
        from?: number;
        to?: number;
    };
}
/**
 * Email request sorting options.
 * @interface EmailRequestSorting
 */
export interface EmailRequestSorting {
    /** Field to sort by */
    field: "createdAt" | "scheduledAt" | "status" | "subject" | "retryCount";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Email request query options.
 * @interface EmailRequestQueryOptions
 */
export interface EmailRequestQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: EmailRequestFilters;
    /** Optional sorting */
    sorting?: EmailRequestSorting;
}
/**
 * Email record filter options.
 * @interface EmailRecordFilters
 */
export interface EmailRecordFilters {
    /** Filter by email request ID */
    emailRequestId?: string;
    /** Filter by provider message ID */
    providerMessageId?: string;
    /** Filter by delivery status */
    status?: EmailStatus;
    /** Filter by sent date range */
    sentAtRange?: {
        from?: number;
        to?: number;
    };
    /** Filter by delivered date range */
    deliveredAtRange?: {
        from?: number;
        to?: number;
    };
}
/**
 * Email record sorting options.
 * @interface EmailRecordSorting
 */
export interface EmailRecordSorting {
    /** Field to sort by */
    field: "createdAt" | "status" | "sentAt" | "deliveredAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Email record query options.
 * @interface EmailRecordQueryOptions
 */
export interface EmailRecordQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: EmailRecordFilters;
    /** Optional sorting */
    sorting?: EmailRecordSorting;
}
