[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateMobileAppChannel

# Type Alias: CreateMobileAppChannel

```ts
type CreateMobileAppChannel = {
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

Defined in: src/core/service-configuration/interaction-channels.schema.ts:168

Type definition for creating a mobile app channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:63 |
| <a id="channelname"></a> `channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:65 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:66 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:115 |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../enumerations/DeploymentType.md#mobile) | - | src/core/service-configuration/interaction-channels.schema.ts:116 |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md); \} | `MobileAppChannelConfigSchema` | src/core/service-configuration/interaction-channels.schema.ts:117 |
| `configuration.packageName` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:46 |
| `configuration.platform` | [`MobilePlatform`](../enumerations/MobilePlatform.md) | - | src/core/service-configuration/interaction-channels.schema.ts:47 |
