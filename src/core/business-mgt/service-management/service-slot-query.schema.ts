import z from "zod";

/**
 * @fileoverview Service Slot Query schemas for availability lookups.
 * @module business-mgt/service-slot-query
 *
 * Request/response schemas for querying available appointment slots.
 * These are transient query objects, not persisted database models.
 */

// ============================================================================
// HELPER SCHEMAS
// ============================================================================

/**
 * Local date format schema (YYYY-MM-DD).
 */
export const LocalDateSchema = z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "localDate must be YYYY-MM-DD");

/**
 * Timezone identifier schema.
 */
export const TimezoneSchema = z.string().min(1);

/**
 * Time of day value schema (h:mm AM/PM format).
 */
export const TimeOfDayValueSchema = z
    .string()
    .regex(/^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i, "startTimeOfDay must be h:mm AM/PM");

// ============================================================================
// REQUEST SCHEMA
// ============================================================================

/**
 * Service slot query request schema.
 * Used to request available appointment slots for a service.
 *
 * @typedef {Object} ServiceSlotQueryRequest
 * @property {string} organizationId - Business account ID
 * @property {string} serviceId - Service ID to query slots for
 * @property {string} localDate - Business local date (YYYY-MM-DD)
 * @property {string} [locationId] - Optional location filter
 * @property {string} providerId - Provider filter
 * @property {number} maxResults - Maximum slots to return
 */
export const ServiceSlotQueryRequestSchema = z.object({
    organizationId: z.string().describe("Business account ID"),
    serviceId: z.string().describe("Service ID"),
    localDate: LocalDateSchema.describe("Business local date for slot generation"),
    locationId: z.string().nullable().optional().describe("Optional location filter"),
    providerId: z.string().describe("Optional provider filter"),
    maxResults: z.number().int().positive().max(1000).default(10).describe("Maximum number of slots returned"),
});

// ============================================================================
// CANDIDATE SLOT SCHEMA
// ============================================================================

/**
 * Service candidate slot schema.
 * Represents an available time slot for booking.
 *
 * @typedef {Object} ServiceCandidateSlot
 * @property {string} providerId - Provider that can serve this slot
 * @property {string} [serviceProviderId] - Optional service-provider assignment ID
 * @property {string} startTimeOfDay - Local start time (h:mm AM/PM)
 * @property {number} startMinuteOfDay - Local start minute in day (0-1439)
 * @property {number} endMinuteOfDay - Local end minute in day (1-1440)
 * @property {number} startTimeUtcSec - Slot start UTC timestamp in seconds
 * @property {number} endTimeUtcSec - Slot end UTC timestamp in seconds
 */
export const ServiceCandidateSlotSchema = z.object({
    providerId: z.string().describe("Provider that can serve this slot"),
    serviceProviderId: z.string().nullable().optional().describe("Optional service-provider assignment ID"),
    startTimeOfDay: TimeOfDayValueSchema.describe("Local start time in h:mm AM/PM format"),
    startMinuteOfDay: z.number().int().min(0).max(1439).describe("Local start minute in day"),
    endMinuteOfDay: z.number().int().min(1).max(1440).describe("Local end minute in day"),
    startTimeUtcSec: z.number().describe("Slot start UTC timestamp in seconds"),
    endTimeUtcSec: z.number().describe("Slot end UTC timestamp in seconds"),
}).superRefine((slot, ctx) => {
    if (slot.endMinuteOfDay <= slot.startMinuteOfDay) {
        ctx.addIssue({
            code: "custom",
            path: ["endMinuteOfDay"],
            message: "endMinuteOfDay must be greater than startMinuteOfDay",
        });
    }

    if (slot.endTimeUtcSec <= slot.startTimeUtcSec) {
        ctx.addIssue({
            code: "custom",
            path: ["endTimeUtcSec"],
            message: "endTimeUtcSec must be greater than startTimeUtcSec",
        });
    }
});

// ============================================================================
// RESPONSE SCHEMA
// ============================================================================

/**
 * Service slot query response schema.
 * Contains available slots for the requested date.
 *
 * @typedef {Object} ServiceSlotQueryResponse
 * @property {string} localDate - The queried local date
 * @property {string} timezone - Timezone used for the response
 * @property {number} generatedAt - Generation timestamp (UTC milliseconds)
 * @property {Array} slots - Available candidate slots
 */
export const ServiceSlotQueryResponseSchema = z.object({
    localDate: LocalDateSchema.describe("The queried local date"),
    timezone: TimezoneSchema.describe("Timezone identifier used for slot times"),
    generatedAt: z.number().describe("Generation timestamp in UTC milliseconds"),
    slots: z.array(ServiceCandidateSlotSchema).describe("Available candidate slots for the requested local date"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type LocalDate = z.infer<typeof LocalDateSchema>;
export type Timezone = z.infer<typeof TimezoneSchema>;
export type TimeOfDayValue = z.infer<typeof TimeOfDayValueSchema>;
export type ServiceSlotQueryRequest = z.infer<typeof ServiceSlotQueryRequestSchema>;
export type ServiceCandidateSlot = z.infer<typeof ServiceCandidateSlotSchema>;
export type ServiceSlotQueryResponse = z.infer<typeof ServiceSlotQueryResponseSchema>;
