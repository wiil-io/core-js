import z from "zod";
import { VariantAxisType } from "../../type-definitions";
/**
 * @fileoverview Variant axis schema definitions for product variant configuration.
 * @module business-mgt/product-variant-axis
 *
 * Variant axes define the dimensions along which products can vary (e.g., Size, Color).
 * Each axis contains a set of values that can be selected when creating product variants.
 */
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
export declare const VariantAxisValueSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    swatchColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sortOrder: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const VariantAxisSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    type: z.ZodEnum<typeof VariantAxisType>;
    values: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        swatchColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new variant axis.
 * Omits auto-generated fields.
 */
export declare const CreateVariantAxisSchema: z.ZodObject<{
    type: z.ZodEnum<typeof VariantAxisType>;
    values: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        swatchColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating an existing variant axis.
 * All fields optional except id (required).
 */
export declare const UpdateVariantAxisSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof VariantAxisType>>;
    values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        swatchColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
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
export declare const VariantAxisDisplaySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    type: z.ZodEnum<typeof VariantAxisType>;
    values: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        swatchColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type VariantAxisValue = z.infer<typeof VariantAxisValueSchema>;
export type VariantAxis = z.infer<typeof VariantAxisSchema>;
export type CreateVariantAxis = z.infer<typeof CreateVariantAxisSchema>;
export type UpdateVariantAxis = z.infer<typeof UpdateVariantAxisSchema>;
export type VariantAxisDisplay = z.infer<typeof VariantAxisDisplaySchema>;
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
