"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServicePricingRuleSchema = exports.CreateServicePricingRuleSchema = exports.ServicePricingRuleSchema = exports.ServicePricingRuleConditionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const display_order_1 = require("../../type-definitions/display-order");
const pricing_rule_shared_schema_1 = require("../pricing-rule.shared.schema");
/**
 * @fileoverview Service Pricing Rule schema definitions.
 * @module business-mgt/service-pricing-rule
 *
 * Service pricing rules define conditional pricing adjustments for services.
 * Supports time-based promotions, channel-specific pricing, and service targeting.
 */
// ============================================================================
// SERVICE PRICING RULE CONDITION SCHEMA
// ============================================================================
/**
 * Service pricing rule condition schema.
 * Extends common pricing conditions with service-specific targeting.
 *
 * @typedef {Object} ServicePricingRuleCondition
 * @property {boolean} allServices - Apply to all services
 * @property {string[]} serviceIdsAny - Apply if any of these services match
 * @property {string[]} serviceIdsAll - Apply only if all these services are present
 */
exports.ServicePricingRuleConditionSchema = pricing_rule_shared_schema_1.PricingRuleCommonConditionSchema.safeExtend({
    allServices: zod_1.default.boolean().default(false).describe("Apply rule to all services"),
    serviceIdsAny: zod_1.default.array(zod_1.default.string()).default([]).describe("Apply if any of these service IDs match"),
    serviceIdsAll: zod_1.default.array(zod_1.default.string()).default([]).describe("Apply only if all these service IDs are present"),
}).superRefine((data, ctx) => {
    const hasServiceSelectors = data.serviceIdsAny.length > 0 || data.serviceIdsAll.length > 0;
    if (data.allServices && hasServiceSelectors) {
        ctx.addIssue({
            code: "custom",
            path: ["allServices"],
            message: "allServices cannot be combined with serviceIdsAny/serviceIdsAll",
        });
    }
});
// ============================================================================
// SERVICE PRICING RULE SCHEMA
// ============================================================================
/**
 * Service Pricing Rule schema.
 * Defines a pricing rule for service-based pricing adjustments.
 *
 * @typedef {Object} ServicePricingRule
 * @property {string} [locationId] - Location scope (null for all locations)
 * @property {string} name - Rule display name
 * @property {string} applyLevel - Apply at ORDER or LINE level
 * @property {boolean} isStackable - Whether rule can stack with others
 * @property {number} priority - Rule priority (higher = applied first)
 * @property {Array} [channelMappings] - Per-channel external rule ID mappings
 * @property {Object} condition - Rule matching conditions
 * @property {Object} action - Pricing adjustment action
 * @property {number} [effectiveFrom] - Start timestamp for rule
 * @property {number} [effectiveTo] - End timestamp for rule
 * @property {boolean} isActive - Whether rule is active
 */
exports.ServicePricingRuleSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.default.string().nullable().optional().describe("Location ID scope. Null for all locations."),
    name: zod_1.default.string().min(1).max(120).describe("Rule display name"),
    applyLevel: zod_1.default.enum(pricing_rule_shared_schema_1.PricingRuleApplyLevel).default(pricing_rule_shared_schema_1.PricingRuleApplyLevel.ORDER).describe("Apply at ORDER or LINE level"),
    isStackable: zod_1.default.boolean().default(true).describe("Whether this rule can stack with other rules"),
    priority: zod_1.default.number().int().nonnegative().default(0).describe("Rule priority (higher = applied first)"),
    channelMappings: zod_1.default.array(pricing_rule_shared_schema_1.PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel external pricing rule ID mappings"),
    condition: exports.ServicePricingRuleConditionSchema.default({
        allServices: false,
        serviceIdsAny: [],
        serviceIdsAll: [],
        daysOfWeek: [],
        channel: pricing_rule_shared_schema_1.PricingChannel.ALL,
    }).describe("Rule matching conditions"),
    action: pricing_rule_shared_schema_1.PricingRuleActionSchema.describe("Pricing adjustment action"),
    effectiveFrom: zod_1.default.number().int().nonnegative().optional().describe("Unix timestamp when rule becomes active"),
    effectiveTo: zod_1.default.number().int().nonnegative().optional().describe("Unix timestamp when rule expires"),
    isActive: zod_1.default.boolean().default(true).describe("Whether this rule is currently active"),
}).superRefine((data, ctx) => {
    if (data.action.adjustmentType === pricing_rule_shared_schema_1.PricingRuleAdjustmentType.PERCENTAGE && data.action.adjustmentValue > 100) {
        ctx.addIssue({
            code: "custom",
            path: ["action", "adjustmentValue"],
            message: "adjustmentValue cannot exceed 100 for percentage adjustments",
        });
    }
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
 * Schema for creating a new service pricing rule.
 * Omits auto-generated fields, includes optional placement for ordering.
 */
exports.CreateServicePricingRuleSchema = exports.ServicePricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});
/**
 * Schema for updating an existing service pricing rule.
 * All fields optional except id (required).
 */
exports.UpdateServicePricingRuleSchema = exports.CreateServicePricingRuleSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServicePricingRule to update"),
});
