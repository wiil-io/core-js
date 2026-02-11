import { DeploymentChannelType } from "../service-configuration/interaction-channels.schema";
import { DeploymentType } from "../type-definitions";
/**
 * Helper function for runtime type checking.
 *
 * Returns the deployment type of a channel.
 *
 * @param channel - The deployment channel to check
 * @returns The deployment type
 */
export declare function getDeploymentChannelType(channel: DeploymentChannelType): DeploymentType;
/**
 * Validation helper that provides better error messages.
 *
 * @param data - The data to validate as a deployment channel
 * @returns Validated deployment channel
 * @throws Error with specific message for validation failures
 */
export declare function validateDeploymentChannel(data: unknown): DeploymentChannelType;
