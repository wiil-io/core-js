import { z } from 'zod';
import { DeploymentProvisioningType, DeploymentStatus } from '../type-definitions';
/**
 * @fileoverview Deployment configuration schema definitions.
 *
 * Deployment Configuration is the central composition entity in the Service Configuration architecture.
 * It brings together agent behavior, instructions, organizational context, and channel configuration
 * to create a complete deployable unit. Each deployment has exactly one channel (1:1 relationship).
 *
 * @module service-configuration/deployment-config
 */
/**
 * Zod schema for deployment configuration validation.
 *
 * The Deployment Configuration is the central composition entity that brings together agent behavior,
 * instructions, and organizational context to create a deployable unit. It serves as the primary
 * entity that operators interact with when setting up new agent deployments.
 *
 * @remarks
 * **Architecture Context:**
 * - **Central Entity**: Primary composition point for all deployment components
 * - **Managed By**: Service Configuration (administrative oversight)
 * - **Uses**: Agent Configuration (N:1), Instruction Configuration (N:1)
 * - **Associated With**: Project (N:1 for organizational grouping)
 * - **Has**: Deployment Channel (1:1 - each deployment exposes through exactly one channel)
 * - **Pattern**: Multi-channel deployments require separate Deployment Configurations per channel
 *
 * **Provisioning Types:**
 * - **DIRECT**: Agent processes interactions directly without additional chains
 * - **CHAINED**: Uses provisioning chain (STT → Agent → TTS) for voice processing
 *
 * **Deployment Lifecycle:**
 * - **PENDING**: Created but not yet activated
 * - **ACTIVE**: Operational and accepting interactions
 * - **SUSPENDED**: Temporarily paused
 * - **FAILED**: Deployment encountered errors
 *
 * @typedef {Object} DeploymentConfigurationProperties
 * @property {string} id - Unique identifier for the deployment configuration
 * @property {string} projectId - ID of the project this deployment belongs to for organizational grouping and access control
 * @property {string} deploymentChannelId - ID of the deployment channel (1:1 relationship - phone, SMS, web, or mobile)
 * @property {string} [deploymentName] - Optional human-readable name for administrative identification
 * @property {string} agentConfigurationId - ID of the agent configuration defining core behavior and capabilities (N:1)
 * @property {string} instructionConfigurationId - ID of the instruction configuration providing behavioral guidelines (N:1)
 * @property {DeploymentStatus} deploymentStatus - Current operational status (PENDING, ACTIVE, SUSPENDED, FAILED)
 * @property {DeploymentProvisioningType} provisioningType - How this deployment processes interactions (DIRECT or CHAINED) (default: DIRECT)
 * @property {string | null} [provisioningConfigChainId] - ID of the provisioning chain for voice processing (required for CHAINED type)
 * @property {boolean} isActive - Whether this deployment is currently active and accepting interactions (default: false)
 * @property {DeploymentChannel | null} [channel] - Populated deployment channel configuration (for detail views)
 * @property {Project | null} [project] - Populated project information (for detail views)
 * @property {AgentConfiguration | null} [agent] - Populated agent configuration (for detail views)
 * @property {InstructionConfiguration | null} [instruction] - Populated instruction configuration (for detail views)
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const deployment: DeploymentConfiguration = {
 *   id: '123*',
 *   projectId: '456*',
 *   deploymentChannelId: 'abc*',
 *   deploymentName: 'Production Customer Support',
 *   agentConfigurationId: 'def*',
 *   instructionConfigurationId: 'ghi*',
 *   deploymentStatus: DeploymentStatus.ACTIVE,
 *   provisioningType: DeploymentProvisioningType.DIRECT,
 *   isActive: true,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export declare const DeploymentConfigurationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    projectId: z.ZodString;
    deploymentChannelId: z.ZodString;
    deploymentName: z.ZodOptional<z.ZodString>;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
    deploymentStatus: z.ZodEnum<typeof DeploymentStatus>;
    provisioningType: z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>;
    provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channel: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
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
    }, z.core.$strip>>>;
    project: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        regionId: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        compliance: z.ZodOptional<z.ZodArray<z.ZodString>>;
        currentSubscriptionId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isDefault: z.ZodBoolean;
        serviceStatus: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").ServiceStatus>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    agent: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        modelId: z.ZodString;
        name: z.ZodString;
        defaultFunctionState: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").LLMType>>;
        usesWiilSupportModel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        requiredModelConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        instructionConfigurationId: z.ZodString;
        assistantType: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").AssistantType>>;
        call_transfer_config: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            transfer_number: z.ZodString;
            transfer_type: z.ZodDefault<z.ZodEnum<{
                blind: "blind";
                warm: "warm";
            }>>;
            transfer_conditions: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        model: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            modelId: z.ZodString;
            proprietor: z.ZodEnum<typeof import("../type-definitions").SupportedProprietor>;
            name: z.ZodString;
            provider_model_id: z.ZodOptional<z.ZodString>;
            description: z.ZodString;
            type: z.ZodEnum<typeof import("../type-definitions").LLMType>;
            discontinued: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            supportedVoices: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                voiceId: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                gender: z.ZodEnum<{
                    neutral: "neutral";
                    male: "male";
                    female: "female";
                }>;
                language: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                isDefault: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>>;
            supportLanguages: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                languageId: z.ZodString;
                name: z.ZodString;
                code: z.ZodString;
                isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    instruction: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        instructionName: z.ZodString;
        role: z.ZodString;
        introductionMessage: z.ZodString;
        instructions: z.ZodString;
        guardrails: z.ZodString;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        validationRules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        serviceId: z.ZodOptional<z.ZodString>;
        supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../type-definitions").BusinessSupportServices>>>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPrimary: z.ZodDefault<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Type definition for deployment configuration.
 *
 * Represents a complete deployment configuration including all metadata,
 * status information, and optional populated relations.
 */
