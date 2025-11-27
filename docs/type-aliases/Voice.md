[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / Voice

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

Defined in: src/core/service-configuration/voice-language.schema.ts:60

Type definition for voice configuration.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="voiceid"></a> `voiceId` | `string` | - | src/core/service-configuration/voice-language.schema.ts:49 |
| <a id="name"></a> `name` | `string` | - | src/core/service-configuration/voice-language.schema.ts:50 |
| <a id="description"></a> `description` | `string` | - | src/core/service-configuration/voice-language.schema.ts:51 |
| <a id="gender"></a> `gender` | `"neutral"` \| `"male"` \| `"female"` | `VoiceGender` | src/core/service-configuration/voice-language.schema.ts:52 |
| <a id="language"></a> `language?` | `string` \| `null` | - | src/core/service-configuration/voice-language.schema.ts:53 |
| <a id="isdefault"></a> `isDefault` | `boolean` | - | src/core/service-configuration/voice-language.schema.ts:54 |
