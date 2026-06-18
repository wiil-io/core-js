[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfigSchema

# Variable: CreateTranslationChainConfigSchema

```ts
const CreateTranslationChainConfigSchema: ZodObject<CreateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:317](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/service-configuration/provisioning-config.ts#L317)

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
