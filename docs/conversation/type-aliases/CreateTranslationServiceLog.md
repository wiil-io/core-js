[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateTranslationServiceLog

# Type Alias: CreateTranslationServiceLog

```ts
type CreateTranslationServiceLog = {
  organization_id: string;
  project_id?: string;
  partner_initiator_id: string;
  partner_session_id?: string;
  sdrtn_id?: string;
  translationConfigId?: string | null;
  participants?: string[];
  durationInSeconds: number;
  status: ConversationStatus;
  direction: TranslationDirection;
  transcribedConversationLog?: {
     messageId: string;
     speakerParticipantId: string;
     targetParticipantId: string;
     originalText?: string;
     translatedText?: string;
     originalLanguage: string;
     targetLanguage: string;
     provisioningConfigId: string;
     timestamp: number;
     metadata?: Record<string, any>;
  }[];
  logTranscriptionInParticipantRecords: boolean;
  translationSummary?: string;
  created_day?: string;
};
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:139](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L139)

Schema for creating a new translation service log.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:103](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L103) |
| <a id="project_id"></a> `project_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:104](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L104) |
| <a id="partner_initiator_id"></a> `partner_initiator_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:105](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L105) |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:106](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L106) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:107](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L107) |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | [src/core/conversation/translation-conversation.schema.ts:108](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L108) |
| <a id="participants"></a> `participants?` | `string`[] | [src/core/conversation/translation-conversation.schema.ts:109](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L109) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/translation-conversation.schema.ts:110](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L110) |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/translation-conversation.schema.ts:111](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L111) |
| <a id="direction"></a> `direction` | [`TranslationDirection`](../../type-definitions/enumerations/TranslationDirection.md) | [src/core/conversation/translation-conversation.schema.ts:112](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L112) |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:113](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L113) |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:114](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L114) |
| <a id="translationsummary"></a> `translationSummary?` | `string` | [src/core/conversation/translation-conversation.schema.ts:115](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L115) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/translation-conversation.schema.ts:116](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L116) |
