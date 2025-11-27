import { z } from "zod";
import { PhoneNumberType, PhonePurchaseStatus, ProviderType } from "../type-definitions/service-config.definitions";
import { BaseModelSchema } from "../base.schema";

/**
 * @fileoverview Phone number configuration and purchase schema definitions.
 * @module service-configuration/phone-number
 */

/**
 * Zod schema for phone provider region information.
 *
 * Represents geographic region information for phone number providers.
 *
 * @typedef {Object} PhoneProviderRegionProperties
 * @property {string} regionId - Unique identifier for the region
 * @property {string} regionName - Human-readable name of the region
 * @property {string | null} [countryCode] - ISO country code (e.g., "US", "CA")
 * @property {string | null} [countryName] - Full country name
 * @property {ProviderType} providerType - Phone service provider type
 *
 * @example
 * ```typescript
 * const region: PhoneProviderRegion = {
 *   regionId: 'us-west',
 *   regionName: 'US West',
 *   countryCode: 'US',
 *   countryName: 'United States',
 *   providerType: ProviderType.TWILIO
 * };
 * ```
 */
export const PhoneProviderRegionSchema = z.object({
    regionId: z.string(),
    regionName: z.string(),
    countryCode: z.string().optional().nullable(),
    countryName: z.string().optional().nullable(),
    providerType: z.enum(ProviderType)
});

/**
 * Type definition for phone provider region.
 */
