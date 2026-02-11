import z from "zod";
import { BaseModelSchema } from "../base.schema";
import { FieldDefinitionSchema, FieldOverrideSchema } from "../type-definitions/dynamic-fields";

/**
 * @fileoverview Business service configuration schema definitions.
 * @module business-mgt/business-service-config
 */


/**
 * Service-level appointment field configuration (embedded in BusinessServiceConfigSchema).
 *
 * This schema represents the **Service Level** in the dynamic fields hierarchy:
 *
 * ```
 * Organization Level (AppointmentFieldConfigSchema)
 *         │
 *         ▼ inherits via appointmentFieldConfigId
 * Service Level (ServiceAppointmentFieldConfigSchema) ← THIS SCHEMA
 *         │
 *         ▼ stores values
 * Appointment Level (AppointmentAdditionalInfoSchema)
 * ```
 *
 * Allows services to:
 * - Inherit specific fields from the organization-level configuration
 * - Override properties of inherited fields (e.g., make a field required)
 * - Add service-specific fields not in the organization config
 *
 * @see AppointmentFieldConfigSchema - Organization-level field definitions
 * @see AppointmentAdditionalInfoSchema - Stores captured field values
 */
export const ServiceAppointmentFieldConfigSchema = z.object({
    inheritedFieldKeys: z.array(z.string()).default([]).describe("Array of fieldKey values to inherit from the organization-level AppointmentFieldConfigSchema. Only fields with matching fieldKey values are included for this service. Example: ['allergies', 'emergency_contact'] inherits those two fields from the org config."),
    fieldOverrides: z.array(FieldOverrideSchema).default([]).describe("Array of field overrides to customize inherited fields for this service. Each override specifies a fieldKey and the properties to override (label, validation, uiHints, defaultValue, isActive). Example: Override 'allergies' field to make validation.required=true for this service."),
    additionalFields: z.array(FieldDefinitionSchema).default([]).describe("Array of service-specific field definitions not present in the organization config. These fields are only available for this particular service. Example: A spa service might add 'preferred_pressure' field with SELECT options."),
    isActive: z.boolean().default(true).describe("Controls whether this field configuration is active for the service. When false, no additional fields are collected during appointment booking. Defaults to true."),
    reuseDetails: z.boolean().default(false).describe("When true, captured field data for this service can be reused across appointments for the same customer. Overrides the organization-level reuseDetails setting when specified."),
});

export type ServiceAppointmentFieldConfig = z.infer<typeof ServiceAppointmentFieldConfigSchema>;

/**
 * Business service configuration schema.
 *
 * @typedef {Object} BusinessServiceConfig
 * @property {string} id - Unique identifier for the service
 * @property {string} name - Name of the service offered
 * @property {string} [description] - Detailed description of the service
 * @property {number} duration - Service duration in minutes (max 8 hours)
 * @property {number} bufferTime - Buffer time between appointments in minutes
 * @property {boolean} isBookable - Whether this service can be booked online
 * @property {number} [price] - Service price in account currency
 * @property {boolean} isActive - Whether the service is currently available

 */
export const BusinessServiceConfigSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this business service in the catalog managed by Appointment Management."),
    name: z.string().min(1, "Service name is required").describe("Display name of the service offered (e.g., 'Haircut', 'Massage', 'Consultation'). Used by AI Powered Services when presenting booking options to customers."),
    description: z.string().describe("Detailed description of the service including what's included, benefits, or special instructions. Helps customers understand the service before booking via Service Appointment workflow."),

    // Scheduling & Duration
    duration: z.number().int().positive().max(480).default(60).describe("Service duration in minutes with maximum of 480 minutes (8 hours). Used by AI Powered Services to calculate appointment end times and availability slots. Defaults to 60 minutes."),
    bufferTime: z.number().int().nonnegative().default(0).describe("Buffer time in minutes between consecutive appointments for cleanup, preparation, or transition. Ensures adequate spacing in Service Person schedules. Defaults to 0."),
    isBookable: z.boolean().default(true).describe("Whether this service can be booked online through AI Powered Services conversations. Services marked false require manual booking or are for internal use only. Defaults to true."),

    // Pricing
    price: z.number().nonnegative().default(0).optional().describe("Service price in the account's currency. Used for Service Appointment pricing and customer quotes during AI conversations. Defaults to 0 for complimentary services."),
    // Business Management
    isActive: z.boolean().default(true).describe("Whether the service is currently active and available for booking. Inactive services are hidden from customers and AI Powered Services. Defaults to true."),

    // Dynamic Field Configuration
    requiredDatafieldConfig: ServiceAppointmentFieldConfigSchema.optional().describe("Service-level dynamic field configuration for capturing additional appointment information. Inherits fields from organization-level AppointmentFieldConfigSchema via inheritedFieldKeys, allows overrides via fieldOverrides, and supports service-specific fields via additionalFields. When omitted, no additional fields are collected for this service."),

});

/**
 * Service QR code schema for appointment booking.
 *
 * @typedef {Object} ServiceQRCode
 * @property {string} id - Unique identifier for the QR code
 * @property {string} appointmentUrl - Direct link to the appointment page
 * @property {string} [qrCodeImage] - Base64 encoded QR code image
 * @property {string} [serviceId] - Specific service ID for direct appointment
 */
export const ServiceQRCodeSchema = z.object({
    id: z.string().describe("Unique identifier for this QR code instance."),
    appointmentUrl: z.string().url().describe("URL to the appointment booking interface accessed by scanning this QR code. Links to service selection and scheduling flow powered by AI Powered Services."),
    qrCodeImage: z.string().optional().describe("Base64 encoded QR code image for printing or digital display (posters, flyers, websites). Generated from appointmentUrl."),
    serviceId: z.string().optional().describe("Optional specific Business Service ID for direct appointment booking. When provided, QR code bypasses service selection and goes directly to scheduling for this service."),
});

/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export const CreateBusinessServiceSchema = BusinessServiceConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing business service.
 * All fields are optional except id.
 */
export const UpdateBusinessServiceSchema = CreateBusinessServiceSchema.partial().safeExtend({
    id: z.string(),
});

export type BusinessService = z.infer<typeof BusinessServiceConfigSchema>;
export type ServiceQRCode = z.infer<typeof ServiceQRCodeSchema>;
export type CreateBusinessService = z.infer<typeof CreateBusinessServiceSchema>;
export type UpdateBusinessService = z.infer<typeof UpdateBusinessServiceSchema>;
