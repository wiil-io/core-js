[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentChannelRequest

# Type Alias: DeploymentChannelRequest

```ts
type DeploymentChannelRequest = {
  organizationId: string;
  deploymentType: DeploymentType;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  configuration: Record<string, any>;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:311

Type definition for deployment channel request (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/interaction-channels.schema.ts:176 |
| <a id="deploymenttype"></a> `deploymentType` | [`DeploymentType`](../enumerations/DeploymentType.md) | src/core/service-configuration/interaction-channels.schema.ts:177 |
| <a id="channelname"></a> `channelName?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:178 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | src/core/service-configuration/interaction-channels.schema.ts:179 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | src/core/service-configuration/interaction-channels.schema.ts:180 |
| <a id="configuration"></a> `configuration` | `Record`\<`string`, `any`\> | src/core/service-configuration/interaction-channels.schema.ts:181 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/service-configuration/interaction-channels.schema.ts:182 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/service-configuration/interaction-channels.schema.ts:183 |
