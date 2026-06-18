import z from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Product axis binding schema definitions.
 * @module business-mgt/product-axis-binding
 *
 * Links products to their applicable variant axes, defining which axes apply to each product.
 */

// ============================================================================
// PRODUCT AXIS BINDING SCHEMA
// ============================================================================

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
export const ProductAxisBindingSchema = BaseModelSchema.safeExtend({
    productRevisionId: z.string().nullable().optional().describe("Optional product revision ID for version-scoped data"),
    productId: z.string().describe("Product ID"),
    axisId: z.string().describe("Variant axis ID"),
    displayOrder: z.number().int().default(0).describe("Display order for this axis on the product"),
    isActive: z.boolean().default(true).describe("Whether this binding is active"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new product axis binding.
 * Omits auto-generated fields.
 */
export const CreateProductAxisBindingSchema = ProductAxisBindingSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing product axis binding.
 * All fields optional except id (required).
 */
export const UpdateProductAxisBindingSchema = CreateProductAxisBindingSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ProductAxisBinding to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProductAxisBinding = z.infer<typeof ProductAxisBindingSchema>;
export type CreateProductAxisBinding = z.infer<typeof CreateProductAxisBindingSchema>;
export type UpdateProductAxisBinding = z.infer<typeof UpdateProductAxisBindingSchema>;
