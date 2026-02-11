import z from "zod";
export declare const AssistantSetupResultSchema: z.ZodObject<{
    success: z.ZodBoolean;
    agentConfiguration: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        modelId: z.ZodString;
        name: z.ZodString;
        defaultFunctionState: z.ZodDefault<z.ZodEnum<typeof import("..").LLMType>>;
        usesWiilSupportModel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        requiredModelConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        instructionConfigurationId: z.ZodString;
        assistantType: z.ZodDefault<z.ZodEnum<typeof import("..").AssistantType>>;
        call_transfer_config: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            transfer_number: z.ZodString;
            transfer_type: z.ZodDefault<z.ZodEnum<{
                blind: "blind";
                warm: "warm";
            }>>;
            transfer_conditions: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        model: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            modelId: z.ZodString;
            proprietor: z.ZodEnum<typeof import("..").SupportedProprietor>;
            name: z.ZodString;
            provider_model_id: z.ZodOptional<z.ZodString>;
            description: z.ZodString;
            type: z.ZodEnum<typeof import("..").LLMType>;
            discontinued: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            supportedVoices: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                voiceId: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                gender: z.ZodEnum<{
                    neutral: "neutral";
                    male: "male";
                    female: "female";
                }>;
                language: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                isDefault: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>>>;
            supportLanguages: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                languageId: z.ZodString;
                name: z.ZodString;
                code: z.ZodString;
                isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isExperimental: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    instructionConfiguration: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
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
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        knowledgeSourceIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>;
    deploymentChannels: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        deploymentType: z.ZodEnum<typeof import("..").DeploymentType>;
        channelName: z.ZodOptional<z.ZodString>;
        recordingEnabled: z.ZodDefault<z.ZodBoolean>;
        channelIdentifier: z.ZodString;
        configuration: z.ZodUnion<readonly [z.ZodObject<{
            phoneConfigurationId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            communicationType: z.ZodDefault<z.ZodEnum<typeof import("..").OttCommunicationType>>;
            widgetConfiguration: z.ZodOptional<z.ZodObject<{
                position: z.ZodDefault<z.ZodEnum<{
                    left: "left";
                    right: "right";
                }>>;
                customTheme: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            packageName: z.ZodDefault<z.ZodString>;
            platform: z.ZodDefault<z.ZodEnum<typeof import("..").MobilePlatform>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>>;
    deploymentConfigurations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        instructionConfigurationId: z.ZodString;
        projectId: z.ZodString;
        agentConfigurationId: z.ZodString;
        deploymentChannelId: z.ZodString;
        deploymentName: z.ZodOptional<z.ZodString>;
        provisioningConfigChainId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        provisioningType: z.ZodDefault<z.ZodEnum<typeof import("..").DeploymentProvisioningType>>;
        deploymentStatus: z.ZodEnum<typeof import("..").DeploymentStatus>;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    errorMessage: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AssistantSetupResult = z.infer<typeof AssistantSetupResultSchema>;
