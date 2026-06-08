import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../type-definitions/display-order";
import { TaxCatalogScope, TaxRateType, TaxScope } from "../type-definitions";

/**
 * @fileoverview Tax rule schema definitions for order pricing.
 * @module business-mgt/tax-rule
 */

// ============================================================================
// TAX RULE SCHEMA
// ============================================================================

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
export const TaxRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    name: z.string().min(1).max(100),
    scope: z.enum(TaxScope).default(TaxScope.ORDER),
    rateType: z.enum(TaxRateType).default(TaxRateType.PERCENTAGE),
    rateValue: z.number().nonnegative(),
    currency: z.string().length(3).default("USD"),
    catalogScope: z.enum(TaxCatalogScope).default(TaxCatalogScope.ALL),
    externalTaxId: z.string().optional(),
    isInclusive: z.boolean().default(false),
    priority: z.number().int().nonnegative().default(0),
    isCompound: z.boolean().default(false),
    effectiveFrom: z.number().int().nonnegative().optional(),
    effectiveTo: z.number().int().nonnegative().optional(),
    isActive: z.boolean().default(true),
}).superRefine((data, ctx) => {
    if (data.rateType === TaxRateType.PERCENTAGE && data.rateValue > 100) {
        ctx.addIssue({
            code: "custom",
            path: ["rateValue"],
            message: "rateValue cannot exceed 100 for percentage taxes",
        });
    }
    if (
        data.effectiveFrom !== undefined &&
        data.effectiveTo !== undefined &&
        data.effectiveTo < data.effectiveFrom
    ) {
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
 * Schema for creating a new tax rule.
 * Omits auto-generated fields.
 */
export const CreateTaxRuleSchema = TaxRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

/**
 * Schema for updating an existing tax rule.
 * All fields optional except id.
 */
export const UpdateTaxRuleSchema = CreateTaxRuleSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the tax rule to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type TaxRule = z.infer<typeof TaxRuleSchema>;
export type CreateTaxRule = z.infer<typeof CreateTaxRuleSchema>;
export type UpdateTaxRule = z.infer<typeof UpdateTaxRuleSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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

