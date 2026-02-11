import { z } from "zod";
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
export declare const RoomResourceSchema: z.ZodObject<{
    roomNumber: z.ZodString;
    roomType: z.ZodString;
    pricePerNight: z.ZodNumber;
    view: z.ZodOptional<z.ZodString>;
    bedType: z.ZodOptional<z.ZodString>;
    isSmoking: z.ZodDefault<z.ZodBoolean>;
    accessibilityFeatures: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Rental resource schema for hourly rentals.
 *
 * @typedef {Object} RentalResource
 * @property {string} itemType - Type of rental item (e.g., Game Room, Conference Room)
 * @property {number} pricePerHour - Hourly rate for this rental
 */
export declare const RentalResourceSchema: z.ZodObject<{
    itemType: z.ZodString;
    pricePerHour: z.ZodNumber;
}, z.core.$strip>;
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
export declare const ResourceSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    resourceType: z.ZodEnum<typeof ResourceType>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    capacity: z.ZodOptional<z.ZodNumber>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    location: z.ZodOptional<z.ZodString>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    reservationDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservationDurationUnit: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    syncEnabled: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    lastSyncAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    roomResource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        roomNumber: z.ZodString;
        roomType: z.ZodString;
        pricePerNight: z.ZodNumber;
        view: z.ZodOptional<z.ZodString>;
        bedType: z.ZodOptional<z.ZodString>;
        isSmoking: z.ZodDefault<z.ZodBoolean>;
        accessibilityFeatures: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    rentalResource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        itemType: z.ZodString;
        pricePerHour: z.ZodNumber;
    }, z.core.$strip>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating a new resource.
 * Omits auto-generated fields.
 */
export declare const CreateResourceSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isAvailable: z.ZodDefault<z.ZodBoolean>;
    resourceType: z.ZodEnum<typeof ResourceType>;
    location: z.ZodOptional<z.ZodString>;
    amenities: z.ZodDefault<z.ZodArray<z.ZodString>>;
    reservationDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservationDurationUnit: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roomResource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        roomNumber: z.ZodString;
        roomType: z.ZodString;
        pricePerNight: z.ZodNumber;
        view: z.ZodOptional<z.ZodString>;
        bedType: z.ZodOptional<z.ZodString>;
        isSmoking: z.ZodDefault<z.ZodBoolean>;
        accessibilityFeatures: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    rentalResource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        itemType: z.ZodString;
        pricePerHour: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing resource.
 * All fields are optional except id.
 */
export declare const UpdateResourceSchema: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isAvailable: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    resourceType: z.ZodOptional<z.ZodEnum<typeof ResourceType>>;
    location: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    amenities: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString>>>;
    reservationDuration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    reservationDurationUnit: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>>;
    calendarId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    roomResource: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        roomNumber: z.ZodString;
        roomType: z.ZodString;
        pricePerNight: z.ZodNumber;
        view: z.ZodOptional<z.ZodString>;
        bedType: z.ZodOptional<z.ZodString>;
        isSmoking: z.ZodDefault<z.ZodBoolean>;
        accessibilityFeatures: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    rentalResource: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        itemType: z.ZodString;
        pricePerHour: z.ZodNumber;
    }, z.core.$strip>>>>;
    id: z.ZodString;
    syncEnabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type Resource = z.infer<typeof ResourceSchema>;
export type CreateResource = z.infer<typeof CreateResourceSchema>;
export type UpdateResource = z.infer<typeof UpdateResourceSchema>;
