import z from "zod";
import { AddressSchema, BaseModelSchema } from "../../base.schema";
import { BestTimeToCall, PreferredContactMethod } from "../../type-definitions";

/**
 * @fileoverview Customer schema definitions for business management.
 * @module business-mgt/customer
 *
 * Customers represent individual customer records with contact information,
 * preferences, and custom fields for business-specific data.
 */

// ============================================================================
// HELPER SCHEMAS
// ============================================================================

/**
 * Phone number validation (basic E.164 format).
 * Automatically normalizes to E.164 format with leading +.
 */
const phoneNumberSchema = z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .transform((phone) => {
        return phone.startsWith("+") ? phone : `+${phone}`;
    });

// ============================================================================
// CUSTOMER SCHEMA
// ============================================================================

/**
 * Customer schema.
 * Individual customer record with contact info and preferences.
 *
 * @typedef {Object} Customer
 * @property {string} [customerId] - External system customer ID
 * @property {string} [phone_number] - Primary phone number (E.164 format)
 * @property {string} [firstname] - Customer's first name
 * @property {string} [lastname] - Customer's last name
 * @property {string} [company] - Company name for business customers
 * @property {string} [timezone] - Customer's timezone (IANA format)
 * @property {string} [email] - Primary email address
 * @property {string} preferred_language - Preferred language (ISO 639-1)
 * @property {string} preferred_contact_method - Preferred contact method
 * @property {string} [best_time_to_call] - Best time for phone contact
 * @property {string} [notes] - Internal staff notes
 * @property {string[]} [tags] - Categorization labels
 * @property {Object} [custom_fields] - Business-specific custom fields
 * @property {string} [channelId] - Channel where customer was created
 * @property {Object} [address] - Primary physical address
 * @property {boolean} isValidatedNames - Whether names are verified
 * @property {string} [customerGroupId] - Customer group for pricing/terms
 */
export const CustomerSchema = BaseModelSchema.safeExtend({
    customerId: z.string().nullable().optional().describe("External system customer ID for integration with third-party CRM or legacy systems."),
    phone_number: phoneNumberSchema.nullable().optional().describe("Primary phone number in E.164 format (e.g., +14155552671), automatically normalized."),
    firstname: z.string().nullable().optional().describe("Customer's first name for personalized communications."),
    lastname: z.string().nullable().optional().describe("Customer's last name for full identification."),
    company: z.string().optional().describe("Company name when customer represents a business entity."),
    timezone: z.string().optional().describe("IANA timezone identifier (e.g., 'America/New_York') for scheduling."),
    email: z.email().optional().describe("Primary email for confirmations and notifications."),
    preferred_language: z.string().default("en").describe("ISO 639-1 language code (e.g., 'en', 'es', 'fr')."),
    preferred_contact_method: z.enum(PreferredContactMethod).default(PreferredContactMethod.EMAIL).describe("Preferred channel for notifications: EMAIL, PHONE, SMS."),
    best_time_to_call: z.enum(BestTimeToCall).optional().describe("Optimal time window (MORNING, AFTERNOON, EVENING) for phone contact."),
    notes: z.string().optional().describe("Internal staff notes about customer preferences and history."),
    tags: z.array(z.string()).optional().describe("Categorization labels for segmentation (e.g., ['vip', 'gluten-free'])."),
    custom_fields: z.record(z.string(), z.any()).optional().describe("Extensible key-value storage for business-specific attributes."),
    channelId: z.string().nullable().optional().describe("ID of the communication channel where customer was created."),
    address: AddressSchema.optional().describe("Primary physical address for delivery and billing."),
    isValidatedNames: z.boolean().default(false).describe("Whether first/last names have been verified."),
    customerGroupId: z.string().nullable().optional().describe("Customer group ID for pricing and terms."),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new customer.
 * Omits auto-generated fields and channelId (set by system).
 */
export const CreateCustomerSchema = CustomerSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    channelId: true,
});

/**
 * Schema for updating an existing customer.
 * All fields optional except id (required).
 */
export const UpdateCustomerSchema = CreateCustomerSchema.partial().safeExtend({
    id: z.string().describe("Unique identifier of the Customer to update"),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type Customer = z.infer<typeof CustomerSchema>;
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Customer filter options.
 * @interface CustomerFilters
 */
export interface CustomerFilters {
    /** Text search across name/email/phone */
    search?: string;
    /** Filter by preferred contact method(s) */
    preferredContactMethod?: (typeof PreferredContactMethod)[keyof typeof PreferredContactMethod][];
    /** Filter by tags */
    tags?: string[];
    /** Filter by channel ID */
    channelId?: string;
    /** Filter by customer group ID */
    customerGroupId?: string;
}

/**
 * Customer sorting options.
 * @interface CustomerSorting
 */
export interface CustomerSorting {
    /** Field to sort by */
    field: "firstname" | "lastname" | "createdAt";
    /** Sort direction */
    direction: "asc" | "desc";
}

/**
 * Customer query options.
 * @interface CustomerQueryOptions
 */
export interface CustomerQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: CustomerFilters;
    /** Optional sorting */
    sorting?: CustomerSorting;
}
