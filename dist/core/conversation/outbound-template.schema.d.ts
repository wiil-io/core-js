import { z } from "zod";
import { OutboundTemplateChannel } from "../type-definitions";
/**
 * @fileoverview Outbound Template schema definitions for message templates.
 * @module conversation/outbound-template
 *
 * Outbound templates define reusable message templates for email, SMS,
 * and WhatsApp channels with variable substitution support.
 */
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
export declare const TemplateVariableSchema: z.ZodObject<{
    key: z.ZodString;
    required: z.ZodDefault<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
export declare const OutboundTemplateBaseSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    code: z.ZodString;
    channel: z.ZodEnum<typeof OutboundTemplateChannel>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>;
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
export declare const EmailTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.EMAIL>;
    subjectTemplate: z.ZodString;
    bodyHtmlTemplate: z.ZodString;
    bodyTextTemplate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultReplyTo: z.ZodOptional<z.ZodNullable<z.ZodEmail>>;
}, z.core.$strip>;
/**
 * SMS template schema.
 * Template for SMS text messages.
 *
 * @typedef {Object} SmsTemplate
 * @property {string} bodyTemplate - SMS body template
 */
export declare const SmsTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.SMS>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>;
/**
 * WhatsApp template schema.
 * Template for WhatsApp messages.
 *
 * @typedef {Object} WhatsappTemplate
 * @property {string} bodyTemplate - WhatsApp body template
 */
export declare const WhatsappTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.WHATSAPP>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>;
/**
 * Union schema for all template types.
 */
export declare const OutboundTemplateSchema: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.EMAIL>;
    subjectTemplate: z.ZodString;
    bodyHtmlTemplate: z.ZodString;
    bodyTextTemplate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultReplyTo: z.ZodOptional<z.ZodNullable<z.ZodEmail>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.SMS>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.WHATSAPP>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>]>;
/**
 * Schema for creating a new email template.
 */
export declare const CreateEmailTemplateSchema: z.ZodObject<{
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.EMAIL>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    subjectTemplate: z.ZodString;
    bodyHtmlTemplate: z.ZodString;
    bodyTextTemplate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultReplyTo: z.ZodOptional<z.ZodNullable<z.ZodEmail>>;
}, z.core.$strip>;
/**
 * Schema for creating a new SMS template.
 */
export declare const CreateSmsTemplateSchema: z.ZodObject<{
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.SMS>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new WhatsApp template.
 */
export declare const CreateWhatsappTemplateSchema: z.ZodObject<{
    code: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channel: z.ZodLiteral<OutboundTemplateChannel.WHATSAPP>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    bodyTemplate: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing email template.
 */
export declare const UpdateEmailTemplateSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channel: z.ZodOptional<z.ZodLiteral<OutboundTemplateChannel.EMAIL>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    variables: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    subjectTemplate: z.ZodOptional<z.ZodString>;
    bodyHtmlTemplate: z.ZodOptional<z.ZodString>;
    bodyTextTemplate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    defaultReplyTo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEmail>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing SMS template.
 */
export declare const UpdateSmsTemplateSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channel: z.ZodOptional<z.ZodLiteral<OutboundTemplateChannel.SMS>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    variables: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    bodyTemplate: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing WhatsApp template.
 */
export declare const UpdateWhatsappTemplateSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channel: z.ZodOptional<z.ZodLiteral<OutboundTemplateChannel.WHATSAPP>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    variables: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    bodyTemplate: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
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
