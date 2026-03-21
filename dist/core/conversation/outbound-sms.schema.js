"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsRequestResultSchema = exports.CreateSmsRequestSchema = exports.SmsRequestSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
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
exports.SmsRequestSchema = base_schema_1.BaseModelSchema.safeExtend({
    phoneConfigurationId: zod_1.z.string().nullable().optional().describe("Phone configuration ID for sender number settings and carrier routing (references PhoneConfiguration). When omitted, uses organization default SMS-enabled number."),
    to: zod_1.z.string().min(1, "Recipient phone number is required").describe("Recipient phone number in E.164 international format (e.g., '+12125551234'). Must be a valid mobile number capable of receiving SMS messages."),
    from: zod_1.z.string().nullable().optional().describe("Sender phone number in E.164 format or short code (e.g., '12345') displayed to the recipient. Must be a verified SMS-enabled number or short code owned by the organization. Uses default from phoneConfigurationId if omitted."),
    // Content
    body: zod_1.z.string().min(1, "Message body is required").describe("Text content of the SMS message. Standard SMS supports 160 characters (GSM-7), unicode messages 70 characters per segment. Longer messages automatically split into multiple segments."),
    templateId: zod_1.z.string().nullable().optional().describe("Pre-defined SMS template ID for structured content with variable placeholders (references SmsTemplate). Template content merged with variables field for personalization."),
    variables: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable().optional().describe("Template variable substitutions as key-value pairs. Keys correspond to {{placeholder}} syntax in body field (e.g., {firstName: 'John', appointmentTime: '3:00 PM'})."),
    // Scheduling
    scheduledAt: zod_1.z.number().optional().describe("Unix timestamp in milliseconds for scheduled SMS delivery. Message queued until this time, then sent automatically. Omit for immediate delivery."),
    serviceConversationConfigId: zod_1.z.string().nullable().optional().describe("Linked conversation record ID for SMS thread tracking and conversation history aggregation (references ServiceConversationConfig). Enables SMS conversation threading."),
    // Extensibility
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable().optional().describe("Additional custom metadata as key-value pairs for campaign tracking, CRM integration, or application-specific data. Not processed by the platform."),
});
/**
 * Schema for creating a new SMS request.
 * Omits auto-generated fields.
 */
exports.CreateSmsRequestSchema = exports.SmsRequestSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
exports.SmsRequestResultSchema = zod_1.z.object({
    success: zod_1.z.boolean().optional().default(false).describe("Whether the SMS request was successful"),
    request: exports.SmsRequestSchema.optional().nullable().describe("Original SMS request details"),
    error_message: zod_1.z.string().optional().nullable().describe("Error message if the request failed"),
});
