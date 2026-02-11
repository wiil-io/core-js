"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainedWebAssistantSetupSchema = exports.WebAssistantSetupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_assistant_setup_schema_1 = require("./base-assistant-setup.schema");
const type_definitions_1 = require("../type-definitions");
exports.WebAssistantSetupSchema = base_assistant_setup_schema_1.BaseAssistantSchema.safeExtend({
    websiteUrl: zod_1.default.url().describe("URL of the website where this assistant will be deployed"),
    communicationType: zod_1.default.enum(type_definitions_1.OttCommunicationType).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
}).describe("Schema for setting up a web AI assistant");
exports.ChainedWebAssistantSetupSchema = exports.WebAssistantSetupSchema.safeExtend({
    websiteUrl: zod_1.default.url().describe("URL of the website where this assistant will be deployed"),
    communicationType: zod_1.default.enum(type_definitions_1.OttCommunicationType).describe("Type of over-the-top communication method for the web channel. options: text, voice, unified"),
}).describe("Schema for setting up a web AI assistant with advanced configurations");
