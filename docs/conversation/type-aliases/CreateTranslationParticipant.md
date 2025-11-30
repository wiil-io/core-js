[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateTranslationParticipant

# Type Alias: CreateTranslationParticipant

```ts
type CreateTranslationParticipant = {
  translationServiceLogId?: string;
  partnerParticipantRecordId?: string;
  name?: string;
  isAnchor: boolean;
  nativeLanguage: string;
  participantAccessId: number;
  participantToken: string;
  transcriptions?: {
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
  participantTranscribedLogs?: (
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: USER;
     user_message_id?: string | null;
     last_assistant_message_id?: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: AGENT;
     assistant_message_id: string;
     last_user_message_id?: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     subject: string;
     isEmail: true;
     message_type: USER;
     provider_message_id?: string | null;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     subject: string;
     isEmail: true;
     message_type: AGENT;
  })[];
};
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:137](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L137)

Schema for creating a new translation participant.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="translationservicelogid"></a> `translationServiceLogId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L54) |
| <a id="partnerparticipantrecordid"></a> `partnerParticipantRecordId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L55) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/translation-conversation.schema.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L56) |
| <a id="isanchor"></a> `isAnchor` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L57) |
| <a id="nativelanguage"></a> `nativeLanguage` | `string` | [src/core/conversation/translation-conversation.schema.ts:58](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L58) |
| <a id="participantaccessid"></a> `participantAccessId` | `number` | [src/core/conversation/translation-conversation.schema.ts:59](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L59) |
| <a id="participanttoken"></a> `participantToken` | `string` | [src/core/conversation/translation-conversation.schema.ts:60](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L60) |
| <a id="transcriptions"></a> `transcriptions?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:61](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L61) |
| <a id="participanttranscribedlogs"></a> `participantTranscribedLogs?` | ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] | [src/core/conversation/translation-conversation.schema.ts:62](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/translation-conversation.schema.ts#L62) |
