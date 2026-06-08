import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../type-definitions/display-order";
import { FieldDefinitionSchema, FieldOverrideSchema } from "../../type-definitions/dynamic-fields";
import { SimpleWeeklyScheduleSchema } from "../../type-definitions/business-definitions";
import { ServiceBookingRulesSchema, ServiceDepositStrategy } from "../bookings.shared.schema";

/**
 * @fileoverview Business Service Configuration schema definitions.
 * @module business-mgt/business-service-config
 *
 * Manages service offerings including pricing, scheduling, availability,
 * and booking rules for appointment-based businesses.
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Service pricing mode options.
 * @enum {string}
 */
export enum ServicePriceMode {
    /** Fixed price for the service */
    FIXED = "FIXED",
    /** Starting price, final may vary */
    STARTS_AT = "STARTS_AT",
    /** Variable pricing based on factors */
    VARIABLE = "VARIABLE",
}

/**
 * Service gratuity mode options.
 * @enum {string}
 */
export enum ServiceGratuityMode {
    /** No gratuity accepted */
    NONE = "NONE",
    /** Gratuity is optional */
    OPTIONAL = "OPTIONAL",
    /** Gratuity is required */
    REQUIRED = "REQUIRED",
}

/**
 * Service availability mode options.
 * @enum {string}
 */
export enum ServiceAvailabilityMode {
    /** Service available 24/7 */
    ALWAYS = "ALWAYS",
    /** Service follows custom schedule */
    SCHEDULED = "SCHEDULED",
    /** Service inherits business hours */
    INHERIT = "INHERIT",
}

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Per-channel service category ID mapping.
 * @typedef {Object} ServiceCategoryChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalCategoryId - External category ID for this specific channel
 */
export const ServiceCategoryChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., yelp, google, mindbody)"),
    externalCategoryId: z.string().describe("External category ID for this specific channel"),
}).describe("Per-channel external service category ID mapping");

/**
 * Per-channel external service ID mapping.
 * @typedef {Object} ServiceChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalServiceId - External service ID for this specific channel
 * @property {string|null} [externalCategoryId] - External category ID in this channel, if needed for sync payloads
 */
export const ServiceChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., yelp, google, mindbody)"),
    externalServiceId: z.string().describe("External service ID for this specific channel"),
    externalCategoryId: z.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads"),
}).describe("Per-channel external service ID mapping");

/**
 * Service duration segments schema.
 * Breaks down service time into distinct phases.
 * @typedef {Object} ServiceDurationSegments
 * @property {number} prep - Preparation time in minutes
 * @property {number} active - Hands-on active service time in minutes
 * @property {number} processing - Processing/wait time in minutes
 * @property {number} finish - Finishing time in minutes
 * @property {number} turnover - Turnover/reset time in minutes
 */
export const ServiceDurationSegmentsSchema = z.object({
    prep: z.number().int().nonnegative().default(0).describe("Preparation time in minutes"),
    active: z.number().int().positive().default(60).describe("Hands-on active service time in minutes"),
    processing: z.number().int().nonnegative().default(0).describe("Processing/wait time in minutes"),
    finish: z.number().int().nonnegative().default(0).describe("Finishing time in minutes"),
    turnover: z.number().int().nonnegative().default(0).describe("Turnover/reset time in minutes"),
});

// ============================================================================
// SERVICE AVAILABILITY
// ============================================================================

/**
 * Service date range schema.
 * Defines seasonal availability or blackout periods.
 * @typedef {Object} ServiceDateRange
 * @property {string} startDate - Start date in ISO format (YYYY-MM-DD)
 * @property {string} endDate - End date in ISO format (YYYY-MM-DD)
 * @property {boolean} isExclusion - If true, service is NOT available during this range
 */
export const ServiceDateRangeSchema = z.object({
    startDate: z.string().describe("Start date in ISO format (YYYY-MM-DD)"),
    endDate: z.string().describe("End date in ISO format (YYYY-MM-DD)"),
    isExclusion: z.boolean().default(false).describe("If true, service is NOT available during this range"),
});

