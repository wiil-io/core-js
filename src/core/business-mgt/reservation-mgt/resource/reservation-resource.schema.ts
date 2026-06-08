import { z } from "zod";
import { BaseModelSchema } from "../../../base.schema";
import { CreateDisplayOrderPlacementSchema } from "../../../type-definitions/display-order";
import { ResourceReservationDurationUnit, ResourceType } from "../../../type-definitions";
import { ServiceBookingRulesSchema, ServiceDepositStrategy } from "../../bookings.shared.schema";
import type { ResourceInstance } from "./reservation-resource-instance.schema";

/**
 * @fileoverview Reservation resource schema definitions.
 * @module business-mgt/reservation-mgt/resource
 */

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Resource channel mapping schema.
 * Maps a reservation resource to an external platform resource ID.
 *
 * @typedef {Object} ResourceChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalResourceId - External resource ID
 */
export const ResourceChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., opentable, booking-com, resy)."),
    externalResourceId: z.string().describe("External resource ID for this specific channel."),
}).describe("Per-channel external resource ID mapping");

// ============================================================================
// CAPACITY SCHEMAS
// ============================================================================

/**
 * Capacity range schema.
 * Used by table resources that support a party size range.
 *
 * @typedef {Object} ResourceCapacityRange
 * @property {string} kind - Capacity mode discriminator
 * @property {number} min - Minimum supported party size
 * @property {number} max - Maximum supported party size
 */
export const ResourceCapacityRangeSchema = z.object({
    kind: z.literal("range"),
    min: z.number().int().positive().describe("Minimum supported party size."),
    max: z.number().int().positive().describe("Maximum supported party size."),
});

/**
 * Occupancy capacity schema.
 * Used by room resources with standard and maximum occupancy.
 *
 * @typedef {Object} ResourceCapacityOccupancy
 * @property {string} kind - Capacity mode discriminator
 * @property {number} standard - Standard occupancy
 * @property {number} max - Maximum occupancy
 * @property {number} [extraFee] - Optional fee above standard occupancy
 */
export const ResourceCapacityOccupancySchema = z.object({
    kind: z.literal("occupancy"),
    standard: z.number().int().positive().describe("Standard occupancy included in base room pricing."),
    max: z.number().int().positive().describe("Maximum allowed occupancy for the room resource."),
    extraFee: z.number().nonnegative().nullable().optional().describe("Optional extra fee for occupancy above standard."),
});

/**
 * Single capacity schema.
 * Used by rental resources that represent one reservable unit at a time.
 *
 * @typedef {Object} ResourceCapacitySingle
 * @property {string} kind - Capacity mode discriminator
 * @property {number} value - Single capacity value
 * @property {number} [weightLimit] - Optional weight limit
 * @property {string} [skillLevel] - Optional skill level requirement
 */
export const ResourceCapacitySingleSchema = z.object({
    kind: z.literal("single"),
    value: z.number().int().positive().describe("Single capacity value for the resource."),
    weightLimit: z.number().positive().nullable().optional().describe("Optional weight limit for rental resources."),
    skillLevel: z.string().nullable().optional().describe("Optional skill level requirement for rental eligibility."),
});

/**
 * Resource capacity schema.
 * Discriminated union of mode-specific reservation capacity models.
 *
 * @typedef {ResourceCapacityRange|ResourceCapacityOccupancy|ResourceCapacitySingle} ResourceCapacity
 */
export const ResourceCapacitySchema = z.discriminatedUnion("kind", [
    ResourceCapacityRangeSchema,
    ResourceCapacityOccupancySchema,
    ResourceCapacitySingleSchema,
]);

// ============================================================================
// PRICING SCHEMAS
// ============================================================================

/**
 * No-pricing strategy schema.
 * Used for resources that do not quote pricing during reservation.
 *
 * @typedef {Object} ResourcePricingNone
 * @property {string} kind - Pricing mode discriminator
 * @property {string} [holdPolicy] - Optional hold or cancellation policy
 */
export const ResourcePricingNoneSchema = z.object({
    kind: z.literal("none"),
    holdPolicy: z.string().nullable().optional().describe("Optional hold or cancellation policy shown for non-priced resources."),
});

