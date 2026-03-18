[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L195)

Type definition for creating a chained deployment configuration.

Represents the payload required to create a deployment as part of a provisioning chain.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L89) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:185](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L185) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`PENDING`](../../type-definitions/enumerations/DeploymentStatus.md#pending) | [src/core/service-configuration/deployment-config.schema.ts:186](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L186) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:187](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/deployment-config.schema.ts#L187) |
