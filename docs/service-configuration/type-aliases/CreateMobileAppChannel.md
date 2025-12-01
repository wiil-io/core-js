[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:239](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L239)

Type definition for creating a mobile app channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:100](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L100) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:101](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L101) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:186](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L186) |
| <a id="deploymenttype"></a> `deploymentType` | [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) | [src/core/service-configuration/interaction-channels.schema.ts:187](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L187) |
| <a id="configuration"></a> `configuration` | \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | [src/core/service-configuration/interaction-channels.schema.ts:188](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L188) |
| `configuration.packageName` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:74](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L74) |
| `configuration.platform` | [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md) | [src/core/service-configuration/interaction-channels.schema.ts:75](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L75) |
