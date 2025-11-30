[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SupportedVoices

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:108](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L108)

Type definition for supported voices array.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `voiceId` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:49](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L49) |
| `name` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:50](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L50) |
| `description` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:51](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L51) |
| `gender` | `"neutral"` \| `"male"` \| `"female"` | `VoiceGender` | [src/core/service-configuration/voice-language.schema.ts:52](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L52) |
| `language?` | `string` \| `null` | - | [src/core/service-configuration/voice-language.schema.ts:53](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L53) |
| `isDefault` | `boolean` | - | [src/core/service-configuration/voice-language.schema.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L54) |
