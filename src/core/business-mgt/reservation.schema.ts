import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { AppointmentStatus, ReservationSettingType, ResourceReservationDurationUnit, ResourceType } from "../type-definitions";

/**
 * @fileoverview Reservation schema definitions for managing resource reservations.
 * @module business-mgt/reservation
 */

/**
 * Reservation settings schema.
 *
 * @typedef {Object} ReservationSettings
 * @property {string} organizationId - Business account ID
 * @property {string} reservationType - Type of reservation (table, room, rentals, etc.)
 * @property {string} settingType - Type of reservation setting
 * @property {number} [defaultReservationDuration] - Default reservation duration
 * @property {string} [defaultReservationDurationUnit] - Unit of the default reservation duration
 * @property {boolean} isActive - Whether this reservation setting is active
 */
export const ReservationSettingsSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    reservationType: z.enum(ResourceType),
    settingType: z.enum(ReservationSettingType),

    defaultReservationDuration: z.number().int().positive().default(1).optional(),

    defaultReservationDurationUnit: z.enum(ResourceReservationDurationUnit).optional().default(ResourceReservationDurationUnit.HOURS),

    isActive: z.boolean().default(false),
});

/**
 * Schema for creating new reservation settings.
 * Omits auto-generated fields.
 */
export const CreateReservationSettingsSchema = ReservationSettingsSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating existing reservation settings.
 * All fields are optional except id.
 */
export const UpdateReservationSettingsSchema = CreateReservationSettingsSchema.partial().safeExtend({
    id: z.string(),
});

export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
export type CreateReservationSettings = z.infer<typeof CreateReservationSettingsSchema>;
export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;

/**
 * Reservation schema for managing bookings.
 *
 * @typedef {Object} Reservation
 * @property {string} organizationId - Business account ID
 * @property {string} reservationType - Type of reservation
 * @property {string} [resourceId] - ID of the reserved resource (table, room, etc.)
 * @property {string} customerId - Customer ID if registered
 * @property {string} [customerName] - Customer's full name
 * @property {string} [customerEmail] - Customer's email address
 * @property {number} startTime - Reservation start time as Unix timestamp
 * @property {number} [endTime] - Reservation end time as Unix timestamp
 * @property {number} [duration] - Duration based on resource type
 * @property {number} [personsNumber] - Number of people for the reservation
 * @property {number} [totalPrice] - Total price for the reservation
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current reservation status
 * @property {string} [notes] - Special requests or notes
 * @property {string} [cancelReason] - Reason for cancellation, if applicable
 * @property {boolean} isResourceReservation - Indicates if this reservation is for a specific resource
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 */
export const ReservationSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    reservationType: z.enum(ResourceType),
    resourceId: z.string().optional().nullable(),
    customerId: z.string(),
    customerName: z.string().optional(),
    customerEmail: z.email().optional(),
    startTime: z.number(),
    endTime: z.number().optional(),
    duration: z.number().nonnegative().optional(),
    personsNumber: z.number().int().nonnegative().optional(),
    totalPrice: z.number().nonnegative().optional(),
    depositPaid: z.number().nonnegative().default(0),
    status: z.enum(AppointmentStatus).default(AppointmentStatus.PENDING),
    notes: z.string().optional(),
    cancelReason: z.string().nullable().optional(),
    isResourceReservation: z.boolean().default(false),
    serviceConversationConfigId: z.string().nullable().optional(),
});

/**
 * Schema for creating a new reservation.
 * Omits auto-generated fields.
 */
export const CreateReservationSchema = ReservationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    cancelReason: true
});

/**
 * Schema for updating an existing reservation.
 * All fields are optional except id.
 */
export const UpdateReservationSchema = CreateReservationSchema.partial().safeExtend({
    id: z.string(),
    cancelReason: z.string().nullable().optional(),
});

export type Reservation = z.infer<typeof ReservationSchema>;
export type CreateReservation = z.infer<typeof CreateReservationSchema>;
export type UpdateReservation = z.infer<typeof UpdateReservationSchema>;
