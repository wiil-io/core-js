import z from "zod";
import { BusinessProductSchema, ProductCategorySchema } from "./product-config.schema";
// Note: ProductSetDisplaySchema available from ./product-set.schema if needed
import { ProductVariantSchema } from "./product-variant.schema";
import { StockStatus } from "../../type-definitions";

/**
 * @fileoverview Product display schema definitions for catalog rendering.
 * @module business-mgt/product-display
 *
 * These schemas are read-optimized and denormalized for efficient UI rendering.
 * They include resolved data like stock status and computed price ranges.
 */

// ============================================================================
// PRODUCT VARIANT DISPLAY SCHEMA
// Extended variant with resolved stock status for catalog display
// ============================================================================

/**
 * Product variant display schema.
 * Extends base variant with computed stock status for UI rendering.
 *
 * @typedef {Object} ProductVariantDisplay
 * @property {string} stockStatus - Resolved stock status (in_stock, low_stock, out_of_stock)
 */
export const ProductVariantDisplaySchema = ProductVariantSchema.extend({
    stockStatus: z.enum(StockStatus).describe("Resolved stock status based on inventory tracking settings and current stock quantity. Used for UI indicators (in_stock, low_stock, out_of_stock)."),
}).describe("Product variant with resolved stock status for catalog display");

// ============================================================================
// PRODUCT DISPLAY SCHEMA
// Extended product with variants and computed price range
// ============================================================================

/**
 * Product display schema.
 * Extends base product with variants array and computed price range.
 *
 * @typedef {Object} ProductDisplay
 * @property {Array} variants - Product variants with stock status
 * @property {Object} priceRange - Min/max price across all variants
 * @property {boolean} isVariantSelectable - Whether product uses variant selection
 */
export const ProductDisplaySchema = BusinessProductSchema.safeExtend({
    variants: z.array(ProductVariantDisplaySchema).min(1, "Every product must have at least one variant").describe("Product variants with resolved stock status. Minimum one variant required per product."),
    priceRange: z.object({
        min: z.number().nonnegative().describe("Minimum price across all active variants"),
        max: z.number().nonnegative().describe("Maximum price across all active variants"),
    }).nullable().optional().describe("Computed min/max price range across all active variants. Null if no variants have pricing."),
    isVariantSelectable: z.boolean().default(true).describe("Whether this product requires variant selection in UI. False for single-variant products."),
}).describe("Product with variants and computed price range for catalog display");

// ============================================================================
// PRODUCT CATALOG DISPLAY SCHEMA
// Category with its products for catalog rendering
// ============================================================================

/**
 * Product catalog display schema.
 * Represents a category with its complete list of products for catalog rendering.
 *
 * @typedef {Object} ProductCatalogDisplay
 * @property {Object} productCategory - The product category
 * @property {Array} items - Products in this category with variants
 */
export const ProductCatalogDisplaySchema = z.object({
    productCategory: ProductCategorySchema.describe("Product category containing these items"),
    items: z.array(ProductDisplaySchema).describe("Products in this category with variants and computed price ranges"),
}).describe("Product category with its products for catalog display");

// ============================================================================
// BUSINESS PRODUCT CATALOG DISPLAY SCHEMA
// Complete catalog organized by categories
// ============================================================================

/**
 * Business product catalog display schema.
 * Complete product catalog organized by categories for full catalog rendering.
 *
 * @typedef {Array} BusinessProductCatalogDisplay
 */
export const BusinessProductCatalogDisplaySchema = z.array(ProductCatalogDisplaySchema).describe("Complete business product catalog organized by categories for display");

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProductVariantDisplay = z.infer<typeof ProductVariantDisplaySchema>;
export type ProductDisplay = z.infer<typeof ProductDisplaySchema>;
export type ProductCatalogDisplay = z.infer<typeof ProductCatalogDisplaySchema>;
export type BusinessProductCatalogDisplay = z.infer<typeof BusinessProductCatalogDisplaySchema>;

