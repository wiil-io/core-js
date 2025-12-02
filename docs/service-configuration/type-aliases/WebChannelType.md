[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

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
     customCssUrl: string | null;
     widgetConfiguration?: {
        position: "left" | "right";
        theme: "custom" | "light" | "dark";
        customTheme: Record<string, string>;
     };
  };
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:204](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L204)

Type definition for web channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:100](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L100) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:101](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L101) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:167](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L167) |
| <a id="deploymenttype"></a> `deploymentType` | [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web) | [src/core/service-configuration/interaction-channels.schema.ts:168](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L168) |
| <a id="configuration"></a> `configuration` | \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} | [src/core/service-configuration/interaction-channels.schema.ts:169](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L169) |
| `configuration.communicationType` | [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md) | [src/core/service-configuration/interaction-channels.schema.ts:52](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L52) |
| `configuration.customCssUrl` | `string` \| `null` | [src/core/service-configuration/interaction-channels.schema.ts:53](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L53) |
| `configuration.widgetConfiguration?` | \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \} | [src/core/service-configuration/interaction-channels.schema.ts:54](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L54) |
| `configuration.widgetConfiguration.position` | `"left"` \| `"right"` | [src/core/service-configuration/interaction-channels.schema.ts:55](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L55) |
| `configuration.widgetConfiguration.theme` | `"custom"` \| `"light"` \| `"dark"` | [src/core/service-configuration/interaction-channels.schema.ts:56](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L56) |
| `configuration.widgetConfiguration.customTheme` | `Record`\<`string`, `string`\> | [src/core/service-configuration/interaction-channels.schema.ts:57](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/interaction-channels.schema.ts#L57) |
