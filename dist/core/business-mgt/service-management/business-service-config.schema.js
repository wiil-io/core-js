"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessServiceCatalogSchema = exports.ServiceCatalogSchema = exports.UpdateBusinessServiceSchema = exports.CreateBusinessServiceSchema = exports.BusinessServiceConfigSchema = exports.UpdateServiceCategorySchema = exports.CreateServiceCategorySchema = exports.ServiceCategorySchema = exports.ServiceAppointmentFieldConfigSchema = exports.ServiceAvailabilitySchema = exports.ServiceDateRangeSchema = exports.ServiceDurationSegmentsSchema = exports.ServiceChannelMappingSchema = exports.ServiceCategoryChannelMappingSchema = exports.ServiceAvailabilityMode = exports.ServiceGratuityMode = exports.ServicePriceMode = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const display_order_1 = require("../../type-definitions/display-order");
const dynamic_fields_1 = require("../../type-definitions/dynamic-fields");
const business_definitions_1 = require("../../type-definitions/business-definitions");
const bookings_shared_schema_1 = require("../bookings.shared.schema");
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
var ServicePriceMode;
(function (ServicePriceMode) {
    /** Fixed price for the service */
    ServicePriceMode["FIXED"] = "FIXED";
    /** Starting price, final may vary */
    ServicePriceMode["STARTS_AT"] = "STARTS_AT";
    /** Variable pricing based on factors */
    ServicePriceMode["VARIABLE"] = "VARIABLE";
})(ServicePriceMode || (exports.ServicePriceMode = ServicePriceMode = {}));
/**
 * Service gratuity mode options.
 * @enum {string}
 */
var ServiceGratuityMode;
(function (ServiceGratuityMode) {
    /** No gratuity accepted */
    ServiceGratuityMode["NONE"] = "NONE";
    /** Gratuity is optional */
    ServiceGratuityMode["OPTIONAL"] = "OPTIONAL";
    /** Gratuity is required */
    ServiceGratuityMode["REQUIRED"] = "REQUIRED";
})(ServiceGratuityMode || (exports.ServiceGratuityMode = ServiceGratuityMode = {}));
/**
 * Service availability mode options.
 * @enum {string}
 */
var ServiceAvailabilityMode;
(function (ServiceAvailabilityMode) {
    /** Service available 24/7 */
    ServiceAvailabilityMode["ALWAYS"] = "ALWAYS";
    /** Service follows custom schedule */
    ServiceAvailabilityMode["SCHEDULED"] = "SCHEDULED";
    /** Service inherits business hours */
    ServiceAvailabilityMode["INHERIT"] = "INHERIT";
})(ServiceAvailabilityMode || (exports.ServiceAvailabilityMode = ServiceAvailabilityMode = {}));
// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================
/**
 * Per-channel service category ID mapping.
 * @typedef {Object} ServiceCategoryChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalCategoryId - External category ID for this specific channel
 */
exports.ServiceCategoryChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., yelp, google, mindbody)"),
    externalCategoryId: zod_1.default.string().describe("External category ID for this specific channel"),
}).describe("Per-channel external service category ID mapping");
/**
 * Per-channel external service ID mapping.
 * @typedef {Object} ServiceChannelMapping
 * @property {string} channelId - Channel ID (e.g., yelp, google, mindbody)
 * @property {string} externalServiceId - External service ID for this specific channel
 * @property {string|null} [externalCategoryId] - External category ID in this channel, if needed for sync payloads
 */
