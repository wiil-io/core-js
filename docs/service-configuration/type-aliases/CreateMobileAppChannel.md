[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.25**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:237](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L237)

Type definition for creating a mobile app channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:98](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L98) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:99](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L99) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:184](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L184) |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) | [src/core/service-configuration/interaction-channels.schema.ts:185](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L185) |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | [src/core/service-configuration/interaction-channels.schema.ts:186](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L186) |
| `configuration.packageName` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:72](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L72) |
| `configuration.platform` | [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md) | [src/core/service-configuration/interaction-channels.schema.ts:73](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L73) |
