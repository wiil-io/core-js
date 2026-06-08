"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxRuleSchema = exports.CreateTaxRuleSchema = exports.TaxRuleSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const display_order_1 = require("../type-definitions/display-order");
const type_definitions_1 = require("../type-definitions");
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
exports.TaxRuleSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional(),
    name: zod_1.z.string().min(1).max(100),
    scope: zod_1.z.enum(type_definitions_1.TaxScope).default(type_definitions_1.TaxScope.ORDER),
    rateType: zod_1.z.enum(type_definitions_1.TaxRateType).default(type_definitions_1.TaxRateType.PERCENTAGE),
    rateValue: zod_1.z.number().nonnegative(),
    currency: zod_1.z.string().length(3).default("USD"),
    catalogScope: zod_1.z.enum(type_definitions_1.TaxCatalogScope).default(type_definitions_1.TaxCatalogScope.ALL),
    externalTaxId: zod_1.z.string().optional(),
    isInclusive: zod_1.z.boolean().default(false),
    priority: zod_1.z.number().int().nonnegative().default(0),
    isCompound: zod_1.z.boolean().default(false),
    effectiveFrom: zod_1.z.number().int().nonnegative().optional(),
    effectiveTo: zod_1.z.number().int().nonnegative().optional(),
    isActive: zod_1.z.boolean().default(true),
}).superRefine((data, ctx) => {
    if (data.rateType === type_definitions_1.TaxRateType.PERCENTAGE && data.rateValue > 100) {
        ctx.addIssue({
            code: "custom",
            path: ["rateValue"],
            message: "rateValue cannot exceed 100 for percentage taxes",
        });
    }
    if (data.effectiveFrom !== undefined &&
        data.effectiveTo !== undefined &&
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
 * Schema for creating a new tax rule.
 * Omits auto-generated fields.
 */
exports.CreateTaxRuleSchema = exports.TaxRuleSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional(),
});
/**
 * Schema for updating an existing tax rule.
 * All fields optional except id.
 */
exports.UpdateTaxRuleSchema = exports.CreateTaxRuleSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the tax rule to update"),
});
