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
    roomNumber: z.string().describe("Unique room identifier or number (e.g., '101', 'Penthouse A'). Used for guest communication, housekeeping coordination, and reservation assignment."),
    roomType: z.string().describe("Room category or class (e.g., 'Standard Queen', 'Deluxe King', 'Executive Suite'). Used by AI Powered Services to match customer preferences with available room types."),
    pricePerNight: z.number().nonnegative().describe("Nightly rate for this room in the account's currency. Used for Reservation pricing calculations and dynamic rate management."),
    view: z.string().optional().describe("Room view classification (e.g., 'City View', 'Ocean View', 'Garden View'). Premium feature for upselling and guest preference matching."),
    bedType: z.string().optional().describe("Bed configuration (e.g., 'Queen', 'King', 'Twin', '2 Double'). Important for guest comfort and party size accommodation."),
    isSmoking: z.boolean().default(false).describe("Whether smoking is permitted in this room. Used for guest preference filtering and regulatory compliance. Defaults to false (non-smoking)."),
    accessibilityFeatures: z.string().optional().describe("ADA/accessibility accommodations available (e.g., 'Roll-in shower', 'Grab bars', 'Hearing accessible'). Critical for inclusive booking and regulatory compliance."),
});

/**
 * Rental resource schema for hourly rentals.
 *
 * @typedef {Object} RentalResource
 * @property {string} itemType - Type of rental item (e.g., Game Room, Conference Room)
 * @property {number} pricePerHour - Hourly rate for this rental
 */
export const RentalResourceSchema = z.object({
    itemType: z.string().describe("Rental category or equipment type (e.g., 'Game Room', 'Conference Room', 'Sports Equipment'). Used by AI Powered Services to categorize and present rental options."),
    pricePerHour: z.number().nonnegative().describe("Hourly rental rate in the account's currency. Used for Reservation pricing calculations for time-based bookings."),
});

/**
 * Main resource schema for managing reservable resources.
 *
 * @typedef {Object} Resource
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
    resourceType: z.enum(ResourceType).describe("Category of reservable resource: ROOM (hotel/accommodation), TABLE (restaurant seating), RENTAL (hourly equipment/space), or OTHER. Determines pricing model and booking workflow."),
    name: z.string().describe("Display name of the resource (e.g., 'Table 5', 'Conference Room A', 'Room 101'). Used by AI Powered Services when presenting reservation options to customers."),
    description: z.string().optional().describe("Detailed description of the resource including features, special characteristics, or usage guidelines. Helps customers make informed reservation decisions."),
    capacity: z.number().int().positive().optional().describe("Maximum occupancy or party size for this resource (e.g., table seats 4, room sleeps 2). Used by AI Powered Services to match customer group size with appropriate resources."),
    isAvailable: z.boolean().default(true).describe("Whether this resource is currently active and available for reservations. Disabled resources are hidden from customers and AI Powered Services. Defaults to true."),

    location: z.string().optional().describe("Physical location or placement (e.g., 'Window side', 'Third floor', 'Main dining area'). Helps with customer preferences and operational logistics."),
    amenities: z.array(z.string()).default([]).describe("List of available features or amenities (e.g., ['WiFi', 'Projector', 'Whiteboard'] for conference room). Used for filtering and customer preference matching. Defaults to empty array."),

    reservationDuration: z.number().int().positive().nullable().optional().describe("Default or standard reservation length in specified units. Used for availability slot calculations and customer guidance in Reservation workflow."),

    reservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().nullable().describe("Time unit for reservationDuration: HOURS, DAYS, or MINUTES. Determines how reservation pricing and availability are calculated."),

    // Calendar integration (optional)
    calendarId: z.string().nullable().optional().describe("External calendar system ID for real-time availability synchronization (Google Calendar, Outlook, etc.). Enables two-way booking sync."),
    syncEnabled: z.boolean().nullable().optional().default(false).describe("Whether automatic calendar synchronization is active for this resource. When true, availability updates from external calendar system. Defaults to false."),
    lastSyncAt: z.number().nullable().optional().describe("Unix timestamp of most recent calendar synchronization. Used for sync health monitoring and troubleshooting availability discrepancies."),

    // Type-specific fields
    roomResource: RoomResourceSchema.nullable().optional().describe("Hotel/accommodation-specific fields (room number, bed type, view, etc.). Only populated when resourceType is ROOM."),
    rentalResource: RentalResourceSchema.nullable().optional().describe("Hourly rental-specific fields (item type, hourly rate). Only populated when resourceType is RENTAL."),
    metadata: z.record(z.string(), z.any()).optional().describe("Extensible key-value storage for custom resource attributes not covered by standard fields. Provides flexibility for unique business requirements."),
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
