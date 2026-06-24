[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:349](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/conversation/conversation-config.schema.ts#L349)

Test configuration schema.
Base configuration for testing AI agents.
