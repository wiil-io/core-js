import z from "zod";
import { AgentRoleTemplateIdentifier, SupportedProprietor } from "../../type-definitions";
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
export declare const DynamicModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
}, z.core.$strip>;
export declare const DynamicSTTModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
    languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const DynamicTTSModelConfigurationSchema: z.ZodObject<{
    providerType: z.ZodEnum<typeof SupportedProprietor>;
    providerModelId: z.ZodString;
    languageId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    voiceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
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
