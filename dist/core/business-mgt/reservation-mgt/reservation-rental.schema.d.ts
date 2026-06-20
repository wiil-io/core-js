import { z } from "zod";
import { DepositStatus } from "../../type-definitions";
/**
 * @fileoverview Rental reservation schema definitions.
 * @module business-mgt/reservation-mgt/rental-reservation
 */
/**
 * Rental reservation lifecycle status.
 *
 * @enum {string}
 */
export declare enum RentalReservationStatus {
    UPCOMING = "upcoming",
    PICKUP_SOON = "pickup_soon",
    OUT = "out",
    RETURNED = "returned",
    OVERDUE = "overdue",
    CANCELLED = "cancelled"
}
/**
 * Rental reservation payment schema.
 * Captures rental charge and security deposit state for a rental booking.
 *
 * @typedef {Object} RentalReservationPayment
 * @property {number} rentalCharge - Rental charge amount
 * @property {number} securityDeposit - Security deposit amount
 * @property {DepositStatus} depositStatus - Security deposit status
 */
export declare const RentalReservationPaymentSchema: z.ZodObject<{
    rentalCharge: z.ZodNumber;
    securityDeposit: z.ZodNumber;
    depositStatus: z.ZodEnum<typeof DepositStatus>;
}, z.core.$strip>;
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
export declare const ChecklistCompletionSchema: z.ZodObject<{
    itemId: z.ZodString;
    completed: z.ZodDefault<z.ZodBoolean>;
    completedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    completedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Waiver reference schema.
 * Captures waiver document status for rental reservations that require signed waivers.
 *
 * @typedef {Object} WaiverRef
 * @property {string} waiverId - Waiver document ID
 * @property {number} [signedAt] - Waiver signature timestamp
 * @property {string} status - Waiver status
 */
export declare const WaiverRefSchema: z.ZodObject<{
    waiverId: z.ZodString;
    signedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodDefault<z.ZodEnum<{
        required: "required";
        signed: "signed";
        waived: "waived";
    }>>;
}, z.core.$strip>;
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
export declare const IDRefSchema: z.ZodObject<{
    verificationId: z.ZodString;
    provider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodDefault<z.ZodEnum<{
        rejected: "rejected";
        required: "required";
        verified: "verified";
    }>>;
}, z.core.$strip>;
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
export declare const RentalReservationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    resourceId: z.ZodString;
    startAt: z.ZodNumber;
    endAt: z.ZodNumber;
    actualReturnAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tierId: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<typeof RentalReservationStatus>>;
    payment: z.ZodObject<{
        rentalCharge: z.ZodNumber;
        securityDeposit: z.ZodNumber;
        depositStatus: z.ZodEnum<typeof DepositStatus>;
    }, z.core.$strip>;
    checklistCompletions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        itemId: z.ZodString;
        completed: z.ZodDefault<z.ZodBoolean>;
        completedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        completedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    waiver: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        waiverId: z.ZodString;
        signedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            required: "required";
            signed: "signed";
            waived: "waived";
        }>>;
    }, z.core.$strip>>>;
    idVerification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        verificationId: z.ZodString;
        provider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            rejected: "rejected";
            required: "required";
            verified: "verified";
        }>>;
    }, z.core.$strip>>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new rental reservation.
 * Omits auto-generated fields.
 */
export declare const CreateRentalReservationSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof RentalReservationStatus>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customerId: z.ZodString;
    channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalRef: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    resourceId: z.ZodString;
    startAt: z.ZodNumber;
    endAt: z.ZodNumber;
    actualReturnAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tierId: z.ZodString;
    payment: z.ZodObject<{
        rentalCharge: z.ZodNumber;
        securityDeposit: z.ZodNumber;
        depositStatus: z.ZodEnum<typeof DepositStatus>;
    }, z.core.$strip>;
    checklistCompletions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        itemId: z.ZodString;
        completed: z.ZodDefault<z.ZodBoolean>;
        completedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        completedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    waiver: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        waiverId: z.ZodString;
        signedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            required: "required";
            signed: "signed";
            waived: "waived";
        }>>;
    }, z.core.$strip>>>;
    idVerification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        verificationId: z.ZodString;
        provider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            rejected: "rejected";
            required: "required";
            verified: "verified";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing rental reservation.
 * All fields optional except id.
 */
export declare const UpdateRentalReservationSchema: z.ZodObject<{
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customerId: z.ZodOptional<z.ZodString>;
    channelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    externalRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        externalId: z.ZodString;
        source: z.ZodString;
        url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
        syncedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    resourceId: z.ZodOptional<z.ZodString>;
    startAt: z.ZodOptional<z.ZodNumber>;
    endAt: z.ZodOptional<z.ZodNumber>;
    actualReturnAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    tierId: z.ZodOptional<z.ZodString>;
    payment: z.ZodOptional<z.ZodObject<{
        rentalCharge: z.ZodNumber;
        securityDeposit: z.ZodNumber;
        depositStatus: z.ZodEnum<typeof DepositStatus>;
    }, z.core.$strip>>;
    checklistCompletions: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        itemId: z.ZodString;
        completed: z.ZodDefault<z.ZodBoolean>;
        completedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        completedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    waiver: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        waiverId: z.ZodString;
        signedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            required: "required";
            signed: "signed";
            waived: "waived";
        }>>;
    }, z.core.$strip>>>>;
    idVerification: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        verificationId: z.ZodString;
        provider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verifiedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodDefault<z.ZodEnum<{
            rejected: "rejected";
            required: "required";
            verified: "verified";
        }>>;
    }, z.core.$strip>>>>;
    id: z.ZodString;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof RentalReservationStatus>>>;
}, z.core.$strip>;
export type RentalReservationPayment = z.infer<typeof RentalReservationPaymentSchema>;
export type ChecklistCompletion = z.infer<typeof ChecklistCompletionSchema>;
export type WaiverRef = z.infer<typeof WaiverRefSchema>;
export type IDRef = z.infer<typeof IDRefSchema>;
export type RentalReservation = z.infer<typeof RentalReservationSchema>;
export type CreateRentalReservation = z.infer<typeof CreateRentalReservationSchema>;
export type UpdateRentalReservation = z.infer<typeof UpdateRentalReservationSchema>;
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
    dateRange?: {
        start?: number;
        end?: number;
    };
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
