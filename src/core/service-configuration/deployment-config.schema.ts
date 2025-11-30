import { z } from 'zod';
import { BaseModelSchema } from "../base.schema";
import { AgentConfigurationSchema } from './agent-config.schema';
import { InstructionConfigurationSchema } from './instruction-config.schema';
import { DeploymentChannelSchema } from './interaction-channels.schema';
import { DeploymentProvisioningType, DeploymentStatus } from '../type-definitions';
import { ProjectSchema } from '../account/project.schema';

/**
 * @fileoverview Deployment configuration schema definitions.
 * @module service-configuration/deployment-config
 */

/**
 * Zod schema for deployment configuration validation.
 *
 * Represents the complete configuration for a deployment, linking together a project,
 * deployment channel, agent configuration, and instruction configuration.
 *
 * @typedef {Object} DeploymentConfigurationProperties
 * @property {string} id - Unique identifier for the deployment configuration
 * @property {string} projectId - ID of the project this deployment belongs to
 * @property {string} deploymentChannelId - ID of the channel this deployment uses (call, SMS, web, mobile)
 * @property {string} [deploymentName] - Human-readable name for the deployment
 * @property {string} agentConfigurationId - ID of the agent configuration to use
 * @property {string} instructionConfigurationId - ID of the instruction configuration to use
 * @property {DeploymentStatus} deploymentStatus - Current status of the deployment
 * @property {DeploymentProvisioningType | null} [provisioningType] - How this deployment is provisioned
 * @property {string | null} [provisioningConfigChainId] - ID of the provisioning chain if using chained provisioning
 * @property {boolean} isActive - Whether this deployment is currently active (default: false)
 * @property {DeploymentChannel | null} [channel] - Full channel configuration (populated for detail views)
 * @property {Project | null} [project] - Full project information (populated for detail views)
 * @property {AgentInfo | null} [agent] - Agent configuration summary (populated for detail views)
 * @property {InstructionInfo | null} [instruction] - Instruction configuration summary (populated for detail views)
 * @property {number} [createdAt] - Timestamp when created
 * @property {number} [updatedAt] - Timestamp when last updated
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
    projectId: z.string(),
    deploymentChannelId: z.string(),
    deploymentName: z.string().optional(),
    agentConfigurationId: z.string(),
    instructionConfigurationId: z.string(),
    deploymentStatus: z.enum(DeploymentStatus),
    provisioningType: z.enum(DeploymentProvisioningType).default(DeploymentProvisioningType.DIRECT),
    provisioningConfigChainId: z.string().optional().nullable(),
    isActive: z.boolean().default(false),
    channel: DeploymentChannelSchema.optional().nullable(),
    project: ProjectSchema.optional().nullable(),
    agent: AgentConfigurationSchema.optional().nullable(),
    instruction: InstructionConfigurationSchema.optional().nullable(),
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
