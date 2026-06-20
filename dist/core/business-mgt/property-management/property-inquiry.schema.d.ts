import z from "zod";
import { PropertyInquiryType, PropertyInquiryStatus } from "../../type-definitions";
/**
 * @fileoverview Property Inquiry schema definitions for property management.
 * @module business-mgt/property-inquiry
 *
 * Property inquiries track leads and customer interest in properties,
 * including viewing scheduling, follow-ups, and conversion tracking.
 */
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
export declare const PropertyInquirySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    propertyId: z.ZodString;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_number: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
        firstname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodString>;
        timezone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        preferred_language: z.ZodDefault<z.ZodString>;
        preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof import("../../type-definitions").PreferredContactMethod>>;
        best_time_to_call: z.ZodOptional<z.ZodEnum<typeof import("../../type-definitions").BestTimeToCall>>;
        notes: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        channelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodObject<{
            street: z.ZodString;
            street2: z.ZodOptional<z.ZodString>;
            city: z.ZodString;
            state: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
        }, z.core.$strip>>;
        isValidatedNames: z.ZodDefault<z.ZodBoolean>;
        customerGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    inquiryType: z.ZodEnum<typeof PropertyInquiryType>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof PropertyInquiryStatus>>;
    preferredViewingDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    preferredViewingTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduledViewingDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    viewingCompleted: z.ZodDefault<z.ZodBoolean>;
    viewingNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    followUpDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    followUpNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedAgentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    convertedToTransaction: z.ZodDefault<z.ZodBoolean>;
    transactionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        purchase: "purchase";
        lease: "lease";
    }>>>;
    interestedInBuying: z.ZodDefault<z.ZodBoolean>;
    interestedInRenting: z.ZodDefault<z.ZodBoolean>;
    budgetMin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    budgetMax: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    appointmentRecordId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new property inquiry.
 */
export declare const CreatePropertyInquirySchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<typeof PropertyInquiryStatus>>;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    propertyId: z.ZodString;
    inquiryType: z.ZodEnum<typeof PropertyInquiryType>;
    preferredViewingDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    preferredViewingTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduledViewingDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    viewingCompleted: z.ZodDefault<z.ZodBoolean>;
    viewingNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    followUpDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    followUpNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedAgentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    convertedToTransaction: z.ZodDefault<z.ZodBoolean>;
    transactionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        purchase: "purchase";
        lease: "lease";
    }>>>;
    interestedInBuying: z.ZodDefault<z.ZodBoolean>;
    interestedInRenting: z.ZodDefault<z.ZodBoolean>;
    budgetMin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    budgetMax: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    appointmentRecordId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property inquiry.
 *
 * @remarks
 * Fields that carry a `.default()` on the base schema are re-declared here as plain
 * `.optional()` (without defaults). In Zod, `.partial()` does not strip defaults, so a
 * partial update would otherwise inject those defaults (e.g., `status`, `source`) on
 * `.parse()` and submit values the caller never set.
 */
export declare const UpdatePropertyInquirySchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cancelReason: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    propertyId: z.ZodOptional<z.ZodString>;
    inquiryType: z.ZodOptional<z.ZodEnum<typeof PropertyInquiryType>>;
    preferredViewingDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    preferredViewingTime: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    scheduledViewingDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    viewingNotes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    followUpDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    followUpNotes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    assignedAgentId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    transactionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    transactionType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        purchase: "purchase";
        lease: "lease";
    }>>>>;
    budgetMin: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    budgetMax: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    appointmentRecordId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
    source: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<typeof PropertyInquiryStatus>>;
    viewingCompleted: z.ZodOptional<z.ZodBoolean>;
    convertedToTransaction: z.ZodOptional<z.ZodBoolean>;
    interestedInBuying: z.ZodOptional<z.ZodBoolean>;
    interestedInRenting: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Schema for quick status update on property inquiry.
 */
export declare const UpdatePropertyInquiryStatusSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<typeof PropertyInquiryStatus>;
    scheduledViewingDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    viewingCompleted: z.ZodOptional<z.ZodBoolean>;
    viewingNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    followUpDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    followUpNotes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PropertyInquiry = z.infer<typeof PropertyInquirySchema>;
export type CreatePropertyInquiry = z.infer<typeof CreatePropertyInquirySchema>;
export type UpdatePropertyInquiry = z.infer<typeof UpdatePropertyInquirySchema>;
export type UpdatePropertyInquiryStatus = z.infer<typeof UpdatePropertyInquiryStatusSchema>;
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
    dateRange?: {
        start?: number;
        end?: number;
    };
    /** Filter by follow-up date range */
    followUpDateRange?: {
        start?: number;
        end?: number;
    };
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
