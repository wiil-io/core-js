import z from "zod";
import { OttCommunicationType } from "../../type-definitions";
/**
 * @fileoverview Web agent setup schemas for AI assistant configuration.
 * @module service-configuration/dynamic_setup/web-agent-setup
 *
 * Provides schemas for configuring AI assistants deployed on web channels.
 * Extends the base agent setup with web-specific settings like website URL,
 * communication type, and optional voice interaction configurations.
 */
/**
 * Web agent setup schema.
 *
 * @typedef {Object} DynamicWebAgentSetup
 * @property {string} websiteUrl - URL of the website for this assistant
 * @property {OttCommunicationType} [communicationType] - Communication method (text, voice, unified)
 * @property {Object} [sttConfiguration] - Speech-to-text configuration for voice
 * @property {Object} [ttsConfiguration] - Text-to-speech configuration for voice
 */
export declare const DynamicWebAgentSchema: z.ZodObject<{
    assistantName: z.ZodString;
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
    role_template_identifier: z.ZodOptional<z.ZodEnum<typeof import("../../type-definitions").AgentRoleTemplateIdentifier>>;
    capabilities: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../../type-definitions").BusinessSupportServices>>>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    voice: z.ZodOptional<z.ZodString>;
    providerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>>>;
    providerModelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    websiteUrl: z.ZodString;
    communicationType: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof OttCommunicationType>>>;
    sttConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>;
    ttsConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        voiceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Web agent setup result schema.
 *
 * @typedef {Object} DynamicWebAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string[]} integrationSnippets - Code snippets for deploying the web assistant
 */
export declare const DynamicWebAgentSetupResultSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    success: z.ZodBoolean;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    integrationSnippets: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for updating an existing web agent configuration.
 * All fields are optional except id.
 */
export declare const UpdateDynamicWebAgentSchema: z.ZodObject<{
    assistantName: z.ZodOptional<z.ZodString>;
    instructionConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    role_template_identifier: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof import("../../type-definitions").AgentRoleTemplateIdentifier>>>;
    capabilities: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../../type-definitions").BusinessSupportServices>>>>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    language: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    voice: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    providerType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>>>>;
    providerModelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    communicationType: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof OttCommunicationType>>>>;
    sttConfiguration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>>;
    ttsConfiguration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../../type-definitions").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        voiceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    id: z.ZodString;
}, z.core.$strip>;
export type DynamicWebAgentSetup = z.infer<typeof DynamicWebAgentSchema>;
export type UpdateDynamicWebAgent = z.infer<typeof UpdateDynamicWebAgentSchema>;
export type DynamicWebAgentSetupResult = z.infer<typeof DynamicWebAgentSetupResultSchema>;
