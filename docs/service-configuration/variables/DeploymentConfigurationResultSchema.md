[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationResultSchema

# Variable: DeploymentConfigurationResultSchema

```ts
const DeploymentConfigurationResultSchema: ZodObject<DeploymentConfigurationResult>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L259)

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
