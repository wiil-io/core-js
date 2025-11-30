[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:311](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L311)

Type definition for deployment channel type (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L8) |
| `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L9) |
| `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L10) |
| `deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | [src/core/service-configuration/interaction-channels.schema.ts:62](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L62) |
| `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:63](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L63) |
| `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:64](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L64) |
| `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:209](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L209) |
