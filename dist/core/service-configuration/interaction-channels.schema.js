"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentChannelDeletionRequestSchema = exports.DeploymentChannelWithDeploymentSchema = exports.ChannelUpdateRequestSchema = exports.ChannelSetupRequestSchema = exports.DeploymentChannelUpdateRequestSchema = exports.CreateDeploymentChannelSchema = exports.DeploymentChannelSchema = exports.DeploymentChannelRequestSchema = exports.CreateMobileAppChannelSchema = exports.CreateWebChannelSchema = exports.MobileAppChannelSchema = exports.WebChannelSchema = exports.SmsChannelSchema = exports.CallChannelSchema = exports.MobileAppChannelConfigSchema = exports.WebChannelConfigSchema = exports.PhoneChannelConfigSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const type_definitions_1 = require("../type-definitions");
/**
 * @fileoverview Deployment channel schema definitions for multi-channel interactions.
 *
 * Deployment Channels define the single communication channel through which a deployment is accessible
 * to end users. Each Deployment Configuration has exactly one Deployment Channel (1:1 relationship).
 * To expose an agent through multiple channels (e.g., both phone and web), create separate Deployment
 * Configurations for each channel.
 *
 * @module service-configuration/interaction-channels
 */
const phoneNumberPattern = /^(\+?\d{1,4}[-.\s]?)?(\(\d{1,3}\)[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const webSiteUrlPattern = /^(https?:\/\/)?(localhost|(\d{1,3}\.){3}\d{1,3}|([a-z0-9-]+\.)*[a-z0-9-]+\.[a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
/**
 * Zod schema for phone channel configuration.
 *
 * Configuration specific to phone-based channels supporting voice calls and SMS messaging.
 * This configuration links to a PhoneConfiguration resource that manages the actual phone number
 * and telephony provider settings.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Call and SMS deployment channels
 * - **Relationship**: References PhoneConfiguration via phoneConfigurationId
 * - **Features**: Supports call forwarding to external numbers for escalation or overflow
 */
exports.PhoneChannelConfigSchema = zod_1.z.object({
    phoneConfigurationId: zod_1.z.string().describe("ID of the PhoneConfiguration resource that manages the phone number and telephony provider settings for this channel"),
    // hasForwardingEnabled: z.boolean().default(false).describe("Whether call forwarding is enabled for this phone channel, allowing calls to be forwarded to external numbers for escalation or overflow handling"),
    // forwardingPhoneNumber: z.string().optional().nullable().describe("Phone number in E.164 format to forward calls to when forwarding is enabled (e.g., '+12125551234' for escalation or overflow)"),
});
/**
 * Zod schema for web channel configuration.
 *
 * Configuration specific to web-based chat widget channels that can be embedded in websites
 * and web applications for browser-based real-time communication.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Web deployment channels
 * - **Features**: Embeddable chat widget, WebSocket communication, rich media support
 * - **Customization**: Supports custom CSS and theming for brand consistency
 */
exports.WebChannelConfigSchema = zod_1.z.object({
    communicationType: zod_1.z.enum(type_definitions_1.OttCommunicationType).default(type_definitions_1.OttCommunicationType.UNIFIED).describe("Type of over-the-top (OTT) communication protocol used for the web channel (default: UNIFIED for combined text/media communication)"),
    widgetConfiguration: zod_1.z.object({
        position: zod_1.z.enum(['left', 'right']).default('right').describe("Position of the chat widget on the webpage (left or right side of the screen)"),
        customTheme: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional().default({}).describe("Custom theme properties as key-value pairs for advanced widget styling (e.g., primary color)"),
    }).optional().describe("Configuration settings for the chat widget appearance and behavior"),
});
/**
 * Zod schema for mobile app channel configuration.
 *
 * Configuration specific to mobile application channels for native iOS and Android integrations.
 * Enables SDK-based integration with platform-specific UI components.
 *
 * @remarks
 * **Architecture Context:**
 * - **Used By**: Mobile deployment channels
 * - **Features**: SDK-based integration, deep linking, platform-specific UI
 * - **Status**: Coming soon - currently in development
 */
exports.MobileAppChannelConfigSchema = zod_1.z.object({
    packageName: zod_1.z.string().default('').describe("Package name or bundle identifier for the mobile application (e.g., 'com.company.app' for Android or 'com.company.app' for iOS)"),
    platform: zod_1.z.enum(type_definitions_1.MobilePlatform).default(type_definitions_1.MobilePlatform.IOS).describe("Mobile platform this channel targets (iOS or Android) for platform-specific SDK integration"),
});
/**
 * Base deployment channel schema with common fields.
 *
 * Defines the single communication channel through which a Deployment Configuration is accessible.
 * Each Deployment Configuration has exactly one Deployment Channel (1:1 relationship).
 *
 * @remarks
 * **Architecture Context:**
 * - **Relationship**: 1:1 with Deployment Configuration (belongs to exactly one deployment)
 * - **Channel Types**: Phone (calls/SMS), Web (chat widget), or Mobile App
 * - **Pattern**: To expose an agent through multiple channels, create separate Deployment Configurations
 *
 * @typedef {Object} BaseDeploymentChannelProperties
 * @property {string} id - Unique identifier for the deployment channel
 * @property {DeploymentType} deploymentType - Type of deployment channel (CALLS, SMS, WEB, or MOBILE)
 * @property {string} [channelName] - Optional human-readable name for the channel for display purposes
 * @property {boolean} recordingEnabled - Whether interactions through this channel should be recorded for compliance and quality purposes (default: true)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when the channel was created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when the channel was last updated
 */
const BaseDeploymentChannelSchema = base_schema_1.BaseModelSchema.safeExtend({
    deploymentType: zod_1.z.enum(type_definitions_1.DeploymentType).describe("Type of deployment channel determining the communication medium (CALLS for voice, SMS for text messaging, WEB for chat widget, MOBILE for native apps)"),
    channelName: zod_1.z.string().optional().describe("Optional human-readable name for the channel used in administrative interfaces and reporting"),
    recordingEnabled: zod_1.z.boolean().default(true).describe("Whether interactions through this channel should be recorded for compliance, quality assurance, and training purposes"),
});
/**
 * Zod schema for call-based deployment channel.
 *
 * Defines a voice telephony channel for inbound and outbound phone calls. Integrates with
 * telephony providers (SignalWire, Twilio) through PhoneConfiguration.
 *
 * @remarks
 * **Architecture Context:**
 * - **Channel Type**: Phone (Voice Calls)
 * - **Integration**: PBX systems, contact centers, SIP trunks, cloud telephony
 * - **Features**: Call recording, DTMF input, call forwarding, SIP/VoIP support
 *
 * @example
 * ```typescript
 * const callChannel: CallChannelType = {
 *   id: '123*',
 *   channelIdentifier: '+12125551234',
 *   deploymentType: DeploymentType.CALLS,
 *   recordingEnabled: true,
 *   configuration: {
 *     phoneConfigurationId: '789*',
 *     hasForwardingEnabled: false
 *   }
 * };
 * ```
 */
exports.CallChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: zod_1.z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)').describe("Phone number in E.164 international format that serves as the inbound endpoint for voice calls (e.g., '+12125551234')"),
    deploymentType: zod_1.z.literal(type_definitions_1.DeploymentType.CALLS).describe("Channel type identifier, fixed to CALLS for voice telephony channels"),
    configuration: exports.PhoneChannelConfigSchema.describe("Phone-specific configuration including telephony provider settings and call forwarding options")
});
/**
 * Zod schema for SMS-based deployment channel.
 *
 * Defines an SMS messaging channel for text-based communication. Uses the same telephony
 * infrastructure as voice calls but optimized for asynchronous text messaging.
 *
 * @remarks
 * **Architecture Context:**
 * - **Channel Type**: Phone (SMS Messaging)
 * - **Integration**: SMS gateways, telephony providers
 * - **Features**: Asynchronous messaging, message history, multimedia support (MMS)
 */
exports.SmsChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: zod_1.z.string().regex(phoneNumberPattern, 'Phone number must be in E.164 format (e.g., +12125551234)').describe("Phone number in E.164 international format that serves as the endpoint for SMS messaging (e.g., '+12125551234')"),
    deploymentType: zod_1.z.literal(type_definitions_1.DeploymentType.SMS).describe("Channel type identifier, fixed to SMS for text messaging channels"),
    configuration: exports.PhoneChannelConfigSchema.describe("Phone-specific configuration including telephony provider settings for SMS delivery")
});
/**
 * Zod schema for web-based deployment channel.
 *
 * Defines a browser-based chat widget channel for website integration. Provides real-time
 * messaging with rich media support through WebSocket connections.
 *
 * @remarks
 * **Architecture Context:**
 * - **Channel Type**: Web (Chat Widget)
 * - **Integration**: Websites, web apps, customer portals, help centers
 * - **Features**: Embeddable widget, WebSocket real-time communication, rich media, session persistence
 */
