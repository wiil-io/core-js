[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / SttModelConfigSchema

# Variable: SttModelConfigSchema

```ts
const SttModelConfigSchema: ZodObject<SttModelConfig>;
```

Defined in: src/core/service-configuration/provisioning-config.ts:24

Zod schema for Speech-to-Text (STT) model configuration.

## Example

```typescript
const sttConfig: SttModelConfig = {
  modelId: 'whisper-v3',
  defaultLanguage: 'en-US'
};
```
