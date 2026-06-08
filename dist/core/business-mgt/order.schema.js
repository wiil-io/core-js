"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MENU_ITEM_DAYPARTS = exports.MenuItemDaypartSchema = exports.OrderPricingSchema = exports.AppliedTaxSchema = exports.AppliedPricingRuleSchema = exports.AppliedDiscountSchema = exports.OrderCustomerSchema = exports.OrderAddress = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Shared order schema definitions used across menu and product orders.
 * @module business-mgt/order
 */
// ============================================================================
// ADDRESS SCHEMA
// ============================================================================
/**
 * Order address schema.
 * Extends base address with delivery-specific instructions.
 *
 * @typedef {Object} OrderAddress
 * @property {string} [deliveryInstructions] - Special delivery instructions for couriers
 */
exports.OrderAddress = base_schema_1.AddressSchema.safeExtend({
    deliveryInstructions: zod_1.default.string().optional().describe("Special delivery instructions (gate code, building entrance, drop-off location) for couriers and delivery personnel.")
}).optional();
// ============================================================================
// ORDER CUSTOMER SCHEMA
// ============================================================================
/**
 * Order customer schema.
 * Captures customer information for order identification and communication.
 *
 * @typedef {Object} OrderCustomer
 * @property {string} [customerId] - Customer ID if registered
 * @property {string} name - Customer's full name
 * @property {string} [phone] - Customer's phone number
 * @property {string} [email] - Customer's email address
 * @property {Object} [address] - Customer address for delivery/billing
 */
exports.OrderCustomerSchema = zod_1.default.object({
    customerId: zod_1.default.string().optional().describe("References Customer ID if customer is registered in the system. Used to link order history, preferences, and loyalty data."),
    name: zod_1.default.string().min(1, "Customer name is required").describe("Customer's full name for order identification, receipts, and communication. Required for all orders."),
    phone: zod_1.default.string().optional().describe("Customer's contact phone for order updates, delivery coordination, and support. Used by AI Powered Services for SMS notifications."),
    email: zod_1.default.email().optional().describe("Customer's email for digital receipts, order confirmations, and AI-generated order summaries."),
    address: exports.OrderAddress.describe("Customer address for delivery (menu/product orders) or billing purposes. Extended with delivery-specific instructions.")
});
// ============================================================================
// APPLIED DISCOUNT SCHEMA
// ============================================================================
/**
 * Applied discount schema.
 * Captures a discount applied to an order with calculated amounts.
 *
 * @typedef {Object} AppliedDiscount
 * @property {string} [discountRuleId] - Internal discount rule ID
 * @property {string} [externalDiscountId] - External system discount ID
 * @property {string} name - Discount display name
 * @property {string} [code] - Discount code if applicable
 * @property {DiscountScope} scope - Discount scope (order, item, category)
 * @property {DiscountType} type - Discount type (percentage, fixed)
 * @property {number} value - Discount value
 * @property {number} discountableAmount - Amount eligible for discount
 * @property {number} discountAmount - Calculated discount amount
 * @property {boolean} isStacked - Whether this discount was stacked
 */
exports.AppliedDiscountSchema = zod_1.default.object({
    discountRuleId: zod_1.default.string().optional(),
    externalDiscountId: zod_1.default.string().optional(),
    name: zod_1.default.string().min(1),
    code: zod_1.default.string().optional(),
    scope: zod_1.default.enum(type_definitions_1.DiscountScope).default(type_definitions_1.DiscountScope.ORDER),
    type: zod_1.default.enum(type_definitions_1.DiscountType),
    value: zod_1.default.number().nonnegative(),
    discountableAmount: zod_1.default.number().nonnegative(),
    discountAmount: zod_1.default.number().nonnegative(),
    isStacked: zod_1.default.boolean().default(false),
});
// ============================================================================
// APPLIED PRICING RULE SCHEMA
// ============================================================================
/**
 * Applied pricing rule schema.
 * Captures a pricing rule applied to an order with calculated adjustments.
 *
 * @typedef {Object} AppliedPricingRule
 * @property {string} [pricingRuleId] - Internal pricing rule ID
 * @property {string} [externalPricingRuleId] - External system pricing rule ID
 * @property {string} name - Pricing rule display name
 * @property {PricingRuleApplyLevel} applyLevel - Level at which rule was applied
 * @property {PricingRuleAdjustmentType} adjustmentType - Type of price adjustment
 * @property {number} adjustmentValue - Adjustment value
 * @property {number} baseAmount - Original amount before adjustment
 * @property {number} adjustedAmount - Amount after adjustment
 * @property {number} deltaAmount - Difference (can be negative)
 * @property {number} [appliedAt] - Timestamp when rule was applied
 */
exports.AppliedPricingRuleSchema = zod_1.default.object({
    pricingRuleId: zod_1.default.string().optional(),
    externalPricingRuleId: zod_1.default.string().optional(),
    name: zod_1.default.string().min(1),
    applyLevel: zod_1.default.enum(type_definitions_1.PricingRuleApplyLevel).default(type_definitions_1.PricingRuleApplyLevel.ORDER),
    adjustmentType: zod_1.default.enum(type_definitions_1.PricingRuleAdjustmentType),
    adjustmentValue: zod_1.default.number().nonnegative(),
    baseAmount: zod_1.default.number().nonnegative(),
    adjustedAmount: zod_1.default.number().nonnegative(),
    deltaAmount: zod_1.default.number(),
    appliedAt: zod_1.default.number().int().nonnegative().optional(),
});
// ============================================================================
// APPLIED TAX SCHEMA
// ============================================================================
/**
 * Applied tax schema.
 * Captures a tax applied to an order with calculated amounts.
 *
 * @typedef {Object} AppliedTax
 * @property {string} [taxRuleId] - Internal tax rule ID
 * @property {string} [externalTaxId] - External system tax ID
 * @property {string} name - Tax display name
 * @property {TaxScope} scope - Tax scope (order, item, category)
 * @property {TaxRateType} rateType - Tax rate type (percentage, fixed)
 * @property {number} rateValue - Tax rate value
 * @property {number} taxableAmount - Amount subject to tax
 * @property {number} taxAmount - Calculated tax amount
 * @property {boolean} isInclusive - Whether tax is included in prices
 */
