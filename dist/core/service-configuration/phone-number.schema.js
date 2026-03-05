"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberPricingSchema = exports.PhoneNumberPurchaseRequestSchema = exports.BusinessPhoneNumberPurchaseRequestSchema = exports.CreatePhoneNumberPurchaseSchema = exports.PhoneNumberPurchaseSchema = exports.PhoneProviderResponseSchema = exports.BasePhoneNumberInfoSchema = void 0;
const zod_1 = require("zod");
const service_config_definitions_1 = require("../type-definitions/service-config.definitions");
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Phone number configuration and purchase schema definitions.
 *
 * Phone number schemas manage the complete lifecycle of phone number acquisition from telephony providers:
 * discovery of available inventory, purchase transactions, and provisioning into Phone Configurations.
 * Supports multiple providers (SignalWire, Twilio) with provider-specific extensions.
 *
 * @module service-configuration/phone-number
 */
/**
 * Zod schema for base phone number information.
 *
 * Common properties shared across all phone number providers.
 *
 * @typedef {Object} BasePhoneNumberInfoProperties
 * @property {string} friendlyName - Human-readable name for the phone number
 * @property {string} phoneNumber - The phone number in E.164 format
 * @property {string | null} [lata] - Local Access and Transport Area code
 * @property {string} [rateCenter] - Rate center for the phone number
 * @property {string} [region] - Geographic region
 * @property {string} [postalCode] - Postal/ZIP code for the phone number
 * @property {string} countryCode - ISO country code
 * @property {Object} capabilities - Phone number capabilities
 * @property {boolean} capabilities.voice - Supports voice calls
 * @property {boolean} capabilities.SMS - Supports SMS messaging
 * @property {boolean} capabilities.MMS - Supports MMS messaging
 * @property {boolean} beta - Whether this is a beta number
 * @property {PhoneNumberType} numberType - Type of phone number (local, toll-free, etc.)
 *
 * @example
 * ```typescript
 * const phoneInfo: BasePhoneNumberInfo = {
 *   friendlyName: 'Customer Support Line',
 *   phoneNumber: '+12125551234',
 *   countryCode: 'US',
 *   capabilities: { voice: true, SMS: true, MMS: false },
 *   beta: false,
 *   numberType: PhoneNumberType.LOCAL
 * };
 * ```
 */
exports.BasePhoneNumberInfoSchema = zod_1.z.object({
    friendlyName: zod_1.z.string().describe("Human-readable display name for this phone number (e.g., 'New York Local', 'Customer Support Line')"),
    phoneNumber: zod_1.z.string().describe("Phone number in E.164 international format (e.g., '+12125551234')"),
    lata: zod_1.z.string().nullable().optional().describe("Local Access and Transport Area (LATA) code for North American numbers (telecom routing identifier)"),
    rateCenter: zod_1.z.string().optional().describe("Rate center name for billing and routing purposes (North American telephony concept)"),
    region: zod_1.z.string().optional().describe("State or province code where the number is registered (e.g., 'NY', 'CA', 'ON')"),
    postalCode: zod_1.z.string().optional().describe("Postal or ZIP code associated with this phone number's geographic location"),
    countryCode: zod_1.z.string().describe("ISO 3166-1 alpha-2 country code for this phone number (e.g., 'US', 'GB', 'CA')"),
    capabilities: zod_1.z.object({
        voice: zod_1.z.boolean().describe("Whether this phone number supports voice calls (inbound/outbound telephony)"),
        SMS: zod_1.z.boolean().describe("Whether this phone number supports SMS text messaging"),
        MMS: zod_1.z.boolean().describe("Whether this phone number supports MMS multimedia messaging"),
    }).describe("Capabilities supported by this phone number for voice and messaging"),
    beta: zod_1.z.boolean().describe("Whether this is a beta phone number (experimental or limited availability)"),
    numberType: zod_1.z.enum(service_config_definitions_1.PhoneNumberType).describe("Type of phone number (LOCAL for geographic, TOLL_FREE for 1-800 numbers, MOBILE for cellular, etc.)"),
});
/**
 * Zod schema for phone provider response.
 *
 * Response from phone number provider API calls.
 *
 * @example
 * ```typescript
 * const response: PhoneProviderResponse = {
 *   success: true,
 *   status: 200,
 *   data: { availableNumbers: [...] }
 * };
 * ```
 */
