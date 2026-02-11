import { z } from "zod";
import { DeploymentProvisioningType, DeploymentStatus, DeploymentType, MobilePlatform, OttCommunicationType } from "../type-definitions";
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
export declare const PhoneChannelConfigSchema: z.ZodObject<{
    phoneConfigurationId: z.ZodString;
}, z.core.$strip>;
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
export declare const WebChannelConfigSchema: z.ZodObject<{
    communicationType: z.ZodDefault<z.ZodEnum<typeof OttCommunicationType>>;
    widgetConfiguration: z.ZodOptional<z.ZodObject<{
        position: z.ZodDefault<z.ZodEnum<{
            left: "left";
            right: "right";
        }>>;
        customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const MobileAppChannelConfigSchema: z.ZodObject<{
    packageName: z.ZodDefault<z.ZodString>;
    platform: z.ZodDefault<z.ZodEnum<typeof MobilePlatform>>;
}, z.core.$strip>;
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
export declare const CallChannelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    deploymentType: z.ZodLiteral<DeploymentType.CALLS>;
    configuration: z.ZodObject<{
        phoneConfigurationId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
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
export declare const SmsChannelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    deploymentType: z.ZodLiteral<DeploymentType.SMS>;
    configuration: z.ZodObject<{
        phoneConfigurationId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
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
export declare const WebChannelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    deploymentType: z.ZodLiteral<DeploymentType.WEB>;
    configuration: z.ZodObject<{
        communicationType: z.ZodDefault<z.ZodEnum<typeof OttCommunicationType>>;
        widgetConfiguration: z.ZodOptional<z.ZodObject<{
            position: z.ZodDefault<z.ZodEnum<{
                left: "left";
                right: "right";
            }>>;
            customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
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
export declare const MobileAppChannelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    deploymentType: z.ZodLiteral<DeploymentType.MOBILE>;
    configuration: z.ZodObject<{
        packageName: z.ZodDefault<z.ZodString>;
        platform: z.ZodDefault<z.ZodEnum<typeof MobilePlatform>>;
    }, z.core.$strip>;
}, z.core.$strip>;
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
export declare const CreateWebChannelSchema: z.ZodObject<{
    deploymentType: z.ZodLiteral<DeploymentType.WEB>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodObject<{
        communicationType: z.ZodDefault<z.ZodEnum<typeof OttCommunicationType>>;
        widgetConfiguration: z.ZodOptional<z.ZodObject<{
            position: z.ZodDefault<z.ZodEnum<{
                left: "left";
                right: "right";
            }>>;
            customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Zod schema for creating a new mobile app channel.
 */
export declare const CreateMobileAppChannelSchema: z.ZodObject<{
    deploymentType: z.ZodLiteral<DeploymentType.MOBILE>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodObject<{
        packageName: z.ZodDefault<z.ZodString>;
        platform: z.ZodDefault<z.ZodEnum<typeof MobilePlatform>>;
    }, z.core.$strip>;
}, z.core.$strip>;
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
 * Flexible schema that validates channel configuration based on deployment type.
 * Uses runtime validation to ensure channel-specific requirements are met.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Validates incoming requests to create new deployment channels
 * - **Validation**: Type-specific validation ensures correct configuration for each channel type
 * - **Usage**: Used by API endpoints for channel creation
 */
export declare const DeploymentChannelRequestSchema: z.ZodObject<{
    deploymentType: z.ZodEnum<typeof DeploymentType>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodRecord<z.ZodString, z.ZodAny>;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const DeploymentChannelSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    deploymentType: z.ZodEnum<typeof DeploymentType>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodUnion<readonly [z.ZodObject<{
        phoneConfigurationId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        communicationType: z.ZodDefault<z.ZodEnum<typeof OttCommunicationType>>;
        widgetConfiguration: z.ZodOptional<z.ZodObject<{
            position: z.ZodDefault<z.ZodEnum<{
                left: "left";
                right: "right";
            }>>;
            customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        packageName: z.ZodDefault<z.ZodString>;
        platform: z.ZodDefault<z.ZodEnum<typeof MobilePlatform>>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
/**
 * Type definition for deployment channel.
 */
export type DeploymentChannel = z.infer<typeof DeploymentChannelSchema>;
/**
 * Zod schema for creating deployment channel.
 */
export declare const CreateDeploymentChannelSchema: z.ZodObject<{
    deploymentType: z.ZodEnum<typeof DeploymentType>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodRecord<z.ZodString, z.ZodAny>;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Type definition for creating deployment channel.
 */
export type CreateDeploymentChannel = z.infer<typeof CreateDeploymentChannelSchema>;
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
export declare const DeploymentChannelUpdateRequestSchema: z.ZodObject<{
    id: z.ZodString;
    deploymentType: z.ZodOptional<z.ZodEnum<typeof DeploymentType>>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodOptional<z.ZodBoolean>;
    channelIdentifier: z.ZodOptional<z.ZodString>;
    configuration: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
/**
 * Type definition for updating deployment channel.
 */
export type UpdateDeploymentChannel = z.infer<typeof DeploymentChannelUpdateRequestSchema>;
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
export declare const ChannelSetupRequestSchema: z.ZodObject<{
    channel: z.ZodObject<{
        deploymentType: z.ZodEnum<typeof DeploymentType>;
        channelName: z.ZodOptional<z.ZodString>;
        recordingEnabled: z.ZodDefault<z.ZodBoolean>;
        channelIdentifier: z.ZodString;
        configuration: z.ZodRecord<z.ZodString, z.ZodAny>;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    projectId: z.ZodString;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
}, z.core.$strip>;
/**
 * Type definition for channel setup request.
 */
export type ChannelSetupRequest = z.infer<typeof ChannelSetupRequestSchema>;
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
export declare const ChannelUpdateRequestSchema: z.ZodObject<{
    channel: z.ZodObject<{
        id: z.ZodString;
        deploymentType: z.ZodOptional<z.ZodEnum<typeof DeploymentType>>;
        channelName: z.ZodOptional<z.ZodString>;
        recordingEnabled: z.ZodOptional<z.ZodBoolean>;
        channelIdentifier: z.ZodOptional<z.ZodString>;
        configuration: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
    projectId: z.ZodOptional<z.ZodString>;
    agentConfigurationId: z.ZodOptional<z.ZodString>;
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
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
 * Extended view that includes both the channel configuration and its associated deployment details.
 * This schema is typically used for detailed views where the complete deployment context is needed.
 *
 * @remarks
 * **Architecture Context:**
 * - **Purpose**: Provides complete deployment context in a single response
 * - **Usage**: Used for detail views and administrative interfaces
 * - **Relationship**: Combines DeploymentChannel with its associated Deployment Configuration
 */
export declare const DeploymentChannelWithDeploymentSchema: z.ZodObject<{
    id: z.ZodString;
    deploymentType: z.ZodEnum<typeof DeploymentType>;
    channelName: z.ZodOptional<z.ZodString>;
    recordingEnabled: z.ZodDefault<z.ZodBoolean>;
    channelIdentifier: z.ZodString;
    configuration: z.ZodUnion<readonly [z.ZodObject<{
        phoneConfigurationId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        communicationType: z.ZodDefault<z.ZodEnum<typeof OttCommunicationType>>;
        widgetConfiguration: z.ZodOptional<z.ZodObject<{
            position: z.ZodDefault<z.ZodEnum<{
                left: "left";
                right: "right";
            }>>;
            customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        packageName: z.ZodDefault<z.ZodString>;
        platform: z.ZodDefault<z.ZodEnum<typeof MobilePlatform>>;
    }, z.core.$strip>]>;
    deployment: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        deploymentChannelId: z.ZodString;
        deploymentName: z.ZodOptional<z.ZodString>;
        agentConfigurationId: z.ZodString;
        instructionConfigurationId: z.ZodString;
        provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        provisioningType: z.ZodNullable<z.ZodOptional<z.ZodEnum<typeof DeploymentProvisioningType>>>;
        deploymentStatus: z.ZodEnum<typeof DeploymentStatus>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        project: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
        agent: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
        instruction: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
        createdAt: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Type definition for deployment channel with deployment info.
 */
export type DeploymentChannelInfo = z.infer<typeof DeploymentChannelWithDeploymentSchema>;
export declare const DeploymentChannelDeletionRequestSchema: z.ZodObject<{
    id: z.ZodString;
    deletePhoneConfig: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export type DeploymentChannelDeletionRequest = z.infer<typeof DeploymentChannelDeletionRequestSchema>;
