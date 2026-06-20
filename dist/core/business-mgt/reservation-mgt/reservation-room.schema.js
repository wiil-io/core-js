"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomReservationSchema = exports.CreateRoomReservationSchema = exports.RoomReservationSchema = exports.RoomRatePerNightSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
/**
 * @fileoverview Room reservation schema definitions.
 * @module business-mgt/reservation-mgt/room-reservation
 */
// ============================================================================
// ROOM RESERVATION SCHEMAS
// ============================================================================
/**
 * Room rate per night schema.
 * Captures the nightly rate snapshot for a room reservation.
 *
 * @typedef {Object} RoomRatePerNight
 * @property {string} date - Business-local rate date in YYYY-MM-DD format
 * @property {number} amount - Nightly rate amount for the date
 */
exports.RoomRatePerNightSchema = zod_1.z.object({
    date: zod_1.z.string().describe("Business-local rate date in YYYY-MM-DD format."),
    amount: zod_1.z.number().nonnegative().describe("Nightly room rate amount for this date before aggregation."),
});
/**
 * Room reservation schema.
 * Represents a lodging reservation with check-in/check-out dates and nightly pricing.
 *
 * @typedef {Object} RoomReservation
 * @property {string} [locationId] - Business location where the room reservation is booked
 * @property {string} [channelId] - Channel that created or owns the booking
 * @property {string} resourceId - Room resource or category being reserved
 * @property {string} guestId - Guest or customer who owns the stay
 * @property {number} personsNumber - Number of guests in the party
 * @property {number} checkIn - Check-in timestamp
 * @property {number} checkOut - Check-out timestamp
 * @property {number} nights - Number of nights in the stay
 * @property {ReservationStatus} status - Current room reservation status
 * @property {string} [source] - Source or channel label for the reservation
 * @property {RoomRatePerNight[]} ratePerNight - Nightly pricing breakdown
 * @property {number} totalWithTax - Total reservation amount including tax
 * @property {number} deposit - Deposit amount collected or required
 * @property {PaymentStatus} [paymentStatus] - Payment status for the stay
 * @property {string} [notes] - Internal staff notes
 * @property {Object} [externalRef] - External platform reference
 */
exports.RoomReservationSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the room reservation is booked. Null applies when the reservation is not location-specific."),
    channelId: zod_1.z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    resourceId: zod_1.z.string().describe("Room type/category ID"),
    guestId: zod_1.z.string().describe("Guest/customer ID"),
    personsNumber: zod_1.z.number().int().positive().describe("Party size"),
    checkIn: zod_1.z.number().describe("Check-in timestamp"),
    checkOut: zod_1.z.number().describe("Check-out timestamp"),
    nights: zod_1.z.number().int().positive().describe("Number of nights"),
    status: zod_1.z.enum(type_definitions_1.ReservationStatus).default(type_definitions_1.ReservationStatus.PENDING).describe("Room reservation lifecycle status"),
    source: zod_1.z.string().nullable().optional().describe("Source/channel of the reservation"),
    ratePerNight: zod_1.z.array(exports.RoomRatePerNightSchema).default([]).describe("Per-night pricing"),
    totalWithTax: zod_1.z.number().nonnegative().describe("Total amount including tax"),
    deposit: zod_1.z.number().nonnegative().default(0).describe("Deposit amount"),
    paymentStatus: zod_1.z.enum(type_definitions_1.PaymentStatus).nullable().optional().describe("Payment status"),
    notes: zod_1.z.string().nullable().optional().describe("Internal notes"),
    externalRef: type_definitions_1.ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
}).superRefine((data, ctx) => {
    if (data.checkOut <= data.checkIn) {
        ctx.addIssue({
            code: "custom",
            path: ["checkOut"],
            message: "checkOut must be greater than checkIn",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new room reservation.
 * Omits auto-generated fields.
 */
exports.CreateRoomReservationSchema = exports.RoomReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing room reservation.
 * All fields optional except id.
 */
exports.UpdateRoomReservationSchema = exports.CreateRoomReservationSchema.partial().extend({
    id: zod_1.z.string().describe("Unique identifier of the room reservation to update."),
    // Re-declared without the base `.default()` so partial updates don't inject a status the caller never set
    status: zod_1.z.enum(type_definitions_1.ReservationStatus).nullable().optional().describe("Room reservation lifecycle status"),
});
