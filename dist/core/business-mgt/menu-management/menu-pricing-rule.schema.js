"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuPricingRuleSchema = exports.CreateMenuPricingRuleSchema = exports.MenuPricingRuleSchema = exports.MenuPricingRuleConditionSchema = exports.MenuPricingRuleBaseConditionSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
const pricing_rule_shared_schema_1 = require("../pricing-rule.shared.schema");
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
exports.MenuPricingRuleBaseConditionSchema = zod_1.z.object({
    channel: zod_1.z.enum(type_definitions_1.PricingChannel).default(type_definitions_1.PricingChannel.ALL).describe("Target channel for this rule"),
    minOrderAmount: zod_1.z.number().nonnegative().nullable().optional().describe("Minimum order amount to apply rule"),
    maxOrderAmount: zod_1.z.number().nonnegative().nullable().optional().describe("Maximum order amount to apply rule"),
    customerGroupIds: zod_1.z.array(zod_1.z.string()).nullable().optional().describe("Target customer group IDs"),
    dayOfWeek: zod_1.z.array(zod_1.z.number().int().min(0).max(6)).nullable().optional().describe("Days of week (0=Sunday, 6=Saturday)"),
    timeStart: zod_1.z.string().nullable().optional().describe("Start time (HH:mm format)"),
    timeEnd: zod_1.z.string().nullable().optional().describe("End time (HH:mm format)"),
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
exports.MenuPricingRuleConditionSchema = exports.MenuPricingRuleBaseConditionSchema.extend({
    menuSetId: zod_1.z.string().min(1).describe("Menu set ID this rule applies to"),
    menuItemIds: zod_1.z.array(zod_1.z.string()).nullable().optional().describe("Specific menu item IDs to target"),
    categoryIds: zod_1.z.array(zod_1.z.string()).nullable().optional().describe("Menu category IDs to target"),
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
exports.MenuPricingRuleSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Location ID for location-specific rules"),
    name: zod_1.z.string().min(1).max(120).describe("Pricing rule name"),
    description: zod_1.z.string().nullable().optional().describe("Pricing rule description"),
    channelMappings: zod_1.z.array(pricing_rule_shared_schema_1.PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel pricing rule ID mappings"),
    discountId: zod_1.z.string().min(1).describe("Associated discount ID"),
    menuSetRevisionId: zod_1.z.string().nullable().optional().describe("Menu set revision ID for version-scoped rules"),
    condition: exports.MenuPricingRuleConditionSchema.describe("Conditions for rule application"),
    effectiveFrom: zod_1.z.number().int().nonnegative().nullable().optional().describe("Start timestamp for rule validity"),
    effectiveTo: zod_1.z.number().int().nonnegative().nullable().optional().describe("End timestamp for rule validity"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order in rule list"),
    isActive: zod_1.z.boolean().default(true).describe("Whether this rule is active"),
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
exports.CreateMenuPricingRuleSchema = exports.MenuPricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    placement: type_definitions_1.CreateDisplayOrderPlacementSchema.optional().describe("Placement for display ordering"),
});
/**
 * Schema for updating an existing menu pricing rule.
 * All fields optional except id (required).
 */
exports.UpdateMenuPricingRuleSchema = exports.CreateMenuPricingRuleSchema.partial().extend({
    id: zod_1.z.string(),
});
