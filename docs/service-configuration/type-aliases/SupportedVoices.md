[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:142](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L142)

Type definition for supported voices array.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `voiceId` | `string` | [src/core/service-configuration/voice-language.schema.ts:70](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L70) |
| `name` | `string` | [src/core/service-configuration/voice-language.schema.ts:71](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L71) |
| `description` | `string` | [src/core/service-configuration/voice-language.schema.ts:72](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L72) |
| `gender` | `"neutral"` \| `"male"` \| `"female"` | [src/core/service-configuration/voice-language.schema.ts:73](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L73) |
| `language?` | `string` \| `null` | [src/core/service-configuration/voice-language.schema.ts:74](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L74) |
| `isDefault` | `boolean` | [src/core/service-configuration/voice-language.schema.ts:75](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/voice-language.schema.ts#L75) |
