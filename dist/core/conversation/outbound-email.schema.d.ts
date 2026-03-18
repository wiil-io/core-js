import { z } from "zod";
/**
 * @fileoverview Outbound email request and delivery tracking schema definitions.
 * @module conversation/outbound-email
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
export declare const EmailRequestSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    deletedAt: z.ZodOptional<z.ZodNumber>;
    deletedBy: z.ZodOptional<z.ZodString>;
    uniqueKey: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
    emailConfigurationId: z.ZodOptional<z.ZodString>;
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
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating a new email request.
 * Omits auto-generated fields.
 */
export declare const CreateEmailRequestSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodString;
    to: z.ZodArray<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    emailConfigurationId: z.ZodOptional<z.ZodString>;
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
}, z.core.$strip>;
export type EmailRequest = z.infer<typeof EmailRequestSchema>;
export type CreateEmailRequest = z.infer<typeof CreateEmailRequestSchema>;
