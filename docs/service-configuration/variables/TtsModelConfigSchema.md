[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TtsModelConfigSchema

# Variable: TtsModelConfigSchema

```ts
const TtsModelConfigSchema: ZodObject<TtsModelConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:53](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L53)

Zod schema for Text-to-Speech (TTS) model configuration.

## Example

```typescript
const ttsConfig: TtsModelConfig = {
  modelId: 'eleven-labs-v2',
  voiceId: 'adam',
  defaultLanguage: 'en-US',
  voiceSettings: { stability: 0.75, similarity_boost: 0.5 }
};
```
