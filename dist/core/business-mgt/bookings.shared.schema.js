"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBookingRulesSchema = exports.ReservationType = exports.ServiceDepositStrategy = void 0;
const zod_1 = __importDefault(require("zod"));
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
var ServiceDepositStrategy;
(function (ServiceDepositStrategy) {
    ServiceDepositStrategy["NONE"] = "NONE";
    ServiceDepositStrategy["FIXED"] = "FIXED";
    ServiceDepositStrategy["PERCENTAGE"] = "PERCENTAGE";
})(ServiceDepositStrategy || (exports.ServiceDepositStrategy = ServiceDepositStrategy = {}));
/**
 * Reservation type options.
 *
 * @enum {string}
 */
var ReservationType;
(function (ReservationType) {
    ReservationType["Table"] = "TABLE";
    ReservationType["Room"] = "ROOM";
    ReservationType["Rental"] = "RENTAL";
    ReservationType["Other"] = "OTHER";
})(ReservationType || (exports.ReservationType = ReservationType = {}));
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
exports.ServiceBookingRulesSchema = zod_1.default.object({
    onlineEnabled: zod_1.default.boolean().default(true).describe("Whether online booking is enabled"),
    existingOnly: zod_1.default.boolean().default(false).describe("Whether only existing customers can book"),
    requiresConsult: zod_1.default.boolean().default(false).describe("Whether a consultation is required before booking"),
    maxDaysOut: zod_1.default.number().int().positive().default(30).describe("Max days in advance this can be booked"),
    minNoticeHours: zod_1.default.number().int().nonnegative().default(0).describe("Minimum booking notice in hours"),
    lateCancelHours: zod_1.default.number().int().nonnegative().default(24).describe("Late cancellation threshold in hours"),
});
