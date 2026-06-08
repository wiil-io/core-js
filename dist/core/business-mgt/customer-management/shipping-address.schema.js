"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShippingAddressSchema = exports.CreateShippingAddressSchema = exports.ShippingAddressSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
/**
 * @fileoverview Shipping Address schema definitions for customer management.
 * @module business-mgt/shipping-address
 *
 * Shipping addresses store customer delivery addresses with recipient details
 * and special delivery instructions.
 */
// ============================================================================
// HELPER SCHEMAS
// ============================================================================
/**
 * Phone number validation (basic E.164 format).
 * Automatically normalizes to E.164 format with leading +.
 */
const phoneNumberSchema = zod_1.default.string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .transform((phone) => {
    return phone.startsWith("+") ? phone : `+${phone}`;
});
// ============================================================================
// SHIPPING ADDRESS SCHEMA
// ============================================================================
/**
 * Shipping Address schema.
 * Customer shipping address record with delivery details.
 *
 * @typedef {Object} ShippingAddress
 * @property {string} customerId - Customer this address belongs to
 * @property {string} street - Primary street address
 * @property {string} [street2] - Secondary address line (apt, suite, unit)
 * @property {string} city - City or municipality
 * @property {string} state - State, province, or region
 * @property {string} postalCode - ZIP or postal code
 * @property {string} country - Country code or name
 * @property {string} [recipientName] - Name of recipient
 * @property {string} [phoneNumber] - Contact phone for delivery
 * @property {string} [instructions] - Special delivery instructions
 * @property {boolean} isPrimary - Whether this is the primary address
 */
exports.ShippingAddressSchema = base_schema_1.BaseModelSchema.safeExtend({
    customerId: zod_1.default.string().describe("ID of the customer this shipping address belongs to"),
    street: zod_1.default.string().min(2, { message: "Street must be 2 or more characters long" }).describe("Primary street address including house/building number"),
    street2: zod_1.default.string().optional().describe("Secondary address line for apartment, suite, or unit numbers"),
    city: zod_1.default.string().min(2, { message: "City must be 2 or more characters long" }).describe("City or municipality name"),
    state: zod_1.default.string().min(2, { message: "State must be 2 or more characters long" }).describe("State, province, or region code"),
    postalCode: zod_1.default.string().min(2, { message: "Postal code must be 2 or more characters long" }).describe("ZIP code, postal code, or equivalent"),
    country: zod_1.default.string().min(2, { message: "Country must be 2 or more characters long" }).describe("ISO country code or country name"),
    recipientName: zod_1.default.string().optional().describe("Name of the recipient for shipping"),
    phoneNumber: phoneNumberSchema.nullable().optional().describe("Phone number for shipping contact"),
    instructions: zod_1.default.string().optional().describe("Special instructions for delivery"),
    isPrimary: zod_1.default.boolean().default(false).describe("Whether this is the primary shipping address"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new shipping address.
 * Omits auto-generated fields.
 */
exports.CreateShippingAddressSchema = exports.ShippingAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing shipping address.
 * All fields optional except id (required).
 */
exports.UpdateShippingAddressSchema = exports.CreateShippingAddressSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ShippingAddress to update"),
});
