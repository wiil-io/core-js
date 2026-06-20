"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentFieldConfigSchema = exports.CreateAppointmentFieldConfigSchema = exports.AppointmentFieldConfigSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const dynamic_fields_1 = require("../../type-definitions/dynamic-fields");
const account_definitions_1 = require("../../type-definitions/account-definitions");
/**
 * @fileoverview Organization-level appointment field configuration schema.
 * @module business-mgt/appointment-field-config
 *
 * This schema represents the **Organization Level** in the dynamic fields hierarchy:
 *
 * ```
 * Organization Level (AppointmentFieldConfigSchema) ← THIS SCHEMA
 *         │
 *         ▼ inherits via appointmentFieldConfigId
 * Service Level (ServiceAppointmentFieldConfigSchema)
 *         │
 *         ▼ stores values
 * Appointment Level (AppointmentAdditionalInfoSchema)
 * ```
 *
 * Defines the base field library that can be reused across multiple services
 * within an organization. Services can inherit fields from this configuration
 * and optionally override specific properties or add service-specific fields.
 *
 * @see ServiceAppointmentFieldConfigSchema - Service-level field customization
 * @see AppointmentAdditionalInfoSchema - Stores captured field values
 */
// ============================================================================
// APPOINTMENT FIELD CONFIG SCHEMA
// ============================================================================
/**
 * Appointment Field Config schema.
 * Organization-level field library for appointment booking forms.
 *
 * @typedef {Object} AppointmentFieldConfig
 * @property {Array} fields - Field definitions available at organization level
 * @property {Array} groups - Logical groupings for organizing fields
 * @property {boolean} reuseDetails - Whether to reuse data for returning customers
 * @property {boolean} ensureEmail - Ensure email field is always included
 * @property {boolean} ensurePhone - Ensure phone field is always included
 * @property {BusinessSupportServices} [supportService] - Business support service this field configuration applies to
 */
exports.AppointmentFieldConfigSchema = base_schema_1.BaseModelSchema.safeExtend({
    fields: zod_1.default.array(dynamic_fields_1.FieldDefinitionSchema).default([]).describe("Array of field definitions available at the organization level. Each field has a unique fieldKey, fieldType, label, and optional validation/UI hints."),
    groups: zod_1.default.array(dynamic_fields_1.FieldGroupSchema).default([]).describe("Logical groupings for organizing fields into sections (e.g., 'Contact Information', 'Medical History'). Each group has a groupKey, label, and optional display settings."),
    reuseDetails: zod_1.default.boolean().default(false).describe("When true, captured field data can be reused across appointments for the same customer."),
    ensureEmail: zod_1.default.boolean().default(false).describe("When true, ensures an email field is always included in the field configuration."),
    ensurePhone: zod_1.default.boolean().default(false).describe("When true, ensures a phone field is always included in the field configuration."),
    supportService: zod_1.default.enum(account_definitions_1.BusinessSupportServices).nullable().optional().describe("Business support service this field configuration applies to (e.g., appointment management)."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating an appointment field config.
 * Omits auto-generated fields.
 */
exports.CreateAppointmentFieldConfigSchema = exports.AppointmentFieldConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an appointment field config.
 * All fields optional except id (required).
 */
exports.UpdateAppointmentFieldConfigSchema = exports.CreateAppointmentFieldConfigSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the AppointmentFieldConfig to update"),
});
