import { z } from "zod";
import { PricingChannel } from "../../type-definitions";
/**
 * @fileoverview Menu pricing rule schema definitions for menu-specific discounts and promotions.
 * @module business-mgt/menu-pricing-rule
 *
 * Includes pricing rules, conditions, and channel mappings for
 * menu-specific discounts and promotional pricing.
 */
/**
 * Menu pricing rule base condition schema.
 * Base conditions for menu pricing rules including time and amount restrictions.
 *
 * @typedef {Object} MenuPricingRuleBaseCondition
 * @property {PricingChannel} channel - Target channel for this rule
 * @property {number} [minOrderAmount] - Minimum order amount to apply rule
 * @property {number} [maxOrderAmount] - Maximum order amount to apply rule
 * @property {string[]} [customerGroupIds] - Target customer group IDs
 * @property {number[]} [dayOfWeek] - Days of week (0=Sunday, 6=Saturday)
 * @property {string} [timeStart] - Start time (HH:mm format)
 * @property {string} [timeEnd] - End time (HH:mm format)
 */
export declare const MenuPricingRuleBaseConditionSchema: z.ZodObject<{
    channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
    minOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    customerGroupIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    dayOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
    timeStart: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timeEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Menu pricing rule condition schema.
 * Menu-specific conditions for pricing rule application.
 *
 * @typedef {Object} MenuPricingRuleCondition
 * @property {string} menuSetId - Menu set ID this rule applies to
 * @property {string[]} [menuItemIds] - Specific menu item IDs to target
 * @property {string[]} [categoryIds] - Menu category IDs to target
 */
export declare const MenuPricingRuleConditionSchema: z.ZodObject<{
    channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
    minOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    customerGroupIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    dayOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
    timeStart: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timeEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuSetId: z.ZodString;
    menuItemIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    categoryIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Menu pricing rule schema.
 * Defines pricing rules for menu-specific discounts and promotions.
 *
 * @typedef {Object} MenuPricingRule
 * @property {string} [locationId] - Location ID for location-specific rules
 * @property {string} name - Pricing rule name
 * @property {string} [description] - Pricing rule description
 * @property {PricingRuleChannelMapping[]} [channelMappings] - Per-channel mappings
 * @property {string} discountId - Associated discount ID
 * @property {string} [menuSetRevisionId] - Menu set revision ID for version-scoped rules
 * @property {MenuPricingRuleCondition} condition - Conditions for rule application
 * @property {number} [effectiveFrom] - Start timestamp for rule validity
 * @property {number} [effectiveTo] - End timestamp for rule validity
 * @property {number} displayOrder - Display order in rule list
 * @property {boolean} isActive - Whether this rule is active
 */
export declare const MenuPricingRuleSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    discountId: z.ZodString;
    menuSetRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    condition: z.ZodObject<{
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        minOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        customerGroupIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        dayOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        timeStart: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timeEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        menuSetId: z.ZodString;
        menuItemIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        categoryIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>;
    effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new menu pricing rule.
 * Omits auto-generated fields.
 */
export declare const CreateMenuPricingRuleSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    discountId: z.ZodString;
    menuSetRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    condition: z.ZodObject<{
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        minOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        customerGroupIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        dayOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        timeStart: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timeEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        menuSetId: z.ZodString;
        menuItemIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        categoryIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>;
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
 * Schema for updating an existing menu pricing rule.
 * All fields optional except id (required).
 */
export declare const UpdateMenuPricingRuleSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    effectiveFrom: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    effectiveTo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>>;
    discountId: z.ZodOptional<z.ZodString>;
    menuSetRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    condition: z.ZodOptional<z.ZodObject<{
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        minOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxOrderAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        customerGroupIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        dayOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        timeStart: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timeEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        menuSetId: z.ZodString;
        menuItemIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        categoryIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>;
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
export type MenuPricingRuleBaseCondition = z.infer<typeof MenuPricingRuleBaseConditionSchema>;
export type MenuPricingRuleCondition = z.infer<typeof MenuPricingRuleConditionSchema>;
export type MenuPricingRule = z.infer<typeof MenuPricingRuleSchema>;
export type CreateMenuPricingRule = z.infer<typeof CreateMenuPricingRuleSchema>;
export type UpdateMenuPricingRule = z.infer<typeof UpdateMenuPricingRuleSchema>;
/**
 * Menu pricing rule filter options.
 * @interface MenuPricingRuleFilters
 */
export interface MenuPricingRuleFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by pricing channel */
    channel?: PricingChannel;
    /** Filter by menu set ID */
    menuSetId?: string;
    /** Filter by discount ID */
    discountId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by effective timestamp */
    effectiveAt?: number;
}
/**
 * Menu pricing rule sorting options.
 * @interface MenuPricingRuleSorting
 */
export interface MenuPricingRuleSorting {
    /** Field to sort by */
    field: "name" | "createdAt" | "displayOrder";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Menu pricing rule query options.
 * @interface MenuPricingRuleQueryOptions
 */
export interface MenuPricingRuleQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: MenuPricingRuleFilters;
    /** Optional sorting */
    sorting?: MenuPricingRuleSorting;
}
