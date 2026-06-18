[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / Evaluation

# Type Alias: Evaluation

```ts
type Evaluation = {
  instructionId: string;
  agentId: string;
  evaluationConfigId: string;
  speechConfig?: Record<string, never> | null;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:420](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/conversation-config.schema.ts#L420)

Evaluation schema for running AI agent evaluations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="instructionid"></a> `instructionId` | `string` | [src/core/conversation/conversation-config.schema.ts:381](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/conversation-config.schema.ts#L381) |
| <a id="agentid"></a> `agentId` | `string` | [src/core/conversation/conversation-config.schema.ts:382](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/conversation-config.schema.ts#L382) |
| <a id="evaluationconfigid"></a> `evaluationConfigId` | `string` | [src/core/conversation/conversation-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/conversation-config.schema.ts#L383) |
| <a id="speechconfig"></a> `speechConfig?` | `Record`\<`string`, `never`\> \| `null` | [src/core/conversation/conversation-config.schema.ts:384](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/conversation/conversation-config.schema.ts#L384) |
