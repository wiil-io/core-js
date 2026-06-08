import z from "zod";
import { InventoryUnit } from "../../type-definitions";
/**
 * @fileoverview Product variant schema definitions for SKU-level variants.
 * @module business-mgt/product-variant
 *
 * Product variants represent individual SKU-level items with axis value selections
 * (e.g., size, color). Variants can override parent product attributes for pricing,
 * inventory, and physical properties.
 */
/**
 * Product variant channel mapping schema.
 * Maps variants to external platform identifiers for multi-channel synchronization.
 *
 * @typedef {Object} ProductVariantChannelMapping
 * @property {string} channelId - Platform identifier (e.g., "shopify", "amazon")
 * @property {string} externalVariantId - Variant ID in external platform
 * @property {string} [externalProductId] - Parent product ID in external platform
 */
export declare const ProductVariantChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalVariantId: z.ZodString;
    externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
export declare const ProductVariantSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof InventoryUnit>>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>;
    imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    orderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    recentOrderCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastOrderedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for creating a new product variant.
 * Omits auto-generated fields and analytics (view model only).
 */
export declare const CreateProductVariantSchema: z.ZodObject<{
    isDefault: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compareAtPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stockQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>;
    productId: z.ZodString;
    axisValues: z.ZodRecord<z.ZodString, z.ZodString>;
    partNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    globalTradeItemNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    unitDefinitionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inventoryUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof InventoryUnit>>>;
    imageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing product variant.
 * All fields optional except id (required).
 */
export declare const UpdateProductVariantSchema: z.ZodObject<{
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalVariantId: z.ZodString;
        externalProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    productRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    cost: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    compareAtPrice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    sku: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    barcode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    stockQuantity: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    lowStockThreshold: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    weight: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    dimensions: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>>;
    productId: z.ZodOptional<z.ZodString>;
    axisValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    partNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    globalTradeItemNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    unitDefinitionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inventoryUnit: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof InventoryUnit>>>>;
    imageId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    imageIds: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ProductVariantChannelMapping = z.infer<typeof ProductVariantChannelMappingSchema>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export type CreateProductVariant = z.infer<typeof CreateProductVariantSchema>;
export type UpdateProductVariant = z.infer<typeof UpdateProductVariantSchema>;
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
