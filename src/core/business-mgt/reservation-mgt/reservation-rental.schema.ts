import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";
import { DepositStatus, ExternalRefSchema } from "../../type-definitions";

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
export enum RentalReservationStatus {
    UPCOMING = "upcoming",
    PICKUP_SOON = "pickup_soon",
    OUT = "out",
    RETURNED = "returned",
    OVERDUE = "overdue",
    CANCELLED = "cancelled",
}

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
export const RentalReservationPaymentSchema = z.object({
    rentalCharge: z.number().nonnegative().describe("Rental charge amount"),
    securityDeposit: z.number().nonnegative().describe("Security deposit amount"),
    depositStatus: z.enum(DepositStatus).describe("Security deposit status"),
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
export const ChecklistCompletionSchema = z.object({
    itemId: z.string().describe("Reference to ChecklistTemplateItem.id on the Resource"),
    completed: z.boolean().default(false).describe("Whether checklist item is completed"),
    completedAt: z.number().nullable().optional().describe("Completion timestamp"),
    completedBy: z.string().nullable().optional().describe("User ID who completed this item"),
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
export const WaiverRefSchema = z.object({
    waiverId: z.string().describe("Waiver document ID"),
    signedAt: z.number().nullable().optional().describe("Waiver signature timestamp"),
    status: z.enum(["required", "signed", "waived"]).default("required").describe("Waiver status"),
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
export const IDRefSchema = z.object({
    verificationId: z.string().describe("Identity verification reference ID"),
    provider: z.string().nullable().optional().describe("Verification provider"),
    verifiedAt: z.number().nullable().optional().describe("Verification timestamp"),
    status: z.enum(["required", "verified", "rejected"]).default("required").describe("Identity verification status"),
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
export const RentalReservationSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional().describe("Business location ID where the rental reservation is booked. Null applies when the reservation is not location-specific."),
    channelId: z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    customerId: z.string().describe("Customer ID"),
    resourceId: z.string().describe("Resource type ID"),
    startAt: z.number().describe("Rental start timestamp"),
    endAt: z.number().describe("Rental end timestamp"),
    actualReturnAt: z.number().nullable().optional().describe("Actual return timestamp"),
    tierId: z.string().describe("Rental tier ID (references ReservationSettings.rental.tiers)"),
    status: z.enum(RentalReservationStatus).default(RentalReservationStatus.UPCOMING).describe("Rental reservation lifecycle status"),
    payment: RentalReservationPaymentSchema.describe("Rental payment and deposit details"),
    checklistCompletions: z.array(ChecklistCompletionSchema).default([]).describe("Completed checklist items (references Resource.checklistTemplate)"),
    waiver: WaiverRefSchema.nullable().optional().describe("Waiver reference"),
    idVerification: IDRefSchema.nullable().optional().describe("Identity verification reference"),
    notes: z.string().nullable().optional().describe("Internal notes"),
    externalRef: ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced)"),
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
export const CreateRentalReservationSchema = RentalReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing rental reservation.
 * All fields optional except id.
 */
export const UpdateRentalReservationSchema = CreateRentalReservationSchema.partial().extend({
    id: z.string().describe("Unique identifier of the rental reservation to update."),
    // Re-declared without the base `.default()` so partial updates don't inject a status the caller never set
    status: z.enum(RentalReservationStatus).nullable().optional().describe("Rental reservation lifecycle status"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type RentalReservationPayment = z.infer<typeof RentalReservationPaymentSchema>;
export type ChecklistCompletion = z.infer<typeof ChecklistCompletionSchema>;
export type WaiverRef = z.infer<typeof WaiverRefSchema>;
export type IDRef = z.infer<typeof IDRefSchema>;
export type RentalReservation = z.infer<typeof RentalReservationSchema>;
export type CreateRentalReservation = z.infer<typeof CreateRentalReservationSchema>;
export type UpdateRentalReservation = z.infer<typeof UpdateRentalReservationSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Rental reservation filter options.
 * @interface RentalReservationFilters
 */
export interface RentalReservationFilters {
    /** Text search across rental reservation fields */
    search?: string;
    /** Filter by business location ID */
    locationId?: string;
    /** Filter by booking channel ID */
    channelId?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by rental resource ID */
    resourceId?: string;
    /** Filter by rental tier IDs */
    tierId?: string[];
    /** Filter by rental reservation statuses */
    status?: RentalReservationStatus[];
    /** Filter by security deposit statuses */
    depositStatus?: DepositStatus[];
    /** Filter by rental start timestamp range */
    dateRange?: { start?: number; end?: number };
    /** Filter by external source platform */
    externalSource?: string;
}

/**
 * Rental reservation sorting options.
 * @interface RentalReservationSorting
 */
export interface RentalReservationSorting {
    /** Field to sort by */
    field: "startAt" | "endAt" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Rental reservation query options.
 * @interface RentalReservationQueryOptions
 */
export interface RentalReservationQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: RentalReservationFilters;
    /** Optional sorting */
    sorting?: RentalReservationSorting;
}