export type DeploymentConfiguration = z.infer<typeof DeploymentConfigurationSchema>;
/**
 * Zod schema for creating a new deployment configuration.
 *
 * Omits auto-generated fields and populated relations. Sets deployment to PENDING status
 * with DIRECT provisioning by default.
 *
 * @remarks
 * This schema enforces required fields for deployment creation while excluding
 * fields that are automatically generated or populated by the system.
 *
 * @example
 * ```typescript
 * const newDeployment: CreateDeploymentConfiguration = {
 *   projectId: '456*',
 *   deploymentChannelId: 'abc*',
 *   deploymentName: 'Customer Support Line',
 *   agentConfigurationId: 'def*',
 *   instructionConfigurationId: 'ghi*',
 *   isActive: false,
 *   deploymentStatus: DeploymentStatus.PENDING,
 *   provisioningType: DeploymentProvisioningType.DIRECT
 * };
 * ```
 */
export declare const CreateDeploymentConfigurationSchema: z.ZodObject<{
    instructionConfigurationId: z.ZodString;
    projectId: z.ZodString;
    agentConfigurationId: z.ZodString;
    deploymentChannelId: z.ZodString;
    deploymentName: z.ZodOptional<z.ZodString>;
    provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    deploymentStatus: z.ZodLiteral<DeploymentStatus.PENDING>;
    provisioningType: z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>;
}, z.core.$strip>;
/**
 * Type definition for creating a new deployment configuration.
 *
 * Represents the payload required to create a new deployment,
 * excluding system-generated fields and populated relations.
 */
