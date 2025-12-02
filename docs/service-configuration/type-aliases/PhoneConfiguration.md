[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneConfiguration

# Type Alias: PhoneConfiguration

```ts
type PhoneConfiguration = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  phoneNumber: string;
  providerPhoneNumberId: string;
  phoneRequestId: string;
  friendlyName: string | null;
  regionId?: string | null;
  monthlyPrice?: number | null;
  regionOrCountryName?: string | null;
  countryCode?: string;
  providerType: ProviderType;
  providerAccountId?: string;
  isImported: boolean;
  status: PhoneStatus;
  isPorted: boolean;
  markedForRelease: boolean | null;
  metadata?: Record<string, any>;
  voiceChannelId?: string | null;
  smsChannelId?: string | null;
  voiceChannel?:   | {
     id: string;
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
   }
     | null;
  smsChannel?:   | {
     id: string;
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
   }
     | null;
  isUSSMSPermitted: boolean;
};
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L115)

Type definition for Phone Configuration.

Represents a complete phone configuration including all metadata,
provider information, and channel associations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L10) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L87) |
| <a id="providerphonenumberid"></a> `providerPhoneNumberId` | `string` | [src/core/service-configuration/phone-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L88) |
| <a id="phonerequestid"></a> `phoneRequestId` | `string` | [src/core/service-configuration/phone-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L89) |
| <a id="friendlyname"></a> `friendlyName` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:90](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L90) |
| <a id="regionid"></a> `regionId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:91](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L91) |
| <a id="monthlyprice"></a> `monthlyPrice?` | `number` \| `null` | [src/core/service-configuration/phone-config.schema.ts:92](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L92) |
| <a id="regionorcountryname"></a> `regionOrCountryName?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:93](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L93) |
| <a id="countrycode"></a> `countryCode?` | `string` | [src/core/service-configuration/phone-config.schema.ts:94](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L94) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L95) |
| <a id="provideraccountid"></a> `providerAccountId?` | `string` | [src/core/service-configuration/phone-config.schema.ts:96](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L96) |
| <a id="isimported"></a> `isImported` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:97](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L97) |
| <a id="status"></a> `status` | [`PhoneStatus`](../../type-definitions/enumerations/PhoneStatus.md) | [src/core/service-configuration/phone-config.schema.ts:98](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L98) |
| <a id="isported"></a> `isPorted` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:99](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L99) |
| <a id="markedforrelease"></a> `markedForRelease` | `boolean` \| `null` | [src/core/service-configuration/phone-config.schema.ts:100](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L100) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/phone-config.schema.ts:101](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L101) |
| <a id="voicechannelid"></a> `voiceChannelId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L102) |
| <a id="smschannelid"></a> `smsChannelId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:103](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L103) |
| <a id="voicechannel"></a> `voiceChannel?` | \| \{ `id`: `string`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; `deployment`: \| \{ `id`: `string`; `projectId`: `string`; `deploymentChannelId`: `string`; `deploymentName?`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId`: `string`; `provisioningConfigChainId?`: `string` \| `null`; `provisioningType?`: \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) \| `null`; `deploymentStatus`: [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md); `isActive`: `boolean`; `project?`: `any`; `agent?`: `any`; `instruction?`: `any`; `createdAt`: `number`; \} \| `null`; \} \| `null` | [src/core/service-configuration/phone-config.schema.ts:104](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L104) |
| <a id="smschannel"></a> `smsChannel?` | \| \{ `id`: `string`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; `deployment`: \| \{ `id`: `string`; `projectId`: `string`; `deploymentChannelId`: `string`; `deploymentName?`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId`: `string`; `provisioningConfigChainId?`: `string` \| `null`; `provisioningType?`: \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) \| `null`; `deploymentStatus`: [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md); `isActive`: `boolean`; `project?`: `any`; `agent?`: `any`; `instruction?`: `any`; `createdAt`: `number`; \} \| `null`; \} \| `null` | [src/core/service-configuration/phone-config.schema.ts:105](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L105) |
| <a id="isussmspermitted"></a> `isUSSMSPermitted` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/service-configuration/phone-config.schema.ts#L106) |
