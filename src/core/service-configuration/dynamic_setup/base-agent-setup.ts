import z from "zod";
import { AgentCapabilities, AgentRoleTemplateIdentifier, SupportedProprietor } from "../../type-definitions";

/**
 * @fileoverview Dynamic agent setup base schemas for AI assistant configuration.
 * @module service-configuration/dynamic_setup/base-agent-setup
 *
 * Provides foundational schemas for configuring AI assistants across different
 * channels (phone, web). These base schemas are extended by channel-specific
 * configurations in phone-agent-setup.ts and web-agent-setup.ts.
 */

/**
 * Base agent setup schema.
 *
 * @typedef {Object} DynamicBaseAgentSetup
 * @property {string} assistantName - Name of the AI assistant
 * @property {string} [instructionConfigurationId] - ID of the instruction configuration
 * @property {AgentRoleTemplateIdentifier} [role_template_identifier] - Role/persona for the agent
 * @property {AgentCapabilities[]} [capabilities] - List of enabled platform services
 * @property {string[]} [knowledgeSourceIds] - Knowledge source IDs to associate
 * @property {string} [language] - Language ID (e.g., en, es, fr)
 * @property {string} [voice] - Voice ID for voice interactions
 * @property {SupportedProprietor} [providerType] - AI model provider type
 * @property {string} [providerModelId] - Specific model ID from the provider
 */
export const DynamicBaseAgentSetupSchema = z.object({
    assistantName: z.string().describe("Name of the AI assistant to use in conversations"),
    instructionConfigurationId: z.string().optional().describe("ID of the instruction configuration to use for this assistant"),
    role_template_identifier: z.enum(AgentRoleTemplateIdentifier).optional().describe("The role or persona that the agent adopts with this instruction set"),
    capabilities : z.array(z.enum(AgentCapabilities)).optional().default([]).describe("List of platform services (tools) enabled for this agent configuration"),
    knowledgeSourceIds: z.array(z.string()).optional().describe("List of knowledge source IDs to associate with this assistant"),
    language: z.string().optional().default("en").describe("Language ID for the assistant, e.g., en, es, fr, etc."),
    voice: z.string().optional().describe("Voice ID for the assistant, if applicable, used for voice interactions"),
    providerType: z.enum(SupportedProprietor).nullable().optional().describe("The AI model provider type for this agent configuration, e.g., OPENAI, AZURE, etc."),
    providerModelId: z.string().nullable().optional().describe("The specific model ID from the provider to use for this agent, e.g., gpt-4, gpt-3.5-turbo, etc."),
    
}).describe("Base schema for setting up an AI assistant, used for both phone and web channels");


/**
 * Model configuration schema.
 *
 * @typedef {Object} DynamicModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 */
export const DynamicModelConfigurationSchema = z.object({
    providerType: z.enum(SupportedProprietor).describe("The AI model provider type for this agent configuration, e.g., OPENAI, AZURE, etc."),
    providerModelId: z.string().describe("The specific model ID from the provider to use for this agent, e.g., gpt-4, gpt-3.5-turbo, etc."),
}).describe("Base schema for model configuration");


/**
 * Speech-to-text model configuration schema.
 *
 * @typedef {Object} DynamicSTTModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 * @property {string} [languageId] - Language ID for speech recognition
 */
export const DynamicSTTModelConfigurationSchema = DynamicModelConfigurationSchema.extend({
    languageId: z.string().optional().default("en").describe("Language ID for the speech-to-text model, e.g., en, es, fr, etc."),
}).describe("Schema for speech-to-text model configuration, extending the base model configuration with language support");


/**
 * Text-to-speech model configuration schema.
 *
 * @typedef {Object} DynamicTTSModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 * @property {string} [languageId] - Language ID for speech synthesis
 * @property {string} [voiceId] - Voice ID for speech output
 */
export const DynamicTTSModelConfigurationSchema = DynamicModelConfigurationSchema.extend({
    languageId: z.string().optional().default("en").describe("Language ID for the text-to-speech model, e.g., en, es, fr, etc."),
    voiceId: z.string().optional().describe("Voice ID for the text-to-speech model, if applicable"),
}).describe("Schema for text-to-speech model configuration, extending the base model configuration with language and voice support");


/**
 * Agent setup result schema.
 *
 * @typedef {Object} DynamicAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string} [errorMessage] - Error message if setup failed
 * @property {Object} [metadata] - Additional metadata about the setup
 */
export const DynamicAgentSetupResultSchema = z.object({
    success: z.boolean().describe("Indicates if the phone assistant setup was successful"),
    agentConfigurationId: z.string().describe("ID of the agent configuration created for this phone assistant"),
    instructionConfigurationId: z.string().describe("ID of the instruction configuration created for this phone assistant"),
    errorMessage: z.string().optional().describe("Error message if the setup failed, otherwise undefined"),
    metadata: z.record(z.string(), z.any()).nullable().optional().describe("Additional metadata about the phone assistant setup, if any"),
}).describe("Schema for the result of creating or setting up a new phone AI assistant with dynamic setup");


export type DynamicBaseAgentSetup = z.infer<typeof DynamicBaseAgentSetupSchema>;
export type DynamicModelConfiguration    = z.infer<typeof DynamicModelConfigurationSchema>;
export type DynamicSTTModelConfiguration = z.infer<typeof DynamicSTTModelConfigurationSchema>;
export type DynamicTTSModelConfiguration = z.infer<typeof DynamicTTSModelConfigurationSchema>;
export type DynamicAgentSetupResult = z.infer<typeof DynamicAgentSetupResultSchema>;






