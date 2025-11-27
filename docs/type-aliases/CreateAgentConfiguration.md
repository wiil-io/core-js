[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateAgentConfiguration

# Type Alias: CreateAgentConfiguration

```ts
type CreateAgentConfiguration = {
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
};
```

Defined in: src/core/service-configuration/agent-config.schema.ts:118

Type definition for creating a new agent configuration.

Represents the payload required to create a new agent, excluding
system-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="modelid"></a> `modelId` | `string` | src/core/service-configuration/agent-config.schema.ts:57 |
| <a id="name"></a> `name` | `string` | src/core/service-configuration/agent-config.schema.ts:58 |
| <a id="defaultfunctionstate"></a> `defaultFunctionState` | [`LLMType`](../enumerations/LLMType.md) | src/core/service-configuration/agent-config.schema.ts:59 |
| <a id="usestravnexsupportmodel"></a> `usesTravnexSupportModel` | `boolean` | src/core/service-configuration/agent-config.schema.ts:60 |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | src/core/service-configuration/agent-config.schema.ts:61 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | src/core/service-configuration/agent-config.schema.ts:62 |
| <a id="assistanttype"></a> `assistantType` | [`AssistantType`](../enumerations/AssistantType.md) | src/core/service-configuration/agent-config.schema.ts:63 |
| <a id="call_transfer_config"></a> `call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | src/core/service-configuration/agent-config.schema.ts:64 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/service-configuration/agent-config.schema.ts:65 |
