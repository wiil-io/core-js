[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateTranslationParticipant

# Type Alias: UpdateTranslationParticipant

```ts
type UpdateTranslationParticipant = {
  version?: number;
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

Defined in: src/core/conversation/translation-conversation.schema.ts:138

Schema for updating an existing translation participant.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="translationservicelogid"></a> `translationServiceLogId?` | `string` | src/core/conversation/translation-conversation.schema.ts:54 |
| <a id="partnerparticipantrecordid"></a> `partnerParticipantRecordId?` | `string` | src/core/conversation/translation-conversation.schema.ts:55 |
| <a id="name"></a> `name?` | `string` | src/core/conversation/translation-conversation.schema.ts:56 |
| <a id="isanchor"></a> `isAnchor?` | `boolean` | src/core/conversation/translation-conversation.schema.ts:57 |
| <a id="nativelanguage"></a> `nativeLanguage?` | `string` | src/core/conversation/translation-conversation.schema.ts:58 |
| <a id="participantaccessid"></a> `participantAccessId?` | `number` | src/core/conversation/translation-conversation.schema.ts:59 |
| <a id="participanttoken"></a> `participantToken?` | `string` | src/core/conversation/translation-conversation.schema.ts:60 |
| <a id="transcriptions"></a> `transcriptions?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | src/core/conversation/translation-conversation.schema.ts:61 |
| <a id="participanttranscribedlogs"></a> `participantTranscribedLogs?` | ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] | src/core/conversation/translation-conversation.schema.ts:62 |
| <a id="id"></a> `id` | `string` | src/core/conversation/translation-conversation.schema.ts:80 |
