import { z } from "zod";
import { BaseModelSchema } from "../base.schema";
import { WiilSupportModelSchema } from "./support-llm";
import { AssistantType, LLMType } from "../type-definitions/service-config.definitions";
import { CallTransferConfigSchema } from "./call-transfer-config.schema";

/**
 * @fileoverview Agent configuration schema definitions.
 *
 * Agent Configurations define the core behavior, capabilities, and personality of AI agents.
 * They reference LLM models and instruction configurations, and can be reused across multiple
 * deployments. The Instruction Configuration (1:N relationship) governs agent behavior.
 *
 * @module service-configuration/agent-config
 */

/**
 * Zod schema for Agent Configuration validation.
 *
 * Agent Configurations define the core behavior, capabilities, and personality of AI agents in the
 * Service Configuration architecture. They are designed to be reusable across multiple deployments,
 * with each agent governed by an Instruction Configuration (1:N relationship). Multiple Agent
 * Configurations can share the same Instruction Configuration for consistent behavioral guidelines.
 *
 * @remarks
 * **Architecture Context:**
 * - **Managed By**: Service Configuration (lifecycle management)
 * - **Used By**: Deployment Configurations (N:1 - multiple deployments can use the same agent)
 * - **Associated With**: Instruction Configuration (1:N - one instruction set can govern multiple agents)
 * - **References**: Wiil Support Model Registry (via modelId)
 * - **Reusability**: Designed to be reused across multiple deployments with different channels
 *
 * **Configuration Layers:**
 * - **Agent Configuration**: Defines capabilities, model, and operational mode
 * - **Instruction Configuration**: Defines behavioral guidelines and conversation flow
 * - Together they create a complete agent persona
 *
 * @typedef {Object} AgentConfigurationProperties
 * @property {string} id - Unique identifier for the agent configuration
 * @property {string} modelId - Identifier of the LLM model from Wiil Support Registry (e.g., '2323*', 'EYUW&*EU@H$#'). References WiilSupportModel.modelId
 * @property {string} name - Human-readable name for the agent configuration (e.g., 'Customer Support Agent', 'Sales Assistant')
 * @property {LLMType} defaultFunctionState - Default operational mode (TEXT, VOICE, MULTI_MODE) (default: MULTI_MODE)
 * @property {boolean} [usesWiilSupportModel=true] - Whether this agent uses Wiil's supported model registry
 * @property {Record<string, any>} [requiredModelConfig] - Additional model parameters (e.g., { voiceId: 'adam', languageId: 'en-US' })
 * @property {string} instructionConfigurationId - ID of the instruction configuration providing behavioral guidelines (N:1)
 * @property {AssistantType} assistantType - Channel specialization type (GENERAL, WEB, PHONE, etc.) (default: GENERAL)
 * @property {CallTransferConfig[]} [call_transfer_config=[]] - Call transfer configurations for phone deployments
 * @property {Record<string, any>} [metadata] - Additional metadata for organization and filtering
 * @property {WiilSupportModel | null} [model] - Auto-populated model information from registry
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when last updated
 *
 * @example
 * ```typescript
 * const agentConfig: AgentConfiguration = {
 *   id: '123*',
 *   modelId: 'YUSI21217J1',
 *   name: 'Customer Support Agent',
 *   defaultFunctionState: LLMType.MULTI_MODE,
 *   usesWiilSupportModel: true,
 *   instructionConfigurationId: '456*',
 *   assistantType: AssistantType.PHONE,
 *   call_transfer_config: [
 *     {
 *       transfer_number: '+15551234567',
 *       transfer_type: 'warm',
 *       transfer_conditions: ['billing support', 'escalate']
 *     }
 *   ],
 *   metadata: { department: 'support' },
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export const AgentConfigurationSchema = BaseModelSchema.safeExtend({
    modelId: z.string().describe("Identifier of the LLM model from Wiil Support Registry to power this agent (e.g., 'YUSI21217J1', 'EYUW&*EU@H$#'). References WiilSupportModel.modelId"),
    name: z.string().describe("Human-readable name for the agent configuration used in administrative interfaces (e.g., 'Customer Support Agent', 'Sales Assistant')"),
    defaultFunctionState: z.enum(LLMType).default(LLMType.MULTI_MODE).describe("Default operational mode (TEXT for text-only, VOICE for speech, MULTI_MODE for combined text/voice capabilities)"),
    usesWiilSupportModel: z.boolean().optional().default(true).describe("Whether this agent uses a model from Wiil's curated registry (true) or a custom external model (false)"),
    requiredModelConfig: z.record(z.string(), z.any()).optional().describe("Model-specific configuration parameters as key-value pairs (e.g., { voiceId: 'adam', languageId: 'en-US', temperature: 0.7 })"),
    instructionConfigurationId: z.string().describe("ID of the Instruction Configuration providing behavioral guidelines and conversation patterns. Multiple agents can share the same instruction configuration (N:1)"),
    assistantType: z.enum(AssistantType).default(AssistantType.GENERAL).describe("Channel specialization type for optimization (GENERAL for multi-channel, WEB for browser, PHONE for telephony, EMAIL for email)"),
    call_transfer_config: z.array(CallTransferConfigSchema).optional().default([]).describe("Array of call transfer configurations for phone deployments, defining transfer destinations and conditions for escalation"),
    metadata: z.record(z.string(), z.any()).optional().describe("Additional metadata for organization including tags, categories, department, or custom attributes for filtering and reporting"),
    model: WiilSupportModelSchema.nullable().optional().describe("Complete model information auto-populated from Wiil registry (includes provider, voices, languages). Null if not loaded or custom model"),
});

/**
 * Type definition for Agent Configuration.
 *
 * Represents a complete agent configuration including all metadata,
 * model settings, and operational parameters.
 */
