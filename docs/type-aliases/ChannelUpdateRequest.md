[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ChannelUpdateRequest

# Type Alias: ChannelUpdateRequest

```ts
type ChannelUpdateRequest = {
  channel: {
     id: string;
     organizationId?: string;
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

Defined in: src/core/service-configuration/interaction-channels.schema.ts:306

Type definition for channel update request.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `organizationId?`: `string`; `deploymentType?`: \| [`CALLS`](../enumerations/DeploymentType.md#calls) \| [`SMS`](../enumerations/DeploymentType.md#sms) \| [`WEB`](../enumerations/DeploymentType.md#web) \| [`MOBILE`](../enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../enumerations/DeploymentType.md#email); `channelName?`: `string`; `recordingEnabled?`: `boolean`; `channelIdentifier?`: `string`; `configuration?`: `Record`\<`string`, `any`\>; \} | `DeploymentChannelUpdateRequestSchema` | src/core/service-configuration/interaction-channels.schema.ts:297 |
| `channel.id` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:260 |
| `channel.organizationId?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:261 |
| `channel.deploymentType?` | \| [`CALLS`](../enumerations/DeploymentType.md#calls) \| [`SMS`](../enumerations/DeploymentType.md#sms) \| [`WEB`](../enumerations/DeploymentType.md#web) \| [`MOBILE`](../enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../enumerations/DeploymentType.md#email) | - | src/core/service-configuration/interaction-channels.schema.ts:262 |
| `channel.channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:263 |
| `channel.recordingEnabled?` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:264 |
| `channel.channelIdentifier?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:265 |
| `channel.configuration?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/interaction-channels.schema.ts:266 |
| <a id="projectid"></a> `projectId?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:298 |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:299 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:300 |
