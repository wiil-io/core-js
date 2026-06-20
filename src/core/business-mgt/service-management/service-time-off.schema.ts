import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import {
    ServiceProviderTimeOffType,
    ServiceProviderTimeOffStatus,
} from "../../type-definitions";

/**
 * @fileoverview Service Provider Time Off schema definitions.
 * @module business-mgt/service-time-off
 *
 * Time off records represent periods when service providers are unavailable.
 * Supports both recurring (weekly) and specific (one-time) time off entries.
 */

// ============================================================================
// RECURRENCE SCHEMA
// ============================================================================

/**
 * Recurrence rule for recurring time off.
 * Defines which days of the week the time off applies.
 *
 * @typedef {Object} ServiceProviderTimeOffRecurrence
 * @property {string[]} dayOfWeek - Days of week (0=Sunday ... 6=Saturday)
 */
export const ServiceProviderTimeOffRecurrenceSchema = z.object({
    dayOfWeek: z.array(z.string().regex(/^[0-6]$/, "Day must be 0-6")).min(1).describe("Recurring days of week (0=Sunday ... 6=Saturday)"),
}).describe("Recurrence rule for recurring time off");

// ============================================================================
// SERVICE PROVIDER TIME OFF SCHEMA
// ============================================================================

/**
 * Service Provider Time Off schema.
 * Represents a time period when a provider is unavailable for appointments.
 *
 * @typedef {Object} ServiceProviderTimeOff
 * @property {string} providerId - Provider ID (ServicePerson ID)
 * @property {string} type - Time-off type (recurring or specific)
 * @property {number} startDate - Start date/time as Unix epoch seconds
 * @property {number} endDate - End date/time as Unix epoch seconds
 * @property {string} [reason] - Optional reason for time off
 * @property {string} status - Approval status
 * @property {Object} [recurrence] - Recurrence rule for recurring time off
 */
export const ServiceProviderTimeOffSchema = BaseModelSchema.safeExtend({
    providerId: z.string().describe("Provider ID (ServicePerson ID)"),
    type: z.enum(ServiceProviderTimeOffType).describe("Time-off type (recurring or specific)"),
    startDate: z.number().int().positive().describe("Start date/time as Unix epoch seconds"),
    endDate: z.number().int().positive().describe("End date/time as Unix epoch seconds"),
    reason: z.string().nullable().optional().describe("Optional reason for time off"),
    status: z.enum(ServiceProviderTimeOffStatus).default(ServiceProviderTimeOffStatus.PENDING).describe("Approval status"),
    recurrence: ServiceProviderTimeOffRecurrenceSchema.nullable().optional().describe("Recurrence rule for recurring time off"),
}).superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
        ctx.addIssue({
            code: "custom",
            path: ["endDate"],
            message: "endDate must be greater than or equal to startDate",
        });
    }

    if (data.type === ServiceProviderTimeOffType.RECURRING && !data.recurrence) {
        ctx.addIssue({
            code: "custom",
            path: ["recurrence"],
            message: "recurrence is required when type is recurring",
        });
    }

    if (data.type === ServiceProviderTimeOffType.SPECIFIC && data.recurrence) {
        ctx.addIssue({
            code: "custom",
            path: ["recurrence"],
            message: "recurrence must be empty for specific time off",
        });
    }
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new service provider time off record.
 * Omits auto-generated fields.
 */
export const CreateServiceProviderTimeOffSchema = ServiceProviderTimeOffSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing service provider time off record.
 * All fields optional except id (required).
 */
export const UpdateServiceProviderTimeOffSchema = CreateServiceProviderTimeOffSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the ServiceProviderTimeOff to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ServiceProviderTimeOffRecurrence = z.infer<typeof ServiceProviderTimeOffRecurrenceSchema>;
export type ServiceProviderTimeOff = z.infer<typeof ServiceProviderTimeOffSchema>;
export type CreateServiceProviderTimeOff = z.infer<typeof CreateServiceProviderTimeOffSchema>;
export type UpdateServiceProviderTimeOff = z.infer<typeof UpdateServiceProviderTimeOffSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Service provider time off filter options.
 * @interface ServiceProviderTimeOffFilters
 */
export interface ServiceProviderTimeOffFilters {
    /** Filter by provider ID */
    providerId?: string;
    /** Filter by time-off type */
    type?: ServiceProviderTimeOffType;
    /** Filter by approval status */
    status?: ServiceProviderTimeOffStatus;
    /** Filter by start date (Unix epoch seconds) */
    fromDate?: number;
    /** Filter by end date (Unix epoch seconds) */
    toDate?: number;
}

/**
 * Service provider time off sorting options.
 * @interface ServiceProviderTimeOffSorting
 */
export interface ServiceProviderTimeOffSorting {
    /** Field to sort by */
    field: "startDate" | "endDate" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Service provider time off query options.
 * @interface ServiceProviderTimeOffQueryOptions
 */
export interface ServiceProviderTimeOffQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ServiceProviderTimeOffFilters;
    /** Optional sorting */
    sorting?: ServiceProviderTimeOffSorting;
}
