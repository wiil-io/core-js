[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / getDeploymentChannelType

# Function: getDeploymentChannelType()

```ts
function getDeploymentChannelType(channel): DeploymentType;
```

Defined in: src/core/validators/channel-validation.ts:13

Helper function for runtime type checking.

Returns the deployment type of a channel.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `channel` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `organizationId`: `string`; `deploymentType`: [`DeploymentType`](../enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; \} & \| \{ `deploymentType`: [`CALLS`](../enumerations/DeploymentType.md#calls); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`SMS`](../enumerations/DeploymentType.md#sms); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`WEB`](../enumerations/DeploymentType.md#web); `channelIdentifier`: `string`; `configuration`: \{ `communicationType`: [`OttCommunicationType`](../enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \}; \} \| \{ `deploymentType`: [`MOBILE`](../enumerations/DeploymentType.md#mobile); `channelIdentifier`: `string`; `configuration`: \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md); \}; \} | The deployment channel to check |

## Returns

[`DeploymentType`](../enumerations/DeploymentType.md)

The deployment type