/**
 * Service availability schema.
 * Configures when a service is available for booking.
 * @typedef {Object} ServiceAvailability
 * @property {ServiceAvailabilityMode} mode - Availability mode: ALWAYS (24/7), SCHEDULED (custom), INHERIT (from business hours)
 * @property {SimpleWeeklySchedule} [weeklySchedule] - Weekly availability schedule (required when mode is SCHEDULED)
 * @property {ServiceDateRange[]} [dateRanges] - Date ranges for seasonal availability or blackout periods
 */
export const ServiceAvailabilitySchema = z.object({
    mode: z.enum(ServiceAvailabilityMode).default(ServiceAvailabilityMode.INHERIT)
        .describe("Availability mode: ALWAYS (24/7), SCHEDULED (custom), INHERIT (from business hours)"),
    weeklySchedule: SimpleWeeklyScheduleSchema.optional()
        .describe("Weekly availability schedule (required when mode is SCHEDULED)"),
    dateRanges: z.array(ServiceDateRangeSchema).optional()
        .describe("Date ranges for seasonal availability or blackout periods"),
}).superRefine((data, ctx) => {
    if (data.mode === ServiceAvailabilityMode.SCHEDULED && !data.weeklySchedule) {
        ctx.addIssue({
            code: "custom",
            path: ["weeklySchedule"],
            message: "weeklySchedule is required when mode is SCHEDULED",
        });
    }
});

export type ServiceDateRange = z.infer<typeof ServiceDateRangeSchema>;
export type ServiceAvailability = z.infer<typeof ServiceAvailabilitySchema>;

/**
 * Service-level appointment field configuration (embedded).
 * Inherits from organization-level config and allows service-specific customization.
 * @typedef {Object} ServiceAppointmentFieldConfig
 * @property {string[]} inheritedFieldKeys - Field keys inherited from organization-level config
 * @property {FieldOverride[]} fieldOverrides - Service-specific field overrides
 * @property {FieldDefinition[]} additionalFields - Additional fields specific to this service
 * @property {boolean} isActive - Whether the field configuration is active
 * @property {boolean} reuseDetails - Whether to reuse customer details from previous bookings
 */
export const ServiceAppointmentFieldConfigSchema = z.object({
    inheritedFieldKeys: z.array(z.string()).default([]),
    fieldOverrides: z.array(FieldOverrideSchema).default([]),
    additionalFields: z.array(FieldDefinitionSchema).default([]),
    isActive: z.boolean().default(true),
    reuseDetails: z.boolean().default(false),
});

export type ServiceAppointmentFieldConfig = z.infer<typeof ServiceAppointmentFieldConfigSchema>;

// ============================================================================
// SERVICE CATEGORY
// ============================================================================

/**
 * Service Category schema.
 * Groups related services for organization and display.
 * @typedef {Object} ServiceCategory
 * @property {string} id - Unique identifier
 * @property {string} organizationId - Business account ID
 * @property {string} [serviceRevisionId] - Optional service revision ID for version-scoped data
 * @property {string} name - Category name (e.g., Hair Services, Spa Treatments)
 * @property {string|null} [description] - Category description
 * @property {string|null} [imageUrl] - Category image URL
 * @property {ServiceCategoryChannelMapping[]|null} [channelMappings] - Per-channel service category ID mappings
 * @property {number|null} [displayOrder] - Display order in listing
 * @property {boolean} isActive - Whether this category is active
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} updatedAt - Last update timestamp
 */
export const ServiceCategorySchema = BaseModelSchema.safeExtend({
    organizationId: z.string().describe("Business account ID"),
    serviceRevisionId: z.string().optional().describe("Optional service revision ID for version-scoped data"),
    name: z.string().min(1, "Category name is required").describe("Category name (e.g., Hair Services, Spa Treatments)"),
    description: z.string().nullable().optional().describe("Category description"),
    imageUrl: z.url().nullable().optional().describe("Category image URL"),
    channelMappings: z.array(ServiceCategoryChannelMappingSchema).nullable().optional().describe("Per-channel service category ID mappings"),
    displayOrder: z.number().int().nullable().optional().describe("Display order in listing"),
    isActive: z.boolean().default(true).describe("Whether this category is active"),
});

/**
 * Schema for creating a new service category.
 * Omits auto-generated fields.
 */
export const CreateServiceCategorySchema = ServiceCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

/**
 * Schema for updating an existing service category.
 * All fields optional except id (required).
 */
