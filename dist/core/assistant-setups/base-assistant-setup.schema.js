"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvanceBaseAssistantSchema = exports.BaseAssistantSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const service_configuration_1 = require("../service-configuration");
// Base schema with refinement
exports.BaseAssistantSchema = zod_1.default.object({
    assistantName: zod_1.default.string(),
    supportModelId: zod_1.default.string(),
    voiceId: zod_1.default.string().nullable().optional(),
    languageId: zod_1.default.string().nullable().optional(),
    instructionConfigurationId: zod_1.default.string().nullable().optional(),
    customInstructionConfiguration: service_configuration_1.CreateInstructionConfigurationSchema.nullable().optional(),
    knowledgeSourceIds: zod_1.default.array(zod_1.default.string()).default([]),
}).refine((data) => {
    const hasInstructionId = data.instructionConfigurationId !== null && data.instructionConfigurationId !== undefined;
    const hasCustomInstruction = data.customInstructionConfiguration !== null && data.customInstructionConfiguration !== undefined;
    return hasInstructionId || hasCustomInstruction;
}, {
    message: "Either instructionConfigurationId or customInstructionConfiguration must be provided",
    path: ["instructionConfigurationId"],
});
exports.AdvanceBaseAssistantSchema = exports.BaseAssistantSchema.safeExtend({
    sttConfig: service_configuration_1.SttModelConfigSchema,
    ttsConfig: service_configuration_1.TtsModelConfigSchema
}).describe("Schema for setting up an AI assistant with specified configurations");