/**
 * Day-of-week pricing strategy schema.
 * Used for nightly or daily resources with weekday-specific rates.
 *
 * @typedef {Object} ResourcePricingDayOfWeek
 * @property {string} kind - Pricing mode discriminator
 * @property {Object} rates - Per-day pricing by weekday
 */
export const ResourcePricingDayOfWeekSchema = z.object({
    kind: z.literal("dayOfWeek"),
    rates: z.object({
        mon: z.number().nonnegative(),
        tue: z.number().nonnegative(),
        wed: z.number().nonnegative(),
        thu: z.number().nonnegative(),
        fri: z.number().nonnegative(),
        sat: z.number().nonnegative(),
        sun: z.number().nonnegative(),
    }).describe("Per-day pricing by weekday."),
});

/**
 * Resource pricing tier schema.
 * Defines one tier in a tiered reservation pricing strategy.
 *
 * @typedef {Object} ResourcePricingTier
 * @property {number} from - Tier start quantity or duration
 * @property {number} [to] - Tier end quantity or duration
 * @property {number} price - Tier price
 */
export const ResourcePricingTierSchema = z.object({
    from: z.number().nonnegative().describe("Tier start quantity or duration."),
    to: z.number().nonnegative().nullable().optional().describe("Tier end quantity or duration. Null means the tier is open-ended."),
    price: z.number().nonnegative().describe("Tier price applied within this range."),
});

/**
 * Tiered pricing strategy schema.
 * Used for rentals or resources priced by duration or quantity bands.
 *
 * @typedef {Object} ResourcePricingTiered
 * @property {string} kind - Pricing mode discriminator
 * @property {ResourcePricingTier[]} tiers - Pricing tiers
 */
export const ResourcePricingTieredSchema = z.object({
    kind: z.literal("tiered"),
    tiers: z.array(ResourcePricingTierSchema).min(1).describe("Ordered pricing tiers for this resource."),
});

/**
 * Resource pricing strategy schema.
 * Discriminated union of supported reservation pricing models.
 *
 * @typedef {ResourcePricingNone|ResourcePricingDayOfWeek|ResourcePricingTiered} ResourcePricingStrategy
 */
export const ResourcePricingStrategySchema = z.discriminatedUnion("kind", [
    ResourcePricingNoneSchema,
    ResourcePricingDayOfWeekSchema,
    ResourcePricingTieredSchema,
]);

// ============================================================================
// ATTRIBUTE AND CHECKLIST SCHEMAS
// ============================================================================

/**
 * Resource attribute schema.
 * Stores flexible key/value attributes for resource catalog filtering and integrations.
 *
 * @typedef {Object} ResourceAttribute
 * @property {string} key - Attribute key
 * @property {string} value - Attribute value
 */
export const ResourceAttributeSchema = z.object({
    key: z.string().describe("Attribute key used for filtering, display, or integrations."),
    value: z.string().describe("Attribute value associated with this resource."),
});

/**
 * Checklist template item schema.
 * Defines a pickup or return inspection item used by rental reservations.
 *
 * @typedef {Object} ChecklistTemplateItem
 * @property {string} id - Checklist item ID
 * @property {string} label - Staff-facing checklist item label
 * @property {boolean} required - Whether this item is required
 * @property {string} phase - Pickup, return, or both
 */
export const ChecklistTemplateItemSchema = z.object({
    id: z.string().describe("Checklist item ID."),
    label: z.string().describe("Checklist item label shown to staff."),
    required: z.boolean().default(true).describe("Whether this item must be checked before completing pickup or return."),
    phase: z.enum(["pickup", "return", "both"]).default("both").describe("When this checklist item should be completed."),
});

export type ChecklistTemplateItem = z.infer<typeof ChecklistTemplateItemSchema>;

// ============================================================================
// RESOURCE SCHEMA
// ============================================================================

