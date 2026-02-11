import { z } from 'zod';
import { BestTimeToCall, PreferredContactMethod } from '../type-definitions';
/**
 * Customer schema - Individual customer record.
 *
 * @typedef {Object} Customer
 * @property {string} [customerId] - External system customer ID for integration purposes
 * @property {string} [phone_number] - Customer's primary phone number in E.164 format
 * @property {string} [firstname] - Customer's first name
 * @property {string} [lastname] - Customer's last name
 * @property {string} [company] - Company name if customer represents a business
 * @property {string} [timezone] - Customer's timezone for scheduling purposes
 * @property {string} [email] - Customer's primary email address
 * @property {string} preferred_language - Customer's preferred language for communication
 * @property {string} preferred_contact_method - Customer's preferred method of contact
 * @property {string} [best_time_to_call] - Best time of day to contact customer by phone
 * @property {string} [notes] - Internal notes about the customer
 * @property {string[]} [tags] - Labels or categories assigned to the customer
 * @property {Object} [custom_fields] - Additional custom fields for business-specific customer data
 * @property {string} [channelId] - Communication channel ID associated with the customer creation
 * @property {Object} [address] - Customer's primary address information
 * @property {boolean} isValidatedNames - Whether the customer's name has been validated for accuracy
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
}, z.core.$strip>;
/**
 * Schema for creating a new customer.
 * Omits auto-generated fields.
 */
export declare const CreateCustomerSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone_number: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
    firstname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    preferred_language: z.ZodDefault<z.ZodString>;
    preferred_contact_method: z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>;
    best_time_to_call: z.ZodOptional<z.ZodEnum<typeof BestTimeToCall>>;
    notes: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
/**
 * Schema for updating an existing customer.
 * All fields are optional except id.
 */
export declare const UpdateCustomerSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodOptional<z.ZodEmail>>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    phone_number: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>>;
    firstname: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastname: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    company: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    preferred_language: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    preferred_contact_method: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof PreferredContactMethod>>>;
    best_time_to_call: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof BestTimeToCall>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tags: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    custom_fields: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>>;
    isValidatedNames: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    id: z.ZodString;
}, z.core.$strip>;
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
