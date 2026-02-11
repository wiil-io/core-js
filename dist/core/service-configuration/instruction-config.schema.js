"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstructionConfigurationSchema = exports.CreateInstructionConfigurationSchema = exports.InstructionConfigurationSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../base.schema");
const account_definitions_1 = require("../type-definitions/account-definitions");
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
exports.InstructionConfigurationSchema = base_schema_1.BaseModelSchema.safeExtend({
    instructionName: zod_1.z.string().describe("System-readable name for the instruction configuration, typically auto-generated based on the role (e.g., 'customer-support-agent', 'sales-representative')"),
    role: zod_1.z.string().describe("The role or persona the agent should adopt during conversations (e.g., 'Customer Support Specialist', 'Sales Representative', 'Technical Advisor')"),
    introductionMessage: zod_1.z.string().describe("Initial greeting message presented to users when starting a conversation with the agent"),
    instructions: zod_1.z.string().describe("Detailed instructions that fundamentally define how the agent operates, including behavioral guidelines, conversation flow, response patterns, and decision-making processes"),
    guardrails: zod_1.z.string().describe("Safety and behavioral constraints the agent must strictly follow, including compliance rules, forbidden topics, ethical guidelines, and escalation criteria"),
    requiredSkills: zod_1.z.array(zod_1.z.string()).optional().describe("Specific skills or capabilities required for this instruction set (e.g., 'appointment_booking', 'order_management', 'technical_troubleshooting')"),
    validationRules: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Custom validation rules for input/output processing to ensure response quality, format compliance, and data integrity"),
    serviceId: zod_1.z.string().optional().describe("ID of the parent service this instruction configuration is associated with for organizational and access control purposes"),
    supportedServices: zod_1.z.array(zod_1.z.enum(account_definitions_1.BusinessSupportServices)).optional().default([]).describe("Array of platform business services (tools) enabled for this agent, such as appointment management, order processing, or payment handling"),
    tools: zod_1.z.array(zod_1.z.string()).optional().describe("Array of tool identifiers the agent can use with this instruction set for extended capabilities and integrations"),
    isTemplate: zod_1.z.boolean().optional().default(false).describe("Whether this instruction configuration is a reusable template that can be used as a baseline for creating other instruction configurations"),
    isPrimary: zod_1.z.boolean().default(false).describe("Whether this is the primary system instruction configuration template used as the default baseline for new instruction configurations"),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional().describe("Additional metadata for the instruction configuration, such as version information, tags, custom attributes, or categorization data"),
    knowledgeSourceIds: zod_1.z.array(zod_1.z.string()).optional().default([]).describe("Array of IDs referencing knowledge sources that provide contextual information, documentation, and domain knowledge for this instruction set (1:N relationship with Knowledge Sources)"),
});
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
exports.CreateInstructionConfigurationSchema = exports.InstructionConfigurationSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
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
exports.UpdateInstructionConfigurationSchema = exports.CreateInstructionConfigurationSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
