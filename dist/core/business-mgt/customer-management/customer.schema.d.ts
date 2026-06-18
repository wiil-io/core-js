import z from "zod";
import { BestTimeToCall, PreferredContactMethod } from "../../type-definitions";
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
export declare const CustomerSchema: z.ZodObject<{
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
    best_time_to_call: z.ZodOptional<z.ZodEnum<typeof BestTimeToCall>>;
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
}, z.core.$strip>;
/**
 * Schema for creating a new customer.
 * Omits auto-generated fields and channelId (set by system).
 */
export declare const CreateCustomerSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    timezone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone_number: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
    firstname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company: z.ZodOptional<z.ZodString>;
    preferred_language: z.ZodDefault<z.ZodString>;
    preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>;
    best_time_to_call: z.ZodOptional<z.ZodEnum<typeof BestTimeToCall>>;
    notes: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    isValidatedNames: z.ZodDefault<z.ZodBoolean>;
    customerGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing customer.
 * All fields optional except id (required).
 */
export declare const UpdateCustomerSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodOptional<z.ZodEmail>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    phone_number: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>>;
    firstname: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastname: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    company: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    preferred_language: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    preferred_contact_method: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>>;
    best_time_to_call: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof BestTimeToCall>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tags: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    custom_fields: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    isValidatedNames: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    customerGroupId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type Customer = z.infer<typeof CustomerSchema>;
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;
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
