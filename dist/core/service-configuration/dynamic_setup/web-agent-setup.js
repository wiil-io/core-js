"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDynamicWebAgentSchema = exports.DynamicWebAgentSetupResultSchema = exports.DynamicWebAgentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_agent_setup_1 = require("./base-agent-setup");
const type_definitions_1 = require("../../type-definitions");
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
exports.DynamicWebAgentSchema = base_agent_setup_1.DynamicBaseAgentSetupSchema.safeExtend({
    websiteUrl: zod_1.default.string().describe("URL of the website to use for this assistant, defining web-specific settings and integrations"),
    communicationType: zod_1.default.enum(type_definitions_1.OttCommunicationType).optional().default(type_definitions_1.OttCommunicationType.UNIFIED).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
    sttConfiguration: base_agent_setup_1.DynamicSTTModelConfigurationSchema.nullable().optional().describe("Speech-to-text model configuration for the web assistant, if using voice interactions"),
    ttsConfiguration: base_agent_setup_1.DynamicTTSModelConfigurationSchema.nullable().optional().describe("Text-to-speech model configuration for the web assistant, if using voice interactions"),
}).refine((data) => {
    const hasSTT = data.sttConfiguration !== null && data.sttConfiguration !== undefined;
    const hasTTS = data.ttsConfiguration !== null && data.ttsConfiguration !== undefined;
    return hasSTT === hasTTS;
}, { message: "Both sttConfiguration and ttsConfiguration must be provided together, or neither" }).describe("Schema for setting up a web AI assistant with optional chain configuration capabilities");
/**
 * Web agent setup result schema.
 *
 * @typedef {Object} DynamicWebAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string[]} integrationSnippets - Code snippets for deploying the web assistant
 */
exports.DynamicWebAgentSetupResultSchema = base_agent_setup_1.DynamicAgentSetupResultSchema.safeExtend({
    integrationSnippets: zod_1.default.array(zod_1.default.string()).nullable().optional().describe("List of code snippets or integration details for deploying the web assistant on the specified website, if applicable"),
}).describe("Schema for the result of creating or setting up a new web AI assistant with dynamic setup");
/**
 * Schema for updating an existing web agent configuration.
 * All fields are optional except id.
 */
exports.UpdateDynamicWebAgentSchema = exports.DynamicWebAgentSchema.partial().extend({
    id: zod_1.default.string().describe("ID of the existing web agent configuration to update"),
}).describe("Schema for updating a web AI assistant configuration, allowing partial updates to web-specific fields");
