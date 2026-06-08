import z from "zod";
/**
 * @fileoverview Service Provider join schema for service-to-provider assignments.
 * @module business-mgt/service-provider
 *
 * Many-to-many relationship between services and providers with per-provider overrides.
 */
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
export declare const ServiceProviderSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    serviceId: z.ZodString;
    providerId: z.ZodString;
    priceOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    durationOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    active: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating a new service provider assignment.
 * Omits auto-generated fields.
 */
export declare const CreateServiceProviderSchema: z.ZodObject<{
    active: z.ZodDefault<z.ZodBoolean>;
    serviceId: z.ZodString;
    providerId: z.ZodString;
    priceOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    durationOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service provider assignment.
 * All fields optional except id (required).
 */
export declare const UpdateServiceProviderSchema: z.ZodObject<{
    active: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    serviceId: z.ZodOptional<z.ZodString>;
    providerId: z.ZodOptional<z.ZodString>;
    priceOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    durationOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ServiceProvider = z.infer<typeof ServiceProviderSchema>;
export type CreateServiceProvider = z.infer<typeof CreateServiceProviderSchema>;
export type UpdateServiceProvider = z.infer<typeof UpdateServiceProviderSchema>;
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
