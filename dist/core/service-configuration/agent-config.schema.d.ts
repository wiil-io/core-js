import { z } from "zod";
import { AssistantType, LLMType } from "../type-definitions/service-config.definitions";
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
export declare const AgentConfigurationSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    modelId: z.ZodString;
    name: z.ZodString;
    defaultFunctionState: z.ZodDefault<z.ZodEnum<typeof LLMType>>;
    usesWiilSupportModel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    requiredModelConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    instructionConfigurationId: z.ZodString;
    assistantType: z.ZodDefault<z.ZodEnum<typeof AssistantType>>;
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
        proprietor: z.ZodEnum<typeof import("../type-definitions/service-config.definitions").SupportedProprietor>;
        name: z.ZodString;
        provider_model_id: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        type: z.ZodEnum<typeof LLMType>;
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
export declare const CreateAgentConfigurationSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
    modelId: z.ZodString;
    defaultFunctionState: z.ZodDefault<z.ZodEnum<typeof LLMType>>;
    usesWiilSupportModel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    requiredModelConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    instructionConfigurationId: z.ZodString;
    assistantType: z.ZodDefault<z.ZodEnum<typeof AssistantType>>;
    call_transfer_config: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        transfer_number: z.ZodString;
        transfer_type: z.ZodDefault<z.ZodEnum<{
            blind: "blind";
            warm: "warm";
        }>>;
        transfer_conditions: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
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
export declare const UpdateAgentConfigurationSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    name: z.ZodOptional<z.ZodString>;
    modelId: z.ZodOptional<z.ZodString>;
    defaultFunctionState: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof LLMType>>>;
    usesWiilSupportModel: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    requiredModelConfig: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
    assistantType: z.ZodOptional<z.ZodDefault<z.ZodEnum<typeof AssistantType>>>;
    call_transfer_config: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        transfer_number: z.ZodString;
        transfer_type: z.ZodDefault<z.ZodEnum<{
            blind: "blind";
            warm: "warm";
        }>>;
        transfer_conditions: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Type definition for updating an existing agent configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdateAgentConfiguration = z.infer<typeof UpdateAgentConfigurationSchema>;
export declare const AgentConfigurationDeleteRequestSchema: z.ZodObject<{
    id: z.ZodString;
    deletePhoneConfig: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export type AgentConfigurationDeleteRequest = z.infer<typeof AgentConfigurationDeleteRequestSchema>;
