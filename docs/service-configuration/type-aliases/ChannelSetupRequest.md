[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ChannelSetupRequest

# Type Alias: ChannelSetupRequest

```ts
type ChannelSetupRequest = {
  channel: {
     deploymentType: DeploymentType;
     channelName?: string;
     recordingEnabled: boolean;
     channelIdentifier: string;
     configuration: Record<string, any>;
     createdAt?: number;
     updatedAt?: number;
  };
  projectId: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:294](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L294)

Type definition for channel setup request.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: `Record`\<`string`, `any`\>; `createdAt?`: `number`; `updatedAt?`: `number`; \} | `DeploymentChannelRequestSchema` | [src/core/service-configuration/interaction-channels.schema.ts:285](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L285) |
| `channel.deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | - | [src/core/service-configuration/interaction-channels.schema.ts:173](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L173) |
| `channel.channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:174](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L174) |
| `channel.recordingEnabled` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:175](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L175) |
| `channel.channelIdentifier` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:176](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L176) |
| `channel.configuration` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/interaction-channels.schema.ts:177](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L177) |
| `channel.createdAt?` | `number` | - | [src/core/service-configuration/interaction-channels.schema.ts:178](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L178) |
| `channel.updatedAt?` | `number` | - | [src/core/service-configuration/interaction-channels.schema.ts:179](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L179) |
| <a id="projectid"></a> `projectId` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:286](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L286) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:287](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L287) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:288](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L288) |
