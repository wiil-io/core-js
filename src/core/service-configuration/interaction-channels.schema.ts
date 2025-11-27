
import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { DeploymentProvisioningType, DeploymentStatus, DeploymentType, MobilePlatform, OttCommunicationType } from "../type-definitions";

/**
 * @fileoverview Deployment channel schema definitions for multi-channel interactions.
 * @module service-configuration/interaction-channels
 */

const phoneNumberPattern = /^(\+?\d{1,4}[-.\s]?)?(\(\d{1,3}\)[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const webSiteUrlPattern = /^(https?:\/\/)?(localhost|(\d{1,3}\.){3}\d{1,3}|([a-z0-9-]+\.)*[a-z0-9-]+\.[a-z]{2,})(:\d{1,5})?(\/.*)?$/i;

/**
 * Zod schema for phone channel configuration.
 *
 * Configuration specific to phone-based channels (calls and SMS).
 */
export const PhoneChannelConfigSchema = z.object({
    phoneConfigurationId: z.string(),
    hasForwardingEnabled: z.boolean().default(false),
    forwardingPhoneNumber: z.string().optional().nullable(),
});

/**
 * Zod schema for web channel configuration.
 *
 * Configuration specific to web-based chat widget channels.
 */
export const WebChannelConfigSchema = z.object({
    communicationType: z.enum(OttCommunicationType).default(OttCommunicationType.UNIFIED),
    customCssUrl: z.url().optional().nullable().default(null),
    widgetConfiguration: z.object({
        position: z.enum(['left', 'right']).default('right'),
        theme: z.enum(['light', 'dark', 'custom']).default('light'),
        customTheme: z.record(z.string(), z.string()).optional().default({}),
    }).optional(),
});

/**
 * Zod schema for mobile app channel configuration.
 *
 * Configuration specific to mobile application channels.
 */
export const MobileAppChannelConfigSchema = z.object({
    packageName: z.string().default(''),
    platform: z.enum(MobilePlatform).default(MobilePlatform.IOS),
});

/**
 * Base deployment channel schema with common fields.
 *
 * @typedef {Object} BaseDeploymentChannelProperties
 * @property {string} id - Unique identifier for the deployment channel
 * @property {string} organizationId - ID of the organization that owns this channel
 * @property {DeploymentType} deploymentType - Type of deployment (calls, SMS, web, mobile)
 * @property {string} [channelName] - Human-readable name for the channel
 * @property {boolean} recordingEnabled - Whether interactions should be recorded (default: true)
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
 */
const BaseDeploymentChannelSchema = BaseModelSchema.safeExtend({
    organizationId: z.string(),
    deploymentType: z.enum(DeploymentType),
    channelName: z.string().optional(),
    recordingEnabled: z.boolean().default(true),
});

/**
 * Zod schema for call-based deployment channel.
 *
 * @example
 * ```typescript
 * const callChannel: CallChannelType = {
 *   id: 'chan-123',
 *   organizationId: 'org-456',
 *   channelIdentifier: '+12125551234',
 *   deploymentType: DeploymentType.CALLS,
 *   recordingEnabled: true,
 *   configuration: {
 *     phoneConfigurationId: 'phone-config-789',
 *     hasForwardingEnabled: false
 *   }
 * };
 * ```
 */
export const CallChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)'),
    deploymentType: z.literal(DeploymentType.CALLS),
    configuration: PhoneChannelConfigSchema
});

/**
 * Zod schema for SMS-based deployment channel.
 */
export const SmsChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)'),
    deploymentType: z.literal(DeploymentType.SMS),
    configuration: PhoneChannelConfigSchema
});

/**
 * Zod schema for web-based deployment channel.
 */
export const WebChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: z.string().regex(webSiteUrlPattern, 'Invalid website URL format'),
    deploymentType: z.literal(DeploymentType.WEB),
    configuration: WebChannelConfigSchema
});

/**
 * Zod schema for mobile app deployment channel.
 */
export const MobileAppChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: z.string(),
    deploymentType: z.literal(DeploymentType.MOBILE),
    configuration: MobileAppChannelConfigSchema
});

/**
 * Type definition for call channel.
 */
export type CallChannelType = z.infer<typeof CallChannelSchema>;

/**
 * Type definition for SMS channel.
 */
export type SmsChannelType = z.infer<typeof SmsChannelSchema>;

/**
 * Type definition for web channel.
 */
export type WebChannelType = z.infer<typeof WebChannelSchema>;

/**
 * Type definition for mobile app channel.
 */
export type MobileAppChannelType = z.infer<typeof MobileAppChannelSchema>;


/**
 * Zod schema for creating a new web channel.
 */
export const CreateWebChannelSchema = WebChannelSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Zod schema for creating a new mobile app channel.
 */
export const CreateMobileAppChannelSchema = MobileAppChannelSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


/**
 * Type definition for creating a web channel.
 */
export type CreateWebChannel = z.infer<typeof CreateWebChannelSchema>;

/**
 * Type definition for creating a mobile app channel.
 */
export type CreateMobileAppChannel = z.infer<typeof CreateMobileAppChannelSchema>;

/**
 * Zod schema for deployment channel creation request.
 *
 * Flexible schema that validates based on deployment type.
 */
