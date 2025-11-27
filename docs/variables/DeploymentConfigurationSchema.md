[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentConfigurationSchema

# Variable: DeploymentConfigurationSchema

```ts
const DeploymentConfigurationSchema: ZodObject<DeploymentConfiguration>;
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:57

Zod schema for deployment configuration validation.

Represents the complete configuration for a deployment, linking together a project,
deployment channel, agent configuration, and instruction configuration.

## Example

```typescript
const deployment: DeploymentConfiguration = {
  id: 'deploy-123',
  projectId: 'proj-456',
  organizationId: 'org-789',
  deploymentChannelId: 'chan-abc',
  deploymentName: 'Production Customer Support',
  agentConfigurationId: 'agent-def',
  instructionConfigurationId: 'inst-ghi',
  deploymentStatus: DeploymentStatus.ACTIVE,
  provisioningType: DeploymentProvisioningType.DIRECT,
  isActive: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