exports.WebChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: zod_1.z.string().regex(webSiteUrlPattern, 'Invalid website URL format').describe("Website URL where the chat widget will be deployed (e.g., 'https://example.com' or 'localhost:3000' for development)"),
    deploymentType: zod_1.z.literal(type_definitions_1.DeploymentType.WEB).describe("Channel type identifier, fixed to WEB for browser-based chat widget channels"),
    configuration: exports.WebChannelConfigSchema.describe("Web-specific configuration including chat widget appearance, positioning, and theming options")
});
/**
 * Zod schema for mobile app deployment channel.
 *
 * Defines a native mobile application channel for iOS and Android apps. Enables SDK-based
 * integration with platform-specific UI components and capabilities.
 *
 * @remarks
 * **Architecture Context:**
 * - **Channel Type**: Mobile (Native App)
 * - **Integration**: iOS apps, Android apps, cross-platform frameworks (React Native, Flutter)
 * - **Features**: SDK integration, deep linking, platform-specific UI, push notifications
 * - **Status**: Coming soon - currently in development
 */
exports.MobileAppChannelSchema = BaseDeploymentChannelSchema.omit({ deploymentType: true }).safeExtend({
    channelIdentifier: zod_1.z.string().describe("Unique identifier for the mobile application deployment (typically the app bundle ID or package name)"),
    deploymentType: zod_1.z.literal(type_definitions_1.DeploymentType.MOBILE).describe("Channel type identifier, fixed to MOBILE for native mobile application channels"),
    configuration: exports.MobileAppChannelConfigSchema.describe("Mobile-specific configuration including platform selection and app package identification")
});
/**
 * Zod schema for creating a new web channel.
 */
