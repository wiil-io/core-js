import { z } from "zod";
import { ReservationSettingType } from "../../type-definitions";
/**
 * @fileoverview Reservation settings schema definitions.
 * @module business-mgt/reservation-mgt/reservation-settings
 */
/**
 * Rental tier definition schema.
 * Defines an available rental duration tier for reservation pricing and slot generation.
 *
 * @typedef {Object} RentalTierDefinition
 * @property {string} id - Tier ID
 * @property {string} name - Display name for the tier
 * @property {number} durationMinutes - Duration in minutes
 * @property {number} sortOrder - Display order for tier lists
 */
export declare const RentalTierDefinitionSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    durationMinutes: z.ZodNumber;
    sortOrder: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Table reservation settings schema.
 * Configures slot duration, turnover, party limits, and booking window for table reservations.
 *
 * @typedef {Object} TableReservationSettings
 * @property {ReservationSettingType} settingType - Table reservation mode
 * @property {number} defaultDurationMinutes - Default table reservation duration
 * @property {number} turnoverMinutes - Buffer between reservations
 * @property {number} slotIntervalMinutes - Slot interval for availability generation
 * @property {number} [maxPartySize] - Maximum party size allowed
 * @property {number} advanceBookingDays - Number of days ahead that guests can book
 */
export declare const TableReservationSettingsSchema: z.ZodObject<{
    settingType: z.ZodDefault<z.ZodEnum<typeof ReservationSettingType>>;
    defaultDurationMinutes: z.ZodDefault<z.ZodNumber>;
    turnoverMinutes: z.ZodDefault<z.ZodNumber>;
    slotIntervalMinutes: z.ZodDefault<z.ZodNumber>;
    maxPartySize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    advanceBookingDays: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Room reservation settings schema.
 * Configures stay length, check-in/check-out defaults, and booking window for room reservations.
 *
 * @typedef {Object} RoomReservationSettings
 * @property {string} checkInTime - Default check-in time in HH:mm format
 * @property {string} checkOutTime - Default check-out time in HH:mm format
 * @property {number} minStayNights - Minimum nights per booking
 * @property {number} [maxStayNights] - Maximum nights per booking
 * @property {number} advanceBookingDays - Number of days ahead that guests can book
 */
export declare const RoomReservationSettingsSchema: z.ZodObject<{
    checkInTime: z.ZodDefault<z.ZodString>;
    checkOutTime: z.ZodDefault<z.ZodString>;
    minStayNights: z.ZodDefault<z.ZodNumber>;
    maxStayNights: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    advanceBookingDays: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Rental reservation settings schema.
 * Configures rental tiers, waiver requirements, identity verification, and deposits.
 *
 * @typedef {Object} RentalReservationSettings
 * @property {RentalTierDefinition[]} tiers - Available rental duration tiers
 * @property {boolean} requireWaiver - Whether waiver signature is required
 * @property {boolean} requireIdVerification - Whether identity verification is required
 * @property {number} [defaultDepositPercent] - Default security deposit percentage
 */
export declare const RentalReservationSettingsSchema: z.ZodObject<{
    tiers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        durationMinutes: z.ZodNumber;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    requireWaiver: z.ZodDefault<z.ZodBoolean>;
    requireIdVerification: z.ZodDefault<z.ZodBoolean>;
    defaultDepositPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
/**
 * Reservation settings schema.
 * Stores location-level reservation configuration for table, room, and rental bookings.
 *
 * @typedef {Object} ReservationSettings
 * @property {string} [locationId] - Business location for these settings
 * @property {TableReservationSettings} [table] - Table reservation settings
 * @property {RoomReservationSettings} [room] - Room reservation settings
 * @property {RentalReservationSettings} [rental] - Rental reservation settings
 * @property {boolean} supportTableReservations - Whether table reservations are supported
 * @property {boolean} supportRoomReservations - Whether room reservations are supported
 * @property {boolean} supportRentalReservations - Whether rental reservations are supported
 */
export declare const ReservationSettingsSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    table: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        settingType: z.ZodDefault<z.ZodEnum<typeof ReservationSettingType>>;
        defaultDurationMinutes: z.ZodDefault<z.ZodNumber>;
        turnoverMinutes: z.ZodDefault<z.ZodNumber>;
        slotIntervalMinutes: z.ZodDefault<z.ZodNumber>;
        maxPartySize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    room: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        checkInTime: z.ZodDefault<z.ZodString>;
        checkOutTime: z.ZodDefault<z.ZodString>;
        minStayNights: z.ZodDefault<z.ZodNumber>;
        maxStayNights: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    rental: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        tiers: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            durationMinutes: z.ZodNumber;
            sortOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        requireWaiver: z.ZodDefault<z.ZodBoolean>;
        requireIdVerification: z.ZodDefault<z.ZodBoolean>;
        defaultDepositPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    supportTableReservations: z.ZodDefault<z.ZodBoolean>;
    supportRoomReservations: z.ZodDefault<z.ZodBoolean>;
    supportRentalReservations: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for creating reservation settings.
 * Omits auto-generated fields.
 */
export declare const CreateReservationSettingsSchema: z.ZodObject<{
    table: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        settingType: z.ZodDefault<z.ZodEnum<typeof ReservationSettingType>>;
        defaultDurationMinutes: z.ZodDefault<z.ZodNumber>;
        turnoverMinutes: z.ZodDefault<z.ZodNumber>;
        slotIntervalMinutes: z.ZodDefault<z.ZodNumber>;
        maxPartySize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    room: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        checkInTime: z.ZodDefault<z.ZodString>;
        checkOutTime: z.ZodDefault<z.ZodString>;
        minStayNights: z.ZodDefault<z.ZodNumber>;
        maxStayNights: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    rental: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        tiers: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            durationMinutes: z.ZodNumber;
            sortOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        requireWaiver: z.ZodDefault<z.ZodBoolean>;
        requireIdVerification: z.ZodDefault<z.ZodBoolean>;
        defaultDepositPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supportTableReservations: z.ZodDefault<z.ZodBoolean>;
    supportRoomReservations: z.ZodDefault<z.ZodBoolean>;
    supportRentalReservations: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating reservation settings.
 * All fields optional except id.
 */
export declare const UpdateReservationSettingsSchema: z.ZodObject<{
    table: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        settingType: z.ZodDefault<z.ZodEnum<typeof ReservationSettingType>>;
        defaultDurationMinutes: z.ZodDefault<z.ZodNumber>;
        turnoverMinutes: z.ZodDefault<z.ZodNumber>;
        slotIntervalMinutes: z.ZodDefault<z.ZodNumber>;
        maxPartySize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    room: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        checkInTime: z.ZodDefault<z.ZodString>;
        checkOutTime: z.ZodDefault<z.ZodString>;
        minStayNights: z.ZodDefault<z.ZodNumber>;
        maxStayNights: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        advanceBookingDays: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>>;
    rental: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        tiers: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            durationMinutes: z.ZodNumber;
            sortOrder: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>>;
        requireWaiver: z.ZodDefault<z.ZodBoolean>;
        requireIdVerification: z.ZodDefault<z.ZodBoolean>;
        defaultDepositPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    supportTableReservations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    supportRoomReservations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    supportRentalReservations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type RentalTierDefinition = z.infer<typeof RentalTierDefinitionSchema>;
export type TableReservationSettings = z.infer<typeof TableReservationSettingsSchema>;
export type RoomReservationSettings = z.infer<typeof RoomReservationSettingsSchema>;
export type RentalReservationSettings = z.infer<typeof RentalReservationSettingsSchema>;
export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
export type CreateReservationSettings = z.infer<typeof CreateReservationSettingsSchema>;
export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;
/**
 * Reservation settings filter options.
 * @interface ReservationSettingsFilters
 */
export interface ReservationSettingsFilters {
    /** Filter by business location ID */
    locationId?: string;
}
/**
 * Reservation settings query options.
 * @interface ReservationSettingsQueryOptions
 */
export interface ReservationSettingsQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ReservationSettingsFilters;
}
