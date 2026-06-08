import { z } from "zod";
/**
 * @fileoverview Table assignment schema definitions.
 * @module business-mgt/reservation-mgt/assignment/table-assignment
 */
/**
 * Table assignment lock type.
 *
 * @enum {string}
 */
export declare enum TableAssignmentType {
    SOFT = "soft",
    HARD = "hard"
}
/**
 * Table assignment lifecycle status.
 *
 * @enum {string}
 */
export declare enum TableAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released"
}
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
 * @property {TableAssignmentType} assignmentType - Assignment lock type
 * @property {TableAssignmentStatus} status - Current assignment status
 * @property {number} assignedAt - Assignment timestamp
 * @property {string} [assignedBy] - Staff user ID that made the assignment
 * @property {number} [releasedAt] - Release timestamp
 * @property {string} [releasedBy] - Staff user ID that released the assignment
 * @property {string} [notes] - Operational staff notes
 */
export declare const TableAssignmentSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    tableInstanceId: z.ZodString;
    floorPlanId: z.ZodString;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof TableAssignmentType>>;
    status: z.ZodDefault<z.ZodEnum<typeof TableAssignmentStatus>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new table assignment.
 * Omits auto-generated fields.
 */
export declare const CreateTableAssignmentSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof TableAssignmentStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    floorPlanId: z.ZodString;
    floorPlanSectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reservationId: z.ZodString;
    tableInstanceId: z.ZodString;
    assignmentType: z.ZodDefault<z.ZodEnum<typeof TableAssignmentType>>;
    assignedAt: z.ZodNumber;
    assignedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    releasedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    releasedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing table assignment.
 * All fields optional except id.
 */
export declare const UpdateTableAssignmentSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TableAssignmentStatus>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    floorPlanId: z.ZodOptional<z.ZodString>;
    floorPlanSectionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    reservationId: z.ZodOptional<z.ZodString>;
    tableInstanceId: z.ZodOptional<z.ZodString>;
    assignmentType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TableAssignmentType>>>;
    assignedAt: z.ZodOptional<z.ZodNumber>;
    assignedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    releasedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    releasedBy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type TableAssignment = z.infer<typeof TableAssignmentSchema>;
export type CreateTableAssignment = z.infer<typeof CreateTableAssignmentSchema>;
export type UpdateTableAssignment = z.infer<typeof UpdateTableAssignmentSchema>;
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