exports.CreateWebChannelSchema = exports.WebChannelSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Zod schema for creating a new mobile app channel.
 */
exports.CreateMobileAppChannelSchema = exports.MobileAppChannelSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Zod schema for deployment channel creation request.
 *
 * Flexible schema that validates channel configuration based on deployment type.
 * Uses runtime validation to ensure channel-specific requirements are met.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Validates incoming requests to create new deployment channels
 * - **Validation**: Type-specific validation ensures correct configuration for each channel type
 * - **Usage**: Used by API endpoints for channel creation
 */
exports.DeploymentChannelRequestSchema = zod_1.z.object({
    deploymentType: zod_1.z.enum(type_definitions_1.DeploymentType).describe("Type of deployment channel to create (CALLS, SMS, WEB, or MOBILE)"),
    channelName: zod_1.z.string().optional().describe("Optional human-readable name for the channel"),
    recordingEnabled: zod_1.z.boolean().default(true).describe("Whether to enable interaction recording for this channel"),
    channelIdentifier: zod_1.z.string().describe("Channel-specific identifier (phone number for calls/SMS, URL for web, package name for mobile)"),
    configuration: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).describe("Channel-specific configuration object matching the requirements of the deployment type"),
    createdAt: zod_1.z.number().optional().describe("Unix timestamp (milliseconds) when the channel was created (auto-generated if not provided)"),
    updatedAt: zod_1.z.number().optional().describe("Unix timestamp (milliseconds) when the channel was last updated (auto-generated if not provided)"),
}).refine((data) => {
    switch (data.deploymentType) {
        case type_definitions_1.DeploymentType.CALLS:
            return exports.CallChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case type_definitions_1.DeploymentType.SMS:
            return exports.SmsChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case type_definitions_1.DeploymentType.WEB:
            return exports.WebChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        case type_definitions_1.DeploymentType.MOBILE:
            return exports.MobileAppChannelSchema.omit({
                id: true,
            }).safeParse(data).success;
        default:
            return false;
    }
}, "Invalid channel configuration for deployment type");
/**
 * Zod schema for main deployment channel with discriminated union.
 *
 * Provides type-safe channel configuration based on deployment type. This is the primary
 * schema used for deployment channel entities throughout the system.
 *
 * @remarks
 * **Architecture Context:**
 * - **Relationship**: 1:1 with Deployment Configuration (each deployment has exactly one channel)
 * - **Pattern**: Multi-channel deployments require separate Deployment Configurations per channel
 * - **Validation**: Configuration must match the deployment type requirements
 *
 * **Design Note:**
 * The discriminated union approach (commented code) provides stricter type safety but the
 * current union-based approach offers more flexibility for runtime validation.
 */
