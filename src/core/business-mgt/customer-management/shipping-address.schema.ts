import z from "zod";
import { BaseModelSchema } from "../../base.schema";

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
const phoneNumberSchema = z.string()
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
export const ShippingAddressSchema = BaseModelSchema.safeExtend({
    customerId: z.string().describe("ID of the customer this shipping address belongs to"),
    street: z.string().min(2, { message: "Street must be 2 or more characters long" }).describe("Primary street address including house/building number"),
    street2: z.string().optional().describe("Secondary address line for apartment, suite, or unit numbers"),
    city: z.string().min(2, { message: "City must be 2 or more characters long" }).describe("City or municipality name"),
    state: z.string().min(2, { message: "State must be 2 or more characters long" }).describe("State, province, or region code"),
    postalCode: z.string().min(2, { message: "Postal code must be 2 or more characters long" }).describe("ZIP code, postal code, or equivalent"),
    country: z.string().min(2, { message: "Country must be 2 or more characters long" }).describe("ISO country code or country name"),
    recipientName: z.string().optional().describe("Name of the recipient for shipping"),
    phoneNumber: phoneNumberSchema.nullable().optional().describe("Phone number for shipping contact"),
    instructions: z.string().optional().describe("Special instructions for delivery"),
    isPrimary: z.boolean().default(false).describe("Whether this is the primary shipping address"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new shipping address.
 * Omits auto-generated fields.
 */
export const CreateShippingAddressSchema = ShippingAddressSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing shipping address.
 * All fields optional except id (required).
 */
export const UpdateShippingAddressSchema = CreateShippingAddressSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ShippingAddress to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
export type CreateShippingAddress = z.infer<typeof CreateShippingAddressSchema>;
export type UpdateShippingAddress = z.infer<typeof UpdateShippingAddressSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Shipping address filter options.
 * @interface ShippingAddressFilters
 */
export interface ShippingAddressFilters {
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by primary status */
    isPrimary?: boolean;
    /** Filter by country */
    country?: string;
    /** Filter by city */
    city?: string;
    /** Filter by state */
    state?: string;
}

/**
 * Shipping address sorting options.
 * @interface ShippingAddressSorting
 */
export interface ShippingAddressSorting {
    /** Field to sort by */
    field: "createdAt" | "isPrimary" | "country" | "city";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Shipping address query options.
 * @interface ShippingAddressQueryOptions
 */
export interface ShippingAddressQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ShippingAddressFilters;
    /** Optional sorting */
    sorting?: ShippingAddressSorting;
}
