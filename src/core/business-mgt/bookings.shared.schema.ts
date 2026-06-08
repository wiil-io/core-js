import z from "zod";

/**
 * @fileoverview Shared booking schema definitions used across services and reservations.
 * @module business-mgt/bookings-shared
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Service deposit strategy options.
 *
 * @enum {string}
 */
export enum ServiceDepositStrategy {
    NONE = "NONE",
    FIXED = "FIXED",
    PERCENTAGE = "PERCENTAGE",
}

/**
 * Reservation type options.
 *
 * @enum {string}
 */
export enum ReservationType {
    Table = "TABLE",
    Room = "ROOM",
    Rental = "RENTAL",
    Other = "OTHER",
}

// ============================================================================
// SERVICE BOOKING RULES SCHEMA
// ============================================================================

/**
 * Service booking rules schema.
 * Configures online booking availability, customer restrictions, and cancellation policies.
 *
 * @typedef {Object} ServiceBookingRules
 * @property {boolean} onlineEnabled - Whether online booking is enabled
 * @property {boolean} existingOnly - Whether only existing customers can book
 * @property {boolean} requiresConsult - Whether a consultation is required before booking
 * @property {number} maxDaysOut - Max days in advance this can be booked
 * @property {number} minNoticeHours - Minimum booking notice in hours
 * @property {number} lateCancelHours - Late cancellation threshold in hours
 */
export const ServiceBookingRulesSchema = z.object({
    onlineEnabled: z.boolean().default(true).describe("Whether online booking is enabled"),
    existingOnly: z.boolean().default(false).describe("Whether only existing customers can book"),
    requiresConsult: z.boolean().default(false).describe("Whether a consultation is required before booking"),
    maxDaysOut: z.number().int().positive().default(30).describe("Max days in advance this can be booked"),
    minNoticeHours: z.number().int().nonnegative().default(0).describe("Minimum booking notice in hours"),
    lateCancelHours: z.number().int().nonnegative().default(24).describe("Late cancellation threshold in hours"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServiceBookingRules = z.infer<typeof ServiceBookingRulesSchema>;
