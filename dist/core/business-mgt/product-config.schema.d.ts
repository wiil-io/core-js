import z from "zod";
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
export declare const ProductCategorySchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const BusinessProductSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodString;
    category: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        displayOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    brand: z.ZodOptional<z.ZodString>;
    trackInventory: z.ZodDefault<z.ZodBoolean>;
    stockQuantity: z.ZodOptional<z.ZodNumber>;
    lowStockThreshold: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    dimensions: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new product category.
 * Omits auto-generated fields.
 */
export declare const CreateProductCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Schema for updating an existing product category.
 * All fields are optional except id.
 */
export declare const UpdateProductCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for creating a new business product.
 * Omits auto-generated fields and category object.
 */
export declare const CreateBusinessProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    price: z.ZodNumber;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    brand: z.ZodOptional<z.ZodString>;
    trackInventory: z.ZodDefault<z.ZodBoolean>;
    stockQuantity: z.ZodOptional<z.ZodNumber>;
    lowStockThreshold: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    dimensions: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>;
    categoryId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for updating an existing business product.
 * All fields are optional except id.
 */
export declare const UpdateBusinessProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    price: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    brand: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    trackInventory: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    stockQuantity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        unit: z.ZodDefault<z.ZodEnum<{
            cm: "cm";
            inches: "inches";
        }>>;
    }, z.core.$strip>>>;
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type CreateProductCategory = z.infer<typeof CreateProductCategorySchema>;
export type UpdateProductCategory = z.infer<typeof UpdateProductCategorySchema>;
export type BusinessProduct = z.infer<typeof BusinessProductSchema>;
export type CreateBusinessProduct = z.infer<typeof CreateBusinessProductSchema>;
export type UpdateBusinessProduct = z.infer<typeof UpdateBusinessProductSchema>;
export interface BusinessProductFilters {
    search?: string;
    categoryId?: string;
    isActive?: boolean;
    brand?: string;
    trackInventory?: boolean;
    priceRange?: {
        min?: number;
        max?: number;
    };
    lowStock?: boolean;
}
export interface BusinessProductSorting {
    field: 'name' | 'price' | 'createdAt' | 'displayOrder';
    direction: 'asc' | 'desc';
}
export interface BusinessProductQueryOptions {
    page: number;
    pageSize: number;
    filters?: BusinessProductFilters;
    sorting?: BusinessProductSorting;
}