/**
 * Resource schema.
 * Defines a reservable resource category such as a table type, room type, or rental item type.
 *
 * @typedef {Object} Resource
 * @property {string} [resourceRevisionId] - Version control for resource changes
 * @property {string} [locationId] - Business location where the resource applies
 * @property {ResourceType} resourceType - Reservation resource type
 * @property {string} [categoryId] - Resource category ID
 * @property {string} name - Resource display name
 * @property {string} [description] - Resource description
 * @property {string[]} [imageUrls] - Public image URLs
 * @property {number} [capacity] - Simple maximum capacity
 * @property {Object} [capacityConfig] - Mode-specific capacity configuration
 * @property {boolean} isAvailable - Whether the resource is available
 * @property {ResourceChannelMapping[]} [channelMappings] - Per-channel resource mappings
 * @property {string} [location] - Physical location label
 * @property {string[]} amenities - Resource amenities
 * @property {string[]} [instances] - Physical resource instance IDs
 * @property {Object} [pricing] - Mode-specific pricing strategy
 * @property {number} [turnoverMinutes] - Reset time between reservations
 * @property {ResourceAttribute[]} [attributes] - Flexible resource attributes
 * @property {Object} [bookingRules] - Booking rules shared with reservation workflows
 * @property {ServiceDepositStrategy} [depositStrategy] - Deposit strategy
 * @property {number} [reservationDuration] - Default reservation duration
 * @property {ResourceReservationDurationUnit} [reservationDurationUnit] - Unit for the default duration
 * @property {ChecklistTemplateItem[]} checklistTemplate - Rental pickup/return checklist items
 * @property {string[]} applicableTierIds - Applicable rental tier IDs
 * @property {number} [displayOrder] - Display order in resource listings
 * @property {Object} [metadata] - Additional resource metadata
 */
