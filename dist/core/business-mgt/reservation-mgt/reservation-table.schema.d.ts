import { z } from "zod";
import { ReservationStatus } from "../../type-definitions";
/**
 * @fileoverview Table reservation schema definitions.
 * @module business-mgt/reservation-mgt/table-reservation
 */
/**
 * Table reservation schema.
 * Represents a reservation request for a table-based venue such as a restaurant.
 *
 * @typedef {Object} TableReservation
 * @property {string} [locationId] - Business location where the table reservation is booked
 * @property {string} [channelId] - Channel that created or owns the booking
 * @property {string} resourceId - Table resource or category being reserved
 * @property {string} customerId - Customer who owns the reservation
 * @property {string} [floorPlanId] - Floor plan used for table placement
 * @property {string} [floorPlanSectionId] - Preferred or assigned floor plan section
 * @property {number} personsNumber - Number of guests in the party
 * @property {number} time - Reservation start timestamp
 * @property {number} duration - Reservation duration in minutes
 * @property {ReservationStatus} status - Current table reservation status
 * @property {string} [source] - Source or channel label for the reservation
 * @property {string} [notes] - Internal staff notes
 * @property {boolean} isVip - Whether the reservation is marked as VIP
 * @property {string} [specialRequests] - Customer-facing special requests
 * @property {Object} [externalRef] - External platform reference
 */
export declare const TableReservationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceId: z.ZodString;
    customerId: z.ZodString;
    floorPlanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personsNumber: z.ZodNumber;
    time: z.ZodNumber;
    duration: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<typeof ReservationStatus>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isVip: z.ZodDefault<z.ZodBoolean>;
    specialRequests: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new table reservation.
 * Omits auto-generated fields.
 */
export declare const CreateTableReservationSchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    time: z.ZodNumber;
    duration: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<typeof ReservationStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    resourceId: z.ZodString;
    floorPlanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personsNumber: z.ZodNumber;
    isVip: z.ZodDefault<z.ZodBoolean>;
    specialRequests: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing table reservation.
 * All fields optional except id.
 */
export declare const UpdateTableReservationSchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    time: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customerId: z.ZodOptional<z.ZodString>;
    channelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    externalRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    resourceId: z.ZodOptional<z.ZodString>;
    floorPlanId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    floorPlanSectionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    personsNumber: z.ZodOptional<z.ZodNumber>;
    isVip: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    specialRequests: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ReservationStatus>>>;
}, z.core.$strip>;
export type TableReservation = z.infer<typeof TableReservationSchema>;
export type CreateTableReservation = z.infer<typeof CreateTableReservationSchema>;
export type UpdateTableReservation = z.infer<typeof UpdateTableReservationSchema>;
/**
 * Table reservation filter options.
 * @interface TableReservationFilters
 */
export interface TableReservationFilters {
    /** Text search across table reservation fields */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by booking channel ID */
    channelId?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by reservation statuses */
    status?: ReservationStatus[];
    /** Filter by table resource or instance ID */
    tableId?: string;
    /** Filter by reservation start timestamp range */
    dateRange?: {
        start?: number;
        end?: number;
    };
    /** Filter by external source platform */
    externalSource?: string;
}
/**
 * Table reservation sorting options.
 * @interface TableReservationSorting
 */
export interface TableReservationSorting {
    /** Field to sort by */
    field: "time" | "duration" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Table reservation query options.
 * @interface TableReservationQueryOptions
 */
export interface TableReservationQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: TableReservationFilters;
    /** Optional sorting */
    sorting?: TableReservationSorting;
}
