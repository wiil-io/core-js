"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductVariantSchema = exports.CreateProductVariantSchema = exports.ProductVariantSchema = exports.ProductVariantChannelMappingSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
/**
 * @fileoverview Product variant schema definitions for SKU-level variants.
 * @module business-mgt/product-variant
 *
 * Product variants represent individual SKU-level items with axis value selections
 * (e.g., size, color). Variants can override parent product attributes for pricing,
 * inventory, and physical properties.
 */
// ============================================================================
// VARIANT CHANNEL MAPPING SCHEMA
// ============================================================================
/**
 * Product variant channel mapping schema.
 * Maps variants to external platform identifiers for multi-channel synchronization.
 *
 * @typedef {Object} ProductVariantChannelMapping
 * @property {string} channelId - Platform identifier (e.g., "shopify", "amazon")
 * @property {string} externalVariantId - Variant ID in external platform
 * @property {string} [externalProductId] - Parent product ID in external platform
 */
exports.ProductVariantChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalVariantId: zod_1.default.string().describe("External variant ID for this specific channel"),
    externalProductId: zod_1.default.string().nullable().optional().describe("Optional external parent product ID in this channel"),
}).describe("Per-channel external variant ID mapping");
// ============================================================================
// PRODUCT VARIANT SCHEMA
// Individual SKU-level variants with axis value selections
// ============================================================================
/**
 * Product variant schema.
 * Represents an individual SKU-level variant with axis value selections.
 * Variants can override parent product attributes for pricing, inventory, and physical properties.
 *
 * @typedef {Object} ProductVariant
 * @property {string} [productRevisionId] - Version control for product changes
 * @property {string} productId - Parent product ID
 * @property {Object} axisValues - Map of axisId to selected valueId
 * @property {string} [sku] - Stock Keeping Unit identifier (overrides parent)
 * @property {string} [barcode] - Product barcode (overrides parent)
 * @property {string} [partNumber] - Manufacturer part number
 * @property {string} [globalTradeItemNumber] - GTIN identifier
 * @property {number} [price] - Variant price (overrides parent)
 * @property {number} [cost] - Variant cost
 * @property {number} [compareAtPrice] - Compare-at price for sale displays
 * @property {number} [stockQuantity] - Variant stock quantity
 * @property {number} [lowStockThreshold] - Low stock alert threshold
 * @property {string} [unitDefinitionId] - Inventory unit definition reference
 * @property {string} [inventoryUnit] - Inventory unit type
 * @property {number} [weight] - Variant weight (overrides parent)
 * @property {Object} [dimensions] - Variant dimensions (overrides parent)
 * @property {string} [imageId] - Primary variant image ID
 * @property {Array} [imageIds] - Variant gallery image IDs
 * @property {Array} [channelMappings] - Per-channel external variant ID mappings
 * @property {boolean} isActive - Whether variant is available for sale
 * @property {boolean} isDefault - Whether this is the default variant
 * @property {number} [orderCount] - Total orders for this variant (all time)
 * @property {number} [recentOrderCount] - Orders in last 30 days
 * @property {number} [lastOrderedAt] - Unix timestamp of last order
 */
exports.ProductVariantSchema = base_schema_1.BaseModelSchema.safeExtend({
    productRevisionId: zod_1.default.string().nullable().optional().describe("Optional product revision ID for version-scoped data"),
    productId: zod_1.default.string().describe("Parent product ID"),
    // Axis value selections (e.g., { "axis_size": "value_large", "axis_color": "value_red" })
    axisValues: zod_1.default.record(zod_1.default.string(), zod_1.default.string()).describe("Map of axisId to selected valueId"),
    // Override-capable fields (null = inherit from parent product)
    sku: zod_1.default.string().nullable().optional().describe("Stock Keeping Unit identifier"),
    barcode: zod_1.default.string().nullable().optional().describe("Product barcode (EAN-13, UPC-A, etc.)"),
    partNumber: zod_1.default.string().nullable().optional().describe("Manufacturer part number"),
    globalTradeItemNumber: zod_1.default.string().nullable().optional().describe("Global Trade Item Number (GTIN)"),
    price: zod_1.default.number().nonnegative().nullable().optional().describe("Variant price"),
    cost: zod_1.default.number().nonnegative().nullable().optional().describe("Variant cost"),
    compareAtPrice: zod_1.default.number().nonnegative().nullable().optional().describe("Variant compare-at price"),
    // Inventory (variant-level tracking)
    stockQuantity: zod_1.default.number().int().nonnegative().nullable().optional().describe("Variant stock quantity"),
    lowStockThreshold: zod_1.default.number().int().nonnegative().nullable().optional().describe("Variant low stock threshold"),
    unitDefinitionId: zod_1.default.string().nullable().optional().describe("Optional inventory unit definition snapshot pointer for this variant"),
    inventoryUnit: zod_1.default.enum(type_definitions_1.InventoryUnit).nullable().optional().describe("Inventory unit for this variant"),
    // Physical attributes (overrides)
    weight: zod_1.default.number().positive().nullable().optional().describe("Variant weight (overrides parent)"),
    dimensions: zod_1.default.object({
        length: zod_1.default.number().positive().describe("Length dimension"),
        width: zod_1.default.number().positive().describe("Width dimension"),
        height: zod_1.default.number().positive().describe("Height dimension"),
        unit: zod_1.default.enum(['inches', 'cm']).default('inches').describe("Measurement unit"),
    }).nullable().optional().describe("Variant dimensions (overrides parent)"),
    // Media
    imageId: zod_1.default.string().nullable().optional().describe("Primary variant image ID"),
    imageIds: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("Variant gallery image IDs"),
    channelMappings: zod_1.default.array(exports.ProductVariantChannelMappingSchema).nullable().optional().describe("Per-channel external variant ID mappings"),
    // Status
    isActive: zod_1.default.boolean().default(true).describe("Whether this variant is available for sale"),
    isDefault: zod_1.default.boolean().default(false).describe("Whether this is the default variant for the product"),
    // Ordering analytics
    orderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Total orders for this variant (all time)"),
    recentOrderCount: zod_1.default.number().int().nonnegative().nullable().optional().describe("Orders for this variant in the last 30 days"),
    lastOrderedAt: zod_1.default.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this variant"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new product variant.
 * Omits auto-generated fields and analytics (view model only).
 */
exports.CreateProductVariantSchema = exports.ProductVariantSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    // Omit analytics fields (view model only)
    orderCount: true,
    recentOrderCount: true,
    lastOrderedAt: true,
});
/**
 * Schema for updating an existing product variant.
 * All fields optional except id (required).
 */
exports.UpdateProductVariantSchema = exports.CreateProductVariantSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ProductVariant to update"),
});
