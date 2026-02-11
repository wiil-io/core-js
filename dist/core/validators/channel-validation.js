"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeploymentChannelType = getDeploymentChannelType;
exports.validateDeploymentChannel = validateDeploymentChannel;
const zod_1 = __importDefault(require("zod"));
const interaction_channels_schema_1 = require("../service-configuration/interaction-channels.schema");
/**
 * Helper function for runtime type checking.
 *
 * Returns the deployment type of a channel.
 *
 * @param channel - The deployment channel to check
 * @returns The deployment type
 */
function getDeploymentChannelType(channel) {
    return channel.deploymentType;
}
/**
 * Validation helper that provides better error messages.
 *
 * @param data - The data to validate as a deployment channel
 * @returns Validated deployment channel
 * @throws Error with specific message for validation failures
 */
function validateDeploymentChannel(data) {
    try {
        return interaction_channels_schema_1.DeploymentChannelSchema.parse(data);
    }
    catch (error) {
        if (error instanceof zod_1.default.ZodError) {
            const deploymentType = data?.deploymentType;
            console.error(`Validation failed for deployment type: ${deploymentType}`, error.issues);
            throw new Error(`Invalid deployment channel configuration for type: ${deploymentType}`);
        }
        throw error;
    }
}
