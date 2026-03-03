[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDeploymentConfigurationSchema

# Variable: UpdateDeploymentConfigurationSchema

```ts
const UpdateDeploymentConfigurationSchema: ZodObject<UpdateDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:220](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/service-configuration/deployment-config.schema.ts#L220)

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
