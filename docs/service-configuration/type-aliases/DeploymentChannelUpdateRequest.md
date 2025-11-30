[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelUpdateRequest

# Type Alias: DeploymentChannelUpdateRequest

```ts
type DeploymentChannelUpdateRequest = {
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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:321](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L321)

Type definition for deployment channel update request (legacy compatibility).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `deploymentType?`: \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email); `channelName?`: `string`; `recordingEnabled?`: `boolean`; `channelIdentifier?`: `string`; `configuration?`: `Record`\<`string`, `any`\>; \} | `DeploymentChannelUpdateRequestSchema` | [src/core/service-configuration/interaction-channels.schema.ts:292](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L292) |
| `channel.id` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:256](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L256) |
| `channel.deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | - | [src/core/service-configuration/interaction-channels.schema.ts:257](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L257) |
| `channel.channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L258) |
| `channel.recordingEnabled?` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:259](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L259) |
| `channel.channelIdentifier?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:260](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L260) |
| `channel.configuration?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/interaction-channels.schema.ts:261](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L261) |
| <a id="projectid"></a> `projectId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:293](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L293) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:294](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L294) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:295](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L295) |
