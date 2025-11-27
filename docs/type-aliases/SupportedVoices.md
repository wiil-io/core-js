[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / SupportedVoices

# Type Alias: SupportedVoices

```ts
type SupportedVoices = {
  voiceId: string;
  name: string;
  description: string;
  gender: "neutral" | "male" | "female";
  language?: string | null;
  isDefault: boolean;
}[];
```

Defined in: src/core/service-configuration/voice-language.schema.ts:108

Type definition for supported voices array.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `voiceId` | `string` | - | src/core/service-configuration/voice-language.schema.ts:49 |
| `name` | `string` | - | src/core/service-configuration/voice-language.schema.ts:50 |
| `description` | `string` | - | src/core/service-configuration/voice-language.schema.ts:51 |
| `gender` | `"neutral"` \| `"male"` \| `"female"` | `VoiceGender` | src/core/service-configuration/voice-language.schema.ts:52 |
| `language?` | `string` \| `null` | - | src/core/service-configuration/voice-language.schema.ts:53 |
| `isDefault` | `boolean` | - | src/core/service-configuration/voice-language.schema.ts:54 |
