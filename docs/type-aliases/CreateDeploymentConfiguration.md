[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateDeploymentConfiguration

# Type Alias: CreateDeploymentConfiguration

```ts
type CreateDeploymentConfiguration = {
  version?: number;
  projectId: string;
  organizationId: string;
  deploymentChannelId: string;
  deploymentName?: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  provisioningConfigChainId?: string | null;
  isActive: boolean;
  deploymentStatus: PENDING;
  provisioningType: DeploymentProvisioningType;
};
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:128

Type definition for creating a new deployment configuration.

Represents the payload required to create a new deployment,
excluding system-generated fields and populated relations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="projectid"></a> `projectId` | `string` | src/core/service-configuration/deployment-config.schema.ts:58 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:59 |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | src/core/service-configuration/deployment-config.schema.ts:60 |
| <a id="deploymentname"></a> `deploymentName?` | `string` | src/core/service-configuration/deployment-config.schema.ts:61 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:62 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:63 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | src/core/service-configuration/deployment-config.schema.ts:66 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/service-configuration/deployment-config.schema.ts:67 |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`PENDING`](../enumerations/DeploymentStatus.md#pending) | src/core/service-configuration/deployment-config.schema.ts:118 |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../enumerations/DeploymentProvisioningType.md) | src/core/service-configuration/deployment-config.schema.ts:119 |
