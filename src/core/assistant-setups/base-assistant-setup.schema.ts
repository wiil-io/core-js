import z from "zod";
import { CreateInstructionConfigurationSchema, SttModelConfigSchema, TtsModelConfigSchema } from "../service-configuration";


// Base schema with refinement
export const BaseAssistantSchema = z.object({
    assistantName: z.string(),
    supportModelId: z.string(),
    voiceId: z.string().nullable().optional(),
    languageId: z.string().nullable().optional(),
    instructionConfigurationId: z.string().nullable().optional(),
    customInstructionConfiguration: CreateInstructionConfigurationSchema.nullable().optional(),
    knowledgeSourceIds: z.array(z.string()).default([]),
}).refine(
    (data) => {
        const hasInstructionId = data.instructionConfigurationId !== null && data.instructionConfigurationId !== undefined;
        const hasCustomInstruction = data.customInstructionConfiguration !== null && data.customInstructionConfiguration !== undefined;
        return hasInstructionId || hasCustomInstruction;
    },
    {
        message: "Either instructionConfigurationId or customInstructionConfiguration must be provided",
        path: ["instructionConfigurationId"],
    }
);


export const AdvanceBaseAssistantSchema = BaseAssistantSchema.safeExtend({
    sttConfig: SttModelConfigSchema,
    ttsConfig: TtsModelConfigSchema
}).describe("Schema for setting up an AI assistant with specified configurations");


export type BaseAssistant = z.infer<typeof BaseAssistantSchema>;
export type AdvanceBaseAssistant = z.infer<typeof AdvanceBaseAssistantSchema>;