[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationServiceLog

# Type Alias: TranslationServiceLog

```ts
type TranslationServiceLog = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/conversation/translation-conversation.schema.ts:143](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L143)

Translation service log schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:103](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L103) |
| <a id="project_id"></a> `project_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:104](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L104) |
| <a id="partner_initiator_id"></a> `partner_initiator_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:105](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L105) |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:106](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L106) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:107](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L107) |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | [src/core/conversation/translation-conversation.schema.ts:108](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L108) |
| <a id="participants"></a> `participants?` | `string`[] | [src/core/conversation/translation-conversation.schema.ts:109](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L109) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/translation-conversation.schema.ts:110](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L110) |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/translation-conversation.schema.ts:111](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L111) |
| <a id="direction"></a> `direction` | [`TranslationDirection`](../../type-definitions/enumerations/TranslationDirection.md) | [src/core/conversation/translation-conversation.schema.ts:112](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L112) |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:113](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L113) |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:114](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L114) |
| <a id="translationsummary"></a> `translationSummary?` | `string` | [src/core/conversation/translation-conversation.schema.ts:115](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L115) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/translation-conversation.schema.ts:116](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/translation-conversation.schema.ts#L116) |
