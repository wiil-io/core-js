import z from "zod";
import { BaseModelSchema } from "../base.schema";
import { AppointmentStatus, CalendarProvider } from "../type-definitions";

/**
 * @fileoverview Service appointment schema definitions for managing appointment bookings.
 * @module business-mgt/service-appointment
 */

/**
 * Service appointment schema.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} organizationId - Business account ID
 * @property {string} customerId - Customer ID if registered
 * @property {string} [customerName] - Customer's full name
 * @property {string} [customerEmail] - Customer's email address
 * @property {number} startTime - Appointment start time as Unix timestamp
 * @property {number} [endTime] - Appointment end time as Unix timestamp
 * @property {number} duration - Duration in minutes
 * @property {number} totalPrice - Total price for the service
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current appointment status
 * @property {string} [assignedUserAccountId] - User account managing the appointment
 * @property {string} [calendarId] - Calendar ID where appointment is stored
 * @property {string} [calendarEventId] - External calendar event ID
 * @property {string} [calendarProvider] - Calendar provider type
 * @property {string} [cancelReason] - Reason for cancellation, if applicable
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 */
export const ServiceAppointmentSchema = BaseModelSchema.safeExtend({
    businessServiceId: z.string(),
    organizationId: z.string(),
    customerId: z.string(),
    customerName: z.string().optional(),
    customerEmail: z.email().optional(),
    startTime: z.number(),
    endTime: z.number().optional(),
    duration: z.number().int().positive().default(30).optional(),
    totalPrice: z.number().nonnegative().default(0).optional(),
    depositPaid: z.number().nonnegative().default(0),
    status: z.enum(AppointmentStatus).default(AppointmentStatus.PENDING),

    // Calendar Integration
    assignedUserAccountId: z.string().nullable().optional(),
    calendarId: z.string().nullable().optional(),
    calendarEventId: z.string().nullable().optional(),
    calendarProvider: z.enum(CalendarProvider).nullable().optional(),
    cancelReason: z.string().nullable().optional(),
    serviceConversationConfigId: z.string().nullable().optional(),
});

/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields.
 */
export const CreateServiceAppointmentSchema = ServiceAppointmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    cancelReason: true
});

/**
 * Schema for updating an existing service appointment.
 * All fields are optional except id.
 */
export const UpdateServiceAppointmentSchema = CreateServiceAppointmentSchema.partial().safeExtend({
    id: z.string(),
    cancelReason: z.string().nullable().optional(),
});

export type ServiceAppointment = z.infer<typeof ServiceAppointmentSchema>;
export type CreateServiceAppointment = z.infer<typeof CreateServiceAppointmentSchema>;
export type UpdateServiceAppointment = z.infer<typeof UpdateServiceAppointmentSchema>;
