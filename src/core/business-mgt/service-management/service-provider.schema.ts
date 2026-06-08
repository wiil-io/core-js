import z from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Service Provider join schema for service-to-provider assignments.
 * @module business-mgt/service-provider
 *
 * Many-to-many relationship between services and providers with per-provider overrides.
 */

// ============================================================================
// SERVICE PROVIDER SCHEMA
// ============================================================================

/**
 * Service Provider join schema.
 * Links services to providers with optional price/duration overrides.
 *
 * @typedef {Object} ServiceProvider
 * @property {string} serviceId - Service ID being assigned
 * @property {string} providerId - Provider ID (typically ServicePerson ID)
 * @property {number} [priceOverride] - Provider-specific price override
 * @property {number} [durationOverride] - Provider-specific duration override in minutes
 * @property {boolean} active - Whether this assignment is active
 */
export const ServiceProviderSchema = BaseModelSchema.safeExtend({
    serviceId: z.string().describe("Service ID being assigned to the provider"),
    providerId: z.string().describe("Provider ID (typically ServicePerson ID)"),
    priceOverride: z.number().nonnegative().nullable().optional().describe("Provider-specific price override. Null means use service default price."),
    durationOverride: z.number().int().positive().nullable().optional().describe("Provider-specific duration override in minutes. Null means use service default duration."),
    active: z.boolean().default(true).describe("Whether this provider assignment is active"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new service provider assignment.
 * Omits auto-generated fields.
 */
export const CreateServiceProviderSchema = ServiceProviderSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing service provider assignment.
 * All fields optional except id (required).
 */
export const UpdateServiceProviderSchema = CreateServiceProviderSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServiceProvider to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServiceProvider = z.infer<typeof ServiceProviderSchema>;
export type CreateServiceProvider = z.infer<typeof CreateServiceProviderSchema>;
export type UpdateServiceProvider = z.infer<typeof UpdateServiceProviderSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Service provider filter options.
 * @interface ServiceProviderFilters
 */
export interface ServiceProviderFilters {
    /** Filter by service ID */
    serviceId?: string;
    /** Filter by provider ID */
    providerId?: string;
    /** Filter by active status */
    active?: boolean;
}

/**
 * Service provider sorting options.
 * @interface ServiceProviderSorting
 */
export interface ServiceProviderSorting {
    /** Field to sort by */
    field: "createdAt" | "updatedAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Service provider query options.
 * @interface ServiceProviderQueryOptions
 */
export interface ServiceProviderQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServiceProviderFilters;
    /** Optional sorting */
    sorting?: ServiceProviderSorting;
}
