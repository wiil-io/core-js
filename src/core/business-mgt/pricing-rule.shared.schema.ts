import { z } from "zod";
import { PricingChannel, PricingRuleAdjustmentType, PricingRuleApplyLevel } from "../type-definitions";

/**
 * @fileoverview Shared pricing rule schema definitions used across menu and product pricing.
 * @module business-mgt/pricing-rule-shared
 */

// Re-export enums for backwards compatibility
export { PricingChannel, PricingRuleAdjustmentType, PricingRuleApplyLevel };

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
export const PricingRuleChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalPricingRuleId: z.string().describe("External pricing rule ID for this specific channel"),
}).describe("Per-channel external pricing rule ID mapping");

export type PricingRuleChannelMapping = z.infer<typeof PricingRuleChannelMappingSchema>;

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
export const PricingRuleCommonConditionSchema = z.object({
    daysOfWeek: z.array(z.number().int().min(0).max(6)).default([]).describe("Days of week when rule applies (0=Sunday, 6=Saturday)"),
    startMinute: z.number().int().min(0).max(1439).optional().describe("Start minute of day (0-1439)"),
    endMinute: z.number().int().min(0).max(1439).optional().describe("End minute of day (0-1439)"),
    customerSegmentIds: z.array(z.string()).optional().describe("Target customer segment IDs"),
    channel: z.enum(PricingChannel).default(PricingChannel.ALL).describe("Channel scope for the rule"),
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
export const PricingRuleActionSchema = z.object({
    adjustmentType: z.enum(PricingRuleAdjustmentType).describe("Type of price adjustment"),
    adjustmentValue: z.number().nonnegative().describe("Adjustment value (percentage or fixed amount)"),
    currency: z.string().length(3).default("USD").describe("Currency code for fixed adjustments"),
    maxAdjustmentAmount: z.number().nonnegative().optional().describe("Maximum adjustment cap"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PricingRuleCommonCondition = z.infer<typeof PricingRuleCommonConditionSchema>;
export type PricingRuleAction = z.infer<typeof PricingRuleActionSchema>;
