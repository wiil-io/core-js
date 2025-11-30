[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / VoiceSchema

# Variable: VoiceSchema

```ts
const VoiceSchema: ZodObject<Voice>;
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:48](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L48)

Zod schema for voice configuration.

Represents a voice option available for text-to-speech synthesis.

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
