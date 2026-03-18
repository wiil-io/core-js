import { z } from "zod";
import { CallRequestStatus, ScheduleType } from "../type-definitions";
/**
 * @fileoverview Business service configuration schema definitions.
 * @module conversation/outbound-call
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
    createdBy: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    deletedAt: z.ZodOptional<z.ZodNumber>;
    deletedBy: z.ZodOptional<z.ZodString>;
    uniqueKey: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
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
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export declare const CreateCallRequestSchema: z.ZodObject<{
    status: z.ZodDefault<z.ZodEnum<typeof CallRequestStatus>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agentConfigurationId: z.ZodString;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    to: z.ZodString;
    from: z.ZodString;
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
export type BusinessCallRequest = z.infer<typeof BusinessCallRequestSchema>;
export type CreateCallRequest = z.infer<typeof CreateCallRequestSchema>;
