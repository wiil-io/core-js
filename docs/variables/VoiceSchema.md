[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / VoiceSchema

# Variable: VoiceSchema

```ts
const VoiceSchema: ZodObject<Voice>;
```

Defined in: src/core/service-configuration/voice-language.schema.ts:48

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
