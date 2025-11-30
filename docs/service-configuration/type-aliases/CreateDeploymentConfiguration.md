[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateDeploymentConfiguration

# Type Alias: CreateDeploymentConfiguration

```ts
type CreateDeploymentConfiguration = {
  projectId: string;
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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:124](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L124)

Type definition for creating a new deployment configuration.

Represents the payload required to create a new deployment,
excluding system-generated fields and populated relations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L56) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L57) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L58) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L59) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L60) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | [src/core/service-configuration/deployment-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L63) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L64) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`PENDING`](../../type-definitions/enumerations/DeploymentStatus.md#pending) | [src/core/service-configuration/deployment-config.schema.ts:114](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L114) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L115) |
