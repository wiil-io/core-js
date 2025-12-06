[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.22**](../../README.md)

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

Defined in: [src/core/conversation/translation-conversation.schema.ts:184](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L184)

Schema for creating a new translation service log.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:148](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L148) |
| <a id="project_id"></a> `project_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:149](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L149) |
| <a id="partner_initiator_id"></a> `partner_initiator_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:150](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L150) |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:151](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L151) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:152](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L152) |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | [src/core/conversation/translation-conversation.schema.ts:153](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L153) |
| <a id="participants"></a> `participants?` | `string`[] | [src/core/conversation/translation-conversation.schema.ts:154](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L154) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/translation-conversation.schema.ts:155](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L155) |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/translation-conversation.schema.ts:156](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L156) |
| <a id="direction"></a> `direction` | [`TranslationDirection`](../../type-definitions/enumerations/TranslationDirection.md) | [src/core/conversation/translation-conversation.schema.ts:157](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L157) |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:158](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L158) |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:159](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L159) |
| <a id="translationsummary"></a> `translationSummary?` | `string` | [src/core/conversation/translation-conversation.schema.ts:160](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L160) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/translation-conversation.schema.ts:161](https://github.com/wiil-io/core-js/blob/4947d77308cc66f116ab368d918afdf6353c6b41/src/core/conversation/translation-conversation.schema.ts#L161) |