export type CreateDeploymentConfiguration = z.infer<typeof CreateDeploymentConfigurationSchema>;
/**
 * Zod schema for creating a chained deployment configuration.
 *
 * Similar to CreateDeploymentConfigurationSchema but requires a provisioningConfigChainId
 * and sets provisioningType to CHAINED by default.
 *
 * @remarks
 * Use this schema when creating deployments that are part of a provisioning chain.
 * The provisioningConfigChainId is required to link this deployment to the chain.
 *
 * @example
 * ```typescript
 * const chainedDeployment: CreateChainDeploymentConfiguration = {
 *   projectId: '456*',
 *   deploymentChannelId: 'abc*',
 *   deploymentName: 'Multi-Step Support Flow',
 *   agentConfigurationId: 'def*',
 *   instructionConfigurationId: 'ghi*',
 *   provisioningConfigChainId: 'xyz*',
 *   isActive: false,
 *   deploymentStatus: DeploymentStatus.PENDING,
 *   provisioningType: DeploymentProvisioningType.CHAINED
 * };
 * ```
 */
export declare const CreateChainDeploymentConfigurationSchema: z.ZodObject<{
    instructionConfigurationId: z.ZodString;
    projectId: z.ZodString;
    agentConfigurationId: z.ZodString;
    deploymentChannelId: z.ZodString;
    deploymentName: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    provisioningConfigChainId: z.ZodString;
    deploymentStatus: z.ZodLiteral<DeploymentStatus.PENDING>;
    provisioningType: z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>;
}, z.core.$strip>;
/**
 * Type definition for creating a chained deployment configuration.
 *
 * Represents the payload required to create a deployment as part of a provisioning chain.
 */
export type CreateChainDeploymentConfiguration = z.infer<typeof CreateChainDeploymentConfigurationSchema>;
/**
 * Zod schema for updating an existing deployment configuration.
 *
 * All fields from CreateDeploymentConfigurationSchema are optional (partial),
 * with the id field required to identify the deployment to update.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 * The id field is mandatory to specify which deployment configuration to update.
 *
 * @example
 * ```typescript
 * const updateDeployment: UpdateDeploymentConfiguration = {
 *   id: '123*',
 *   deploymentName: 'Updated Support Line',
 *   isActive: true,
 *   deploymentStatus: DeploymentStatus.ACTIVE
 * };
 * ```
 */
