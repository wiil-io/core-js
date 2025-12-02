[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:230](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L230)

Type definition for updating an existing deployment configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L89) |
| <a id="deploymentstatus"></a> `deploymentStatus?` | [`PENDING`](../../type-definitions/enumerations/DeploymentStatus.md#pending) | [src/core/service-configuration/deployment-config.schema.ts:139](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L139) |
| <a id="provisioningtype"></a> `provisioningType?` | \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) | [src/core/service-configuration/deployment-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L140) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/deployment-config.schema.ts:221](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L221) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:222](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/deployment-config.schema.ts#L222) |
