[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TtsModelConfigSchema

# Variable: TtsModelConfigSchema

```ts
const TtsModelConfigSchema: ZodObject<TtsModelConfig>;
```

Defined in: src/core/service-configuration/provisioning-config.ts:53

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
