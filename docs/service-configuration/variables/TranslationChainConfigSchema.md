[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TranslationChainConfigSchema

# Variable: TranslationChainConfigSchema

```ts
const TranslationChainConfigSchema: ZodObject<TranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:222](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L222)

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
