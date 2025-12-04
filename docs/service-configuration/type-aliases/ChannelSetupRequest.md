[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:397](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L397)

Type definition for channel setup request.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: `Record`\<`string`, `any`\>; `createdAt?`: `number`; `updatedAt?`: `number`; \} | [src/core/service-configuration/interaction-channels.schema.ts:388](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L388) |
| `channel.deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:252](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L252) |
| `channel.channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:253](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L253) |
| `channel.recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:254](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L254) |
| `channel.channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:255](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L255) |
| `channel.configuration` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:256](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L256) |
| `channel.createdAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:257](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L257) |
| `channel.updatedAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L258) |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:389](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L389) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:390](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L390) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:391](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L391) |
