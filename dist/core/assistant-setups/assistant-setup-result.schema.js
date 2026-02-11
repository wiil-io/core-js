"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantSetupResultSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const service_configuration_1 = require("../service-configuration");
exports.AssistantSetupResultSchema = zod_1.default.object({
    success: zod_1.default.boolean(),
    agentConfiguration: service_configuration_1.AgentConfigurationSchema,
    instructionConfiguration: service_configuration_1.InstructionConfigurationSchema,
    deploymentChannels: zod_1.default.array(service_configuration_1.DeploymentChannelSchema),
    deploymentConfigurations: zod_1.default.array(service_configuration_1.DeploymentConfigurationResultSchema),
    errorMessage: zod_1.default.string().optional(),
    metadata: zod_1.default.record(zod_1.default.string(), zod_1.default.any()).optional(),
});
