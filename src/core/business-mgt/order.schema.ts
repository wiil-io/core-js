import z from "zod";
import { AddressSchema } from "../base.schema";
import {
    DiscountScope,
    DiscountType,
    PricingRuleAdjustmentType,
    PricingRuleApplyLevel,
    TaxRateType,
    TaxScope
} from "../type-definitions";

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
export const OrderAddress = AddressSchema.safeExtend({
    deliveryInstructions: z.string().optional().describe("Special delivery instructions (gate code, building entrance, drop-off location) for couriers and delivery personnel.")
}).optional()

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
export const OrderCustomerSchema = z.object({
    customerId: z.string().optional().describe("References Customer ID if customer is registered in the system. Used to link order history, preferences, and loyalty data."),
    name: z.string().min(1, "Customer name is required").describe("Customer's full name for order identification, receipts, and communication. Required for all orders."),
    phone: z.string().optional().describe("Customer's contact phone for order updates, delivery coordination, and support. Used by AI Powered Services for SMS notifications."),
    email: z.email().optional().describe("Customer's email for digital receipts, order confirmations, and AI-generated order summaries."),
    address: OrderAddress.describe("Customer address for delivery (menu/product orders) or billing purposes. Extended with delivery-specific instructions.")
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
export const AppliedDiscountSchema = z.object({
    discountRuleId: z.string().optional(),
    externalDiscountId: z.string().optional(),
    name: z.string().min(1),
    code: z.string().optional(),
    scope: z.enum(DiscountScope).default(DiscountScope.ORDER),
    type: z.enum(DiscountType),
    value: z.number().nonnegative(),
    discountableAmount: z.number().nonnegative(),
    discountAmount: z.number().nonnegative(),
    isStacked: z.boolean().default(false),
});

export type AppliedDiscount = z.infer<typeof AppliedDiscountSchema>;

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
export const AppliedPricingRuleSchema = z.object({
    pricingRuleId: z.string().optional(),
    externalPricingRuleId: z.string().optional(),
    name: z.string().min(1),
    applyLevel: z.enum(PricingRuleApplyLevel).default(PricingRuleApplyLevel.ORDER),
    adjustmentType: z.enum(PricingRuleAdjustmentType),
    adjustmentValue: z.number().nonnegative(),
    baseAmount: z.number().nonnegative(),
    adjustedAmount: z.number().nonnegative(),
    deltaAmount: z.number(),
    appliedAt: z.number().int().nonnegative().optional(),
});

export type AppliedPricingRule = z.infer<typeof AppliedPricingRuleSchema>;

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
export const AppliedTaxSchema = z.object({
    taxRuleId: z.string().optional(),
    externalTaxId: z.string().optional(),
    name: z.string().min(1),
    scope: z.enum(TaxScope).default(TaxScope.ORDER),
    rateType: z.enum(TaxRateType),
    rateValue: z.number().nonnegative(),
    taxableAmount: z.number().nonnegative(),
    taxAmount: z.number().nonnegative(),
    isInclusive: z.boolean().default(false),
});

export type AppliedTax = z.infer<typeof AppliedTaxSchema>;

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
export const OrderPricingSchema = z.object({
    subtotalBeforeTax: z.number().nonnegative().optional().describe("Subtotal before tax"),
    subtotal: z.number().nonnegative().describe("Subtotal before tax and fees"),
    appliedPricingRules: z.array(AppliedPricingRuleSchema).default([]).describe("Detailed applied pricing rule breakdown"),
    totalPricingAdjustmentAmount: z.number().default(0).describe("Net adjustment amount from appliedPricingRules"),
    subtotalAfterPricingRules: z.number().nonnegative().optional().describe("Subtotal after pricing rules and before discounts"),
    appliedDiscounts: z.array(AppliedDiscountSchema).default([]).describe("Detailed applied discount breakdown"),
    totalDiscountAmount: z.number().nonnegative().default(0).describe("Total discount amount from appliedDiscounts"),
    subtotalAfterDiscount: z.number().nonnegative().optional().describe("Subtotal after discounts and before tax"),
    appliedTaxes: z.array(AppliedTaxSchema).default([]).describe("Detailed applied tax breakdown"),
    totalTaxAmount: z.number().nonnegative().default(0).describe("Total tax amount from appliedTaxes"),
    tax: z.number().nonnegative().default(0).describe("Tax amount"),
    tip: z.number().nonnegative().default(0).describe("Tip/gratuity amount"),
    shippingAmount: z.number().nonnegative().default(0).describe("Shipping amount if applicable"),
    discount: z.number().nonnegative().default(0).describe("Discount amount applied"),
    subtotalAfterTax: z.number().nonnegative().optional().describe("Subtotal after tax and before tips/shipping"),
    total: z.number().nonnegative().describe("Final total amount"),
    currency: z.string().length(3).default("USD").describe("Currency code (ISO 4217 format)")
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type OrderCustomer = z.infer<typeof OrderCustomerSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderAddress = z.infer<typeof OrderAddress>;

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
export const MenuItemDaypartSchema = z.object({
    name: z.string().min(1).describe("Daypart name (e.g., Breakfast, Lunch)"),
    startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").describe("Daypart start time in HH:MM format"),
    endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").describe("Daypart end time in HH:MM format"),
    daysOfWeek: z.array(z.string().regex(/^[0-6]$/, "Day must be 0-6")).optional().describe("Optional active days where 0 = Sunday and 6 = Saturday"),
});

// ============================================================================
// DEFAULT DAYPARTS
// ============================================================================

/**
 * Default menu item dayparts.
 * Standard time windows for meal periods.
 */
export const DEFAULT_MENU_ITEM_DAYPARTS: z.infer<typeof MenuItemDaypartSchema>[] = [
    { name: "Breakfast", startTime: "06:00", endTime: "11:00" },
    { name: "Lunch", startTime: "11:00", endTime: "16:00" },
    { name: "Dinner", startTime: "16:00", endTime: "22:00" },
    { name: "Happy hour", startTime: "15:00", endTime: "18:00" },
];

export type MenuItemDaypart = z.infer<typeof MenuItemDaypartSchema>;
