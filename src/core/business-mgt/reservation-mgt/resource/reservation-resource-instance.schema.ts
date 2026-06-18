import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";

/**
 * @fileoverview Reservation resource instance schema definitions.
 * @module business-mgt/reservation-mgt/resource-instance
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Operational status of a physical resource instance.
 *
 * @enum {string}
 */
export enum ResourceInstanceStatus {
    AVAILABLE = "available",
    RESERVED = "reserved",
    OCCUPIED = "occupied",
    MAINTENANCE = "maintenance",
    CLEANING = "cleaning",
    OUT_OF_SERVICE = "out_of_service",
}

// ============================================================================
// RESOURCE INSTANCE SCHEMAS
// ============================================================================

/**
 * Resource instance attribute schema.
 * Stores flexible key/value attributes on physical reservation inventory.
 *
 * @typedef {Object} ResourceInstanceAttribute
 * @property {string} key - Attribute key
 * @property {string} value - Attribute value
 */
export const ResourceInstanceAttributeSchema = z.object({
    key: z.string().describe("Attribute key used by operations or integrations."),
    value: z.string().describe("Attribute value for the instance-specific key."),
});

/**
 * Resource instance schema.
 * Represents a physical table, room, rental unit, or other reservable unit.
 *
 * @typedef {Object} ResourceInstance
 * @property {string} [resourceRevisionId] - Version control for resource instance changes
 * @property {string} [locationId] - Business location where the instance is located
 * @property {string} resourceId - Parent resource ID
 * @property {string} [name] - Instance display name
 * @property {string} [code] - Instance code or number
 * @property {ResourceInstanceStatus} status - Current operational status
 * @property {boolean} isAvailable - Whether the instance can be assigned
 * @property {ResourceInstanceAttribute[]} [attributes] - Instance-level attributes
 */
export const ResourceInstanceSchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().nullable().optional().describe("Optional resource revision ID for version-scoped data"),
    locationId: z.string().nullable().optional().describe("Business location ID where this resource instance is located. Null applies when the instance is not location-specific."),
    resourceId: z.string().describe("Parent resource ID that defines this physical instance."),
    name: z.string().nullable().optional().describe("Instance name/label"),
    code: z.string().nullable().optional().describe("Optional instance code/number"),
    status: z.enum(ResourceInstanceStatus).default(ResourceInstanceStatus.AVAILABLE).describe("Current operational status"),
    isAvailable: z.boolean().default(true).describe("Quick availability toggle for assignment"),
    attributes: z.array(ResourceInstanceAttributeSchema).nullable().optional().describe("Instance-level attributes"),
}).superRefine((data, ctx) => {
    if (data.status !== ResourceInstanceStatus.AVAILABLE && data.isAvailable) {
        ctx.addIssue({
            code: "custom",
            path: ["isAvailable"],
            message: "isAvailable should be false when status is not available",
        });
    }
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new resource instance.
 * Omits auto-generated fields.
 */
export const CreateResourceInstanceSchema = ResourceInstanceSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing resource instance.
 * All fields optional except id.
 */
export const UpdateResourceInstanceSchema = CreateResourceInstanceSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the resource instance to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ResourceInstanceAttribute = z.infer<typeof ResourceInstanceAttributeSchema>;
export type ResourceInstance = z.infer<typeof ResourceInstanceSchema>;
export type CreateResourceInstance = z.infer<typeof CreateResourceInstanceSchema>;
export type UpdateResourceInstance = z.infer<typeof UpdateResourceInstanceSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Resource instance filter options.
 * @interface ResourceInstanceFilters
 */
export interface ResourceInstanceFilters {
    /** Filter by parent resource ID */
    resourceId?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by operational statuses */
    status?: ResourceInstanceStatus[];
    /** Filter by assignment availability */
    isAvailable?: boolean;
}

/**
 * Resource instance sorting options.
 * @interface ResourceInstanceSorting
 */
export interface ResourceInstanceSorting {
    /** Field to sort by */
    field: "name" | "status" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Resource instance query options.
 * @interface ResourceInstanceQueryOptions
 */
export interface ResourceInstanceQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ResourceInstanceFilters;
    /** Optional sorting */
    sorting?: ResourceInstanceSorting;
}
