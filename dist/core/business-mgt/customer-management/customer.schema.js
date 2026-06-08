"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerSchema = exports.CreateCustomerSchema = exports.CustomerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_schema_1 = require("../../base.schema");
const type_definitions_1 = require("../../type-definitions");
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
const phoneNumberSchema = zod_1.default.string()
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
exports.CustomerSchema = base_schema_1.BaseModelSchema.safeExtend({
    customerId: zod_1.default.string().nullable().optional().describe("External system customer ID for integration with third-party CRM or legacy systems."),
    phone_number: phoneNumberSchema.nullable().optional().describe("Primary phone number in E.164 format (e.g., +14155552671), automatically normalized."),
    firstname: zod_1.default.string().nullable().optional().describe("Customer's first name for personalized communications."),
    lastname: zod_1.default.string().nullable().optional().describe("Customer's last name for full identification."),
    company: zod_1.default.string().optional().describe("Company name when customer represents a business entity."),
    timezone: zod_1.default.string().optional().describe("IANA timezone identifier (e.g., 'America/New_York') for scheduling."),
    email: zod_1.default.email().optional().describe("Primary email for confirmations and notifications."),
    preferred_language: zod_1.default.string().default("en").describe("ISO 639-1 language code (e.g., 'en', 'es', 'fr')."),
    preferred_contact_method: zod_1.default.enum(type_definitions_1.PreferredContactMethod).default(type_definitions_1.PreferredContactMethod.EMAIL).describe("Preferred channel for notifications: EMAIL, PHONE, SMS."),
    best_time_to_call: zod_1.default.enum(type_definitions_1.BestTimeToCall).optional().describe("Optimal time window (MORNING, AFTERNOON, EVENING) for phone contact."),
    notes: zod_1.default.string().optional().describe("Internal staff notes about customer preferences and history."),
    tags: zod_1.default.array(zod_1.default.string()).optional().describe("Categorization labels for segmentation (e.g., ['vip', 'gluten-free'])."),
    custom_fields: zod_1.default.record(zod_1.default.string(), zod_1.default.any()).optional().describe("Extensible key-value storage for business-specific attributes."),
    channelId: zod_1.default.string().nullable().optional().describe("ID of the communication channel where customer was created."),
    address: base_schema_1.AddressSchema.optional().describe("Primary physical address for delivery and billing."),
    isValidatedNames: zod_1.default.boolean().default(false).describe("Whether first/last names have been verified."),
    customerGroupId: zod_1.default.string().nullable().optional().describe("Customer group ID for pricing and terms."),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new customer.
 * Omits auto-generated fields and channelId (set by system).
 */
exports.CreateCustomerSchema = exports.CustomerSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    channelId: true,
});
/**
 * Schema for updating an existing customer.
 * All fields optional except id (required).
 */
exports.UpdateCustomerSchema = exports.CreateCustomerSchema.partial().safeExtend({
    id: zod_1.default.string().describe("Unique identifier of the Customer to update"),
});
