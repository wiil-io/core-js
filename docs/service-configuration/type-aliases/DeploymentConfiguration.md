[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfiguration

# Type Alias: DeploymentConfiguration

```ts
type DeploymentConfiguration = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  projectId: string;
  deploymentChannelId: string;
  deploymentName?: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  deploymentStatus: DeploymentStatus;
  provisioningType: DeploymentProvisioningType;
  provisioningConfigChainId?: string | null;
  isActive: boolean;
  channel?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
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
   }
     | null;
  project?:   | {
     name: string;
     organizationId: string;
     regionId: string;
     description?: string;
     compliance?: string[];
     hasQuota: boolean;
     hasRate: boolean;
     currentSubscriptionId?: string | null;
     isDefault: boolean;
     serviceStatus: ServiceStatus;
     metadata?: Record<string, any>;
     id: string;
     createdAt?: number;
     updatedAt?: number;
   }
     | null;
  agent?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     modelId: string;
     name: string;
     defaultFunctionState: LLMType;
     usesTravnexSupportModel: boolean;
     requiredModelConfig?: Record<string, any>;
     instructionConfigurationId: string;
     assistantType: AssistantType;
     call_transfer_config: {
        transfer_number: string;
        transfer_type: "blind" | "warm";
        transfer_conditions: string[];
     }[];
     metadata?: Record<string, any>;
     model?:   | {
        modelId: string;
        proprietor: SupportedProprietor;
        name: string;
        provider_model_id?: string;
        description: string;
        type: LLMType;
        discontinued: boolean;
        supportedVoices?:   | {
           voiceId: string;
           name: string;
           description: string;
           gender: "neutral" | "male" | "female";
           language?: string | null;
           isDefault: boolean;
         }[]
           | null;
        supportLanguages?:   | {
           languageId: string;
           name: string;
           code: string;
           isDefault: boolean;
           isExperimental: boolean;
         }[]
           | null;
      }
        | null;
   }
     | null;
  instruction?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     instructionName: string;
     role: string;
     introductionMessage: string;
     instructions: string;
     guardrails: string;
     requiredSkills?: string[];
     validationRules?: Record<string, any>;
     serviceId?: string;
     supportedServices: BusinessSupportServices[];
     tools?: string[];
     isTemplate: boolean;
     isPrimary: boolean;
     metadata?: Record<string, any>;
     knowledgeSourceIds: string[];
   }
     | null;
};
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L77)

Type definition for deployment configuration.

Represents a complete deployment configuration including all metadata,
status information, and optional populated relations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L56) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L57) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L58) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L59) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L60) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md) | [src/core/service-configuration/deployment-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L61) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L62) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | [src/core/service-configuration/deployment-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L63) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L64) |
| <a id="channel"></a> `channel?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L65) |
| <a id="project"></a> `project?` | \| \{ `name`: `string`; `organizationId`: `string`; `regionId`: `string`; `description?`: `string`; `compliance?`: `string`[]; `hasQuota`: `boolean`; `hasRate`: `boolean`; `currentSubscriptionId?`: `string` \| `null`; `isDefault`: `boolean`; `serviceStatus`: [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md); `metadata?`: `Record`\<`string`, `any`\>; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L66) |
| <a id="agent"></a> `agent?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `modelId`: `string`; `name`: `string`; `defaultFunctionState`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `usesTravnexSupportModel`: `boolean`; `requiredModelConfig?`: `Record`\<`string`, `any`\>; `instructionConfigurationId`: `string`; `assistantType`: [`AssistantType`](../../type-definitions/enumerations/AssistantType.md); `call_transfer_config`: \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[]; `metadata?`: `Record`\<`string`, `any`\>; `model?`: \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null`; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L67) |
| <a id="instruction"></a> `instruction?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `instructionName`: `string`; `role`: `string`; `introductionMessage`: `string`; `instructions`: `string`; `guardrails`: `string`; `requiredSkills?`: `string`[]; `validationRules?`: `Record`\<`string`, `any`\>; `serviceId?`: `string`; `supportedServices`: [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[]; `tools?`: `string`[]; `isTemplate`: `boolean`; `isPrimary`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `knowledgeSourceIds`: `string`[]; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/deployment-config.schema.ts#L68) |
