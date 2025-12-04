[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateDeploymentConfigurationSchema

# Variable: CreateDeploymentConfigurationSchema

```ts
const CreateDeploymentConfigurationSchema: ZodObject<CreateDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/service-configuration/deployment-config.schema.ts#L128)

Zod schema for creating a new deployment configuration.

Omits auto-generated fields and populated relations. Sets deployment to PENDING status
with DIRECT provisioning by default.

## Remarks

This schema enforces required fields for deployment creation while excluding
fields that are automatically generated or populated by the system.

## Example

```typescript
const newDeployment: CreateDeploymentConfiguration = {
  projectId: '456*',
  deploymentChannelId: 'abc*',
  deploymentName: 'Customer Support Line',
  agentConfigurationId: 'def*',
  instructionConfigurationId: 'ghi*',
  isActive: false,
  deploymentStatus: DeploymentStatus.PENDING,
  provisioningType: DeploymentProvisioningType.DIRECT
};
```
