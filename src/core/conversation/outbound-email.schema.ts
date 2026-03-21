import { z } from "zod";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Outbound email request and delivery tracking schema definitions.
 * @module conversation/outbound-email
 */

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

/**
 * Email request schema.
 *
 * @typedef {Object} EmailRequest
 * @property {string} [emailConfigurationId] - Email configuration for sender settings
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
    emailConfigurationId: z.string().optional().describe("Email configuration ID for sender settings, SMTP/API credentials, and domain authentication (references EmailConfiguration). When omitted, uses organization default."),
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

    // Extensibility
    metadata: z.record(z.string(), z.any()).optional().describe("Additional custom metadata as key-value pairs for campaign tracking, CRM integration, or application-specific data. Not processed by the platform."),
});

/**
 * Schema for creating a new email request.
 * Omits auto-generated fields.
 */
export const CreateEmailRequestSchema = EmailRequestSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


export const EmailRequestResultSchema = z.object({
    success: z.boolean().optional().default(false).describe("Whether the email request was successful"),
    request: EmailRequestSchema.optional().nullable().describe("Original email request details"),
    error_message: z.string().optional().nullable().describe("Error message if the request failed"),
});


export type EmailRequest = z.infer<typeof EmailRequestSchema>;
export type CreateEmailRequest = z.infer<typeof CreateEmailRequestSchema>;

export type EmailRequestResult = z.infer<typeof EmailRequestResultSchema>;