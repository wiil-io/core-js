import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../type-definitions/display-order";
import { DiscountCatalogScope, DiscountScope, DiscountType } from "../type-definitions";

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
export const DiscountRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    name: z.string().min(1).max(100),
    code: z.string().optional(),
    scope: z.enum(DiscountScope).default(DiscountScope.ORDER),
    type: z.enum(DiscountType).default(DiscountType.PERCENTAGE),
    value: z.number().nonnegative(),
    currency: z.string().length(3).default("USD"),
    catalogScope: z.enum(DiscountCatalogScope).default(DiscountCatalogScope.ALL),
    externalDiscountId: z.string().optional(),
    minSubtotal: z.number().nonnegative().optional(),
    customerSegment: z.string().optional(),
    firstOrderOnly: z.boolean().default(false),
    maxUses: z.number().int().positive().optional(),
    maxUsesPerCustomer: z.number().int().positive().optional(),
    isStackable: z.boolean().default(true),
    priority: z.number().int().nonnegative().default(0),
    effectiveFrom: z.number().int().nonnegative().optional(),
    effectiveTo: z.number().int().nonnegative().optional(),
    isActive: z.boolean().default(true),
}).superRefine((data, ctx) => {
    if (data.type === DiscountType.PERCENTAGE && data.value > 100) {
        ctx.addIssue({
            code: "custom",
            path: ["value"],
            message: "value cannot exceed 100 for percentage discounts",
        });
    }
    if (
        data.effectiveFrom !== undefined &&
        data.effectiveTo !== undefined &&
        data.effectiveTo < data.effectiveFrom
    ) {
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
export const CreateDiscountRuleSchema = DiscountRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

/**
 * Schema for updating an existing discount rule.
 * All fields optional except id.
 */
export const UpdateDiscountRuleSchema = CreateDiscountRuleSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the discount rule to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type DiscountRule = z.infer<typeof DiscountRuleSchema>;
export type CreateDiscountRule = z.infer<typeof CreateDiscountRuleSchema>;
export type UpdateDiscountRule = z.infer<typeof UpdateDiscountRuleSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Discount rule filter options.
 * @interface DiscountRuleFilters
 */
export interface DiscountRuleFilters {
    /** Text search across discount name and code */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by discount code */
    code?: string;
    /** Filter by discount scope */
    scope?: DiscountScope;
    /** Filter by discount type */
    type?: DiscountType;
    /** Filter by catalog scope */
    catalogScope?: DiscountCatalogScope;
    /** Filter by stackable status */
    isStackable?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Discount rule sorting options.
 * @interface DiscountRuleSorting
 */
export interface DiscountRuleSorting {
    /** Field to sort by */
    field: "name" | "priority" | "value" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Discount rule query options.
 * @interface DiscountRuleQueryOptions
 */
export interface DiscountRuleQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: DiscountRuleFilters;
    /** Optional sorting */
    sorting?: DiscountRuleSorting;
}

