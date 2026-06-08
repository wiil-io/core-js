"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantAxisDisplaySchema = exports.UpdateVariantAxisSchema = exports.CreateVariantAxisSchema = exports.VariantAxisSchema = exports.VariantAxisValueSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
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
exports.VariantAxisValueSchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier for this axis value. Used in ProductVariant.axisValues mapping."),
    label: zod_1.default.string().min(1).describe("Display label shown to customers (e.g., 'Small', 'Red', '32'). Must be unique within the axis."),
    swatchColor: zod_1.default.string().nullable().optional().describe("Hex color code for swatch rendering (e.g., '#FF0000'). Only used when axis type is SWATCH."),
    imageId: zod_1.default.string().nullable().optional().describe("Image ID for visual representation. Only used when axis type is IMAGE."),
    numericValue: zod_1.default.number().nullable().optional().describe("Numeric value for size/quantity axes. Only used when axis type is NUMERIC."),
    sortOrder: zod_1.default.number().int().default(0).describe("Display order within the axis. Lower numbers appear first."),
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
exports.VariantAxisSchema = base_schema_1.BaseModelSchema.safeExtend({
    name: zod_1.default.string().min(1).describe("Axis name displayed to customers (e.g., 'Size', 'Color', 'Material'). Used in variant selection UI."),
    type: zod_1.default.enum(type_definitions_1.VariantAxisType).describe("Rendering type determining how values are displayed (SWATCH for colors, TEXT for labels, IMAGE for visuals, NUMERIC for sizes)."),
    values: zod_1.default.array(exports.VariantAxisValueSchema).min(1).describe("Available values for this axis. Minimum one value required."),
    isActive: zod_1.default.boolean().default(true).describe("Whether this axis is active and available for product binding. Defaults to true."),
}).describe("Variant axis defining a product variation dimension");
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new variant axis.
 * Omits auto-generated fields.
 */
exports.CreateVariantAxisSchema = exports.VariantAxisSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing variant axis.
 * All fields optional except id (required).
 */
exports.UpdateVariantAxisSchema = exports.CreateVariantAxisSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the VariantAxis to update"),
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
exports.VariantAxisDisplaySchema = zod_1.default.object({
    id: zod_1.default.string().describe("Unique identifier for the variant axis"),
    name: zod_1.default.string().describe("Axis name for display"),
    type: zod_1.default.enum(type_definitions_1.VariantAxisType).describe("Axis rendering type"),
    values: zod_1.default.array(exports.VariantAxisValueSchema).describe("Available values for selection"),
    displayOrder: zod_1.default.number().int().default(0).describe("Display order when showing multiple axes. Lower numbers appear first."),
}).describe("Variant axis optimized for UI display");
