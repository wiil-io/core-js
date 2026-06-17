import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";

/**
 * @fileoverview Table assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/table-assignment
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Table assignment lock type.
 *
 * @enum {string}
 */
export enum TableAssignmentType {
    SOFT = "soft",
    HARD = "hard",
}

/**
 * Table assignment lifecycle status.
 *
 * @enum {string}
 */
export enum TableAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released",
}

// ============================================================================
// TABLE ASSIGNMENT SCHEMA
// ============================================================================

/**
 * Table assignment schema.
 * Records the physical table instance assigned to a table reservation.
 *
 * @typedef {Object} TableAssignment
 * @property {string} [locationId] - Business location where the table is assigned
 * @property {string} reservationId - Table reservation ID
 * @property {string} tableInstanceId - Physical table resource instance ID
 * @property {string} floorPlanId - Floor plan ID captured at assignment time
 * @property {string} [floorPlanSectionId] - Floor plan section ID captured at assignment time
 * @property {number} slotStart - Reservation slot start, copied from reservation at assignment time
 * @property {number} slotEnd - Reservation slot end, copied from reservation at assignment time
 * @property {TableAssignmentType} assignmentType - Assignment lock type
 * @property {TableAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [notes] - Operational staff notes
 */
export const TableAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the assigned table is located."),
    reservationId: z.string().describe("TableReservation ID. This link is immutable after assignment creation."),
    tableInstanceId: z.string().describe("ResourceInstance ID for the physical table assigned to the reservation."),
    floorPlanId: z.string().describe("Floor plan ID captured at the time of assignment."),
    floorPlanSectionId: z.string().nullable().optional().describe("Floor plan section ID captured at the time of assignment."),
    slotStart: z.number().int().positive().describe("Reservation slot start — copied from reservation at assignment time"),
    slotEnd: z.number().int().positive().describe("Reservation slot end — copied from reservation at assignment time"),
    assignmentType: z.enum(TableAssignmentType).default(TableAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be optimized; hard assignments are staff-locked."),
    status: z.enum(TableAssignmentStatus).default(TableAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    notes: z.string().nullable().optional().describe("Operational note for staff about this table assignment."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type TableAssignment = z.infer<typeof TableAssignmentSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Table assignment filter options.
 * @interface TableAssignmentFilters
 */
export interface TableAssignmentFilters {
    /** Filter by table reservation ID */
    reservationId?: string;
    /** Filter by table resource instance ID */
    tableInstanceId?: string;
    /** Filter by assignment statuses */
    status?: TableAssignmentStatus[];
    /** Filter by assigning staff user ID */
    assignedBy?: string;
    /** Filter by business location ID */
    locationId?: string;
}

/**
 * Table assignment sorting options.
 * @interface TableAssignmentSorting
 */
export interface TableAssignmentSorting {
    /** Field to sort by */
    field: "assignedAt" | "releasedAt" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Table assignment query options.
 * @interface TableAssignmentQueryOptions
 */
export interface TableAssignmentQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: TableAssignmentFilters;
    /** Optional sorting */
    sorting?: TableAssignmentSorting;
}
