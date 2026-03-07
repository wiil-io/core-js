import z from "zod";
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
export declare const DynamicPhoneAgentSchema: z.ZodObject<{
    assistantName: z.ZodString;
    instructionConfigurationId: z.ZodOptional<z.ZodString>;
    role_template_identifier: z.ZodOptional<z.ZodEnum<typeof import("../..").AgentRoleTemplateIdentifier>>;
    capabilities: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../..").BusinessSupportServices>>>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    voice: z.ZodOptional<z.ZodString>;
    providerType: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../..").SupportedProprietor>>>;
    providerModelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phoneConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    testPhoneNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sttConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../..").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>;
    ttsConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../..").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        voiceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Phone agent setup result schema.
 *
 * @typedef {Object} DynamicPhoneAgentSetupResult
 * @property {boolean} success - Whether the setup was successful
 * @property {string} agentConfigurationId - ID of the created agent configuration
 * @property {string} instructionConfigurationId - ID of the created instruction configuration
 * @property {string} phoneNumber - Phone number associated with the configuration
 */
export declare const DynamicPhoneAgentSetupResultSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    processingState: z.ZodObject<{
        status: z.ZodEnum<{
            pending: "pending";
            completed: "completed";
            failed: "failed";
            in_progress: "in_progress";
        }>;
        progressPercentage: z.ZodNumber;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    success: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    agentConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    phoneNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing phone agent configuration.
 * All fields are optional except id.
 */
export declare const UpdateDynamicPhoneAgentSchema: z.ZodObject<{
    id: z.ZodString;
    voice: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    language: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    instructionConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    providerType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../..").SupportedProprietor>>>>;
    capabilities: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../..").BusinessSupportServices>>>>>;
    assistantName: z.ZodOptional<z.ZodString>;
    role_template_identifier: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof import("../..").AgentRoleTemplateIdentifier>>>;
    providerModelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    testPhoneNumber: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    sttConfiguration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../..").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>>;
    ttsConfiguration: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        providerType: z.ZodEnum<typeof import("../..").SupportedProprietor>;
        providerModelId: z.ZodString;
        languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        voiceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export type DynamicPhoneAgentSetup = z.infer<typeof DynamicPhoneAgentSchema>;
export type UpdateDynamicPhoneAgent = z.infer<typeof UpdateDynamicPhoneAgentSchema>;
export type DynamicPhoneAgentSetupResult = z.infer<typeof DynamicPhoneAgentSetupResultSchema>;
