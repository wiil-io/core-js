[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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
} & 
  | {
  deploymentType: CALLS;
  channelIdentifier: string;
  configuration: {
     phoneConfigurationId: string;
     hasForwardingEnabled: boolean;
     forwardingPhoneNumber?: string | null;
  };
}
  | {
  deploymentType: SMS;
  channelIdentifier: string;
  configuration: {
     phoneConfigurationId: string;
     hasForwardingEnabled: boolean;
     forwardingPhoneNumber?: string | null;
  };
}
  | {
  deploymentType: WEB;
  channelIdentifier: string;
  configuration: {
     communicationType: OttCommunicationType;
     customCssUrl: string | null;
     widgetConfiguration?: {
        position: "left" | "right";
        theme: "custom" | "light" | "dark";
        customTheme: Record<string, string>;
     };
  };
}
  | {
  deploymentType: MOBILE;
  channelIdentifier: string;
  configuration: {
     packageName: string;
     platform: MobilePlatform;
  };
};
```

Defined in: [src/core/validators/channel-validation.ts:24](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/validators/channel-validation.ts#L24)

Validation helper that provides better error messages.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `unknown` | The data to validate as a deployment channel |

## Returns

\{
  `id`: `string`;
  `createdAt?`: `number`;
  `updatedAt?`: `number`;
  `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md);
  `channelName?`: `string`;
  `recordingEnabled`: `boolean`;
  `channelIdentifier`: `string`;
\} & 
  \| \{
  `deploymentType`: [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `phoneConfigurationId`: `string`;
     `hasForwardingEnabled`: `boolean`;
     `forwardingPhoneNumber?`: `string` \| `null`;
  \};
\}
  \| \{
  `deploymentType`: [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `phoneConfigurationId`: `string`;
     `hasForwardingEnabled`: `boolean`;
     `forwardingPhoneNumber?`: `string` \| `null`;
  \};
\}
  \| \{
  `deploymentType`: [`WEB`](../../type-definitions/enumerations/DeploymentType.md#web);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md);
     `customCssUrl`: `string` \| `null`;
     `widgetConfiguration?`: \{
        `position`: `"left"` \| `"right"`;
        `theme`: `"custom"` \| `"light"` \| `"dark"`;
        `customTheme`: `Record`\<`string`, `string`\>;
     \};
  \};
\}
  \| \{
  `deploymentType`: [`MOBILE`](../../type-definitions/enumerations/DeploymentType.md#mobile);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `packageName`: `string`;
     `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md);
  \};
\}

Validated deployment channel

## Throws

Error with specific message for validation failures