export type AgentConfiguration = z.infer<typeof AgentConfigurationSchema>;

/**
 * Zod schema for creating a new agent configuration.
 *
 * Omits auto-generated fields (id, timestamps, model) that are
 * populated by the system during creation.
 *
 * @remarks
 * This schema enforces required fields for agent creation while excluding
 * fields that are automatically generated by the database or system.
 *
 * @example
 * ```typescript
 * const newAgent: CreateAgentConfiguration = {
 *   modelId: 'gpt-4-turbo',
 *   name: 'Sales Assistant',
 *   defaultFunctionState: LLMType.MULTI_MODE,
 *   usesWiilSupportModel: true,
 *   instructionConfigurationId: '789*',
 *   assistantType: AssistantType.WEB,
 *   requiredModelConfig: {
 *     voiceId: 'rachel',
 *     languageId: 'en-US'
 *   },
 *   call_transfer_config: [],
 *   metadata: { team: 'sales' }
 * };
 * ```
 */
export const CreateAgentConfigurationSchema = AgentConfigurationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    model: true,
});

/**
 * Type definition for creating a new agent configuration.
 *
 * Represents the payload required to create a new agent, excluding
 * system-generated fields.
 */
export type CreateAgentConfiguration = z.infer<typeof CreateAgentConfigurationSchema>;

/**
 * Zod schema for updating an existing agent configuration.
 *
 * All fields from CreateAgentConfigurationSchema are optional (partial),
 * with the id field required to identify the configuration to update.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 * The id field is mandatory to specify which agent configuration to update.
 *
 * @example
 * ```typescript
 * const updatePayload: UpdateAgentConfiguration = {
 *   id: '123*',
 *   name: 'Updated Sales Assistant',
 *   metadata: { team: 'enterprise-sales' }
 * };
 * ```
 */
export const UpdateAgentConfigurationSchema = CreateAgentConfigurationSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Type definition for updating an existing agent configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdateAgentConfiguration = z.infer<typeof UpdateAgentConfigurationSchema>;
