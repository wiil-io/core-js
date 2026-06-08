import z from "zod";
/**
 * @fileoverview Shared booking schema definitions used across services and reservations.
 * @module business-mgt/bookings-shared
 */
/**
 * Service deposit strategy options.
 *
 * @enum {string}
 */
export declare enum ServiceDepositStrategy {
    NONE = "NONE",
    FIXED = "FIXED",
    PERCENTAGE = "PERCENTAGE"
}
/**
 * Reservation type options.
 *
 * @enum {string}
 */
export declare enum ReservationType {
    Table = "TABLE",
    Room = "ROOM",
    Rental = "RENTAL",
    Other = "OTHER"
}
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
export declare const ServiceBookingRulesSchema: z.ZodObject<{
    onlineEnabled: z.ZodDefault<z.ZodBoolean>;
    existingOnly: z.ZodDefault<z.ZodBoolean>;
    requiresConsult: z.ZodDefault<z.ZodBoolean>;
    maxDaysOut: z.ZodDefault<z.ZodNumber>;
    minNoticeHours: z.ZodDefault<z.ZodNumber>;
    lateCancelHours: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type ServiceBookingRules = z.infer<typeof ServiceBookingRulesSchema>;
