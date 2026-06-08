import { z } from "zod";
import { ResourceType } from "../../type-definitions";
/**
 * @fileoverview Reservation slot query request and response schemas.
 * @module business-mgt/reservation-mgt/slot-query
 */
/**
 * Reservation local date schema.
 * Validates business-local dates in YYYY-MM-DD format.
 *
 * @typedef {string} ReservationLocalDate
 */
export declare const ReservationLocalDateSchema: z.ZodString;
/**
 * Reservation time-of-day value schema.
 * Validates human-readable 12-hour local times such as "9:30 AM".
 *
 * @typedef {string} ReservationTimeOfDayValue
 */
export declare const ReservationTimeOfDayValueSchema: z.ZodString;
/**
 * Reservation slot resource type schema.
 * Restricts slot queries to supported reservation resource types.
 *
 * @typedef {ResourceType} ReservationSlotResourceType
 */
export declare const ReservationSlotResourceTypeSchema: z.ZodUnion<readonly [z.ZodLiteral<ResourceType.TABLE>, z.ZodLiteral<ResourceType.ROOM>, z.ZodLiteral<ResourceType.RENTAL>]>;
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
export declare const TableReservationSlotQueryRequestSchema: z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.TABLE>;
    partySize: z.ZodNumber;
    floorPlanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
export declare const RoomReservationSlotQueryRequestSchema: z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.ROOM>;
    nights: z.ZodDefault<z.ZodNumber>;
    occupancy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
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
export declare const RentalReservationSlotQueryRequestSchema: z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.RENTAL>;
    returnDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Reservation slot query request schema.
 * Discriminated union of supported slot query request types.
 *
 * @typedef {TableReservationSlotQueryRequest|RoomReservationSlotQueryRequest|RentalReservationSlotQueryRequest} ReservationSlotQueryRequest
 */
export declare const ReservationSlotQueryRequestSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.TABLE>;
    partySize: z.ZodNumber;
    floorPlanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.ROOM>;
    nights: z.ZodDefault<z.ZodNumber>;
    occupancy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localDate: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
    resourceType: z.ZodLiteral<ResourceType.RENTAL>;
    returnDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tierId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>], "resourceType">;
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
export declare const ReservationCandidateSlotSchema: z.ZodObject<{
    resourceId: z.ZodString;
    startTimeOfDay: z.ZodString;
    startMinuteOfDay: z.ZodNumber;
    endMinuteOfDay: z.ZodNumber;
    startTimeUtcSec: z.ZodNumber;
    endTimeUtcSec: z.ZodNumber;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    capacityRemaining: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
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
export declare const RoomCandidateSlotSchema: z.ZodObject<{
    resourceId: z.ZodString;
    checkInDate: z.ZodString;
    checkOutDate: z.ZodString;
    nights: z.ZodNumber;
    occupancy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    roomsAvailable: z.ZodNumber;
    ratePerNight: z.ZodDefault<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        amount: z.ZodNumber;
    }, z.core.$strip>>>;
    totalWithTax: z.ZodNumber;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const RentalCandidateSlotSchema: z.ZodObject<{
    resourceId: z.ZodString;
    pickupDate: z.ZodString;
    returnDate: z.ZodString;
    pickupTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    returnTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    startTimeUtcSec: z.ZodNumber;
    endTimeUtcSec: z.ZodNumber;
    unitsAvailable: z.ZodNumber;
    totalWithTax: z.ZodNumber;
    priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const TableReservationSlotQueryResponseSchema: z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.TABLE>;
    localDate: z.ZodString;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        startTimeOfDay: z.ZodString;
        startMinuteOfDay: z.ZodNumber;
        endMinuteOfDay: z.ZodNumber;
        startTimeUtcSec: z.ZodNumber;
        endTimeUtcSec: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        capacityRemaining: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const RoomReservationSlotQueryResponseSchema: z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.ROOM>;
    checkInDate: z.ZodString;
    checkOutDate: z.ZodString;
    nights: z.ZodNumber;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        checkInDate: z.ZodString;
        checkOutDate: z.ZodString;
        nights: z.ZodNumber;
        occupancy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        roomsAvailable: z.ZodNumber;
        ratePerNight: z.ZodDefault<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            amount: z.ZodNumber;
        }, z.core.$strip>>>;
        totalWithTax: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const RentalReservationSlotQueryResponseSchema: z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.RENTAL>;
    pickupDate: z.ZodString;
    returnDate: z.ZodString;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        pickupDate: z.ZodString;
        returnDate: z.ZodString;
        pickupTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        returnTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        startTimeUtcSec: z.ZodNumber;
        endTimeUtcSec: z.ZodNumber;
        unitsAvailable: z.ZodNumber;
        totalWithTax: z.ZodNumber;
        priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Reservation slot query response schema.
 * Discriminated union of supported slot query response types.
 *
 * @typedef {TableReservationSlotQueryResponse|RoomReservationSlotQueryResponse|RentalReservationSlotQueryResponse} ReservationSlotQueryResponse
 */
export declare const ReservationSlotQueryResponseSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.TABLE>;
    localDate: z.ZodString;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        startTimeOfDay: z.ZodString;
        startMinuteOfDay: z.ZodNumber;
        endMinuteOfDay: z.ZodNumber;
        startTimeUtcSec: z.ZodNumber;
        endTimeUtcSec: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
        capacityRemaining: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.ROOM>;
    checkInDate: z.ZodString;
    checkOutDate: z.ZodString;
    nights: z.ZodNumber;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        checkInDate: z.ZodString;
        checkOutDate: z.ZodString;
        nights: z.ZodNumber;
        occupancy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        roomsAvailable: z.ZodNumber;
        ratePerNight: z.ZodDefault<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            amount: z.ZodNumber;
        }, z.core.$strip>>>;
        totalWithTax: z.ZodNumber;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    resourceType: z.ZodLiteral<ResourceType.RENTAL>;
    pickupDate: z.ZodString;
    returnDate: z.ZodString;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        resourceId: z.ZodString;
        pickupDate: z.ZodString;
        returnDate: z.ZodString;
        pickupTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        returnTimeOfDay: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        startTimeUtcSec: z.ZodNumber;
        endTimeUtcSec: z.ZodNumber;
        unitsAvailable: z.ZodNumber;
        totalWithTax: z.ZodNumber;
        priceQuote: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isAvailable: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>], "resourceType">;
export type ReservationLocalDate = z.infer<typeof ReservationLocalDateSchema>;
export type ReservationTimeOfDayValue = z.infer<typeof ReservationTimeOfDayValueSchema>;
export type ReservationSlotResourceType = z.infer<typeof ReservationSlotResourceTypeSchema>;
export type TableReservationSlotQueryRequest = z.infer<typeof TableReservationSlotQueryRequestSchema>;
export type RoomReservationSlotQueryRequest = z.infer<typeof RoomReservationSlotQueryRequestSchema>;
export type RentalReservationSlotQueryRequest = z.infer<typeof RentalReservationSlotQueryRequestSchema>;
export type ReservationSlotQueryRequest = z.infer<typeof ReservationSlotQueryRequestSchema>;
export type ReservationCandidateSlot = z.infer<typeof ReservationCandidateSlotSchema>;
export type RoomCandidateSlot = z.infer<typeof RoomCandidateSlotSchema>;
export type RentalCandidateSlot = z.infer<typeof RentalCandidateSlotSchema>;
export type TableReservationSlotQueryResponse = z.infer<typeof TableReservationSlotQueryResponseSchema>;
export type RoomReservationSlotQueryResponse = z.infer<typeof RoomReservationSlotQueryResponseSchema>;
export type RentalReservationSlotQueryResponse = z.infer<typeof RentalReservationSlotQueryResponseSchema>;
export type ReservationSlotQueryResponse = z.infer<typeof ReservationSlotQueryResponseSchema>;
