[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SttModelConfigSchema

# Variable: SttModelConfigSchema

```ts
const SttModelConfigSchema: ZodObject<SttModelConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:24](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L24)

Zod schema for Speech-to-Text (STT) model configuration.

## Example

```typescript
const sttConfig: SttModelConfig = {
  modelId: 'whisper-v3',
  defaultLanguage: 'en-US'
};
```
