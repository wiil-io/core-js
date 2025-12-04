[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateTranslationServiceLog

# Type Alias: UpdateTranslationServiceLog

```ts
type UpdateTranslationServiceLog = {
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

Defined in: [src/core/conversation/translation-conversation.schema.ts:185](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L185)

Schema for updating an existing translation service log.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organization_id"></a> `organization_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:148](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L148) |
| <a id="project_id"></a> `project_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:149](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L149) |
| <a id="partner_initiator_id"></a> `partner_initiator_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:150](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L150) |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:151](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L151) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:152](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L152) |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | [src/core/conversation/translation-conversation.schema.ts:153](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L153) |
| <a id="participants"></a> `participants?` | `string`[] | [src/core/conversation/translation-conversation.schema.ts:154](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L154) |
| <a id="durationinseconds"></a> `durationInSeconds?` | `number` | [src/core/conversation/translation-conversation.schema.ts:155](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L155) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ConversationStatus.md#pending) \| [`STARTED`](../../type-definitions/enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../../type-definitions/enumerations/ConversationStatus.md#active) \| [`PAUSED`](../../type-definitions/enumerations/ConversationStatus.md#paused) \| [`ENDED`](../../type-definitions/enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#updated_summarized) | [src/core/conversation/translation-conversation.schema.ts:156](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L156) |
| <a id="direction"></a> `direction?` | \| [`BIDIRECTIONAL`](../../type-definitions/enumerations/TranslationDirection.md#bidirectional) \| [`UNIDIRECTIONAL`](../../type-definitions/enumerations/TranslationDirection.md#unidirectional) | [src/core/conversation/translation-conversation.schema.ts:157](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L157) |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:158](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L158) |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords?` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:159](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L159) |
| <a id="translationsummary"></a> `translationSummary?` | `string` | [src/core/conversation/translation-conversation.schema.ts:160](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L160) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/translation-conversation.schema.ts:161](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L161) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/translation-conversation.schema.ts:179](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/conversation/translation-conversation.schema.ts#L179) |
