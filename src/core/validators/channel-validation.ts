import z from "zod";
import { DeploymentChannelSchema, DeploymentChannelType } from "../service-configuration/interaction-channels.schema";
import { DeploymentType } from "../type-definitions";

/**
 * Helper function for runtime type checking.
 *
 * Returns the deployment type of a channel.
 *
 * @param channel - The deployment channel to check
 * @returns The deployment type
 */
export function getDeploymentChannelType(channel: DeploymentChannelType): DeploymentType {
    return channel.deploymentType;
}

/**
 * Validation helper that provides better error messages.
 *
 * @param data - The data to validate as a deployment channel
 * @returns Validated deployment channel
 * @throws Error with specific message for validation failures
 */
export function validateDeploymentChannel(data: unknown): DeploymentChannelType {
    try {
        return DeploymentChannelSchema.parse(data);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const deploymentType = (data as any)?.deploymentType;
            console.error(`Validation failed for deployment type: ${deploymentType}`, error.issues);
            throw new Error(`Invalid deployment channel configuration for type: ${deploymentType}`);
        }
        throw error;
    }
}
