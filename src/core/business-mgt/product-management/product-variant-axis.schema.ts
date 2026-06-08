import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { VariantAxisType } from "../../type-definitions";

/**
 * @fileoverview Variant axis schema definitions for product variant configuration.
 * @module business-mgt/product-variant-axis
 *
 * Variant axes define the dimensions along which products can vary (e.g., Size, Color).
 * Each axis contains a set of values that can be selected when creating product variants.
 */

// ============================================================================
// VARIANT AXIS VALUE SCHEMA
// ============================================================================

/**
 * Variant axis value schema.
 * Represents a single selectable value within a variant axis.
 *
 * @typedef {Object} VariantAxisValue
 * @property {string} id - Unique axis value ID
 * @property {string} label - Display label for the value
 * @property {string} [swatchColor] - Hex color code for swatch type
 * @property {string} [imageId] - Image ID for image type
 * @property {number} [numericValue] - Numeric value for numeric type
 * @property {number} sortOrder - Display order within axis
 */
export const VariantAxisValueSchema = z.object({
    id: z.string().describe("Unique identifier for this axis value. Used in ProductVariant.axisValues mapping."),
    label: z.string().min(1).describe("Display label shown to customers (e.g., 'Small', 'Red', '32'). Must be unique within the axis."),
    swatchColor: z.string().nullable().optional().describe("Hex color code for swatch rendering (e.g., '#FF0000'). Only used when axis type is SWATCH."),
    imageId: z.string().nullable().optional().describe("Image ID for visual representation. Only used when axis type is IMAGE."),
    numericValue: z.number().nullable().optional().describe("Numeric value for size/quantity axes. Only used when axis type is NUMERIC."),
    sortOrder: z.number().int().default(0).describe("Display order within the axis. Lower numbers appear first."),
}).describe("Single selectable value within a variant axis");

// ============================================================================
// VARIANT AXIS SCHEMA
// ============================================================================

/**
 * Variant axis schema.
 * Defines a dimension along which products can vary (e.g., Size, Color, Material).
 *
 * @typedef {Object} VariantAxis
 * @property {string} name - Axis name (e.g., 'Size', 'Color')
 * @property {VariantAxisType} type - Axis rendering type
 * @property {Array} values - Available values for this axis
 * @property {boolean} isActive - Whether axis is active
 */
export const VariantAxisSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1).describe("Axis name displayed to customers (e.g., 'Size', 'Color', 'Material'). Used in variant selection UI."),
    type: z.enum(VariantAxisType).describe("Rendering type determining how values are displayed (SWATCH for colors, TEXT for labels, IMAGE for visuals, NUMERIC for sizes)."),
    values: z.array(VariantAxisValueSchema).min(1).describe("Available values for this axis. Minimum one value required."),
    isActive: z.boolean().default(true).describe("Whether this axis is active and available for product binding. Defaults to true."),
}).describe("Variant axis defining a product variation dimension");

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new variant axis.
 * Omits auto-generated fields.
 */
export const CreateVariantAxisSchema = VariantAxisSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing variant axis.
 * All fields optional except id (required).
 */
export const UpdateVariantAxisSchema = CreateVariantAxisSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the VariantAxis to update"),
});

// ============================================================================
// DISPLAY SCHEMAS
// ============================================================================

/**
 * Variant axis display schema.
 * Optimized schema for UI rendering with display order.
 *
 * @typedef {Object} VariantAxisDisplay
 * @property {string} id - Axis ID
 * @property {string} name - Axis name
 * @property {VariantAxisType} type - Axis rendering type
 * @property {Array} values - Axis values
 * @property {number} displayOrder - Display order for this axis
 */
export const VariantAxisDisplaySchema = z.object({
    id: z.string().describe("Unique identifier for the variant axis"),
    name: z.string().describe("Axis name for display"),
    type: z.enum(VariantAxisType).describe("Axis rendering type"),
    values: z.array(VariantAxisValueSchema).describe("Available values for selection"),
    displayOrder: z.number().int().default(0).describe("Display order when showing multiple axes. Lower numbers appear first."),
}).describe("Variant axis optimized for UI display");

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type VariantAxisValue = z.infer<typeof VariantAxisValueSchema>;
export type VariantAxis = z.infer<typeof VariantAxisSchema>;
export type CreateVariantAxis = z.infer<typeof CreateVariantAxisSchema>;
export type UpdateVariantAxis = z.infer<typeof UpdateVariantAxisSchema>;
export type VariantAxisDisplay = z.infer<typeof VariantAxisDisplaySchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Variant axis filter options.
 * @interface VariantAxisFilters
 */
export interface VariantAxisFilters {
    /** Text search across axis name */
    search?: string;
    /** Filter by axis type */
    type?: VariantAxisType;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Variant axis sorting options.
 * @interface VariantAxisSorting
 */
export interface VariantAxisSorting {
    /** Field to sort by */
    field: "name" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Variant axis query options.
 * @interface VariantAxisQueryOptions
 */
export interface VariantAxisQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: VariantAxisFilters;
    /** Optional sorting */
    sorting?: VariantAxisSorting;
}
