[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / AgentConfiguration

# Type Alias: AgentConfiguration

```ts
type AgentConfiguration = {
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
```

Defined in: [src/core/service-configuration/agent-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L95)

Type definition for Agent Configuration.

Represents a complete agent configuration including all metadata,
model settings, and operational parameters.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L10) |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/agent-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L77) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/agent-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L78) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/agent-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L79) |
| <a id="useswiilsupportmodel"></a> `usesWiilSupportModel` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L80) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L81) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/agent-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L82) |
| <a id="assistanttype"></a> `assistantType` | [`AssistantType`](../../type-definitions/enumerations/AssistantType.md) | [src/core/service-configuration/agent-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L83) |
| <a id="call_transfer_config"></a> `call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L84) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L85) |
| <a id="model"></a> `model?` | \| \{ `modelId`: `string`; `proprietor`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `name`: `string`; `provider_model_id?`: `string`; `description`: `string`; `type`: [`LLMType`](../../type-definitions/enumerations/LLMType.md); `discontinued`: `boolean`; `supportedVoices?`: \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null`; `supportLanguages?`: \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null`; \} \| `null` | [src/core/service-configuration/agent-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/agent-config.schema.ts#L86) |
