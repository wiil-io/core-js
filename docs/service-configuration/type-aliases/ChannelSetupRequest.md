[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:398](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L398)

Type definition for channel setup request.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: `Record`\<`string`, `any`\>; `createdAt?`: `number`; `updatedAt?`: `number`; \} | [src/core/service-configuration/interaction-channels.schema.ts:389](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L389) |
| `channel.deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:253](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L253) |
| `channel.channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:254](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L254) |
| `channel.recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:255](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L255) |
| `channel.channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:256](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L256) |
| `channel.configuration` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:257](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L257) |
| `channel.createdAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L258) |
| `channel.updatedAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:259](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L259) |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:390](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L390) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:391](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L391) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:392](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/interaction-channels.schema.ts#L392) |
