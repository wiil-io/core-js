[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TtsModelConfigSchema

# Variable: TtsModelConfigSchema

```ts
const TtsModelConfigSchema: ZodObject<TtsModelConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:77](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/provisioning-config.ts#L77)

Zod schema for Text-to-Speech (TTS) model configuration.

Defines the TTS model and voice used to convert agent text responses to speech in voice interactions.
Part of the provisioning chain's output generation stage.

## Remarks

**Architecture Context:**
- **Used In**: ProvisioningConfigChain (ttsConfig field)
- **Purpose**: Converts agent text responses to natural speech
- **Pipeline Position**: Final stage (Text → Speech)
- **Voice Selection**: References voices from WiilSupportModel.supportedVoices

## Example

```typescript
const ttsConfig: TtsModelConfig = {
  modelId: 'eleven-labs-v2',
  voiceId: 'adam',
  defaultLanguage: 'en-US',
  voiceSettings: { stability: 0.75, similarity_boost: 0.5 }
};
```
