[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:359](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/conversation/conversation-config.schema.ts#L359)

Evaluation schema for running AI agent evaluations.
