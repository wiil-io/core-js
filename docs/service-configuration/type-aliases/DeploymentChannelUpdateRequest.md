[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:331](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L331)

Type definition for deployment channel update request (legacy compatibility).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `deploymentType?`: \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email); `channelName?`: `string`; `recordingEnabled?`: `boolean`; `channelIdentifier?`: `string`; `configuration?`: `Record`\<`string`, `any`\>; \} | `DeploymentChannelUpdateRequestSchema` | [src/core/service-configuration/interaction-channels.schema.ts:302](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L302) |
| `channel.id` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:266](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L266) |
| `channel.deploymentType?` | \| [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) \| [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) \| [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) \| [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../../type-definitions/enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../../type-definitions/enumerations/DeploymentType.md#email) | - | [src/core/service-configuration/interaction-channels.schema.ts:267](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L267) |
| `channel.channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:268](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L268) |
| `channel.recordingEnabled?` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:269](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L269) |
| `channel.channelIdentifier?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:270](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L270) |
| `channel.configuration?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/interaction-channels.schema.ts:271](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L271) |
| <a id="projectid"></a> `projectId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:303](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L303) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:304](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L304) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:305](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L305) |
