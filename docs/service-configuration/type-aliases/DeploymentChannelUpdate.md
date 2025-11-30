[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelUpdate

# Type Alias: DeploymentChannelUpdate

```ts
type DeploymentChannelUpdate = {
  id: string;
  deploymentType?:   | CALLS
     | SMS
     | WEB
     | MOBILE
     | WHATSAPP
     | EMAIL;
  channelName?: string;
  recordingEnabled?: boolean;
  channelIdentifier?: string;
  configuration?: Record<string, any>;
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:316](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L316)

Type definition for deployment channel update (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:256](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L256) |
| <a id="deploymenttype"></a> `deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | [src/core/service-configuration/interaction-channels.schema.ts:257](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L257) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L258) |
| <a id="recordingenabled"></a> `recordingEnabled?` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:259](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L259) |
| <a id="channelidentifier"></a> `channelIdentifier?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:260](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L260) |
| <a id="configuration"></a> `configuration?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:261](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L261) |
