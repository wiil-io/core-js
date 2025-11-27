[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TranslationServiceRequest

# Type Alias: TranslationServiceRequest

```ts
type TranslationServiceRequest = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  initiator_id: string;
  initiator_language_code: string;
  participant_language_code: string;
  session_id?: string | null;
  translation_config_id?: string | null;
};
```

Defined in: src/core/conversation/translation-config.schema.ts:57

Translation service request schema.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="initiator_id"></a> `initiator_id` | `string` | - | src/core/conversation/translation-config.schema.ts:20 |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-config.schema.ts:21 |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | `LanguageCodeSchema` | src/core/conversation/translation-config.schema.ts:22 |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | - | src/core/conversation/translation-config.schema.ts:23 |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | - | src/core/conversation/translation-config.schema.ts:24 |
