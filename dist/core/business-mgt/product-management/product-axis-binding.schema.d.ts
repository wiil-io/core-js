import z from "zod";
/**
 * @fileoverview Product axis binding schema definitions.
 * @module business-mgt/product-axis-binding
 *
 * Links products to their applicable variant axes, defining which axes apply to each product.
 */
/**
 * Product axis binding schema.
 * Links products to their applicable variant axes, defining which axes apply to each product.
 *
 * @typedef {Object} ProductAxisBinding
 * @property {string} [productRevisionId] - Version control for product changes
 * @property {string} productId - Product ID being bound to an axis
 * @property {string} axisId - Variant axis ID being bound
 * @property {number} displayOrder - Display order for this axis on the product
 * @property {boolean} isActive - Whether this binding is active
 */
export declare const ProductAxisBindingSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    axisId: z.ZodString;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new product axis binding.
 * Omits auto-generated fields.
 */
export declare const CreateProductAxisBindingSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    productRevisionId: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    axisId: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing product axis binding.
 * All fields optional except id (required).
 */
export declare const UpdateProductAxisBindingSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    productRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    productId: z.ZodOptional<z.ZodString>;
    axisId: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
export type ProductAxisBinding = z.infer<typeof ProductAxisBindingSchema>;
export type CreateProductAxisBinding = z.infer<typeof CreateProductAxisBindingSchema>;
export type UpdateProductAxisBinding = z.infer<typeof UpdateProductAxisBindingSchema>;
