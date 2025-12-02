[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationParticipant

# Type Alias: TranslationParticipant

```ts
type TranslationParticipant = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/conversation/translation-conversation.schema.ts:187](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L187)

Translation participant schema.

Represents an individual participant in a translation session including their language preferences,
authentication credentials, role, and message history. Participants can be anchors (session initiators)
or secondary participants joining the translation conversation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/base.schema.ts#L10) |
| <a id="translationservicelogid"></a> `translationServiceLogId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:83](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L83) |
| <a id="partnerparticipantrecordid"></a> `partnerParticipantRecordId?` | `string` | [src/core/conversation/translation-conversation.schema.ts:84](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L84) |
| <a id="name"></a> `name?` | `string` | [src/core/conversation/translation-conversation.schema.ts:85](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L85) |
| <a id="isanchor"></a> `isAnchor` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:86](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L86) |
| <a id="nativelanguage"></a> `nativeLanguage` | `string` | [src/core/conversation/translation-conversation.schema.ts:87](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L87) |
| <a id="participantaccessid"></a> `participantAccessId` | `number` | [src/core/conversation/translation-conversation.schema.ts:88](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L88) |
| <a id="participanttoken"></a> `participantToken` | `string` | [src/core/conversation/translation-conversation.schema.ts:89](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L89) |
| <a id="transcriptions"></a> `transcriptions?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:90](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L90) |
| <a id="participanttranscribedlogs"></a> `participantTranscribedLogs?` | ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] | [src/core/conversation/translation-conversation.schema.ts:91](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L91) |

## Remarks

**Architecture Context:**
- **Extends**: BaseModelSchema with participant-specific fields
- **Relationship to Session**: N:1 - Multiple participants in one translation session
- **Referenced By**: TranslationMessage via speakerParticipantId and targetParticipantId
- **Access Control**: participantToken authenticates WebRTC connections

**Participant Roles:**
- **Anchor (isAnchor=true)**: Session initiator, typically the customer or primary caller
- **Secondary (isAnchor=false)**: Joining participant, typically agent or secondary caller

**Message Storage:**
- transcriptions: Translation messages where this participant is either speaker or target
- participantTranscribedLogs: Full conversation messages for audit and quality review

**Integration:**
- partnerParticipantRecordId links to external systems (CRM, HR, contact databases)
- Enables unified participant profiles across multiple sessions
