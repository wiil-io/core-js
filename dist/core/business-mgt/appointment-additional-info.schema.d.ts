import { z } from "zod";
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
 * Schema for storing dynamic field values captured during appointment booking.
 * Links the captured data to the organization, service, appointment, and customer.
 */
export declare const AppointmentAdditionalInfoSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    organizationId: z.ZodString;
    businessServiceId: z.ZodString;
    appointmentId: z.ZodString;
    customerId: z.ZodString;
    data: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AppointmentAdditionalInfo = z.infer<typeof AppointmentAdditionalInfoSchema>;
export declare const CreateAppointmentAdditionalInfoSchema: z.ZodObject<{
    data: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customerId: z.ZodString;
    businessServiceId: z.ZodString;
    organizationId: z.ZodString;
    appointmentId: z.ZodString;
}, z.core.$strip>;
export type CreateAppointmentAdditionalInfo = z.infer<typeof CreateAppointmentAdditionalInfoSchema>;
export declare const UpdateAppointmentAdditionalInfoSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    customerId: z.ZodOptional<z.ZodString>;
    businessServiceId: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    appointmentId: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
export type UpdateAppointmentAdditionalInfo = z.infer<typeof UpdateAppointmentAdditionalInfoSchema>;
