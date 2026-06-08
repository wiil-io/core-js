import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";

/**
 * @fileoverview Room assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/room-assignment
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Room assignment lifecycle status.
 *
 * @enum {string}
 */
export enum RoomAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released",
}

/**
 * Room assignment lock type.
 *
 * @enum {string}
 */
export enum RoomAssignmentType {
    SOFT = "soft",
    HARD = "hard",
}

// ============================================================================
// ROOM ASSIGNMENT SCHEMA
// ============================================================================

/**
 * Room assignment schema.
 * Records the physical room instance assigned to a room reservation.
 *
 * @typedef {Object} RoomAssignment
 * @property {string} [locationId] - Business location where the room is assigned
 * @property {string} reservationId - Room reservation ID
 * @property {string} roomInstanceId - Physical room resource instance ID
 * @property {RoomAssignmentType} assignmentType - Assignment lock type
 * @property {RoomAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [housekeepingNotes] - Housekeeping handoff notes
 * @property {string} [notes] - Operational staff notes
 */
export const RoomAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the assigned room is located."),
    reservationId: z.string().describe("RoomReservation ID. This link is immutable after assignment creation."),
    roomInstanceId: z.string().describe("ResourceInstance ID for the physical room assigned to the reservation."),
    assignmentType: z.enum(RoomAssignmentType).default(RoomAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be optimized; hard assignments are staff-locked."),
    status: z.enum(RoomAssignmentStatus).default(RoomAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    housekeepingNotes: z.string().nullable().optional().describe("Housekeeping handoff notes for this room and guest pairing."),
    notes: z.string().nullable().optional().describe("Operational note for staff about this room assignment."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new room assignment.
 * Omits auto-generated fields.
 */
export const CreateRoomAssignmentSchema = RoomAssignmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing room assignment.
 * All fields optional except id.
 */
export const UpdateRoomAssignmentSchema = CreateRoomAssignmentSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the room assignment to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RoomAssignment = z.infer<typeof RoomAssignmentSchema>;
export type CreateRoomAssignment = z.infer<typeof CreateRoomAssignmentSchema>;
export type UpdateRoomAssignment = z.infer<typeof UpdateRoomAssignmentSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Room assignment filter options.
 * @interface RoomAssignmentFilters
 */
export interface RoomAssignmentFilters {
    /** Filter by room reservation ID */
    reservationId?: string;
    /** Filter by room resource instance ID */
    roomInstanceId?: string;
    /** Filter by assignment statuses */
    status?: RoomAssignmentStatus[];
    /** Filter by assignment lock type */
    assignmentType?: RoomAssignmentType;
    /** Filter by assigning staff user ID */
    assignedBy?: string;
    /** Filter by business location ID */
    locationId?: string;
}

/**
 * Room assignment sorting options.
 * @interface RoomAssignmentSorting
 */
export interface RoomAssignmentSorting {
    /** Field to sort by */
    field: "assignedAt" | "releasedAt" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Room assignment query options.
 * @interface RoomAssignmentQueryOptions
 */
export interface RoomAssignmentQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: RoomAssignmentFilters;
    /** Optional sorting */
    sorting?: RoomAssignmentSorting;
}
