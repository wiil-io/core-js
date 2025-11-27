import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { ResourceReservationDurationUnit, ResourceType } from "../type-definitions";

/**
 * @fileoverview Reservation resource schema definitions for various resource types.
 * @module business-mgt/reservation-resource
 */

/**
 * Room resource schema for hotel/accommodation bookings.
 *
 * @typedef {Object} RoomResource
 * @property {string} roomNumber - Room number or identifier
 * @property {string} roomType - Type of room (e.g., Standard Queen, Deluxe King)
 * @property {number} pricePerNight - Price per night for the room
 * @property {string} [view] - Room view (e.g., City View, Ocean View)
 * @property {string} [bedType] - Type of bed (e.g., Queen, King, Twin)
 * @property {boolean} isSmoking - Whether smoking is allowed
 * @property {string} [accessibilityFeatures] - Accessibility features available
 */
export const RoomResourceSchema = z.object({
    roomNumber: z.string(),
    roomType: z.string(),
    pricePerNight: z.number().nonnegative(),
    view: z.string().optional(),
    bedType: z.string().optional(),
    isSmoking: z.boolean().default(false),
    accessibilityFeatures: z.string().optional(),
});

/**
 * Rental resource schema for hourly rentals.
 *
 * @typedef {Object} RentalResource
 * @property {string} itemType - Type of rental item (e.g., Game Room, Conference Room)
 * @property {number} pricePerHour - Hourly rate for this rental
 */
export const RentalResourceSchema = z.object({
    itemType: z.string(),
    pricePerHour: z.number().nonnegative(),
});

/**
 * Main resource schema for managing reservable resources.
 *
 * @typedef {Object} Resource
 * @property {string} organizationId - Business account ID
 * @property {string} resourceType - Type of resource
 * @property {string} name - Name of the resource (table, room, etc.)
 * @property {string} [description] - Description of the resource
 * @property {number} [capacity] - Maximum capacity (e.g., number of people)
 * @property {boolean} isAvailable - Whether the resource is available for reservation
 * @property {string} [location] - Physical location of the resource
 * @property {string[]} amenities - Available amenities
 * @property {number} [reservationDuration] - Default reservation duration
 * @property {string} [reservationDurationUnit] - Unit of the default reservation duration
 * @property {string} [calendarId] - Calendar ID for availability sync
 * @property {boolean} syncEnabled - Whether calendar sync is enabled
 * @property {number} [lastSyncAt] - Last sync timestamp
 * @property {Object} [roomResource] - Room-specific fields
 * @property {Object} [rentalResource] - Rental-specific fields
 * @property {Object} [metadata] - Additional metadata for other resource types
 */
export const ResourceSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    resourceType: z.enum(ResourceType),
    name: z.string(),
    description: z.string().optional(),
    capacity: z.number().int().positive().optional(),
    isAvailable: z.boolean().default(true),

    location: z.string().optional(),
    amenities: z.array(z.string()).default([]),

    reservationDuration: z.number().int().positive().nullable().optional(),

    reservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().nullable(),

    // Calendar integration (optional)
    calendarId: z.string().nullable().optional(),
    syncEnabled: z.boolean().default(false),
    lastSyncAt: z.number().nullable().optional(),

    // Type-specific fields
    roomResource: RoomResourceSchema.nullable().optional(),
    rentalResource: RentalResourceSchema.nullable().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
});

/**
 * Schema for creating a new resource.
 * Omits auto-generated fields.
 */
export const CreateResourceSchema = ResourceSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing resource.
 * All fields are optional except id.
 */
export const UpdateResourceSchema = CreateResourceSchema.partial().safeExtend({
    id: z.string(),
});

export type Resource = z.infer<typeof ResourceSchema>;
export type CreateResource = z.infer<typeof CreateResourceSchema>;
export type UpdateResource = z.infer<typeof UpdateResourceSchema>;
