[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:349](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L349)

Test configuration schema.
Base configuration for testing AI agents.