export const UpdateServiceCategorySchema = CreateServiceCategorySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServiceCategory to update"),
});

export type ServiceCategoryChannelMapping = z.infer<typeof ServiceCategoryChannelMappingSchema>;
export type ServiceChannelMapping = z.infer<typeof ServiceChannelMappingSchema>;
export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
export type CreateServiceCategory = z.infer<typeof CreateServiceCategorySchema>;
export type UpdateServiceCategory = z.infer<typeof UpdateServiceCategorySchema>;

// ============================================================================
// BUSINESS SERVICE CONFIG
// ============================================================================

/**
 * Business Service Configuration schema.
 * Defines a service offering with pricing, scheduling, and booking rules.
 * @typedef {Object} BusinessService
 * @property {string} id - Unique identifier
 * @property {string} organizationId - Business account ID this service belongs to
 * @property {string} [serviceRevisionId] - Optional service revision ID for version-scoped data
 * @property {string} name - Name of the service offered
 * @property {string|null} [description] - Detailed description of the service
 * @property {string|null} [imageUrl] - Service image URL
 * @property {string|null} [categoryId] - Service category ID
 * @property {string|null} [bookingCode] - Short booking code for quick reference
 * @property {number} duration - Service duration in minutes (max 8 hours)
 * @property {ServiceDurationSegments|null} [durationSegments] - Segmented service duration breakdown
 * @property {number} bufferBefore - Buffer before appointment start in minutes
 * @property {number} bufferAfter - Buffer after appointment end in minutes
 * @property {boolean} isBookable - Whether this service can be booked online
 * @property {boolean|null} [allowsProcessingChairSwap] - Whether client can switch resources during processing segment
 * @property {ServiceAvailability|null} [serviceAvailability] - Service-specific availability schedule
 * @property {number|null} [maxConcurrentBookings] - Max simultaneous bookings for this service
 * @property {number} basePrice - Base service price in account currency
 * @property {ServicePriceMode|null} [priceMode] - Service pricing mode
 * @property {ServiceGratuityMode|null} [gratuityMode] - Gratuity policy for this service
 * @property {boolean} isActive - Whether the service is currently available
 * @property {number|null} [displayOrder] - Display order in service listings
 * @property {ServiceChannelMapping[]|null} [channelMappings] - Per-channel service ID mappings
 * @property {string|null} [primaryServiceUserAccountId] - User account primarily responsible for this service
 * @property {string[]} requiredResources - Required resource IDs for this service
 * @property {ServiceBookingRules|null} [bookingRules] - Service-specific booking constraints
 * @property {ServiceDepositStrategy|null} [depositStrategy] - Deposit strategy for this service
 * @property {number|null} [depositValue] - Deposit amount or percentage depending on strategy
 * @property {number} lateCancelFeePercent - Late cancellation fee percentage
 * @property {number} noShowFeePercent - No-show fee percentage
 * @property {ServiceAppointmentFieldConfig|null} [requiredDatafieldConfig] - Dynamic field configuration
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} updatedAt - Last update timestamp
 */
