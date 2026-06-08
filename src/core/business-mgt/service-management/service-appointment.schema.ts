import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import { AppointmentStatus, CalendarProvider, ExternalRefSchema } from "../../type-definitions";
import { OrderPricingSchema } from "../order.schema";
import { AppointmentAdditionalInfoSchema, DynamicFieldValueSchema } from "./appointment-additional-info.schema";

/**
 * @fileoverview Service Appointment schema definitions.
 * @module business-mgt/service-appointment
 *
 * Service appointments represent scheduled bookings for services.
 * Supports calendar integration, pricing breakdowns, and multi-channel bookings.
 */

// ============================================================================
// SERVICE APPOINTMENT SCHEMA
// ============================================================================

/**
 * Service Appointment schema.
 * Represents a scheduled appointment for a service.
 *
 * @typedef {Object} ServiceAppointment
 * @property {string} businessServiceId - ID of the service being booked
 * @property {string} [locationId] - Business location ID
 * @property {string} [channelId] - Channel ID for multi-channel bookings
 * @property {string} customerId - Customer ID
 * @property {string} [customerName] - Customer's full name
 * @property {string} [customerEmail] - Customer's email address
 * @property {number} startTime - Appointment start time (Unix timestamp)
 * @property {number} [endTime] - Appointment end time (Unix timestamp)
 * @property {number} [duration] - Duration in minutes
 * @property {number} [totalPrice] - Total price for the service
 * @property {Object} [pricing] - Detailed pricing breakdown
 * @property {number} depositPaid - Deposit amount paid
 * @property {string} status - Current appointment status
 * @property {string} [providerId] - Assigned provider ID (ServicePerson ID)
 * @property {string} [serviceProviderId] - Service-provider assignment ID
 * @property {number} [slotIndex] - Slot index for concurrent bookings
 * @property {string} [assignedUserAccountId] - User account managing the appointment
 * @property {string} [calendarId] - Calendar ID where appointment is stored
 * @property {string} [calendarEventId] - External calendar event ID
 * @property {string} [calendarProvider] - Calendar provider type
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [serviceConversationConfigId] - Configuration ID for service conversation
 * @property {Object} [externalRef] - External system reference
 */
export const ServiceAppointmentSchema = BaseModelSchema.safeExtend({
    businessServiceId: z.string().describe("ID of the service being booked"),
    locationId: z.string().nullable().optional().describe("Business location ID"),
    channelId: z.string().nullable().optional().describe("Channel ID for multi-channel bookings (e.g., web, marketplace, partner)"),
    customerId: z.string().describe("Customer ID if registered"),
    customerName: z.string().optional().describe("Customer's full name"),
    customerEmail: z.email().optional().describe("Customer's email address"),
    startTime: z.number().int().positive().describe("Appointment start time as Unix timestamp"),
    endTime: z.number().int().positive().optional().describe("Appointment end time as Unix timestamp"),
    duration: z.number().int().positive().default(30).optional().describe("Duration in minutes"),
    totalPrice: z.number().nonnegative().default(0).optional().describe("Total price for the service"),
    pricing: OrderPricingSchema.optional().describe("Detailed pricing breakdown for the appointment"),
    depositPaid: z.number().nonnegative().default(0).describe("Deposit amount paid"),
    status: z.enum(AppointmentStatus).default(AppointmentStatus.PENDING).describe("Current appointment status"),
    providerId: z.string().nullable().optional().describe("Assigned provider ID (ServicePerson ID)"),
    serviceProviderId: z.string().nullable().optional().describe("Service-provider assignment ID used for pricing/duration overrides"),
    slotIndex: z.number().int().nonnegative().nullable().optional().describe("Slot index for concurrent bookings (0-based, null = single booking)"),

    // Calendar Integration
    assignedUserAccountId: z.string().nullable().optional().describe("User account managing the appointment"),
    calendarId: z.string().nullable().optional().describe("Calendar ID where appointment is stored"),
    calendarEventId: z.string().nullable().optional().describe("External calendar event ID"),
    calendarProvider: z.enum(CalendarProvider).nullable().optional().describe("Calendar provider type"),
    cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
    serviceConversationConfigId: z.string().nullable().optional().describe("Configuration ID for service conversation"),
    externalRef: ExternalRefSchema.nullable().optional().describe("External system reference (when imported/synced from Calendly, Acuity, etc.)"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new service appointment.
 * Omits auto-generated fields and cancelReason (set during cancellation).
 */
export const CreateServiceAppointmentSchema = ServiceAppointmentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    cancelReason: true,
});

/**
 * Schema for updating an existing service appointment.
 * All fields optional except id (required). Includes cancelReason for cancellation updates.
 */
export const UpdateServiceAppointmentSchema = CreateServiceAppointmentSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServiceAppointment to update"),
    cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServiceAppointment = z.infer<typeof ServiceAppointmentSchema>;
export type CreateServiceAppointment = z.infer<typeof CreateServiceAppointmentSchema>;
export type UpdateServiceAppointment = z.infer<typeof UpdateServiceAppointmentSchema>;

// ============================================================================
// COMPOSITE SCHEMAS
// ============================================================================

/**
 * Schema for creating an appointment with custom field data.
 * Combines appointment creation with dynamic field values.
 */
export const CreateServiceAppointmentWithCustomDataSchema = z.object({
    appointment: CreateServiceAppointmentSchema.describe("Appointment data"),
    customData: z.record(z.string(), DynamicFieldValueSchema).default({}).describe("Custom field data captured during booking"),
});

export type CreateServiceAppointmentWithCustomData = z.infer<typeof CreateServiceAppointmentWithCustomDataSchema>;

/**
 * Schema for an appointment with its additional info.
 * Used for displaying complete appointment details.
 */
export const ServiceAppointmentWithAdditionalInfoSchema = z.object({
    appointment: ServiceAppointmentSchema.describe("Appointment data"),
    additionalInfo: AppointmentAdditionalInfoSchema.describe("Additional captured field values"),
});

export type ServiceAppointmentWithAdditionalInfo = z.infer<typeof ServiceAppointmentWithAdditionalInfoSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Service appointment filter options.
 * @interface ServiceAppointmentFilters
 */
export interface ServiceAppointmentFilters {
    /** Text search across customer name/email */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by channel ID */
    channelId?: string;
    /** Filter by appointment status(es) */
    status?: AppointmentStatus[];
    /** Filter by service ID */
    businessServiceId?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by assigned user account ID */
    assignedUserAccountId?: string;
    /** Filter by calendar provider(s) */
    calendarProvider?: CalendarProvider[];
    /** Filter by external source */
    externalSource?: string;
    /** Filter by date range (Unix timestamps) */
    dateRange?: { start?: number; end?: number };
}

/**
 * Service appointment sorting options.
 * @interface ServiceAppointmentSorting
 */
export interface ServiceAppointmentSorting {
    /** Field to sort by */
    field: "startTime" | "endTime" | "createdAt" | "customerName";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Service appointment query options.
 * @interface ServiceAppointmentQueryOptions
 */
export interface ServiceAppointmentQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServiceAppointmentFilters;
    /** Optional sorting */
    sorting?: ServiceAppointmentSorting;
}
