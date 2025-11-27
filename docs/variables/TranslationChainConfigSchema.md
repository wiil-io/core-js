[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TranslationChainConfigSchema

# Variable: TranslationChainConfigSchema

```ts
const TranslationChainConfigSchema: ZodObject<TranslationChainConfig>;
```

Defined in: src/core/service-configuration/provisioning-config.ts:222

Zod schema for translation chain configuration.

Extends provisioning chain with translation-specific processing capabilities.

## Example

```typescript
const translationChain: TranslationChainConfig = {
  id: 'chain-123',
  organizationId: 'org-456',
  chainName: 'EN-ES Translation Chain',
  description: 'English to Spanish translation for customer support',
  sttConfig: {
    modelId: 'whisper-v3',
    defaultLanguage: 'en-US'
  },
  processingModelId: 'gpt-4-translator',
  ttsConfig: {
    modelId: 'eleven-labs-v2',
    voiceId: 'spanish-voice',
    defaultLanguage: 'es-ES'
  },
  isTranslation: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
