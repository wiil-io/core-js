import z from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Customer Group schema definitions for business management.
 * @module business-mgt/customer-group
 *
 * Customer groups enable segmentation for pricing tiers and special terms
 * (e.g., Retail, Wholesale, VIP, Gold Tier).
 */

// ============================================================================
// CUSTOMER GROUP SCHEMA
// ============================================================================

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
export const CustomerGroupSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1, "Group name is required").describe("Customer group name (e.g., Retail, Wholesale, VIP, Gold Tier)"),
    description: z.string().nullable().optional().describe("Group description"),
    code: z.string().nullable().optional().describe("Short code for the group (e.g., WS, VIP, GOLD)"),
    isDefault: z.boolean().default(false).describe("Whether this is the default customer group"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new customer group.
 * Omits auto-generated fields.
 */
export const CreateCustomerGroupSchema = CustomerGroupSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing customer group.
 * All fields optional except id (required).
 */
export const UpdateCustomerGroupSchema = CreateCustomerGroupSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the CustomerGroup to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type CustomerGroup = z.infer<typeof CustomerGroupSchema>;
export type CreateCustomerGroup = z.infer<typeof CreateCustomerGroupSchema>;
export type UpdateCustomerGroup = z.infer<typeof UpdateCustomerGroupSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
