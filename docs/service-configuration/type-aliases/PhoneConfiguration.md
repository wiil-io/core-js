[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L95)

Type definition for Phone Configuration.

Represents a complete phone configuration including all metadata,
provider information, and channel associations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L67) |
| <a id="providerphonenumberid"></a> `providerPhoneNumberId` | `string` | [src/core/service-configuration/phone-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L68) |
| <a id="phonerequestid"></a> `phoneRequestId` | `string` | [src/core/service-configuration/phone-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L69) |
| <a id="friendlyname"></a> `friendlyName` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L70) |
| <a id="regionid"></a> `regionId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L71) |
| <a id="monthlyprice"></a> `monthlyPrice?` | `number` \| `null` | [src/core/service-configuration/phone-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L72) |
| <a id="regionorcountryname"></a> `regionOrCountryName?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L73) |
| <a id="countrycode"></a> `countryCode?` | `string` | [src/core/service-configuration/phone-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L74) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-config.schema.ts:75](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L75) |
| <a id="provideraccountid"></a> `providerAccountId?` | `string` | [src/core/service-configuration/phone-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L76) |
| <a id="isimported"></a> `isImported` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L77) |
| <a id="status"></a> `status` | [`PhoneStatus`](../../type-definitions/enumerations/PhoneStatus.md) | [src/core/service-configuration/phone-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L78) |
| <a id="isported"></a> `isPorted` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L79) |
| <a id="markedforrelease"></a> `markedForRelease` | `boolean` \| `null` | [src/core/service-configuration/phone-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L80) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/phone-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L81) |
| <a id="voicechannelid"></a> `voiceChannelId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L82) |
| <a id="smschannelid"></a> `smsChannelId?` | `string` \| `null` | [src/core/service-configuration/phone-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L83) |
| <a id="voicechannel"></a> `voiceChannel?` | \| \{ `id`: `string`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; `deployment`: \| \{ `id`: `string`; `projectId`: `string`; `deploymentChannelId`: `string`; `deploymentName?`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId`: `string`; `provisioningConfigChainId?`: `string` \| `null`; `provisioningType?`: \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) \| `null`; `deploymentStatus`: [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md); `isActive`: `boolean`; `project?`: `any`; `agent?`: `any`; `instruction?`: `any`; `createdAt`: `number`; \} \| `null`; \} \| `null` | [src/core/service-configuration/phone-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L84) |
| <a id="smschannel"></a> `smsChannel?` | \| \{ `id`: `string`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; `deployment`: \| \{ `id`: `string`; `projectId`: `string`; `deploymentChannelId`: `string`; `deploymentName?`: `string`; `agentConfigurationId`: `string`; `instructionConfigurationId`: `string`; `provisioningConfigChainId?`: `string` \| `null`; `provisioningType?`: \| [`DIRECT`](../../type-definitions/enumerations/DeploymentProvisioningType.md#direct) \| [`CHAINED`](../../type-definitions/enumerations/DeploymentProvisioningType.md#chained) \| `null`; `deploymentStatus`: [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md); `isActive`: `boolean`; `project?`: `any`; `agent?`: `any`; `instruction?`: `any`; `createdAt`: `number`; \} \| `null`; \} \| `null` | [src/core/service-configuration/phone-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L85) |
| <a id="isussmspermitted"></a> `isUSSMSPermitted` | `boolean` | [src/core/service-configuration/phone-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L86) |
