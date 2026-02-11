"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentAdditionalInfoSchema = exports.CreateAppointmentAdditionalInfoSchema = exports.AppointmentAdditionalInfoSchema = exports.DynamicFieldValueSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
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
exports.DynamicFieldValueSchema = zod_1.z.any();
/**
 * Schema for storing dynamic field values captured during appointment booking.
 * Links the captured data to the organization, service, appointment, and customer.
 */
exports.AppointmentAdditionalInfoSchema = base_schema_1.BaseModelSchema.safeExtend({
    organizationId: zod_1.z.string().describe("Reference to the organization that owns this appointment data. Used to link back to the organization-level AppointmentFieldConfigSchema."),
    businessServiceId: zod_1.z.string().describe("Reference to the business service for this appointment. The service's ServiceAppointmentFieldConfigSchema determines which fields were presented to the customer."),
    appointmentId: zod_1.z.string().describe("Reference to the appointment instance these field values belong to. Creates a 1:1 relationship between appointment and its additional info."),
    customerId: zod_1.z.string().describe("Reference to the customer who provided this information. When reuseDetails is enabled, this allows pre-populating fields for returning customers."),
    data: zod_1.z.record(zod_1.z.string(), exports.DynamicFieldValueSchema).default({}).describe("Key-value store of captured field values. Keys correspond to fieldKey from FieldDefinitionSchema. Values are typed according to the field's DynamicFieldType (e.g., string for TEXT, number for NUMBER, boolean for BOOLEAN, array for MULTISELECT)."),
});
exports.CreateAppointmentAdditionalInfoSchema = exports.AppointmentAdditionalInfoSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
exports.UpdateAppointmentAdditionalInfoSchema = exports.CreateAppointmentAdditionalInfoSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
