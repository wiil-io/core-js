[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateAgentConfiguration

# Type Alias: UpdateAgentConfiguration

```ts
type UpdateAgentConfiguration = {
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

Defined in: [src/core/service-configuration/agent-config.schema.ts:148](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L148)

Type definition for updating an existing agent configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId?` | `string` | [src/core/service-configuration/agent-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L57) |
| <a id="name"></a> `name?` | `string` | [src/core/service-configuration/agent-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L58) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState?` | \| [`STS`](../../type-definitions/enumerations/LLMType.md#sts) \| [`TTS`](../../type-definitions/enumerations/LLMType.md#tts) \| [`STT`](../../type-definitions/enumerations/LLMType.md#stt) \| [`TRANSCRIBE`](../../type-definitions/enumerations/LLMType.md#transcribe) \| [`TEXT_PROCESSING`](../../type-definitions/enumerations/LLMType.md#text_processing) \| [`MULTI_MODE`](../../type-definitions/enumerations/LLMType.md#multi_mode) | [src/core/service-configuration/agent-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L59) |
| <a id="usestravnexsupportmodel"></a> `usesTravnexSupportModel?` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L60) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L61) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/agent-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L62) |
| <a id="assistanttype"></a> `assistantType?` | \| [`PHONE`](../../type-definitions/enumerations/AssistantType.md#phone) \| [`WEB`](../../type-definitions/enumerations/AssistantType.md#web) \| [`EMAIL`](../../type-definitions/enumerations/AssistantType.md#email) \| [`GENERAL`](../../type-definitions/enumerations/AssistantType.md#general) | [src/core/service-configuration/agent-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L63) |
| <a id="call_transfer_config"></a> `call_transfer_config?` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L64) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L65) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/agent-config.schema.ts:140](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L140) |
