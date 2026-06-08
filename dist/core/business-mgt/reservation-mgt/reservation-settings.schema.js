"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationSettingsSchema = exports.CreateReservationSettingsSchema = exports.ReservationSettingsSchema = exports.RentalReservationSettingsSchema = exports.RoomReservationSettingsSchema = exports.TableReservationSettingsSchema = exports.RentalTierDefinitionSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
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
exports.RentalTierDefinitionSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Tier ID"),
    name: zod_1.z.string().describe("Display name (e.g., 'Half Day', '2 Hours')"),
    durationMinutes: zod_1.z.number().int().positive().describe("Duration in minutes"),
    sortOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order"),
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
exports.TableReservationSettingsSchema = zod_1.z.object({
    settingType: zod_1.z.enum(type_definitions_1.ReservationSettingType).default(type_definitions_1.ReservationSettingType.CAPACITY).describe("Reservation mode: capacity-based or resource-specific"),
    defaultDurationMinutes: zod_1.z.number().int().positive().default(90).describe("Default table reservation duration"),
    turnoverMinutes: zod_1.z.number().int().nonnegative().default(15).describe("Buffer between reservations"),
    slotIntervalMinutes: zod_1.z.number().int().positive().default(15).describe("Time intervals for available reservation slots"),
    maxPartySize: zod_1.z.number().int().positive().nullable().optional().describe("Maximum party size allowed"),
    advanceBookingDays: zod_1.z.number().int().positive().default(30).describe("How far ahead guests can book"),
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
exports.RoomReservationSettingsSchema = zod_1.z.object({
    checkInTime: zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("15:00").describe("Default check-in time (HH:mm)"),
    checkOutTime: zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("11:00").describe("Default check-out time (HH:mm)"),
    minStayNights: zod_1.z.number().int().positive().default(1).describe("Minimum nights per booking"),
    maxStayNights: zod_1.z.number().int().positive().nullable().optional().describe("Maximum nights per booking"),
    advanceBookingDays: zod_1.z.number().int().positive().default(90).describe("How far ahead guests can book"),
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
exports.RentalReservationSettingsSchema = zod_1.z.object({
    tiers: zod_1.z.array(exports.RentalTierDefinitionSchema).default([]).describe("Available rental duration tiers"),
    requireWaiver: zod_1.z.boolean().default(false).describe("Require waiver signature"),
    requireIdVerification: zod_1.z.boolean().default(false).describe("Require ID verification"),
    defaultDepositPercent: zod_1.z.number().nonnegative().max(100).nullable().optional().describe("Default security deposit percentage"),
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
exports.ReservationSettingsSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID for location-specific overrides. Null applies to default reservation settings."),
    table: exports.TableReservationSettingsSchema.nullable().optional().describe("Table reservation settings"),
    room: exports.RoomReservationSettingsSchema.nullable().optional().describe("Room reservation settings"),
    rental: exports.RentalReservationSettingsSchema.nullable().optional().describe("Rental reservation settings"),
    supportTableReservations: zod_1.z.boolean().default(false).describe("Whether table reservations are supported at this location"),
    supportRoomReservations: zod_1.z.boolean().default(false).describe("Whether room reservations are supported at this location"),
    supportRentalReservations: zod_1.z.boolean().default(false).describe("Whether rental reservations are supported at this location"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating reservation settings.
 * Omits auto-generated fields.
 */
exports.CreateReservationSettingsSchema = exports.ReservationSettingsSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating reservation settings.
 * All fields optional except id.
 */
exports.UpdateReservationSettingsSchema = exports.CreateReservationSettingsSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the reservation settings record to update."),
});
