[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [validators](../README.md) / getDeploymentChannelType

# Function: getDeploymentChannelType()

```ts
function getDeploymentChannelType(channel): DeploymentType;
```

Defined in: [src/core/validators/channel-validation.ts:13](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/validators/channel-validation.ts#L13)

Helper function for runtime type checking.

Returns the deployment type of a channel.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `channel` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; \} & \| \{ `deploymentType`: [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web); `channelIdentifier`: `string`; `configuration`: \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \}; \} \| \{ `deploymentType`: [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile); `channelIdentifier`: `string`; `configuration`: \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; \} | The deployment channel to check |

## Returns

[`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md)

The deployment type
