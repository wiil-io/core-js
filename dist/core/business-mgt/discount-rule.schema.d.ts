import { z } from "zod";
import { DiscountCatalogScope, DiscountScope, DiscountType } from "../type-definitions";
/**
 * @fileoverview Discount rule schema definitions for order pricing.
 * @module business-mgt/discount-rule
 */
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
export declare const DiscountRuleSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    scope: z.ZodDefault<z.ZodEnum<typeof DiscountScope>>;
    type: z.ZodDefault<z.ZodEnum<typeof DiscountType>>;
    value: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    catalogScope: z.ZodDefault<z.ZodEnum<typeof DiscountCatalogScope>>;
    externalDiscountId: z.ZodOptional<z.ZodString>;
    minSubtotal: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    customerSegment: z.ZodOptional<z.ZodString>;
    firstOrderOnly: z.ZodDefault<z.ZodBoolean>;
    maxUses: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxUsesPerCustomer: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isStackable: z.ZodDefault<z.ZodBoolean>;
    priority: z.ZodDefault<z.ZodNumber>;
    effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new discount rule.
 * Omits auto-generated fields.
 */
export declare const CreateDiscountRuleSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<typeof DiscountType>>;
    value: z.ZodNumber;
    code: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    currency: z.ZodDefault<z.ZodString>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodDefault<z.ZodEnum<typeof DiscountScope>>;
    catalogScope: z.ZodDefault<z.ZodEnum<typeof DiscountCatalogScope>>;
    externalDiscountId: z.ZodOptional<z.ZodString>;
    minSubtotal: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    customerSegment: z.ZodOptional<z.ZodString>;
    firstOrderOnly: z.ZodDefault<z.ZodBoolean>;
    maxUses: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxUsesPerCustomer: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isStackable: z.ZodDefault<z.ZodBoolean>;
    priority: z.ZodDefault<z.ZodNumber>;
    effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing discount rule.
 * All fields optional except id.
 */
export declare const UpdateDiscountRuleSchema: z.ZodObject<{
    value: z.ZodOptional<z.ZodNumber>;
    code: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    name: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    externalDiscountId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    minSubtotal: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    customerSegment: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    maxUses: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    maxUsesPerCustomer: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    effectiveFrom: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    effectiveTo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
    scope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof DiscountScope>>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof DiscountType>>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    catalogScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof DiscountCatalogScope>>>;
    firstOrderOnly: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isStackable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    priority: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type DiscountRule = z.infer<typeof DiscountRuleSchema>;
export type CreateDiscountRule = z.infer<typeof CreateDiscountRuleSchema>;
export type UpdateDiscountRule = z.infer<typeof UpdateDiscountRuleSchema>;
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
