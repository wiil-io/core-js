[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EvaluationSchema

# Variable: EvaluationSchema

```ts
const EvaluationSchema: ZodObject<{
  instructionId: ZodString;
  agentId: ZodString;
  evaluationConfigId: ZodString;
  speechConfig: ZodNullable<ZodOptional<ZodObject<{
  }, $strip>>>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:358](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L358)

Evaluation schema for running AI agent evaluations.
