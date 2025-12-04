[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.21**](../../README.md)

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

Defined in: [src/core/conversation/translation-config.schema.ts:92](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L92)

Schema for creating a new translation service request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="initiator_id"></a> `initiator_id` | `string` | [src/core/conversation/translation-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L41) |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | [src/core/conversation/translation-config.schema.ts:42](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L42) |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | [src/core/conversation/translation-config.schema.ts:43](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L43) |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | [src/core/conversation/translation-config.schema.ts:44](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L44) |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | [src/core/conversation/translation-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/f3384956e14bafdd1347e2d2649f1299435f6e02/src/core/conversation/translation-config.schema.ts#L45) |
