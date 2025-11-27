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
 * @property {string} organizationId - Business account ID
 * @property {string} name - Category name (e.g., Electronics, Clothing)
 * @property {string} [description] - Category description
 * @property {number} [displayOrder] - Display order in catalog
 * @property {boolean} isDefault - Whether this is the default category
 */
export const ProductCategorySchema = BaseModelSchema.safeExtend({
    id: z.string(),
    organizationId: z.string(),
    name: z.string().min(1, "Category name is required"),
    description: z.string().optional(),
    displayOrder: z.number().int().optional(),
    isDefault: z.boolean().default(false),
});

/**
 * Business product schema.
 *
 * @typedef {Object} BusinessProduct
 * @property {string} id - Unique product ID
 * @property {string} organizationId - Business account ID
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
    id: z.string(),
    organizationId: z.string(),
    name: z.string().min(1, "Product name is required"),
    description: z.string().optional(),

    // Product-specific fields
    price: z.number().nonnegative(),
    sku: z.string().optional(),
    barcode: z.string().optional(),
    categoryId: z.string(),
    category: ProductCategorySchema.optional(),
    brand: z.string().optional(),

    // Inventory
    trackInventory: z.boolean().default(false),
    stockQuantity: z.number().int().nonnegative().optional(),
    lowStockThreshold: z.number().int().nonnegative().optional(),

    // Physical attributes
    weight: z.number().positive().optional(),
    dimensions: z.object({
        length: z.number().positive(),
        width: z.number().positive(),
        height: z.number().positive(),
        unit: z.enum(['inches', 'cm']).default('inches'),
    }).optional(),

    // Business Management
    isActive: z.boolean().default(true),
    displayOrder: z.number().int().optional(),
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
    category: z.string().nullable().optional(),
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
