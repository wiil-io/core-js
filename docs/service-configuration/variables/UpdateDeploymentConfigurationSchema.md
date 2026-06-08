[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDeploymentConfigurationSchema

# Variable: UpdateDeploymentConfigurationSchema

```ts
const UpdateDeploymentConfigurationSchema: ZodObject<UpdateDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:217](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/service-configuration/deployment-config.schema.ts#L217)

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
