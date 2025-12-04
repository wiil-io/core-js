import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { AppointmentStatus, ReservationSettingType, ResourceReservationDurationUnit, ResourceType } from "../type-definitions";

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
export const ReservationSettingsSchema = BaseModelSchema.safeExtend({
    reservationType: z.enum(ResourceType).describe("Resource type this setting applies to: ROOM, TABLE, RENTAL, or OTHER. Determines which resources inherit these default reservation parameters."),
    settingType: z.enum(ReservationSettingType).describe("Configuration category defining what aspect of reservations this setting controls. Enables flexible reservation policy management."),

    defaultReservationDuration: z.number().int().positive().default(1).optional().describe("Standard reservation length in specified units. Applied as default when customers make reservations via AI Powered Services. Defaults to 1."),

    defaultReservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().default(ResourceReservationDurationUnit.HOURS).describe("Time unit for defaultReservationDuration: HOURS (restaurant tables, rentals), DAYS (hotel rooms), or MINUTES (short-term use). Defaults to HOURS."),

    isActive: z.boolean().default(false).describe("Whether this configuration is currently active and applied to new reservations. Inactive settings are ignored. Defaults to false."),
});


/**
 * Schema for updating existing reservation settings.
 * All fields are optional except id.
 */
export const UpdateReservationSettingsSchema = ReservationSettingsSchema.partial().safeExtend({
    id: z.string(),
});

export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;

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
export const ReservationSchema = BaseModelSchema.safeExtend({
    reservationType: z.enum(ResourceType).describe("Category of reservation: ROOM (hotel stay), TABLE (restaurant seating), RENTAL (hourly/daily equipment/space), or OTHER. Determines pricing model and fulfillment workflow."),
    resourceId: z.string().optional().nullable().describe("References specific Resource from reservation-resource.schema being reserved (e.g., 'Table 5', 'Room 101'). Null for general availability reservations without specific resource assignment."),
    customerId: z.string().describe("References Customer who made this reservation. Links to customer profile for history, preferences, and communication."),
    startTime: z.number().describe("Unix timestamp for reservation start. Critical for availability management, customer notifications, and operational scheduling."),
    endTime: z.number().optional().describe("Unix timestamp for reservation end. Calculated from startTime + duration. Used for availability blocking and checkout management."),
    duration: z.number().nonnegative().optional().describe("Reservation length in units matching reservationType (hours for TABLE/RENTAL, days for ROOM). Used for pricing calculations and availability management."),
    personsNumber: z.number().int().nonnegative().optional().describe("Party size or occupancy count. Used to match customers with appropriately sized resources (table capacity, room occupancy). Critical for resource allocation."),
    totalPrice: z.number().nonnegative().optional().describe("Total reservation cost in account's currency. Calculated from duration, resource pricing, and any applicable fees. Used for payment processing."),
    depositPaid: z.number().nonnegative().default(0).describe("Deposit amount already paid to secure reservation. Used for payment tracking and no-show protection. Defaults to 0."),
    status: z.enum(AppointmentStatus).default(AppointmentStatus.PENDING).describe("Current reservation status tracking from booking through check-in to completion. Used for operational workflow and customer notifications. Defaults to PENDING."),
    notes: z.string().optional().describe("Customer's special requests or preferences (e.g., 'window table', 'early check-in', 'quiet room'). Communicated to staff for enhanced service delivery."),
    cancelReason: z.string().nullable().optional().describe("Reason provided when reservation is cancelled. Used for analytics, refund processing, and customer service improvement."),
    isResourceReservation: z.boolean().default(false).describe("Whether this is a specific resource reservation (true) or general availability booking (false). True when resourceId is assigned. Defaults to false."),
    serviceConversationConfigId: z.string().nullable().optional().describe("References the AI Powered Services conversation configuration that powered this reservation. Links reservation to deployment channel and conversation history."),
});

/**
 * Schema for creating a new reservation.
 * Omits auto-generated fields.
 */
export const CreateReservationSchema = ReservationSchema.omit({
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
export const UpdateReservationSchema = CreateReservationSchema.partial().safeExtend({
    id: z.string(),
    cancelReason: z.string().nullable().optional(),
});

export type Reservation = z.infer<typeof ReservationSchema>;
export type CreateReservation = z.infer<typeof CreateReservationSchema>;
export type UpdateReservation = z.infer<typeof UpdateReservationSchema>;
