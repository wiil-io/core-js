import { z } from 'zod';
import { BaseModelSchema } from "../base.schema";
import { AgentConfigurationSchema } from './agent-config.schema';
import { InstructionConfigurationSchema } from './instruction-config.schema';
import { DeploymentChannelSchema } from './interaction-channels.schema';
import { DeploymentProvisioningType, DeploymentStatus } from '../type-definitions';
import { ProjectSchema } from '../account/project.schema';

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
export const DeploymentConfigurationSchema = BaseModelSchema.safeExtend({
    projectId: z.string().describe("ID of the project this deployment belongs to for organizational grouping, access control, and resource management"),
    deploymentChannelId: z.string().describe("ID of the deployment channel through which this deployment is accessible (1:1 relationship - each deployment has exactly one channel)"),
    deploymentName: z.string().optional().describe("Optional human-readable name for the deployment used in administrative interfaces and reporting"),
    agentConfigurationId: z.string().describe("ID of the agent configuration that defines the agent's core behavior, capabilities, and LLM model (N:1 relationship - multiple deployments can share an agent)"),
    instructionConfigurationId: z.string().describe("ID of the instruction configuration that provides behavioral guidelines, role definition, and conversation patterns for the agent (N:1 relationship)"),
    deploymentStatus: z.enum(DeploymentStatus).describe("Current operational status of the deployment (PENDING: awaiting activation, ACTIVE: operational, SUSPENDED: temporarily paused, FAILED: encountered errors)"),
    provisioningType: z.enum(DeploymentProvisioningType).default(DeploymentProvisioningType.DIRECT).describe("How this deployment processes interactions: DIRECT for direct agent processing, CHAINED for provisioning chain (STT → Agent → TTS) voice processing"),
    provisioningConfigChainId: z.string().optional().nullable().describe("ID of the provisioning configuration chain for voice processing (required for CHAINED provisioning type, links STT, agent, and TTS models)"),
    isActive: z.boolean().default(false).describe("Whether this deployment is currently active and accepting user interactions (independent of deploymentStatus for granular control)"),
    channel: DeploymentChannelSchema.optional().nullable().describe("Populated deployment channel configuration including type, identifier, and channel-specific settings (null if not loaded, populated for detail views)"),
    project: ProjectSchema.optional().nullable().describe("Populated project information including name and organizational details (null if not loaded, populated for detail views)"),
    agent: AgentConfigurationSchema.optional().nullable().describe("Populated agent configuration including model, operational mode, and capabilities (null if not loaded, populated for detail views)"),
    instruction: InstructionConfigurationSchema.optional().nullable().describe("Populated instruction configuration including role, guidelines, and knowledge sources (null if not loaded, populated for detail views)"),
});

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
export const CreateDeploymentConfigurationSchema = DeploymentConfigurationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    channel: true,
    project: true,
    agent: true,
    instruction: true,
    deploymentStatus: true,
    provisioningType: true,
}).safeExtend({
    deploymentStatus: z.literal(DeploymentStatus.PENDING),
    provisioningType: z.enum(DeploymentProvisioningType).default(DeploymentProvisioningType.DIRECT),
});

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
export const CreateChainDeploymentConfigurationSchema = DeploymentConfigurationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    channel: true,
    project: true,
    agent: true,
    instruction: true,
    deploymentStatus: true,
    provisioningType: true,
    provisioningConfigChainId: true,
}).safeExtend({
    provisioningConfigChainId: z.string(),
    deploymentStatus: z.literal(DeploymentStatus.PENDING),
    provisioningType: z.enum(DeploymentProvisioningType).default(DeploymentProvisioningType.CHAINED),
});

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
export const UpdateDeploymentConfigurationSchema = CreateDeploymentConfigurationSchema.partial().safeExtend({
    id: z.string(),
    provisioningConfigChainId: z.string().optional(),
});

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
export const DeploymentConfigurationResultSchema = DeploymentConfigurationSchema.omit({
    channel: true,
    project: true,
    agent: true,
    instruction: true,
});

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
export const DeploymentConfigurationDetailsSchema = DeploymentConfigurationSchema.omit({
    channel: true,
    project: true,
    agent: true,
    instruction: true,
}).safeExtend({
    channel: DeploymentChannelSchema,
    project: ProjectSchema,
    agent: AgentConfigurationSchema,
    instruction: InstructionConfigurationSchema,
});

/**
 * Type definition for deployment configuration details.
 *
 * Full version with all relations populated, suitable for detail views.
 */
export type DeploymentConfigurationDetails = z.infer<typeof DeploymentConfigurationDetailsSchema>;
