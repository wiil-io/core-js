[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateTranslationServiceLog

# Type Alias: UpdateTranslationServiceLog

```ts
type UpdateTranslationServiceLog = {
  version?: number;
  organization_id?: string;
  project_id?: string;
  partner_initiator_id?: string;
  partner_session_id?: string;
  sdrtn_id?: string;
  translationConfigId?: string | null;
  participants?: string[];
  durationInSeconds?: number;
  status?:   | PENDING
     | STARTED
     | ACTIVE
     | PAUSED
     | ENDED
     | SUMMARIZED
     | UPDATED_SUMMARIZED;
  direction?:   | BIDIRECTIONAL
     | UNIDIRECTIONAL;
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
  logTranscriptionInParticipantRecords?: boolean;
  translationSummary?: string;
  created_day?: string;
  id: string;
};
```

Defined in: src/core/conversation/translation-conversation.schema.ts:140

Schema for updating an existing translation service log.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organization_id"></a> `organization_id?` | `string` | src/core/conversation/translation-conversation.schema.ts:103 |
| <a id="project_id"></a> `project_id?` | `string` | src/core/conversation/translation-conversation.schema.ts:104 |
| <a id="partner_initiator_id"></a> `partner_initiator_id?` | `string` | src/core/conversation/translation-conversation.schema.ts:105 |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | src/core/conversation/translation-conversation.schema.ts:106 |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | src/core/conversation/translation-conversation.schema.ts:107 |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | src/core/conversation/translation-conversation.schema.ts:108 |
| <a id="participants"></a> `participants?` | `string`[] | src/core/conversation/translation-conversation.schema.ts:109 |
| <a id="durationinseconds"></a> `durationInSeconds?` | `number` | src/core/conversation/translation-conversation.schema.ts:110 |
| <a id="status"></a> `status?` | \| [`PENDING`](../enumerations/ConversationStatus.md#pending) \| [`STARTED`](../enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../enumerations/ConversationStatus.md#active) \| [`PAUSED`](../enumerations/ConversationStatus.md#paused) \| [`ENDED`](../enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../enumerations/ConversationStatus.md#updated_summarized) | src/core/conversation/translation-conversation.schema.ts:111 |
| <a id="direction"></a> `direction?` | \| [`BIDIRECTIONAL`](../enumerations/TranslationDirection.md#bidirectional) \| [`UNIDIRECTIONAL`](../enumerations/TranslationDirection.md#unidirectional) | src/core/conversation/translation-conversation.schema.ts:112 |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | src/core/conversation/translation-conversation.schema.ts:113 |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords?` | `boolean` | src/core/conversation/translation-conversation.schema.ts:114 |
| <a id="translationsummary"></a> `translationSummary?` | `string` | src/core/conversation/translation-conversation.schema.ts:115 |
| <a id="created_day"></a> `created_day?` | `string` | src/core/conversation/translation-conversation.schema.ts:116 |
| <a id="id"></a> `id` | `string` | src/core/conversation/translation-conversation.schema.ts:134 |
