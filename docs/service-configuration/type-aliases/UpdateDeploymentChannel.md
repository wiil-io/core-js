[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:375](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L375)

Type definition for updating deployment channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:364](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L364) |
| <a id="deploymenttype"></a> `deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | [src/core/service-configuration/interaction-channels.schema.ts:365](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L365) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:366](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L366) |
| <a id="recordingenabled"></a> `recordingEnabled?` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:367](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L367) |
| <a id="channelidentifier"></a> `channelIdentifier?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:368](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L368) |
| <a id="configuration"></a> `configuration?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:369](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/interaction-channels.schema.ts#L369) |