exports.PhoneProviderResponseSchema = zod_1.z.object({
    success: zod_1.z.boolean(),
    status: zod_1.z.number().optional(),
    data: zod_1.z.unknown(),
});
/**
 * Zod schema for phone number purchase transaction.
 *
 * Represents a phone number purchase request and its lifecycle through the purchase process.
 *
 * @typedef {Object} PhoneNumberPurchaseProperties
 * @property {string} id - Unique identifier for the purchase transaction
 * @property {string} friendlyName - Human-readable name for the purchased number
 * @property {string} phoneNumber - The phone number being purchased
 * @property {ProviderType} providerType - Provider from which the number is being purchased
 * @property {string} countryCode - ISO country code for the phone number (e.g., 'US', 'GB', 'CA')
 * @property {number} amount - Purchase amount (must be positive)
 * @property {string} currency - Currency code (3 characters, default: "USD")
 * @property {PhonePurchaseStatus} status - Current status of the purchase (default: PENDING)
 * @property {PhoneNumberType} numberType - Type of phone number (default: LOCAL)
 * @property {string | null} [statusDetails] - Additional details about the current status
 * @property {number | null} [completedAt] - Timestamp when purchase was completed
 * @property {Record<string, any> | null} [metadata] - Additional metadata for the purchase
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
 *
 * @example
 * ```typescript
 * const purchase: PhoneNumberPurchase = {
 *   id: '32422DEGER56',
 *   friendlyName: 'Main Support Line',
 *   phoneNumber: '+12125551234',
 *   countryCode: 'US',
 *   chargedCredits: 1500,
 *   status: PhonePurchaseStatus.COMPLETED,
 *   numberType: PhoneNumberType.LOCAL,
 *   completedAt: Date.now(),
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
exports.PhoneNumberPurchaseSchema = base_schema_1.BaseModelSchema.safeExtend({
    friendlyName: zod_1.z.string().describe("Human-readable name for the phone number being purchased (e.g., 'Customer Support Line', 'Sales Main Number')"),
    phoneNumber: base_schema_1.PhoneNumberSchema.describe("Phone number in E.164 international format being purchased (e.g., '+12125551234')"),
    countryCode: zod_1.z.string().length(2).describe("ISO 3166-1 alpha-2 country code for the phone number (e.g., 'US', 'GB', 'CA')"),
    chargedCredits: zod_1.z.number().positive().describe("Amount charged for the phone number purchase (must be a positive number)"),
    status: zod_1.z.enum(service_config_definitions_1.PhonePurchaseStatus).default(service_config_definitions_1.PhonePurchaseStatus.PENDING).describe("Current status of the purchase transaction (PENDING, PROCESSING, COMPLETED, FAILED, CANCELLED)"),
    numberType: zod_1.z.enum(service_config_definitions_1.PhoneNumberType).default(service_config_definitions_1.PhoneNumberType.LOCAL).describe("Type of phone number being purchased (LOCAL for geographic, TOLL_FREE for 1-800, MOBILE for cellular)"),
    statusDetails: zod_1.z.string().nullable().optional().describe("Additional details about the current status (error messages, provider notes, or completion details)"),
    completedAt: zod_1.z.number().nullable().optional().describe("Unix timestamp (milliseconds) when the purchase was successfully completed and number became active"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).nullable().optional().describe("Additional metadata for the purchase including provider-specific details, billing information, or custom attributes"),
});
/**
 * Zod schema for creating a new phone number purchase.
 *
 * Omits auto-generated and transaction-specific fields.
 *
 * @remarks
 * Use this schema when initiating a new phone number purchase.
 *
 * @example
 * ```typescript
 * const newPurchase: CreatePhoneNumberPurchase = {
 *   friendlyName: 'New Support Line',
 *   phoneNumber: '+12125551234',
 *   countryCode: 'US',
 *   providerType: ProviderType.TWILIO,
 *   phoneNumberInfo: { ... },
 *   numberType: PhoneNumberType.LOCAL
 * };
 * ```
 */
exports.CreatePhoneNumberPurchaseSchema = exports.PhoneNumberPurchaseSchema.omit({
    id: true,
    amount: true,
    chargedCredits: true,
    status: true,
    createdAt: true,
    updatedAt: true,
    statusDetails: true,
    completedAt: true,
    metadata: true,
});
exports.BusinessPhoneNumberPurchaseRequestSchema = zod_1.z.object({
    phoneNumber: base_schema_1.PhoneNumberSchema.describe("Phone number in international format to be purchased"),
    friendlyName: zod_1.z.string().optional().describe("Human-readable display name for the phone number being purchased"),
}).describe("Schema for business phone number purchase request, containing necessary information to initiate a phone number purchase for a business account");
/**
 * Legacy schema export for backwards compatibility.
 * @deprecated Use CreatePhoneNumberPurchaseSchema instead.
 */
exports.PhoneNumberPurchaseRequestSchema = exports.CreatePhoneNumberPurchaseSchema;
/**
 * Zod schema for phone number pricing information.
 *
 * Represents pricing details for phone numbers from various providers.
 *
 * @typedef {Object} PhoneNumberPricingProperties
 * @property {PhoneNumberType} number_type - Type of phone number
 * @property {string} country - Full country name
 * @property {string} countryCode - ISO country code
 * @property {Array} phoneNumberPrices - Array of pricing tiers
 * @property {number} price - Final price for the number
 * @property {string} priceUnit - Unit of pricing (e.g., "per month")
 * @property {string} currency - Currency code (3 characters, default: "USD")
 *
 * @example
 * ```typescript
 * const pricing: PhoneNumberPricing = {
 *   number_type: PhoneNumberType.LOCAL,
 *   country: 'United States',
 *   countryCode: 'US',
 *   phoneNumberPrices: [
 *     { base_price: '1.00', current_price: '1.00' }
 *   ],
 *   price: 1.00,
 *   priceUnit: 'per month',
 *   currency: 'USD'
 * };
 * ```
 */
exports.PhoneNumberPricingSchema = zod_1.z.object({
    number_type: zod_1.z.enum(service_config_definitions_1.PhoneNumberType),
    country: zod_1.z.string(),
    countryCode: zod_1.z.string(),
    phoneNumberPrices: zod_1.z.array(zod_1.z.object({
        base_price: zod_1.z.string(),
        current_price: zod_1.z.string(),
    })),
    price: zod_1.z.number(),
    priceUnit: zod_1.z.string(),
    currency: zod_1.z.string().length(3).default('USD'),
});