export declare const UpdateDeploymentConfigurationSchema: z.ZodObject<{
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    agentConfigurationId: z.ZodOptional<z.ZodString>;
    deploymentChannelId: z.ZodOptional<z.ZodString>;
    deploymentName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    deploymentStatus: z.ZodOptional<z.ZodLiteral<DeploymentStatus.PENDING>>;
    provisioningType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>>;
    id: z.ZodString;
    provisioningConfigChainId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Type definition for updating an existing deployment configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdateDeploymentConfiguration = z.infer<typeof UpdateDeploymentConfigurationSchema>;
/**
 * Zod schema for deployment configuration result (lightweight version).
 *
 * Omits populated relation fields (channel, project, agent, instruction) to provide
 * a lighter payload suitable for list views and search results.
 *
 * @remarks
 * Use this schema when returning deployment configurations in lists or search results
 * where full relation details are not needed.
 *
 * @example
 * ```typescript
 * const deploymentResult: DeploymentConfigurationResult = {
 *   id: '123*',
 *   projectId: '456*',
 *   deploymentChannelId: 'abc*',
 *   deploymentName: 'Customer Support',
 *   agentConfigurationId: 'def*',
 *   instructionConfigurationId: 'ghi*',
 *   deploymentStatus: DeploymentStatus.ACTIVE,
 *   provisioningType: DeploymentProvisioningType.DIRECT,
 *   isActive: true,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export declare const DeploymentConfigurationResultSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    instructionConfigurationId: z.ZodString;
    projectId: z.ZodString;
    agentConfigurationId: z.ZodString;
    deploymentChannelId: z.ZodString;
    deploymentName: z.ZodOptional<z.ZodString>;
    provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    provisioningType: z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>;
    deploymentStatus: z.ZodEnum<typeof DeploymentStatus>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Type definition for deployment configuration result.
 *
 * Lightweight version without populated relations, suitable for list views.
 */
export type DeploymentConfigurationResult = z.infer<typeof DeploymentConfigurationResultSchema>;
/**
 * Zod schema for deployment configuration details (full version with all relations).
 *
 * Extends the base schema by requiring all relation fields to be fully populated
 * with their complete schemas.
 *
 * @remarks
 * Use this schema when returning a single deployment configuration with all
 * associated details fully populated. Ideal for detail views where complete
 * information about the deployment, channel, project, agent, and instruction is needed.
 *
 * @example
 * ```typescript
 * const deploymentDetails: DeploymentConfigurationDetails = {
 *   id: '123*',
 *   projectId: '456*',
 *   deploymentChannelId: 'abc*',
 *   deploymentName: 'Customer Support',
 *   agentConfigurationId: 'def*',
 *   instructionConfigurationId: 'ghi*',
 *   deploymentStatus: DeploymentStatus.ACTIVE,
 *   provisioningType: DeploymentProvisioningType.DIRECT,
 *   isActive: true,
 *   channel: { /* full DeploymentChannel object *\/ },
 *   project: { /* full Project object *\/ },
 *   agent: { /* full AgentConfiguration object *\/ },
 *   instruction: { /* full InstructionConfiguration object *\/ },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export declare const DeploymentConfigurationDetailsSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    instructionConfigurationId: z.ZodString;
    projectId: z.ZodString;
    agentConfigurationId: z.ZodString;
    deploymentChannelId: z.ZodString;
    deploymentName: z.ZodOptional<z.ZodString>;
    provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    provisioningType: z.ZodDefault<z.ZodEnum<typeof DeploymentProvisioningType>>;
    deploymentStatus: z.ZodEnum<typeof DeploymentStatus>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    channel: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
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
    }, z.core.$strip>;
    project: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        regionId: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        compliance: z.ZodOptional<z.ZodArray<z.ZodString>>;
        currentSubscriptionId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isDefault: z.ZodBoolean;
        serviceStatus: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").ServiceStatus>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
    agent: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        modelId: z.ZodString;
        name: z.ZodString;
        defaultFunctionState: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").LLMType>>;
        usesWiilSupportModel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        requiredModelConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        instructionConfigurationId: z.ZodString;
        assistantType: z.ZodDefault<z.ZodEnum<typeof import("../type-definitions").AssistantType>>;
        call_transfer_config: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            transfer_number: z.ZodString;
            transfer_type: z.ZodDefault<z.ZodEnum<{
                blind: "blind";
                warm: "warm";
            }>>;
            transfer_conditions: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        model: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            modelId: z.ZodString;
            proprietor: z.ZodEnum<typeof import("../type-definitions").SupportedProprietor>;
            name: z.ZodString;
            provider_model_id: z.ZodOptional<z.ZodString>;
            description: z.ZodString;
            type: z.ZodEnum<typeof import("../type-definitions").LLMType>;
            discontinued: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            supportedVoices: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                voiceId: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                gender: z.ZodEnum<{
                    neutral: "neutral";
                    male: "male";
                    female: "female";
                }>;
                language: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                isDefault: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>>;
            supportLanguages: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                languageId: z.ZodString;
                name: z.ZodString;
                code: z.ZodString;
                isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    instruction: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        instructionName: z.ZodString;
        role: z.ZodString;
        introductionMessage: z.ZodString;
        instructions: z.ZodString;
        guardrails: z.ZodString;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        validationRules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        serviceId: z.ZodOptional<z.ZodString>;
        supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../type-definitions").BusinessSupportServices>>>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPrimary: z.ZodDefault<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Type definition for deployment configuration details.
 *
 * Full version with all relations populated, suitable for detail views.
 */
export type DeploymentConfigurationDetails = z.infer<typeof DeploymentConfigurationDetailsSchema>;
