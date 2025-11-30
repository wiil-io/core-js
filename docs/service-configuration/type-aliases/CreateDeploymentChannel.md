[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateDeploymentChannel

# Type Alias: CreateDeploymentChannel

```ts
type CreateDeploymentChannel = {
  deploymentType: DeploymentType;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  configuration: Record<string, any>;
  createdAt?: number;
  updatedAt?: number;
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L258)

Type definition for creating deployment channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="deploymenttype"></a> `deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:173](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L173) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:174](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L174) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:175](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L175) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:176](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L176) |
| <a id="configuration"></a> `configuration` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:177](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L177) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:178](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L178) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:179](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L179) |
