import { z } from "zod";
import { TaxCatalogScope, TaxRateType, TaxScope } from "../type-definitions";
/**
 * @fileoverview Tax rule schema definitions for order pricing.
 * @module business-mgt/tax-rule
 */
/**
 * Tax rule schema.
 * Defines tax configurations for orders including percentage and fixed amount taxes.
 *
 * @typedef {Object} TaxRule
 * @property {string} [locationId] - Business location where this tax applies
 * @property {string} name - Tax display name
 * @property {TaxScope} scope - Tax scope (order, item, category)
 * @property {TaxRateType} rateType - Tax rate type (percentage, fixed)
 * @property {number} rateValue - Tax rate value
 * @property {string} currency - Currency code for fixed taxes
 * @property {TaxCatalogScope} catalogScope - Catalog scope for item-level taxes
 * @property {string} [externalTaxId] - External system tax ID
 * @property {boolean} isInclusive - Whether tax is included in prices
 * @property {number} priority - Priority for tax application order
 * @property {boolean} isCompound - Whether tax compounds on other taxes
 * @property {number} [effectiveFrom] - Start timestamp for tax validity
 * @property {number} [effectiveTo] - End timestamp for tax validity
 * @property {boolean} isActive - Whether tax is currently active
 */
export declare const TaxRuleSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    scope: z.ZodDefault<z.ZodEnum<typeof TaxScope>>;
    rateType: z.ZodDefault<z.ZodEnum<typeof TaxRateType>>;
    rateValue: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    catalogScope: z.ZodDefault<z.ZodEnum<typeof TaxCatalogScope>>;
    externalTaxId: z.ZodOptional<z.ZodString>;
    isInclusive: z.ZodDefault<z.ZodBoolean>;
    priority: z.ZodDefault<z.ZodNumber>;
    isCompound: z.ZodDefault<z.ZodBoolean>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new tax rule.
 * Omits auto-generated fields.
 */
export declare const CreateTaxRuleSchema: z.ZodObject<{
    name: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    currency: z.ZodDefault<z.ZodString>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodDefault<z.ZodEnum<typeof TaxScope>>;
    catalogScope: z.ZodDefault<z.ZodEnum<typeof TaxCatalogScope>>;
    priority: z.ZodDefault<z.ZodNumber>;
    effectiveFrom: z.ZodOptional<z.ZodNumber>;
    effectiveTo: z.ZodOptional<z.ZodNumber>;
    externalTaxId: z.ZodOptional<z.ZodString>;
    rateType: z.ZodDefault<z.ZodEnum<typeof TaxRateType>>;
    rateValue: z.ZodNumber;
    isInclusive: z.ZodDefault<z.ZodBoolean>;
    isCompound: z.ZodDefault<z.ZodBoolean>;
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
 * Schema for updating an existing tax rule.
 * All fields optional except id.
 */
export declare const UpdateTaxRuleSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    scope: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TaxScope>>>;
    catalogScope: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TaxCatalogScope>>>;
    priority: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    effectiveFrom: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    effectiveTo: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    externalTaxId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    rateType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof TaxRateType>>>;
    rateValue: z.ZodOptional<z.ZodNumber>;
    isInclusive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    isCompound: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
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
export type TaxRule = z.infer<typeof TaxRuleSchema>;
export type CreateTaxRule = z.infer<typeof CreateTaxRuleSchema>;
export type UpdateTaxRule = z.infer<typeof UpdateTaxRuleSchema>;
/**
 * Tax rule filter options.
 * @interface TaxRuleFilters
 */
export interface TaxRuleFilters {
    /** Text search across tax name */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by tax scope */
    scope?: TaxScope;
    /** Filter by tax rate type */
    rateType?: TaxRateType;
    /** Filter by catalog scope */
    catalogScope?: TaxCatalogScope;
    /** Filter by inclusive status */
    isInclusive?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}
/**
 * Tax rule sorting options.
 * @interface TaxRuleSorting
 */
export interface TaxRuleSorting {
    /** Field to sort by */
    field: "name" | "priority" | "rateValue" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Tax rule query options.
 * @interface TaxRuleQueryOptions
 */
export interface TaxRuleQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: TaxRuleFilters;
    /** Optional sorting */
    sorting?: TaxRuleSorting;
}
