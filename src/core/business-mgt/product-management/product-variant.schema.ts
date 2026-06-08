import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { InventoryUnit } from "../../type-definitions";

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
export const ProductVariantChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalVariantId: z.string().describe("External variant ID for this specific channel"),
    externalProductId: z.string().nullable().optional().describe("Optional external parent product ID in this channel"),
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
export const ProductVariantSchema = BaseModelSchema.safeExtend({
    productRevisionId: z.string().optional().describe("Optional product revision ID for version-scoped data"),
    productId: z.string().describe("Parent product ID"),

    // Axis value selections (e.g., { "axis_size": "value_large", "axis_color": "value_red" })
    axisValues: z.record(z.string(), z.string()).describe("Map of axisId to selected valueId"),

    // Override-capable fields (null = inherit from parent product)
    sku: z.string().nullable().optional().describe("Stock Keeping Unit identifier"),
    barcode: z.string().nullable().optional().describe("Product barcode (EAN-13, UPC-A, etc.)"),
    partNumber: z.string().nullable().optional().describe("Manufacturer part number"),
    globalTradeItemNumber: z.string().nullable().optional().describe("Global Trade Item Number (GTIN)"),
    price: z.number().nonnegative().nullable().optional().describe("Variant price"),
    cost: z.number().nonnegative().nullable().optional().describe("Variant cost"),
    compareAtPrice: z.number().nonnegative().nullable().optional().describe("Variant compare-at price"),

    // Inventory (variant-level tracking)
    stockQuantity: z.number().int().nonnegative().nullable().optional().describe("Variant stock quantity"),
    lowStockThreshold: z.number().int().nonnegative().nullable().optional().describe("Variant low stock threshold"),
    unitDefinitionId: z.string().nullable().optional().describe("Optional inventory unit definition snapshot pointer for this variant"),
    inventoryUnit: z.enum(InventoryUnit).nullable().optional().describe("Inventory unit for this variant"),

    // Physical attributes (overrides)
    weight: z.number().positive().nullable().optional().describe("Variant weight (overrides parent)"),
    dimensions: z.object({
        length: z.number().positive().describe("Length dimension"),
        width: z.number().positive().describe("Width dimension"),
        height: z.number().positive().describe("Height dimension"),
        unit: z.enum(['inches', 'cm']).default('inches').describe("Measurement unit"),
    }).nullable().optional().describe("Variant dimensions (overrides parent)"),

    // Media
    imageId: z.string().nullable().optional().describe("Primary variant image ID"),
    imageIds: z.array(z.string()).nullable().optional().describe("Variant gallery image IDs"),
    channelMappings: z.array(ProductVariantChannelMappingSchema).nullable().optional().describe("Per-channel external variant ID mappings"),

    // Status
    isActive: z.boolean().default(true).describe("Whether this variant is available for sale"),
    isDefault: z.boolean().default(false).describe("Whether this is the default variant for the product"),

    // Ordering analytics
    orderCount: z.number().int().nonnegative().nullable().optional().describe("Total orders for this variant (all time)"),
    recentOrderCount: z.number().int().nonnegative().nullable().optional().describe("Orders for this variant in the last 30 days"),
    lastOrderedAt: z.number().int().positive().nullable().optional().describe("Unix timestamp of the last order for this variant"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new product variant.
 * Omits auto-generated fields and analytics (view model only).
 */
export const CreateProductVariantSchema = ProductVariantSchema.omit({
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
export const UpdateProductVariantSchema = CreateProductVariantSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ProductVariant to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProductVariantChannelMapping = z.infer<typeof ProductVariantChannelMappingSchema>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export type CreateProductVariant = z.infer<typeof CreateProductVariantSchema>;
export type UpdateProductVariant = z.infer<typeof UpdateProductVariantSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Product variant filter options.
 * @interface ProductVariantFilters
 */
export interface ProductVariantFilters {
    /** Filter by parent product ID */
    productId?: string;
    /** Filter by axis value ID */
    axisValueId?: string;
    /** Filter by SKU */
    sku?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by stock availability */
    inStock?: boolean;
}

/**
 * Product variant sorting options.
 * @interface ProductVariantSorting
 */
export interface ProductVariantSorting {
    /** Field to sort by */
    field: 'sku' | 'price' | 'stockQuantity' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Product variant query options.
 * @interface ProductVariantQueryOptions
 */
export interface ProductVariantQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ProductVariantFilters;
    /** Optional sorting */
    sorting?: ProductVariantSorting;
}
