import z from "zod";
import { BaseModelSchema } from "../base.schema";

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
export const ProductCategorySchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this product category in the catalog managed by Product Management."),
    name: z.string().min(1, "Category name is required").describe("Category name for product organization (e.g., Electronics, Clothing, Home & Garden). Used by AI Powered Services when presenting product options to customers."),
    description: z.string().optional().describe("Category description providing context about the type of products included. Helps customers navigate the product catalog and understand category scope."),
    displayOrder: z.number().int().optional().describe("Numeric order for category display in product catalog. Lower numbers appear first. Enables strategic category positioning."),
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
export const BusinessProductSchema = BaseModelSchema.safeExtend({
    id: z.string().describe("Unique identifier for this product in the catalog managed by Product Management."),
    name: z.string().min(1, "Product name is required").describe("Display name of the product shown to customers. Used by AI Powered Services in product order conversations."),
    description: z.string().optional().describe("Detailed product description including features, specifications, or benefits. Helps customers make informed purchasing decisions and enables AI-powered product recommendations."),

    // Product-specific fields
    price: z.number().nonnegative().describe("Base price for this product in the account's currency. Used for order pricing calculations and Product Order workflow."),
    sku: z.string().optional().describe("Stock Keeping Unit identifier for internal inventory tracking and integration with external inventory systems. Unique alphanumeric code for warehouse and fulfillment operations."),
    barcode: z.string().optional().describe("Product barcode (UPC, EAN, ISBN) for point-of-sale scanning and inventory management. Links physical products to digital catalog."),
    categoryId: z.string().describe("References ProductCategory this product belongs to. Used for product organization and AI-driven category-based browsing."),
    category: ProductCategorySchema.optional().describe("Populated ProductCategory object for convenient access. Not required during creation; managed by Product Management."),
    brand: z.string().optional().describe("Product brand or manufacturer name for brand-based filtering and customer preference matching in AI conversations."),

    // Inventory
    trackInventory: z.boolean().default(false).describe("Whether inventory tracking is enabled for this product. When true, stockQuantity is enforced and Product Order validates availability. Defaults to false for digital or unlimited products."),
    stockQuantity: z.number().int().nonnegative().optional().describe("Current available stock quantity. Only applicable when trackInventory is true. AI Powered Services checks availability before accepting orders. Updated by Product Order and inventory adjustments."),
    lowStockThreshold: z.number().int().nonnegative().optional().describe("Stock level that triggers low inventory alerts for replenishment. Used by inventory management systems to maintain optimal stock levels."),

    // Physical attributes
    weight: z.number().positive().optional().describe("Product weight for shipping calculations and carrier integration. Used in delivery cost estimation for Product Order fulfillment."),
    dimensions: z.object({
        length: z.number().positive().describe("Product length in specified units. Used for shipping calculations and warehouse storage planning."),
        width: z.number().positive().describe("Product width in specified units. Used for shipping calculations and package sizing."),
        height: z.number().positive().describe("Product height in specified units. Used for shipping calculations and storage optimization."),
        unit: z.enum(['inches', 'cm']).default('inches').describe("Measurement unit for length, width, and height dimensions. Supports inches or centimeters. Defaults to inches."),
    }).optional().describe("Physical dimensions of the product for shipping cost estimation, warehouse management, and packaging requirements. Required for physical goods with dimensional weight pricing."),

    // Business Management
    isActive: z.boolean().default(true).describe("Whether product is active and available for sale. Inactive products are hidden from customers and AI Powered Services. Defaults to true."),
});

/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
export const CreateProductCategorySchema = ProductCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing product category.
 * All fields are optional except id.
 */
export const UpdateProductCategorySchema = CreateProductCategorySchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for creating a new business product.
 * Omits auto-generated fields and category object.
 */
export const CreateBusinessProductSchema = BusinessProductSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    categoryId: true,
}).safeExtend({
    categoryId: z.string().optional(),
});

/**
 * Schema for updating an existing business product.
 * All fields are optional except id.
 */
export const UpdateBusinessProductSchema = CreateBusinessProductSchema.partial().safeExtend({
    id: z.string(),
});

// Type exports
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type CreateProductCategory = z.infer<typeof CreateProductCategorySchema>;
export type UpdateProductCategory = z.infer<typeof UpdateProductCategorySchema>;
export type BusinessProduct = z.infer<typeof BusinessProductSchema>;
export type CreateBusinessProduct = z.infer<typeof CreateBusinessProductSchema>;
export type UpdateBusinessProduct = z.infer<typeof UpdateBusinessProductSchema>;
