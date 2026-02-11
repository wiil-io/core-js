import { z } from "zod";
import { BaseModelSchema } from "../base.schema";

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
export const DynamicFieldValueSchema = z.any();

export type DynamicFieldValue = z.infer<typeof DynamicFieldValueSchema>;

/**
 * Schema for storing dynamic field values captured during appointment booking.
 * Links the captured data to the organization, service, appointment, and customer.
 */
export const AppointmentAdditionalInfoSchema = BaseModelSchema.safeExtend({
    organizationId: z.string().describe("Reference to the organization that owns this appointment data. Used to link back to the organization-level AppointmentFieldConfigSchema."),
    businessServiceId: z.string().describe("Reference to the business service for this appointment. The service's ServiceAppointmentFieldConfigSchema determines which fields were presented to the customer."),
    appointmentId: z.string().describe("Reference to the appointment instance these field values belong to. Creates a 1:1 relationship between appointment and its additional info."),
    customerId: z.string().describe("Reference to the customer who provided this information. When reuseDetails is enabled, this allows pre-populating fields for returning customers."),
    data: z.record(z.string(), DynamicFieldValueSchema).default({}).describe("Key-value store of captured field values. Keys correspond to fieldKey from FieldDefinitionSchema. Values are typed according to the field's DynamicFieldType (e.g., string for TEXT, number for NUMBER, boolean for BOOLEAN, array for MULTISELECT)."),
});

export type AppointmentAdditionalInfo = z.infer<typeof AppointmentAdditionalInfoSchema>;

export const CreateAppointmentAdditionalInfoSchema = AppointmentAdditionalInfoSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export type CreateAppointmentAdditionalInfo = z.infer<typeof CreateAppointmentAdditionalInfoSchema>;

export const UpdateAppointmentAdditionalInfoSchema = CreateAppointmentAdditionalInfoSchema.partial().safeExtend({
    id: z.string(),
});

export type UpdateAppointmentAdditionalInfo = z.infer<typeof UpdateAppointmentAdditionalInfoSchema>;
