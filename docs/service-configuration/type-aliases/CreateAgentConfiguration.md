[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateAgentConfiguration

# Type Alias: CreateAgentConfiguration

```ts
type CreateAgentConfiguration = {
  modelId: string;
  name: string;
  defaultFunctionState: LLMType;
  usesWiilSupportModel: boolean;
  requiredModelConfig?: Record<string, any>;
  useCustomModel: boolean;
  textProcessingModelId?: string | null;
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

Defined in: [src/core/service-configuration/agent-config.schema.ts:142](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L142)

Type definition for creating a new agent configuration.

Represents the payload required to create a new agent, excluding
system-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/agent-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L79) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/agent-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L80) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/agent-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L81) |
| <a id="useswiilsupportmodel"></a> `usesWiilSupportModel` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L82) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L83) |
| <a id="usecustommodel"></a> `useCustomModel` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L84) |
| <a id="textprocessingmodelid"></a> `textProcessingModelId?` | `string` \| `null` | [src/core/service-configuration/agent-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L85) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/agent-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L86) |
| <a id="assistanttype"></a> `assistantType` | [`AssistantType`](../../type-definitions/enumerations/AssistantType.md) | [src/core/service-configuration/agent-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L87) |
| <a id="call_transfer_config"></a> `call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:88](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L88) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:89](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/service-configuration/agent-config.schema.ts#L89) |
