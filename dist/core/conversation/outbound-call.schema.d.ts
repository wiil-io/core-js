import { z } from "zod";
import { CallRequestStatus, ScheduleType } from "../type-definitions";
/**
 * @fileoverview Outbound call request schema definitions.
 * @module conversation/outbound-call
 *
 * Outbound call requests represent scheduled or immediate AI-powered voice calls
 * to customers. Supports scheduling, retry logic, calling hours compliance, and
 * integration with agent configurations for AI behavior.
 */
/**
 * Calling hours configuration for outbound calls.
 *
 * This schema represents the **Time Window** configuration:
 *
 * ```
 * Call Request
 *      │
 *      ▼ restricted by
 * Calling Hours ← THIS SCHEMA
 *      │
 *      ▼ queued until
 * Next Available Window
 * ```
 *
 * Ensures compliance with TCPA regulations and respects customer preferences.
 *
 * @see BusinessCallRequestSchema - Uses this for time-restricted campaigns
 */
export declare const CallingHoursSchema: z.ZodObject<{
    startTime: z.ZodString;
    endTime: z.ZodString;
    daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type CallingHours = z.infer<typeof CallingHoursSchema>;
/**
 * Business call request schema.
 *
 * @typedef {Object} BusinessCallRequest
 * @property {string} [phoneConfigurationId] - Phone configuration for caller ID
 * @property {string} to - Destination phone number in E.164 format
 * @property {string} from - Caller ID phone number in E.164 format
 * @property {string} agentConfigurationId - Agent configuration for AI behavior
 * @property {string} [instructionConfigurationId] - Instruction override for call
 * @property {number} [maxDuration] - Maximum call duration in seconds
 * @property {string} scheduleType - Call timing strategy
 * @property {string} [serviceConversationConfigId] - Linked conversation record
 * @property {string} [timeZone] - IANA timezone identifier
 * @property {number} [scheduledAt] - Unix timestamp for scheduled execution
 * @property {Object} [callingHours] - Permitted calling window configuration
 * @property {number} [maxRetries] - Maximum retry attempts (0-5)
 * @property {number} [retryDelayMinutes] - Delay between retries in minutes
 * @property {string} status - Current call request status
 * @property {Object} [metadata] - Additional custom metadata
 */
export declare const BusinessCallRequestSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodString;
    from: z.ZodString;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxDuration: z.ZodOptional<z.ZodNumber>;
    scheduleType: z.ZodEnum<typeof ScheduleType>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timeZone: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    callingHours: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<typeof CallRequestStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Schema for creating a new call request.
 * Omits auto-generated fields.
 */
export declare const CreateCallRequestSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof CallRequestStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agentConfigurationId: z.ZodString;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    from: z.ZodString;
    to: z.ZodString;
    maxDuration: z.ZodOptional<z.ZodNumber>;
    scheduleType: z.ZodEnum<typeof ScheduleType>;
    timeZone: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodOptional<z.ZodNumber>;
    callingHours: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>>;
    maxRetries: z.ZodOptional<z.ZodNumber>;
    retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Schema for updating an existing call request.
 * All fields optional except id (required).
 */
export declare const UpdateCallRequestSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof CallRequestStatus>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    instructionConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    agentConfigurationId: z.ZodOptional<z.ZodString>;
    phoneConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    maxDuration: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    scheduleType: z.ZodOptional<z.ZodEnum<typeof ScheduleType>>;
    timeZone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    scheduledAt: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    callingHours: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        startTime: z.ZodString;
        endTime: z.ZodString;
        daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    maxRetries: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    retryDelayMinutes: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Call request result schema.
 * Response payload from telephony provider after initiating a call.
 */
export declare const CallRequestResultSchema: z.ZodObject<{
    success: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        to: z.ZodString;
        from: z.ZodString;
        agentConfigurationId: z.ZodString;
        instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maxDuration: z.ZodOptional<z.ZodNumber>;
        scheduleType: z.ZodEnum<typeof ScheduleType>;
        serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timeZone: z.ZodOptional<z.ZodString>;
        scheduledAt: z.ZodOptional<z.ZodNumber>;
        callingHours: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            startTime: z.ZodString;
            endTime: z.ZodString;
            daysOfWeek: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>>;
        maxRetries: z.ZodOptional<z.ZodNumber>;
        retryDelayMinutes: z.ZodOptional<z.ZodNumber>;
        status: z.ZodDefault<z.ZodEnum<typeof CallRequestStatus>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    error_message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type BusinessCallRequest = z.infer<typeof BusinessCallRequestSchema>;
export type CreateCallRequest = z.infer<typeof CreateCallRequestSchema>;
export type UpdateCallRequest = z.infer<typeof UpdateCallRequestSchema>;
export type CallRequestResult = z.infer<typeof CallRequestResultSchema>;
/**
 * Call request filter options.
 * @interface CallRequestFilters
 */
export interface CallRequestFilters {
    /** Text search across phone numbers */
    search?: string;
    /** Filter by call status */
    status?: CallRequestStatus;
    /** Filter by schedule type */
    scheduleType?: ScheduleType;
    /** Filter by agent configuration ID */
    agentConfigurationId?: string;
    /** Filter by date range (scheduledAt) */
    dateRange?: {
        start?: Date;
        end?: Date;
    };
}
/**
 * Call request sorting options.
 * @interface CallRequestSorting
 */
export interface CallRequestSorting {
    /** Field to sort by */
    field: "scheduledAt" | "status" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}
/**
 * Call request query options.
 * @interface CallRequestQueryOptions
 */
export interface CallRequestQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: CallRequestFilters;
    /** Optional sorting */
    sorting?: CallRequestSorting;
}
