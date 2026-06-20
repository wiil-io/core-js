"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiscountRuleSchema = exports.CreateDiscountRuleSchema = exports.DiscountRuleSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const display_order_1 = require("../type-definitions/display-order");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Discount rule schema definitions for order pricing.
 * @module business-mgt/discount-rule
 */
// ============================================================================
// DISCOUNT RULE SCHEMA
// ============================================================================
/**
 * Discount rule schema.
 * Defines discount configurations for orders including percentage and fixed amount discounts.
 *
 * @typedef {Object} DiscountRule
 * @property {string} [locationId] - Business location where this discount applies
 * @property {string} name - Discount display name
 * @property {string} [code] - Discount code for promo codes
 * @property {DiscountScope} scope - Discount scope (order, item, category)
 * @property {DiscountType} type - Discount type (percentage, fixed)
 * @property {number} value - Discount value (percentage or fixed amount)
 * @property {string} currency - Currency code for fixed discounts
 * @property {DiscountCatalogScope} catalogScope - Catalog scope for item-level discounts
 * @property {string} [externalDiscountId] - External system discount ID
 * @property {number} [minSubtotal] - Minimum order subtotal required
 * @property {string} [customerSegment] - Target customer segment
 * @property {boolean} firstOrderOnly - Whether discount is for first orders only
 * @property {number} [maxUses] - Maximum total uses allowed
 * @property {number} [maxUsesPerCustomer] - Maximum uses per customer
 * @property {boolean} isStackable - Whether discount can stack with others
 * @property {number} priority - Priority for discount application order
 * @property {number} [effectiveFrom] - Start timestamp for discount validity
 * @property {number} [effectiveTo] - End timestamp for discount validity
 * @property {boolean} isActive - Whether discount is currently active
 */
exports.DiscountRuleSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional(),
    name: zod_1.z.string().min(1).max(100),
    code: zod_1.z.string().optional(),
    scope: zod_1.z.enum(type_definitions_1.DiscountScope).default(type_definitions_1.DiscountScope.ORDER),
    type: zod_1.z.enum(type_definitions_1.DiscountType).default(type_definitions_1.DiscountType.PERCENTAGE),
    value: zod_1.z.number().nonnegative(),
    currency: zod_1.z.string().length(3).default("USD"),
    catalogScope: zod_1.z.enum(type_definitions_1.DiscountCatalogScope).default(type_definitions_1.DiscountCatalogScope.ALL),
    externalDiscountId: zod_1.z.string().optional(),
    minSubtotal: zod_1.z.number().nonnegative().optional(),
    customerSegment: zod_1.z.string().optional(),
    firstOrderOnly: zod_1.z.boolean().default(false),
    maxUses: zod_1.z.number().int().positive().optional(),
    maxUsesPerCustomer: zod_1.z.number().int().positive().optional(),
    isStackable: zod_1.z.boolean().default(true),
    priority: zod_1.z.number().int().nonnegative().default(0),
    effectiveFrom: zod_1.z.number().int().nonnegative().nullable().optional(),
    effectiveTo: zod_1.z.number().int().nonnegative().nullable().optional(),
    isActive: zod_1.z.boolean().default(true),
}).superRefine((data, ctx) => {
    if (data.type === type_definitions_1.DiscountType.PERCENTAGE && data.value > 100) {
        ctx.addIssue({
            code: "custom",
            path: ["value"],
            message: "value cannot exceed 100 for percentage discounts",
        });
    }
    if (data.effectiveFrom !== null &&
        data.effectiveFrom !== undefined &&
        data.effectiveTo !== null &&
        data.effectiveTo !== undefined &&
        data.effectiveTo < data.effectiveFrom) {
        ctx.addIssue({
            code: "custom",
            path: ["effectiveTo"],
            message: "effectiveTo must be greater than or equal to effectiveFrom",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new discount rule.
 * Omits auto-generated fields.
 */
exports.CreateDiscountRuleSchema = exports.DiscountRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional(),
});
/**
 * Schema for updating an existing discount rule.
 * All fields optional except id.
 */
exports.UpdateDiscountRuleSchema = exports.CreateDiscountRuleSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the discount rule to update"),
});
