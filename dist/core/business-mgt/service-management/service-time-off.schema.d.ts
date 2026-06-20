import z from "zod";
import { ServiceProviderTimeOffType, ServiceProviderTimeOffStatus } from "../../type-definitions";
/**
 * @fileoverview Service Provider Time Off schema definitions.
 * @module business-mgt/service-time-off
 *
 * Time off records represent periods when service providers are unavailable.
 * Supports both recurring (weekly) and specific (one-time) time off entries.
 */
/**
 * Recurrence rule for recurring time off.
 * Defines which days of the week the time off applies.
 *
 * @typedef {Object} ServiceProviderTimeOffRecurrence
 * @property {string[]} dayOfWeek - Days of week (0=Sunday ... 6=Saturday)
 */
export declare const ServiceProviderTimeOffRecurrenceSchema: z.ZodObject<{
    dayOfWeek: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
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
export declare const ServiceProviderTimeOffSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    providerId: z.ZodString;
    type: z.ZodEnum<typeof ServiceProviderTimeOffType>;
    startDate: z.ZodNumber;
    endDate: z.ZodNumber;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof ServiceProviderTimeOffStatus>>;
    recurrence: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        dayOfWeek: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new service provider time off record.
 * Omits auto-generated fields.
 */
export declare const CreateServiceProviderTimeOffSchema: z.ZodObject<{
    type: z.ZodEnum<typeof ServiceProviderTimeOffType>;
    status: z.ZodDefault<z.ZodEnum<typeof ServiceProviderTimeOffStatus>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startDate: z.ZodNumber;
    endDate: z.ZodNumber;
    providerId: z.ZodString;
    recurrence: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        dayOfWeek: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing service provider time off record.
 * All fields optional except id (required).
 */
export declare const UpdateServiceProviderTimeOffSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof ServiceProviderTimeOffType>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof ServiceProviderTimeOffStatus>>>;
    reason: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    startDate: z.ZodOptional<z.ZodNumber>;
    endDate: z.ZodOptional<z.ZodNumber>;
    providerId: z.ZodOptional<z.ZodString>;
    recurrence: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        dayOfWeek: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type ServiceProviderTimeOffRecurrence = z.infer<typeof ServiceProviderTimeOffRecurrenceSchema>;
export type ServiceProviderTimeOff = z.infer<typeof ServiceProviderTimeOffSchema>;
export type CreateServiceProviderTimeOff = z.infer<typeof CreateServiceProviderTimeOffSchema>;
export type UpdateServiceProviderTimeOff = z.infer<typeof UpdateServiceProviderTimeOffSchema>;
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
