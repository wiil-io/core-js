import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { FieldDefinitionSchema, FieldGroupSchema } from "../../type-definitions/dynamic-fields";

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
 */
export const AppointmentFieldConfigSchema = BaseModelSchema.safeExtend({
    fields: z.array(FieldDefinitionSchema).default([]).describe("Array of field definitions available at the organization level. Each field has a unique fieldKey, fieldType, label, and optional validation/UI hints."),
    groups: z.array(FieldGroupSchema).default([]).describe("Logical groupings for organizing fields into sections (e.g., 'Contact Information', 'Medical History'). Each group has a groupKey, label, and optional display settings."),
    reuseDetails: z.boolean().default(false).describe("When true, captured field data can be reused across appointments for the same customer."),
    ensureEmail: z.boolean().default(false).describe("When true, ensures an email field is always included in the field configuration."),
    ensurePhone: z.boolean().default(false).describe("When true, ensures a phone field is always included in the field configuration."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating an appointment field config.
 * Omits auto-generated fields.
 */
export const CreateAppointmentFieldConfigSchema = AppointmentFieldConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an appointment field config.
 * All fields optional except id (required).
 */
export const UpdateAppointmentFieldConfigSchema = CreateAppointmentFieldConfigSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the AppointmentFieldConfig to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AppointmentFieldConfig = z.infer<typeof AppointmentFieldConfigSchema>;
export type CreateAppointmentFieldConfig = z.infer<typeof CreateAppointmentFieldConfigSchema>;
export type UpdateAppointmentFieldConfig = z.infer<typeof UpdateAppointmentFieldConfigSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Appointment field config filter options.
 * @interface AppointmentFieldConfigFilters
 */
export interface AppointmentFieldConfigFilters {
    /** Filter by reuseDetails setting */
    reuseDetails?: boolean;
    /** Filter by ensureEmail setting */
    ensureEmail?: boolean;
    /** Filter by ensurePhone setting */
    ensurePhone?: boolean;
}

/**
 * Appointment field config sorting options.
 * @interface AppointmentFieldConfigSorting
 */
export interface AppointmentFieldConfigSorting {
    /** Field to sort by */
    field: "createdAt" | "updatedAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Appointment field config query options.
 * @interface AppointmentFieldConfigQueryOptions
 */
export interface AppointmentFieldConfigQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: AppointmentFieldConfigFilters;
    /** Optional sorting */
    sorting?: AppointmentFieldConfigSorting;
}