exports.AppliedTaxSchema = zod_1.default.object({
    taxRuleId: zod_1.default.string().optional(),
    externalTaxId: zod_1.default.string().optional(),
    name: zod_1.default.string().min(1),
    scope: zod_1.default.enum(type_definitions_1.TaxScope).default(type_definitions_1.TaxScope.ORDER),
    rateType: zod_1.default.enum(type_definitions_1.TaxRateType),
    rateValue: zod_1.default.number().nonnegative(),
    taxableAmount: zod_1.default.number().nonnegative(),
    taxAmount: zod_1.default.number().nonnegative(),
    isInclusive: zod_1.default.boolean().default(false),
});
// ============================================================================
// ORDER PRICING SCHEMA
// ============================================================================
/**
 * Order pricing schema.
 * Comprehensive pricing breakdown including subtotals, discounts, taxes, and fees.
 *
 * @typedef {Object} OrderPricing
 * @property {number} subtotal - Subtotal before tax and fees
 * @property {number} tax - Tax amount
 * @property {number} tip - Tip/gratuity amount
 * @property {number} shippingAmount - Shipping amount if applicable
 * @property {number} discount - Discount amount applied
 * @property {number} total - Final total amount
 * @property {string} currency - Currency code (ISO 4217 format)
 */
exports.OrderPricingSchema = zod_1.default.object({
    subtotalBeforeTax: zod_1.default.number().nonnegative().optional().describe("Subtotal before tax"),
    subtotal: zod_1.default.number().nonnegative().describe("Subtotal before tax and fees"),
    appliedPricingRules: zod_1.default.array(exports.AppliedPricingRuleSchema).default([]).describe("Detailed applied pricing rule breakdown"),
    totalPricingAdjustmentAmount: zod_1.default.number().default(0).describe("Net adjustment amount from appliedPricingRules"),
    subtotalAfterPricingRules: zod_1.default.number().nonnegative().optional().describe("Subtotal after pricing rules and before discounts"),
    appliedDiscounts: zod_1.default.array(exports.AppliedDiscountSchema).default([]).describe("Detailed applied discount breakdown"),
    totalDiscountAmount: zod_1.default.number().nonnegative().default(0).describe("Total discount amount from appliedDiscounts"),
    subtotalAfterDiscount: zod_1.default.number().nonnegative().optional().describe("Subtotal after discounts and before tax"),
    appliedTaxes: zod_1.default.array(exports.AppliedTaxSchema).default([]).describe("Detailed applied tax breakdown"),
    totalTaxAmount: zod_1.default.number().nonnegative().default(0).describe("Total tax amount from appliedTaxes"),
    tax: zod_1.default.number().nonnegative().default(0).describe("Tax amount"),
    tip: zod_1.default.number().nonnegative().default(0).describe("Tip/gratuity amount"),
    shippingAmount: zod_1.default.number().nonnegative().default(0).describe("Shipping amount if applicable"),
    discount: zod_1.default.number().nonnegative().default(0).describe("Discount amount applied"),
    subtotalAfterTax: zod_1.default.number().nonnegative().optional().describe("Subtotal after tax and before tips/shipping"),
    total: zod_1.default.number().nonnegative().describe("Final total amount"),
    currency: zod_1.default.string().length(3).default("USD").describe("Currency code (ISO 4217 format)")
});
// ============================================================================
// MENU ITEM DAYPART SCHEMA
// ============================================================================
/**
 * Menu item daypart schema.
 * Defines time-based availability windows for menu items.
 *
 * @typedef {Object} MenuItemDaypart
 * @property {string} name - Daypart name (e.g., Breakfast, Lunch)
 * @property {string} startTime - Daypart start time in HH:MM format
 * @property {string} endTime - Daypart end time in HH:MM format
 * @property {string[]} [daysOfWeek] - Optional active days (0-6, Sunday=0)
 */
exports.MenuItemDaypartSchema = zod_1.default.object({
    name: zod_1.default.string().min(1).describe("Daypart name (e.g., Breakfast, Lunch)"),
    startTime: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").describe("Daypart start time in HH:MM format"),
    endTime: zod_1.default.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").describe("Daypart end time in HH:MM format"),
    daysOfWeek: zod_1.default.array(zod_1.default.string().regex(/^[0-6]$/, "Day must be 0-6")).optional().describe("Optional active days where 0 = Sunday and 6 = Saturday"),
});
// ============================================================================
// DEFAULT DAYPARTS
// ============================================================================
/**
 * Default menu item dayparts.
 * Standard time windows for meal periods.
 */
exports.DEFAULT_MENU_ITEM_DAYPARTS = [
    { name: "Breakfast", startTime: "06:00", endTime: "11:00" },
    { name: "Lunch", startTime: "11:00", endTime: "16:00" },
    { name: "Dinner", startTime: "16:00", endTime: "22:00" },
    { name: "Happy hour", startTime: "15:00", endTime: "18:00" },
];
