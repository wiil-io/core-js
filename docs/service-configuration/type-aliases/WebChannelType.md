[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / WebChannelType

# Type Alias: WebChannelType

```ts
type WebChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  deploymentType: WEB;
  configuration: {
     communicationType: OttCommunicationType;
     widgetConfiguration?: {
        position: "left" | "right";
        customTheme: Record<string, string>;
     };
  };
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:202](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L202)

Type definition for web channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:98](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L98) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:99](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L99) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:165](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L165) |
| <a id="deploymenttype"></a> `deploymentType` | [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) | [src/core/service-configuration/interaction-channels.schema.ts:166](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L166) |
| <a id="configuration"></a> `configuration` | \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} | [src/core/service-configuration/interaction-channels.schema.ts:167](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L167) |
| `configuration.communicationType` | [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md) | [src/core/service-configuration/interaction-channels.schema.ts:52](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L52) |
| `configuration.widgetConfiguration?` | \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \} | [src/core/service-configuration/interaction-channels.schema.ts:53](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L53) |
| `configuration.widgetConfiguration.position` | `"left"` \| `"right"` | [src/core/service-configuration/interaction-channels.schema.ts:54](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L54) |
| `configuration.widgetConfiguration.customTheme` | `Record`\<`string`, `string`\> | [src/core/service-configuration/interaction-channels.schema.ts:55](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/interaction-channels.schema.ts#L55) |
