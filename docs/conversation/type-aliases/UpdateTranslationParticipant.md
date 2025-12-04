[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UpdateTranslationParticipant

# Type Alias: UpdateTranslationParticipant

```ts
type UpdateTranslationParticipant = {
  translationServiceLogId?: string;
  partnerParticipantRecordId?: string;
  name?: string;
  isAnchor?: boolean;
  nativeLanguage?: string;
  participantAccessId?: number;
  participantToken?: string;
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
  id: string;
};
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:183](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L183)

Schema for updating an existing translation participant.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="translationservicelogid"></a> `translationServiceLogId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:83](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L83) |
| <a id="partnerparticipantrecordid"></a> `partnerParticipantRecordId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:84](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L84) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/translation-conversation.schema.ts:85](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L85) |
| <a id="isanchor"></a> `isAnchor?` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:86](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L86) |
| <a id="nativelanguage"></a> `nativeLanguage?` | `string` | [src/core/conversation/translation-conversation.schema.ts:87](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L87) |
| <a id="participantaccessid"></a> `participantAccessId?` | `number` | [src/core/conversation/translation-conversation.schema.ts:88](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L88) |
| <a id="participanttoken"></a> `participantToken?` | `string` | [src/core/conversation/translation-conversation.schema.ts:89](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L89) |
| <a id="transcriptions"></a> `transcriptions?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:90](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L90) |
| <a id="participanttranscribedlogs"></a> `participantTranscribedLogs?` | ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] | [src/core/conversation/translation-conversation.schema.ts:91](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L91) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/translation-conversation.schema.ts:109](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/conversation/translation-conversation.schema.ts#L109) |
