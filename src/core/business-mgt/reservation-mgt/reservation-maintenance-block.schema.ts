import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Reservation maintenance block schema definitions.
 * @module business-mgt/reservation-mgt/maintenance-block
 */

// ============================================================================
// MAINTENANCE BLOCK SCHEMA
// ============================================================================

/**
 * Maintenance block schema.
 * Represents a time period when a reservable resource instance is unavailable.
 *
 * @typedef {Object} MaintenanceBlock
 * @property {string} [locationId] - Business location where maintenance applies
 * @property {string} resourceInstanceId - Physical resource instance under maintenance
 * @property {number} startDate - Maintenance block start as Unix epoch seconds
 * @property {number} endDate - Maintenance block end as Unix epoch seconds
 * @property {string} [reason] - Operational reason for the maintenance block
 */
export const MaintenanceBlockSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the maintenance block applies. Null applies when the resource is not location-specific."),
    resourceInstanceId: z.string().describe("Room/resource ID under maintenance"),
    startDate: z.number().describe("Maintenance block start as Unix epoch seconds"),
    endDate: z.number().describe("Maintenance block end as Unix epoch seconds"),
    reason: z.string().nullable().optional().describe("Reason for maintenance block"),
}).superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
        ctx.addIssue({
            code: "custom",
            path: ["endDate"],
            message: "endDate must be greater than or equal to startDate",
        });
    }
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new maintenance block.
 * Omits auto-generated fields.
 */
export const CreateMaintenanceBlockSchema = MaintenanceBlockSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing maintenance block.
 * All fields optional except id.
 */
export const UpdateMaintenanceBlockSchema = CreateMaintenanceBlockSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the maintenance block to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MaintenanceBlock = z.infer<typeof MaintenanceBlockSchema>;
export type CreateMaintenanceBlock = z.infer<typeof CreateMaintenanceBlockSchema>;
export type UpdateMaintenanceBlock = z.infer<typeof UpdateMaintenanceBlockSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Maintenance block filter options.
 * @interface MaintenanceBlockFilters
 */
export interface MaintenanceBlockFilters {
    /** Filter by maintained resource instance ID */
    resourceInstanceId?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by maintenance date range (Unix epoch seconds) */
    dateRange?: { start?: number; end?: number; };
}

/**
 * Maintenance block sorting options.
 * @interface MaintenanceBlockSorting
 */
export interface MaintenanceBlockSorting {
    /** Field to sort by */
    field: "startDate" | "endDate" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Maintenance block query options.
 * @interface MaintenanceBlockQueryOptions
 */
export interface MaintenanceBlockQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: MaintenanceBlockFilters;
    /** Optional sorting */
    sorting?: MaintenanceBlockSorting;
}
