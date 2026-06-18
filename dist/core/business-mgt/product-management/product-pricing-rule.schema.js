"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductPricingRuleSchema = exports.CreateProductPricingRuleSchema = exports.ProductPricingRuleSchema = exports.ProductPricingRuleConditionSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const display_order_1 = require("../../type-definitions/display-order");
const pricing_rule_shared_schema_1 = require("../pricing-rule.shared.schema");
/**
 * @fileoverview Product pricing rule schema definitions for promotions and discounts.
 * @module business-mgt/product-pricing-rule
 */
// ============================================================================
// CONDITION SCHEMA
// ============================================================================
/**
 * Product pricing rule condition schema.
 * Extends common pricing conditions with product set targeting.
 */
exports.ProductPricingRuleConditionSchema = pricing_rule_shared_schema_1.PricingRuleCommonConditionSchema.safeExtend({
    productSetId: zod_1.z.string().min(1).describe("References ProductSet that defines which products this pricing rule applies to. The rule activates when cart contents match the set criteria."),
});
// ============================================================================
// PRICING RULE SCHEMA
// ============================================================================
/**
 * Product pricing rule schema.
 * Defines promotional pricing logic applied to product orders.
 */
exports.ProductPricingRuleSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID for location-specific pricing rules. Null applies to all locations."),
    name: zod_1.z.string().min(1).max(120).describe("Display name for this pricing rule (e.g., 'Summer Sale 20% Off', 'Buy 2 Get 1 Free'). Shown to staff and in reports."),
    channelMappings: zod_1.z.array(pricing_rule_shared_schema_1.PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel pricing rule ID mappings for external platform synchronization."),
    discountId: zod_1.z.string().min(1).describe("References DiscountRule that defines the discount type and value to apply when this rule matches."),
    productSetRevisionId: zod_1.z.string().nullable().optional().describe("Optional product set revision ID for version-scoped rule targeting. Ensures rule applies to specific catalog version."),
    condition: exports.ProductPricingRuleConditionSchema.describe("Condition criteria that must be met for this pricing rule to apply. Includes product set targeting and quantity requirements."),
    effectiveFrom: zod_1.z.number().int().nonnegative().optional().describe("Unix timestamp when this pricing rule becomes active. Rule is inactive before this time."),
    effectiveTo: zod_1.z.number().int().nonnegative().optional().describe("Unix timestamp when this pricing rule expires. Rule is inactive after this time."),
    isActive: zod_1.z.boolean().default(true).describe("Whether this pricing rule is currently active. Inactive rules are not applied even if conditions match. Defaults to true."),
}).superRefine((data, ctx) => {
    if (data.effectiveFrom !== undefined && data.effectiveTo !== undefined && data.effectiveTo < data.effectiveFrom) {
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
 * Schema for creating a new product pricing rule.
 * Omits auto-generated fields.
 */
exports.CreateProductPricingRuleSchema = exports.ProductPricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});
/**
 * Schema for updating an existing product pricing rule.
 * All fields optional except id (required).
 */
exports.UpdateProductPricingRuleSchema = exports.CreateProductPricingRuleSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the ProductPricingRule to update"),
});
