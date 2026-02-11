"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceAppointmentSchema = exports.CreateServiceAppointmentSchema = exports.ServiceAppointmentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Service appointment schema definitions for managing appointment bookings.
 * @module business-mgt/service-appointment
 */
/**
 * Service appointment schema.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} customerId - Customer ID if registered
 * @property {number} startTime - Appointment start time as Unix timestamp
 * @property {number} [endTime] - Appointment end time as Unix timestamp
 * @property {number} duration - Duration in minutes
 * @property {number} totalPrice - Total price for the service
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current appointment status
 * @property {string} [assignedUserAccountId] - User account managing the appointment
 * @property {string} [calendarId] - Calendar ID where appointment is stored
 * @property {string} [calendarEventId] - External calendar event ID
 * @property {string} [calendarProvider] - Calendar provider type
 * @property {string} [cancelReason] - Reason for cancellation, if applicable
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 */
exports.ServiceAppointmentSchema = base_schema_1.BaseModelSchema.safeExtend({
    businessServiceId: zod_1.default.string().describe("References Business Service from service-config.schema being booked. Links appointment to service catalog for pricing, duration, and service details."),
    customerId: zod_1.default.string().describe("References Customer who booked this appointment. Links to customer profile for history, preferences, and communication."),
    startTime: zod_1.default.number().describe("Unix timestamp for appointment start. Critical for Service Person scheduling, availability management, and customer notifications."),
    endTime: zod_1.default.number().optional().describe("Unix timestamp for appointment end. Calculated from startTime + duration. Used for calendar blocking and scheduling next appointments."),
    duration: zod_1.default.number().int().positive().default(30).optional().describe("Appointment length in minutes. Typically inherited from Business Service duration but can be customized per appointment. Defaults to 30 minutes."),
    totalPrice: zod_1.default.number().nonnegative().default(0).optional().describe("Total service cost in account's currency. Typically inherited from Business Service price but may include customizations or discounts. Defaults to 0 for complimentary services."),
    depositPaid: zod_1.default.number().nonnegative().default(0).describe("Deposit amount already paid to secure appointment. Used for payment tracking and no-show protection. Defaults to 0."),
    status: zod_1.default.enum(type_definitions_1.AppointmentStatus).default(type_definitions_1.AppointmentStatus.PENDING).describe("Current appointment status tracking from booking through completion or cancellation. Used for operational workflow and customer notifications. Defaults to PENDING."),
    // Calendar Integration
    assignedUserAccountId: zod_1.default.string().nullable().optional().describe("References Service Person assigned to perform this service. Links to accountId from service-person.schema for provider scheduling and workload distribution."),
    calendarId: zod_1.default.string().nullable().optional().describe("External calendar system ID where this appointment is synced (Google Calendar, Outlook, etc.). Enables two-way appointment synchronization."),
    calendarEventId: zod_1.default.string().nullable().optional().describe("Event ID in external calendar system. Used to update or delete calendar events when appointment changes. Links WIIL appointment to calendar provider's event."),
    calendarProvider: zod_1.default.enum(type_definitions_1.CalendarProvider).nullable().optional().describe("Calendar system type (GOOGLE, MICROSOFT, APPLE, etc.). Determines API endpoints and authentication for calendar sync operations."),
    cancelReason: zod_1.default.string().nullable().optional().describe("Reason provided when appointment is cancelled. Used for analytics, refund processing, and service improvement."),
    serviceConversationConfigId: zod_1.default.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this appointment booking. Links appointment to deployment channel and conversation history."),
});
/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields.
 */
exports.CreateServiceAppointmentSchema = exports.ServiceAppointmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    status: true,
    cancelReason: true,
    serviceConversationConfigId: true,
});
/**
 * Schema for updating an existing service appointment.
 * All fields are optional except id.
 */
exports.UpdateServiceAppointmentSchema = exports.CreateServiceAppointmentSchema.partial().safeExtend({
    id: zod_1.default.string(),
    cancelReason: zod_1.default.string().nullable().optional(),
});
