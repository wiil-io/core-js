[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TranslationChainConfigSchema

# Variable: TranslationChainConfigSchema

```ts
const TranslationChainConfigSchema: ZodObject<TranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:266](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/provisioning-config.ts#L266)

Zod schema for translation chain configuration.

Extends the provisioning chain concept with translation-specific processing capabilities.
Enables real-time language translation in voice interactions (e.g., English caller to Spanish agent).

## Remarks

**Architecture Context:**
- **Extension Of**: ProvisioningConfigChain with translation capabilities
- **Purpose**: Real-time language translation for multilingual support
- **Pipeline Flow**: Speech (Lang A) → STT → Text (Lang A) → Translation → Text (Lang B) → TTS → Speech (Lang B)
- **Use Case**: Cross-language customer support, international business

**Translation Pipeline:**
1. **STT Stage**: Converts incoming speech to text in source language
2. **Translation Stage**: Translates text between languages using processingModelId
3. **TTS Stage**: Converts translated text to speech in target language

## Example

```typescript
const translationChain: TranslationChainConfig = {
  id: 'chain-123',
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
