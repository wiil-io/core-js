import z from "zod";
import { DiscountScope, DiscountType, PricingRuleAdjustmentType, PricingRuleApplyLevel, TaxRateType, TaxScope } from "../type-definitions";
/**
 * @fileoverview Shared order schema definitions used across menu and product orders.
 * @module business-mgt/order
 */
/**
 * Order address schema.
 * Extends base address with delivery-specific instructions.
 *
 * @typedef {Object} OrderAddress
 * @property {string} [deliveryInstructions] - Special delivery instructions for couriers
 */
export declare const OrderAddress: z.ZodOptional<z.ZodObject<{
    street: z.ZodString;
    street2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
    deliveryInstructions: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
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
export declare const OrderCustomerSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
        deliveryInstructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const AppliedDiscountSchema: z.ZodObject<{
    discountRuleId: z.ZodOptional<z.ZodString>;
    externalDiscountId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    scope: z.ZodDefault<z.ZodEnum<typeof DiscountScope>>;
    type: z.ZodEnum<typeof DiscountType>;
    value: z.ZodNumber;
    discountableAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    isStacked: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AppliedDiscount = z.infer<typeof AppliedDiscountSchema>;
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
export declare const AppliedPricingRuleSchema: z.ZodObject<{
    pricingRuleId: z.ZodOptional<z.ZodString>;
    externalPricingRuleId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    applyLevel: z.ZodDefault<z.ZodEnum<typeof PricingRuleApplyLevel>>;
    adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
    adjustmentValue: z.ZodNumber;
    baseAmount: z.ZodNumber;
    adjustedAmount: z.ZodNumber;
    deltaAmount: z.ZodNumber;
    appliedAt: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AppliedPricingRule = z.infer<typeof AppliedPricingRuleSchema>;
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
export declare const AppliedTaxSchema: z.ZodObject<{
    taxRuleId: z.ZodOptional<z.ZodString>;
    externalTaxId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    scope: z.ZodDefault<z.ZodEnum<typeof TaxScope>>;
    rateType: z.ZodEnum<typeof TaxRateType>;
    rateValue: z.ZodNumber;
    taxableAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    isInclusive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AppliedTax = z.infer<typeof AppliedTaxSchema>;
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
export declare const OrderPricingSchema: z.ZodObject<{
    subtotalBeforeTax: z.ZodOptional<z.ZodNumber>;
    subtotal: z.ZodNumber;
    appliedPricingRules: z.ZodDefault<z.ZodArray<z.ZodObject<{
        pricingRuleId: z.ZodOptional<z.ZodString>;
        externalPricingRuleId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        applyLevel: z.ZodDefault<z.ZodEnum<typeof PricingRuleApplyLevel>>;
        adjustmentType: z.ZodEnum<typeof PricingRuleAdjustmentType>;
        adjustmentValue: z.ZodNumber;
        baseAmount: z.ZodNumber;
        adjustedAmount: z.ZodNumber;
        deltaAmount: z.ZodNumber;
        appliedAt: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    totalPricingAdjustmentAmount: z.ZodDefault<z.ZodNumber>;
    subtotalAfterPricingRules: z.ZodOptional<z.ZodNumber>;
    appliedDiscounts: z.ZodDefault<z.ZodArray<z.ZodObject<{
        discountRuleId: z.ZodOptional<z.ZodString>;
        externalDiscountId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        code: z.ZodOptional<z.ZodString>;
        scope: z.ZodDefault<z.ZodEnum<typeof DiscountScope>>;
        type: z.ZodEnum<typeof DiscountType>;
        value: z.ZodNumber;
        discountableAmount: z.ZodNumber;
        discountAmount: z.ZodNumber;
        isStacked: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    totalDiscountAmount: z.ZodDefault<z.ZodNumber>;
    subtotalAfterDiscount: z.ZodOptional<z.ZodNumber>;
    appliedTaxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        taxRuleId: z.ZodOptional<z.ZodString>;
        externalTaxId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        scope: z.ZodDefault<z.ZodEnum<typeof TaxScope>>;
        rateType: z.ZodEnum<typeof TaxRateType>;
        rateValue: z.ZodNumber;
        taxableAmount: z.ZodNumber;
        taxAmount: z.ZodNumber;
        isInclusive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
    totalTaxAmount: z.ZodDefault<z.ZodNumber>;
    tax: z.ZodDefault<z.ZodNumber>;
    tip: z.ZodDefault<z.ZodNumber>;
    shippingAmount: z.ZodDefault<z.ZodNumber>;
    discount: z.ZodDefault<z.ZodNumber>;
    subtotalAfterTax: z.ZodOptional<z.ZodNumber>;
    total: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type OrderCustomer = z.infer<typeof OrderCustomerSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderAddress = z.infer<typeof OrderAddress>;
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
export declare const MenuItemDaypartSchema: z.ZodObject<{
    name: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
/**
 * Default menu item dayparts.
 * Standard time windows for meal periods.
 */
export declare const DEFAULT_MENU_ITEM_DAYPARTS: z.infer<typeof MenuItemDaypartSchema>[];
export type MenuItemDaypart = z.infer<typeof MenuItemDaypartSchema>;
