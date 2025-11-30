[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateChainDeploymentConfigurationSchema

# Variable: CreateChainDeploymentConfigurationSchema

```ts
const CreateChainDeploymentConfigurationSchema: ZodObject<CreateChainDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:151](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L151)

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
