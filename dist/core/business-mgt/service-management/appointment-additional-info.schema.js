"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentAdditionalInfoSchema = exports.CreateAppointmentAdditionalInfoSchema = exports.AppointmentAdditionalInfoSchema = exports.DynamicFieldValueSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
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
exports.DynamicFieldValueSchema = zod_1.default.any().describe("Dynamic field value supporting various types");
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
exports.AppointmentAdditionalInfoSchema = base_schema_1.BaseModelSchema.safeExtend({
    businessServiceId: zod_1.default.string().describe("Reference to the business service for this appointment. The service's ServiceAppointmentFieldConfigSchema determines which fields were presented to the customer."),
    appointmentId: zod_1.default.string().describe("Reference to the appointment instance these field values belong to. Creates a 1:1 relationship between appointment and its additional info."),
    customerId: zod_1.default.string().describe("Reference to the customer who provided this information. When reuseDetails is enabled, this allows pre-populating fields for returning customers."),
    data: zod_1.default.record(zod_1.default.string(), exports.DynamicFieldValueSchema).default({}).describe("Key-value store of captured field values. Keys correspond to fieldKey from FieldDefinitionSchema. Values are typed according to the field's DynamicFieldType."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating appointment additional info.
 * Omits auto-generated fields.
 */
exports.CreateAppointmentAdditionalInfoSchema = exports.AppointmentAdditionalInfoSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating appointment additional info.
 * All fields optional except id (required).
 */
exports.UpdateAppointmentAdditionalInfoSchema = exports.CreateAppointmentAdditionalInfoSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the AppointmentAdditionalInfo to update"),
});
