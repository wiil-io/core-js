[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / validateDeploymentChannel

# Function: validateDeploymentChannel()

```ts
function validateDeploymentChannel(data): {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
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

Defined in: src/core/validators/channel-validation.ts:24

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
  `version?`: `number`;
  `organizationId`: `string`;
  `deploymentType`: [`DeploymentType`](../enumerations/DeploymentType.md);
  `channelName?`: `string`;
  `recordingEnabled`: `boolean`;
  `channelIdentifier`: `string`;
\} & 
  \| \{
  `deploymentType`: [`CALLS`](../enumerations/DeploymentType.md#calls);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `phoneConfigurationId`: `string`;
     `hasForwardingEnabled`: `boolean`;
     `forwardingPhoneNumber?`: `string` \| `null`;
  \};
\}
  \| \{
  `deploymentType`: [`SMS`](../enumerations/DeploymentType.md#sms);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `phoneConfigurationId`: `string`;
     `hasForwardingEnabled`: `boolean`;
     `forwardingPhoneNumber?`: `string` \| `null`;
  \};
\}
  \| \{
  `deploymentType`: [`WEB`](../enumerations/DeploymentType.md#web);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `communicationType`: [`OttCommunicationType`](../enumerations/OttCommunicationType.md);
     `customCssUrl`: `string` \| `null`;
     `widgetConfiguration?`: \{
        `position`: `"left"` \| `"right"`;
        `theme`: `"custom"` \| `"light"` \| `"dark"`;
        `customTheme`: `Record`\<`string`, `string`\>;
     \};
  \};
\}
  \| \{
  `deploymentType`: [`MOBILE`](../enumerations/DeploymentType.md#mobile);
  `channelIdentifier`: `string`;
  `configuration`: \{
     `packageName`: `string`;
     `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md);
  \};
\}

Validated deployment channel

## Throws

Error with specific message for validation failures
