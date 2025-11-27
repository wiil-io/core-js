[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ChannelSetupRequest

# Type Alias: ChannelSetupRequest

```ts
type ChannelSetupRequest = {
  channel: {
     organizationId: string;
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

Defined in: src/core/service-configuration/interaction-channels.schema.ts:289

Type definition for channel setup request.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="channel"></a> `channel` | \{ `organizationId`: `string`; `deploymentType`: [`DeploymentType`](../enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: `Record`\<`string`, `any`\>; `createdAt?`: `number`; `updatedAt?`: `number`; \} | `DeploymentChannelRequestSchema` | src/core/service-configuration/interaction-channels.schema.ts:280 |
| `channel.organizationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:176 |
| `channel.deploymentType` | [`DeploymentType`](../enumerations/DeploymentType.md) | - | src/core/service-configuration/interaction-channels.schema.ts:177 |
| `channel.channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:178 |
| `channel.recordingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:179 |
| `channel.channelIdentifier` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:180 |
| `channel.configuration` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/interaction-channels.schema.ts:181 |
| `channel.createdAt?` | `number` | - | src/core/service-configuration/interaction-channels.schema.ts:182 |
| `channel.updatedAt?` | `number` | - | src/core/service-configuration/interaction-channels.schema.ts:183 |
| <a id="projectid"></a> `projectId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:281 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:282 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:283 |
