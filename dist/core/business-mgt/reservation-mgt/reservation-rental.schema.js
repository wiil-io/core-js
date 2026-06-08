"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRentalReservationSchema = exports.CreateRentalReservationSchema = exports.RentalReservationSchema = exports.IDRefSchema = exports.WaiverRefSchema = exports.ChecklistCompletionSchema = exports.RentalReservationPaymentSchema = exports.RentalReservationStatus = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
/**
 * @fileoverview Rental reservation schema definitions.
 * @module business-mgt/reservation-mgt/rental-reservation
 */
// ============================================================================
// ENUMS
// ============================================================================
/**
 * Rental reservation lifecycle status.
 *
 * @enum {string}
 */
var RentalReservationStatus;
(function (RentalReservationStatus) {
    RentalReservationStatus["UPCOMING"] = "upcoming";
    RentalReservationStatus["PICKUP_SOON"] = "pickup_soon";
    RentalReservationStatus["OUT"] = "out";
    RentalReservationStatus["RETURNED"] = "returned";
    RentalReservationStatus["OVERDUE"] = "overdue";
    RentalReservationStatus["CANCELLED"] = "cancelled";
})(RentalReservationStatus || (exports.RentalReservationStatus = RentalReservationStatus = {}));
// ============================================================================
// RENTAL RESERVATION SUPPORTING SCHEMAS
// ============================================================================
/**
 * Rental reservation payment schema.
 * Captures rental charge and security deposit state for a rental booking.
 *
 * @typedef {Object} RentalReservationPayment
 * @property {number} rentalCharge - Rental charge amount
 * @property {number} securityDeposit - Security deposit amount
 * @property {DepositStatus} depositStatus - Security deposit status
 */
exports.RentalReservationPaymentSchema = zod_1.z.object({
    rentalCharge: zod_1.z.number().nonnegative().describe("Rental charge amount"),
    securityDeposit: zod_1.z.number().nonnegative().describe("Security deposit amount"),
    depositStatus: zod_1.z.enum(type_definitions_1.DepositStatus).describe("Security deposit status"),
});
/**
 * Checklist completion schema.
 * Tracks completion of checklist items defined on Resource.checklistTemplate.
 *
 * @typedef {Object} ChecklistCompletion
 * @property {string} itemId - Checklist template item ID
 * @property {boolean} completed - Whether the item is completed
 * @property {number} [completedAt] - Completion timestamp
 * @property {string} [completedBy] - User ID that completed the item
 */
exports.ChecklistCompletionSchema = zod_1.z.object({
    itemId: zod_1.z.string().describe("Reference to ChecklistTemplateItem.id on the Resource"),
    completed: zod_1.z.boolean().default(false).describe("Whether checklist item is completed"),
    completedAt: zod_1.z.number().nullable().optional().describe("Completion timestamp"),
    completedBy: zod_1.z.string().nullable().optional().describe("User ID who completed this item"),
});
/**
 * Waiver reference schema.
 * Captures waiver document status for rental reservations that require signed waivers.
 *
 * @typedef {Object} WaiverRef
 * @property {string} waiverId - Waiver document ID
 * @property {number} [signedAt] - Waiver signature timestamp
 * @property {string} status - Waiver status
 */
exports.WaiverRefSchema = zod_1.z.object({
    waiverId: zod_1.z.string().describe("Waiver document ID"),
    signedAt: zod_1.z.number().nullable().optional().describe("Waiver signature timestamp"),
    status: zod_1.z.enum(["required", "signed", "waived"]).default("required").describe("Waiver status"),
});
/**
 * Identity verification reference schema.
 * Captures the external identity verification record for a rental reservation.
 *
 * @typedef {Object} IDRef
 * @property {string} verificationId - Identity verification reference ID
 * @property {string} [provider] - Verification provider
 * @property {number} [verifiedAt] - Verification timestamp
 * @property {string} status - Identity verification status
 */
