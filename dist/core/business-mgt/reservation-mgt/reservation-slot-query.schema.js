"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationSlotQueryResponseSchema = exports.RentalReservationSlotQueryResponseSchema = exports.RoomReservationSlotQueryResponseSchema = exports.TableReservationSlotQueryResponseSchema = exports.RentalCandidateSlotSchema = exports.RoomCandidateSlotSchema = exports.ReservationCandidateSlotSchema = exports.ReservationSlotQueryRequestSchema = exports.RentalReservationSlotQueryRequestSchema = exports.RoomReservationSlotQueryRequestSchema = exports.TableReservationSlotQueryRequestSchema = exports.ReservationSlotResourceTypeSchema = exports.ReservationTimeOfDayValueSchema = exports.ReservationLocalDateSchema = void 0;
const zod_1 = require("zod");
const type_definitions_1 = require("../../type-definitions");
const reservation_room_schema_1 = require("./reservation-room.schema");
/**
 * @fileoverview Reservation slot query request and response schemas.
 * @module business-mgt/reservation-mgt/slot-query
 */
// ============================================================================
// SCALAR SCHEMAS
// ============================================================================
/**
 * Reservation local date schema.
 * Validates business-local dates in YYYY-MM-DD format.
 *
 * @typedef {string} ReservationLocalDate
 */
exports.ReservationLocalDateSchema = zod_1.z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "localDate must be YYYY-MM-DD");
/**
 * Reservation time-of-day value schema.
 * Validates human-readable 12-hour local times such as "9:30 AM".
 *
 * @typedef {string} ReservationTimeOfDayValue
 */
exports.ReservationTimeOfDayValueSchema = zod_1.z
    .string()
    .regex(/^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i, "startTimeOfDay must be h:mm AM/PM");
/**
 * Reservation slot resource type schema.
 * Restricts slot queries to supported reservation resource types.
 *
 * @typedef {ResourceType} ReservationSlotResourceType
 */
exports.ReservationSlotResourceTypeSchema = zod_1.z.union([
    zod_1.z.literal(type_definitions_1.ResourceType.TABLE),
    zod_1.z.literal(type_definitions_1.ResourceType.ROOM),
    zod_1.z.literal(type_definitions_1.ResourceType.RENTAL),
]);
const ReservationSlotQueryRequestBaseSchema = zod_1.z.object({
    locationId: zod_1.z.string().nullable().optional().describe("Optional business location ID used to scope slot generation."),
    resourceId: zod_1.z.string().nullable().optional().describe("Optional resource or category ID used to scope slot generation."),
    localDate: exports.ReservationLocalDateSchema.describe("Business-local date to generate slots for."),
    maxResults: zod_1.z.number().int().positive().max(1000).default(20).describe("Maximum number of slots returned by the query."),
});
// ============================================================================
// REQUEST SCHEMAS
// ============================================================================
/**
 * Table reservation slot query request schema.
 * Requests candidate table reservation slots for a business-local date.
 *
 * @typedef {Object} TableReservationSlotQueryRequest
 * @property {ResourceType} resourceType - Table resource type discriminator
 * @property {string} [locationId] - Business location used to scope slot generation
 * @property {string} [resourceId] - Resource or category used to scope slot generation
 * @property {string} localDate - Business-local date to generate slots for
 * @property {number} maxResults - Maximum number of slots returned
 * @property {number} partySize - Number of guests in the party
 * @property {string} [floorPlanId] - Floor plan used to scope table slots
 * @property {string} [floorPlanSectionId] - Preferred floor plan section
 */
exports.TableReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.TABLE),
    partySize: zod_1.z.number().int().positive().describe("Number of guests in the table reservation party."),
    floorPlanId: zod_1.z.string().nullable().optional().describe("Optional floor plan ID used to scope table slot generation."),
    floorPlanSectionId: zod_1.z.string().nullable().optional().describe("Optional floor plan section ID used as a table preference."),
});
/**
 * Room reservation slot query request schema.
 * Requests candidate room stay slots for a business-local check-in date.
 *
 * @typedef {Object} RoomReservationSlotQueryRequest
 * @property {ResourceType} resourceType - Room resource type discriminator
 * @property {string} [locationId] - Business location used to scope slot generation
 * @property {string} [resourceId] - Resource or category used to scope slot generation
 * @property {string} localDate - Business-local check-in date
 * @property {number} maxResults - Maximum number of slots returned
 * @property {number} nights - Requested stay length in nights
 * @property {number} [occupancy] - Requested room occupancy
 */
