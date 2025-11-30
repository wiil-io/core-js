[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDeploymentConfiguration

# Type Alias: UpdateDeploymentConfiguration

```ts
type UpdateDeploymentConfiguration = {
  projectId?: string;
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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L205)

Type definition for updating an existing deployment configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L56) |
| <a id="deploymentchannelid"></a> `deploymentChannelId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L57) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L58) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L59) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L60) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L64) |
| <a id="deploymentstatus"></a> `deploymentStatus?` | [`PENDING`](../../type-definitions/enumerations/DeploymentStatus.md#pending) | [src/core/service-configuration/deployment-config.schema.ts:114](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L114) |
| <a id="provisioningtype"></a> `provisioningType?` | \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) | [src/core/service-configuration/deployment-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L115) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/deployment-config.schema.ts:196](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L196) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L197) |
