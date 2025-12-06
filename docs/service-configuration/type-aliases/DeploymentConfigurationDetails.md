[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.28**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DeploymentConfigurationDetails

# Type Alias: DeploymentConfigurationDetails

```ts
type DeploymentConfigurationDetails = {
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
  channel: {
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
  };
  project: {
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
  };
  agent: {
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
  };
  instruction: {
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
  };
};
```

Defined in: [src/core/service-configuration/deployment-config.schema.ts:322](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L322)

Type definition for deployment configuration details.

Full version with all relations populated, suitable for detail views.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| <a id="projectid"></a> `projectId` | `string` | - | [src/core/service-configuration/deployment-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L81) |
| <a id="deploymentchannelid"></a> `deploymentChannelId` | `string` | - | [src/core/service-configuration/deployment-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L82) |
| <a id="deploymentname"></a> `deploymentName?` | `string` | - | [src/core/service-configuration/deployment-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L83) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | - | [src/core/service-configuration/deployment-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L84) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | - | [src/core/service-configuration/deployment-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L85) |
| <a id="deploymentstatus"></a> `deploymentStatus` | [`DeploymentStatus`](../../type-definitions/enumerations/DeploymentStatus.md) | - | [src/core/service-configuration/deployment-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L86) |
| <a id="provisioningtype"></a> `provisioningType` | [`DeploymentProvisioningType`](../../type-definitions/enumerations/DeploymentProvisioningType.md) | - | [src/core/service-configuration/deployment-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L87) |
| <a id="provisioningconfigchainid"></a> `provisioningConfigChainId?` | `string` \| `null` | - | [src/core/service-configuration/deployment-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L88) |
| <a id="isactive"></a> `isActive` | `boolean` | - | [src/core/service-configuration/deployment-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L89) |
| <a id="channel"></a> `channel` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `deploymentType`: [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md); `channelName?`: `string`; `recordingEnabled`: `boolean`; `channelIdentifier`: `string`; `configuration`: \| \{ `phoneConfigurationId`: `string`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \}; \} | `DeploymentChannelSchema` | [src/core/service-configuration/deployment-config.schema.ts:311](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L311) |
| `channel.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| `channel.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| `channel.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| `channel.deploymentType` | [`DeploymentType`](../../type-definitions/enumerations/DeploymentType.md) | - | [src/core/service-configuration/interaction-channels.schema.ts:97](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/interaction-channels.schema.ts#L97) |
| `channel.channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:98](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/interaction-channels.schema.ts#L98) |
| `channel.recordingEnabled` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:99](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/interaction-channels.schema.ts#L99) |
| `channel.channelIdentifier` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:326](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/interaction-channels.schema.ts#L326) |
| `channel.configuration` | \| \{ `phoneConfigurationId`: `string`; \} \| \{ `communicationType`: [`OttCommunicationType`](../../type-definitions/enumerations/OttCommunicationType.md); `widgetConfiguration?`: \{ `position`: `"left"` \| `"right"`; `customTheme`: `Record`\<`string`, `string`\>; \}; \} \| \{ `packageName`: `string`; `platform`: [`MobilePlatform`](../../type-definitions/enumerations/MobilePlatform.md); \} | - | [src/core/service-configuration/interaction-channels.schema.ts:327](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/interaction-channels.schema.ts#L327) |
| <a id="project"></a> `project` | \{ `name`: `string`; `regionId?`: `string`; `description?`: `string`; `compliance?`: `string`[]; `currentSubscriptionId?`: `string` \| `null`; `isDefault`: `boolean`; `serviceStatus`: [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md); `metadata?`: `Record`\<`string`, `any`\>; `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; \} | `ProjectSchema` | [src/core/service-configuration/deployment-config.schema.ts:312](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L312) |
| `project.name` | `string` | - | [src/core/account/project.schema.ts:47](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L47) |
| `project.regionId?` | `string` | - | [src/core/account/project.schema.ts:48](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L48) |
| `project.description?` | `string` | - | [src/core/account/project.schema.ts:49](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L49) |
| `project.compliance?` | `string`[] | - | [src/core/account/project.schema.ts:50](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L50) |
| `project.currentSubscriptionId?` | `string` \| `null` | - | [src/core/account/project.schema.ts:51](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L51) |
| `project.isDefault` | `boolean` | - | [src/core/account/project.schema.ts:52](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L52) |
| `project.serviceStatus` | [`ServiceStatus`](../../type-definitions/enumerations/ServiceStatus.md) | - | [src/core/account/project.schema.ts:53](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L53) |
| `project.metadata?` | `Record`\<`string`, `any`\> | - | [src/core/account/project.schema.ts:54](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/account/project.schema.ts#L54) |
| `project.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| `project.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| `project.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| <a id="agent"></a> `agent` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `modelId`: `string`; `name`: `string`; `defaultFunctionState`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `usesWiilSupportModel`: `boolean`; `requiredModelConfig?`: `Record`\<`string`, `any`\>; `instructionConfigurationId`: `string`; `assistantType`: [`AssistantType`](../../type-definitions/enumerations/AssistantType.md); `call_transfer_config`: \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[]; `metadata?`: `Record`\<`string`, `any`\>; `model?`: \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null`; \} | `AgentConfigurationSchema` | [src/core/service-configuration/deployment-config.schema.ts:313](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L313) |
| `agent.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| `agent.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| `agent.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| `agent.modelId` | `string` | - | [src/core/service-configuration/agent-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L77) |
| `agent.name` | `string` | - | [src/core/service-configuration/agent-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L78) |
| `agent.defaultFunctionState` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | - | [src/core/service-configuration/agent-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L79) |
| `agent.usesWiilSupportModel` | `boolean` | - | [src/core/service-configuration/agent-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L80) |
| `agent.requiredModelConfig?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/agent-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L81) |
| `agent.instructionConfigurationId` | `string` | - | [src/core/service-configuration/agent-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L82) |
| `agent.assistantType` | [`AssistantType`](../../type-definitions/enumerations/AssistantType.md) | - | [src/core/service-configuration/agent-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L83) |
| `agent.call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | - | [src/core/service-configuration/agent-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L84) |
| `agent.metadata?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/agent-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L85) |
| `agent.model?` | \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null` | - | [src/core/service-configuration/agent-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/agent-config.schema.ts#L86) |
| <a id="instruction"></a> `instruction` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `instructionName`: `string`; `role`: `string`; `introductionMessage`: `string`; `instructions`: `string`; `guardrails`: `string`; `requiredSkills?`: `string`[]; `validationRules?`: `Record`\<`string`, `any`\>; `serviceId?`: `string`; `supportedServices`: [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[]; `tools?`: `string`[]; `isTemplate`: `boolean`; `isPrimary`: `boolean`; `metadata?`: `Record`\<`string`, `any`\>; `knowledgeSourceIds`: `string`[]; \} | `InstructionConfigurationSchema` | [src/core/service-configuration/deployment-config.schema.ts:314](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/deployment-config.schema.ts#L314) |
| `instruction.id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L8) |
| `instruction.createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L9) |
| `instruction.updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/base.schema.ts#L10) |
| `instruction.instructionName` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L73) |
| `instruction.role` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L74) |
| `instruction.introductionMessage` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:75](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L75) |
| `instruction.instructions` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L76) |
| `instruction.guardrails` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L77) |
| `instruction.requiredSkills?` | `string`[] | - | [src/core/service-configuration/instruction-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L78) |
| `instruction.validationRules?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/instruction-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L79) |
| `instruction.serviceId?` | `string` | - | [src/core/service-configuration/instruction-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L80) |
| `instruction.supportedServices` | [`BusinessSupportServices`](../../type-definitions/enumerations/BusinessSupportServices.md)[] | - | [src/core/service-configuration/instruction-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L81) |
| `instruction.tools?` | `string`[] | - | [src/core/service-configuration/instruction-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L82) |
| `instruction.isTemplate` | `boolean` | - | [src/core/service-configuration/instruction-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L83) |
| `instruction.isPrimary` | `boolean` | - | [src/core/service-configuration/instruction-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L84) |
| `instruction.metadata?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/instruction-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L85) |
| `instruction.knowledgeSourceIds` | `string`[] | - | [src/core/service-configuration/instruction-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/service-configuration/instruction-config.schema.ts#L86) |
