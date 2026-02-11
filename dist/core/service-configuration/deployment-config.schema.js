"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentConfigurationDetailsSchema = exports.DeploymentConfigurationResultSchema = exports.UpdateDeploymentConfigurationSchema = exports.CreateChainDeploymentConfigurationSchema = exports.CreateDeploymentConfigurationSchema = exports.DeploymentConfigurationSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const agent_config_schema_1 = require("./agent-config.schema");
const instruction_config_schema_1 = require("./instruction-config.schema");
const interaction_channels_schema_1 = require("./interaction-channels.schema");
const type_definitions_1 = require("../type-definitions");
const project_schema_1 = require("../account/project.schema");
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
exports.DeploymentConfigurationSchema = base_schema_1.BaseModelSchema.safeExtend({
    projectId: zod_1.z.string().describe("ID of the project this deployment belongs to for organizational grouping, access control, and resource management"),
    deploymentChannelId: zod_1.z.string().describe("ID of the deployment channel through which this deployment is accessible (1:1 relationship - each deployment has exactly one channel)"),
    deploymentName: zod_1.z.string().optional().describe("Optional human-readable name for the deployment used in administrative interfaces and reporting"),
    agentConfigurationId: zod_1.z.string().describe("ID of the agent configuration that defines the agent's core behavior, capabilities, and LLM model (N:1 relationship - multiple deployments can share an agent)"),
    instructionConfigurationId: zod_1.z.string().describe("ID of the instruction configuration that provides behavioral guidelines, role definition, and conversation patterns for the agent (N:1 relationship)"),
    deploymentStatus: zod_1.z.enum(type_definitions_1.DeploymentStatus).describe("Current operational status of the deployment (PENDING: awaiting activation, ACTIVE: operational, SUSPENDED: temporarily paused, FAILED: encountered errors)"),
    provisioningType: zod_1.z.enum(type_definitions_1.DeploymentProvisioningType).default(type_definitions_1.DeploymentProvisioningType.DIRECT).describe("How this deployment processes interactions: DIRECT for direct agent processing, CHAINED for provisioning chain (STT → Agent → TTS) voice processing"),
    provisioningConfigChainId: zod_1.z.string().optional().nullable().describe("ID of the provisioning configuration chain for voice processing (required for CHAINED provisioning type, links STT, agent, and TTS models)"),
    isActive: zod_1.z.boolean().default(false).describe("Whether this deployment is currently active and accepting user interactions (independent of deploymentStatus for granular control)"),
    channel: interaction_channels_schema_1.DeploymentChannelSchema.optional().nullable().describe("Populated deployment channel configuration including type, identifier, and channel-specific settings (null if not loaded, populated for detail views)"),
    project: project_schema_1.ProjectSchema.optional().nullable().describe("Populated project information including name and organizational details (null if not loaded, populated for detail views)"),
    agent: agent_config_schema_1.AgentConfigurationSchema.optional().nullable().describe("Populated agent configuration including model, operational mode, and capabilities (null if not loaded, populated for detail views)"),
    instruction: instruction_config_schema_1.InstructionConfigurationSchema.optional().nullable().describe("Populated instruction configuration including role, guidelines, and knowledge sources (null if not loaded, populated for detail views)"),
});
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
exports.CreateDeploymentConfigurationSchema = exports.DeploymentConfigurationSchema.omit({
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
    deploymentStatus: zod_1.z.literal(type_definitions_1.DeploymentStatus.PENDING),
    provisioningType: zod_1.z.enum(type_definitions_1.DeploymentProvisioningType).default(type_definitions_1.DeploymentProvisioningType.DIRECT),
});
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
exports.CreateChainDeploymentConfigurationSchema = exports.DeploymentConfigurationSchema.omit({
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
    provisioningConfigChainId: zod_1.z.string(),
    deploymentStatus: zod_1.z.literal(type_definitions_1.DeploymentStatus.PENDING),
    provisioningType: zod_1.z.enum(type_definitions_1.DeploymentProvisioningType).default(type_definitions_1.DeploymentProvisioningType.CHAINED),
});
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
exports.UpdateDeploymentConfigurationSchema = exports.CreateDeploymentConfigurationSchema.partial().safeExtend({
    id: zod_1.z.string(),
    provisioningConfigChainId: zod_1.z.string().optional(),
});
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
exports.DeploymentConfigurationResultSchema = exports.DeploymentConfigurationSchema.omit({
    channel: true,
    project: true,
    agent: true,
    instruction: true,
});
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
exports.DeploymentConfigurationDetailsSchema = exports.DeploymentConfigurationSchema.omit({
    channel: true,
    project: true,
    agent: true,
    instruction: true,
}).safeExtend({
    channel: interaction_channels_schema_1.DeploymentChannelSchema,
    project: project_schema_1.ProjectSchema,
    agent: agent_config_schema_1.AgentConfigurationSchema,
    instruction: instruction_config_schema_1.InstructionConfigurationSchema,
});
