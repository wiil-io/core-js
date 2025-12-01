import z from "zod";
import { AddressSchema } from "../base.schema";

/**
 * @fileoverview Shared order schema definitions used across menu and product orders.
 * @module business-mgt/order
 */

/**
 * Order address schema extending base address with delivery instructions.
 */
export const OrderAddress = AddressSchema.safeExtend({
    deliveryInstructions: z.string().optional().describe("Special delivery instructions (gate code, building entrance, drop-off location) for couriers and delivery personnel.")
}).optional()

/**
 * Shared customer schema for orders.
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

/**
 * Shared pricing schema for orders.
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
    subtotal: z.number().nonnegative().describe("Sum of all item prices before tax, fees, or discounts. Base amount for pricing calculations."),
    tax: z.number().nonnegative().default(0).describe("Calculated tax amount based on applicable tax rates and jurisdictions. Defaults to 0."),
    tip: z.number().nonnegative().default(0).describe("Gratuity amount for service staff (common in food service). Defaults to 0."),
    shippingAmount: z.number().nonnegative().default(0).describe("Shipping or delivery fee for product/menu orders. Defaults to 0 for pickup or dine-in."),
    discount: z.number().nonnegative().default(0).describe("Total discount applied from promotions, coupons, or loyalty programs. Defaults to 0."),
    total: z.number().nonnegative().describe("Final amount due: subtotal + tax + tip + shipping - discount. Amount charged to customer."),
    currency: z.string().length(3).default("USD").describe("ISO 4217 currency code (e.g., 'USD', 'EUR', 'GBP') for international operations. Defaults to USD.")
});

export type OrderCustomer = z.infer<typeof OrderCustomerSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderAddress = z.infer<typeof OrderAddress>;
