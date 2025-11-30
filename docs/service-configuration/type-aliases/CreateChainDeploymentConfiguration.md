[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateChainDeploymentConfiguration

# Type Alias: CreateChainDeploymentConfiguration

```ts
type CreateChainDeploymentConfiguration = {
  projectId: string;
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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L173)

Type definition for creating a chained deployment configuration.

Represents the payload required to create a deployment as part of a provisioning chain.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L56) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L57) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L58) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L59) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L60) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L64) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:163](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L163) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`PENDING`](../../type-definitions/enumerations/DeploymentStatus.md#pending) | [src/core/service-configuration/deployment-config.schema.ts:164](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L164) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:165](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/deployment-config.schema.ts#L165) |
