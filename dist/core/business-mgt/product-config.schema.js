"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessProductSchema = exports.CreateBusinessProductSchema = exports.UpdateProductCategorySchema = exports.CreateProductCategorySchema = exports.BusinessProductSchema = exports.ProductCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Product configuration schema definitions for business management.
 * @module business-mgt/product-config
 */
/**
 * Product category schema.
 *
 * @typedef {Object} ProductCategory
 * @property {string} id - Unique category ID
 * @property {string} name - Category name (e.g., Electronics, Clothing)
 * @property {string} [description] - Category description
 * @property {number} [displayOrder] - Display order in catalog
 */
exports.ProductCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this product category in the catalog managed by Product Management."),
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name for product organization (e.g., Electronics, Clothing, Home & Garden). Used by AI Powered Services when presenting product options to customers."),
    description: zod_1.default.string().optional().describe("Category description providing context about the type of products included. Helps customers navigate the product catalog and understand category scope."),
    displayOrder: zod_1.default.number().int().optional().describe("Numeric order for category display in product catalog. Lower numbers appear first. Enables strategic category positioning."),
});
/**
 * Business product schema.
 *
 * @typedef {Object} BusinessProduct
 * @property {string} id - Unique product ID
 * @property {string} name - Product name
 * @property {string} [description] - Product description
 * @property {number} price - Product price
 * @property {string} [sku] - Stock Keeping Unit identifier
 * @property {string} [barcode] - Product barcode
 * @property {string} categoryId - Category ID
 * @property {Object} [category] - Product category
 * @property {string} [brand] - Product brand name
 * @property {boolean} trackInventory - Whether to track inventory
 * @property {number} [stockQuantity] - Current stock quantity
 * @property {number} [lowStockThreshold] - Low stock alert threshold
 * @property {number} [weight] - Product weight
 * @property {Object} [dimensions] - Product dimensions
 * @property {boolean} isActive - Whether product is available for sale
 * @property {number} [displayOrder] - Display order in category
 */
exports.BusinessProductSchema = base_schema_1.BaseModelSchema.safeExtend({
    id: zod_1.default.string().describe("Unique identifier for this product in the catalog managed by Product Management."),
    name: zod_1.default.string().min(1, "Product name is required").describe("Display name of the product shown to customers. Used by AI Powered Services in product order conversations."),
    description: zod_1.default.string().optional().describe("Detailed product description including features, specifications, or benefits. Helps customers make informed purchasing decisions and enables AI-powered product recommendations."),
    // Product-specific fields
    price: zod_1.default.number().nonnegative().describe("Base price for this product in the account's currency. Used for order pricing calculations and Product Order workflow."),
    sku: zod_1.default.string().optional().describe("Stock Keeping Unit identifier for internal inventory tracking and integration with external inventory systems. Unique alphanumeric code for warehouse and fulfillment operations."),
    barcode: zod_1.default.string().optional().describe("Product barcode (UPC, EAN, ISBN) for point-of-sale scanning and inventory management. Links physical products to digital catalog."),
    categoryId: zod_1.default.string().describe("References ProductCategory this product belongs to. Used for product organization and AI-driven category-based browsing."),
    category: exports.ProductCategorySchema.optional().describe("Populated ProductCategory object for convenient access. Not required during creation; managed by Product Management."),
    brand: zod_1.default.string().optional().describe("Product brand or manufacturer name for brand-based filtering and customer preference matching in AI conversations."),
    // Inventory
    trackInventory: zod_1.default.boolean().default(false).describe("Whether inventory tracking is enabled for this product. When true, stockQuantity is enforced and Product Order validates availability. Defaults to false for digital or unlimited products."),
    stockQuantity: zod_1.default.number().int().nonnegative().optional().describe("Current available stock quantity. Only applicable when trackInventory is true. AI Powered Services checks availability before accepting orders. Updated by Product Order and inventory adjustments."),
    lowStockThreshold: zod_1.default.number().int().nonnegative().optional().describe("Stock level that triggers low inventory alerts for replenishment. Used by inventory management systems to maintain optimal stock levels."),
    // Physical attributes
    weight: zod_1.default.number().positive().optional().describe("Product weight for shipping calculations and carrier integration. Used in delivery cost estimation for Product Order fulfillment."),
    dimensions: zod_1.default.object({
        length: zod_1.default.number().positive().describe("Product length in specified units. Used for shipping calculations and warehouse storage planning."),
        width: zod_1.default.number().positive().describe("Product width in specified units. Used for shipping calculations and package sizing."),
        height: zod_1.default.number().positive().describe("Product height in specified units. Used for shipping calculations and storage optimization."),
        unit: zod_1.default.enum(['inches', 'cm']).default('inches').describe("Measurement unit for length, width, and height dimensions. Supports inches or centimeters. Defaults to inches."),
    }).optional().describe("Physical dimensions of the product for shipping cost estimation, warehouse management, and packaging requirements. Required for physical goods with dimensional weight pricing."),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether product is active and available for sale. Inactive products are hidden from customers and AI Powered Services. Defaults to true."),
});
/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
exports.CreateProductCategorySchema = exports.ProductCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing product category.
 * All fields are optional except id.
 */
exports.UpdateProductCategorySchema = exports.CreateProductCategorySchema.partial().safeExtend({
    id: zod_1.default.string(),
});
/**
 * Schema for creating a new business product.
 * Omits auto-generated fields and category object.
 */
exports.CreateBusinessProductSchema = exports.BusinessProductSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
}).safeExtend({
    categoryId: zod_1.default.string().optional(),
});
/**
 * Schema for updating an existing business product.
 * All fields are optional except id.
 */
exports.UpdateBusinessProductSchema = exports.CreateBusinessProductSchema.partial().safeExtend({
    id: zod_1.default.string(),
});
