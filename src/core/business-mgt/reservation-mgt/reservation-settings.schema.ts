import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";
import { ReservationSettingType } from "../../type-definitions";

/**
 * @fileoverview Reservation settings schema definitions.
 * @module business-mgt/reservation-mgt/reservation-settings
 */

// ============================================================================
// SETTINGS DETAIL SCHEMAS
// ============================================================================

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
export const RentalTierDefinitionSchema = z.object({
    id: z.string().describe("Tier ID"),
    name: z.string().describe("Display name (e.g., 'Half Day', '2 Hours')"),
    durationMinutes: z.number().int().positive().describe("Duration in minutes"),
    sortOrder: z.number().int().nonnegative().default(0).describe("Display order"),
});

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
export const TableReservationSettingsSchema = z.object({
    settingType: z.enum(ReservationSettingType).default(ReservationSettingType.CAPACITY).describe("Reservation mode: capacity-based or resource-specific"),
    defaultDurationMinutes: z.number().int().positive().default(90).describe("Default table reservation duration"),
    turnoverMinutes: z.number().int().nonnegative().default(15).describe("Buffer between reservations"),
    slotIntervalMinutes: z.number().int().positive().default(15).describe("Time intervals for available reservation slots"),
    maxPartySize: z.number().int().positive().nullable().optional().describe("Maximum party size allowed"),
    advanceBookingDays: z.number().int().positive().default(30).describe("How far ahead guests can book"),
});

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
export const RoomReservationSettingsSchema = z.object({
    checkInTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("15:00").describe("Default check-in time (HH:mm)"),
    checkOutTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("11:00").describe("Default check-out time (HH:mm)"),
    minStayNights: z.number().int().positive().default(1).describe("Minimum nights per booking"),
    maxStayNights: z.number().int().positive().nullable().optional().describe("Maximum nights per booking"),
    advanceBookingDays: z.number().int().positive().default(90).describe("How far ahead guests can book"),
});

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
export const RentalReservationSettingsSchema = z.object({
    tiers: z.array(RentalTierDefinitionSchema).default([]).describe("Available rental duration tiers"),
    requireWaiver: z.boolean().default(false).describe("Require waiver signature"),
    requireIdVerification: z.boolean().default(false).describe("Require ID verification"),
    defaultDepositPercent: z.number().nonnegative().max(100).nullable().optional().describe("Default security deposit percentage"),
});

// ============================================================================
// RESERVATION SETTINGS SCHEMA
// ============================================================================

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
export const ReservationSettingsSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID for location-specific overrides. Null applies to default reservation settings."),
    table: TableReservationSettingsSchema.nullable().optional().describe("Table reservation settings"),
    room: RoomReservationSettingsSchema.nullable().optional().describe("Room reservation settings"),
    rental: RentalReservationSettingsSchema.nullable().optional().describe("Rental reservation settings"),
    supportTableReservations: z.boolean().default(false).describe("Whether table reservations are supported at this location"),
    supportRoomReservations: z.boolean().default(false).describe("Whether room reservations are supported at this location"),
    supportRentalReservations: z.boolean().default(false).describe("Whether rental reservations are supported at this location"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating reservation settings.
 * Omits auto-generated fields.
 */
export const CreateReservationSettingsSchema = ReservationSettingsSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating reservation settings.
 * All fields optional except id.
 */
export const UpdateReservationSettingsSchema = CreateReservationSettingsSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the reservation settings record to update."),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RentalTierDefinition = z.infer<typeof RentalTierDefinitionSchema>;
export type TableReservationSettings = z.infer<typeof TableReservationSettingsSchema>;
export type RoomReservationSettings = z.infer<typeof RoomReservationSettingsSchema>;
export type RentalReservationSettings = z.infer<typeof RentalReservationSettingsSchema>;
export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
export type CreateReservationSettings = z.infer<typeof CreateReservationSettingsSchema>;
export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

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
