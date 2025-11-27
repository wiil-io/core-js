[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / MobileAppChannelType

# Type Alias: MobileAppChannelType

```ts
type MobileAppChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  deploymentType: MOBILE;
  configuration: {
     packageName: string;
     platform: MobilePlatform;
  };
};
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:138

Type definition for mobile app channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:63 |
| <a id="channelname"></a> `channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:65 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:66 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:115 |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../enumerations/DeploymentType.md#mobile) | - | src/core/service-configuration/interaction-channels.schema.ts:116 |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md); \} | `MobileAppChannelConfigSchema` | src/core/service-configuration/interaction-channels.schema.ts:117 |
| `configuration.packageName` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:46 |
| `configuration.platform` | [`MobilePlatform`](../enumerations/MobilePlatform.md) | - | src/core/service-configuration/interaction-channels.schema.ts:47 |
