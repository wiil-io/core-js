import z, { nullable } from "zod";
import { DynamicAgentSetupResultSchema, DynamicBaseAgentSetupSchema, DynamicSTTModelConfigurationSchema, DynamicTTSModelConfigurationSchema } from "./base-agent-setup";
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
export const DynamicWebAgentSchema = DynamicBaseAgentSetupSchema.safeExtend({
    websiteUrl: z.string().describe("URL of the website to use for this assistant, defining web-specific settings and integrations"),
    communicationType: z.enum(OttCommunicationType).optional().default(OttCommunicationType.UNIFIED).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
    sttConfiguration: DynamicSTTModelConfigurationSchema.nullable().optional().describe("Speech-to-text model configuration for the web assistant, if using voice interactions"),
    ttsConfiguration: DynamicTTSModelConfigurationSchema.nullable().optional().describe("Text-to-speech model configuration for the web assistant, if using voice interactions"),
}).refine(
    (data) => {
        const hasSTT = data.sttConfiguration !== null && data.sttConfiguration !== undefined;
        const hasTTS = data.ttsConfiguration !== null && data.ttsConfiguration !== undefined;
        return hasSTT === hasTTS;
    },
    { message: "Both sttConfiguration and ttsConfiguration must be provided together, or neither" }
).describe("Schema for setting up a web AI assistant with optional chain configuration capabilities");


/**
 * Web agent setup result schema.
 *
 * @typedef {Object} DynamicWebAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string[]} integrationSnippets - Code snippets for deploying the web assistant
 */
export const DynamicWebAgentSetupResultSchema = DynamicAgentSetupResultSchema.safeExtend({
 integrationSnippets: z.array(z.string()).nullable().optional().describe("List of code snippets or integration details for deploying the web assistant on the specified website, if applicable"),
}).describe("Schema for the result of creating or setting up a new web AI assistant with dynamic setup");

/**
 * Schema for updating an existing web agent configuration.
 * All fields are optional except id.
 */
export const UpdateDynamicWebAgentSchema = DynamicWebAgentSchema.partial().extend({
    id: z.string().describe("ID of the existing web agent configuration to update"),
}).describe("Schema for updating a web AI assistant configuration, allowing partial updates to web-specific fields");


export type DynamicWebAgentSetup = z.infer<typeof DynamicWebAgentSchema>;
export type UpdateDynamicWebAgent = z.infer<typeof UpdateDynamicWebAgentSchema>;
export type DynamicWebAgentSetupResult = z.infer<typeof DynamicWebAgentSetupResultSchema>;