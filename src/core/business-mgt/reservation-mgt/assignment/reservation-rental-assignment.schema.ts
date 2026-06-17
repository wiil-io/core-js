import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";

/**
 * @fileoverview Rental assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/rental-assignment
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Rental assignment lifecycle status.
 *
 * @enum {string}
 */
export enum RentalAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released",
}

/**
 * Rental assignment lock type.
 *
 * @enum {string}
 */
export enum RentalAssignmentType {
    SOFT = "soft",
    HARD = "hard",
}

// ============================================================================
// RENTAL ASSIGNMENT SCHEMAS
// ============================================================================

/**
 * Rental unit condition schema.
 * Captures a condition inspection snapshot at pickup or return.
 *
 * @typedef {Object} RentalUnitCondition
 * @property {number} recordedAt - Condition recording timestamp
 * @property {string} recordedBy - Staff user ID that recorded the condition
 * @property {string} [notes] - Condition notes
 * @property {boolean} damageReported - Whether damage was reported
 * @property {string[]} [imageUrls] - Condition photo URLs
 */
export const RentalUnitConditionSchema = z.object({
    recordedAt: z.number().int().positive().describe("Unix timestamp when the condition was recorded."),
    recordedBy: z.string().describe("Staff user ID who recorded the condition."),
    notes: z.string().nullable().optional().describe("Condition notes recorded during inspection."),
    damageReported: z.boolean().default(false).describe("Whether damage was reported during this inspection."),
    imageUrls: z.array(z.url()).nullable().optional().describe("Condition photo URLs captured during inspection."),
}).describe("Condition snapshot recorded at pickup or return");

/**
 * Rental assignment schema.
 * Records the physical rental unit assigned to a rental reservation.
 *
 * @typedef {Object} RentalAssignment
 * @property {string} [locationId] - Business location where the rental unit is assigned
 * @property {string} reservationId - Rental reservation ID
 * @property {string} rentalInstanceId - Physical rental resource instance ID
 * @property {number} slotStart - Reservation slot start, copied from reservation at assignment time
 * @property {number} slotEnd - Reservation slot end, copied from reservation at assignment time
 * @property {RentalAssignmentType} assignmentType - Assignment lock type
 * @property {RentalAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {RentalUnitCondition} [conditionAtPickup] - Pickup condition snapshot
 * @property {RentalUnitCondition} [conditionAtReturn] - Return condition snapshot
 * @property {string} [notes] - Operational staff notes
 */
export const RentalAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the assigned rental unit is located."),
    reservationId: z.string().describe("RentalReservation ID. This link is immutable after assignment creation."),
    rentalInstanceId: z.string().describe("ResourceInstance ID for the specific rental unit assigned to the reservation."),
    slotStart: z.number().int().positive().describe("Reservation slot start — copied from reservation at assignment time"),
    slotEnd: z.number().int().positive().describe("Reservation slot end — copied from reservation at assignment time"),
    assignmentType: z.enum(RentalAssignmentType).default(RentalAssignmentType.SOFT).describe("Assignment lock type. Soft assignments may be substituted; hard assignments are customer or staff locked."),
    status: z.enum(RentalAssignmentStatus).default(RentalAssignmentStatus.ASSIGNED).describe("Current assignment lifecycle status."),
    assignedAt: z.number().int().positive().describe("Unix timestamp when this assignment was made."),
    assignedBy: z.string().nullable().optional().describe("Staff user ID who made the assignment."),
    releasedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp when this assignment was released or superseded."),
    releasedBy: z.string().nullable().optional().describe("Staff user ID who released the assignment."),
    conditionAtPickup: RentalUnitConditionSchema.nullable().optional().describe("Unit condition recorded at customer pickup."),
    conditionAtReturn: RentalUnitConditionSchema.nullable().optional().describe("Unit condition recorded at customer return."),
    notes: z.string().nullable().optional().describe("Operational note for staff about this rental assignment."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new rental assignment.
 * Omits auto-generated fields.
 */
export const CreateRentalAssignmentSchema = RentalAssignmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing rental assignment.
 * All fields optional except id.
 */
export const UpdateRentalAssignmentSchema = CreateRentalAssignmentSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the rental assignment to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RentalUnitCondition = z.infer<typeof RentalUnitConditionSchema>;
export type RentalAssignment = z.infer<typeof RentalAssignmentSchema>;
export type CreateRentalAssignment = z.infer<typeof CreateRentalAssignmentSchema>;
export type UpdateRentalAssignment = z.infer<typeof UpdateRentalAssignmentSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Rental assignment filter options.
 * @interface RentalAssignmentFilters
 */
export interface RentalAssignmentFilters {
    /** Filter by rental reservation ID */
    reservationId?: string;
    /** Filter by rental resource instance ID */
    rentalInstanceId?: string;
    /** Filter by assignment statuses */
    status?: RentalAssignmentStatus[];
    /** Filter by assignment lock type */
    assignmentType?: RentalAssignmentType;
    /** Filter by assigning staff user ID */
    assignedBy?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter assignments where damage was reported */
    damageReported?: boolean;
}

/**
 * Rental assignment sorting options.
 * @interface RentalAssignmentSorting
 */
export interface RentalAssignmentSorting {
    /** Field to sort by */
    field: "assignedAt" | "releasedAt" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Rental assignment query options.
 * @interface RentalAssignmentQueryOptions
 */
export interface RentalAssignmentQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: RentalAssignmentFilters;
    /** Optional sorting */
    sorting?: RentalAssignmentSorting;
}
