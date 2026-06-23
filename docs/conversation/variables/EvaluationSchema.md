[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:359](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L359)

Evaluation schema for running AI agent evaluations.
