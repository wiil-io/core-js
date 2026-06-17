import z from "zod";
/**
 * @fileoverview Service Slot Query schemas for availability lookups.
 * @module business-mgt/service-slot-query
 *
 * Request/response schemas for querying available appointment slots.
 * These are transient query objects, not persisted database models.
 */
/**
 * Local date format schema (YYYY-MM-DD).
 */
export declare const LocalDateSchema: z.ZodString;
/**
 * Timezone identifier schema.
 */
export declare const TimezoneSchema: z.ZodString;
/**
 * Time of day value schema (h:mm AM/PM format).
 */
export declare const TimeOfDayValueSchema: z.ZodString;
/**
 * Service slot query request schema.
 * Used to request available appointment slots for a service.
 *
 * @typedef {Object} ServiceSlotQueryRequest
 * @property {string} serviceId - Service ID to query slots for
 * @property {string} localDate - Business local date (YYYY-MM-DD)
 * @property {string} [locationId] - Optional location filter
 * @property {string} providerId - Provider filter
 * @property {number} maxResults - Maximum slots to return
 */
export declare const ServiceSlotQueryRequestSchema: z.ZodObject<{
    serviceId: z.ZodString;
    localDate: z.ZodString;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    providerId: z.ZodString;
    maxResults: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const ServiceCandidateSlotSchema: z.ZodObject<{
    providerId: z.ZodString;
    serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startTimeOfDay: z.ZodString;
    startMinuteOfDay: z.ZodNumber;
    endMinuteOfDay: z.ZodNumber;
    startTimeUtcSec: z.ZodNumber;
    endTimeUtcSec: z.ZodNumber;
}, z.core.$strip>;
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
export declare const ServiceSlotQueryResponseSchema: z.ZodObject<{
    localDate: z.ZodString;
    timezone: z.ZodString;
    generatedAt: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        providerId: z.ZodString;
        serviceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        startTimeOfDay: z.ZodString;
        startMinuteOfDay: z.ZodNumber;
        endMinuteOfDay: z.ZodNumber;
        startTimeUtcSec: z.ZodNumber;
        endTimeUtcSec: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type LocalDate = z.infer<typeof LocalDateSchema>;
export type Timezone = z.infer<typeof TimezoneSchema>;
export type TimeOfDayValue = z.infer<typeof TimeOfDayValueSchema>;
export type ServiceSlotQueryRequest = z.infer<typeof ServiceSlotQueryRequestSchema>;
export type ServiceCandidateSlot = z.infer<typeof ServiceCandidateSlotSchema>;
export type ServiceSlotQueryResponse = z.infer<typeof ServiceSlotQueryResponseSchema>;
