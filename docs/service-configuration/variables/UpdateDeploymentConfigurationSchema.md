[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDeploymentConfigurationSchema

# Variable: UpdateDeploymentConfigurationSchema

```ts
const UpdateDeploymentConfigurationSchema: ZodObject<UpdateDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:220](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/deployment-config.schema.ts#L220)

Zod schema for updating an existing deployment configuration.

All fields from CreateDeploymentConfigurationSchema are optional (partial),
with the id field required to identify the deployment to update.

## Remarks

Supports partial updates - only include the fields you want to modify.
The id field is mandatory to specify which deployment configuration to update.

## Example

```typescript
const updateDeployment: UpdateDeploymentConfiguration = {
  id: '123*',
  deploymentName: 'Updated Support Line',
  isActive: true,
  deploymentStatus: DeploymentStatus.ACTIVE
};
```
