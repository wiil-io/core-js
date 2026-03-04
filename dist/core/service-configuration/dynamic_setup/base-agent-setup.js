"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicAgentSetupResultSchema = exports.DynamicTTSModelConfigurationSchema = exports.DynamicSTTModelConfigurationSchema = exports.DynamicModelConfigurationSchema = exports.DynamicBaseAgentSetupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const type_definitions_1 = require("../../type-definitions");
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
exports.DynamicBaseAgentSetupSchema = zod_1.default.object({
    assistantName: zod_1.default.string().describe("Name of the AI assistant to use in conversations"),
    instructionConfigurationId: zod_1.default.string().optional().describe("ID of the instruction configuration to use for this assistant"),
    role_template_identifier: zod_1.default.enum(type_definitions_1.AgentRoleTemplateIdentifier).optional().describe("The role or persona that the agent adopts with this instruction set"),
    capabilities: zod_1.default.array(zod_1.default.enum(type_definitions_1.AgentCapabilities)).optional().default([]).describe("List of platform services (tools) enabled for this agent configuration"),
    knowledgeSourceIds: zod_1.default.array(zod_1.default.string()).optional().describe("List of knowledge source IDs to associate with this assistant"),
    language: zod_1.default.string().optional().default("en").describe("Language ID for the assistant, e.g., en, es, fr, etc."),
    voice: zod_1.default.string().optional().describe("Voice ID for the assistant, if applicable, used for voice interactions"),
    providerType: zod_1.default.enum(type_definitions_1.SupportedProprietor).nullable().optional().describe("The AI model provider type for this agent configuration, e.g., OPENAI, AZURE, etc."),
    providerModelId: zod_1.default.string().nullable().optional().describe("The specific model ID from the provider to use for this agent, e.g., gpt-4, gpt-3.5-turbo, etc."),
}).describe("Base schema for setting up an AI assistant, used for both phone and web channels");
/**
 * Model configuration schema.
 *
 * @typedef {Object} DynamicModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 */
exports.DynamicModelConfigurationSchema = zod_1.default.object({
    providerType: zod_1.default.enum(type_definitions_1.SupportedProprietor).describe("The AI model provider type for this agent configuration, e.g., OPENAI, AZURE, etc."),
    providerModelId: zod_1.default.string().describe("The specific model ID from the provider to use for this agent, e.g., gpt-4, gpt-3.5-turbo, etc."),
}).describe("Base schema for model configuration");
/**
 * Speech-to-text model configuration schema.
 *
 * @typedef {Object} DynamicSTTModelConfiguration
 * @property {SupportedProprietor} providerType - AI model provider type
 * @property {string} providerModelId - Specific model ID from the provider
 * @property {string} [languageId] - Language ID for speech recognition
 */
exports.DynamicSTTModelConfigurationSchema = exports.DynamicModelConfigurationSchema.extend({
    languageId: zod_1.default.string().optional().default("en").describe("Language ID for the speech-to-text model, e.g., en, es, fr, etc."),
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
exports.DynamicTTSModelConfigurationSchema = exports.DynamicModelConfigurationSchema.extend({
    languageId: zod_1.default.string().optional().default("en").describe("Language ID for the text-to-speech model, e.g., en, es, fr, etc."),
    voiceId: zod_1.default.string().optional().describe("Voice ID for the text-to-speech model, if applicable"),
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
exports.DynamicAgentSetupResultSchema = zod_1.default.object({
    success: zod_1.default.boolean().describe("Indicates if the phone assistant setup was successful"),
    agentConfigurationId: zod_1.default.string().describe("ID of the agent configuration created for this phone assistant"),
    instructionConfigurationId: zod_1.default.string().describe("ID of the instruction configuration created for this phone assistant"),
    errorMessage: zod_1.default.string().optional().describe("Error message if the setup failed, otherwise undefined"),
    metadata: zod_1.default.record(zod_1.default.string(), zod_1.default.any()).nullable().optional().describe("Additional metadata about the phone assistant setup, if any"),
}).describe("Schema for the result of creating or setting up a new phone AI assistant with dynamic setup");
