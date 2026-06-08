import z from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Appointment Additional Info schema for storing dynamic field values.
 * @module business-mgt/appointment-additional-info
 *
 * This schema represents the **Appointment Level** in the dynamic fields hierarchy:
 *
 * ```
 * Organization Level (AppointmentFieldConfigSchema)
 *         │
 *         ▼ inherits via appointmentFieldConfigId
 * Service Level (ServiceAppointmentFieldConfigSchema)
 *         │
 *         ▼ stores values
 * Appointment Level (AppointmentAdditionalInfoSchema) ← THIS SCHEMA
 * ```
 *
 * Stores the actual captured field values for a specific appointment instance.
 * The `data` property contains key-value pairs where keys correspond to `fieldKey`
 * values defined in the organization and service-level field configurations.
 *
 * @see AppointmentFieldConfigSchema - Organization-level field definitions
 * @see ServiceAppointmentFieldConfigSchema - Service-level field customization
 */

// ============================================================================
// DYNAMIC FIELD VALUE SCHEMA
// ============================================================================

/**
 * Schema for dynamic field value types.
 * Accepts any value type to support the various DynamicFieldType values
 * (text, number, boolean, date, select options, etc.)
 */
export const DynamicFieldValueSchema = z.any().describe("Dynamic field value supporting various types");

export type DynamicFieldValue = z.infer<typeof DynamicFieldValueSchema>;

// ============================================================================
// APPOINTMENT ADDITIONAL INFO SCHEMA
// ============================================================================

/**
 * Appointment Additional Info schema.
 * Stores dynamic field values captured during appointment booking.
 *
 * @typedef {Object} AppointmentAdditionalInfo
 * @property {string} businessServiceId - Reference to the business service
 * @property {string} appointmentId - Reference to the appointment instance
 * @property {string} customerId - Reference to the customer who provided info
 * @property {Object} data - Key-value store of captured field values
 */
export const AppointmentAdditionalInfoSchema = BaseModelSchema.safeExtend({
    businessServiceId: z.string().describe("Reference to the business service for this appointment. The service's ServiceAppointmentFieldConfigSchema determines which fields were presented to the customer."),
    appointmentId: z.string().describe("Reference to the appointment instance these field values belong to. Creates a 1:1 relationship between appointment and its additional info."),
    customerId: z.string().describe("Reference to the customer who provided this information. When reuseDetails is enabled, this allows pre-populating fields for returning customers."),
    data: z.record(z.string(), DynamicFieldValueSchema).default({}).describe("Key-value store of captured field values. Keys correspond to fieldKey from FieldDefinitionSchema. Values are typed according to the field's DynamicFieldType."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating appointment additional info.
 * Omits auto-generated fields.
 */
export const CreateAppointmentAdditionalInfoSchema = AppointmentAdditionalInfoSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating appointment additional info.
 * All fields optional except id (required).
 */
export const UpdateAppointmentAdditionalInfoSchema = CreateAppointmentAdditionalInfoSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the AppointmentAdditionalInfo to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AppointmentAdditionalInfo = z.infer<typeof AppointmentAdditionalInfoSchema>;
export type CreateAppointmentAdditionalInfo = z.infer<typeof CreateAppointmentAdditionalInfoSchema>;
export type UpdateAppointmentAdditionalInfo = z.infer<typeof UpdateAppointmentAdditionalInfoSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Appointment additional info filter options.
 * @interface AppointmentAdditionalInfoFilters
 */
export interface AppointmentAdditionalInfoFilters {
    /** Filter by business service ID */
    businessServiceId?: string;
    /** Filter by appointment ID */
    appointmentId?: string;
    /** Filter by customer ID */
    customerId?: string;
}

/**
 * Appointment additional info sorting options.
 * @interface AppointmentAdditionalInfoSorting
 */
export interface AppointmentAdditionalInfoSorting {
    /** Field to sort by */
    field: "createdAt" | "updatedAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Appointment additional info query options.
 * @interface AppointmentAdditionalInfoQueryOptions
 */
export interface AppointmentAdditionalInfoQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: AppointmentAdditionalInfoFilters;
    /** Optional sorting */
    sorting?: AppointmentAdditionalInfoSorting;
}
