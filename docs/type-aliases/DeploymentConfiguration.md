[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentConfiguration

# Type Alias: DeploymentConfiguration

```ts
type DeploymentConfiguration = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  projectId: string;
  organizationId: string;
  deploymentChannelId: string;
  deploymentName?: string;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  deploymentStatus: DeploymentStatus;
  provisioningType: DeploymentProvisioningType;
  provisioningConfigChainId?: string | null;
  isActive: boolean;
  channel?:   | { id: string; organizationId: string; deploymentType: DeploymentType; recordingEnabled: boolean; channelIdentifier: string; createdAt?: number | undefined; updatedAt?: number | undefined; version?: number | undefined; channelName?: string | undefined; } & ({ ...; } | ... 2 more ... | { ...; })
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
     version?: number;
   }
     | null;
  agent?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     version?: number;
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
     version?: number;
     instructionName: string;
     role: string;
     organizationId: string;
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

Defined in: src/core/service-configuration/deployment-config.schema.ts:80

Type definition for deployment configuration.

Represents a complete deployment configuration including all metadata,
status information, and optional populated relations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="projectid"></a> `projectId` | `string` | src/core/service-configuration/deployment-config.schema.ts:58 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:59 |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | src/core/service-configuration/deployment-config.schema.ts:60 |
| <a id="deploymentname"></a> `deploymentName?` | `string` | src/core/service-configuration/deployment-config.schema.ts:61 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:62 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | src/core/service-configuration/deployment-config.schema.ts:63 |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../enumerations/DeploymentStatus.md) | src/core/service-configuration/deployment-config.schema.ts:64 |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../enumerations/DeploymentProvisioningType.md) | src/core/service-configuration/deployment-config.schema.ts:65 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | src/core/service-configuration/deployment-config.schema.ts:66 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/service-configuration/deployment-config.schema.ts:67 |
| <a id="channel"></a> `channel?` | \| \{ id: string; organizationId: string; deploymentType: DeploymentType; recordingEnabled: boolean; channelIdentifier: string; createdAt?: number \| undefined; updatedAt?: number \| undefined; version?: number \| undefined; channelName?: string \| undefined; \} & (\{ ...; \} \| ... 2 more ... \| \{ ...; \}) \| `null` | src/core/service-configuration/deployment-config.schema.ts:68 |
| <a id="project"></a> `project?` | \| \{ `name`: `string`; `organizationId`: `string`; `regionId`: `string`; `description?`: `string`; `compliance?`: `string`[]; `hasQuota`: `boolean`; `hasRate`: `boolean`; `currentSubscriptionId?`: `string` \| `null`; `isDefault`: `boolean`; `serviceStatus`: [`ServiceStatus`](../enumerations/ServiceStatus.md); `metadata?`: `Record`\<`string`, `any`\>; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; \} \| `null` | src/core/service-configuration/deployment-config.schema.ts:69 |
| <a id="agent"></a> `agent?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `modelId`: `string`; `name`: `string`; `defaultFunctionState`: [`LLMType`](../enumerations/LLMType.md); `usesTravnexSupportModel`: `boolean`; `requiredModelConfig?`: `Record`\<`string`, `any`\>; `instructionConfigurationId`: `string`; `assistantType`: [`AssistantType`](../enumerations/AssistantType.md); `call_transfer_config`: \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[]; `metadata?`: `Record`\<`string`, `any`\>; `model?`: \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null`; \} \| `null` | src/core/service-configuration/deployment-config.schema.ts:70 |
| <a id="instruction"></a> `instruction?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `instructionName`: `string`; `role`: `string`; `organizationId`: `string`; `introductionMessage`: `string`; `instructions`: `string`; `guardrails`: `string`; `requiredSkills?`: `string`[]; `validationRules?`: `Record`\<`string`, `any`\>; `serviceId?`: `string`; `supportedServices`: [`BusinessSupportServices`](../enumerations/BusinessSupportServices.md)[]; `tools?`: `string`[]; `isTemplate`: `boolean`; `isPrimary`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `knowledgeSourceIds`: `string`[]; \} \| `null` | src/core/service-configuration/deployment-config.schema.ts:71 |
