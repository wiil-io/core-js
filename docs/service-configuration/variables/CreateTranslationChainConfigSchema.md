[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfigSchema

# Variable: CreateTranslationChainConfigSchema

```ts
const CreateTranslationChainConfigSchema: ZodObject<CreateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:304](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/provisioning-config.ts#L304)

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
