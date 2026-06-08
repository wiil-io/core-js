import { z } from "zod";
import { ResourceReservationDurationUnit, ResourceType } from "../../../type-definitions";
import { ServiceDepositStrategy } from "../../bookings.shared.schema";
import type { ResourceInstance } from "./reservation-resource-instance.schema";
/**
 * @fileoverview Reservation resource schema definitions.
 * @module business-mgt/reservation-mgt/resource
 */
/**
 * Resource channel mapping schema.
 * Maps a reservation resource to an external platform resource ID.
 *
 * @typedef {Object} ResourceChannelMapping
 * @property {string} channelId - Channel identifier
 * @property {string} externalResourceId - External resource ID
 */
export declare const ResourceChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalResourceId: z.ZodString;
}, z.core.$strip>;
/**
 * Capacity range schema.
 * Used by table resources that support a party size range.
 *
 * @typedef {Object} ResourceCapacityRange
 * @property {string} kind - Capacity mode discriminator
 * @property {number} min - Minimum supported party size
 * @property {number} max - Maximum supported party size
 */
export declare const ResourceCapacityRangeSchema: z.ZodObject<{
    kind: z.ZodLiteral<"range">;
    min: z.ZodNumber;
    max: z.ZodNumber;
}, z.core.$strip>;
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
export declare const ResourceCapacityOccupancySchema: z.ZodObject<{
    kind: z.ZodLiteral<"occupancy">;
    standard: z.ZodNumber;
    max: z.ZodNumber;
    extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
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
export declare const ResourceCapacitySingleSchema: z.ZodObject<{
    kind: z.ZodLiteral<"single">;
    value: z.ZodNumber;
    weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Resource capacity schema.
 * Discriminated union of mode-specific reservation capacity models.
 *
 * @typedef {ResourceCapacityRange|ResourceCapacityOccupancy|ResourceCapacitySingle} ResourceCapacity
 */
export declare const ResourceCapacitySchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"range">;
    min: z.ZodNumber;
    max: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"occupancy">;
    standard: z.ZodNumber;
    max: z.ZodNumber;
    extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"single">;
    value: z.ZodNumber;
    weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>], "kind">;
/**
 * No-pricing strategy schema.
 * Used for resources that do not quote pricing during reservation.
 *
 * @typedef {Object} ResourcePricingNone
 * @property {string} kind - Pricing mode discriminator
 * @property {string} [holdPolicy] - Optional hold or cancellation policy
 */
export declare const ResourcePricingNoneSchema: z.ZodObject<{
    kind: z.ZodLiteral<"none">;
    holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Day-of-week pricing strategy schema.
 * Used for nightly or daily resources with weekday-specific rates.
 *
 * @typedef {Object} ResourcePricingDayOfWeek
 * @property {string} kind - Pricing mode discriminator
 * @property {Object} rates - Per-day pricing by weekday
 */
export declare const ResourcePricingDayOfWeekSchema: z.ZodObject<{
    kind: z.ZodLiteral<"dayOfWeek">;
    rates: z.ZodObject<{
        mon: z.ZodNumber;
        tue: z.ZodNumber;
        wed: z.ZodNumber;
        thu: z.ZodNumber;
        fri: z.ZodNumber;
        sat: z.ZodNumber;
        sun: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Resource pricing tier schema.
 * Defines one tier in a tiered reservation pricing strategy.
 *
 * @typedef {Object} ResourcePricingTier
 * @property {number} from - Tier start quantity or duration
 * @property {number} [to] - Tier end quantity or duration
 * @property {number} price - Tier price
 */
export declare const ResourcePricingTierSchema: z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodNumber;
}, z.core.$strip>;
/**
 * Tiered pricing strategy schema.
 * Used for rentals or resources priced by duration or quantity bands.
 *
 * @typedef {Object} ResourcePricingTiered
 * @property {string} kind - Pricing mode discriminator
 * @property {ResourcePricingTier[]} tiers - Pricing tiers
 */
export declare const ResourcePricingTieredSchema: z.ZodObject<{
    kind: z.ZodLiteral<"tiered">;
    tiers: z.ZodArray<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        price: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Resource pricing strategy schema.
 * Discriminated union of supported reservation pricing models.
 *
 * @typedef {ResourcePricingNone|ResourcePricingDayOfWeek|ResourcePricingTiered} ResourcePricingStrategy
 */
export declare const ResourcePricingStrategySchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"none">;
    holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"dayOfWeek">;
    rates: z.ZodObject<{
        mon: z.ZodNumber;
        tue: z.ZodNumber;
        wed: z.ZodNumber;
        thu: z.ZodNumber;
        fri: z.ZodNumber;
        sat: z.ZodNumber;
        sun: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"tiered">;
    tiers: z.ZodArray<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        price: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>], "kind">;
/**
 * Resource attribute schema.
 * Stores flexible key/value attributes for resource catalog filtering and integrations.
 *
 * @typedef {Object} ResourceAttribute
 * @property {string} key - Attribute key
 * @property {string} value - Attribute value
 */
export declare const ResourceAttributeSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
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
export declare const ChecklistTemplateItemSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    required: z.ZodDefault<z.ZodBoolean>;
    phase: z.ZodDefault<z.ZodEnum<{
        pickup: "pickup";
        both: "both";
        return: "return";
    }>>;
}, z.core.$strip>;
export type ChecklistTemplateItem = z.infer<typeof ChecklistTemplateItemSchema>;
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
export declare const ResourceSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceRevisionId: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceType: z.ZodEnum<typeof ResourceType>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    capacity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    capacityConfig: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"range">;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"occupancy">;
        standard: z.ZodNumber;
        max: z.ZodNumber;
        extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        value: z.ZodNumber;
        weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>], "kind">>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalResourceId: z.ZodString;
    }, z.core.$strip>>>>;
    location: z.ZodOptional<z.ZodString>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    instances: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    pricing: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"none">;
        holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"dayOfWeek">;
        rates: z.ZodObject<{
            mon: z.ZodNumber;
            tue: z.ZodNumber;
            wed: z.ZodNumber;
            thu: z.ZodNumber;
            fri: z.ZodNumber;
            sat: z.ZodNumber;
            sun: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"tiered">;
        tiers: z.ZodArray<z.ZodObject<{
            from: z.ZodNumber;
            to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            price: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>], "kind">>>;
    turnoverMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
    reservationDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservationDurationUnit: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    checklistTemplate: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        phase: z.ZodDefault<z.ZodEnum<{
            pickup: "pickup";
            both: "both";
            return: "return";
        }>>;
    }, z.core.$strip>>>;
    applicableTierIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating a new reservation resource.
 * Omits auto-generated fields.
 */
export declare const CreateResourceSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalResourceId: z.ZodString;
    }, z.core.$strip>>>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    pricing: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"none">;
        holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"dayOfWeek">;
        rates: z.ZodObject<{
            mon: z.ZodNumber;
            tue: z.ZodNumber;
            wed: z.ZodNumber;
            thu: z.ZodNumber;
            fri: z.ZodNumber;
            sat: z.ZodNumber;
            sun: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"tiered">;
        tiers: z.ZodArray<z.ZodObject<{
            from: z.ZodNumber;
            to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            price: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>], "kind">>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    resourceRevisionId: z.ZodOptional<z.ZodString>;
    resourceType: z.ZodEnum<typeof ResourceType>;
    capacityConfig: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"range">;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"occupancy">;
        standard: z.ZodNumber;
        max: z.ZodNumber;
        extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        value: z.ZodNumber;
        weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>], "kind">>>;
    location: z.ZodOptional<z.ZodString>;
    instances: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    turnoverMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
    reservationDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservationDurationUnit: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    checklistTemplate: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        phase: z.ZodDefault<z.ZodEnum<{
            pickup: "pickup";
            both: "both";
            return: "return";
        }>>;
    }, z.core.$strip>>>;
    applicableTierIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    placement: z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing reservation resource.
 * All fields optional except id.
 */
