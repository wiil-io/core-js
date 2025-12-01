[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

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

Defined in: [src/core/service-configuration/voice-language.schema.ts:81](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L81)

Type definition for voice configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="voiceid"></a> `voiceId` | `string` | [src/core/service-configuration/voice-language.schema.ts:70](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L70) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/voice-language.schema.ts:71](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L71) |
| <a id="description"></a> `description` | `string` | [src/core/service-configuration/voice-language.schema.ts:72](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L72) |
| <a id="gender"></a> `gender` | `"neutral"` \| `"male"` \| `"female"` | [src/core/service-configuration/voice-language.schema.ts:73](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L73) |
| <a id="language"></a> `language?` | `string` \| `null` | [src/core/service-configuration/voice-language.schema.ts:74](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L74) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/service-configuration/voice-language.schema.ts:75](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/voice-language.schema.ts#L75) |
