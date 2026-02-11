import { z } from "zod";
import { PhoneStatus, ProviderType } from "../type-definitions";
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
export declare const PhoneConfigurationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    phoneNumber: z.ZodString;
    providerPhoneNumberId: z.ZodString;
    phoneRequestId: z.ZodString;
    friendlyName: z.ZodNullable<z.ZodString>;
    regionId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    monthlyPrice: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    regionOrCountryName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodString>;
    providerType: z.ZodDefault<z.ZodEnum<typeof ProviderType>>;
    isImported: z.ZodDefault<z.ZodBoolean>;
    status: z.ZodDefault<z.ZodEnum<typeof PhoneStatus>>;
    isPorted: z.ZodDefault<z.ZodBoolean>;
    markedForRelease: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    voiceChannelId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    smsChannelId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    voiceChannel: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        deploymentType: z.ZodEnum<typeof import("../type-definitions").DeploymentType>;
        channelName: z.ZodOptional<z.ZodString>;
        recordingEnabled: z.ZodDefault<z.ZodBoolean>;
        channelIdentifier: z.ZodString;
        configuration: z.ZodUnion<readonly [z.ZodObject<{
            phoneConfigurationId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            communicationType: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").OttCommunicationType>>;
            widgetConfiguration: z.ZodOptional<z.ZodObject<{
                position: z.ZodDefault<z.ZodEnum<{
                    left: "left";
                    right: "right";
                }>>;
                customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            packageName: z.ZodDefault<z.ZodString>;
            platform: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").MobilePlatform>>;
        }, z.core.$strip>]>;
        deployment: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            deploymentChannelId: z.ZodString;
            deploymentName: z.ZodOptional<z.ZodString>;
            agentConfigurationId: z.ZodString;
            instructionConfigurationId: z.ZodString;
            provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            provisioningType: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof import("../type-definitions").DeploymentProvisioningType>>>;
            deploymentStatus: z.ZodEnum<typeof import("../type-definitions").DeploymentStatus>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            project: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            agent: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            instruction: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            createdAt: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    smsChannel: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        deploymentType: z.ZodEnum<typeof import("../type-definitions").DeploymentType>;
        channelName: z.ZodOptional<z.ZodString>;
        recordingEnabled: z.ZodDefault<z.ZodBoolean>;
        channelIdentifier: z.ZodString;
        configuration: z.ZodUnion<readonly [z.ZodObject<{
            phoneConfigurationId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            communicationType: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").OttCommunicationType>>;
            widgetConfiguration: z.ZodOptional<z.ZodObject<{
                position: z.ZodDefault<z.ZodEnum<{
                    left: "left";
                    right: "right";
                }>>;
                customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            packageName: z.ZodDefault<z.ZodString>;
            platform: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").MobilePlatform>>;
        }, z.core.$strip>]>;
        deployment: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            deploymentChannelId: z.ZodString;
            deploymentName: z.ZodOptional<z.ZodString>;
            agentConfigurationId: z.ZodString;
            instructionConfigurationId: z.ZodString;
            provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            provisioningType: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof import("../type-definitions").DeploymentProvisioningType>>>;
            deploymentStatus: z.ZodEnum<typeof import("../type-definitions").DeploymentStatus>;
            isActive: z.ZodDefault<z.ZodBoolean>;
            project: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            agent: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            instruction: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
            createdAt: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    isUSSMSPermitted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const UpdatePhoneConfigurationSchema: z.ZodObject<{
    id: z.ZodString;
    friendlyName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Type definition for updating an existing phone configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdatePhoneConfiguration = z.infer<typeof UpdatePhoneConfigurationSchema>;