exports.ServiceChannelMappingSchema = zod_1.default.object({
    channelId: zod_1.default.string().describe("Channel ID (e.g., yelp, google, mindbody)"),
    externalServiceId: zod_1.default.string().describe("External service ID for this specific channel"),
    externalCategoryId: zod_1.default.string().nullable().optional().describe("External category ID in this channel, if needed for sync payloads"),
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
exports.ServiceDurationSegmentsSchema = zod_1.default.object({
    prep: zod_1.default.number().int().nonnegative().default(0).describe("Preparation time in minutes"),
    active: zod_1.default.number().int().positive().default(60).describe("Hands-on active service time in minutes"),
    processing: zod_1.default.number().int().nonnegative().default(0).describe("Processing/wait time in minutes"),
    finish: zod_1.default.number().int().nonnegative().default(0).describe("Finishing time in minutes"),
    turnover: zod_1.default.number().int().nonnegative().default(0).describe("Turnover/reset time in minutes"),
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
exports.ServiceDateRangeSchema = zod_1.default.object({
    startDate: zod_1.default.string().describe("Start date in ISO format (YYYY-MM-DD)"),
    endDate: zod_1.default.string().describe("End date in ISO format (YYYY-MM-DD)"),
    isExclusion: zod_1.default.boolean().default(false).describe("If true, service is NOT available during this range"),
});
/**
 * Service availability schema.
 * Configures when a service is available for booking.
 * @typedef {Object} ServiceAvailability
 * @property {ServiceAvailabilityMode} mode - Availability mode: ALWAYS (24/7), SCHEDULED (custom), INHERIT (from business hours)
 * @property {SimpleWeeklySchedule} [weeklySchedule] - Weekly availability schedule (required when mode is SCHEDULED)
 * @property {ServiceDateRange[]} [dateRanges] - Date ranges for seasonal availability or blackout periods
 */
exports.ServiceAvailabilitySchema = zod_1.default.object({
    mode: zod_1.default.enum(ServiceAvailabilityMode).default(ServiceAvailabilityMode.INHERIT)
        .describe("Availability mode: ALWAYS (24/7), SCHEDULED (custom), INHERIT (from business hours)"),
    weeklySchedule: business_definitions_1.SimpleWeeklyScheduleSchema.optional()
        .describe("Weekly availability schedule (required when mode is SCHEDULED)"),
    dateRanges: zod_1.default.array(exports.ServiceDateRangeSchema).optional()
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
exports.ServiceAppointmentFieldConfigSchema = zod_1.default.object({
    inheritedFieldKeys: zod_1.default.array(zod_1.default.string()).default([]),
    fieldOverrides: zod_1.default.array(dynamic_fields_1.FieldOverrideSchema).default([]),
    additionalFields: zod_1.default.array(dynamic_fields_1.FieldDefinitionSchema).default([]),
    isActive: zod_1.default.boolean().default(true),
    reuseDetails: zod_1.default.boolean().default(false),
});
// ============================================================================
// SERVICE CATEGORY
// ============================================================================
/**
 * Service Category schema.
 * Groups related services for organization and display.
 * @typedef {Object} ServiceCategory
 * @property {string} id - Unique identifier
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
exports.ServiceCategorySchema = base_schema_1.BaseModelSchema.safeExtend({
    serviceRevisionId: zod_1.default.string().optional().describe("Optional service revision ID for version-scoped data"),
    name: zod_1.default.string().min(1, "Category name is required").describe("Category name (e.g., Hair Services, Spa Treatments)"),
    description: zod_1.default.string().nullable().optional().describe("Category description"),
    imageUrl: zod_1.default.url().nullable().optional().describe("Category image URL"),
    channelMappings: zod_1.default.array(exports.ServiceCategoryChannelMappingSchema).nullable().optional().describe("Per-channel service category ID mappings"),
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Display order in listing"),
    isActive: zod_1.default.boolean().default(true).describe("Whether this category is active"),
});
/**
 * Schema for creating a new service category.
 * Omits auto-generated fields.
 */
exports.CreateServiceCategorySchema = exports.ServiceCategorySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional(),
});
/**
 * Schema for updating an existing service category.
 * All fields optional except id (required).
 */
exports.UpdateServiceCategorySchema = exports.CreateServiceCategorySchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the ServiceCategory to update"),
});
// ============================================================================
// BUSINESS SERVICE CONFIG
// ============================================================================
/**
 * Business Service Configuration schema.
 * Defines a service offering with pricing, scheduling, and booking rules.
 * @typedef {Object} BusinessService
 * @property {string} id - Unique identifier
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
exports.BusinessServiceConfigSchema = base_schema_1.BaseModelSchema.safeExtend({
    serviceRevisionId: zod_1.default.string().optional().describe("Optional service revision ID for version-scoped data"),
    name: zod_1.default.string().min(1, "Service name is required").describe("Name of the service offered"),
    description: zod_1.default.string().nullable().optional().describe("Detailed description of the service"),
    imageUrl: zod_1.default.url().nullable().optional().describe("Service image URL"),
    categoryId: zod_1.default.string().nullable().optional().describe("Service category ID"),
    bookingCode: zod_1.default.string().nullable().optional().describe("Short booking code for quick reference"),
    // Scheduling & Duration
    duration: zod_1.default.number().int().positive().max(480).default(60).describe("Service duration in minutes (max 8 hours)"),
    durationSegments: exports.ServiceDurationSegmentsSchema.nullable().optional().describe("Segmented service duration breakdown"),
    bufferBefore: zod_1.default.number().int().nonnegative().default(0).describe("Buffer before appointment start in minutes"),
    bufferAfter: zod_1.default.number().int().nonnegative().default(0).describe("Buffer after appointment end in minutes"),
    isBookable: zod_1.default.boolean().default(true).describe("Whether this service can be booked online"),
    allowsProcessingChairSwap: zod_1.default.boolean().nullable().optional().describe("Whether client can switch resources during processing segment"),
    // Availability & Capacity
    serviceAvailability: exports.ServiceAvailabilitySchema.nullable().optional().describe("Service-specific availability schedule"),
    maxConcurrentBookings: zod_1.default.number().int().positive().nullable().optional().describe("Max simultaneous bookings for this service (null = 1)"),
    // Pricing
    basePrice: zod_1.default.number().nonnegative().default(0).describe("Base service price in account currency"),
    priceMode: zod_1.default.enum(ServicePriceMode).nullable().optional().describe("Service pricing mode"),
    gratuityMode: zod_1.default.enum(ServiceGratuityMode).nullable().optional().describe("Gratuity policy for this service"),
    // Business Management
    isActive: zod_1.default.boolean().default(true).describe("Whether the service is currently available"),
    displayOrder: zod_1.default.number().int().nullable().optional().describe("Display order in service listings"),
    channelMappings: zod_1.default.array(exports.ServiceChannelMappingSchema).nullable().optional().describe("Per-channel service ID mappings"),
    primaryServiceUserAccountId: zod_1.default.string().nullable().optional().describe("User account primarily responsible for this service"),
    requiredResources: zod_1.default.array(zod_1.default.string()).default([]).describe("Required resource IDs for this service"),
    bookingRules: bookings_shared_schema_1.ServiceBookingRulesSchema.nullable().optional().describe("Service-specific booking constraints"),
    depositStrategy: zod_1.default.enum(bookings_shared_schema_1.ServiceDepositStrategy).nullable().optional().describe("Deposit strategy for this service"),
    depositValue: zod_1.default.number().nonnegative().nullable().optional().describe("Deposit amount or percentage depending on strategy"),
    lateCancelFeePercent: zod_1.default.number().min(0).max(100).default(0).describe("Late cancellation fee percentage"),
    noShowFeePercent: zod_1.default.number().min(0).max(100).default(0).describe("No-show fee percentage"),
    // Dynamic Field Configuration
    requiredDatafieldConfig: exports.ServiceAppointmentFieldConfigSchema.nullable().optional(),
});
/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
exports.CreateBusinessServiceSchema = exports.BusinessServiceConfigSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional(),
});
/**
 * Schema for updating an existing business service.
 * All fields optional except id (required).
 */
exports.UpdateBusinessServiceSchema = exports.CreateBusinessServiceSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the BusinessService to update"),
});
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
exports.ServiceCatalogSchema = zod_1.default.object({
    serviceCategory: exports.ServiceCategorySchema,
    services: zod_1.default.array(exports.BusinessServiceConfigSchema).describe("List of services in this category"),
}).describe("Schema representing a service category and its services");
/**
 * Business service catalog schema.
 * Array of service categories with their services.
 * @typedef {ServiceCatalog[]} BusinessServiceCatalog
 */
exports.BusinessServiceCatalogSchema = zod_1.default.array(exports.ServiceCatalogSchema).describe("Schema representing a business service catalog");
