"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessResourceCatalogSchema = exports.UpdateResourceSchema = exports.CreateResourceSchema = exports.ResourceSchema = exports.ChecklistTemplateItemSchema = exports.ResourceAttributeSchema = exports.ResourcePricingStrategySchema = exports.ResourcePricingTieredSchema = exports.ResourcePricingTierSchema = exports.ResourcePricingDayOfWeekSchema = exports.ResourcePricingNoneSchema = exports.ResourceCapacitySchema = exports.ResourceCapacitySingleSchema = exports.ResourceCapacityOccupancySchema = exports.ResourceCapacityRangeSchema = exports.ResourceChannelMappingSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../../base.schema");
const display_order_1 = require("../../../type-definitions/display-order");
const type_definitions_1 = require("../../../type-definitions");
const bookings_shared_schema_1 = require("../../bookings.shared.schema");
const reservation_resource_instance_schema_1 = require("./reservation-resource-instance.schema");
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
exports.ResourceChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., opentable, booking-com, resy)."),
    externalResourceId: zod_1.z.string().describe("External resource ID for this specific channel."),
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
exports.ResourceCapacityRangeSchema = zod_1.z.object({
    kind: zod_1.z.literal("range"),
    min: zod_1.z.number().int().positive().describe("Minimum supported party size."),
    max: zod_1.z.number().int().positive().describe("Maximum supported party size."),
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
exports.ResourceCapacityOccupancySchema = zod_1.z.object({
    kind: zod_1.z.literal("occupancy"),
    standard: zod_1.z.number().int().positive().describe("Standard occupancy included in base room pricing."),
    max: zod_1.z.number().int().positive().describe("Maximum allowed occupancy for the room resource."),
    extraFee: zod_1.z.number().nonnegative().nullable().optional().describe("Optional extra fee for occupancy above standard."),
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
exports.ResourceCapacitySingleSchema = zod_1.z.object({
    kind: zod_1.z.literal("single"),
    value: zod_1.z.number().int().positive().describe("Single capacity value for the resource."),
    weightLimit: zod_1.z.number().positive().nullable().optional().describe("Optional weight limit for rental resources."),
    skillLevel: zod_1.z.string().nullable().optional().describe("Optional skill level requirement for rental eligibility."),
});
/**
 * Resource capacity schema.
 * Discriminated union of mode-specific reservation capacity models.
 *
 * @typedef {ResourceCapacityRange|ResourceCapacityOccupancy|ResourceCapacitySingle} ResourceCapacity
 */
exports.ResourceCapacitySchema = zod_1.z.discriminatedUnion("kind", [
    exports.ResourceCapacityRangeSchema,
    exports.ResourceCapacityOccupancySchema,
    exports.ResourceCapacitySingleSchema,
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
exports.ResourcePricingNoneSchema = zod_1.z.object({
    kind: zod_1.z.literal("none"),
    holdPolicy: zod_1.z.string().nullable().optional().describe("Optional hold or cancellation policy shown for non-priced resources."),
});
/**
 * Day-of-week pricing strategy schema.
 * Used for nightly or daily resources with weekday-specific rates.
 *
 * @typedef {Object} ResourcePricingDayOfWeek
 * @property {string} kind - Pricing mode discriminator
 * @property {Object} rates - Per-day pricing by weekday
 */
exports.ResourcePricingDayOfWeekSchema = zod_1.z.object({
    kind: zod_1.z.literal("dayOfWeek"),
    rates: zod_1.z.object({
        mon: zod_1.z.number().nonnegative(),
        tue: zod_1.z.number().nonnegative(),
        wed: zod_1.z.number().nonnegative(),
        thu: zod_1.z.number().nonnegative(),
        fri: zod_1.z.number().nonnegative(),
        sat: zod_1.z.number().nonnegative(),
        sun: zod_1.z.number().nonnegative(),
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
exports.ResourcePricingTierSchema = zod_1.z.object({
    from: zod_1.z.number().nonnegative().describe("Tier start quantity or duration."),
    to: zod_1.z.number().nonnegative().nullable().optional().describe("Tier end quantity or duration. Null means the tier is open-ended."),
    price: zod_1.z.number().nonnegative().describe("Tier price applied within this range."),
});
/**
 * Tiered pricing strategy schema.
 * Used for rentals or resources priced by duration or quantity bands.
 *
 * @typedef {Object} ResourcePricingTiered
 * @property {string} kind - Pricing mode discriminator
 * @property {ResourcePricingTier[]} tiers - Pricing tiers
 */
exports.ResourcePricingTieredSchema = zod_1.z.object({
    kind: zod_1.z.literal("tiered"),
    tiers: zod_1.z.array(exports.ResourcePricingTierSchema).min(1).describe("Ordered pricing tiers for this resource."),
});
/**
 * Resource pricing strategy schema.
 * Discriminated union of supported reservation pricing models.
 *
 * @typedef {ResourcePricingNone|ResourcePricingDayOfWeek|ResourcePricingTiered} ResourcePricingStrategy
 */
exports.ResourcePricingStrategySchema = zod_1.z.discriminatedUnion("kind", [
    exports.ResourcePricingNoneSchema,
    exports.ResourcePricingDayOfWeekSchema,
    exports.ResourcePricingTieredSchema,
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
exports.ResourceAttributeSchema = zod_1.z.object({
    key: zod_1.z.string().describe("Attribute key used for filtering, display, or integrations."),
    value: zod_1.z.string().describe("Attribute value associated with this resource."),
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
exports.ChecklistTemplateItemSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Checklist item ID."),
    label: zod_1.z.string().describe("Checklist item label shown to staff."),
    required: zod_1.z.boolean().default(true).describe("Whether this item must be checked before completing pickup or return."),
    phase: zod_1.z.enum(["pickup", "return", "both"]).default("both").describe("When this checklist item should be completed."),
});
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
exports.ResourceSchema = base_schema_1.BaseModelSchema.safeExtend({
    resourceRevisionId: zod_1.z.string().nullable().optional().describe("Optional resource revision ID for version-scoped catalog data."),
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where this resource applies. Null applies across locations."),
    resourceType: zod_1.z.enum(type_definitions_1.ResourceType).describe("Reservation resource type, such as table, room, rental, or generic resource."),
    categoryId: zod_1.z.string().nullable().optional().describe("Resource category ID used for grouping and filtering."),
    name: zod_1.z.string().describe("Display name of the reservable resource."),
    description: zod_1.z.string().nullable().optional().describe("Customer or staff-facing description of the reservable resource."),
    imageUrls: zod_1.z.array(zod_1.z.url()).nullable().optional().describe("Public image URLs used to present the resource in reservation flows."),
    capacity: zod_1.z.number().int().positive().nullable().optional().describe("Simple maximum capacity for the resource when a detailed capacityConfig is not needed."),
    capacityConfig: exports.ResourceCapacitySchema.nullable().optional().describe("Mode-specific capacity configuration for table, room, or rental resources."),
    isAvailable: zod_1.z.boolean().default(true).describe("Whether this resource is available for new reservations."),
    channelMappings: zod_1.z.array(exports.ResourceChannelMappingSchema).nullable().optional().describe("Per-channel resource ID mappings for external platform synchronization."),
    location: zod_1.z.string().optional().describe("Physical location label for the resource, such as floor, building, or pickup area."),
    amenities: zod_1.z.array(zod_1.z.string()).default([]).describe("Amenities or features available for this resource."),
    instances: zod_1.z.array(zod_1.z.string()).nullable().optional().describe("Resource instance IDs for physical units under this resource."),
    pricing: exports.ResourcePricingStrategySchema.nullable().optional().describe("Mode-specific pricing strategy for slot or quote generation."),
    turnoverMinutes: zod_1.z.number().int().nonnegative().nullable().optional().describe("Turnover or reset time in minutes between reservations."),
    attributes: zod_1.z.array(exports.ResourceAttributeSchema).nullable().optional().describe("Flexible key/value attributes for filtering, display, or integrations."),
    bookingRules: bookings_shared_schema_1.ServiceBookingRulesSchema.nullable().optional().describe("Booking rules shared with service and reservation workflows."),
    depositStrategy: zod_1.z.enum(bookings_shared_schema_1.ServiceDepositStrategy).nullable().optional().describe("Deposit strategy shared with service and reservation workflows."),
    reservationDuration: zod_1.z.number().int().positive().nullable().optional().describe("Default reservation duration for this resource."),
    reservationDurationUnit: zod_1.z.enum(type_definitions_1.ResourceReservationDurationUnit).optional().nullable().describe("Unit of the default reservation duration."),
    checklistTemplate: zod_1.z.array(exports.ChecklistTemplateItemSchema).default([]).describe("Pickup and return checklist template items for rental resources."),
    applicableTierIds: zod_1.z.array(zod_1.z.string()).default([]).describe("Rental tier IDs from ReservationSettings that apply to this resource."),
    displayOrder: zod_1.z.number().int().nonnegative().nullable().optional().describe("Numeric display order for resource listings. Lower numbers appear first."),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Additional structured metadata for resource integrations and rendering."),
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
    if (data.resourceType === type_definitions_1.ResourceType.TABLE) {
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
    if (data.resourceType === type_definitions_1.ResourceType.ROOM) {
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
    if (data.resourceType === type_definitions_1.ResourceType.RENTAL) {
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
 * Object shape for creating a reservation resource.
 * Omits auto-generated fields and replaces the read-model `instances` ID list with
 * embedded instance definitions to be created alongside the resource.
 */
const CreateResourceObjectSchema = exports.ResourceSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    // Replaced below with embedded create-instance definitions (no parent resourceId)
    instances: true,
}).safeExtend({
    placement: display_order_1.CreateDisplayOrderPlacementSchema.optional().describe("Optional placement for display ordering."),
    instances: zod_1.z.array(reservation_resource_instance_schema_1.CreateResourceInstanceSchema.omit({ resourceId: true })).default([]).describe("Physical instances to create with this resource. At least one is required for every resource type except table; the parent resource ID is assigned by the server."),
});
/**
 * Schema for creating a new reservation resource.
 *
 * @remarks
 * A reservation resource must be created with at least one instance, except for
 * table resources, where instances are optional at creation time.
 */
exports.CreateResourceSchema = CreateResourceObjectSchema.superRefine((data, ctx) => {
    if (data.resourceType !== type_definitions_1.ResourceType.TABLE && data.instances.length < 1) {
        ctx.addIssue({
            code: "custom",
            path: ["instances"],
            message: "A reservation resource must have at least one instance, except for table resources",
        });
    }
});
/**
 * Schema for updating an existing reservation resource.
 * All fields optional except id. The create-time instance requirement is not enforced on update.
 */
exports.UpdateResourceSchema = CreateResourceObjectSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the reservation resource to update."),
});
/**
 * Business resource catalog schema.
 * Represents the complete reservation resource catalog for a business context.
 *
 * @typedef {Resource[]} BusinessResourceCatalog
 */
exports.BusinessResourceCatalogSchema = zod_1.z.array(exports.ResourceSchema).describe("Schema representing a business resource catalog");
