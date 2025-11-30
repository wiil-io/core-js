[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateAgentConfiguration

# Type Alias: CreateAgentConfiguration

```ts
type CreateAgentConfiguration = {
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
};
```

Defined in: [src/core/service-configuration/agent-config.schema.ts:118](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L118)

Type definition for creating a new agent configuration.

Represents the payload required to create a new agent, excluding
system-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/agent-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L57) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/agent-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L58) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/agent-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L59) |
| <a id="usestravnexsupportmodel"></a> `usesTravnexSupportModel` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L60) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L61) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/agent-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L62) |
| <a id="assistanttype"></a> `assistantType` | [`AssistantType`](../../type-definitions/enumerations/AssistantType.md) | [src/core/service-configuration/agent-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L63) |
| <a id="call_transfer_config"></a> `call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L64) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/agent-config.schema.ts#L65) |
