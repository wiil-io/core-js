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
    deliveryInstructions: z.string().optional()
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
    customerId: z.string().optional(),
    name: z.string().min(1, "Customer name is required"),
    phone: z.string().optional(),
    email: z.email().optional(),
    address: OrderAddress
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
    subtotal: z.number().nonnegative(),
    tax: z.number().nonnegative().default(0),
    tip: z.number().nonnegative().default(0),
    shippingAmount: z.number().nonnegative().default(0),
    discount: z.number().nonnegative().default(0),
    total: z.number().nonnegative(),
    currency: z.string().length(3).default("USD")
});

export type OrderCustomer = z.infer<typeof OrderCustomerSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderAddress = z.infer<typeof OrderAddress>;
