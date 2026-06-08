"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProductCatalogDisplaySchema = exports.ProductCatalogDisplaySchema = exports.ProductDisplaySchema = exports.ProductVariantDisplaySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const product_config_schema_1 = require("./product-config.schema");
// Note: ProductSetDisplaySchema available from ./product-set.schema if needed
const product_variant_schema_1 = require("./product-variant.schema");
const type_definitions_1 = require("../../type-definitions");
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
exports.ProductVariantDisplaySchema = product_variant_schema_1.ProductVariantSchema.extend({
    stockStatus: zod_1.default.enum(type_definitions_1.StockStatus).describe("Resolved stock status based on inventory tracking settings and current stock quantity. Used for UI indicators (in_stock, low_stock, out_of_stock)."),
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
exports.ProductDisplaySchema = product_config_schema_1.BusinessProductSchema.safeExtend({
    variants: zod_1.default.array(exports.ProductVariantDisplaySchema).min(1, "Every product must have at least one variant").describe("Product variants with resolved stock status. Minimum one variant required per product."),
    priceRange: zod_1.default.object({
        min: zod_1.default.number().nonnegative().describe("Minimum price across all active variants"),
        max: zod_1.default.number().nonnegative().describe("Maximum price across all active variants"),
    }).nullable().optional().describe("Computed min/max price range across all active variants. Null if no variants have pricing."),
    isVariantSelectable: zod_1.default.boolean().default(true).describe("Whether this product requires variant selection in UI. False for single-variant products."),
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
exports.ProductCatalogDisplaySchema = zod_1.default.object({
    productCategory: product_config_schema_1.ProductCategorySchema.describe("Product category containing these items"),
    items: zod_1.default.array(exports.ProductDisplaySchema).describe("Products in this category with variants and computed price ranges"),
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
exports.BusinessProductCatalogDisplaySchema = zod_1.default.array(exports.ProductCatalogDisplaySchema).describe("Complete business product catalog organized by categories for display");
