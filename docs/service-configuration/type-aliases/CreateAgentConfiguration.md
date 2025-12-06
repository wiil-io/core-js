[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.23**](../../README.md)

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

Defined in: [src/core/service-configuration/agent-config.schema.ts:138](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L138)

Type definition for creating a new agent configuration.

Represents the payload required to create a new agent, excluding
system-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/agent-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L77) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/agent-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L78) |
| <a id="defaultfunctionstate"></a> `defaultFunctionState` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/agent-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L79) |
| <a id="useswiilsupportmodel"></a> `usesWiilSupportModel` | `boolean` | [src/core/service-configuration/agent-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L80) |
| <a id="requiredmodelconfig"></a> `requiredModelConfig?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L81) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/agent-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L82) |
| <a id="assistanttype"></a> `assistantType` | [`AssistantType`](../../type-definitions/enumerations/AssistantType.md) | [src/core/service-configuration/agent-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L83) |
| <a id="call_transfer_config"></a> `call_transfer_config` | \{ `transfer_number`: `string`; `transfer_type`: `"blind"` \| `"warm"`; `transfer_conditions`: `string`[]; \}[] | [src/core/service-configuration/agent-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L84) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/agent-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/agent-config.schema.ts#L85) |