// export const DeploymentChannelSchema = BaseDeploymentChannelSchema.safeExtend({
//     channelIdentifier: z.string(),
// }).and(
//     z.discriminatedUnion('deploymentType', [
//         z.object({
//             deploymentType: z.literal(DeploymentType.CALLS),
//             channelIdentifier: z.string().regex(phoneNumberPattern),
//             configuration: PhoneChannelConfigSchema,
//         }),
//         z.object({
//             deploymentType: z.literal(DeploymentType.SMS),
//             channelIdentifier: z.string().regex(phoneNumberPattern),
//             configuration: PhoneChannelConfigSchema,
//         }),
//         z.object({
//             deploymentType: z.literal(DeploymentType.WEB),
//             channelIdentifier: z.string().regex(webSiteUrlPattern),
//             configuration: WebChannelConfigSchema,
//         }),
//         z.object({
//             deploymentType: z.literal(DeploymentType.MOBILE),
//             channelIdentifier: z.string(),
//             configuration: MobileAppChannelConfigSchema,
//         }),
//     ])
// );
exports.DeploymentChannelSchema = BaseDeploymentChannelSchema.safeExtend({
    channelIdentifier: zod_1.z.string().describe("Channel-specific identifier: phone number (E.164 format) for calls/SMS, website URL for web, or app package name for mobile"),
    configuration: zod_1.z.union([
        exports.PhoneChannelConfigSchema,
        exports.WebChannelConfigSchema,
        exports.MobileAppChannelConfigSchema,
    ]).describe("Channel-specific configuration object matching the deployment type (PhoneChannelConfig for calls/SMS, WebChannelConfig for web, MobileAppChannelConfig for mobile)"),
});
/**
 * Zod schema for creating deployment channel.
 */
exports.CreateDeploymentChannelSchema = exports.DeploymentChannelRequestSchema;
/**
 * Zod schema for updating deployment channel.
 *
 * Supports partial updates to existing deployment channels. All fields are optional except id.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Enables modification of channel settings without recreating the deployment
 * - **Validation**: Partial validation ensures only provided fields are validated
 * - **Usage**: Used by API endpoints for channel updates
 */
exports.DeploymentChannelUpdateRequestSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Unique identifier of the deployment channel to update"),
    deploymentType: zod_1.z.enum(type_definitions_1.DeploymentType).optional().describe("Optional update to the channel type (generally not recommended to change after creation)"),
    channelName: zod_1.z.string().optional().describe("Optional update to the human-readable channel name"),
    recordingEnabled: zod_1.z.boolean().optional().describe("Optional update to the recording settings for this channel"),
    channelIdentifier: zod_1.z.string().optional().describe("Optional update to the channel identifier (phone number, URL, or package name)"),
    configuration: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Optional update to the channel-specific configuration object"),
});
/**
 * Zod schema for channel setup request.
 *
 * Complete setup request for creating a new deployment with its associated channel and configurations.
 * This is a convenience schema that combines channel creation with deployment configuration references.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Simplifies deployment creation by bundling channel and configuration references
 * - **Relationship**: Creates a Deployment Configuration with associated channel, project, agent, and instruction
 * - **Pattern**: One request creates the complete deployment stack
 */
