import { z } from "zod";
import { PaymentStatus, ReservationStatus } from "../../type-definitions";
/**
 * @fileoverview Room reservation schema definitions.
 * @module business-mgt/reservation-mgt/room-reservation
 */
/**
 * Room rate per night schema.
 * Captures the nightly rate snapshot for a room reservation.
 *
 * @typedef {Object} RoomRatePerNight
 * @property {string} date - Business-local rate date in YYYY-MM-DD format
 * @property {number} amount - Nightly rate amount for the date
 */
export declare const RoomRatePerNightSchema: z.ZodObject<{
    date: z.ZodString;
    amount: z.ZodNumber;
}, z.core.$strip>;
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
export declare const RoomReservationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodString;
    guestId: z.ZodString;
    personsNumber: z.ZodNumber;
    checkIn: z.ZodNumber;
    checkOut: z.ZodNumber;
    nights: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<typeof ReservationStatus>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ratePerNight: z.ZodDefault<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        amount: z.ZodNumber;
    }, z.core.$strip>>>;
    totalWithTax: z.ZodNumber;
    deposit: z.ZodDefault<z.ZodNumber>;
    paymentStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PaymentStatus>>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new room reservation.
 * Omits auto-generated fields.
 */
export declare const CreateRoomReservationSchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nights: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<typeof ReservationStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    paymentStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PaymentStatus>>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    resourceId: z.ZodString;
    personsNumber: z.ZodNumber;
    guestId: z.ZodString;
    checkIn: z.ZodNumber;
    checkOut: z.ZodNumber;
    ratePerNight: z.ZodDefault<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        amount: z.ZodNumber;
    }, z.core.$strip>>>;
    totalWithTax: z.ZodNumber;
    deposit: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Schema for updating an existing room reservation.
 * All fields optional except id.
 */
export declare const UpdateRoomReservationSchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    nights: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ReservationStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    paymentStatus: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof PaymentStatus>>>>;
    externalRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    resourceId: z.ZodOptional<z.ZodString>;
    personsNumber: z.ZodOptional<z.ZodNumber>;
    guestId: z.ZodOptional<z.ZodString>;
    checkIn: z.ZodOptional<z.ZodNumber>;
    checkOut: z.ZodOptional<z.ZodNumber>;
    ratePerNight: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        amount: z.ZodNumber;
    }, z.core.$strip>>>>;
    totalWithTax: z.ZodOptional<z.ZodNumber>;
    deposit: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
export type RoomRatePerNight = z.infer<typeof RoomRatePerNightSchema>;
export type RoomReservation = z.infer<typeof RoomReservationSchema>;
export type CreateRoomReservation = z.infer<typeof CreateRoomReservationSchema>;
export type UpdateRoomReservation = z.infer<typeof UpdateRoomReservationSchema>;
/**
 * Room reservation filter options.
 * @interface RoomReservationFilters
 */
export interface RoomReservationFilters {
    /** Text search across room reservation fields */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by booking channel ID */
    channelId?: string;
    /** Filter by room resource ID */
    resourceId?: string;
    /** Filter by guest/customer ID */
    guestId?: string;
    /** Filter by reservation statuses */
    status?: ReservationStatus[];
    /** Filter by payment statuses */
    paymentStatus?: PaymentStatus[];
    /** Filter by check-in timestamp range */
    dateRange?: {
        start?: number;
        end?: number;
    };
    /** Filter by external source platform */
    externalSource?: string;
}
/**
 * Room reservation sorting options.
 * @interface RoomReservationSorting
 */
export interface RoomReservationSorting {
    /** Field to sort by */
    field: "checkIn" | "checkOut" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Room reservation query options.
 * @interface RoomReservationQueryOptions
 */
export interface RoomReservationQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: RoomReservationFilters;
    /** Optional sorting */
    sorting?: RoomReservationSorting;
}
