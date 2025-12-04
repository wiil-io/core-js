[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

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
  usesWiilSupportModel?: boolean;
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

Defined in: [src/core/service-configuration/agent-config.schema.ts:168](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L168)

Type definition for updating an existing agent configuration.

Represents a partial update payload with required id field.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId?` | `string` | [src/core/service-configuration/agent-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L77) |
| <a id="name"></a> `name?` | `string` | [src/core/service-configuration/agent-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L78) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState?` | \| [`STS`](../../type-definitions/enumerations/LLMType.md#sts) \| [`TTS`](../../type-definitions/enumerations/LLMType.md#tts) \| [`STT`](../../type-definitions/enumerations/LLMType.md#stt) \| [`TRANSCRIBE`](../../type-definitions/enumerations/LLMType.md#transcribe) \| [`TEXT_PROCESSING`](../../type-definitions/enumerations/LLMType.md#text_processing) \| [`MULTI_MODE`](../../type-definitions/enumerations/LLMType.md#multi_mode) | [src/core/service-configuration/agent-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L79) |
| <a id="useswiilsupportmodel"></a> `usesWiilSupportModel?` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L80) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L81) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` | [src/core/service-configuration/agent-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L82) |
| <a id="assistanttype"></a> `assistantType?` | \| [`PHONE`](../../type-definitions/enumerations/AssistantType.md#phone) \| [`WEB`](../../type-definitions/enumerations/AssistantType.md#web) \| [`EMAIL`](../../type-definitions/enumerations/AssistantType.md#email) \| [`GENERAL`](../../type-definitions/enumerations/AssistantType.md#general) | [src/core/service-configuration/agent-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L83) |
| <a id="call_transfer_config"></a> `call_transfer_config?` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L84) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L85) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/agent-config.schema.ts:160](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/agent-config.schema.ts#L160) |