export declare const UpdateResourceSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    categoryId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    displayOrder: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalResourceId: z.ZodString;
    }, z.core.$strip>>>>>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    imageUrls: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>>;
    pricing: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"none">;
        holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"dayOfWeek">;
        rates: z.ZodObject<{
            mon: z.ZodNumber;
            tue: z.ZodNumber;
            wed: z.ZodNumber;
            thu: z.ZodNumber;
            fri: z.ZodNumber;
            sat: z.ZodNumber;
            sun: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"tiered">;
        tiers: z.ZodArray<z.ZodObject<{
            from: z.ZodNumber;
            to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            price: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>], "kind">>>>;
    attributes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>>;
    amenities: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    resourceRevisionId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    resourceType: z.ZodOptional<z.ZodEnum<typeof ResourceType>>;
    capacityConfig: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"range">;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"occupancy">;
        standard: z.ZodNumber;
        max: z.ZodNumber;
        extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        value: z.ZodNumber;
        weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>], "kind">>>>;
    location: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    instances: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    turnoverMinutes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    bookingRules: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    depositStrategy: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>>;
    reservationDuration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    reservationDurationUnit: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>>;
    checklistTemplate: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        phase: z.ZodDefault<z.ZodEnum<{
            pickup: "pickup";
            both: "both";
            return: "return";
        }>>;
    }, z.core.$strip>>>>;
    applicableTierIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    placement: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        placementIntent: z.ZodObject<{
            mode: z.ZodEnum<{
                BEGINNING: "BEGINNING";
                END: "END";
                KEEP_CURRENT: "KEEP_CURRENT";
                BEFORE_ITEM: "BEFORE_ITEM";
                AFTER_ITEM: "AFTER_ITEM";
                ABSOLUTE_INDEX: "ABSOLUTE_INDEX";
            }>;
        }, z.core.$strip>;
        anchorItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absoluteIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
