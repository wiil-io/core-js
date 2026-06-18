import { z } from "zod";
import { ResourceType } from "../../../type-definitions";
/**
 * @fileoverview Reservation resource category schema definitions.
 * @module business-mgt/reservation-mgt/resource-category
 */
/**
 * Resource category channel mapping schema.
 * Maps reservation resource categories to external platform category IDs.
 *
 * @typedef {Object} ResourceCategoryChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalCategoryId - External category ID
 */
export declare const ResourceCategoryChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalCategoryId: z.ZodString;
}, z.core.$strip>;
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
export declare const ResourceCategorySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    resourceType: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ResourceType>>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new resource category.
 * Omits auto-generated fields.
 */
export declare const CreateResourceCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>;
    resourceRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceType: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ResourceType>>>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing resource category.
 * All fields optional except id.
 */
export declare const UpdateResourceCategorySchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalCategoryId: z.ZodString;
    }, z.core.$strip>>>>>;
    resourceRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    resourceType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ResourceType>>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ResourceCategoryChannelMapping = z.infer<typeof ResourceCategoryChannelMappingSchema>;
export type ResourceCategory = z.infer<typeof ResourceCategorySchema>;
export type CreateResourceCategory = z.infer<typeof CreateResourceCategorySchema>;
export type UpdateResourceCategory = z.infer<typeof UpdateResourceCategorySchema>;
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
