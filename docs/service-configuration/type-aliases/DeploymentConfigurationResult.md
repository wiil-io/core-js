[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.28**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationResult

# Type Alias: DeploymentConfigurationResult

```ts
type DeploymentConfigurationResult = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  projectId: string;
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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:271](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L271)

Type definition for deployment configuration result.

Lightweight version without populated relations, suitable for list views.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md) | [src/core/service-configuration/deployment-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L86) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L87) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | [src/core/service-configuration/deployment-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L88) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L89) |
