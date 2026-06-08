import { z } from "zod";
import { PricingChannel, PricingRuleAdjustmentType, PricingRuleApplyLevel } from "../type-definitions";
/**
 * @fileoverview Shared pricing rule schema definitions used across menu and product pricing.
 * @module business-mgt/pricing-rule-shared
 */
export { PricingChannel, PricingRuleAdjustmentType, PricingRuleApplyLevel };
/**
 * Pricing rule channel mapping schema.
 * Maps pricing rules to external platform pricing rule IDs.
 *
 * @typedef {Object} PricingRuleChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalPricingRuleId - External pricing rule ID
 */
export declare const PricingRuleChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalPricingRuleId: z.ZodString;
}, z.core.$strip>;
export type PricingRuleChannelMapping = z.infer<typeof PricingRuleChannelMappingSchema>;
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
export declare const PricingRuleCommonConditionSchema: z.ZodObject<{
    daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    startMinute: z.ZodOptional<z.ZodNumber>;
    endMinute: z.ZodOptional<z.ZodNumber>;
    customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
}, z.core.$strip>;
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
export declare const PricingRuleActionSchema: z.ZodObject<{
    adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
    adjustmentValue: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    maxAdjustmentAmount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type PricingRuleCommonCondition = z.infer<typeof PricingRuleCommonConditionSchema>;
export type PricingRuleAction = z.infer<typeof PricingRuleActionSchema>;
