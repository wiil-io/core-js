import z from "zod";
import { PricingChannel, PricingRuleAdjustmentType, PricingRuleApplyLevel } from "../pricing-rule.shared.schema";
/**
 * @fileoverview Service Pricing Rule schema definitions.
 * @module business-mgt/service-pricing-rule
 *
 * Service pricing rules define conditional pricing adjustments for services.
 * Supports time-based promotions, channel-specific pricing, and service targeting.
 */
/**
 * Service pricing rule condition schema.
 * Extends common pricing conditions with service-specific targeting.
 *
 * @typedef {Object} ServicePricingRuleCondition
 * @property {boolean} allServices - Apply to all services
 * @property {string[]} serviceIdsAny - Apply if any of these services match
 * @property {string[]} serviceIdsAll - Apply only if all these services are present
 */
export declare const ServicePricingRuleConditionSchema: z.ZodObject<{
    daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    startMinute: z.ZodOptional<z.ZodNumber>;
    endMinute: z.ZodOptional<z.ZodNumber>;
    customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
    allServices: z.ZodDefault<z.ZodBoolean>;
    serviceIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
    serviceIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
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
export declare const ServicePricingRuleSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    applyLevel: z.ZodDefault<z.ZodEnum<typeof PricingRuleApplyLevel>>;
    isStackable: z.ZodDefault<z.ZodBoolean>;
    priority: z.ZodDefault<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    condition: z.ZodDefault<z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        allServices: z.ZodDefault<z.ZodBoolean>;
        serviceIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serviceIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    action: z.ZodObject<{
        adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
        adjustmentValue: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
        maxAdjustmentAmount: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new service pricing rule.
 * Omits auto-generated fields, includes optional placement for ordering.
 */
export declare const CreateServicePricingRuleSchema: z.ZodObject<{
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isStackable: z.ZodDefault<z.ZodBoolean>;
    priority: z.ZodDefault<z.ZodNumber>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    applyLevel: z.ZodDefault<z.ZodEnum<typeof PricingRuleApplyLevel>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>;
    condition: z.ZodDefault<z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        allServices: z.ZodDefault<z.ZodBoolean>;
        serviceIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serviceIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    action: z.ZodObject<{
        adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
        adjustmentValue: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
        maxAdjustmentAmount: z.ZodOptional<z.ZodNumber>;
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
 * Schema for updating an existing service pricing rule.
 * All fields optional except id (required).
 */
export declare const UpdateServicePricingRuleSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isStackable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    priority: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    effectiveFrom: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    applyLevel: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PricingRuleApplyLevel>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalPricingRuleId: z.ZodString;
    }, z.core.$strip>>>>>;
    condition: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        startMinute: z.ZodOptional<z.ZodNumber>;
        endMinute: z.ZodOptional<z.ZodNumber>;
        customerSegmentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channel: z.ZodDefault<z.ZodEnum<typeof PricingChannel>>;
        allServices: z.ZodDefault<z.ZodBoolean>;
        serviceIdsAny: z.ZodDefault<z.ZodArray<z.ZodString>>;
        serviceIdsAll: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    action: z.ZodOptional<z.ZodObject<{
        adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
        adjustmentValue: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
        maxAdjustmentAmount: z.ZodOptional<z.ZodNumber>;
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
export type ServicePricingRuleCondition = z.infer<typeof ServicePricingRuleConditionSchema>;
export type ServicePricingRule = z.infer<typeof ServicePricingRuleSchema>;
export type CreateServicePricingRule = z.infer<typeof CreateServicePricingRuleSchema>;
export type UpdateServicePricingRule = z.infer<typeof UpdateServicePricingRuleSchema>;
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