exports.IDRefSchema = zod_1.z.object({
    verificationId: zod_1.z.string().describe("Identity verification reference ID"),
    provider: zod_1.z.string().nullable().optional().describe("Verification provider"),
    verifiedAt: zod_1.z.number().nullable().optional().describe("Verification timestamp"),
    status: zod_1.z.enum(["required", "verified", "rejected"]).default("required").describe("Identity verification status"),
});
// ============================================================================
// RENTAL RESERVATION SCHEMA
// ============================================================================
/**
 * Rental reservation schema.
 * Represents a time-bounded rental booking with payment, waiver, and inspection state.
 *
 * @typedef {Object} RentalReservation
 * @property {string} [locationId] - Business location where the rental reservation is booked
 * @property {string} [channelId] - Channel that created or owns the booking
 * @property {string} customerId - Customer who owns the rental reservation
 * @property {string} resourceId - Rental resource being reserved
 * @property {number} startAt - Rental start timestamp
 * @property {number} endAt - Rental end timestamp
 * @property {number} [actualReturnAt] - Actual return timestamp
 * @property {string} tierId - Rental tier used for the booking
 * @property {RentalReservationStatus} status - Current rental reservation status
 * @property {RentalReservationPayment} payment - Rental payment and deposit details
 * @property {ChecklistCompletion[]} checklistCompletions - Completed checklist items
 * @property {WaiverRef} [waiver] - Waiver reference and status
 * @property {IDRef} [idVerification] - Identity verification reference and status
 * @property {string} [notes] - Internal staff notes
 * @property {Object} [externalRef] - External platform reference
 */
exports.RentalReservationSchema = base_schema_1.BaseModelSchema.safeExtend({
    locationId: zod_1.z.string().nullable().optional().describe("Business location ID where the rental reservation is booked. Null applies when the reservation is not location-specific."),
    channelId: zod_1.z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    customerId: zod_1.z.string().describe("Customer ID"),
    resourceId: zod_1.z.string().describe("Resource type ID"),
    startAt: zod_1.z.number().describe("Rental start timestamp"),
    endAt: zod_1.z.number().describe("Rental end timestamp"),
    actualReturnAt: zod_1.z.number().nullable().optional().describe("Actual return timestamp"),
    tierId: zod_1.z.string().describe("Rental tier ID (references ReservationSettings.rental.tiers)"),
    status: zod_1.z.enum(RentalReservationStatus).default(RentalReservationStatus.UPCOMING).describe("Rental reservation lifecycle status"),
    payment: exports.RentalReservationPaymentSchema.describe("Rental payment and deposit details"),
    checklistCompletions: zod_1.z.array(exports.ChecklistCompletionSchema).default([]).describe("Completed checklist items (references Resource.checklistTemplate)"),
    waiver: exports.WaiverRefSchema.nullable().optional().describe("Waiver reference"),
    idVerification: exports.IDRefSchema.nullable().optional().describe("Identity verification reference"),
    notes: zod_1.z.string().nullable().optional().describe("Internal notes"),
    externalRef: type_definitions_1.ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
}).superRefine((data, ctx) => {
    if (data.endAt <= data.startAt) {
        ctx.addIssue({
            code: "custom",
            path: ["endAt"],
            message: "endAt must be greater than startAt",
        });
    }
    if (data.actualReturnAt !== null && data.actualReturnAt !== undefined && data.actualReturnAt < data.startAt) {
        ctx.addIssue({
            code: "custom",
            path: ["actualReturnAt"],
            message: "actualReturnAt must be greater than or equal to startAt",
        });
    }
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new rental reservation.
 * Omits auto-generated fields.
 */
exports.CreateRentalReservationSchema = exports.RentalReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing rental reservation.
 * All fields optional except id.
 */
exports.UpdateRentalReservationSchema = exports.CreateRentalReservationSchema.partial().safeExtend({
    id: zod_1.z.string().describe("Unique identifier of the rental reservation to update."),
});
