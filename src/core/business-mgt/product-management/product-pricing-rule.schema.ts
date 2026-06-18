import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../type-definitions/display-order";
import { PricingChannel, PricingRuleChannelMappingSchema, PricingRuleCommonConditionSchema } from "../pricing-rule.shared.schema";

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
export const ProductPricingRuleConditionSchema = PricingRuleCommonConditionSchema.safeExtend({
    productSetId: z.string().min(1).describe("References ProductSet that defines which products this pricing rule applies to. The rule activates when cart contents match the set criteria."),
});

// ============================================================================
// PRICING RULE SCHEMA
// ============================================================================

/**
 * Product pricing rule schema.
 * Defines promotional pricing logic applied to product orders.
 */
export const ProductPricingRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID for location-specific pricing rules. Null applies to all locations."),
    name: z.string().min(1).max(120).describe("Display name for this pricing rule (e.g., 'Summer Sale 20% Off', 'Buy 2 Get 1 Free'). Shown to staff and in reports."),
    channelMappings: z.array(PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel pricing rule ID mappings for external platform synchronization."),
    discountId: z.string().min(1).describe("References DiscountRule that defines the discount type and value to apply when this rule matches."),
    productSetRevisionId: z.string().nullable().optional().describe("Optional product set revision ID for version-scoped rule targeting. Ensures rule applies to specific catalog version."),
    condition: ProductPricingRuleConditionSchema.describe("Condition criteria that must be met for this pricing rule to apply. Includes product set targeting and quantity requirements."),
    effectiveFrom: z.number().int().nonnegative().optional().describe("Unix timestamp when this pricing rule becomes active. Rule is inactive before this time."),
    effectiveTo: z.number().int().nonnegative().optional().describe("Unix timestamp when this pricing rule expires. Rule is inactive after this time."),
    isActive: z.boolean().default(true).describe("Whether this pricing rule is currently active. Inactive rules are not applied even if conditions match. Defaults to true."),
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
export const CreateProductPricingRuleSchema = ProductPricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});

/**
 * Schema for updating an existing product pricing rule.
 * All fields optional except id (required).
 */
export const UpdateProductPricingRuleSchema = CreateProductPricingRuleSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ProductPricingRule to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProductPricingRuleCondition = z.infer<typeof ProductPricingRuleConditionSchema>;
export type ProductPricingRule = z.infer<typeof ProductPricingRuleSchema>;
export type CreateProductPricingRule = z.infer<typeof CreateProductPricingRuleSchema>;
export type UpdateProductPricingRule = z.infer<typeof UpdateProductPricingRuleSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Product pricing rule filter options.
 * @interface ProductPricingRuleFilters
 */
export interface ProductPricingRuleFilters {
    /** Text search across rule name */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by pricing channel */
    channel?: PricingChannel;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Product pricing rule sorting options.
 * @interface ProductPricingRuleSorting
 */
export interface ProductPricingRuleSorting {
    /** Field to sort by */
    field: "name" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Product pricing rule query options.
 * @interface ProductPricingRuleQueryOptions
 */
export interface ProductPricingRuleQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ProductPricingRuleFilters;
    /** Optional sorting */
    sorting?: ProductPricingRuleSorting;
}
