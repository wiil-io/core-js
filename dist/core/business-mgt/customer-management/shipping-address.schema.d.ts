import z from "zod";
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
export declare const ShippingAddressSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    customerId: z.ZodString;
    street: z.ZodString;
    street2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
    recipientName: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
    instructions: z.ZodOptional<z.ZodString>;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new shipping address.
 * Omits auto-generated fields.
 */
export declare const CreateShippingAddressSchema: z.ZodObject<{
    street: z.ZodString;
    street2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
    instructions: z.ZodOptional<z.ZodString>;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
    phoneNumber: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
    customerId: z.ZodString;
    recipientName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for updating an existing shipping address.
 * All fields optional except id (required).
 */
export declare const UpdateShippingAddressSchema: z.ZodObject<{
    street: z.ZodOptional<z.ZodString>;
    street2: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isPrimary: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    phoneNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>>;
    customerId: z.ZodOptional<z.ZodString>;
    recipientName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
export type CreateShippingAddress = z.infer<typeof CreateShippingAddressSchema>;
export type UpdateShippingAddress = z.infer<typeof UpdateShippingAddressSchema>;
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
