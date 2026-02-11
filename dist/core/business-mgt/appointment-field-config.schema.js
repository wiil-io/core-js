"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentFieldConfigSchema = exports.CreateAppointmentFieldConfigSchema = exports.AppointmentFieldConfigSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const dynamic_fields_1 = require("../type-definitions/dynamic-fields");
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
/**
 * Organization-level appointment field configuration.
 * Defines the base field library available to all services within an organization.
 * Services reference this configuration via `appointmentFieldConfigId` and can
 * selectively inherit, override, or extend the defined fields.
 */
exports.AppointmentFieldConfigSchema = base_schema_1.BaseModelSchema.safeExtend({
    fields: zod_1.z.array(dynamic_fields_1.FieldDefinitionSchema).default([]).describe("Array of field definitions available at the organization level. Each field has a unique fieldKey, fieldType (text, number, date, etc.), label, and optional validation/UI hints. Services can inherit these fields via inheritedFieldKeys."),
    groups: zod_1.z.array(dynamic_fields_1.FieldGroupSchema).default([]).describe("Logical groupings for organizing fields into sections (e.g., 'Contact Information', 'Medical History'). Each group has a groupKey, label, and optional display settings like collapsible and displayOrder. Fields reference groups via their groupKey property."),
    reuseDetails: zod_1.z.boolean().default(false).describe("When true, indicates that captured field data can be reused across appointments for the same customer. Enables pre-populating fields for returning customers to reduce redundant data entry."),
    ensureEmail: zod_1.z.boolean().default(false).describe("When true, ensures an email field is always included in the field configuration, even if not explicitly defined. Useful for organizations that require email for all appointments."),
    ensurePhone: zod_1.z.boolean().default(false).describe("When true, ensures a phone field is always included in the field configuration, even if not explicitly defined. Useful for organizations that require phone contact for all appointments."),
});
exports.CreateAppointmentFieldConfigSchema = exports.AppointmentFieldConfigSchema.omit({
    createdAt: true,
    updatedAt: true,
});
exports.UpdateAppointmentFieldConfigSchema = exports.CreateAppointmentFieldConfigSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
