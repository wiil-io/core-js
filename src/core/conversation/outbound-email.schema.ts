import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { EmailStatus } from "../type-definitions";

/**
 * @fileoverview Outbound email request and delivery tracking schema definitions.
 * @module conversation/outbound-email
 *
 * Email requests represent outbound email communications sent through the platform.
 * Supports scheduling, templates, attachments, and delivery tracking with retry logic.
 */

// ============================================================================
// EMAIL RECIPIENT SCHEMA
// ============================================================================

/**
 * Email recipient schema (embedded in EmailRequestSchema).
 *
 * @see EmailRequestSchema - Uses this for recipient arrays
 */
export const EmailRecipientSchema = z.object({
    email: z.string().email("Must be a valid email address").describe("Email address of the recipient in standard format (e.g., 'user@example.com'). Must be a valid, deliverable email address."),
    name: z.string().optional().describe("Optional display name for the recipient shown in email clients (e.g., 'John Smith'). When provided, email displays as 'John Smith <user@example.com>'."),
});

export type EmailRecipient = z.infer<typeof EmailRecipientSchema>;

// ============================================================================
// EMAIL ATTACHMENT SCHEMA
// ============================================================================

/**
 * Email attachment schema (embedded in EmailRequestSchema).
 *
 * @see EmailRequestSchema - Uses this for file attachments
 */
export const EmailAttachmentSchema = z.object({
    filename: z.string().min(1, "Filename is required").describe("Name of the attachment file as displayed to the recipient (e.g., 'invoice.pdf', 'report.xlsx'). Include appropriate file extension."),
    content: z.string().min(1, "Content is required").describe("Base64-encoded file content. Encode binary files to base64 string for safe transmission in JSON payloads."),
    contentType: z.string().min(1, "Content type is required").describe("MIME type of the attachment indicating file format (e.g., 'application/pdf', 'image/png', 'text/csv'). Ensures correct handling by email clients."),
});

export type EmailAttachment = z.infer<typeof EmailAttachmentSchema>;

