[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateTranslationServiceRequest

# Type Alias: CreateTranslationServiceRequest

```ts
type CreateTranslationServiceRequest = {
  initiator_id: string;
  initiator_language_code: string;
  participant_language_code: string;
  session_id?: string | null;
  translation_config_id?: string | null;
};
```

Defined in: [src/core/conversation/translation-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L58)

Schema for creating a new translation service request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="initiator_id"></a> `initiator_id` | `string` | - | [src/core/conversation/translation-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L20) |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L21) |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L22) |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | - | [src/core/conversation/translation-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L23) |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | - | [src/core/conversation/translation-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-config.schema.ts#L24) |
