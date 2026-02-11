import z from "zod";
import { AppointmentStatus, CalendarProvider, ResourceType } from "../type-definitions";
/**
 * @fileoverview Service appointment schema definitions for managing appointment bookings.
 * @module business-mgt/service-appointment
 */
/**
 * Service appointment schema.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} customerId - Customer ID if registered
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
export declare const ServiceAppointmentSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    businessServiceId: z.ZodString;
    customerId: z.ZodString;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<typeof AppointmentStatus>>;
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields.
 */
export declare const CreateServiceAppointmentSchema: z.ZodObject<{
    customerId: z.ZodString;
    duration: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    totalPrice: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    startTime: z.ZodNumber;
    endTime: z.ZodOptional<z.ZodNumber>;
    depositPaid: z.ZodDefault<z.ZodNumber>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    businessServiceId: z.ZodString;
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service appointment.
 * All fields are optional except id.
 */
export declare const UpdateServiceAppointmentSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    totalPrice: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNumber>>>;
    startTime: z.ZodOptional<z.ZodNumber>;
    endTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    depositPaid: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    calendarId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    businessServiceId: z.ZodOptional<z.ZodString>;
    assignedUserAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarEventId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarProvider: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>>;
    id: z.ZodString;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type ServiceAppointment = z.infer<typeof ServiceAppointmentSchema>;
export type CreateServiceAppointment = z.infer<typeof CreateServiceAppointmentSchema>;
export type UpdateServiceAppointment = z.infer<typeof UpdateServiceAppointmentSchema>;
export interface ReservationFilters {
    search?: string;
    status?: AppointmentStatus[];
    reservationType?: ResourceType[];
    resourceId?: string;
    customerId?: string;
    isResourceReservation?: boolean;
    dateRange?: {
        start?: number;
        end?: number;
    };
}
export interface ReservationSorting {
    field: 'startTime' | 'endTime' | 'createdAt';
    direction: 'asc' | 'desc';
}
export interface ReservationQueryOptions {
    page: number;
    pageSize: number;
    filters?: ReservationFilters;
    sorting?: ReservationSorting;
}