export const BusinessServiceConfigSchema = BaseModelSchema.safeExtend({
    organizationId: z.string().describe("Business account ID this service belongs to"),
    serviceRevisionId: z.string().optional().describe("Optional service revision ID for version-scoped data"),
    name: z.string().min(1, "Service name is required").describe("Name of the service offered"),
    description: z.string().nullable().optional().describe("Detailed description of the service"),
    imageUrl: z.url().nullable().optional().describe("Service image URL"),
    categoryId: z.string().nullable().optional().describe("Service category ID"),
    bookingCode: z.string().nullable().optional().describe("Short booking code for quick reference"),

    // Scheduling & Duration
    duration: z.number().int().positive().max(480).default(60).describe("Service duration in minutes (max 8 hours)"),
    durationSegments: ServiceDurationSegmentsSchema.nullable().optional().describe("Segmented service duration breakdown"),
    bufferBefore: z.number().int().nonnegative().default(0).describe("Buffer before appointment start in minutes"),
    bufferAfter: z.number().int().nonnegative().default(0).describe("Buffer after appointment end in minutes"),
    isBookable: z.boolean().default(true).describe("Whether this service can be booked online"),
    allowsProcessingChairSwap: z.boolean().nullable().optional().describe("Whether client can switch resources during processing segment"),

    // Availability & Capacity
    serviceAvailability: ServiceAvailabilitySchema.nullable().optional().describe("Service-specific availability schedule"),
    maxConcurrentBookings: z.number().int().positive().nullable().optional().describe("Max simultaneous bookings for this service (null = 1)"),

    // Pricing
    basePrice: z.number().nonnegative().default(0).describe("Base service price in account currency"),
    priceMode: z.enum(ServicePriceMode).nullable().optional().describe("Service pricing mode"),
    gratuityMode: z.enum(ServiceGratuityMode).nullable().optional().describe("Gratuity policy for this service"),

    // Business Management
    isActive: z.boolean().default(true).describe("Whether the service is currently available"),
    displayOrder: z.number().int().nullable().optional().describe("Display order in service listings"),
    channelMappings: z.array(ServiceChannelMappingSchema).nullable().optional().describe("Per-channel service ID mappings"),

    primaryServiceUserAccountId: z.string().nullable().optional().describe("User account primarily responsible for this service"),
    requiredResources: z.array(z.string()).default([]).describe("Required resource IDs for this service"),
    bookingRules: ServiceBookingRulesSchema.nullable().optional().describe("Service-specific booking constraints"),
    depositStrategy: z.enum(ServiceDepositStrategy).nullable().optional().describe("Deposit strategy for this service"),
    depositValue: z.number().nonnegative().nullable().optional().describe("Deposit amount or percentage depending on strategy"),
    lateCancelFeePercent: z.number().min(0).max(100).default(0).describe("Late cancellation fee percentage"),
    noShowFeePercent: z.number().min(0).max(100).default(0).describe("No-show fee percentage"),

    // Dynamic Field Configuration
    requiredDatafieldConfig: ServiceAppointmentFieldConfigSchema.nullable().optional(),
});

/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export const CreateBusinessServiceSchema = BusinessServiceConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional(),
});

/**
 * Schema for updating an existing business service.
 * All fields optional except id (required).
 */
export const UpdateBusinessServiceSchema = CreateBusinessServiceSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the BusinessService to update"),
});

export type BusinessService = z.infer<typeof BusinessServiceConfigSchema>;
export type CreateBusinessService = z.infer<typeof CreateBusinessServiceSchema>;
export type UpdateBusinessService = z.infer<typeof UpdateBusinessServiceSchema>;
export type ServiceDurationSegments = z.infer<typeof ServiceDurationSegmentsSchema>;

// ============================================================================
// CATALOG SCHEMAS
// ============================================================================

/**
 * Service catalog schema.
 * Represents a category with its associated services.
 * @typedef {Object} ServiceCatalog
 * @property {ServiceCategory} serviceCategory - The service category
 * @property {BusinessService[]} services - List of services in this category
 */
export const ServiceCatalogSchema = z.object({
    serviceCategory: ServiceCategorySchema,
    services: z.array(BusinessServiceConfigSchema).describe("List of services in this category"),
}).describe("Schema representing a service category and its services");

/**
 * Business service catalog schema.
 * Array of service categories with their services.
 * @typedef {ServiceCatalog[]} BusinessServiceCatalog
 */
export const BusinessServiceCatalogSchema = z.array(ServiceCatalogSchema).describe("Schema representing a business service catalog");

export type ServiceCatalog = z.infer<typeof ServiceCatalogSchema>;
export type BusinessServiceCatalog = z.infer<typeof BusinessServiceCatalogSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Business service filter options.
 * @interface BusinessServiceFilters
 */
export interface BusinessServiceFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by category ID */
    categoryId?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by active status */
    isActive?: boolean;
    /** Filter by bookable status */
    isBookable?: boolean;
    /** Filter by price range */
    priceRange?: { min?: number; max?: number; };
    /** Include soft-deleted records */
    includeDeleted?: boolean;
}

/**
 * Business service sorting options.
 * @interface BusinessServiceSorting
 */
export interface BusinessServiceSorting {
    /** Field to sort by */
    field: 'name' | 'price' | 'duration' | 'createdAt' | 'displayOrder';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Business service query options.
 * @interface BusinessServiceQueryOptions
 */
export interface BusinessServiceQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: BusinessServiceFilters;
    /** Optional sorting */
    sorting?: BusinessServiceSorting;
}
