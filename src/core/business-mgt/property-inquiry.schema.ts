import z from "zod";
import { BaseModelSchema } from "../base.schema";
import {
    PreferredContactMethod,
    PropertyInquiryType,
    PropertyInquiryStatus,
    CalendarProvider
} from "../type-definitions";
import { CustomerSchema } from "./customer.schema";

/**
 * @fileoverview Property inquiry schema definitions for real estate lead management.
 * @module business-mgt/property-inquiry
 */

/**
 * Property inquiry schema for tracking customer interest in properties.
 *
 * @typedef {Object} PropertyInquiry
 * @property {string} propertyId - ID of the property being inquired about
 * @property {string} [customerId] - ID of existing contact in system
 * @property {Object} customer - Contact details of the inquirer
 * @property {PropertyInquiryType} inquiryType - Type of inquiry
 * @property {string} [message] - Inquiry message from the contact
 * @property {string} source - Source of the inquiry
 * @property {PropertyInquiryStatus} status - Current status of the inquiry
 * @property {number} [preferredViewingDate] - Contact's preferred viewing date
 * @property {string} [preferredViewingTime] - Contact's preferred viewing time
 * @property {number} [scheduledViewingDate] - Scheduled viewing date
 * @property {boolean} viewingCompleted - Whether the viewing has been completed
 * @property {string} [viewingNotes] - Notes from the viewing
 * @property {number} [followUpDate] - Next follow-up date
 * @property {string} [followUpNotes] - Notes for follow-up
 * @property {string} [assignedAgentId] - ID of the assigned agent
 * @property {boolean} convertedToTransaction - Whether inquiry converted to a transaction
 * @property {string} [transactionId] - ID of the resulting transaction
 * @property {string} [transactionType] - Type of transaction (purchase or lease)
 * @property {boolean} interestedInBuying - Whether contact is interested in buying
 * @property {boolean} interestedInRenting - Whether contact is interested in renting
 * @property {number} [budgetMin] - Minimum budget
 * @property {number} [budgetMax] - Maximum budget
 * @property {string} [notes] - Internal notes about the inquiry
 */
export const PropertyInquirySchema = BaseModelSchema.safeExtend({
    propertyId: z.string().describe("ID of the property being inquired about"),

    // Contact Information
    customerId: z.string().describe("ID of existing contact in system"),
    customer: CustomerSchema.nullable().optional().describe("Contact details of the inquirer"),

    // Inquiry Details
    inquiryType: z.enum(PropertyInquiryType).describe("Type of inquiry"),
    message: z.string().nullable().optional().describe("Inquiry message from the contact"),
    source: z.string().default('direct').describe("Source of the inquiry (website, referral, agent, etc.)"),

    // Status
    status: z.enum(PropertyInquiryStatus).default(PropertyInquiryStatus.NEW).describe("Current status of the inquiry"),

    // Scheduling
    preferredViewingDate: z.number().nullable().optional().describe("Contact's preferred viewing date (timestamp)"),
    preferredViewingTime: z.string().nullable().optional().describe("Contact's preferred viewing time"),
    scheduledViewingDate: z.number().nullable().optional().describe("Scheduled viewing date (timestamp)"),
    viewingCompleted: z.boolean().default(false).describe("Whether the viewing has been completed"),
    viewingNotes: z.string().nullable().optional().describe("Notes from the viewing"),

    // Follow-up
    followUpDate: z.number().nullable().optional().describe("Next follow-up date (timestamp)"),
    followUpNotes: z.string().nullable().optional().describe("Notes for follow-up"),
    assignedAgentId: z.string().nullable().optional().describe("ID of the assigned agent"),

    // Conversion Tracking
    convertedToTransaction: z.boolean().default(false).describe("Whether inquiry converted to a transaction"),
    transactionId: z.string().nullable().optional().describe("ID of the resulting transaction"),
    transactionType: z.enum(['purchase', 'lease']).nullable().optional().describe("Type of transaction (purchase or lease)"),

    // Interest Details
    interestedInBuying: z.boolean().default(false).describe("Whether contact is interested in buying"),
    interestedInRenting: z.boolean().default(false).describe("Whether contact is interested in renting"),
    budgetMin: z.number().nonnegative().nullable().optional().describe("Minimum budget"),
    budgetMax: z.number().nonnegative().nullable().optional().describe("Maximum budget"),

    // Notes
    notes: z.string().nullable().optional().describe("Internal notes about the inquiry"),

    // Calendar Integration
    assignedUserAccountId: z.string().nullable().optional().describe("User account managing the appointment"),
    calendarId: z.string().nullable().optional().describe("Calendar ID where appointment is stored"),
    calendarEventId: z.string().nullable().optional().describe("External calendar event ID"),
    calendarProvider: z.enum(CalendarProvider).nullable().optional().describe("Calendar provider type"),
    cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
    serviceConversationConfigId: z.string().nullable().optional().describe("Configuration ID for service conversation"),
});

/**
 * Schema for creating a new property inquiry.
 * Omits auto-generated fields.
 */
export const CreatePropertyInquirySchema = PropertyInquirySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    customer: true,
});

/**
 * Schema for updating an existing property inquiry.
 * All fields are optional except id.
 */
export const UpdatePropertyInquirySchema = CreatePropertyInquirySchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Quick status update schema for property inquiries.
 * Allows updating status and viewing/follow-up details without full update.
 */
export const UpdatePropertyInquiryStatusSchema = z.object({
    id: z.string().describe("Inquiry ID"),
    status: z.enum(PropertyInquiryStatus).describe("New status"),
    scheduledViewingDate: z.number().nullable().optional().describe("Scheduled viewing date"),
    viewingCompleted: z.boolean().optional().describe("Whether viewing is completed"),
    viewingNotes: z.string().nullable().optional().describe("Viewing notes"),
    followUpDate: z.number().nullable().optional().describe("Follow-up date"),
    followUpNotes: z.string().nullable().optional().describe("Follow-up notes"),
});

// Type Exports
export type PropertyInquiry = z.infer<typeof PropertyInquirySchema>;
export type CreatePropertyInquiry = z.infer<typeof CreatePropertyInquirySchema>;
export type UpdatePropertyInquiry = z.infer<typeof UpdatePropertyInquirySchema>;
export type UpdatePropertyInquiryStatus = z.infer<typeof UpdatePropertyInquiryStatusSchema>;

// Query Options
export interface PropertyInquiryFilters {
    search?: string;
    propertyId?: string;
    customerId?: string;
    status?: PropertyInquiryStatus[];
    inquiryType?: PropertyInquiryType;
    assignedAgentId?: string;
    source?: string;
    convertedToTransaction?: boolean;
    interestedInBuying?: boolean;
    interestedInRenting?: boolean;
    viewingCompleted?: boolean;
    dateRange?: { start?: number; end?: number };
    followUpDateRange?: { start?: number; end?: number };
    includeDeleted?: boolean;
}

export interface PropertyInquirySorting {
    field: 'createdAt' | 'scheduledViewingDate' | 'followUpDate' | 'status';
    direction: 'asc' | 'desc';
}

export interface PropertyInquiryQueryOptions {
    page: number;
    pageSize: number;
    filters?: PropertyInquiryFilters;
    sorting?: PropertyInquirySorting;
}
