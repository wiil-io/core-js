[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateChainDeploymentConfigurationSchema

# Variable: CreateChainDeploymentConfigurationSchema

```ts
const CreateChainDeploymentConfigurationSchema: ZodObject<CreateChainDeploymentConfiguration>;
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:156

Zod schema for creating a chained deployment configuration.

Similar to CreateDeploymentConfigurationSchema but requires a provisioningConfigChainId
and sets provisioningType to CHAINED by default.

## Remarks

Use this schema when creating deployments that are part of a provisioning chain.
The provisioningConfigChainId is required to link this deployment to the chain.

## Example

```typescript
const chainedDeployment: CreateChainDeploymentConfiguration = {
  projectId: 'proj-456',
  organizationId: 'org-789',
  deploymentChannelId: 'chan-abc',
  deploymentName: 'Multi-Step Support Flow',
  agentConfigurationId: 'agent-def',
  instructionConfigurationId: 'inst-ghi',
  provisioningConfigChainId: 'chain-xyz',
  isActive: false,
  deploymentStatus: DeploymentStatus.PENDING,
  provisioningType: DeploymentProvisioningType.CHAINED
};
```