// ============================================================================
// EMAIL REQUEST SCHEMA
// ============================================================================

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
export const EmailRequestSchema = BaseModelSchema.safeExtend({
    emailConfigurationId: z.string().optional().describe("Email configuration ID for sender settings, API credentials, and domain authentication (references EmailConfiguration). May be provided or system falls back to default platform email."),
    configuredEmailAddress: z.string().optional().describe("Configured sender email address for this request. May be provided or system falls back to default platform email."),
    templateId: z.string().optional().describe("Pre-defined email template ID for structured content with variable placeholders (references EmailTemplate). Template content merged with variables field."),

    // Recipients
    to: z.array(EmailRecipientSchema).min(1, "At least one recipient is required").describe("Array of primary email recipients. Each recipient includes email address and optional display name. At least one recipient required."),
    cc: z.array(EmailRecipientSchema).nullable().optional().describe("Array of carbon copy recipients who receive a copy of the email with visibility to other recipients. Use for stakeholders who should be informed."),
    bcc: z.array(EmailRecipientSchema).nullable().optional().describe("Array of blind carbon copy recipients who receive a copy without visibility to other recipients. Use for compliance, archiving, or discrete notifications."),
    replyTo: z.string().nullable().optional().describe("Reply-to email address that receives responses when recipients reply to this email. Useful for directing replies to support queues or specific team members."),

    // Content
    subject: z.string().min(1, "Subject is required").describe("Email subject line displayed in recipient inbox. Keep concise and descriptive (50-60 characters recommended). Supports variable substitution with {{variable}} syntax."),
    bodyHtml: z.string().min(1, "HTML body is required").describe("HTML content of the email body supporting rich formatting, images, links, and styling. Ensure HTML is well-formed and includes plain text fallback for accessibility."),
    bodyText: z.string().optional().describe("Plain text alternative content displayed when HTML cannot be rendered. Recommended for accessibility and email client compatibility. Auto-generated from HTML if omitted."),
    variables: z.record(z.string(), z.any()).optional().describe("Template variable substitutions as key-value pairs. Keys correspond to {{placeholder}} syntax in subject, bodyHtml, and bodyText fields."),
    attachments: z.array(EmailAttachmentSchema).nullable().optional().describe("Array of file attachments to include with the email. Each attachment includes filename, base64-encoded content, and MIME type. Total size should not exceed 25MB."),

    // Scheduling
    scheduledAt: z.number().optional().describe("Unix timestamp in milliseconds for scheduled email delivery. Email queued until this time, then sent automatically. Omit for immediate delivery."),
    serviceConversationConfigId: z.string().nullable().optional().describe("Linked conversation record ID for email thread tracking and conversation history aggregation (references ServiceConversationConfig). Enables email conversation threading."),

    // Status
    status: z.enum(EmailStatus).default(EmailStatus.QUEUED).describe("Current delivery status of the email request (queued, sent, delivered, bounced, failed, complained)."),

    // Retry configuration
    maxRetries: z.number().int().min(0).max(5).optional().describe("Maximum number of retry attempts if email delivery fails (0-5). Set to 0 to disable retries."),
    retryCount: z.number().int().min(0).max(5).default(0).describe("Current count of retry attempts made for this email request."),
    retryDelayMinutes: z.number().int().positive().optional().describe("Delay in minutes between retry attempts for failed deliveries."),

    // Extensibility
    metadata: z.record(z.string(), z.any()).optional().describe("Additional custom metadata as key-value pairs for campaign tracking, CRM integration, or application-specific data. Not processed by the platform."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new email request.
 * Omits auto-generated fields.
 */
export const CreateEmailRequestSchema = EmailRequestSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing email request.
 * All fields optional except id (required).
 */
export const UpdateEmailRequestSchema = CreateEmailRequestSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the EmailRequest to update"),
});

// ============================================================================
// EMAIL RECORD SCHEMA (DELIVERY TRACKING)
// ============================================================================

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
export const EmailRecordSchema = BaseModelSchema.safeExtend({
    emailRequestId: z.string().describe("Reference to the original EmailRequest this record tracks"),
    providerMessageId: z.string().describe("Provider-specific message ID from the email service (SendGrid, SES, etc.)"),
    status: z.enum(EmailStatus).describe("Current delivery status from provider webhooks"),
    sentAt: z.number().optional().describe("Unix timestamp when email was sent to provider"),
    deliveredAt: z.number().optional().describe("Unix timestamp when email was confirmed delivered"),
    bouncedAt: z.number().optional().describe("Unix timestamp when email bounced"),
    errorCode: z.string().optional().describe("Provider-specific error code if delivery failed"),
    errorMessage: z.string().optional().describe("Provider error message describing failure reason"),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional provider-specific metadata from webhooks"),
});

// ============================================================================
// EMAIL REQUEST RESULT SCHEMA
// ============================================================================

/**
 * Email request result schema.
 * Response payload after submitting an email request.
 */
export const EmailRequestResultSchema = z.object({
    success: z.boolean().optional().default(false).describe("Whether the email request was successful"),
    request: EmailRequestSchema.optional().nullable().describe("Original email request details"),
    error_message: z.string().optional().nullable().describe("Error message if the request failed"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type EmailRequest = z.infer<typeof EmailRequestSchema>;
export type CreateEmailRequest = z.infer<typeof CreateEmailRequestSchema>;
export type UpdateEmailRequest = z.infer<typeof UpdateEmailRequestSchema>;
export type EmailRecord = z.infer<typeof EmailRecordSchema>;
export type EmailRequestResult = z.infer<typeof EmailRequestResultSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
    scheduledAtRange?: { from?: number; to?: number };
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
    sentAtRange?: { from?: number; to?: number };
    /** Filter by delivered date range */
    deliveredAtRange?: { from?: number; to?: number };
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