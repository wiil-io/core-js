[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateWebChannel

# Type Alias: CreateWebChannel

```ts
type CreateWebChannel = {
  version?: number;
  organizationId: string;
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

Defined in: src/core/service-configuration/interaction-channels.schema.ts:163

Type definition for creating a web channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:63 |
| <a id="channelname"></a> `channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:65 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:66 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:106 |
| <a id="deploymenttype"></a> `deploymentType` | [`WEB`](../enumerations/DeploymentType.md#web) | - | src/core/service-configuration/interaction-channels.schema.ts:107 |
| <a id="configuration"></a> `configuration` | \{ `communicationType`: [`OttCommunicationType`](../enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} | `WebChannelConfigSchema` | src/core/service-configuration/interaction-channels.schema.ts:108 |
| `configuration.communicationType` | [`OttCommunicationType`](../enumerations/OttCommunicationType.md) | - | src/core/service-configuration/interaction-channels.schema.ts:31 |
| `configuration.customCssUrl` | `string` \| `null` | - | src/core/service-configuration/interaction-channels.schema.ts:32 |
| `configuration.widgetConfiguration?` | \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \} | - | src/core/service-configuration/interaction-channels.schema.ts:33 |
| `configuration.widgetConfiguration.position` | `"left"` \| `"right"` | - | src/core/service-configuration/interaction-channels.schema.ts:34 |
| `configuration.widgetConfiguration.theme` | `"custom"` \| `"light"` \| `"dark"` | - | src/core/service-configuration/interaction-channels.schema.ts:35 |
| `configuration.widgetConfiguration.customTheme` | `Record`\<`string`, `string`\> | - | src/core/service-configuration/interaction-channels.schema.ts:36 |
