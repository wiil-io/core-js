import { z } from "zod";
import { PhoneNumberType, PhonePurchaseStatus } from "../type-definitions/service-config.definitions";
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
export declare const BasePhoneNumberInfoSchema: z.ZodObject<{
    friendlyName: z.ZodString;
    phoneNumber: z.ZodString;
    lata: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rateCenter: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    countryCode: z.ZodString;
    capabilities: z.ZodObject<{
        voice: z.ZodBoolean;
        SMS: z.ZodBoolean;
        MMS: z.ZodBoolean;
    }, z.core.$strip>;
    beta: z.ZodBoolean;
    numberType: z.ZodEnum<typeof PhoneNumberType>;
}, z.core.$strip>;
/**
 * Type definition for base phone number information.
 */
export type BasePhoneNumberInfo = z.infer<typeof BasePhoneNumberInfoSchema>;
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
export declare const PhoneProviderResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    status: z.ZodOptional<z.ZodNumber>;
    data: z.ZodUnknown;
}, z.core.$strip>;
/**
 * Type definition for phone provider response.
 */
export type PhoneProviderResponse = z.infer<typeof PhoneProviderResponseSchema>;
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
export declare const PhoneNumberPurchaseSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    friendlyName: z.ZodString;
    phoneNumber: z.ZodString;
    countryCode: z.ZodString;
    chargedCredits: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<typeof PhonePurchaseStatus>>;
    numberType: z.ZodDefault<z.ZodEnum<typeof PhoneNumberType>>;
    statusDetails: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completedAt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
/**
 * Type definition for phone number purchase.
 */
export type PhoneNumberPurchase = z.infer<typeof PhoneNumberPurchaseSchema>;
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
export declare const CreatePhoneNumberPurchaseSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    friendlyName: z.ZodString;
    countryCode: z.ZodString;
    numberType: z.ZodDefault<z.ZodEnum<typeof PhoneNumberType>>;
}, z.core.$strip>;
/**
 * Type definition for creating a phone number purchase.
 */
export type CreatePhoneNumberPurchase = z.infer<typeof CreatePhoneNumberPurchaseSchema>;
export declare const BusinessPhoneNumberPurchaseRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    friendlyName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BusinessPhoneNumberPurchaseRequest = z.infer<typeof BusinessPhoneNumberPurchaseRequestSchema>;
/**
 * Legacy schema export for backwards compatibility.
 * @deprecated Use CreatePhoneNumberPurchaseSchema instead.
 */
export declare const PhoneNumberPurchaseRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    friendlyName: z.ZodString;
    countryCode: z.ZodString;
    numberType: z.ZodDefault<z.ZodEnum<typeof PhoneNumberType>>;
}, z.core.$strip>;
/**
 * Legacy type export for backwards compatibility.
 * @deprecated Use CreatePhoneNumberPurchase instead.
 */
export type PhoneNumberPurchaseRequest = CreatePhoneNumberPurchase;
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
export declare const PhoneNumberPricingSchema: z.ZodObject<{
    number_type: z.ZodEnum<typeof PhoneNumberType>;
    country: z.ZodString;
    countryCode: z.ZodString;
    phoneNumberPrices: z.ZodArray<z.ZodObject<{
        base_price: z.ZodString;
        current_price: z.ZodString;
    }, z.core.$strip>>;
    price: z.ZodNumber;
    priceUnit: z.ZodString;
    currency: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
/**
 * Type definition for phone number pricing.
 */
export type PhoneNumberPricing = z.infer<typeof PhoneNumberPricingSchema>;
