import z from "zod";

import { AdvanceBaseAssistantSchema, BaseAssistantSchema } from "./base-assistant-setup.schema";

export const PhoneAssistantSetupSchema = BaseAssistantSchema.safeExtend({
    phoneConfigurationId: z.string().describe("Phone configuration ID for the phone channel where this assistant will be deployed"),
}).describe("Schema for setting up a phone AI assistant");


export const ChainedPhoneAssistantSetupSchema = AdvanceBaseAssistantSchema.safeExtend({
    phoneConfigurationId: z.string().describe("Phone configuration ID for the phone channel where this assistant will be deployed"),
}).describe("Schema for setting up a phone AI assistant with advanced configurations");

export type PhoneAssistantSetup = z.infer<typeof PhoneAssistantSetupSchema>;
export type ChainedPhoneAssistantSetup = z.infer<typeof ChainedPhoneAssistantSetupSchema>;