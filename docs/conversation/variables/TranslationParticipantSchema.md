[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.23**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationParticipantSchema

# Variable: TranslationParticipantSchema

```ts
const TranslationParticipantSchema: ZodObject<TranslationParticipant>;
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:82](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/conversation/translation-conversation.schema.ts#L82)

Translation participant schema.

Represents an individual participant in a translation session including their language preferences,
authentication credentials, role, and message history. Participants can be anchors (session initiators)
or secondary participants joining the translation conversation.

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
