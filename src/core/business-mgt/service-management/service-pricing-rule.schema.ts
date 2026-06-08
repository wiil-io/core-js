import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../type-definitions/display-order";
import {
    PricingChannel,
    PricingRuleActionSchema,
    PricingRuleAdjustmentType,
    PricingRuleApplyLevel,
    PricingRuleChannelMappingSchema,
    PricingRuleCommonConditionSchema,
} from "../pricing-rule.shared.schema";

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
export const ServicePricingRuleConditionSchema = PricingRuleCommonConditionSchema.safeExtend({
    allServices: z.boolean().default(false).describe("Apply rule to all services"),
    serviceIdsAny: z.array(z.string()).default([]).describe("Apply if any of these service IDs match"),
    serviceIdsAll: z.array(z.string()).default([]).describe("Apply only if all these service IDs are present"),
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
export const ServicePricingRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Location ID scope. Null for all locations."),
    name: z.string().min(1).max(120).describe("Rule display name"),
    applyLevel: z.enum(PricingRuleApplyLevel).default(PricingRuleApplyLevel.ORDER).describe("Apply at ORDER or LINE level"),
    isStackable: z.boolean().default(true).describe("Whether this rule can stack with other rules"),
    priority: z.number().int().nonnegative().default(0).describe("Rule priority (higher = applied first)"),
    channelMappings: z.array(PricingRuleChannelMappingSchema).nullable().optional().describe("Per-channel external pricing rule ID mappings"),
    condition: ServicePricingRuleConditionSchema.default({
        allServices: false,
        serviceIdsAny: [],
        serviceIdsAll: [],
        daysOfWeek: [],
        channel: PricingChannel.ALL,
    }).describe("Rule matching conditions"),
    action: PricingRuleActionSchema.describe("Pricing adjustment action"),
    effectiveFrom: z.number().int().nonnegative().optional().describe("Unix timestamp when rule becomes active"),
    effectiveTo: z.number().int().nonnegative().optional().describe("Unix timestamp when rule expires"),
    isActive: z.boolean().default(true).describe("Whether this rule is currently active"),
}).superRefine((data, ctx) => {
    if (data.action.adjustmentType === PricingRuleAdjustmentType.PERCENTAGE && data.action.adjustmentValue > 100) {
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
export const CreateServicePricingRuleSchema = ServicePricingRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering"),
});

/**
 * Schema for updating an existing service pricing rule.
 * All fields optional except id (required).
 */
export const UpdateServicePricingRuleSchema = CreateServicePricingRuleSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServicePricingRule to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServicePricingRuleCondition = z.infer<typeof ServicePricingRuleConditionSchema>;
export type ServicePricingRule = z.infer<typeof ServicePricingRuleSchema>;
export type CreateServicePricingRule = z.infer<typeof CreateServicePricingRuleSchema>;
export type UpdateServicePricingRule = z.infer<typeof UpdateServicePricingRuleSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Service pricing rule filter options.
 * @interface ServicePricingRuleFilters
 */
export interface ServicePricingRuleFilters {
    /** Text search across name */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by apply level */
    applyLevel?: PricingRuleApplyLevel;
    /** Filter by pricing channel */
    channel?: PricingChannel;
    /** Filter by stackability */
    isStackable?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Service pricing rule sorting options.
 * @interface ServicePricingRuleSorting
 */
export interface ServicePricingRuleSorting {
    /** Field to sort by */
    field: "name" | "priority" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Service pricing rule query options.
 * @interface ServicePricingRuleQueryOptions
 */
export interface ServicePricingRuleQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServicePricingRuleFilters;
    /** Optional sorting */
    sorting?: ServicePricingRuleSorting;
}
