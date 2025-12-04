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
export const CustomerSchema = BaseModelSchema.safeExtend({
    customerId: z.string().nullable().optional().describe("External system customer ID for integration with third-party CRM or legacy systems. Links WIIL Platform customer records with existing databases while maintaining internal id as primary identifier."),
    phone_number: phoneNumberSchema.nullable().optional().describe("Primary phone number in E.164 format (e.g., +14155552671), automatically normalized. Used by AI Powered Services for voice interactions, SMS, appointment reminders, and order notifications."),
    firstname: z.string().nullable().optional().describe("Customer's first name for personalized communications and AI conversations. May be null for walk-in customers or minimal-info transactions."),
    lastname: z.string().nullable().optional().describe("Customer's last name combined with firstname for full identification in appointments and orders. May be null for casual transactions."),
    company: z.string().optional().describe("Company name when customer represents a business entity. Used for B2B transactions, corporate accounts, and distinguishing business vs individual customers."),
    timezone: z.string().optional().describe("IANA timezone identifier (e.g., 'America/New_York') for accurate appointment scheduling, reservation timing, and ensuring communications arrive at appropriate local times."),
    email: z.email().optional().describe("Primary email for confirmations, receipts, and AI-generated summaries. Also serves as unique identifier for account recovery and duplicate detection."),
    preferred_language: z.string().default('en').describe("ISO 639-1 language code (e.g., 'en', 'es', 'fr') for AI conversations and notifications. Defaults to English. Essential for multilingual operations."),
    preferred_contact_method: z.enum(PreferredContactMethod).default(PreferredContactMethod.EMAIL).describe("Preferred channel for notifications: EMAIL, PHONE, SMS. AI Powered Services respects this when sending reminders and updates. Defaults to EMAIL."),
    best_time_to_call: z.enum(BestTimeToCall).optional().describe("Optimal time window (MORNING, AFTERNOON, EVENING) for phone contact. Used by support teams and automated systems to improve contact success rates."),
    notes: z.string().optional().describe("Internal staff notes about customer preferences, requirements, history, or behavioral patterns. Not visible to customers; used for personalized service delivery."),
    tags: z.array(z.string()).optional().describe("Categorization labels for segmentation (e.g., ['vip', 'gluten-free']). Used for marketing campaigns, analytics, and dynamic customer grouping."),
    custom_fields: z.record(z.string(), z.any()).optional().describe("Extensible key-value storage for business-specific attributes (e.g., medical history, dietary restrictions, membership tier). Provides schema flexibility."),
    channelId: z.string().nullable().optional().describe("ID of the communication channel (phone, web, app) where customer record was created. Links to deployment configuration for attribution tracking and analytics."),
    address: AddressSchema.optional().describe("Primary physical address for delivery orders, on-site service appointments, billing, and geographic analysis."),
    isValidatedNames: z.boolean().default(false).describe("Whether first/last names have been verified through ID verification, payment matching, or manual confirmation. Maintains data quality and reduces fraud. Defaults to false."),
});

/**
 * Schema for creating a new customer.
 * Omits auto-generated fields.
 */
export const CreateCustomerSchema = CustomerSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    channelId: true,
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
