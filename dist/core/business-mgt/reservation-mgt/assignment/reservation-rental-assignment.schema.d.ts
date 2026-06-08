import { z } from "zod";
/**
 * @fileoverview Rental assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/rental-assignment
 */
/**
 * Rental assignment lifecycle status.
 *
 * @enum {string}
 */
export declare enum RentalAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released"
}
/**
 * Rental assignment lock type.
 *
 * @enum {string}
 */
export declare enum RentalAssignmentType {
    SOFT = "soft",
    HARD = "hard"
}
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
export declare const RentalUnitConditionSchema: z.ZodObject<{
    recordedAt: z.ZodNumber;
    recordedBy: z.ZodString;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    damageReported: z.ZodDefault<z.ZodBoolean>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
}, z.core.$strip>;
/**
 * Rental assignment schema.
 * Records the physical rental unit assigned to a rental reservation.
 *
 * @typedef {Object} RentalAssignment
 * @property {string} [locationId] - Business location where the rental unit is assigned
 * @property {string} reservationId - Rental reservation ID
 * @property {string} rentalInstanceId - Physical rental resource instance ID
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
export declare const RentalAssignmentSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    rentalInstanceId: z.ZodString;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof RentalAssignmentType>>;
    status: z.ZodDefault<z.ZodEnum<typeof RentalAssignmentStatus>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conditionAtPickup: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>;
    conditionAtReturn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new rental assignment.
 * Omits auto-generated fields.
 */
export declare const CreateRentalAssignmentSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof RentalAssignmentStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof RentalAssignmentType>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rentalInstanceId: z.ZodString;
    conditionAtPickup: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>;
    conditionAtReturn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing rental assignment.
 * All fields optional except id.
 */
export declare const UpdateRentalAssignmentSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof RentalAssignmentStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    reservationId: z.ZodOptional<z.ZodString>;
    assignmentType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof RentalAssignmentType>>>;
    assignedAt: z.ZodOptional<z.ZodNumber>;
    assignedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    releasedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    releasedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    rentalInstanceId: z.ZodOptional<z.ZodString>;
    conditionAtPickup: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>>;
    conditionAtReturn: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        recordedAt: z.ZodNumber;
        recordedBy: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damageReported: z.ZodDefault<z.ZodBoolean>;
        imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    }, z.core.$strip>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type RentalUnitCondition = z.infer<typeof RentalUnitConditionSchema>;
export type RentalAssignment = z.infer<typeof RentalAssignmentSchema>;
export type CreateRentalAssignment = z.infer<typeof CreateRentalAssignmentSchema>;
export type UpdateRentalAssignment = z.infer<typeof UpdateRentalAssignmentSchema>;
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
