import { z } from "zod";
/**
 * @fileoverview Reservation maintenance block schema definitions.
 * @module business-mgt/reservation-mgt/maintenance-block
 */
/**
 * Maintenance block schema.
 * Represents a time period when a reservable resource instance is unavailable.
 *
 * @typedef {Object} MaintenanceBlock
 * @property {string} [locationId] - Business location where maintenance applies
 * @property {string} resourceInstanceId - Physical resource instance under maintenance
 * @property {number} startDate - Maintenance block start timestamp
 * @property {number} endDate - Maintenance block end timestamp
 * @property {string} [reason] - Operational reason for the maintenance block
 */
export declare const MaintenanceBlockSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceInstanceId: z.ZodString;
    startDate: z.ZodNumber;
    endDate: z.ZodNumber;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new maintenance block.
 * Omits auto-generated fields.
 */
export declare const CreateMaintenanceBlockSchema: z.ZodObject<{
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceInstanceId: z.ZodString;
    startDate: z.ZodNumber;
    endDate: z.ZodNumber;
}, z.core.$strip>;
/**
 * Schema for updating an existing maintenance block.
 * All fields optional except id.
 */
export declare const UpdateMaintenanceBlockSchema: z.ZodObject<{
    reason: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    resourceInstanceId: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodNumber>;
    endDate: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
}, z.core.$strip>;
export type MaintenanceBlock = z.infer<typeof MaintenanceBlockSchema>;
export type CreateMaintenanceBlock = z.infer<typeof CreateMaintenanceBlockSchema>;
export type UpdateMaintenanceBlock = z.infer<typeof UpdateMaintenanceBlockSchema>;
/**
 * Maintenance block filter options.
 * @interface MaintenanceBlockFilters
 */
export interface MaintenanceBlockFilters {
    /** Filter by maintained resource instance ID */
    resourceInstanceId?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by maintenance timestamp range */
    dateRange?: {
        start?: number;
        end?: number;
    };
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
