"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDynamicPhoneAgentSchema = exports.DynamicPhoneAgentSetupResultSchema = exports.DynamicPhoneAgentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_agent_setup_1 = require("./base-agent-setup");
exports.DynamicPhoneAgentSchema = base_agent_setup_1.DynamicBaseAgentSetupSchema.safeExtend({
    phoneConfigurationId: zod_1.default.string().nullable().optional().describe("ID of the phone configuration to use for this assistant, defining telephony settings and integrations"),
    testPhoneNumber: zod_1.default.string().nullable().optional().describe("Optional phone number to use for testing the phone assistant setup, if applicable"),
    sttConfiguration: base_agent_setup_1.DynamicSTTModelConfigurationSchema.nullable().optional().describe("Speech-to-text model configuration for the phone assistant, if using voice interactions"),
    ttsConfiguration: base_agent_setup_1.DynamicTTSModelConfigurationSchema.nullable().optional().describe("Text-to-speech model configuration for the phone assistant, if using voice interactions"),
}).refine((data) => {
    const hasSTT = data.sttConfiguration !== null && data.sttConfiguration !== undefined;
    const hasTTS = data.ttsConfiguration !== null && data.ttsConfiguration !== undefined;
    return hasSTT === hasTTS;
}, { message: "Both sttConfiguration and ttsConfiguration must be provided together, or neither" }).describe("Schema for setting up a phone AI assistant with optional chain configuration capabilities");
exports.DynamicPhoneAgentSetupResultSchema = base_agent_setup_1.DynamicAgentSetupResultSchema.safeExtend({
    phoneNumber: zod_1.default.string().describe("Phone number associated with the phone configuration used for this assistant"),
}).describe("Schema for the result of creating or setting up a new phone AI assistant with dynamic setup");
exports.UpdateDynamicPhoneAgentSchema = exports.DynamicPhoneAgentSchema.partial().extend({
    id: zod_1.default.string().describe("ID of the existing phone agent configuration to update"),
}).describe("Schema for updating a phone AI assistant configuration, allowing partial updates to phone-specific fields");
