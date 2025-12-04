[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationSchema

# Variable: DeploymentConfigurationSchema

```ts
const DeploymentConfigurationSchema: ZodObject<DeploymentConfiguration>;
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/deployment-config.schema.ts#L80)

Zod schema for deployment configuration validation.

The Deployment Configuration is the central composition entity that brings together agent behavior,
instructions, and organizational context to create a deployable unit. It serves as the primary
entity that operators interact with when setting up new agent deployments.

## Remarks

**Architecture Context:**
- **Central Entity**: Primary composition point for all deployment components
- **Managed By**: Service Configuration (administrative oversight)
- **Uses**: Agent Configuration (N:1), Instruction Configuration (N:1)
- **Associated With**: Project (N:1 for organizational grouping)
- **Has**: Deployment Channel (1:1 - each deployment exposes through exactly one channel)
- **Pattern**: Multi-channel deployments require separate Deployment Configurations per channel

**Provisioning Types:**
- **DIRECT**: Agent processes interactions directly without additional chains
- **CHAINED**: Uses provisioning chain (STT → Agent → TTS) for voice processing

**Deployment Lifecycle:**
- **PENDING**: Created but not yet activated
- **ACTIVE**: Operational and accepting interactions
- **SUSPENDED**: Temporarily paused
- **FAILED**: Deployment encountered errors

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
