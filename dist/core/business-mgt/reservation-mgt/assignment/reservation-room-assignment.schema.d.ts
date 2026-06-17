import { z } from "zod";
/**
 * @fileoverview Room assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/room-assignment
 */
/**
 * Room assignment lifecycle status.
 *
 * @enum {string}
 */
export declare enum RoomAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released"
}
/**
 * Room assignment lock type.
 *
 * @enum {string}
 */
export declare enum RoomAssignmentType {
    SOFT = "soft",
    HARD = "hard"
}
/**
 * Room assignment schema.
 * Records the physical room instance assigned to a room reservation.
 *
 * @typedef {Object} RoomAssignment
 * @property {string} [locationId] - Business location where the room is assigned
 * @property {string} reservationId - Room reservation ID
 * @property {string} roomInstanceId - Physical room resource instance ID
 * @property {number} slotStart - Reservation slot start, copied from reservation at assignment time
 * @property {number} slotEnd - Reservation slot end, copied from reservation at assignment time
 * @property {RoomAssignmentType} assignmentType - Assignment lock type
 * @property {RoomAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [housekeepingNotes] - Housekeeping handoff notes
 * @property {string} [notes] - Operational staff notes
 */
export declare const RoomAssignmentSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    roomInstanceId: z.ZodString;
    slotStart: z.ZodNumber;
    slotEnd: z.ZodNumber;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof RoomAssignmentType>>;
    status: z.ZodDefault<z.ZodEnum<typeof RoomAssignmentStatus>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    housekeepingNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new room assignment.
 * Omits auto-generated fields.
 */
export declare const CreateRoomAssignmentSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof RoomAssignmentStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    slotStart: z.ZodNumber;
    slotEnd: z.ZodNumber;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof RoomAssignmentType>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roomInstanceId: z.ZodString;
    housekeepingNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing room assignment.
 * All fields optional except id.
 */
export declare const UpdateRoomAssignmentSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof RoomAssignmentStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    reservationId: z.ZodOptional<z.ZodString>;
    slotStart: z.ZodOptional<z.ZodNumber>;
    slotEnd: z.ZodOptional<z.ZodNumber>;
    assignmentType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof RoomAssignmentType>>>;
    assignedAt: z.ZodOptional<z.ZodNumber>;
    assignedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    releasedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    releasedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    roomInstanceId: z.ZodOptional<z.ZodString>;
    housekeepingNotes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type RoomAssignment = z.infer<typeof RoomAssignmentSchema>;
export type CreateRoomAssignment = z.infer<typeof CreateRoomAssignmentSchema>;
export type UpdateRoomAssignment = z.infer<typeof UpdateRoomAssignmentSchema>;
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
