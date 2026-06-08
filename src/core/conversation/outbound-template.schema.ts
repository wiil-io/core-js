import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { OutboundTemplateChannel } from "../type-definitions";

/**
 * @fileoverview Outbound Template schema definitions for message templates.
 * @module conversation/outbound-template
 *
 * Outbound templates define reusable message templates for email, SMS,
 * and WhatsApp channels with variable substitution support.
 */

// ============================================================================
// TEMPLATE VARIABLE SCHEMA
// ============================================================================

/**
 * Template variable schema.
 * Defines a variable placeholder within a message template.
 *
 * @typedef {Object} TemplateVariable
 * @property {string} key - Variable key/name for substitution
 * @property {boolean} required - Whether variable must be provided
 * @property {string} [description] - Description of the variable
 * @property {string} [defaultValue] - Default value if not provided
 */
export const TemplateVariableSchema = z.object({
    key: z.string().min(1).describe("Variable key/name for substitution (e.g., 'customerName')"),
    required: z.boolean().default(false).describe("Whether this variable must be provided when using the template"),
    description: z.string().nullable().optional().describe("Description of what this variable represents"),
    defaultValue: z.string().nullable().optional().describe("Default value if variable is not provided"),
});

// ============================================================================
// BASE TEMPLATE SCHEMA
// ============================================================================

/**
 * Outbound template base schema.
 * Common fields shared across all template types.
 *
 * @typedef {Object} OutboundTemplateBase
 * @property {string} name - Template display name
 * @property {string} code - Unique template code identifier
 * @property {OutboundTemplateChannel} channel - Communication channel
 * @property {boolean} isActive - Whether template is active
 * @property {string} [description] - Template description
 * @property {TemplateVariable[]} variables - Template variables
 * @property {string[]} tags - Categorization tags
 * @property {Object} [metadata] - Additional metadata
 */
export const OutboundTemplateBaseSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1).describe("Template display name"),
    code: z.string().min(1).describe("Unique template code identifier for programmatic access"),
    channel: z.enum(OutboundTemplateChannel).describe("Communication channel for this template"),
    isActive: z.boolean().default(true).describe("Whether this template is active and available for use"),
    description: z.string().nullable().optional().describe("Template description for documentation"),
    variables: z.array(TemplateVariableSchema).default([]).describe("Variable placeholders used in the template"),
    tags: z.array(z.string()).default([]).describe("Categorization tags for filtering and organization"),
    metadata: z.record(z.string(), z.unknown()).nullable().optional().describe("Additional metadata for custom integrations"),
});

// ============================================================================
// CHANNEL-SPECIFIC TEMPLATE SCHEMAS
// ============================================================================

/**
 * Email template schema.
 * Template for email messages with subject and body.
 *
 * @typedef {Object} EmailTemplate
 * @property {string} subjectTemplate - Email subject template
 * @property {string} bodyHtmlTemplate - HTML body template
 * @property {string} [bodyTextTemplate] - Plain text body template
 * @property {string} [defaultReplyTo] - Default reply-to address
 */
export const EmailTemplateSchema = OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: z.literal(OutboundTemplateChannel.EMAIL).describe("Email channel identifier"),
    subjectTemplate: z.string().min(1).describe("Email subject line template with variable placeholders"),
    bodyHtmlTemplate: z.string().min(1).describe("HTML body template with variable placeholders"),
    bodyTextTemplate: z.string().nullable().optional().describe("Plain text body template for non-HTML clients"),
    defaultReplyTo: z.email().nullable().optional().describe("Default reply-to email address"),
});

/**
 * SMS template schema.
 * Template for SMS text messages.
 *
 * @typedef {Object} SmsTemplate
 * @property {string} bodyTemplate - SMS body template
 */
export const SmsTemplateSchema = OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: z.literal(OutboundTemplateChannel.SMS).describe("SMS channel identifier"),
    bodyTemplate: z.string().min(1).describe("SMS message body template with variable placeholders"),
});

/**
 * WhatsApp template schema.
 * Template for WhatsApp messages.
 *
 * @typedef {Object} WhatsappTemplate
 * @property {string} bodyTemplate - WhatsApp body template
 */
export const WhatsappTemplateSchema = OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: z.literal(OutboundTemplateChannel.WHATSAPP).describe("WhatsApp channel identifier"),
    bodyTemplate: z.string().min(1).describe("WhatsApp message body template with variable placeholders"),
});

/**
 * Union schema for all template types.
 */
export const OutboundTemplateSchema = z.union([
    EmailTemplateSchema,
    SmsTemplateSchema,
    WhatsappTemplateSchema,
]);

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new email template.
 */
export const CreateEmailTemplateSchema = EmailTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for creating a new SMS template.
 */
export const CreateSmsTemplateSchema = SmsTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for creating a new WhatsApp template.
 */
export const CreateWhatsappTemplateSchema = WhatsappTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing email template.
 */
export const UpdateEmailTemplateSchema = CreateEmailTemplateSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the EmailTemplate to update"),
});

/**
 * Schema for updating an existing SMS template.
 */
export const UpdateSmsTemplateSchema = CreateSmsTemplateSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the SmsTemplate to update"),
});

/**
 * Schema for updating an existing WhatsApp template.
 */
export const UpdateWhatsappTemplateSchema = CreateWhatsappTemplateSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the WhatsappTemplate to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type TemplateVariable = z.infer<typeof TemplateVariableSchema>;
export type OutboundTemplateBase = z.infer<typeof OutboundTemplateBaseSchema>;
export type EmailTemplate = z.infer<typeof EmailTemplateSchema>;
export type SmsTemplate = z.infer<typeof SmsTemplateSchema>;
export type WhatsappTemplate = z.infer<typeof WhatsappTemplateSchema>;
export type OutboundTemplate = z.infer<typeof OutboundTemplateSchema>;
export type CreateEmailTemplate = z.infer<typeof CreateEmailTemplateSchema>;
export type CreateSmsTemplate = z.infer<typeof CreateSmsTemplateSchema>;
export type CreateWhatsappTemplate = z.infer<typeof CreateWhatsappTemplateSchema>;
export type UpdateEmailTemplate = z.infer<typeof UpdateEmailTemplateSchema>;
export type UpdateSmsTemplate = z.infer<typeof UpdateSmsTemplateSchema>;
export type UpdateWhatsappTemplate = z.infer<typeof UpdateWhatsappTemplateSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Outbound template filter options.
 * @interface OutboundTemplateFilters
 */
export interface OutboundTemplateFilters {
    /** Text search across name/code/description */
    search?: string;
    /** Filter by channel type */
    channel?: OutboundTemplateChannel;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by tags */
    tags?: string[];
}

/**
 * Outbound template sorting options.
 * @interface OutboundTemplateSorting
 */
export interface OutboundTemplateSorting {
    /** Field to sort by */
    field: "name" | "code" | "channel" | "createdAt" | "updatedAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Outbound template query options.
 * @interface OutboundTemplateQueryOptions
 */
export interface OutboundTemplateQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: OutboundTemplateFilters;
    /** Optional sorting */
    sorting?: OutboundTemplateSorting;
}
