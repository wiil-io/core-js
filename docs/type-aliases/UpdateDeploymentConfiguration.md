[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateDeploymentConfiguration

# Type Alias: UpdateDeploymentConfiguration

```ts
type UpdateDeploymentConfiguration = {
  version?: number;
  projectId?: string;
  organizationId?: string;
  deploymentChannelId?: string;
  deploymentName?: string;
  agentConfigurationId?: string;
  instructionConfigurationId?: string;
  isActive?: boolean;
  deploymentStatus?: PENDING;
  provisioningType?:   | DIRECT
     | CHAINED;
  id: string;
  provisioningConfigChainId?: string;
};
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:210

Type definition for updating an existing deployment configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="projectid"></a> `projectId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:58 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:59 |
| <a id="deploymentchannelid"></a> `deploymentChannelId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:60 |
| <a id="deploymentname"></a> `deploymentName?` | `string` | src/core/service-configuration/deployment-config.schema.ts:61 |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:62 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:63 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/service-configuration/deployment-config.schema.ts:67 |
| <a id="deploymentstatus"></a> `deploymentStatus?` | [`PENDING`](../enumerations/DeploymentStatus.md#pending) | src/core/service-configuration/deployment-config.schema.ts:118 |
| <a id="provisioningtype"></a> `provisioningType?` | \| [`DIRECT`](../enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../enumerations/DeploymentProvisioningType.md#chained) | src/core/service-configuration/deployment-config.schema.ts:119 |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/deployment-config.schema.ts:201 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` | src/core/service-configuration/deployment-config.schema.ts:202 |
