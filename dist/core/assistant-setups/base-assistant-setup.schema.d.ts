import z from "zod";
export declare const BaseAssistantSchema: z.ZodObject<{
    assistantName: z.ZodString;
    supportModelId: z.ZodString;
    voiceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    languageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customInstructionConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        instructionName: z.ZodString;
        role: z.ZodString;
        introductionMessage: z.ZodString;
        instructions: z.ZodString;
        guardrails: z.ZodString;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        validationRules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        serviceId: z.ZodOptional<z.ZodString>;
        supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("..").BusinessSupportServices>>>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPrimary: z.ZodDefault<z.ZodBoolean>;
        knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>;
    knowledgeSourceIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const AdvanceBaseAssistantSchema: z.ZodObject<{
    assistantName: z.ZodString;
    supportModelId: z.ZodString;
    voiceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    languageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionConfigurationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customInstructionConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        instructionName: z.ZodString;
        role: z.ZodString;
        introductionMessage: z.ZodString;
        instructions: z.ZodString;
        guardrails: z.ZodString;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        validationRules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        serviceId: z.ZodOptional<z.ZodString>;
        supportedServices: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEnum<typeof import("..").BusinessSupportServices>>>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodString>>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPrimary: z.ZodDefault<z.ZodBoolean>;
        knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>>;
    knowledgeSourceIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    sttConfig: z.ZodObject<{
        modelId: z.ZodString;
        defaultLanguage: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>;
    ttsConfig: z.ZodObject<{
        modelId: z.ZodString;
        voiceId: z.ZodString;
        defaultLanguage: z.ZodDefault<z.ZodString>;
        voiceSettings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type BaseAssistant = z.infer<typeof BaseAssistantSchema>;
export type AdvanceBaseAssistant = z.infer<typeof AdvanceBaseAssistantSchema>;
