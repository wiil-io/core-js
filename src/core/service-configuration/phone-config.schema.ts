import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { DeploymentChannelWithDeploymentSchema } from "./interaction-channels.schema";
import { PhoneStatus, ProviderType } from "../type-definitions";

/**
 * @fileoverview Phone configuration schema definitions for telephony management.
 * @module service-configuration/phone-config
 */

const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;

/**
 * Zod schema for Phone Configuration validation.
 *
 * Defines the complete configuration for a phone number, including provider information,
 * channel associations, and operational status.
 *
 * @typedef {Object} PhoneConfigurationProperties
 * @property {string} id - Unique identifier for the phone configuration
 * @property {string} phoneNumber - Phone number in E.164 international format (e.g., +12125551234)
 * @property {string} providerPhoneNumberId - Unique identifier for this phone number from the telephony provider
 * @property {string} phoneRequestId - Reference ID for the original phone number request or purchase transaction
 * @property {string | null} friendlyName - Human-readable display name for this phone number
 * @property {string | null} [regionId] - Region identifier where this phone number is registered
 * @property {number | null} [monthlyPrice] - Monthly cost for maintaining this phone number
 * @property {string | null} [regionOrCountryName] - Human-readable name of the region or country where this number is registered
 * @property {string} [countryCode] - ISO country code for this phone number
 * @property {ProviderType} providerType - Telephony service provider (SignalWire, Twilio, etc.) (default: SIGNALWIRE)
 * @property {string} [providerAccountId] - Account identifier with the telephony provider
 * @property {boolean} isImported - Flag indicating if this phone number was imported from an external system (default: false)
 * @property {PhoneStatus} status - Current operational status of the phone number (default: INACTIVE)
 * @property {boolean} isPorted - Flag indicating if this phone number was ported from another provider (default: false)
 * @property {boolean | null} [markedForRelease] - Flag indicating if this phone number is marked for release/disconnection (default: false)
 * @property {Record<string, any>} [metadata] - Additional metadata for the phone configuration
 * @property {string | null} [voiceChannelId] - ID of the voice/call deployment channel associated with this phone number
 * @property {string | null} [smsChannelId] - ID of the SMS deployment channel associated with this phone number
 * @property {DeploymentChannelInfo | null} [voiceChannel] - Complete voice deployment channel configuration and deployment information
 * @property {DeploymentChannelInfo | null} [smsChannel] - Complete SMS deployment channel configuration and deployment information
 * @property {boolean} isUSSMSPermitted - Flag indicating if US SMS messaging is permitted for this phone number (default: false)
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
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
export const PhoneConfigurationSchema = BaseModelSchema.safeExtend({
    phoneNumber: z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)'),
    providerPhoneNumberId: z.string(),
    phoneRequestId: z.string(),
    friendlyName: z.string().nullable(),
    regionId: z.string().optional().nullable(),
    monthlyPrice: z.number().optional().nullable(),
    regionOrCountryName: z.string().optional().nullable(),
    countryCode: z.string().optional(),
    providerType: z.enum(ProviderType).default(ProviderType.SIGNALWIRE),
    providerAccountId: z.string().optional(),
    isImported: z.boolean().default(false),
    status: z.enum(PhoneStatus).default(PhoneStatus.INACTIVE),
    isPorted: z.boolean().default(false),
    markedForRelease: z.boolean().nullable().optional().default(false),
    metadata: z.record(z.string(), z.any()).optional(),
    voiceChannelId: z.string().optional().nullable(),
    smsChannelId: z.string().optional().nullable(),
    voiceChannel: DeploymentChannelWithDeploymentSchema.nullable().optional(),
    smsChannel: DeploymentChannelWithDeploymentSchema.nullable().optional(),
    isUSSMSPermitted: z.boolean().default(false),
});

/**
 * Type definition for Phone Configuration.
 *
 * Represents a complete phone configuration including all metadata,
 * provider information, and channel associations.
 */
export type PhoneConfiguration = z.infer<typeof PhoneConfigurationSchema>;

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
export const UpdatePhoneConfigurationSchema = z.object({
    id: z.string(),
    friendlyName: z.string().nullable(),
});

/**
 * Type definition for updating an existing phone configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdatePhoneConfiguration = z.infer<typeof UpdatePhoneConfigurationSchema>;
