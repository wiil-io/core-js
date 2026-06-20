[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfigSchema

# Variable: CreateTranslationChainConfigSchema

```ts
const CreateTranslationChainConfigSchema: ZodObject<CreateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:317](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/service-configuration/provisioning-config.ts#L317)

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