export type PhoneProviderRegion = z.infer<typeof PhoneProviderRegionSchema>;

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
 * @property {string} isoCountry - ISO country code
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
 *   isoCountry: 'US',
 *   capabilities: { voice: true, SMS: true, MMS: false },
 *   beta: false,
 *   numberType: PhoneNumberType.LOCAL
 * };
 * ```
 */
export const BasePhoneNumberInfoSchema = z.object({
    friendlyName: z.string(),
    phoneNumber: z.string(),
    lata: z.string().nullable().optional(),
    rateCenter: z.string().optional(),
    region: z.string().optional(),
    postalCode: z.string().optional(),
    isoCountry: z.string(),
    capabilities: z.object({
        voice: z.boolean(),
        SMS: z.boolean(),
        MMS: z.boolean(),
    }),
    beta: z.boolean(),
    numberType: z.enum(PhoneNumberType),
});

/**
 * Type definition for base phone number information.
 */
export type BasePhoneNumberInfo = z.infer<typeof BasePhoneNumberInfoSchema>;

/**
 * Zod schema for SignalWire-specific phone number information.
 *
 * Extends base phone number schema with SignalWire-specific fields.
 *
 * @example
 * ```typescript
 * const swPhone: SWPhoneNumberInfo = {
 *   friendlyName: 'SW Support Line',
 *   phoneNumber: '+12125551234',
 *   isoCountry: 'US',
 *   capabilities: { voice: true, SMS: true, MMS: false },
 *   beta: false,
 *   numberType: PhoneNumberType.LOCAL,
 *   latitude: '40.7128',
 *   longitude: '-74.0060',
 *   providerType: ProviderType.SIGNALWIRE
 * };
 * ```
 */
export const swPhoneNumberInfoSchema = BasePhoneNumberInfoSchema.safeExtend({
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    providerType: z.literal(ProviderType.SIGNALWIRE).default(ProviderType.SIGNALWIRE),
});

/**
 * Type definition for SignalWire phone number information.
 */
export type SWPhoneNumberInfo = z.infer<typeof swPhoneNumberInfoSchema>;

/**
 * Zod schema for Twilio-specific phone number information.
 *
 * Extends base phone number schema with Twilio-specific fields.
 *
 * @example
 * ```typescript
 * const twilioPhone: TwilioPhoneNumberInfo = {
 *   friendlyName: 'Twilio Support Line',
 *   phoneNumber: '+12125551234',
 *   isoCountry: 'US',
 *   capabilities: { voice: true, SMS: true, MMS: true },
 *   beta: false,
 *   numberType: PhoneNumberType.LOCAL,
 *   locality: 'New York',
 *   latitude: 40.7128,
 *   longitude: -74.0060,
 *   providerType: ProviderType.TWILIO
 * };
 * ```
 */
export const twilioPhoneNumberInfoSchema = BasePhoneNumberInfoSchema.safeExtend({
    locality: z.string().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    providerType: z.literal(ProviderType.TWILIO).default(ProviderType.TWILIO),
});

/**
 * Type definition for Twilio phone number information.
 */
export type TwilioPhoneNumberInfo = z.infer<typeof twilioPhoneNumberInfoSchema>;

/**
 * Zod schema for phone provider request.
 *
 * Used to request available phone numbers from a specific provider and region.
 *
 * @example
 * ```typescript
 * const request: PhoneProviderRequest = {
 *   providerType: ProviderType.TWILIO,
 *   region: 'us-west'
 * };
 * ```
 */
export const PhoneProviderRequestSchema = z.object({
    providerType: z.enum(ProviderType),
    region: z.string()
});

/**
 * Type definition for phone provider request.
 */
export type PhoneProviderRequest = z.infer<typeof PhoneProviderRequestSchema>;

/**
 * Zod schema for phone provider response.
 *
 * Response from phone number provider API calls.
 *
 * @example
 * ```typescript
 * const response: PhoneProviderResponse = {
 *   providerType: ProviderType.TWILIO,
 *   success: true,
 *   status: 200,
 *   data: { availableNumbers: [...] }
 * };
 * ```
 */
export const PhoneProviderResponseSchema = z.object({
    providerType: z.enum(ProviderType),
    success: z.boolean(),
    status: z.number().optional(),
    data: z.unknown(),
});

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
 * @property {string} organizationId - ID of the organization purchasing the number
 * @property {number} requestTime - Timestamp when the purchase was requested (default: Date.now())
 * @property {ProviderType} providerType - Provider from which the number is being purchased
 * @property {number} amount - Purchase amount (must be positive)
 * @property {string} currency - Currency code (3 characters, default: "USD")
 * @property {unknown} phoneNumberInfo - Detailed phone number information from provider
 * @property {PhonePurchaseStatus} status - Current status of the purchase (default: PENDING)
 * @property {PhoneNumberType} numberType - Type of phone number (default: LOCAL)
 * @property {string | null} [transactionId] - Provider's transaction identifier
 * @property {string | null} [statusDetails] - Additional details about the current status
 * @property {number | null} [completedAt] - Timestamp when purchase was completed
 * @property {Record<string, any> | null} [metadata] - Additional metadata for the purchase
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
 *
 * @example
 * ```typescript
 * const purchase: PhoneNumberPurchase = {
 *   id: 'purchase-123',
 *   friendlyName: 'Main Support Line',
 *   phoneNumber: '+12125551234',
 *   organizationId: 'org-456',
 *   requestTime: Date.now(),
 *   providerType: ProviderType.TWILIO,
 *   amount: 1.00,
 *   currency: 'USD',
 *   phoneNumberInfo: { ... },
 *   status: PhonePurchaseStatus.COMPLETED,
 *   numberType: PhoneNumberType.LOCAL,
 *   transactionId: 'txn-789',
 *   completedAt: Date.now(),
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const PhoneNumberPurchaseSchema = BaseModelSchema.safeExtend({
    friendlyName: z.string(),
    phoneNumber: z.string(),
    organizationId: z.string(),
    requestTime: z.number().default(Date.now()),
    providerType: z.enum(ProviderType),
    amount: z.number().positive(),
    currency: z.string().length(3).default('USD'),
    phoneNumberInfo: z.unknown(),
    status: z.enum(PhonePurchaseStatus).default(PhonePurchaseStatus.PENDING),
    numberType: z.enum(PhoneNumberType).default(PhoneNumberType.LOCAL),
    transactionId: z.string().nullable().optional(),
    statusDetails: z.string().nullable().optional(),
    completedAt: z.number().nullable().optional(),
    metadata: z.record(z.string(), z.any()).nullable().optional(),
});

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
 *   organizationId: 'org-456',
 *   providerType: ProviderType.TWILIO,
 *   amount: 1.00,
 *   currency: 'USD',
 *   phoneNumberInfo: { ... },
 *   status: PhonePurchaseStatus.PENDING,
 *   numberType: PhoneNumberType.LOCAL
 * };
 * ```
 */
export const CreatePhoneNumberPurchaseSchema = PhoneNumberPurchaseSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    transactionId: true,
    statusDetails: true,
    completedAt: true,
});

/**
 * Type definition for creating a phone number purchase.
 */
export type CreatePhoneNumberPurchase = z.infer<typeof CreatePhoneNumberPurchaseSchema>;

/**
 * Zod schema for updating an existing phone number purchase.
 *
 * All fields are optional (partial) except id. Allows updating transaction details.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 *
 * @example
 * ```typescript
 * const updatePurchase: UpdatePhoneNumberPurchase = {
 *   id: 'purchase-123',
 *   status: PhonePurchaseStatus.COMPLETED,
 *   transactionId: 'txn-789',
 *   completedAt: Date.now()
 * };
 * ```
 */
export const UpdatePhoneNumberPurchaseSchema = CreatePhoneNumberPurchaseSchema.partial().safeExtend({
    id: z.string(),
    transactionId: z.string().nullable().optional(),
    statusDetails: z.string().nullable().optional(),
    completedAt: z.number().nullable().optional(),
});

/**
 * Type definition for updating a phone number purchase.
 */
export type UpdatePhoneNumberPurchase = z.infer<typeof UpdatePhoneNumberPurchaseSchema>;

/**
 * Legacy schema export for backwards compatibility.
 * @deprecated Use CreatePhoneNumberPurchaseSchema instead.
 */
export const PhoneNumberPurchaseRequestSchema = CreatePhoneNumberPurchaseSchema;

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
 * @property {string} isoCountry - ISO country code
 * @property {Array} phoneNumberPrices - Array of pricing tiers
 * @property {number} price - Final price for the number
 * @property {string} priceUnit - Unit of pricing (e.g., "per month")
 * @property {ProviderType} providerType - Provider offering the number
 * @property {string} currency - Currency code (3 characters, default: "USD")
 *
 * @example
 * ```typescript
 * const pricing: PhoneNumberPricing = {
 *   number_type: PhoneNumberType.LOCAL,
 *   country: 'United States',
 *   isoCountry: 'US',
 *   phoneNumberPrices: [
 *     { base_price: '1.00', current_price: '1.00' }
 *   ],
 *   price: 1.00,
 *   priceUnit: 'per month',
 *   providerType: ProviderType.TWILIO,
 *   currency: 'USD'
 * };
 * ```
 */
export const PhoneNumberPricingSchema = z.object({
    number_type: z.enum(PhoneNumberType),
    country: z.string(),
    isoCountry: z.string(),
    phoneNumberPrices: z.array(z.object({
        base_price: z.string(),
        current_price: z.string(),
    })),
    price: z.number(),
    priceUnit: z.string(),
    providerType: z.enum(ProviderType),
    currency: z.string().length(3).default('USD'),
});

/**
 * Type definition for phone number pricing.
 */
export type PhoneNumberPricing = z.infer<typeof PhoneNumberPricingSchema>;

/**
 * Zod schema for provider phone number configuration.
 *
 * Represents the configuration and webhook settings for a phone number in the provider's system.
 *
 * @typedef {Object} ProviderPhoneNumberInfoProperties
 * @property {string} id - Unique identifier in provider's system
 * @property {string} [name] - Optional name for the phone number
 * @property {string} number - The phone number (must match E.164 format)
 * @property {string} [call_handler] - Handler ID for incoming calls
 * @property {string} call_receive_mode - UUID for call receive mode configuration
 * @property {string} [call_request_url] - Webhook URL for call events
 * @property {'POST' | 'GET'} [call_request_method] - HTTP method for call webhook
 * @property {string} [message_handler] - Handler ID for incoming messages
 * @property {string} [message_request_url] - Webhook URL for message events
 * @property {'POST' | 'GET'} [message_request_method] - HTTP method for message webhook
 * @property {string} [message_fallback_url] - Fallback webhook URL for message errors
 * @property {'POST' | 'GET'} [message_fallback_method] - HTTP method for fallback (default: 'POST')
 * @property {string} [created_at] - ISO datetime when created
 * @property {string} [updated_at] - ISO datetime when last updated
 * @property {string} [next_billed_at] - ISO datetime for next billing
 * @property {'toll-free' | 'longcode'} [number_type] - Type of number
 *
 * @example
 * ```typescript
 * const providerInfo: ProviderPhoneNumberInfo = {
 *   id: 'provider-123',
 *   name: 'Main Line',
 *   number: '+12125551234',
 *   call_receive_mode: 'uuid-here',
 *   call_request_url: 'https://api.example.com/calls',
 *   call_request_method: 'POST',
 *   message_request_url: 'https://api.example.com/messages',
 *   message_request_method: 'POST',
 *   number_type: 'longcode'
 * };
 * ```
 */
export const ProviderPhoneNumberInfoSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    number: z.string()
        .regex(/^(\+?\d{1,4}[-.\s]?)?(\(\d{1,3}\)[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/),
    call_handler: z.string().optional(),
    call_receive_mode: z.uuid(),
    call_request_url: z.url().optional(),
    call_request_method: z.enum(['POST', 'GET']).optional(),
    message_handler: z.string().optional(),
    message_request_url: z.url().optional(),
    message_request_method: z.enum(['POST', 'GET']).optional(),
    message_fallback_url: z.url().optional(),
    message_fallback_method: z.enum(['POST', 'GET']).default('POST').optional(),
    created_at: z.iso.datetime().optional(),
    updated_at: z.iso.datetime().optional(),
    next_billed_at: z.iso.datetime().optional(),
    number_type: z.enum(['toll-free', 'longcode']).optional(),
});

/**
 * Type definition for provider phone number configuration.
 */
export type ProviderPhoneNumberInfo = z.infer<typeof ProviderPhoneNumberInfoSchema>;
