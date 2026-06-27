[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:359](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L359)

Evaluation schema for running AI agent evaluations.
