[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfigSchema

# Variable: CreateTranslationChainConfigSchema

```ts
const CreateTranslationChainConfigSchema: ZodObject<CreateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:304](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/provisioning-config.ts#L304)

Zod schema for creating a new translation chain configuration.

Omits auto-generated fields and sets isTranslation to true by default.

## Example

```typescript
const newTranslationChain: CreateTranslationChainConfig = {
  chainName: 'FR-EN Translation',
  description: 'French to English translation chain',
  sttConfig: {
    modelId: 'whisper-v3',
    defaultLanguage: 'fr-FR'
  },
  processingModelId: 'gpt-4-translator',
  ttsConfig: {
    modelId: 'eleven-labs-v2',
    voiceId: 'english-voice',
    defaultLanguage: 'en-US'
  },
  isTranslation: true
};
```
