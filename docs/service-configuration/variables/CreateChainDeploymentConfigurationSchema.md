[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateChainDeploymentConfigurationSchema

# Variable: CreateChainDeploymentConfigurationSchema

```ts
const CreateChainDeploymentConfigurationSchema: ZodObject<CreateChainDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L176)

Zod schema for creating a chained deployment configuration.

Similar to CreateDeploymentConfigurationSchema but requires a provisioningConfigChainId
and sets provisioningType to CHAINED by default.

## Remarks

Use this schema when creating deployments that are part of a provisioning chain.
The provisioningConfigChainId is required to link this deployment to the chain.

## Example

```typescript
const chainedDeployment: CreateChainDeploymentConfiguration = {
  projectId: '456*',
  deploymentChannelId: 'abc*',
  deploymentName: 'Multi-Step Support Flow',
  agentConfigurationId: 'def*',
  instructionConfigurationId: 'ghi*',
  provisioningConfigChainId: 'xyz*',
  isActive: false,
  deploymentStatus: DeploymentStatus.PENDING,
  provisioningType: DeploymentProvisioningType.CHAINED
};
```