exports.ChannelSetupRequestSchema = zod_1.z.object({
    channel: exports.DeploymentChannelRequestSchema.describe("Deployment channel configuration to create, including type, identifier, and channel-specific settings"),
    projectId: zod_1.z.string().describe("ID of the project this deployment belongs to for organizational grouping and access control"),
    agentConfigurationId: zod_1.z.string().describe("ID of the agent configuration that defines the agent's core behavior and capabilities (N:1 relationship)"),
    instructionConfigurationId: zod_1.z.string().describe("ID of the instruction configuration that provides behavioral guidelines for the agent (N:1 relationship)"),
});
/**
 * Zod schema for channel update request.
 *
 * Partial update request for modifying an existing deployment and its associated channel.
 * Supports updating the channel configuration and/or changing the referenced configurations.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Enables modification of deployment configuration references and channel settings
 * - **Flexibility**: All fields are optional for partial updates
 * - **Usage**: Used to update deployments without full recreation
 */
exports.ChannelUpdateRequestSchema = zod_1.z.object({
    channel: exports.DeploymentChannelUpdateRequestSchema.describe("Partial update to the deployment channel configuration"),
    projectId: zod_1.z.string().optional().describe("Optional update to the project association for this deployment"),
    agentConfigurationId: zod_1.z.string().optional().describe("Optional update to the agent configuration reference (switches to a different agent)"),
    instructionConfigurationId: zod_1.z.string().optional().describe("Optional update to the instruction configuration reference (switches to different behavioral guidelines)"),
});
/**
 * Zod schema for deployment channel with deployment information.
 *
 * Extended view that includes both the channel configuration and its associated deployment details.
 * This schema is typically used for detailed views where the complete deployment context is needed.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Provides complete deployment context in a single response
 * - **Usage**: Used for detail views and administrative interfaces
 * - **Relationship**: Combines DeploymentChannel with its associated Deployment Configuration
 */
exports.DeploymentChannelWithDeploymentSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Unique identifier for the deployment channel"),
    deploymentType: zod_1.z.enum(type_definitions_1.DeploymentType).describe("Type of deployment channel (CALLS, SMS, WEB, or MOBILE)"),
    channelName: zod_1.z.string().optional().describe("Optional human-readable name for the channel"),
    recordingEnabled: zod_1.z.boolean().default(true).describe("Whether interactions through this channel are being recorded"),
    channelIdentifier: zod_1.z.string().describe("Channel-specific identifier (phone number, URL, or package name)"),
    configuration: zod_1.z.union([
        exports.PhoneChannelConfigSchema,
        exports.WebChannelConfigSchema,
        exports.MobileAppChannelConfigSchema,
    ]).describe("Channel-specific configuration object"),
    deployment: zod_1.z.object({
        id: zod_1.z.string().describe("Unique identifier for the deployment configuration"),
        projectId: zod_1.z.string().describe("ID of the project this deployment belongs to"),
        deploymentChannelId: zod_1.z.string().describe("ID of this deployment channel (should match the parent channel's id)"),
        deploymentName: zod_1.z.string().optional().describe("Optional human-readable name for the deployment"),
        agentConfigurationId: zod_1.z.string().describe("ID of the agent configuration used by this deployment"),
        instructionConfigurationId: zod_1.z.string().describe("ID of the instruction configuration used by this deployment"),
        provisioningConfigChainId: zod_1.z.string().optional().nullable().describe("Optional ID of the provisioning chain for voice processing (STT → Agent → TTS)"),
        provisioningType: zod_1.z.enum(type_definitions_1.DeploymentProvisioningType).optional().nullable().describe("How this deployment is provisioned (DIRECT or CHAINED)"),
        deploymentStatus: zod_1.z.enum(type_definitions_1.DeploymentStatus).describe("Current operational status of the deployment"),
        isActive: zod_1.z.boolean().default(false).describe("Whether this deployment is currently active and accepting interactions"),
        project: zod_1.z.any().optional().nullable().describe("Optional populated project details"),
        agent: zod_1.z.any().optional().nullable().describe("Optional populated agent configuration details"),
        instruction: zod_1.z.any().optional().nullable().describe("Optional populated instruction configuration details"),
        createdAt: zod_1.z.number().describe("Unix timestamp (milliseconds) when the deployment was created"),
    }).nullable().describe("Associated deployment configuration details (null if channel is not yet associated with a deployment)"),
});
exports.DeploymentChannelDeletionRequestSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Unique identifier of the deployment channel to delete"),
    deletePhoneConfig: zod_1.z.boolean().optional().default(true).describe("Whether to also delete associated phone configurations"),
});
