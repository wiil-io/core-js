"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicAgentSetupResultSchema = exports.DynamicAgentProcessingStateSchema = exports.DynamicTTSModelConfigurationSchema = exports.DynamicSTTModelConfigurationSchema = exports.DynamicModelConfigurationSchema = exports.DynamicBaseAgentSetupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const type_definitions_1 = require("../type-definitions");
const base_schema_1 = require("../base.schema");
/**
 * @fileoverview Shared base schemas for dynamic AI assistant setup and model configuration.
 * @module service-configuration/base-agent-setup
 *
 * Provides foundational schemas for configuring AI assistants across different
 * channels (phone, web) and reusable provider model configuration schemas.
 */
/**
 * Base agent setup schema.
 *
 * @typedef {Object} DynamicBaseAgentSetup
 * @property {string} assistantName - Name of the AI assistant (max 30 characters)
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
    assistantName: zod_1.default.string().max(30).describe("Name of the AI assistant to use in conversations"),
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
 * Agent processing state schema for tracking long-running setup operations.
 *
 * @typedef {Object} DynamicAgentProcessingState
 * @property {string} status - Current processing status (pending, in_progress, completed, failed)
 * @property {number} progressPercentage - Progress percentage (0-100)
 * @property {string} [message] - Additional details about current state
 */
exports.DynamicAgentProcessingStateSchema = zod_1.default.object({
    status: zod_1.default.enum(["pending", "in_progress", "completed", "failed"]).describe("Current processing status of the agent setup"),
    progressPercentage: zod_1.default.number().min(0).max(100).describe("Progress percentage of the agent setup process"),
    message: zod_1.default.string().optional().describe("Optional message providing additional details about the current processing state"),
}).describe("Schema for representing the processing state of a dynamic agent setup, useful for tracking long-running setup operations");
/**
 * Agent setup result schema.
 * Extends BaseModelSchema to include id, createdAt, and updatedAt fields.
 *
 * @typedef {Object} DynamicAgentSetupResult
 * @property {Object} processingState - Real-time processing state for async operations
 * @property {boolean} [success] - Whether the setup was successful (nullable during processing)
 * @property {string} [agentConfigurationId] - ID of the created agent configuration
 * @property {string} [instructionConfigurationId] - ID of the created instruction configuration
 * @property {string} [errorMessage] - Error message if setup failed
 * @property {Object} [metadata] - Additional metadata about the setup
 */
exports.DynamicAgentSetupResultSchema = base_schema_1.BaseModelSchema.safeExtend({
    processingState: exports.DynamicAgentProcessingStateSchema.describe("Optional field to provide real-time processing state of the agent setup, useful for asynchronous operations"),
    success: zod_1.default.boolean().nullable().optional().describe("Indicates if the assistant setup was successful"),
    agentConfigurationId: zod_1.default.string().nullable().optional().describe("ID of the agent configuration created for this assistant"),
    instructionConfigurationId: zod_1.default.string().nullable().optional().describe("ID of the instruction configuration created for this assistant"),
    errorMessage: zod_1.default.string().optional().describe("Error message if the setup failed, otherwise undefined"),
    metadata: zod_1.default.record(zod_1.default.string(), zod_1.default.any()).nullable().optional().describe("Additional metadata about the assistant setup, if any"),
}).describe("Schema for the result of creating or setting up a new AI assistant with dynamic setup");