export const ResourceSchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().optional().describe("Optional resource revision ID for version-scoped catalog data."),
    locationId: z.string().nullable().optional().describe("Business location ID where this resource applies. Null applies across locations."),
    resourceType: z.enum(ResourceType).describe("Reservation resource type, such as table, room, rental, or generic resource."),
    categoryId: z.string().nullable().optional().describe("Resource category ID used for grouping and filtering."),
    name: z.string().describe("Display name of the reservable resource."),
    description: z.string().nullable().optional().describe("Customer or staff-facing description of the reservable resource."),
    imageUrls: z.array(z.url()).nullable().optional().describe("Public image URLs used to present the resource in reservation flows."),
    capacity: z.number().int().positive().nullable().optional().describe("Simple maximum capacity for the resource when a detailed capacityConfig is not needed."),
    capacityConfig: ResourceCapacitySchema.nullable().optional().describe("Mode-specific capacity configuration for table, room, or rental resources."),
    isAvailable: z.boolean().default(true).describe("Whether this resource is available for new reservations."),
    channelMappings: z.array(ResourceChannelMappingSchema).nullable().optional().describe("Per-channel resource ID mappings for external platform synchronization."),
    location: z.string().optional().describe("Physical location label for the resource, such as floor, building, or pickup area."),
    amenities: z.array(z.string()).default([]).describe("Amenities or features available for this resource."),
    instances: z.array(z.string()).nullable().optional().describe("Resource instance IDs for physical units under this resource."),
    pricing: ResourcePricingStrategySchema.nullable().optional().describe("Mode-specific pricing strategy for slot or quote generation."),
    turnoverMinutes: z.number().int().nonnegative().nullable().optional().describe("Turnover or reset time in minutes between reservations."),
    attributes: z.array(ResourceAttributeSchema).nullable().optional().describe("Flexible key/value attributes for filtering, display, or integrations."),
    bookingRules: ServiceBookingRulesSchema.nullable().optional().describe("Booking rules shared with service and reservation workflows."),
    depositStrategy: z.enum(ServiceDepositStrategy).nullable().optional().describe("Deposit strategy shared with service and reservation workflows."),
    reservationDuration: z.number().int().positive().nullable().optional().describe("Default reservation duration for this resource."),
    reservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().nullable().describe("Unit of the default reservation duration."),
    checklistTemplate: z.array(ChecklistTemplateItemSchema).default([]).describe("Pickup and return checklist template items for rental resources."),
    applicableTierIds: z.array(z.string()).default([]).describe("Rental tier IDs from ReservationSettings that apply to this resource."),
    displayOrder: z.number().int().nonnegative().nullable().optional().describe("Numeric display order for resource listings. Lower numbers appear first."),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional structured metadata for resource integrations and rendering."),
}).superRefine((data, ctx) => {
    if (data.capacityConfig?.kind === "range" && data.capacityConfig.max < data.capacityConfig.min) {
        ctx.addIssue({
            code: "custom",
            path: ["capacityConfig", "max"],
            message: "capacityConfig.max must be greater than or equal to capacityConfig.min",
        });
    }

    if (data.capacityConfig?.kind === "occupancy" && data.capacityConfig.max < data.capacityConfig.standard) {
        ctx.addIssue({
            code: "custom",
            path: ["capacityConfig", "max"],
            message: "capacityConfig.max must be greater than or equal to capacityConfig.standard",
        });
    }

    if (data.resourceType === ResourceType.TABLE) {
        if (data.capacityConfig?.kind && data.capacityConfig.kind !== "range") {
            ctx.addIssue({
                code: "custom",
                path: ["capacityConfig", "kind"],
                message: "Table resources must use capacityConfig.kind 'range'",
            });
        }
        if (data.pricing?.kind && data.pricing.kind !== "none") {
            ctx.addIssue({
                code: "custom",
                path: ["pricing", "kind"],
                message: "Table resources must use pricing.kind 'none'",
            });
        }
    }

    if (data.resourceType === ResourceType.ROOM) {
        if (data.capacityConfig?.kind && data.capacityConfig.kind !== "occupancy") {
            ctx.addIssue({
                code: "custom",
                path: ["capacityConfig", "kind"],
                message: "Room resources must use capacityConfig.kind 'occupancy'",
            });
        }
        if (data.pricing?.kind && data.pricing.kind !== "dayOfWeek") {
            ctx.addIssue({
                code: "custom",
                path: ["pricing", "kind"],
                message: "Room resources must use pricing.kind 'dayOfWeek'",
            });
        }
    }

    if (data.resourceType === ResourceType.RENTAL) {
        if (data.capacityConfig?.kind && data.capacityConfig.kind !== "single") {
            ctx.addIssue({
                code: "custom",
                path: ["capacityConfig", "kind"],
                message: "Rental resources must use capacityConfig.kind 'single'",
            });
        }
        if (data.pricing?.kind && data.pricing.kind !== "tiered") {
            ctx.addIssue({
                code: "custom",
                path: ["pricing", "kind"],
                message: "Rental resources must use pricing.kind 'tiered'",
            });
        }
    }
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new reservation resource.
 * Omits auto-generated fields.
 */
export const CreateResourceSchema = ResourceSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).safeExtend({
    placement: CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering."),
});

/**
 * Schema for updating an existing reservation resource.
 * All fields optional except id.
 */
export const UpdateResourceSchema = CreateResourceSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the reservation resource to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ResourceChannelMapping = z.infer<typeof ResourceChannelMappingSchema>;
export type Resource = z.infer<typeof ResourceSchema>;
export type CreateResource = z.infer<typeof CreateResourceSchema>;
export type UpdateResource = z.infer<typeof UpdateResourceSchema>;
export type ResourceCapacity = z.infer<typeof ResourceCapacitySchema>;
export type ResourcePricingStrategy = z.infer<typeof ResourcePricingStrategySchema>;
export type ResourceInstanceRef = Pick<ResourceInstance, "id">["id"];

/**
 * Business resource catalog schema.
 * Represents the complete reservation resource catalog for a business context.
 *
 * @typedef {Resource[]} BusinessResourceCatalog
 */
export const BusinessResourceCatalogSchema = z.array(ResourceSchema).describe("Schema representing a business resource catalog");

export type BusinessResourceCatalog = z.infer<typeof BusinessResourceCatalogSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Resource filter options.
 * @interface ResourceFilters
 */
export interface ResourceFilters {
    /** Text search across resource name and description */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by resource types */
    resourceType?: ResourceType[];
    /** Filter by resource category ID */
    categoryId?: string;
    /** Filter by availability status */
    isAvailable?: boolean;
    /** Filter by supported capacity range */
    capacityRange?: { min?: number; max?: number };
    /** Filter by physical location label */
    location?: string;
    /** Filter by required amenities */
    amenities?: string[];
    /** Filter by pricing range */
    priceRange?: { min?: number; max?: number };
}

/**
 * Resource sorting options.
 * @interface ResourceSorting
 */
export interface ResourceSorting {
    /** Field to sort by */
    field: "name" | "capacity" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Resource query options.
 * @interface ResourceQueryOptions
 */
export interface ResourceQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ResourceFilters;
    /** Optional sorting */
    sorting?: ResourceSorting;
}
