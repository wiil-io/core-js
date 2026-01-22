[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

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

Defined in: [src/core/conversation/translation-config.schema.ts:91](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L91)

Translation service request schema.

Request payload for initiating a real-time translation session between two participants speaking
different languages. Specifies participant identifiers, their native languages, and optional
configuration for the translation service provisioning.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L10) |
| <a id="initiator_id"></a> `initiator_id` | `string` | [src/core/conversation/translation-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L41) |
| <a id="initiator_language_code"></a> `initiator_language_code` | `string` | [src/core/conversation/translation-config.schema.ts:42](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L42) |
| <a id="participant_language_code"></a> `participant_language_code` | `string` | [src/core/conversation/translation-config.schema.ts:43](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L43) |
| <a id="session_id"></a> `session_id?` | `string` \| `null` | [src/core/conversation/translation-config.schema.ts:44](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L44) |
| <a id="translation_config_id"></a> `translation_config_id?` | `string` \| `null` | [src/core/conversation/translation-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/translation-config.schema.ts#L45) |

## Remarks

**Architecture Context:**
- **Extends**: BaseModelSchema with translation-specific fields
- **Creates**: TranslationServiceLog when session is initiated
- **Participants**: 1:N - One request can lead to multiple participant records
- **Session Tracking**: session_id enables grouping related translation requests

**Translation Flow:**
1. Client submits TranslationServiceRequest with participant details
2. System creates TranslationServiceLog and participant records
3. Real-time translation session begins with bidirectional audio streaming
4. Speech transcribed → translated → synthesized for each participant

**Use Cases:**
- Customer calling support in different language than agent
- International business calls requiring real-time translation
- Multilingual conference calls with language bridges
