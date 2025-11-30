[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateMobileAppChannel

# Type Alias: CreateMobileAppChannel

```ts
type CreateMobileAppChannel = {
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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:165](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L165)

Type definition for creating a mobile app channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channelname"></a> `channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L63) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L64) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:112](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L112) |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) | - | [src/core/service-configuration/interaction-channels.schema.ts:113](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L113) |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | `MobileAppChannelConfigSchema` | [src/core/service-configuration/interaction-channels.schema.ts:114](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L114) |
| `configuration.packageName` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:46](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L46) |
| `configuration.platform` | [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md) | - | [src/core/service-configuration/interaction-channels.schema.ts:47](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L47) |
