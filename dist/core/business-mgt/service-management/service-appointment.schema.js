"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAppointmentWithAdditionalInfoSchema = exports.CreateServiceAppointmentWithCustomDataSchema = exports.UpdateServiceAppointmentSchema = exports.CreateServiceAppointmentSchema = exports.ServiceAppointmentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
const order_schema_1 = require("../order.schema");
const appointment_additional_info_schema_1 = require("./appointment-additional-info.schema");
/**
 * @fileoverview Service Appointment schema definitions.
 * @module business-mgt/service-appointment
 *
 * Service appointments represent scheduled bookings for services.
 * Supports calendar integration, pricing breakdowns, and multi-channel bookings.
 */
// ============================================================================
// SERVICE APPOINTMENT SCHEMA
// ============================================================================
/**
 * Service Appointment schema.
 * Represents a scheduled appointment for a service.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} [locationId] - Business location ID
 * @property {string} [channelId] - Channel ID for multi-channel bookings
 * @property {string} customerId - Customer ID
 * @property {string} [customerName] - Customer's full name
 * @property {string} [customerEmail] - Customer's email address
 * @property {number} startTime - Appointment start time (Unix timestamp)
 * @property {number} [endTime] - Appointment end time (Unix timestamp)
 * @property {number} [duration] - Duration in minutes
 * @property {number} [totalPrice] - Total price for the service
 * @property {Object} [pricing] - Detailed pricing breakdown
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current appointment status
 * @property {string} [providerId] - Assigned provider ID (ServicePerson ID)
 * @property {string} [serviceProviderId] - Service-provider assignment ID
 * @property {number} [slotIndex] - Slot index for concurrent bookings
 * @property {string} [assignedUserAccountId] - User account managing the appointment
 * @property {string} [calendarId] - Calendar ID where appointment is stored
 * @property {string} [calendarEventId] - External calendar event ID
 * @property {string} [calendarProvider] - Calendar provider type
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 * @property {Object} [externalRef] - External system reference
 */
exports.ServiceAppointmentSchema = base_schema_1.BaseModelSchema.safeExtend({
    businessServiceId: zod_1.default.string().describe("ID of the service being booked"),
    locationId: zod_1.default.string().nullable().optional().describe("Business location ID"),
    channelId: zod_1.default.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    customerId: zod_1.default.string().describe("Customer ID if registered"),
    customerName: zod_1.default.string().optional().describe("Customer's full name"),
    customerEmail: zod_1.default.email().optional().describe("Customer's email address"),
    startTime: zod_1.default.number().int().positive().describe("Appointment start time as Unix timestamp"),
    endTime: zod_1.default.number().int().positive().optional().describe("Appointment end time as Unix timestamp"),
    duration: zod_1.default.number().int().positive().default(30).optional().describe("Duration in minutes"),
    totalPrice: zod_1.default.number().nonnegative().default(0).optional().describe("Total price for the service"),
    pricing: order_schema_1.OrderPricingSchema.optional().describe("Detailed pricing breakdown for the appointment"),
    depositPaid: zod_1.default.number().nonnegative().default(0).describe("Deposit amount paid"),
    status: zod_1.default.enum(type_definitions_1.AppointmentStatus).default(type_definitions_1.AppointmentStatus.PENDING).describe("Current appointment status"),
    providerId: zod_1.default.string().nullable().optional().describe("Assigned provider ID (ServicePerson ID)"),
    serviceProviderId: zod_1.default.string().nullable().optional().describe("Service-provider assignment ID used for pricing/duration overrides"),
    slotIndex: zod_1.default.number().int().nonnegative().nullable().optional().describe("Slot index for concurrent bookings (0-based, null = single booking)"),
    // Calendar Integration
    assignedUserAccountId: zod_1.default.string().nullable().optional().describe("User account managing the appointment"),
    calendarId: zod_1.default.string().nullable().optional().describe("Calendar ID where appointment is stored"),
    calendarEventId: zod_1.default.string().nullable().optional().describe("External calendar event ID"),
    calendarProvider: zod_1.default.enum(type_definitions_1.CalendarProvider).nullable().optional().describe("Calendar provider type"),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason for cancellation, if applicable"),
    serviceConversationConfigId: zod_1.default.string().nullable().optional().describe("Configuration ID for service conversation"),
    externalRef: type_definitions_1.ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced from Calendly, Acuity, etc.)"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields and cancelReason (set during cancellation).
 */
exports.CreateServiceAppointmentSchema = exports.ServiceAppointmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    cancelReason: true,
});
/**
 * Schema for updating an existing service appointment.
 * All fields optional except id (required). Includes cancelReason for cancellation updates.
 */
exports.UpdateServiceAppointmentSchema = exports.CreateServiceAppointmentSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServiceAppointment to update"),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason for cancellation, if applicable"),
});
// ============================================================================
// COMPOSITE SCHEMAS
// ============================================================================
/**
 * Schema for creating an appointment with custom field data.
 * Combines appointment creation with dynamic field values.
 */
exports.CreateServiceAppointmentWithCustomDataSchema = zod_1.default.object({
    appointment: exports.CreateServiceAppointmentSchema.describe("Appointment data"),
    customData: zod_1.default.record(zod_1.default.string(), appointment_additional_info_schema_1.DynamicFieldValueSchema).default({}).describe("Custom field data captured during booking"),
});
/**
 * Schema for an appointment with its additional info.
 * Used for displaying complete appointment details.
 */
exports.ServiceAppointmentWithAdditionalInfoSchema = zod_1.default.object({
    appointment: exports.ServiceAppointmentSchema.describe("Appointment data"),
    additionalInfo: appointment_additional_info_schema_1.AppointmentAdditionalInfoSchema.describe("Additional captured field values"),
});
