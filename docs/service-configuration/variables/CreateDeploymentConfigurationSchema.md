[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateDeploymentConfigurationSchema

# Variable: CreateDeploymentConfigurationSchema

```ts
const CreateDeploymentConfigurationSchema: ZodObject<CreateDeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/deployment-config.schema.ts#L128)

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
