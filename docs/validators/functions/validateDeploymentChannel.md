[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [validators](../README.md) / validateDeploymentChannel

# Function: validateDeploymentChannel()

```ts
function validateDeploymentChannel(data): {
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

Defined in: [src/core/validators/channel-validation.ts:24](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/validators/channel-validation.ts#L24)

Validation helper that provides better error messages.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `unknown` | The data to validate as a deployment channel |

## Returns

```ts
{
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
}
```

Validated deployment channel

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| `deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L62) |
| `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L63) |
| `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L64) |
| `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:236](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L236) |
| `configuration` | \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | [src/core/service-configuration/interaction-channels.schema.ts:237](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L237) |

## Throws

Error with specific message for validation failures
