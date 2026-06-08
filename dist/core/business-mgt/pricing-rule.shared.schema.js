"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingRuleActionSchema = exports.PricingRuleCommonConditionSchema = exports.PricingRuleChannelMappingSchema = exports.PricingRuleApplyLevel = exports.PricingRuleAdjustmentType = exports.PricingChannel = void 0;
const zod_1 = require("zod");
const type_definitions_1 = require("../type-definitions");
Object.defineProperty(exports, "PricingChannel", { enumerable: true, get: function () { return type_definitions_1.PricingChannel; } });
Object.defineProperty(exports, "PricingRuleAdjustmentType", { enumerable: true, get: function () { return type_definitions_1.PricingRuleAdjustmentType; } });
Object.defineProperty(exports, "PricingRuleApplyLevel", { enumerable: true, get: function () { return type_definitions_1.PricingRuleApplyLevel; } });
// ============================================================================
// CHANNEL MAPPING SCHEMA
// ============================================================================
/**
 * Pricing rule channel mapping schema.
 * Maps pricing rules to external platform pricing rule IDs.
 *
 * @typedef {Object} PricingRuleChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalPricingRuleId - External pricing rule ID
 */
exports.PricingRuleChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalPricingRuleId: zod_1.z.string().describe("External pricing rule ID for this specific channel"),
}).describe("Per-channel external pricing rule ID mapping");
// ============================================================================
// CONDITION AND ACTION SCHEMAS
// ============================================================================
/**
 * Pricing rule common condition schema.
 * Defines when a pricing rule should be applied based on time, day, customer, and channel.
 *
 * @typedef {Object} PricingRuleCommonCondition
 * @property {number[]} daysOfWeek - Days of week (0-6, Sunday=0)
 * @property {number} [startMinute] - Start minute of day (0-1439)
 * @property {number} [endMinute] - End minute of day (0-1439)
 * @property {string[]} [customerSegmentIds] - Target customer segment IDs
 * @property {PricingChannel} channel - Channel scope for the rule
 */
exports.PricingRuleCommonConditionSchema = zod_1.z.object({
    daysOfWeek: zod_1.z.array(zod_1.z.number().int().min(0).max(6)).default([]).describe("Days of week when rule applies (0=Sunday, 6=Saturday)"),
    startMinute: zod_1.z.number().int().min(0).max(1439).optional().describe("Start minute of day (0-1439)"),
    endMinute: zod_1.z.number().int().min(0).max(1439).optional().describe("End minute of day (0-1439)"),
    customerSegmentIds: zod_1.z.array(zod_1.z.string()).optional().describe("Target customer segment IDs"),
    channel: zod_1.z.enum(type_definitions_1.PricingChannel).default(type_definitions_1.PricingChannel.ALL).describe("Channel scope for the rule"),
}).superRefine((data, ctx) => {
    if (data.startMinute !== undefined && data.endMinute !== undefined && data.endMinute < data.startMinute) {
        ctx.addIssue({
            code: "custom",
            path: ["endMinute"],
            message: "endMinute must be greater than or equal to startMinute",
        });
    }
});
/**
 * Pricing rule action schema.
 * Defines the price adjustment to apply when rule conditions are met.
 *
 * @typedef {Object} PricingRuleAction
 * @property {PricingRuleAdjustmentType} adjustmentType - Type of price adjustment
 * @property {number} adjustmentValue - Adjustment value (percentage or fixed amount)
 * @property {string} currency - Currency code for fixed adjustments
 * @property {number} [maxAdjustmentAmount] - Maximum adjustment cap
 */
exports.PricingRuleActionSchema = zod_1.z.object({
    adjustmentType: zod_1.z.enum(type_definitions_1.PricingRuleAdjustmentType).describe("Type of price adjustment"),
    adjustmentValue: zod_1.z.number().nonnegative().describe("Adjustment value (percentage or fixed amount)"),
    currency: zod_1.z.string().length(3).default("USD").describe("Currency code for fixed adjustments"),
    maxAdjustmentAmount: zod_1.z.number().nonnegative().optional().describe("Maximum adjustment cap"),
});
