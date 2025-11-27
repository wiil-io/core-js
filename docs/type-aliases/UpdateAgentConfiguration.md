[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateAgentConfiguration

# Type Alias: UpdateAgentConfiguration

```ts
type UpdateAgentConfiguration = {
  version?: number;
  modelId?: string;
  name?: string;
  defaultFunctionState?:   | STS
     | TTS
     | STT
     | TRANSCRIBE
     | TEXT_PROCESSING
     | MULTI_MODE;
  usesTravnexSupportModel?: boolean;
  requiredModelConfig?: Record<string, any>;
  instructionConfigurationId?: string;
  assistantType?:   | PHONE
     | WEB
     | EMAIL
     | GENERAL;
  call_transfer_config?: {
     transfer_number: string;
     transfer_type: "blind" | "warm";
     transfer_conditions: string[];
  }[];
  metadata?: Record<string, any>;
  id: string;
};
```

Defined in: src/core/service-configuration/agent-config.schema.ts:148

Type definition for updating an existing agent configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="modelid"></a> `modelId?` | `string` | src/core/service-configuration/agent-config.schema.ts:57 |
| <a id="name"></a> `name?` | `string` | src/core/service-configuration/agent-config.schema.ts:58 |
| <a id="defaultfunctionstate"></a> `defaultFunctionState?` | \| [`STS`](../enumerations/LLMType.md#sts) \| [`TTS`](../enumerations/LLMType.md#tts) \| [`STT`](../enumerations/LLMType.md#stt) \| [`TRANSCRIBE`](../enumerations/LLMType.md#transcribe) \| [`TEXT_PROCESSING`](../enumerations/LLMType.md#text_processing) \| [`MULTI_MODE`](../enumerations/LLMType.md#multi_mode) | src/core/service-configuration/agent-config.schema.ts:59 |
| <a id="usestravnexsupportmodel"></a> `usesTravnexSupportModel?` | `boolean` | src/core/service-configuration/agent-config.schema.ts:60 |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | src/core/service-configuration/agent-config.schema.ts:61 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | src/core/service-configuration/agent-config.schema.ts:62 |
| <a id="assistanttype"></a> `assistantType?` | \| [`PHONE`](../enumerations/AssistantType.md#phone) \| [`WEB`](../enumerations/AssistantType.md#web) \| [`EMAIL`](../enumerations/AssistantType.md#email) \| [`GENERAL`](../enumerations/AssistantType.md#general) | src/core/service-configuration/agent-config.schema.ts:63 |
| <a id="call_transfer_config"></a> `call_transfer_config?` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | src/core/service-configuration/agent-config.schema.ts:64 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/service-configuration/agent-config.schema.ts:65 |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/agent-config.schema.ts:140 |
