[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:348](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L348)

Type definition for creating deployment channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="deploymenttype"></a> `deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:252](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L252) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:253](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L253) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:254](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L254) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:255](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L255) |
| <a id="configuration"></a> `configuration` | `Record`\<`string`, `any`\> | [src/core/service-configuration/interaction-channels.schema.ts:256](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L256) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:257](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L257) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/service-configuration/interaction-channels.schema.ts:258](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L258) |
