[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentConfigurationDetails

# Type Alias: DeploymentConfigurationDetails

```ts
type DeploymentConfigurationDetails = {
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
  channel: {
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
  project: {
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
  };
  agent: {
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
  };
  instruction: {
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
  };
};
```

Defined in: src/core/service-configuration/deployment-config.schema.ts:304

Type definition for deployment configuration details.

Full version with all relations populated, suitable for detail views.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="projectid"></a> `projectId` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:58 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:59 |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:60 |
| <a id="deploymentname"></a> `deploymentName?` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:61 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:62 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | - | src/core/service-configuration/deployment-config.schema.ts:63 |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../enumerations/DeploymentStatus.md) | - | src/core/service-configuration/deployment-config.schema.ts:64 |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../enumerations/DeploymentProvisioningType.md) | - | src/core/service-configuration/deployment-config.schema.ts:65 |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | - | src/core/service-configuration/deployment-config.schema.ts:66 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/service-configuration/deployment-config.schema.ts:67 |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `organizationId`: `string`; `deploymentType`: [`DeploymentType`](../enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; \} & \| \{ `deploymentType`: [`CALLS`](../enumerations/DeploymentType.md#calls); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`SMS`](../enumerations/DeploymentType.md#sms); `channelIdentifier`: `string`; `configuration`: \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \}; \} \| \{ `deploymentType`: [`WEB`](../enumerations/DeploymentType.md#web); `channelIdentifier`: `string`; `configuration`: \{ `communicationType`: [`OttCommunicationType`](../enumerations/OttCommunicationType.md); `customCssUrl`: `string` \| `null`; `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `theme`: `"custom"` \| `"light"` \| `"dark"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \}; \} \| \{ `deploymentType`: [`MOBILE`](../enumerations/DeploymentType.md#mobile); `channelIdentifier`: `string`; `configuration`: \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../enumerations/MobilePlatform.md); \}; \} | `DeploymentChannelSchema` | src/core/service-configuration/deployment-config.schema.ts:293 |
| <a id="project"></a> `project` | \{ `name`: `string`; `organizationId`: `string`; `regionId`: `string`; `description?`: `string`; `compliance?`: `string`[]; `hasQuota`: `boolean`; `hasRate`: `boolean`; `currentSubscriptionId?`: `string` \| `null`; `isDefault`: `boolean`; `serviceStatus`: [`ServiceStatus`](../enumerations/ServiceStatus.md); `metadata?`: `Record`\<`string`, `any`\>; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; \} | `ProjectSchema` | src/core/service-configuration/deployment-config.schema.ts:294 |
| `project.name` | `string` | - | src/core/account/project.schema.ts:53 |
| `project.organizationId` | `string` | - | src/core/account/project.schema.ts:54 |
| `project.regionId` | `string` | - | src/core/account/project.schema.ts:55 |
| `project.description?` | `string` | - | src/core/account/project.schema.ts:56 |
| `project.compliance?` | `string`[] | - | src/core/account/project.schema.ts:57 |
| `project.hasQuota` | `boolean` | - | src/core/account/project.schema.ts:58 |
| `project.hasRate` | `boolean` | - | src/core/account/project.schema.ts:59 |
| `project.currentSubscriptionId?` | `string` \| `null` | - | src/core/account/project.schema.ts:60 |
| `project.isDefault` | `boolean` | - | src/core/account/project.schema.ts:61 |
| `project.serviceStatus` | [`ServiceStatus`](../enumerations/ServiceStatus.md) | - | src/core/account/project.schema.ts:62 |
| `project.metadata?` | `Record`\<`string`, `any`\> | - | src/core/account/project.schema.ts:63 |
| `project.id` | `string` | - | src/core/base.schema.ts:8 |
| `project.createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| `project.updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| `project.version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="agent"></a> `agent` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `modelId`: `string`; `name`: `string`; `defaultFunctionState`: [`LLMType`](../enumerations/LLMType.md); `usesTravnexSupportModel`: `boolean`; `requiredModelConfig?`: `Record`\<`string`, `any`\>; `instructionConfigurationId`: `string`; `assistantType`: [`AssistantType`](../enumerations/AssistantType.md); `call_transfer_config`: \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[]; `metadata?`: `Record`\<`string`, `any`\>; `model?`: \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null`; \} | `AgentConfigurationSchema` | src/core/service-configuration/deployment-config.schema.ts:295 |
| `agent.id` | `string` | - | src/core/base.schema.ts:8 |
| `agent.createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| `agent.updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| `agent.version?` | `number` | - | src/core/base.schema.ts:11 |
| `agent.modelId` | `string` | - | src/core/service-configuration/agent-config.schema.ts:57 |
| `agent.name` | `string` | - | src/core/service-configuration/agent-config.schema.ts:58 |
| `agent.defaultFunctionState` | [`LLMType`](../enumerations/LLMType.md) | - | src/core/service-configuration/agent-config.schema.ts:59 |
| `agent.usesTravnexSupportModel` | `boolean` | - | src/core/service-configuration/agent-config.schema.ts:60 |
| `agent.requiredModelConfig?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/agent-config.schema.ts:61 |
| `agent.instructionConfigurationId` | `string` | - | src/core/service-configuration/agent-config.schema.ts:62 |
| `agent.assistantType` | [`AssistantType`](../enumerations/AssistantType.md) | - | src/core/service-configuration/agent-config.schema.ts:63 |
| `agent.call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | - | src/core/service-configuration/agent-config.schema.ts:64 |
| `agent.metadata?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/agent-config.schema.ts:65 |
| `agent.model?` | \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null` | - | src/core/service-configuration/agent-config.schema.ts:66 |
| <a id="instruction"></a> `instruction` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `instructionName`: `string`; `role`: `string`; `organizationId`: `string`; `introductionMessage`: `string`; `instructions`: `string`; `guardrails`: `string`; `requiredSkills?`: `string`[]; `validationRules?`: `Record`\<`string`, `any`\>; `serviceId?`: `string`; `supportedServices`: [`BusinessSupportServices`](../enumerations/BusinessSupportServices.md)[]; `tools?`: `string`[]; `isTemplate`: `boolean`; `isPrimary`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `knowledgeSourceIds`: `string`[]; \} | `InstructionConfigurationSchema` | src/core/service-configuration/deployment-config.schema.ts:296 |
| `instruction.id` | `string` | - | src/core/base.schema.ts:8 |
| `instruction.createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| `instruction.updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| `instruction.version?` | `number` | - | src/core/base.schema.ts:11 |
| `instruction.instructionName` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:56 |
| `instruction.role` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:57 |
| `instruction.organizationId` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:58 |
| `instruction.introductionMessage` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:59 |
| `instruction.instructions` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:60 |
| `instruction.guardrails` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:61 |
| `instruction.requiredSkills?` | `string`[] | - | src/core/service-configuration/instruction-config.schema.ts:62 |
| `instruction.validationRules?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/instruction-config.schema.ts:63 |
| `instruction.serviceId?` | `string` | - | src/core/service-configuration/instruction-config.schema.ts:64 |
| `instruction.supportedServices` | [`BusinessSupportServices`](../enumerations/BusinessSupportServices.md)[] | - | src/core/service-configuration/instruction-config.schema.ts:65 |
| `instruction.tools?` | `string`[] | - | src/core/service-configuration/instruction-config.schema.ts:66 |
| `instruction.isTemplate` | `boolean` | - | src/core/service-configuration/instruction-config.schema.ts:67 |
| `instruction.isPrimary` | `boolean` | - | src/core/service-configuration/instruction-config.schema.ts:68 |
| `instruction.metadata?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/instruction-config.schema.ts:69 |
| `instruction.knowledgeSourceIds` | `string`[] | - | src/core/service-configuration/instruction-config.schema.ts:70 |
