[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateDeploymentConfigurationSchema

# Variable: CreateDeploymentConfigurationSchema

```ts
const CreateDeploymentConfigurationSchema: ZodObject<CreateDeploymentConfiguration>;
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:107

Zod schema for creating a new deployment configuration.

Omits auto-generated fields and populated relations. Sets deployment to PENDING status
with DIRECT provisioning by default.

## Remarks

This schema enforces required fields for deployment creation while excluding
fields that are automatically generated or populated by the system.

## Example

```typescript
const newDeployment: CreateDeploymentConfiguration = {
  projectId: 'proj-456',
  organizationId: 'org-789',
  deploymentChannelId: 'chan-abc',
  deploymentName: 'Customer Support Line',
  agentConfigurationId: 'agent-def',
  instructionConfigurationId: 'inst-ghi',
  isActive: false,
  deploymentStatus: DeploymentStatus.PENDING,
  provisioningType: DeploymentProvisioningType.DIRECT
};
```
