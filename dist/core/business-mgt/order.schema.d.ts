import z from "zod";
/**
 * @fileoverview Shared order schema definitions used across menu and product orders.
 * @module business-mgt/order
 */
/**
 * Order address schema extending base address with delivery instructions.
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
 * Shared customer schema for orders.
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
export declare const OrderPricingSchema: z.ZodObject<{
    subtotal: z.ZodNumber;
    tax: z.ZodDefault<z.ZodNumber>;
    tip: z.ZodDefault<z.ZodNumber>;
    shippingAmount: z.ZodDefault<z.ZodNumber>;
    discount: z.ZodDefault<z.ZodNumber>;
    total: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type OrderCustomer = z.infer<typeof OrderCustomerSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderAddress = z.infer<typeof OrderAddress>;
