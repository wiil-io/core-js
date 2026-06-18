"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductAxisBindingSchema = exports.CreateProductAxisBindingSchema = exports.ProductAxisBindingSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
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
exports.ProductAxisBindingSchema = base_schema_1.BaseModelSchema.safeExtend({
    productRevisionId: zod_1.default.string().nullable().optional().describe("Optional product revision ID for version-scoped data"),
    productId: zod_1.default.string().describe("Product ID"),
    axisId: zod_1.default.string().describe("Variant axis ID"),
    displayOrder: zod_1.default.number().int().default(0).describe("Display order for this axis on the product"),
    isActive: zod_1.default.boolean().default(true).describe("Whether this binding is active"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new product axis binding.
 * Omits auto-generated fields.
 */
exports.CreateProductAxisBindingSchema = exports.ProductAxisBindingSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing product axis binding.
 * All fields optional except id (required).
 */
exports.UpdateProductAxisBindingSchema = exports.CreateProductAxisBindingSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ProductAxisBinding to update"),
});
