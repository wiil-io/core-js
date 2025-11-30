[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentChannelType

# Type Alias: DeploymentChannelType

```ts
type DeploymentChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  deploymentType: DeploymentType;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  configuration:   | {
     phoneConfigurationId: string;
     hasForwardingEnabled: boolean;
     forwardingPhoneNumber?: string | null;
   }
     | {
     communicationType: OttCommunicationType;
     customCssUrl: string | null;
     widgetConfiguration?: {
        position: "left" | "right";
        theme: "custom" | "light" | "dark";
        customTheme: Record<string, string>;
     };
   }
     | {
     packageName: string;
     platform: MobilePlatform;
   };
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:321](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L321)

Type definition for deployment channel type (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="deploymenttype"></a> `deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L62) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L63) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L64) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:236](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L236) |
| <a id="configuration"></a> `configuration` | \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | [src/core/service-configuration/interaction-channels.schema.ts:237](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L237) |
