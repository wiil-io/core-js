import z from "zod";
import { AgentRoleTemplateIdentifier, SupportedProprietor } from "../../type-definitions";
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
export declare const DynamicBaseAgentSetupSchema: z.ZodObject<{
    assistantName: z.ZodString;
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
    role_template_identifier: z.ZodOptional<z.ZodEnum<typeof AgentRoleTemplateIdentifier>>;
    capabilities: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../../type-definitions").BusinessSupportServices>>>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    voice: z.ZodOptional<z.ZodString>;
    providerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof SupportedProprietor>>>;
    providerModelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Model configuration schema.
 *
 * @typedef {Object} DynamicModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 */
export declare const DynamicModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
}, z.core.$strip>;
/**
 * Speech-to-text model configuration schema.
 *
 * @typedef {Object} DynamicSTTModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 * @property {string} [languageId] - Language ID for speech recognition
 */
export declare const DynamicSTTModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
    languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
/**
 * Text-to-speech model configuration schema.
 *
 * @typedef {Object} DynamicTTSModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 * @property {string} [languageId] - Language ID for speech synthesis
 * @property {string} [voiceId] - Voice ID for speech output
 */
export declare const DynamicTTSModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
    languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    voiceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
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
export declare const DynamicAgentSetupResultSchema: z.ZodObject<{
    success: z.ZodBoolean;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
export type DynamicBaseAgentSetup = z.infer<typeof DynamicBaseAgentSetupSchema>;
export type DynamicModelConfiguration = z.infer<typeof DynamicModelConfigurationSchema>;
export type DynamicSTTModelConfiguration = z.infer<typeof DynamicSTTModelConfigurationSchema>;
export type DynamicTTSModelConfiguration = z.infer<typeof DynamicTTSModelConfigurationSchema>;
export type DynamicAgentSetupResult = z.infer<typeof DynamicAgentSetupResultSchema>;
