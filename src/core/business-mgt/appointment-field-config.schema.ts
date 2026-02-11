import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { FieldDefinitionSchema, FieldGroupSchema } from "../type-definitions/dynamic-fields";

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
export const AppointmentFieldConfigSchema = BaseModelSchema.safeExtend({
    fields: z.array(FieldDefinitionSchema).default([]).describe("Array of field definitions available at the organization level. Each field has a unique fieldKey, fieldType (text, number, date, etc.), label, and optional validation/UI hints. Services can inherit these fields via inheritedFieldKeys."),
    groups: z.array(FieldGroupSchema).default([]).describe("Logical groupings for organizing fields into sections (e.g., 'Contact Information', 'Medical History'). Each group has a groupKey, label, and optional display settings like collapsible and displayOrder. Fields reference groups via their groupKey property."),
    reuseDetails: z.boolean().default(false).describe("When true, indicates that captured field data can be reused across appointments for the same customer. Enables pre-populating fields for returning customers to reduce redundant data entry."),
    ensureEmail: z.boolean().default(false).describe("When true, ensures an email field is always included in the field configuration, even if not explicitly defined. Useful for organizations that require email for all appointments."),
    ensurePhone: z.boolean().default(false).describe("When true, ensures a phone field is always included in the field configuration, even if not explicitly defined. Useful for organizations that require phone contact for all appointments."),
});

export type AppointmentFieldConfig = z.infer<typeof AppointmentFieldConfigSchema>;

export const CreateAppointmentFieldConfigSchema = AppointmentFieldConfigSchema.omit({
    createdAt: true,
    updatedAt: true,
});

export type CreateAppointmentFieldConfig = z.infer<typeof CreateAppointmentFieldConfigSchema>;

export const UpdateAppointmentFieldConfigSchema = CreateAppointmentFieldConfigSchema.partial().safeExtend({
    id: z.string(),
});

export type UpdateAppointmentFieldConfig = z.infer<typeof UpdateAppointmentFieldConfigSchema>;