export const DeploymentChannelRequestSchema = z.object({
    organizationId: z.string(),
    deploymentType: z.enum(DeploymentType),
    channelName: z.string().optional(),
    recordingEnabled: z.boolean().default(true),
    channelIdentifier: z.string(),
    configuration: z.record(z.string(), z.any()),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
}).refine((data) => {
    switch (data.deploymentType) {
        case DeploymentType.CALLS:
            return CallChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case DeploymentType.SMS:
            return SmsChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case DeploymentType.WEB:
            return WebChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case DeploymentType.MOBILE:
            return MobileAppChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        default:
            return false;
    }
}, "Invalid channel configuration for deployment type");

/**
 * Zod schema for main deployment channel with discriminated union.
 *
 * Provides type-safe channel configuration based on deployment type.
 */
export const DeploymentChannelSchema = BaseDeploymentChannelSchema.safeExtend({
    channelIdentifier: z.string(),
}).and(
    z.discriminatedUnion('deploymentType', [
        z.object({
            deploymentType: z.literal(DeploymentType.CALLS),
            channelIdentifier: z.string().regex(phoneNumberPattern),
            configuration: PhoneChannelConfigSchema,
        }),
        z.object({
            deploymentType: z.literal(DeploymentType.SMS),
            channelIdentifier: z.string().regex(phoneNumberPattern),
            configuration: PhoneChannelConfigSchema,
        }),
        z.object({
            deploymentType: z.literal(DeploymentType.WEB),
            channelIdentifier: z.string().regex(webSiteUrlPattern),
            configuration: WebChannelConfigSchema,
        }),
        z.object({
            deploymentType: z.literal(DeploymentType.MOBILE),
            channelIdentifier: z.string(),
            configuration: MobileAppChannelConfigSchema,
        }),
    ])
);

/**
 * Type definition for deployment channel.
 */
export type DeploymentChannel = z.infer<typeof DeploymentChannelSchema>;

/**
 * Zod schema for creating deployment channel.
 */
export const CreateDeploymentChannelSchema = DeploymentChannelRequestSchema;

/**
 * Type definition for creating deployment channel.
 */
export type CreateDeploymentChannel = z.infer<typeof CreateDeploymentChannelSchema>;

/**
 * Zod schema for updating deployment channel.
 *
 * All fields are optional except id.
 */
export const DeploymentChannelUpdateRequestSchema = z.object({
    id: z.string(),
    organizationId: z.string().optional(),
    deploymentType: z.enum(DeploymentType).optional(),
    channelName: z.string().optional(),
    recordingEnabled: z.boolean().optional(),
    channelIdentifier: z.string().optional(),
    configuration: z.record(z.string(), z.any()).optional(),
});

/**
 * Type definition for updating deployment channel.
 */
export type UpdateDeploymentChannel = z.infer<typeof DeploymentChannelUpdateRequestSchema>;

/**
 * Zod schema for channel setup request.
 *
 * Complete setup including channel and associated configurations.
 */
export const ChannelSetupRequestSchema = z.object({
    channel: DeploymentChannelRequestSchema,
    projectId: z.string(),
    agentConfigurationId: z.string(),
    instructionConfigurationId: z.string(),
});

/**
 * Type definition for channel setup request.
 */
export type ChannelSetupRequest = z.infer<typeof ChannelSetupRequestSchema>;

/**
 * Zod schema for channel update request.
 *
 * Partial update of channel and associated configurations.
 */
export const ChannelUpdateRequestSchema = z.object({
    channel: DeploymentChannelUpdateRequestSchema,
    projectId: z.string().optional(),
    agentConfigurationId: z.string().optional(),
    instructionConfigurationId: z.string().optional(),
});

/**
 * Type definition for channel update request.
 */
export type ChannelUpdateRequest = z.infer<typeof ChannelUpdateRequestSchema>;

/**
 * Type definition for deployment channel request (legacy compatibility).
 */
export type DeploymentChannelRequest = z.infer<typeof DeploymentChannelRequestSchema>;

/**
 * Type definition for deployment channel type (legacy compatibility).
 */
export type DeploymentChannelType = z.infer<typeof DeploymentChannelSchema>;

/**
 * Type definition for deployment channel update (legacy compatibility).
 */
export type DeploymentChannelUpdate = z.infer<typeof DeploymentChannelUpdateRequestSchema>;

/**
 * Type definition for deployment channel update request (legacy compatibility).
 */
export type DeploymentChannelUpdateRequest = z.infer<typeof ChannelUpdateRequestSchema>;

/**
 * Zod schema for deployment channel with deployment information.
 *
 * Extended view including associated deployment details.
 */
export const DeploymentChannelWithDeploymentSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    deploymentType: z.enum(DeploymentType),
    channelName: z.string().optional(),
    recordingEnabled: z.boolean().default(true),
    channelIdentifier: z.string(),
    configuration: z.union([
        PhoneChannelConfigSchema,
        WebChannelConfigSchema,
        MobileAppChannelConfigSchema,
    ]),
    deployment: z.object({
        id: z.string(),
        projectId: z.string(),
        organizationId: z.string(),
        deploymentChannelId: z.string(),
        deploymentName: z.string().optional(),
        agentConfigurationId: z.string(),
        instructionConfigurationId: z.string(),
        provisioningConfigChainId: z.string().optional().nullable(),
        provisioningType: z.enum(DeploymentProvisioningType).optional().nullable(),
        deploymentStatus: z.enum(DeploymentStatus),
        isActive: z.boolean().default(false),
        project: z.any().optional().nullable(),
        agent: z.any().optional().nullable(),
        instruction: z.any().optional().nullable(),
        createdAt: z.number(),
    }).nullable(),
});

/**
 * Type definition for deployment channel with deployment info.
 */
export type DeploymentChannelInfo = z.infer<typeof DeploymentChannelWithDeploymentSchema>;

