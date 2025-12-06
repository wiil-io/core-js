[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.25**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateDeploymentChannel

# Type Alias: UpdateDeploymentChannel

```ts
type UpdateDeploymentChannel = {
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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:373](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L373)

Type definition for updating deployment channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:362](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L362) |
| <a id="deploymenttype"></a> `deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | [src/core/service-configuration/interaction-channels.schema.ts:363](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L363) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:364](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L364) |
| <a id="recordingenabled"></a> `recordingEnabled?` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:365](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L365) |
| <a id="channelidentifier"></a> `channelIdentifier?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:366](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L366) |
| <a id="configuration"></a> `configuration?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:367](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/interaction-channels.schema.ts#L367) |
