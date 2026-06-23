[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TestConfigSchema

# Variable: TestConfigSchema

```ts
const TestConfigSchema: ZodObject<{
  account_id: ZodString;
  project_id: ZodString;
  agent_id: ZodString;
  instruction_config_id: ZodString;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:349](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/conversation/conversation-config.schema.ts#L349)

Test configuration schema.
Base configuration for testing AI agents.
