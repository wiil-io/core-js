"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessServiceSchema = exports.CreateBusinessServiceSchema = exports.ServiceQRCodeSchema = exports.BusinessServiceConfigSchema = exports.ServiceAppointmentFieldConfigSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const dynamic_fields_1 = require("../type-definitions/dynamic-fields");
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
exports.ServiceAppointmentFieldConfigSchema = zod_1.default.object({
    inheritedFieldKeys: zod_1.default.array(zod_1.default.string()).default([]).describe("Array of fieldKey values to inherit from the organization-level AppointmentFieldConfigSchema. Only fields with matching fieldKey values are included for this service. Example: ['allergies', 'emergency_contact'] inherits those two fields from the org config."),
    fieldOverrides: zod_1.default.array(dynamic_fields_1.FieldOverrideSchema).default([]).describe("Array of field overrides to customize inherited fields for this service. Each override specifies a fieldKey and the properties to override (label, validation, uiHints, defaultValue, isActive). Example: Override 'allergies' field to make validation.required=true for this service."),
    additionalFields: zod_1.default.array(dynamic_fields_1.FieldDefinitionSchema).default([]).describe("Array of service-specific field definitions not present in the organization config. These fields are only available for this particular service. Example: A spa service might add 'preferred_pressure' field with SELECT options."),
    isActive: zod_1.default.boolean().default(true).describe("Controls whether this field configuration is active for the service. When false, no additional fields are collected during appointment booking. Defaults to true."),
    reuseDetails: zod_1.default.boolean().default(false).describe("When true, captured field data for this service can be reused across appointments for the same customer. Overrides the organization-level reuseDetails setting when specified."),
});
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
exports.BusinessServiceConfigSchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this business service in the catalog managed by Appointment Management."),
    name: zod_1.default.string().min(1, "Service name is required").describe("Display name of the service offered (e.g., 'Haircut', 'Massage', 'Consultation'). Used by AI Powered Services when presenting booking options to customers."),
    description: zod_1.default.string().describe("Detailed description of the service including what's included, benefits, or special instructions. Helps customers understand the service before booking via Service Appointment workflow."),
    // Scheduling & Duration
    duration: zod_1.default.number().int().positive().max(480).default(60).describe("Service duration in minutes with maximum of 480 minutes (8 hours). Used by AI Powered Services to calculate appointment end times and availability slots. Defaults to 60 minutes."),
    bufferTime: zod_1.default.number().int().nonnegative().default(0).describe("Buffer time in minutes between consecutive appointments for cleanup, preparation, or transition. Ensures adequate spacing in Service Person schedules. Defaults to 0."),
    isBookable: zod_1.default.boolean().default(true).describe("Whether this service can be booked online through AI Powered Services conversations. Services marked false require manual booking or are for internal use only. Defaults to true."),
    // Pricing
    price: zod_1.default.number().nonnegative().default(0).optional().describe("Service price in the account's currency. Used for Service Appointment pricing and customer quotes during AI conversations. Defaults to 0 for complimentary services."),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether the service is currently active and available for booking. Inactive services are hidden from customers and AI Powered Services. Defaults to true."),
    // Dynamic Field Configuration
    requiredDatafieldConfig: exports.ServiceAppointmentFieldConfigSchema.optional().describe("Service-level dynamic field configuration for capturing additional appointment information. Inherits fields from organization-level AppointmentFieldConfigSchema via inheritedFieldKeys, allows overrides via fieldOverrides, and supports service-specific fields via additionalFields. When omitted, no additional fields are collected for this service."),
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
exports.ServiceQRCodeSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier for this QR code instance."),
    appointmentUrl: zod_1.default.string().url().describe("URL to the appointment booking interface accessed by scanning this QR code. Links to service selection and scheduling flow powered by AI Powered Services."),
    qrCodeImage: zod_1.default.string().optional().describe("Base64 encoded QR code image for printing or digital display (posters, flyers, websites). Generated from appointmentUrl."),
    serviceId: zod_1.default.string().optional().describe("Optional specific Business Service ID for direct appointment booking. When provided, QR code bypasses service selection and goes directly to scheduling for this service."),
});
/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
exports.CreateBusinessServiceSchema = exports.BusinessServiceConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing business service.
 * All fields are optional except id.
 */
exports.UpdateBusinessServiceSchema = exports.CreateBusinessServiceSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
