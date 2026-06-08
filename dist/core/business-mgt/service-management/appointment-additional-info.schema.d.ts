import z from "zod";
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
/**
 * Schema for dynamic field value types.
 * Accepts any value type to support the various DynamicFieldType values
 * (text, number, boolean, date, select options, etc.)
 */
export declare const DynamicFieldValueSchema: z.ZodAny;
export type DynamicFieldValue = z.infer<typeof DynamicFieldValueSchema>;
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
export declare const AppointmentAdditionalInfoSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    businessServiceId: z.ZodString;
    appointmentId: z.ZodString;
    customerId: z.ZodString;
    data: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating appointment additional info.
 * Omits auto-generated fields.
 */
export declare const CreateAppointmentAdditionalInfoSchema: z.ZodObject<{
    data: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customerId: z.ZodString;
    businessServiceId: z.ZodString;
    appointmentId: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating appointment additional info.
 * All fields optional except id (required).
 */
export declare const UpdateAppointmentAdditionalInfoSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    customerId: z.ZodOptional<z.ZodString>;
    businessServiceId: z.ZodOptional<z.ZodString>;
    appointmentId: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
export type AppointmentAdditionalInfo = z.infer<typeof AppointmentAdditionalInfoSchema>;
export type CreateAppointmentAdditionalInfo = z.infer<typeof CreateAppointmentAdditionalInfoSchema>;
export type UpdateAppointmentAdditionalInfo = z.infer<typeof UpdateAppointmentAdditionalInfoSchema>;
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
