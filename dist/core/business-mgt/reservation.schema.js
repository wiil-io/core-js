"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationSchema = exports.CreateReservationSchema = exports.ReservationSchema = exports.UpdateReservationSettingsSchema = exports.ReservationSettingsSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Reservation schema definitions for managing resource reservations.
 * @module business-mgt/reservation
 */
/**
 * Reservation settings schema.
 *
 * @typedef {Object} ReservationSettings
 * @property {string} reservationType - Type of reservation (table, room, rentals, etc.)
 * @property {string} settingType - Type of reservation setting
 * @property {number} [defaultReservationDuration] - Default reservation duration
 * @property {string} [defaultReservationDurationUnit] - Unit of the default reservation duration
 * @property {boolean} isActive - Whether this reservation setting is active
 */
exports.ReservationSettingsSchema = base_schema_1.BaseModelSchema.safeExtend({
    reservationType: zod_1.z.enum(type_definitions_1.ResourceType).describe("Resource type this setting applies to: ROOM, TABLE, RENTAL, or OTHER. Determines which resources inherit these default reservation parameters."),
    settingType: zod_1.z.enum(type_definitions_1.ReservationSettingType).describe("Configuration category defining what aspect of reservations this setting controls. Enables flexible reservation policy management."),
    defaultReservationDuration: zod_1.z.number().int().positive().default(1).optional().describe("Standard reservation length in specified units. Applied as default when customers make reservations via AI Powered Services. Defaults to 1."),
    defaultReservationDurationUnit: zod_1.z.enum(type_definitions_1.ResourceReservationDurationUnit).optional().default(type_definitions_1.ResourceReservationDurationUnit.HOURS).describe("Time unit for defaultReservationDuration: HOURS (restaurant tables, rentals), DAYS (hotel rooms), or MINUTES (short-term use). Defaults to HOURS."),
    isActive: zod_1.z.boolean().default(false).describe("Whether this configuration is currently active and applied to new reservations. Inactive settings are ignored. Defaults to false."),
});
/**
 * Schema for updating existing reservation settings.
 * All fields are optional except id.
 */
exports.UpdateReservationSettingsSchema = exports.ReservationSettingsSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
/**
 * Reservation schema for managing bookings.
 *
 * @typedef {Object} Reservation
 * @property {string} reservationType - Type of reservation
 * @property {string} [resourceId] - ID of the reserved resource (table, room, etc.)
 * @property {string} customerId - Customer ID if registered
 * @property {number} startTime - Reservation start time as Unix timestamp
 * @property {number} [endTime] - Reservation end time as Unix timestamp
 * @property {number} [duration] - Duration based on resource type
 * @property {number} [personsNumber] - Number of people for the reservation
 * @property {number} [totalPrice] - Total price for the reservation
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current reservation status
 * @property {string} [notes] - Special requests or notes
 * @property {string} [cancelReason] - Reason for cancellation, if applicable
 * @property {boolean} isResourceReservation - Indicates if this reservation is for a specific resource
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 */
exports.ReservationSchema = base_schema_1.BaseModelSchema.safeExtend({
    reservationType: zod_1.z.enum(type_definitions_1.ResourceType).describe("Category of reservation: ROOM (hotel stay), TABLE (restaurant seating), RENTAL (hourly/daily equipment/space), or OTHER. Determines pricing model and fulfillment workflow."),
    resourceId: zod_1.z.string().optional().nullable().describe("References specific Resource from reservation-resource.schema being reserved (e.g., 'Table 5', 'Room 101'). Null for general availability reservations without specific resource assignment."),
    customerId: zod_1.z.string().describe("References Customer who made this reservation. Links to customer profile for history, preferences, and communication."),
    startTime: zod_1.z.number().describe("Unix timestamp for reservation start. Critical for availability management, customer notifications, and operational scheduling."),
    endTime: zod_1.z.number().optional().describe("Unix timestamp for reservation end. Calculated from startTime + duration. Used for availability blocking and checkout management."),
    duration: zod_1.z.number().nonnegative().optional().describe("Reservation length in units matching reservationType (hours for TABLE/RENTAL, days for ROOM). Used for pricing calculations and availability management."),
    personsNumber: zod_1.z.number().int().nonnegative().optional().describe("Party size or occupancy count. Used to match customers with appropriately sized resources (table capacity, room occupancy). Critical for resource allocation."),
    totalPrice: zod_1.z.number().nonnegative().optional().describe("Total reservation cost in account's currency. Calculated from duration, resource pricing, and any applicable fees. Used for payment processing."),
    depositPaid: zod_1.z.number().nonnegative().default(0).describe("Deposit amount already paid to secure reservation. Used for payment tracking and no-show protection. Defaults to 0."),
    status: zod_1.z.enum(type_definitions_1.AppointmentStatus).default(type_definitions_1.AppointmentStatus.PENDING).describe("Current reservation status tracking from booking through check-in to completion. Used for operational workflow and customer notifications. Defaults to PENDING."),
    notes: zod_1.z.string().optional().describe("Customer's special requests or preferences (e.g., 'window table', 'early check-in', 'quiet room'). Communicated to staff for enhanced service delivery."),
    cancelReason: zod_1.z.string().nullable().optional().describe("Reason provided when reservation is cancelled. Used for analytics, refund processing, and customer service improvement."),
    isResourceReservation: zod_1.z.boolean().default(false).describe("Whether this is a specific resource reservation (true) or general availability booking (false). True when resourceId is assigned. Defaults to false."),
    serviceConversationConfigId: zod_1.z.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this reservation. Links reservation to deployment channel and conversation history."),
});
/**
 * Schema for creating a new reservation.
 * Omits auto-generated fields.
 */
exports.CreateReservationSchema = exports.ReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    status: true,
    cancelReason: true,
    serviceConversationConfigId: true,
});
/**
 * Schema for updating an existing reservation.
 * All fields are optional except id.
 */
exports.UpdateReservationSchema = exports.CreateReservationSchema.partial().safeExtend({
    id: zod_1.z.string(),
    cancelReason: zod_1.z.string().nullable().optional(),
});
