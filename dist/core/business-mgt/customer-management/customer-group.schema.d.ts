import z from "zod";
/**
 * @fileoverview Customer Group schema definitions for business management.
 * @module business-mgt/customer-group
 *
 * Customer groups enable segmentation for pricing tiers and special terms
 * (e.g., Retail, Wholesale, VIP, Gold Tier).
 */
/**
 * Customer Group schema.
 * Groups customers for pricing tiers and special terms.
 *
 * @typedef {Object} CustomerGroup
 * @property {string} name - Group name (e.g., Retail, Wholesale, VIP)
 * @property {string} [description] - Group description
 * @property {string} [code] - Short code (e.g., WS, VIP, GOLD)
 * @property {boolean} isDefault - Whether this is the default group
 */
export declare const CustomerGroupSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new customer group.
 * Omits auto-generated fields.
 */
export declare const CreateCustomerGroupSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating an existing customer group.
 * All fields optional except id (required).
 */
export declare const UpdateCustomerGroupSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type CustomerGroup = z.infer<typeof CustomerGroupSchema>;
export type CreateCustomerGroup = z.infer<typeof CreateCustomerGroupSchema>;
export type UpdateCustomerGroup = z.infer<typeof UpdateCustomerGroupSchema>;
/**
 * Customer group filter options.
 * @interface CustomerGroupFilters
 */
export interface CustomerGroupFilters {
    /** Text search across name/description/code */
    search?: string;
    /** Filter by code */
    code?: string;
    /** Filter by default status */
    isDefault?: boolean;
}
/**
 * Customer group sorting options.
 * @interface CustomerGroupSorting
 */
export interface CustomerGroupSorting {
    /** Field to sort by */
    field: "name" | "code" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Customer group query options.
 * @interface CustomerGroupQueryOptions
 */
export interface CustomerGroupQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: CustomerGroupFilters;
    /** Optional sorting */
    sorting?: CustomerGroupSorting;
}
