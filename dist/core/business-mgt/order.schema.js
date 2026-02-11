"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPricingSchema = exports.OrderCustomerSchema = exports.OrderAddress = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Shared order schema definitions used across menu and product orders.
 * @module business-mgt/order
 */
/**
 * Order address schema extending base address with delivery instructions.
 */
exports.OrderAddress = base_schema_1.AddressSchema.safeExtend({
    deliveryInstructions: zod_1.default.string().optional().describe("Special delivery instructions (gate code, building entrance, drop-off location) for couriers and delivery personnel.")
}).optional();
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
exports.OrderCustomerSchema = zod_1.default.object({
    customerId: zod_1.default.string().optional().describe("References Customer ID if customer is registered in the system. Used to link order history, preferences, and loyalty data."),
    name: zod_1.default.string().min(1, "Customer name is required").describe("Customer's full name for order identification, receipts, and communication. Required for all orders."),
    phone: zod_1.default.string().optional().describe("Customer's contact phone for order updates, delivery coordination, and support. Used by AI Powered Services for SMS notifications."),
    email: zod_1.default.email().optional().describe("Customer's email for digital receipts, order confirmations, and AI-generated order summaries."),
    address: exports.OrderAddress.describe("Customer address for delivery (menu/product orders) or billing purposes. Extended with delivery-specific instructions.")
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
exports.OrderPricingSchema = zod_1.default.object({
    subtotal: zod_1.default.number().nonnegative().describe("Sum of all item prices before tax, fees, or discounts. Base amount for pricing calculations."),
    tax: zod_1.default.number().nonnegative().default(0).describe("Calculated tax amount based on applicable tax rates and jurisdictions. Defaults to 0."),
    tip: zod_1.default.number().nonnegative().default(0).describe("Gratuity amount for service staff (common in food service). Defaults to 0."),
    shippingAmount: zod_1.default.number().nonnegative().default(0).describe("Shipping or delivery fee for product/menu orders. Defaults to 0 for pickup or dine-in."),
    discount: zod_1.default.number().nonnegative().default(0).describe("Total discount applied from promotions, coupons, or loyalty programs. Defaults to 0."),
    total: zod_1.default.number().nonnegative().describe("Final amount due: subtotal + tax + tip + shipping - discount. Amount charged to customer."),
    currency: zod_1.default.string().length(3).default("USD").describe("ISO 4217 currency code (e.g., 'USD', 'EUR', 'GBP') for international operations. Defaults to USD.")
});
