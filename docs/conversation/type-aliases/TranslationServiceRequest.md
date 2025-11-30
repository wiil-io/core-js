[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationServiceRequest

# Type Alias: TranslationServiceRequest

```ts
type TranslationServiceRequest = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  initiator_id: string;
  initiator_language_code: string;
  participant_language_code: string;
  session_id?: string | null;
  translation_config_id?: string | null;
};
```

Defined in: [src/core/conversation/translation-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L57)

Translation service request schema.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="initiator_id"></a> `initiator_id` | `string` | - | [src/core/conversation/translation-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L20) |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L21) |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | `LanguageCodeSchema` | [src/core/conversation/translation-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L22) |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | - | [src/core/conversation/translation-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L23) |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | - | [src/core/conversation/translation-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-config.schema.ts#L24) |
