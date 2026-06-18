import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../../type-definitions/display-order";
import { ResourceType } from "../../../type-definitions";

/**
 * @fileoverview Reservation resource category schema definitions.
 * @module business-mgt/reservation-mgt/resource-category
 */

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Resource category channel mapping schema.
 * Maps reservation resource categories to external platform category IDs.
 *
 * @typedef {Object} ResourceCategoryChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalCategoryId - External category ID
 */
export const ResourceCategoryChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., opentable, booking-com, resy)"),
    externalCategoryId: z.string().describe("External category ID for this specific channel"),
}).describe("Per-channel external resource category ID mapping");

// ============================================================================
// RESOURCE CATEGORY SCHEMA
// ============================================================================

/**
 * Resource category schema.
 * Groups reservation resources by type, location, channel mapping, and display order.
 *
 * @typedef {Object} ResourceCategory
 * @property {string} [resourceRevisionId] - Version control for resource category changes
 * @property {string} [locationId] - Business location where the category applies
 * @property {string} name - Category display name
 * @property {string} [description] - Category description
 * @property {ResourceCategoryChannelMapping[]} [channelMappings] - Per-channel category mappings
 * @property {ResourceType} [resourceType] - Optional resource type scope
 * @property {number} [displayOrder] - Display order in category lists
 * @property {boolean} isActive - Whether the category is active
 * @property {Object} [metadata] - Additional category metadata
 */
export const ResourceCategorySchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().nullable().optional().describe("Optional resource revision ID for version-scoped data"),
    locationId: z.string().nullable().optional().describe("Business location ID where this resource category applies. Null applies across locations."),
    name: z.string().min(1, "Category name is required").describe("Display name for the reservation resource category."),
    description: z.string().nullable().optional().describe("Customer or staff-facing description of this resource category."),
    channelMappings: z.array(ResourceCategoryChannelMappingSchema).nullable().optional().describe("Per-channel resource category ID mappings"),
    resourceType: z.enum(ResourceType).nullable().optional().describe("Optional resource type scope for this category."),
    displayOrder: z.number().int().nullable().optional().describe("Numeric display order for category lists. Lower numbers appear first."),
    isActive: z.boolean().default(true).describe("Whether this resource category is active and available for assignment."),
    metadata: z.record(z.string(), z.any()).nullable().optional().describe("Additional structured metadata for resource category integrations."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new resource category.
 * Omits auto-generated fields.
 */
export const CreateResourceCategorySchema = ResourceCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering."),
});

/**
 * Schema for updating an existing resource category.
 * All fields optional except id.
 */
export const UpdateResourceCategorySchema = CreateResourceCategorySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the resource category to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ResourceCategoryChannelMapping = z.infer<typeof ResourceCategoryChannelMappingSchema>;
export type ResourceCategory = z.infer<typeof ResourceCategorySchema>;
export type CreateResourceCategory = z.infer<typeof CreateResourceCategorySchema>;
export type UpdateResourceCategory = z.infer<typeof UpdateResourceCategorySchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Resource category filter options.
 * @interface ResourceCategoryFilters
 */
export interface ResourceCategoryFilters {
    /** Text search across category name and description */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by resource types */
    resourceType?: ResourceType[];
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Resource category sorting options.
 * @interface ResourceCategorySorting
 */
export interface ResourceCategorySorting {
    /** Field to sort by */
    field: "name" | "displayOrder" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Resource category query options.
 * @interface ResourceCategoryQueryOptions
 */
export interface ResourceCategoryQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ResourceCategoryFilters;
    /** Optional sorting */
    sorting?: ResourceCategorySorting;
}
