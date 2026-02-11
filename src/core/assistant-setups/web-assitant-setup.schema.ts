import z from "zod";
import { BaseAssistantSchema } from "./base-assistant-setup.schema";
import { OttCommunicationType } from "../type-definitions";


export const WebAssistantSetupSchema = BaseAssistantSchema.safeExtend({
    websiteUrl: z.url().describe("URL of the website where this assistant will be deployed"),
    communicationType: z.enum(OttCommunicationType).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
}).describe("Schema for setting up a web AI assistant");

export const ChainedWebAssistantSetupSchema = WebAssistantSetupSchema.safeExtend({
    websiteUrl: z.url().describe("URL of the website where this assistant will be deployed"),
    communicationType: z.enum(OttCommunicationType).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
}).describe("Schema for setting up a web AI assistant with advanced configurations");


export type WebAssistantSetup = z.infer<typeof WebAssistantSetupSchema>;
export type ChainedWebAssistantSetup = z.infer<typeof ChainedWebAssistantSetupSchema>;