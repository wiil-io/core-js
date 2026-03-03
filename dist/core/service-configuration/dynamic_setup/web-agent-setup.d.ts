import z from "zod";
import { OttCommunicationType } from "../../type-definitions";
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
export declare const DynamicWebAgentSetupResultSchema: z.ZodObject<{
    success: z.ZodBoolean;
    agentConfigurationId: z.ZodString;
    instructionConfigurationId: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    integrationSnippets: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
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