exports.RoomReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.ROOM),
    nights: zod_1.z.number().int().positive().default(1).describe("Requested stay length in nights."),
    occupancy: zod_1.z.number().int().positive().nullable().optional().describe("Requested room occupancy."),
});
/**
 * Rental reservation slot query request schema.
 * Requests candidate rental slots for intra-day or multi-day rental periods.
 *
 * @typedef {Object} RentalReservationSlotQueryRequest
 * @property {ResourceType} resourceType - Rental resource type discriminator
 * @property {string} [locationId] - Business location used to scope slot generation
 * @property {string} [resourceId] - Resource or category used to scope slot generation
 * @property {string} localDate - Business-local pickup date
 * @property {number} maxResults - Maximum number of slots returned
 * @property {string} [returnDate] - Return date for multi-day rentals
 * @property {string} [tierId] - Requested rental tier ID
 * @property {number} [durationMinutes] - Requested intra-day duration in minutes
 */
exports.RentalReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.RENTAL),
    returnDate: exports.ReservationLocalDateSchema.nullable().optional().describe("Return date in YYYY-MM-DD format. Omit for intra-day rentals that use durationMinutes."),
    tierId: zod_1.z.string().nullable().optional().describe("Requested rental tier ID from ReservationSettings."),
    durationMinutes: zod_1.z.number().int().positive().nullable().optional().describe("Requested intra-day rental duration in minutes."),
});
/**
 * Reservation slot query request schema.
 * Discriminated union of supported slot query request types.
 *
 * @typedef {TableReservationSlotQueryRequest|RoomReservationSlotQueryRequest|RentalReservationSlotQueryRequest} ReservationSlotQueryRequest
 */
exports.ReservationSlotQueryRequestSchema = zod_1.z.discriminatedUnion("resourceType", [
    exports.TableReservationSlotQueryRequestSchema,
    exports.RoomReservationSlotQueryRequestSchema,
    exports.RentalReservationSlotQueryRequestSchema,
]);
// ============================================================================
// CANDIDATE SLOT SCHEMAS
// ============================================================================
/**
 * Reservation candidate slot schema.
 * Shared time-of-day window model for table availability candidates.
 *
 * @typedef {Object} ReservationCandidateSlot
 * @property {string} resourceId - Resource category or type ID
 * @property {string} startTimeOfDay - Local start time
 * @property {number} startMinuteOfDay - Local start minute of day
 * @property {number} endMinuteOfDay - Local end minute of day
 * @property {number} startTimeUtcSec - Slot start timestamp in UTC seconds
 * @property {number} endTimeUtcSec - Slot end timestamp in UTC seconds
 * @property {boolean} isAvailable - Whether the slot can be booked
 * @property {number} [capacityRemaining] - Remaining capacity for the slot
 * @property {number} [priceQuote] - Quoted price before final checkout
 */
exports.ReservationCandidateSlotSchema = zod_1.z.object({
    resourceId: zod_1.z.string().describe("Resource category or type ID represented by this candidate slot."),
    startTimeOfDay: exports.ReservationTimeOfDayValueSchema.describe("Local start time in h:mm AM/PM format."),
    startMinuteOfDay: zod_1.z.number().int().min(0).max(1439).describe("Local start minute within the business day."),
    endMinuteOfDay: zod_1.z.number().int().min(1).max(1440).describe("Local end minute within the business day."),
    startTimeUtcSec: zod_1.z.number().describe("Slot start timestamp in UTC seconds."),
    endTimeUtcSec: zod_1.z.number().describe("Slot end timestamp in UTC seconds."),
    isAvailable: zod_1.z.boolean().default(true).describe("Whether this slot can currently be booked."),
    capacityRemaining: zod_1.z.number().int().nonnegative().nullable().optional().describe("Optional remaining capacity for capacity-based reservation modes."),
    priceQuote: zod_1.z.number().nonnegative().nullable().optional().describe("Optional quoted price for the slot before final checkout."),
}).superRefine((slot, ctx) => {
    if (slot.endMinuteOfDay <= slot.startMinuteOfDay) {
        ctx.addIssue({
            code: "custom",
            path: ["endMinuteOfDay"],
            message: "endMinuteOfDay must be greater than startMinuteOfDay",
        });
    }
    if (slot.endTimeUtcSec <= slot.startTimeUtcSec) {
        ctx.addIssue({
            code: "custom",
            path: ["endTimeUtcSec"],
            message: "endTimeUtcSec must be greater than startTimeUtcSec",
        });
    }
});
/**
 * Room candidate slot schema.
 * Date-range model for room availability candidates measured in nights.
 *
 * @typedef {Object} RoomCandidateSlot
 * @property {string} resourceId - Room resource or category ID
 * @property {string} checkInDate - Check-in date
 * @property {string} checkOutDate - Check-out date
 * @property {number} nights - Number of nights
 * @property {number} [occupancy] - Maximum guests supported
 * @property {number} roomsAvailable - Rooms still bookable
 * @property {RoomRatePerNight[]} ratePerNight - Per-date nightly rates
 * @property {number} totalWithTax - Total including tax
 * @property {boolean} isAvailable - Whether the slot can be booked
 */
