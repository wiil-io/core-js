[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:348](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-config.schema.ts#L348)

Test configuration schema.
Base configuration for testing AI agents.
