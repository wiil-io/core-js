import { z } from "zod";
import { BusinessSupportServices } from "../type-definitions/account-definitions";
/**
 * @fileoverview Instruction configuration schema definitions.
 *
 * The Instruction Configuration is the heart of agent behaviour in the Service Configuration architecture.
 * It contains the prompts, guidelines, and contextual instructions that fundamentally define how agents
 * operate during conversations.
 *
 * @module service-configuration/instruction-config
 */
/**
 * Zod schema for Instruction Configuration validation.
 *
 * The Instruction Configuration is the heart of agent behaviour in the Service Configuration architecture.
 * It contains the prompts, guidelines, and contextual instructions that fundamentally define how an agent
 * operates during conversations. A single Instruction Configuration can be associated with multiple Agent
 * Configurations (1:N relationship), allowing consistent behavioral guidelines across different agent types.
 *
 * @remarks
 * **Architecture Context:**
 * - **Central Role**: The Instruction Configuration is the core element that shapes agent behavior
 * - **Relationship**: 1:N with Agent Configurations - one instruction set can govern multiple agents
 * - **Reusability**: Designed to be reused across multiple deployments
 * - **Managed By**: Service Configuration (lifecycle management)
 * - **Used By**: Deployment Configurations reference instruction sets for agent behavior
 *
 * **Example Use Case:**
 * A "Customer Service Guidelines" instruction set might govern both a "Sales Agent" and a "Support Agent",
 * ensuring uniform tone and compliance while each agent maintains its specialized capabilities.
 *
 * @typedef {Object} InstructionConfigurationProperties
 * @property {string} id - Unique identifier for the instruction configuration
 * @property {string} instructionName - System-readable name, typically auto-generated based on role (e.g., 'customer-support-agent')
 * @property {string} role - The role or persona the agent should adopt (e.g., 'Customer Support Specialist', 'Sales Representative')
 * @property {string} introductionMessage - Initial greeting message presented to users when starting a conversation
 * @property {string} instructions - Detailed instructions that guide agent behavior, responses, conversation flow, and decision-making processes
 * @property {string} guardrails - Safety and behavioral constraints the agent must follow, including compliance rules, forbidden topics, and ethical guidelines
 * @property {string[]} [requiredSkills] - Specific skills or capabilities required for this instruction set (e.g., 'appointment_booking', 'order_management')
 * @property {Record<string, any>} [validationRules] - Custom validation rules for input/output processing to ensure response quality and format compliance
 * @property {string} [serviceId] - ID of the service this instruction configuration is associated with for organizational purposes
 * @property {BusinessSupportServices[]} [supportedServices=[]] - Platform business services (tools) enabled for this agent, such as appointment management or order processing
 * @property {string[]} [tools] - Tool identifiers the agent can use with this instruction set for extended capabilities
 * @property {boolean} [isTemplate=false] - Whether this is a reusable template for creating other instruction configurations
 * @property {boolean} isPrimary - Whether this is the primary system instruction configuration template used as a baseline
 * @property {Record<string, any>} [metadata] - Additional metadata for the instruction configuration, such as version info or custom attributes
 * @property {string[]} [knowledgeSourceIds=[]] - Array of IDs referencing knowledge sources that provide context and information for this instruction set
 * @property {number} [createdAt] - Unix timestamp (milliseconds) when the configuration was created
 * @property {number} [updatedAt] - Unix timestamp (milliseconds) when the configuration was last updated
 *
 * @example
 * ```typescript
 * const instructionConfig: InstructionConfiguration = {
 *   id: '123*',
 *   instructionName: 'customer-support-agent',
 *   role: 'Customer Support Specialist',
 *   introductionMessage: 'Hello! How can I help you today?',
 *   instructions: 'You are a helpful customer support agent...',
 *   guardrails: 'Never share sensitive customer data...',
 *   supportedServices: [BusinessSupportServices.APPOINTMENT_MANAGEMENT],
 *   knowledgeSourceIds: ['789*'],
 *   isTemplate: false,
 *   isPrimary: false,
 *   createdAt: Date.now(),
 *   updatedAt: Date.now()
 * };
 * ```
 */
export declare const InstructionConfigurationSchema: z.ZodObject<{
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
    supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof BusinessSupportServices>>>>;
    tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Type definition for Instruction Configuration.
 *
 * Represents a complete instruction configuration including all metadata,
 * behavioral guidelines, and knowledge sources.
 */
export type InstructionConfiguration = z.infer<typeof InstructionConfigurationSchema>;
/**
 * Zod schema for creating a new instruction configuration.
 *
 * Omits auto-generated fields (id, timestamps) that are populated by the system.
 *
 * @remarks
 * This schema enforces required fields for instruction creation while excluding
 * fields that are automatically generated by the system.
 *
 * @example
 * ```typescript
 * const newInstruction: CreateInstructionConfiguration = {
 *   instructionName: 'sales-agent',
 *   role: 'Sales Representative',
 *   introductionMessage: 'Hi! I can help you find the perfect solution.',
 *   instructions: 'You are a knowledgeable sales agent...',
 *   guardrails: 'Always be honest about product capabilities...',
 *   supportedServices: [BusinessSupportServices.PRODUCT_ORDER_MANAGEMENT],
 *   knowledgeSourceIds: ['123*'],
 *   isTemplate: false,
 *   isPrimary: false
 * };
 * ```
 */
export declare const CreateInstructionConfigurationSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    instructionName: z.ZodString;
    role: z.ZodString;
    introductionMessage: z.ZodString;
    instructions: z.ZodString;
    guardrails: z.ZodString;
    requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    validationRules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    serviceId: z.ZodOptional<z.ZodString>;
    supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof BusinessSupportServices>>>>;
    tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPrimary: z.ZodDefault<z.ZodBoolean>;
    knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
/**
 * Type definition for creating a new instruction configuration.
 *
 * Represents the payload required to create a new instruction configuration,
 * excluding system-generated fields.
 */
export type CreateInstructionConfiguration = z.infer<typeof CreateInstructionConfigurationSchema>;
/**
 * Zod schema for updating an existing instruction configuration.
 *
 * All fields from CreateInstructionConfigurationSchema are optional (partial),
 * with the id field required to identify the configuration to update.
 *
 * @remarks
 * Supports partial updates - only include the fields you want to modify.
 * The id field is mandatory to specify which instruction configuration to update.
 *
 * @example
 * ```typescript
 * const updateInstruction: UpdateInstructionConfiguration = {
 *   id: '123*',
 *   introductionMessage: 'Hello! How may I assist you today?',
 *   guardrails: 'Updated safety guidelines...'
 * };
 * ```
 */
export declare const UpdateInstructionConfigurationSchema: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    instructionName: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    introductionMessage: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    guardrails: z.ZodOptional<z.ZodString>;
    requiredSkills: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    validationRules: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    serviceId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    supportedServices: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof BusinessSupportServices>>>>>;
    tools: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    isTemplate: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    isPrimary: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Type definition for updating an existing instruction configuration.
 *
 * Represents a partial update payload with required id field.
 */
export type UpdateInstructionConfiguration = z.infer<typeof UpdateInstructionConfigurationSchema>;
