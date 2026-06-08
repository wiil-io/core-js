import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";
import { ExternalRefSchema, ReservationStatus } from "../../type-definitions";

/**
 * @fileoverview Table reservation schema definitions.
 * @module business-mgt/reservation-mgt/table-reservation
 */

// ============================================================================
// TABLE RESERVATION SCHEMA
// ============================================================================

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
export const TableReservationSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the table reservation is booked. Null applies when the reservation is not location-specific."),
    channelId: z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    resourceId: z.string().describe("Table type/category ID"),
    customerId: z.string().describe("Customer ID"),
    floorPlanId: z.string().nullable().optional().describe("Floor plan ID for table layout"),
    floorPlanSectionId: z.string().nullable().optional().describe("Floor plan section ID for table grouping"),
    personsNumber: z.number().int().positive().describe("Party size"),
    time: z.number().describe("Reservation start timestamp"),
    duration: z.number().int().positive().describe("Expected reservation duration in minutes"),
    status: z.enum(ReservationStatus).default(ReservationStatus.PENDING).describe("Table reservation lifecycle status"),
    source: z.string().nullable().optional().describe("Source/channel of the reservation"),
    notes: z.string().nullable().optional().describe("Internal notes"),
    isVip: z.boolean().default(false).describe("Indicates whether the party is VIP"),
    specialRequests: z.string().nullable().optional().describe("Guest special requests"),
    externalRef: ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new table reservation.
 * Omits auto-generated fields.
 */
export const CreateTableReservationSchema = TableReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing table reservation.
 * All fields optional except id.
 */
export const UpdateTableReservationSchema = CreateTableReservationSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the table reservation to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type TableReservation = z.infer<typeof TableReservationSchema>;
export type CreateTableReservation = z.infer<typeof CreateTableReservationSchema>;
export type UpdateTableReservation = z.infer<typeof UpdateTableReservationSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
    dateRange?: { start?: number; end?: number };
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
