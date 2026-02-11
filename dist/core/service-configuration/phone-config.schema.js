"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneConfigurationSchema = exports.PhoneConfigurationSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const interaction_channels_schema_1 = require("./interaction-channels.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Phone configuration schema definitions for telephony management.
 *
 * Phone Configurations manage telephony resources including phone numbers from various providers
 * (SignalWire, Twilio). They track provider information, channel associations, and operational status.
 * Referenced by Phone Channel configurations for call and SMS deployments.
 *
 * @module service-configuration/phone-config
 */
const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
/**
 * Zod schema for Phone Configuration validation.
 *
 * Manages a phone number resource from a telephony provider, tracking its configuration, status,
 * and associations with deployment channels. A single phone number can support both voice calls
 * and SMS through separate channel associations.
 *
 * @remarks
 * **Architecture Context:**
 * - **Referenced By**: PhoneChannelConfig (via phoneConfigurationId)
 * - **Purpose**: Manages telephony resources and provider integration
 * - **Dual Channel Support**: One phone number can have both voice and SMS channels
 * - **Providers**: SignalWire, Twilio, and other SIP/VoIP providers
 *
 * **Phone Number Lifecycle:**
 * - **PENDING**: Purchase initiated, awaiting provisioning
 * - **ACTIVE**: Operational and ready for deployments
 * - **INACTIVE**: Purchased but not yet activated
 * - **SUSPENDED**: Temporarily disabled
 * - **RELEASED**: Disconnected and returned to provider
 *
 * @typedef {Object} PhoneConfigurationProperties
 * @property {string} id - Unique identifier for the phone configuration
 * @property {string} phoneNumber - Phone number in E.164 international format (e.g., '+12125551234' for US, '+442071234567' for UK)
 * @property {string} providerPhoneNumberId - Unique identifier from the telephony provider's system for this phone number
 * @property {string} phoneRequestId - Reference ID for the original phone number purchase transaction
 * @property {string | null} friendlyName - Human-readable display name for administrative interfaces
 * @property {string | null} [regionId] - Region identifier where this number is registered (provider-specific)
 * @property {number | null} [monthlyPrice] - Monthly recurring cost for maintaining this phone number
 * @property {string | null} [regionOrCountryName] - Human-readable region or country name
 * @property {string} [countryCode] - ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'CA')
 * @property {ProviderType} providerType - Telephony service provider (SIGNALWIRE, TWILIO, etc.) (default: SIGNALWIRE)
 * @property {boolean} isImported - Whether this number was imported from external system (default: false)
 * @property {PhoneStatus} status - Current operational status (PENDING, ACTIVE, INACTIVE, SUSPENDED, RELEASED) (default: INACTIVE)
 * @property {boolean} isPorted - Whether this number was ported from another provider (default: false)
 * @property {boolean | null} [markedForRelease] - Whether marked for disconnection (default: false)
 * @property {Record<string, any>} [metadata] - Additional provider-specific metadata
 * @property {string | null} [voiceChannelId] - ID of the voice/call deployment channel using this number
 * @property {string | null} [smsChannelId] - ID of the SMS deployment channel using this number
 * @property {DeploymentChannelInfo | null} [voiceChannel] - Populated voice channel configuration and deployment
 * @property {DeploymentChannelInfo | null} [smsChannel] - Populated SMS channel configuration and deployment
 * @property {boolean} isUSSMSPermitted - Whether US SMS messaging is permitted (compliance flag) (default: false)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const phoneConfig: PhoneConfiguration = {
 *   id: '123*',
 *   phoneNumber: '+12125551234',
 *   providerPhoneNumberId: 'PN123abc*',
 *   phoneRequestId: 'REQ456*',
 *   friendlyName: 'Customer Support Line',
 *   regionId: 'us-ny',
 *   monthlyPrice: 1.00,
 *   regionOrCountryName: 'New York, United States',
 *   countryCode: 'US',
 *   providerType: ProviderType.SIGNALWIRE,
 *   status: PhoneStatus.ACTIVE,
 *   isImported: false,
 *   isPorted: false,
 *   isUSSMSPermitted: true,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
exports.PhoneConfigurationSchema = base_schema_1.BaseModelSchema.safeExtend({
    phoneNumber: zod_1.z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)').describe("Phone number in E.164 international format (e.g., '+12125551234' for US, '+442071234567' for UK, '+33123456789' for France)"),
    providerPhoneNumberId: zod_1.z.string().describe("Unique identifier for this phone number from the telephony provider's system (provider-specific format)"),
    phoneRequestId: zod_1.z.string().describe("Reference ID for the original phone number purchase or provisioning transaction for tracking and audit"),
    friendlyName: zod_1.z.string().nullable().describe("Human-readable display name for this phone number used in administrative interfaces (e.g., 'Customer Support Line', 'Sales Main Number')"),
    regionId: zod_1.z.string().optional().nullable().describe("Region identifier where this phone number is registered (provider-specific, e.g., 'us-ny' for New York)"),
    monthlyPrice: zod_1.z.number().optional().nullable().describe("Monthly recurring cost for maintaining this phone number in USD or provider currency"),
    regionOrCountryName: zod_1.z.string().optional().nullable().describe("Human-readable name of the region or country where this number is registered (e.g., 'New York, United States', 'London, United Kingdom')"),
    countryCode: zod_1.z.string().optional().describe("ISO 3166-1 alpha-2 country code where the phone number is registered (e.g., 'US', 'GB', 'CA')"),
    providerType: zod_1.z.enum(type_definitions_1.ProviderType).default(type_definitions_1.ProviderType.SIGNALWIRE).describe("Telephony service provider managing this phone number (SIGNALWIRE, TWILIO, VONAGE, etc.)"),
    isImported: zod_1.z.boolean().default(false).describe("Flag indicating if this phone number was imported from an external system rather than purchased through the platform"),
    status: zod_1.z.enum(type_definitions_1.PhoneStatus).default(type_definitions_1.PhoneStatus.INACTIVE).describe("Current operational status (PENDING: provisioning, ACTIVE: operational, INACTIVE: purchased but not activated, SUSPENDED: temporarily disabled, RELEASED: disconnected)"),
    isPorted: zod_1.z.boolean().default(false).describe("Flag indicating if this phone number was ported from another telephony provider (true) or purchased new (false)"),
    markedForRelease: zod_1.z.boolean().nullable().optional().default(false).describe("Flag indicating if this phone number is marked for release/disconnection in the next billing cycle"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Additional provider-specific metadata, configuration details, or custom attributes for this phone number"),
    voiceChannelId: zod_1.z.string().optional().nullable().describe("ID of the voice/call deployment channel associated with this phone number (null if not used for voice)"),
    smsChannelId: zod_1.z.string().optional().nullable().describe("ID of the SMS deployment channel associated with this phone number (null if not used for SMS)"),
    voiceChannel: interaction_channels_schema_1.DeploymentChannelWithDeploymentSchema.nullable().optional().describe("Populated voice deployment channel configuration including deployment details (null if not loaded or not used for voice)"),
    smsChannel: interaction_channels_schema_1.DeploymentChannelWithDeploymentSchema.nullable().optional().describe("Populated SMS deployment channel configuration including deployment details (null if not loaded or not used for SMS)"),
    isUSSMSPermitted: zod_1.z.boolean().default(false).describe("Compliance flag indicating if US SMS messaging is permitted for this phone number (required for A2P 10DLC registration)"),
});
/**
 * Zod schema for updating an existing phone configuration.
 *
 * Only allows updating the friendly name and requires the id to identify the configuration.
 *
 * @example
 * ```typescript
 * const updatePayload: UpdatePhoneConfiguration = {
 *   id: '123*',
 *   friendlyName: 'Updated Support Line Name'
 * };
 * ```
 */
exports.UpdatePhoneConfigurationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    friendlyName: zod_1.z.string().nullable(),
});
