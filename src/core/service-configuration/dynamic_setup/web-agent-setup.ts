import z from "zod";
import { DynamicAgentSetupResultSchema, DynamicBaseAgentSetupSchema, DynamicSTTModelConfigurationSchema, DynamicTTSModelConfigurationSchema } from "./base-agent-setup";
import { OttCommunicationType } from "../../type-definitions";


export const DynamicWebAgentSchema = DynamicBaseAgentSetupSchema.safeExtend({
    websiteUrl: z.string().describe("URL of the website to use for this assistant, defining web-specific settings and integrations"),
    communicationType: z.enum(OttCommunicationType).optional().default(OttCommunicationType.UNIFIED).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
    sttConfiguration: DynamicSTTModelConfigurationSchema.nullable().optional().describe("Speech-to-text model configuration for the web assistant, if using voice interactions"),
    ttsConfiguration: DynamicTTSModelConfigurationSchema.nullable().optional().describe("Text-to-speech model configuration for the web assistant, if using voice interactions"),
}).refine(
    (data) => {
        const hasSTT = data.sttConfiguration !== null && data.sttConfiguration !== undefined;
        const hasTTS = data.ttsConfiguration !== null && data.ttsConfiguration !== undefined;
        return hasSTT === hasTTS;
    },
    { message: "Both sttConfiguration and ttsConfiguration must be provided together, or neither" }
).describe("Schema for setting up a web AI assistant with optional chain configuration capabilities");


export const DynamicWebAgentSetupResultSchema = DynamicAgentSetupResultSchema.safeExtend({
 integrationSnippets: z.array(z.string()).describe("List of code snippets or integration details for deploying the web assistant on the specified website, if applicable"),
}).describe("Schema for the result of creating or setting up a new web AI assistant with dynamic setup");

export const UpdateDynamicWebAgentSchema = DynamicWebAgentSchema.partial().extend({
    id: z.string().describe("ID of the existing web agent configuration to update"),
}).describe("Schema for updating a web AI assistant configuration, allowing partial updates to web-specific fields");


export type DynamicWebAgentSetup = z.infer<typeof DynamicWebAgentSchema>;
export type UpdateDynamicWebAgent = z.infer<typeof UpdateDynamicWebAgentSchema>;
export type DynamicWebAgentSetupResult = z.infer<typeof DynamicWebAgentSetupResultSchema>;