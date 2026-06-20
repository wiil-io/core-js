import z from "zod";
import { BaseModelSchema } from "../../base.schema";
import {
    PropertyInquiryType,
    PropertyInquiryStatus
} from "../../type-definitions";
import { CustomerSchema } from "../customer-management/customer.schema";

/**
 * @fileoverview Property Inquiry schema definitions for property management.
 * @module business-mgt/property-inquiry
 *
 * Property inquiries track leads and customer interest in properties,
 * including viewing scheduling, follow-ups, and conversion tracking.
 */

// ============================================================================
// PROPERTY INQUIRY SCHEMA
// ============================================================================

/**
 * Property Inquiry schema.
 * Tracks customer inquiries about properties with viewing and follow-up management.
 *
 * @typedef {Object} PropertyInquiry
 * @property {string} propertyId - ID of the property being inquired about
 * @property {string} [customerId] - ID of existing contact in system
 * @property {Object} [customer] - Contact details of the inquirer
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
 * @property {string} [appointmentRecordId] - Linked appointment record ID
 * @property {string} [cancelReason] - Reason for cancellation
 * @property {string} [serviceConversationConfigId] - Service conversation config ID
 */
export const PropertyInquirySchema = BaseModelSchema.safeExtend({
    propertyId: z.string().describe("ID of the property being inquired about"),

    // Contact Information
    customerId: z.string().nullable().optional().describe("ID of existing contact in system"),
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
    appointmentRecordId: z.string().nullable().optional().describe("Linked appointment record ID for scheduled viewings"),
    cancelReason: z.string().nullable().optional().describe("Reason for cancellation, if applicable"),
    serviceConversationConfigId: z.string().nullable().optional().describe("Configuration ID for service conversation"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new property inquiry.
 */
export const CreatePropertyInquirySchema = PropertyInquirySchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    customer: true,
});

/**
 * Schema for updating an existing property inquiry.
 *
 * @remarks
 * Fields that carry a `.default()` on the base schema are re-declared here as plain
 * `.optional()` (without defaults). In Zod, `.partial()` does not strip defaults, so a
 * partial update would otherwise inject those defaults (e.g., `status`, `source`) on
 * `.parse()` and submit values the caller never set.
 */
export const UpdatePropertyInquirySchema = CreatePropertyInquirySchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the PropertyInquiry to update"),
    source: z.string().optional().describe("Source of the inquiry (website, referral, agent, etc.)"),
    status: z.enum(PropertyInquiryStatus).optional().describe("Current status of the inquiry"),
    viewingCompleted: z.boolean().optional().describe("Whether the viewing has been completed"),
    convertedToTransaction: z.boolean().optional().describe("Whether inquiry converted to a transaction"),
    interestedInBuying: z.boolean().optional().describe("Whether contact is interested in buying"),
    interestedInRenting: z.boolean().optional().describe("Whether contact is interested in renting"),
});

/**
 * Schema for quick status update on property inquiry.
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

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PropertyInquiry = z.infer<typeof PropertyInquirySchema>;
export type CreatePropertyInquiry = z.infer<typeof CreatePropertyInquirySchema>;
export type UpdatePropertyInquiry = z.infer<typeof UpdatePropertyInquirySchema>;
export type UpdatePropertyInquiryStatus = z.infer<typeof UpdatePropertyInquiryStatusSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Property inquiry filter options.
 * @interface PropertyInquiryFilters
 */
export interface PropertyInquiryFilters {
    /** Text search across message/notes */
    search?: string;
    /** Filter by property ID */
    propertyId?: string;
    /** Filter by customer ID */
    customerId?: string;
    /** Filter by status(es) */
    status?: PropertyInquiryStatus[];
    /** Filter by inquiry type */
    inquiryType?: PropertyInquiryType;
    /** Filter by assigned agent */
    assignedAgentId?: string;
    /** Filter by source */
    source?: string;
    /** Filter by conversion status */
    convertedToTransaction?: boolean;
    /** Filter by buying interest */
    interestedInBuying?: boolean;
    /** Filter by renting interest */
    interestedInRenting?: boolean;
    /** Filter by viewing completed status */
    viewingCompleted?: boolean;
    /** Filter by date range */
    dateRange?: { start?: number; end?: number };
    /** Filter by follow-up date range */
    followUpDateRange?: { start?: number; end?: number };
}

/**
 * Property inquiry sorting options.
 * @interface PropertyInquirySorting
 */
export interface PropertyInquirySorting {
    /** Field to sort by */
    field: 'createdAt' | 'scheduledViewingDate' | 'followUpDate' | 'status';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Property inquiry query options.
 * @interface PropertyInquiryQueryOptions
 */
export interface PropertyInquiryQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: PropertyInquiryFilters;
    /** Optional sorting */
    sorting?: PropertyInquirySorting;
}
