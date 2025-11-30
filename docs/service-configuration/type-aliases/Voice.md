[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / Voice

# Type Alias: Voice

```ts
type Voice = {
  voiceId: string;
  name: string;
  description: string;
  gender: "neutral" | "male" | "female";
  language?: string | null;
  isDefault: boolean;
};
```

Defined in: [src/core/service-configuration/voice-language.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L60)

Type definition for voice configuration.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="voiceid"></a> `voiceId` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:49](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L49) |
| <a id="name"></a> `name` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:50](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L50) |
| <a id="description"></a> `description` | `string` | - | [src/core/service-configuration/voice-language.schema.ts:51](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L51) |
| <a id="gender"></a> `gender` | `"neutral"` \| `"male"` \| `"female"` | `VoiceGender` | [src/core/service-configuration/voice-language.schema.ts:52](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L52) |
| <a id="language"></a> `language?` | `string` \| `null` | - | [src/core/service-configuration/voice-language.schema.ts:53](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L53) |
| <a id="isdefault"></a> `isDefault` | `boolean` | - | [src/core/service-configuration/voice-language.schema.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/voice-language.schema.ts#L54) |
