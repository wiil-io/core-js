import z from "zod";
import { AgentConfigurationSchema, DeploymentChannelSchema, DeploymentConfigurationResultSchema, InstructionConfigurationSchema } from "../service-configuration";


export const AssistantSetupResultSchema = z.object({
    success: z.boolean(),
    agentConfiguration: AgentConfigurationSchema,
    instructionConfiguration: InstructionConfigurationSchema,
    deploymentChannels: z.array(DeploymentChannelSchema),
    deploymentConfigurations: z.array(DeploymentConfigurationResultSchema),
    errorMessage: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
})


export type AssistantSetupResult = z.infer<typeof AssistantSetupResultSchema>;