exports.RoomCandidateSlotSchema = zod_1.z.object({
    resourceId: zod_1.z.string().describe("Room type or category ID represented by this candidate slot."),
    checkInDate: exports.ReservationLocalDateSchema.describe("Check-in date in YYYY-MM-DD format."),
    checkOutDate: exports.ReservationLocalDateSchema.describe("Check-out date in YYYY-MM-DD format."),
    nights: zod_1.z.number().int().positive().describe("Number of nights in the candidate stay."),
    occupancy: zod_1.z.number().int().positive().nullable().optional().describe("Maximum guests supported by this room type."),
    roomsAvailable: zod_1.z.number().int().nonnegative().describe("Number of rooms still bookable for the requested dates."),
    ratePerNight: zod_1.z.array(reservation_room_schema_1.RoomRatePerNightSchema).default([]).describe("Per-date nightly rates used to quote this stay."),
    totalWithTax: zod_1.z.number().nonnegative().describe("Pre-computed total including tax."),
    isAvailable: zod_1.z.boolean().default(true).describe("Whether this room slot can currently be booked."),
}).superRefine((slot, ctx) => {
    if (slot.checkOutDate <= slot.checkInDate) {
        ctx.addIssue({
            code: "custom",
            path: ["checkOutDate"],
            message: "checkOutDate must be after checkInDate",
        });
    }
});
/**
 * Rental candidate slot schema.
 * Hybrid model supporting both intra-day time windows and multi-day date ranges.
 *
 * @typedef {Object} RentalCandidateSlot
 * @property {string} resourceId - Rental resource or category ID
 * @property {string} pickupDate - Pickup date
 * @property {string} returnDate - Return date
 * @property {string} [pickupTimeOfDay] - Pickup time for intra-day rentals
 * @property {string} [returnTimeOfDay] - Return time for intra-day rentals
 * @property {number} [durationMinutes] - Intra-day duration in minutes
 * @property {number} startTimeUtcSec - Pickup timestamp in UTC seconds
 * @property {number} endTimeUtcSec - Return timestamp in UTC seconds
 * @property {number} unitsAvailable - Units still available
 * @property {number} totalWithTax - Total including tax
 * @property {number} [priceQuote] - Quoted price before tax
 * @property {boolean} isAvailable - Whether the slot can be booked
 */
exports.RentalCandidateSlotSchema = zod_1.z.object({
    resourceId: zod_1.z.string().describe("Rental resource type or category ID represented by this candidate slot."),
    pickupDate: exports.ReservationLocalDateSchema.describe("Pickup date in YYYY-MM-DD format."),
    returnDate: exports.ReservationLocalDateSchema.describe("Return date in YYYY-MM-DD format. Same as pickupDate for intra-day rentals."),
    pickupTimeOfDay: exports.ReservationTimeOfDayValueSchema.nullable().optional().describe("Pickup time of day for intra-day rentals."),
    returnTimeOfDay: exports.ReservationTimeOfDayValueSchema.nullable().optional().describe("Return time of day for intra-day rentals."),
    durationMinutes: zod_1.z.number().int().positive().nullable().optional().describe("Duration in minutes for intra-day rentals."),
    startTimeUtcSec: zod_1.z.number().describe("Pickup timestamp in UTC seconds."),
    endTimeUtcSec: zod_1.z.number().describe("Return timestamp in UTC seconds."),
    unitsAvailable: zod_1.z.number().int().nonnegative().describe("Number of rental units still available for the requested period."),
    totalWithTax: zod_1.z.number().nonnegative().describe("Pre-computed total including tax."),
    priceQuote: zod_1.z.number().nonnegative().nullable().optional().describe("Quoted price before tax."),
    isAvailable: zod_1.z.boolean().default(true).describe("Whether this rental slot can currently be booked."),
}).superRefine((slot, ctx) => {
    if (slot.returnDate < slot.pickupDate) {
        ctx.addIssue({
            code: "custom",
            path: ["returnDate"],
            message: "returnDate must be on or after pickupDate",
        });
    }
    if (slot.endTimeUtcSec <= slot.startTimeUtcSec) {
        ctx.addIssue({
            code: "custom",
            path: ["endTimeUtcSec"],
            message: "endTimeUtcSec must be greater than startTimeUtcSec",
        });
    }
    const hasPickupTime = slot.pickupTimeOfDay != null;
    const hasReturnTime = slot.returnTimeOfDay != null;
    if (hasPickupTime !== hasReturnTime) {
        ctx.addIssue({
            code: "custom",
            path: ["returnTimeOfDay"],
            message: "pickupTimeOfDay and returnTimeOfDay must both be present or both absent",
        });
    }
});
// ============================================================================
// RESPONSE SCHEMAS
// ============================================================================
/**
 * Table reservation slot query response schema.
 * Returns generated table slot candidates for the requested date.
 *
 * @typedef {Object} TableReservationSlotQueryResponse
 * @property {ResourceType} resourceType - Table resource type discriminator
 * @property {string} localDate - Requested business-local date
 * @property {number} generatedAt - Generation timestamp in UTC seconds
 * @property {ReservationCandidateSlot[]} slots - Candidate table slots
 */
