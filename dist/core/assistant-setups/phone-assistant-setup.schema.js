"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainedPhoneAssistantSetupSchema = exports.PhoneAssistantSetupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_assistant_setup_schema_1 = require("./base-assistant-setup.schema");
exports.PhoneAssistantSetupSchema = base_assistant_setup_schema_1.BaseAssistantSchema.safeExtend({
    phoneConfigurationId: zod_1.default.string().describe("Phone configuration ID for the phone channel where this assistant will be deployed"),
}).describe("Schema for setting up a phone AI assistant");
exports.ChainedPhoneAssistantSetupSchema = base_assistant_setup_schema_1.AdvanceBaseAssistantSchema.safeExtend({
    phoneConfigurationId: zod_1.default.string().describe("Phone configuration ID for the phone channel where this assistant will be deployed"),
}).describe("Schema for setting up a phone AI assistant with advanced configurations");
