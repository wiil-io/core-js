[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationDetailsSchema

# Variable: DeploymentConfigurationDetailsSchema

```ts
const DeploymentConfigurationDetailsSchema: ZodObject<DeploymentConfigurationDetails>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:280](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L280)

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