export declare const BusinessResourceCatalogSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceRevisionId: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resourceType: z.ZodEnum<typeof ResourceType>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrls: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodURL>>>;
    capacity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    capacityConfig: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"range">;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"occupancy">;
        standard: z.ZodNumber;
        max: z.ZodNumber;
        extraFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        value: z.ZodNumber;
        weightLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        skillLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>], "kind">>>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalResourceId: z.ZodString;
    }, z.core.$strip>>>>;
    location: z.ZodOptional<z.ZodString>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    instances: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    pricing: z.ZodOptional<z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"none">;
        holdPolicy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"dayOfWeek">;
        rates: z.ZodObject<{
            mon: z.ZodNumber;
            tue: z.ZodNumber;
            wed: z.ZodNumber;
            thu: z.ZodNumber;
            fri: z.ZodNumber;
            sat: z.ZodNumber;
            sun: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"tiered">;
        tiers: z.ZodArray<z.ZodObject<{
            from: z.ZodNumber;
            to: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            price: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>], "kind">>>;
    turnoverMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    bookingRules: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        onlineEnabled: z.ZodDefault<z.ZodBoolean>;
        existingOnly: z.ZodDefault<z.ZodBoolean>;
        requiresConsult: z.ZodDefault<z.ZodBoolean>;
        maxDaysOut: z.ZodDefault<z.ZodNumber>;
        minNoticeHours: z.ZodDefault<z.ZodNumber>;
        lateCancelHours: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    depositStrategy: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof ServiceDepositStrategy>>>;
    reservationDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservationDurationUnit: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    checklistTemplate: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        required: z.ZodDefault<z.ZodBoolean>;
        phase: z.ZodDefault<z.ZodEnum<{
            pickup: "pickup";
            both: "both";
            return: "return";
        }>>;
    }, z.core.$strip>>>;
    applicableTierIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    displayOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>>;
export type BusinessResourceCatalog = z.infer<typeof BusinessResourceCatalogSchema>;
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
    capacityRange?: {
        min?: number;
        max?: number;
    };
    /** Filter by physical location label */
    location?: string;
    /** Filter by required amenities */
    amenities?: string[];
    /** Filter by pricing range */
    priceRange?: {
        min?: number;
        max?: number;
    };
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
