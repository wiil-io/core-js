[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentChannel

# Type Alias: DeploymentChannel

```ts
type DeploymentChannel = {
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

Defined in: src/core/service-configuration/interaction-channels.schema.ts:242

Type definition for deployment channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `id` | `string` | src/core/base.schema.ts:8 |
| `createdAt?` | `number` | src/core/base.schema.ts:9 |
| `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| `version?` | `number` | src/core/base.schema.ts:11 |
| `organizationId` | `string` | src/core/service-configuration/interaction-channels.schema.ts:63 |
| `deploymentType` | [`DeploymentType`](../enumerations/DeploymentType.md) | src/core/service-configuration/interaction-channels.schema.ts:64 |
| `channelName?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:65 |
| `recordingEnabled` | `boolean` | src/core/service-configuration/interaction-channels.schema.ts:66 |
| `channelIdentifier` | `string` | src/core/service-configuration/interaction-channels.schema.ts:213 |
