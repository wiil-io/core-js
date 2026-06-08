"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWhatsappTemplateSchema = exports.UpdateSmsTemplateSchema = exports.UpdateEmailTemplateSchema = exports.CreateWhatsappTemplateSchema = exports.CreateSmsTemplateSchema = exports.CreateEmailTemplateSchema = exports.OutboundTemplateSchema = exports.WhatsappTemplateSchema = exports.SmsTemplateSchema = exports.EmailTemplateSchema = exports.OutboundTemplateBaseSchema = exports.TemplateVariableSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
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
exports.TemplateVariableSchema = zod_1.z.object({
    key: zod_1.z.string().min(1).describe("Variable key/name for substitution (e.g., 'customerName')"),
    required: zod_1.z.boolean().default(false).describe("Whether this variable must be provided when using the template"),
    description: zod_1.z.string().nullable().optional().describe("Description of what this variable represents"),
    defaultValue: zod_1.z.string().nullable().optional().describe("Default value if variable is not provided"),
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
exports.OutboundTemplateBaseSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.z.string().min(1).describe("Template display name"),
    code: zod_1.z.string().min(1).describe("Unique template code identifier for programmatic access"),
    channel: zod_1.z.enum(type_definitions_1.OutboundTemplateChannel).describe("Communication channel for this template"),
    isActive: zod_1.z.boolean().default(true).describe("Whether this template is active and available for use"),
    description: zod_1.z.string().nullable().optional().describe("Template description for documentation"),
    variables: zod_1.z.array(exports.TemplateVariableSchema).default([]).describe("Variable placeholders used in the template"),
    tags: zod_1.z.array(zod_1.z.string()).default([]).describe("Categorization tags for filtering and organization"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).nullable().optional().describe("Additional metadata for custom integrations"),
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
exports.EmailTemplateSchema = exports.OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: zod_1.z.literal(type_definitions_1.OutboundTemplateChannel.EMAIL).describe("Email channel identifier"),
    subjectTemplate: zod_1.z.string().min(1).describe("Email subject line template with variable placeholders"),
    bodyHtmlTemplate: zod_1.z.string().min(1).describe("HTML body template with variable placeholders"),
    bodyTextTemplate: zod_1.z.string().nullable().optional().describe("Plain text body template for non-HTML clients"),
    defaultReplyTo: zod_1.z.email().nullable().optional().describe("Default reply-to email address"),
});
/**
 * SMS template schema.
 * Template for SMS text messages.
 *
 * @typedef {Object} SmsTemplate
 * @property {string} bodyTemplate - SMS body template
 */
exports.SmsTemplateSchema = exports.OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: zod_1.z.literal(type_definitions_1.OutboundTemplateChannel.SMS).describe("SMS channel identifier"),
    bodyTemplate: zod_1.z.string().min(1).describe("SMS message body template with variable placeholders"),
});
/**
 * WhatsApp template schema.
 * Template for WhatsApp messages.
 *
 * @typedef {Object} WhatsappTemplate
 * @property {string} bodyTemplate - WhatsApp body template
 */
exports.WhatsappTemplateSchema = exports.OutboundTemplateBaseSchema.omit({
    channel: true,
}).safeExtend({
    channel: zod_1.z.literal(type_definitions_1.OutboundTemplateChannel.WHATSAPP).describe("WhatsApp channel identifier"),
    bodyTemplate: zod_1.z.string().min(1).describe("WhatsApp message body template with variable placeholders"),
});
/**
 * Union schema for all template types.
 */
exports.OutboundTemplateSchema = zod_1.z.union([
    exports.EmailTemplateSchema,
    exports.SmsTemplateSchema,
    exports.WhatsappTemplateSchema,
]);
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new email template.
 */
exports.CreateEmailTemplateSchema = exports.EmailTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for creating a new SMS template.
 */
exports.CreateSmsTemplateSchema = exports.SmsTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for creating a new WhatsApp template.
 */
exports.CreateWhatsappTemplateSchema = exports.WhatsappTemplateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing email template.
 */
exports.UpdateEmailTemplateSchema = exports.CreateEmailTemplateSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the EmailTemplate to update"),
});
/**
 * Schema for updating an existing SMS template.
 */
exports.UpdateSmsTemplateSchema = exports.CreateSmsTemplateSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the SmsTemplate to update"),
});
/**
 * Schema for updating an existing WhatsApp template.
 */
exports.UpdateWhatsappTemplateSchema = exports.CreateWhatsappTemplateSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the WhatsappTemplate to update"),
});
