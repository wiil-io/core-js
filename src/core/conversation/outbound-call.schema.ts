import { z } from "zod";
import { CallRequestStatus, ScheduleType } from "../type-definitions";
import { BaseModelSchema } from "../base.schema";

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
export const CallingHoursSchema = z.object({
    startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).describe("Start time for permitted calling window in HH:MM 24-hour format (e.g., '09:00' for 9 AM). Calls before this time are queued until the window opens."),
    endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).describe("End time for permitted calling window in HH:MM 24-hour format (e.g., '17:00' for 5 PM). Calls after this time are queued until the next available window."),
    daysOfWeek: z.array(z.number().int().min(0).max(6)).default([1, 2, 3, 4, 5]).describe("Array of permitted days of week for calling (0=Sunday through 6=Saturday). Defaults to weekdays [1,2,3,4,5]. Use [0,1,2,3,4,5,6] for all days."),
});

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
export const BusinessCallRequestSchema = BaseModelSchema.safeExtend({
    phoneConfigurationId: z.string().nullable().optional().describe("Phone configuration ID for caller ID display and telephony routing settings (references PhoneConfiguration). When omitted, uses organization default."),
    to: z.string().min(1, "Destination phone number is required").describe("Destination phone number in E.164 international format (e.g., '+12125551234'). Must be a valid, dialable phone number for outbound calling."),
    from: z.string().min(1, "Caller ID is required").describe("Caller ID phone number in E.164 format displayed to the recipient. Must be a verified number owned by the organization in PhoneConfiguration."),
    agentConfigurationId: z.string().min(1, "Agent configuration is required").describe("Agent configuration ID defining AI behavior, persona, and capabilities for this call (references AgentConfiguration). Determines how the AI handles the conversation."),
    instructionConfigurationId: z.string().nullable().optional().describe("Optional instruction configuration ID to override agent defaults with call-specific behavioral guidelines and prompts (references InstructionConfiguration)."),
    maxDuration: z.number().int().positive().optional().describe("Maximum call duration in seconds to prevent runaway calls. Call automatically terminates with graceful goodbye when limit is reached."),
    scheduleType: z.enum(ScheduleType).describe("Call timing strategy: 'immediate' executes ASAP within calling hours, 'scheduled' executes at scheduledAt timestamp, 'recurring' executes on callingHours schedule."),
    serviceConversationConfigId: z.string().nullable().optional().describe("Linked conversation record ID for tracking call outcomes, messages, and analytics (references ServiceConversationConfig). Created automatically when call connects."),

    // Time constraints
    timeZone: z.string().optional().describe("IANA timezone identifier for interpreting scheduledAt and callingHours (e.g., 'America/New_York', 'Europe/London'). Defaults to UTC if not specified."),
    scheduledAt: z.number().optional().describe("Unix timestamp in milliseconds for scheduled call execution. Required when scheduleType is 'scheduled'. Call executes at this time if within callingHours."),
    callingHours: CallingHoursSchema.nullable().optional().describe("Permitted calling window configuration restricting when calls can be placed. Ensures TCPA compliance and respects customer preferences. Calls outside window are queued."),

    // Retry configuration
    maxRetries: z.number().int().min(0).max(5).optional().describe("Maximum number of retry attempts if call fails due to no answer, busy signal, or technical error (0-5). Set to 0 to disable retries."),
    retryDelayMinutes: z.number().int().positive().optional().describe("Delay in minutes between retry attempts. Provides spacing to increase likelihood of reaching the recipient on subsequent attempts."),

    // Status tracking
    status: z.enum(CallRequestStatus).default(CallRequestStatus.PENDING).describe("Current status of the call request lifecycle (pending, scheduled, in_progress, completed, failed, cancelled)."),

    // Extensibility
    metadata: z.record(z.string(), z.any()).optional().describe("Additional custom metadata as key-value pairs for campaign tracking, CRM integration, or application-specific data. Not processed by the platform."),
});

/**
 * Schema for creating a new business service.
 * Omits auto-generated fields.
 */
export const CreateCallRequestSchema = BusinessCallRequestSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


export const CallRequestResultSchema = z.object({
  success: z.boolean().optional().default(false).describe("Whether the telephony request was successful"),
  request: BusinessCallRequestSchema.optional().nullable().describe("Original call request details"),
  error_message: z.string().optional().nullable().describe("Error message if the request failed"),
});


export type BusinessCallRequest = z.infer<typeof BusinessCallRequestSchema>;
export type CreateCallRequest = z.infer<typeof CreateCallRequestSchema>;

export type CallRequestResult = z.infer<typeof CallRequestResultSchema>;

