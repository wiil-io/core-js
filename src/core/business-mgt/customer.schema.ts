import { z } from 'zod';
import { AddressSchema, BaseModelSchema } from '../base.schema';
import { BestTimeToCall, CallPriority, PreferredContactMethod } from '../type-definitions';
/**
 * @fileoverview Customer schema definitions for business management.
 * @module business-mgt/customer
 */

// Phone number validation (basic E.164 format)
const phoneNumberSchema = z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .transform((phone) => {
        // Normalize to E.164 format
        return phone.startsWith('+') ? phone : `+${phone}`;
    });

/**
 * Customer schema - Individual customer record.
 *
 * @typedef {Object} Customer
 * @property {string} organizationId - Business account ID that owns this customer record
 * @property {string} [customerId] - External system customer ID for integration purposes
 * @property {string} [phone_number] - Customer's primary phone number in E.164 format
 * @property {string} [firstname] - Customer's first name
 * @property {string} [lastname] - Customer's last name
 * @property {string} [company] - Company name if customer represents a business
 * @property {string} [timezone] - Customer's timezone for scheduling purposes
 * @property {string} [email] - Customer's primary email address
 * @property {string} preferred_language - Customer's preferred language for communication
 * @property {string} call_priority - Priority level for customer calls and support
 * @property {string} preferred_contact_method - Customer's preferred method of contact
 * @property {string} [best_time_to_call] - Best time of day to contact customer by phone
 * @property {string} [notes] - Internal notes about the customer
 * @property {string[]} [tags] - Labels or categories assigned to the customer
 * @property {Object} [custom_fields] - Additional custom fields for business-specific customer data
 * @property {string} [channelId] - Communication channel ID associated with the customer creation
 * @property {Object} [address] - Customer's primary address information
 * @property {boolean} isValidatedNames - Whether the customer's name has been validated for accuracy
 */
export const CustomerSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    customerId: z.string().nullable().optional(),
    phone_number: phoneNumberSchema.nullable().optional(),
    firstname: z.string().nullable().optional(),
    lastname: z.string().nullable().optional(),
    company: z.string().optional(),
    timezone: z.string().optional(),
    email: z.email().optional(),
    preferred_language: z.string().default('en'),
    call_priority: z.enum(CallPriority).default(CallPriority.MEDIUM),
    preferred_contact_method: z.enum(PreferredContactMethod).default(PreferredContactMethod.EMAIL),
    best_time_to_call: z.enum(BestTimeToCall).optional(),
    notes: z.string().optional(),
    tags: z.array(z.string()).optional(),
    custom_fields: z.record(z.string(), z.any()).optional(),
    channelId: z.string().nullable().optional(),
    address: AddressSchema.optional(),
    isValidatedNames: z.boolean().default(false),
});

/**
 * Schema for creating a new customer.
 * Omits auto-generated fields.
 */
export const CreateCustomerSchema = CustomerSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing customer.
 * All fields are optional except id.
 */
export const UpdateCustomerSchema = CreateCustomerSchema.partial().safeExtend({
    id: z.string(),
});

// Type exports
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