exports.TableReservationSlotQueryResponseSchema = zod_1.z.object({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.TABLE),
    localDate: exports.ReservationLocalDateSchema,
    generatedAt: zod_1.z.number().describe("Generation timestamp in UTC seconds."),
    slots: zod_1.z.array(exports.ReservationCandidateSlotSchema).describe("Available candidate table slots."),
});
/**
 * Room reservation slot query response schema.
 * Returns generated room slot candidates for the requested stay.
 *
 * @typedef {Object} RoomReservationSlotQueryResponse
 * @property {ResourceType} resourceType - Room resource type discriminator
 * @property {string} checkInDate - Requested check-in date
 * @property {string} checkOutDate - Requested check-out date
 * @property {number} nights - Requested number of nights
 * @property {number} generatedAt - Generation timestamp in UTC seconds
 * @property {RoomCandidateSlot[]} slots - Candidate room slots
 */
exports.RoomReservationSlotQueryResponseSchema = zod_1.z.object({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.ROOM),
    checkInDate: exports.ReservationLocalDateSchema.describe("Requested check-in date."),
    checkOutDate: exports.ReservationLocalDateSchema.describe("Requested check-out date."),
    nights: zod_1.z.number().int().positive().describe("Requested number of nights."),
    generatedAt: zod_1.z.number().describe("Generation timestamp in UTC seconds."),
    slots: zod_1.z.array(exports.RoomCandidateSlotSchema).describe("Available candidate room slots."),
});
/**
 * Rental reservation slot query response schema.
 * Returns generated rental slot candidates for the requested period.
 *
 * @typedef {Object} RentalReservationSlotQueryResponse
 * @property {ResourceType} resourceType - Rental resource type discriminator
 * @property {string} pickupDate - Requested pickup date
 * @property {string} returnDate - Requested return date
 * @property {number} generatedAt - Generation timestamp in UTC seconds
 * @property {RentalCandidateSlot[]} slots - Candidate rental slots
 */
exports.RentalReservationSlotQueryResponseSchema = zod_1.z.object({
    resourceType: zod_1.z.literal(type_definitions_1.ResourceType.RENTAL),
    pickupDate: exports.ReservationLocalDateSchema.describe("Requested pickup date."),
    returnDate: exports.ReservationLocalDateSchema.describe("Requested return date."),
    generatedAt: zod_1.z.number().describe("Generation timestamp in UTC seconds."),
    slots: zod_1.z.array(exports.RentalCandidateSlotSchema).describe("Available candidate rental slots."),
});
/**
 * Reservation slot query response schema.
 * Discriminated union of supported slot query response types.
 *
 * @typedef {TableReservationSlotQueryResponse|RoomReservationSlotQueryResponse|RentalReservationSlotQueryResponse} ReservationSlotQueryResponse
 */
exports.ReservationSlotQueryResponseSchema = zod_1.z.discriminatedUnion("resourceType", [
    exports.TableReservationSlotQueryResponseSchema,
    exports.RoomReservationSlotQueryResponseSchema,
    exports.RentalReservationSlotQueryResponseSchema,
]);
