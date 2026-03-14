import z from "zod";
import { DynamicAgentSetupResultSchema, DynamicBaseAgentSetupSchema, DynamicSTTModelConfigurationSchema, DynamicTTSModelConfigurationSchema } from "../base-agent-setup";

/**
 * @fileoverview Phone agent setup schemas for AI assistant configuration.
 * @module service-configuration/dynamic_setup/phone-agent-setup
 *
 * Provides schemas for configuring AI assistants deployed on phone/telephony channels.
 * Extends the base agent setup with phone-specific settings like phone configuration,
 * test numbers, and required voice interaction configurations (STT/TTS).
 */

/**
 * Phone agent setup schema.
 *
 * @typedef {Object} DynamicPhoneAgentSetup
 * @property {string} [phoneConfigurationId] - ID of the phone configuration
 * @property {string} [testPhoneNumber] - Phone number for testing
 * @property {Object} [sttConfiguration] - Speech-to-text configuration (required for voice)
 * @property {Object} [ttsConfiguration] - Text-to-speech configuration (required for voice)
 */
export const DynamicPhoneAgentSchema = DynamicBaseAgentSetupSchema.safeExtend({
    phoneConfigurationId: z.string().nullable().optional().describe("ID of the phone configuration to use for this assistant, defining telephony settings and integrations"),
    testPhoneNumber: z.string().nullable().optional().describe("Optional phone number to use for testing the phone assistant setup, if applicable"),
    sttConfiguration: DynamicSTTModelConfigurationSchema.nullable().optional().describe("Speech-to-text model configuration for the phone assistant, if using voice interactions"),
    ttsConfiguration: DynamicTTSModelConfigurationSchema.nullable().optional().describe("Text-to-speech model configuration for the phone assistant, if using voice interactions"),
}).refine(
    (data) => {
        const hasSTT = data.sttConfiguration !== null && data.sttConfiguration !== undefined;
        const hasTTS = data.ttsConfiguration !== null && data.ttsConfiguration !== undefined;
        return hasSTT === hasTTS;
    },
    { message: "Both sttConfiguration and ttsConfiguration must be provided together, or neither" }
).describe("Schema for setting up a phone AI assistant with optional chain configuration capabilities");


/**
 * Phone agent setup result schema.
 *
 * @typedef {Object} DynamicPhoneAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string} phoneNumber - Phone number associated with the configuration
 */
export const DynamicPhoneAgentSetupResultSchema = DynamicAgentSetupResultSchema.safeExtend({
    phoneNumber: z.string().nullable().optional().describe("Phone number associated with the phone configuration used for this assistant"),
}).describe("Schema for the result of creating or setting up a new phone AI assistant with dynamic setup");

/**
 * Schema for updating an existing phone agent configuration.
 * All fields are optional except id.
 */
export const UpdateDynamicPhoneAgentSchema = DynamicPhoneAgentSchema.partial().extend({
    id: z.string().describe("ID of the existing phone agent configuration to update"),
}).omit({
    phoneConfigurationId: true, // Phone configuration cannot be changed after creation 
}).describe("Schema for updating a phone AI assistant configuration, allowing partial updates to phone-specific fields");


export type DynamicPhoneAgentSetup = z.infer<typeof DynamicPhoneAgentSchema>;
export type UpdateDynamicPhoneAgent = z.infer<typeof UpdateDynamicPhoneAgentSchema>;
export type DynamicPhoneAgentSetupResult = z.infer<typeof DynamicPhoneAgentSetupResultSchema>;