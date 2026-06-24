[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:359](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/conversation/conversation-config.schema.ts#L359)

Evaluation schema for running AI agent evaluations.
