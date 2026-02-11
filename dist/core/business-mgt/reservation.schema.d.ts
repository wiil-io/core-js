import { z } from "zod";
import { AppointmentStatus, ReservationSettingType, ResourceReservationDurationUnit, ResourceType } from "../type-definitions";
/**
 * @fileoverview Reservation schema definitions for managing resource reservations.
 * @module business-mgt/reservation
 */
/**
 * Reservation settings schema.
 *
 * @typedef {Object} ReservationSettings
 * @property {string} reservationType - Type of reservation (table, room, rentals, etc.)
 * @property {string} settingType - Type of reservation setting
 * @property {number} [defaultReservationDuration] - Default reservation duration
 * @property {string} [defaultReservationDurationUnit] - Unit of the default reservation duration
 * @property {boolean} isActive - Whether this reservation setting is active
 */
export declare const ReservationSettingsSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    reservationType: z.ZodEnum<typeof ResourceType>;
    settingType: z.ZodEnum<typeof ReservationSettingType>;
    defaultReservationDuration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    defaultReservationDurationUnit: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating existing reservation settings.
 * All fields are optional except id.
 */
export declare const UpdateReservationSettingsSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    updatedAt: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    reservationType: z.ZodOptional<z.ZodEnum<typeof ResourceType>>;
    settingType: z.ZodOptional<z.ZodEnum<typeof ReservationSettingType>>;
    defaultReservationDuration: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    defaultReservationDurationUnit: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof ResourceReservationDurationUnit>>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ReservationSettings = z.infer<typeof ReservationSettingsSchema>;
export type UpdateReservationSettings = z.infer<typeof UpdateReservationSettingsSchema>;
/**
 * Reservation schema for managing bookings.
 *
 * @typedef {Object} Reservation
 * @property {string} reservationType - Type of reservation
 * @property {string} [resourceId] - ID of the reserved resource (table, room, etc.)
 * @property {string} customerId - Customer ID if registered
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
export declare const ReservationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    reservationType: z.ZodEnum<typeof ResourceType>;
    resourceId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    customerId: z.ZodString;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    personsNumber: z.ZodOptional<z.ZodNumber>;
    totalPrice: z.ZodOptional<z.ZodNumber>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
    notes: z.ZodOptional<z.ZodString>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isResourceReservation: z.ZodDefault<z.ZodBoolean>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new reservation.
 * Omits auto-generated fields.
 */
export declare const CreateReservationSchema: z.ZodObject<{
    customerId: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    totalPrice: z.ZodOptional<z.ZodNumber>;
    reservationType: z.ZodEnum<typeof ResourceType>;
    resourceId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    personsNumber: z.ZodOptional<z.ZodNumber>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    isResourceReservation: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for updating an existing reservation.
 * All fields are optional except id.
 */
export declare const UpdateReservationSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    duration: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    totalPrice: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    reservationType: z.ZodOptional<z.ZodEnum<typeof ResourceType>>;
    resourceId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    startTime: z.ZodOptional<z.ZodNumber>;
    endTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    personsNumber: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    depositPaid: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isResourceReservation: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Reservation = z.infer<typeof ReservationSchema>;
export type CreateReservation = z.infer<typeof CreateReservationSchema>;
export type UpdateReservation = z.infer<typeof UpdateReservationSchema>;
