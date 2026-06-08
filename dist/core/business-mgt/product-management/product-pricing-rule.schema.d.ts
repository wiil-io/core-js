import { z } from "zod";
import { PricingChannel } from "../pricing-rule.shared.schema";
/**
 * @fileoverview Product pricing rule schema definitions for promotions and discounts.
 * @module business-mgt/product-pricing-rule
 */
/**
 * Product pricing rule condition schema.
 * Extends common pricing conditions with product set targeting.
 */
export declare const ProductPricingRuleConditionSchema: z.ZodObject<{
    daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    startMinute: z.ZodOptional<z.ZodNumber>;
    endMinute: z.ZodOptional<z.ZodNumber>;
    customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
    productSetId: z.ZodString;
}, z.core.$strip>;
/**
 * Product pricing rule schema.
 * Defines promotional pricing logic applied to product orders.
 */
export declare const ProductPricingRuleSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    discountId: z.ZodString;
    productSetRevisionId: z.ZodOptional<z.ZodString>;
    condition: z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        productSetId: z.ZodString;
    }, z.core.$strip>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new product pricing rule.
 * Omits auto-generated fields.
 */
export declare const CreateProductPricingRuleSchema: z.ZodObject<{
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    discountId: z.ZodString;
    condition: z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        productSetId: z.ZodString;
    }, z.core.$strip>;
    productSetRevisionId: z.ZodOptional<z.ZodString>;
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
 * Schema for updating an existing product pricing rule.
 * All fields optional except id (required).
 */
export declare const UpdateProductPricingRuleSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    effectiveFrom: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>>;
    discountId: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        productSetId: z.ZodString;
    }, z.core.$strip>>;
    productSetRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
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
}, z.core.$strip>;
export type ProductPricingRuleCondition = z.infer<typeof ProductPricingRuleConditionSchema>;
export type ProductPricingRule = z.infer<typeof ProductPricingRuleSchema>;
export type CreateProductPricingRule = z.infer<typeof CreateProductPricingRuleSchema>;
export type UpdateProductPricingRule = z.infer<typeof UpdateProductPricingRuleSchema>;
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
