[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:326](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L326)

Type definition for deployment channel update (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:266](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L266) |
| <a id="deploymenttype"></a> `deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | [src/core/service-configuration/interaction-channels.schema.ts:267](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L267) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:268](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L268) |
| <a id="recordingenabled"></a> `recordingEnabled?` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:269](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L269) |
| <a id="channelidentifier"></a> `channelIdentifier?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:270](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L270) |
| <a id="configuration"></a> `configuration?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:271](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L271) |
