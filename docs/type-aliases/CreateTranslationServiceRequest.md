[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateTranslationServiceRequest

# Type Alias: CreateTranslationServiceRequest

```ts
type CreateTranslationServiceRequest = {
  version?: number;
  initiator_id: string;
  initiator_language_code: string;
  participant_language_code: string;
  session_id?: string | null;
  translation_config_id?: string | null;
};
```

Defined in: src/core/conversation/translation-config.schema.ts:58

Schema for creating a new translation service request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="initiator_id"></a> `initiator_id` | `string` | - | src/core/conversation/translation-config.schema.ts:20 |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-config.schema.ts:21 |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-config.schema.ts:22 |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | - | src/core/conversation/translation-config.schema.ts:23 |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | - | src/core/conversation/translation-config.schema.ts:24 |
