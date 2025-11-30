[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationSchema

# Variable: DeploymentConfigurationSchema

```ts
const DeploymentConfigurationSchema: ZodObject<DeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L55)

Zod schema for deployment configuration validation.

Represents the complete configuration for a deployment, linking together a project,
deployment channel, agent configuration, and instruction configuration.

## Example

```typescript
const deployment: DeploymentConfiguration = {
  id: '123*',
  projectId: '456*',
  deploymentChannelId: 'abc*',
  deploymentName: 'Production Customer Support',
  agentConfigurationId: 'def*',
  instructionConfigurationId: 'ghi*',
  deploymentStatus: DeploymentStatus.ACTIVE,
  provisioningType: DeploymentProvisioningType.DIRECT,
  isActive: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
