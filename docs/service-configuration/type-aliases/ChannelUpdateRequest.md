[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ChannelUpdateRequest

# Type Alias: ChannelUpdateRequest

```ts
type ChannelUpdateRequest = {
  channel: {
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
  projectId?: string;
  agentConfigurationId?: string;
  instructionConfigurationId?: string;
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:423](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L423)

Type definition for channel update request.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `deploymentType?`: \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email); `channelName?`: `string`; `recordingEnabled?`: `boolean`; `channelIdentifier?`: `string`; `configuration?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/interaction-channels.schema.ts:414](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L414) |
| `channel.id` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:364](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L364) |
| `channel.deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | [src/core/service-configuration/interaction-channels.schema.ts:365](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L365) |
| `channel.channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:366](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L366) |
| `channel.recordingEnabled?` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:367](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L367) |
| `channel.channelIdentifier?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:368](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L368) |
| `channel.configuration?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:369](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L369) |
| <a id="projectid"></a> `projectId?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:415](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L415) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:416](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L416) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:417](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/interaction-channels.schema.ts#L417) |
