import z from "zod";
import { PreferredContactMethod, PropertyInquiryType, PropertyInquiryStatus, CalendarProvider } from "../type-definitions";
/**
 * @fileoverview Property inquiry schema definitions for real estate lead management.
 * @module business-mgt/property-inquiry
 */
/**
 * Property inquiry schema for tracking customer interest in properties.
 *
 * @typedef {Object} PropertyInquiry
 * @property {string} organizationId - Business account ID
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
export declare const PropertyInquirySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    organizationId: z.ZodString;
    propertyId: z.ZodString;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer: z.ZodObject<{
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
        preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>;
        best_time_to_call: z.ZodOptional<z.ZodEnum<typeof import("../type-definitions").BestTimeToCall>>;
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
    }, z.core.$strip>;
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
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
    cancelReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for creating a new property inquiry.
 * Omits auto-generated fields.
 */
export declare const CreatePropertyInquirySchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<typeof PropertyInquiryStatus>>;
    organizationId: z.ZodString;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer: z.ZodObject<{
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
        preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>;
        best_time_to_call: z.ZodOptional<z.ZodEnum<typeof import("../type-definitions").BestTimeToCall>>;
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
    }, z.core.$strip>;
    source: z.ZodDefault<z.ZodString>;
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
    assignedUserAccountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing property inquiry.
 * All fields are optional except id.
 */
export declare const UpdatePropertyInquirySchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PropertyInquiryStatus>>>;
    organizationId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    customer: z.ZodOptional<z.ZodObject<{
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
        preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>;
        best_time_to_call: z.ZodOptional<z.ZodEnum<typeof import("../type-definitions").BestTimeToCall>>;
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
    }, z.core.$strip>>;
    source: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    cancelReason: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceConversationConfigId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    propertyId: z.ZodOptional<z.ZodString>;
    inquiryType: z.ZodOptional<z.ZodEnum<typeof PropertyInquiryType>>;
    preferredViewingDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    preferredViewingTime: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    scheduledViewingDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    viewingCompleted: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    viewingNotes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    followUpDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    followUpNotes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    assignedAgentId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    convertedToTransaction: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    transactionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    transactionType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        purchase: "purchase";
        lease: "lease";
    }>>>>;
    interestedInBuying: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    interestedInRenting: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    budgetMin: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    budgetMax: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    assignedUserAccountId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarEventId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    calendarProvider: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof CalendarProvider>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Quick status update schema for property inquiries.
 * Allows updating status and viewing/follow-up details without full update.
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
    dateRange?: {
        start?: number;
        end?: number;
    };
    followUpDateRange?: {
        start?: number;
        end?: number;
    };
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
