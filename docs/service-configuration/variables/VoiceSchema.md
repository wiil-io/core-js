[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / VoiceSchema

# Variable: VoiceSchema

```ts
const VoiceSchema: ZodObject<Voice>;
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:69](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/service-configuration/voice-language.schema.ts#L69)

Zod schema for voice configuration.

Represents a synthetic voice option available for text-to-speech (TTS) synthesis. Voices are
associated with TTS models in the Wiil support registry and selected in provisioning chains
for voice-based deployments.

## Remarks

**Architecture Context:**
- **Used By**: WiilSupportModel (supportedVoices array for TTS models)
- **Referenced In**: TtsModelConfig (voiceId selection) and ProvisioningConfigChain
- **Purpose**: Defines available voice options for agent speech synthesis

**Voice Characteristics:**
- **Identity**: Unique ID and human-readable name
- **Gender**: Male, female, or neutral classification
- **Language**: Optimal language for the voice
- **Default**: Flag for platform default selection

## Example

```typescript
const voice: Voice = {
  voiceId: 'adam',
  name: 'Adam',
  description: 'Deep, authoritative male voice',
  gender: 'male',
  language: 'en-US',
  isDefault: true
};
```
