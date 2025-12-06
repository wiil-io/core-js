[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SmsChannelType

# Type Alias: SmsChannelType

```ts
type SmsChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  deploymentType: SMS;
  configuration: {
     phoneConfigurationId: string;
  };
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:197](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L197)

Type definition for SMS channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:98](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L98) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:99](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L99) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:147](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L147) |
| <a id="deploymenttype"></a> `deploymentType` | [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) | [src/core/service-configuration/interaction-channels.schema.ts:148](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L148) |
| <a id="configuration"></a> `configuration` | \{ `phoneConfigurationId`: `string`; \} | [src/core/service-configuration/interaction-channels.schema.ts:149](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L149) |
| `configuration.phoneConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:34](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L34) |
