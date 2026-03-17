[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.47**](../../README.md)

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
  id: string;
  provisioningConfigChainId?: string;
};
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:227](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L227)

Type definition for updating an existing deployment configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L89) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/deployment-config.schema.ts:218](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L218) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:219](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/deployment-config.schema.ts#L219) |
