[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationResultSchema

# Variable: DeploymentConfigurationResultSchema

```ts
const DeploymentConfigurationResultSchema: ZodObject<DeploymentConfigurationResult>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/deployment-config.schema.ts#L259)

Zod schema for deployment configuration result (lightweight version).

Omits populated relation fields (channel, project, agent, instruction) to provide
a lighter payload suitable for list views and search results.

## Remarks

Use this schema when returning deployment configurations in lists or search results
where full relation details are not needed.

## Example

```typescript
const deploymentResult: DeploymentConfigurationResult = {
  id: '123*',
  projectId: '456*',
  deploymentChannelId: 'abc*',
  deploymentName: 'Customer Support',
  agentConfigurationId: 'def*',
  instructionConfigurationId: 'ghi*',
  deploymentStatus: DeploymentStatus.ACTIVE,
  provisioningType: DeploymentProvisioningType.DIRECT,
  isActive: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
