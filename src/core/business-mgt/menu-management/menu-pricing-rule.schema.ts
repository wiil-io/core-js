import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema, PricingChannel } from "../../type-definitions";
import { PricingRuleChannelMappingSchema } from "../pricing-rule.shared.schema";

/**
 * @fileoverview Menu pricing rule schema definitions for menu-specific discounts and promotions.
 * @module business-mgt/menu-pricing-rule
 *
 * Includes pricing rules, conditions, and channel mappings for
 * menu-specific discounts and promotional pricing.
 */

// ============================================================================
// CONDITION SCHEMAS
// ============================================================================

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
export const MenuPricingRuleBaseConditionSchema = z.object({
    channel: z.enum(PricingChannel).default(PricingChannel.ALL).describe("Target channel for this rule"),
    minOrderAmount: z.number().nonnegative().nullable().optional().describe("Minimum order amount to apply rule"),
    maxOrderAmount: z.number().nonnegative().nullable().optional().describe("Maximum order amount to apply rule"),
    customerGroupIds: z.array(z.string()).nullable().optional().describe("Target customer group IDs"),
    dayOfWeek: z.array(z.number().int().min(0).max(6)).nullable().optional().describe("Days of week (0=Sunday, 6=Saturday)"),
    timeStart: z.string().nullable().optional().describe("Start time (HH:mm format)"),
    timeEnd: z.string().nullable().optional().describe("End time (HH:mm format)"),
});

/**
 * Menu pricing rule condition schema.
 * Menu-specific conditions for pricing rule application.
 *
 * @typedef {Object} MenuPricingRuleCondition
 * @property {string} menuSetId - Menu set ID this rule applies to
 * @property {string[]} [menuItemIds] - Specific menu item IDs to target
 * @property {string[]} [categoryIds] - Menu category IDs to target
 */
export const MenuPricingRuleConditionSchema = MenuPricingRuleBaseConditionSchema.extend({
    menuSetId: z.string().min(1).describe("Menu set ID this rule applies to"),
    menuItemIds: z.array(z.string()).nullable().optional().describe("Specific menu item IDs to target"),
    categoryIds: z.array(z.string()).nullable().optional().describe("Menu category IDs to target"),
});

// ============================================================================
// MENU PRICING RULE SCHEMA
// ============================================================================

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
export const MenuPricingRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Location ID for location-specific rules"),
    name: z.string().min(1).max(120).describe("Pricing rule name"),
    description: z.string().nullable().optional().describe("Pricing rule description"),
    channelMappings: z.array(PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel pricing rule ID mappings"),
    discountId: z.string().min(1).describe("Associated discount ID"),
    menuSetRevisionId: z.string().nullable().optional().describe("Menu set revision ID for version-scoped rules"),
    condition: MenuPricingRuleConditionSchema.describe("Conditions for rule application"),
    effectiveFrom: z.number().int().nonnegative().nullable().optional().describe("Start timestamp for rule validity"),
    effectiveTo: z.number().int().nonnegative().nullable().optional().describe("End timestamp for rule validity"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order in rule list"),
    isActive: z.boolean().default(true).describe("Whether this rule is active"),
}).superRefine((data, ctx) => {
    if (data.effectiveFrom !== undefined && data.effectiveFrom !== null &&
        data.effectiveTo !== undefined && data.effectiveTo !== null &&
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
 * Schema for creating a new menu pricing rule.
 * Omits auto-generated fields.
 */
export const CreateMenuPricingRuleSchema = MenuPricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Placement for display ordering"),
});

/**
 * Schema for updating an existing menu pricing rule.
 * All fields optional except id (required).
 */
export const UpdateMenuPricingRuleSchema = CreateMenuPricingRuleSchema.partial().extend({
    id: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MenuPricingRuleBaseCondition = z.infer<typeof MenuPricingRuleBaseConditionSchema>;
export type MenuPricingRuleCondition = z.infer<typeof MenuPricingRuleConditionSchema>;
export type MenuPricingRule = z.infer<typeof MenuPricingRuleSchema>;
export type CreateMenuPricingRule = z.infer<typeof CreateMenuPricingRuleSchema>;
export type UpdateMenuPricingRule = z.infer<typeof UpdateMenuPricingRuleSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
