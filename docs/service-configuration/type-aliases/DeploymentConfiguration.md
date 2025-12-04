[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

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
      }
        | {
        communicationType: OttCommunicationType;
        widgetConfiguration?: {
           position: "left" | "right";
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
     regionId?: string;
     description?: string;
     compliance?: string[];
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
     usesWiilSupportModel: boolean;
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

Defined in: [src/core/service-configuration/deployment-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L102)

Type definition for deployment configuration.

Represents a complete deployment configuration including all metadata,
status information, and optional populated relations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/base.schema.ts#L10) |
| <a id="projectid"></a> `projectId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md) | [src/core/service-configuration/deployment-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L86) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | [src/core/service-configuration/deployment-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L87) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | [src/core/service-configuration/deployment-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L88) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L89) |
| <a id="channel"></a> `channel?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:90](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L90) |
| <a id="project"></a> `project?` | \| \{ `name`: `string`; `regionId?`: `string`; `description?`: `string`; `compliance?`: `string`[]; `currentSubscriptionId?`: `string` \| `null`; `isDefault`: `boolean`; `serviceStatus`: [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md); `metadata?`: `Record`\<`string`, `any`\>; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:91](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L91) |
| <a id="agent"></a> `agent?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `modelId`: `string`; `name`: `string`; `defaultFunctionState`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `usesWiilSupportModel`: `boolean`; `requiredModelConfig?`: `Record`\<`string`, `any`\>; `instructionConfigurationId`: `string`; `assistantType`: [`AssistantType`](../../type-definitions/enumerations/AssistantType.md); `call_transfer_config`: \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[]; `metadata?`: `Record`\<`string`, `any`\>; `model?`: \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null`; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:92](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L92) |
| <a id="instruction"></a> `instruction?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `instructionName`: `string`; `role`: `string`; `introductionMessage`: `string`; `instructions`: `string`; `guardrails`: `string`; `requiredSkills?`: `string`[]; `validationRules?`: `Record`\<`string`, `any`\>; `serviceId?`: `string`; `supportedServices`: [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[]; `tools?`: `string`[]; `isTemplate`: `boolean`; `isPrimary`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `knowledgeSourceIds`: `string`[]; \} \| `null` | [src/core/service-configuration/deployment-config.schema.ts:93](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/deployment-config.schema.ts#L93) |
