[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfigSchema

# Variable: CreateTranslationChainConfigSchema

```ts
const CreateTranslationChainConfigSchema: ZodObject<CreateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:317](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L317)

Zod schema for creating a new translation chain configuration.

Omits auto-generated fields and sets isTranslation to true by default.

## Example

```typescript
const newTranslationChain: CreateTranslationChainConfig = {
  chainName: 'FR-EN Translation',
  description: 'French to English translation chain',
  sttConfig: {
    providerType: 'Deepgram',
    providerModelId: 'nova-2',
    languageId: 'fr'
  },
  processingConfig: {
    providerType: 'OpenAI',
    providerModelId: 'gpt-4o-mini'
  },
  ttsConfig: {
    providerType: 'ElevenLabs',
    providerModelId: 'eleven_multilingual_v2',
    languageId: 'en',
    voiceId: 'english-voice'
  },
  isTranslation: true
};
```
