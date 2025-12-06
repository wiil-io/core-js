[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [validators](../README.md) / getDeploymentChannelType

# Function: getDeploymentChannelType()

```ts
function getDeploymentChannelType(channel): DeploymentType;
```

Defined in: [src/core/validators/channel-validation.ts:13](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/validators/channel-validation.ts#L13)

Helper function for runtime type checking.

Returns the deployment type of a channel.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `channel` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; \} | The deployment channel to check |
| `channel.id` | `string` | - |
| `channel.createdAt?` | `number` | - |
| `channel.updatedAt?` | `number` | - |
| `channel.deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | - |
| `channel.channelName?` | `string` | - |
| `channel.recordingEnabled` | `boolean` | - |
| `channel.channelIdentifier` | `string` | - |
| `channel.configuration` | \| \{ `phoneConfigurationId`: `string`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | - |

## Returns

[`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md)

The deployment type
