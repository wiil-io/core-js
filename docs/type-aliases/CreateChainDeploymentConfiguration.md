[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateChainDeploymentConfiguration

# Type Alias: CreateChainDeploymentConfiguration

```ts
type CreateChainDeploymentConfiguration = {
  version?: number;
  projectId: string;
  organizationId: string;
  deploymentChannelId: string;
  deploymentName?: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  isActive: boolean;
  provisioningConfigChainId: string;
  deploymentStatus: PENDING;
  provisioningType: DeploymentProvisioningType;
};
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:178

Type definition for creating a chained deployment configuration.

Represents the payload required to create a deployment as part of a provisioning chain.

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
| <a id="isactive"></a> `isActive` | `boolean` | src/core/service-configuration/deployment-config.schema.ts:67 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId` | `string` | src/core/service-configuration/deployment-config.schema.ts:168 |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`PENDING`](../enumerations/DeploymentStatus.md#pending) | src/core/service-configuration/deployment-config.schema.ts:169 |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../enumerations/DeploymentProvisioningType.md) | src/core/service-configuration/deployment-config.schema.ts:170 |
