[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / MobileAppChannelType

# Type Alias: MobileAppChannelType

```ts
type MobileAppChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:208](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L208)

Type definition for mobile app channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:99](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L99) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:100](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L100) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:185](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L185) |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) | [src/core/service-configuration/interaction-channels.schema.ts:186](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L186) |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | [src/core/service-configuration/interaction-channels.schema.ts:187](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L187) |
| `configuration.packageName` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:73](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L73) |
| `configuration.platform` | [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md) | [src/core/service-configuration/interaction-channels.schema.ts:74](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L74) |
