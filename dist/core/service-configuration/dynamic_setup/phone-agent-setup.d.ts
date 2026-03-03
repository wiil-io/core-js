import z from "zod";
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
export declare const DynamicPhoneAgentSetupResultSchema: z.ZodObject<{
    success: z.ZodBoolean;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    phoneNumber: z.ZodString;
}, z.core.$strip>;
export declare const UpdateDynamicPhoneAgentSchema: z.ZodObject<{
    assistantName: z.ZodOptional<z.ZodString>;
    instructionConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    role_template_identifier: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof import("../..").AgentRoleTemplateIdentifier>>>;
    capabilities: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("../..").BusinessSupportServices>>>>>;
    knowledgeSourceIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    language: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    voice: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    providerType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../..").SupportedProprietor>>>>;
    providerModelId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    phoneConfigurationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
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
    id: z.ZodString;
}, z.core.$strip>;
export type DynamicPhoneAgentSetup = z.infer<typeof DynamicPhoneAgentSchema>;
export type UpdateDynamicPhoneAgent = z.infer<typeof UpdateDynamicPhoneAgentSchema>;
export type DynamicPhoneAgentSetupResult = z.infer<typeof DynamicPhoneAgentSetupResultSchema>;
