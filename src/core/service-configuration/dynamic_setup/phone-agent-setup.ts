import z from "zod";
import { DynamicAgentSetupResultSchema, DynamicBaseAgentSetupSchema, DynamicSTTModelConfigurationSchema, DynamicTTSModelConfigurationSchema } from "./base-agent-setup";

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



export const DynamicPhoneAgentSetupResultSchema = DynamicAgentSetupResultSchema.safeExtend({
    phoneNumber: z.string().describe("Phone number associated with the phone configuration used for this assistant"),
}).describe("Schema for the result of creating or setting up a new phone AI assistant with dynamic setup");

export const UpdateDynamicPhoneAgentSchema = DynamicPhoneAgentSchema.partial().extend({
    id: z.string().describe("ID of the existing phone agent configuration to update"),
}).describe("Schema for updating a phone AI assistant configuration, allowing partial updates to phone-specific fields");


export type DynamicPhoneAgentSetup = z.infer<typeof DynamicPhoneAgentSchema>;
export type UpdateDynamicPhoneAgent = z.infer<typeof UpdateDynamicPhoneAgentSchema>;
export type DynamicPhoneAgentSetupResult = z.infer<typeof DynamicPhoneAgentSetupResultSchema>;