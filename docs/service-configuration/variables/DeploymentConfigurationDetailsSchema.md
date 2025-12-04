[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationDetailsSchema

# Variable: DeploymentConfigurationDetailsSchema

```ts
const DeploymentConfigurationDetailsSchema: ZodObject<DeploymentConfigurationDetails>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:305](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/deployment-config.schema.ts#L305)

Zod schema for deployment configuration details (full version with all relations).

Extends the base schema by requiring all relation fields to be fully populated
with their complete schemas.

## Remarks

Use this schema when returning a single deployment configuration with all
associated details fully populated. Ideal for detail views where complete
information about the deployment, channel, project, agent, and instruction is needed.

## Example

```typescript
const deploymentDetails: DeploymentConfigurationDetails = {
  id: '123*',
  projectId: '456*',
  deploymentChannelId: 'abc*',
  deploymentName: 'Customer Support',
  agentConfigurationId: 'def*',
  instructionConfigurationId: 'ghi*',
  deploymentStatus: DeploymentStatus.ACTIVE,
  provisioningType: DeploymentProvisioningType.DIRECT,
  isActive: true,
  channel: { /* full DeploymentChannel object */ },
  project: { /* full Project object */ },
  agent: { /* full AgentConfiguration object */ },
  instruction: { /* full InstructionConfiguration object */ },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
