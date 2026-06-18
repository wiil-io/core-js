"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceCategorySchema = exports.CreateResourceCategorySchema = exports.ResourceCategorySchema = exports.ResourceCategoryChannelMappingSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
const display_order_1 = require("../../../type-definitions/display-order");
const type_definitions_1 = require("../../../type-definitions");
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
exports.ResourceCategoryChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., opentable, booking-com, resy)"),
    externalCategoryId: zod_1.z.string().describe("External category ID for this specific channel"),
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
exports.ResourceCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    resourceRevisionId: zod_1.z.string().nullable().optional().describe("Optional resource revision ID for version-scoped data"),
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where this resource category applies. Null applies across locations."),
    name: zod_1.z.string().min(1, "Category name is required").describe("Display name for the reservation resource category."),
    description: zod_1.z.string().nullable().optional().describe("Customer or staff-facing description of this resource category."),
    channelMappings: zod_1.z.array(exports.ResourceCategoryChannelMappingSchema).nullable().optional().describe("Per-channel resource category ID mappings"),
    resourceType: zod_1.z.enum(type_definitions_1.ResourceType).nullable().optional().describe("Optional resource type scope for this category."),
    displayOrder: zod_1.z.number().int().nullable().optional().describe("Numeric display order for category lists. Lower numbers appear first."),
    isActive: zod_1.z.boolean().default(true).describe("Whether this resource category is active and available for assignment."),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable().optional().describe("Additional structured metadata for resource category integrations."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new resource category.
 * Omits auto-generated fields.
 */
exports.CreateResourceCategorySchema = exports.ResourceCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering."),
});
/**
 * Schema for updating an existing resource category.
 * All fields optional except id.
 */
exports.UpdateResourceCategorySchema = exports.CreateResourceCategorySchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the resource category to update."),
});
