[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentChannelInfo

# Type Alias: DeploymentChannelInfo

```ts
type DeploymentChannelInfo = {
  id: string;
  organizationId: string;
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
  deployment:   | {
     id: string;
     projectId: string;
     organizationId: string;
     deploymentChannelId: string;
     deploymentName?: string;
     agentConfigurationId: string;
     instructionConfigurationId: string;
     provisioningConfigChainId?: string | null;
     provisioningType?:   | DIRECT
        | CHAINED
        | null;
     deploymentStatus: DeploymentStatus;
     isActive: boolean;
     project?: any;
     agent?: any;
     instruction?: any;
     createdAt: number;
   }
     | null;
};
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:367

Type definition for deployment channel with deployment info.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/interaction-channels.schema.ts:334 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/interaction-channels.schema.ts:335 |
| <a id="deploymenttype"></a> `deploymentType` | [`DeploymentType`](../enumerations/DeploymentType.md) | src/core/service-configuration/interaction-channels.schema.ts:336 |
| <a id="channelname"></a> `channelName?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:337 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | src/core/service-configuration/interaction-channels.schema.ts:338 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | src/core/service-configuration/interaction-channels.schema.ts:339 |
| <a id="configuration"></a> `configuration` | \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md); \} | src/core/service-configuration/interaction-channels.schema.ts:340 |
| <a id="deployment"></a> `deployment` | \| \{ `id`: `string`; `projectId`: `string`; `organizationId`: `string`; `deploymentChannelId`: `string`; `deploymentName?`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId`: `string`; `provisioningConfigChainId?`: `string` \| `null`; `provisioningType?`: \| [`DIRECT`](../enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../enumerations/DeploymentProvisioningType.md#chained) \| `null`; `deploymentStatus`: [`DeploymentStatus`](../enumerations/DeploymentStatus.md); `isActive`: `boolean`; `project?`: `any`; `agent?`: `any`; `instruction?`: `any`; `createdAt`: `number`; \} \| `null` | src/core/service-configuration/interaction-channels.schema.ts:345 |
