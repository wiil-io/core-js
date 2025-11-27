[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentConfigurationResult

# Type Alias: DeploymentConfigurationResult

```ts
type DeploymentConfigurationResult = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  projectId: string;
  organizationId: string;
  deploymentChannelId: string;
  deploymentName?: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  deploymentStatus: DeploymentStatus;
  provisioningType: DeploymentProvisioningType;
  provisioningConfigChainId?: string | null;
  isActive: boolean;
};
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:252

Type definition for deployment configuration result.

Lightweight version without populated relations, suitable for list views.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="projectid"></a> `projectId` | `string` | src/core/service-configuration/deployment-config.schema.ts:58 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:59 |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | src/core/service-configuration/deployment-config.schema.ts:60 |
| <a id="deploymentname"></a> `deploymentName?` | `string` | src/core/service-configuration/deployment-config.schema.ts:61 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:62 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:63 |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../enumerations/DeploymentStatus.md) | src/core/service-configuration/deployment-config.schema.ts:64 |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../enumerations/DeploymentProvisioningType.md) | src/core/service-configuration/deployment-config.schema.ts:65 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | src/core/service-configuration/deployment-config.schema.ts:66 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/service-configuration/deployment-config.schema.ts:67 |
