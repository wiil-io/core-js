[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / TranslationServiceLogSchema

# Variable: TranslationServiceLogSchema

```ts
const TranslationServiceLogSchema: ZodObject<TranslationServiceLog>;
```

Defined in: [src/core/conversation/translation-conversation.schema.ts:147](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/translation-conversation.schema.ts#L147)

Translation service log schema.

Complete record of a translation session including participant information, session metadata, message
history, and operational status. Primary entity for managing and tracking real-time translation services
across organizations and projects.

## Remarks

**Architecture Context:**
- **Extends**: BaseModelSchema with translation session-specific fields
- **Relationship to Participants**: 1:N - One session has multiple participants
- **Relationship to Messages**: 1:N - One session contains multiple translation messages
- **Scoped To**: Organization and optionally Project for multi-tenant isolation

**Translation Directions:**
- **BIDIRECTIONAL**: Both participants receive translations (A→B and B→A simultaneously)
- **UNIDIRECTIONAL**: Only one direction of translation (e.g., customer to agent only)

**Session Lifecycle:**
- **ACTIVE**: Translation session in progress with real-time audio streaming
- **COMPLETED**: Session successfully concluded, participants disconnected
- **FAILED**: Session encountered errors (connection lost, processing failures)
- **ABANDONED**: Session abandoned by participants before completion

**Message Logging:**
- transcribedConversationLog: Central message array for session-level history
- logTranscriptionInParticipantRecords: Controls whether messages also stored per-participant
- Enables both session-wide and participant-specific message retrieval

**Use Cases:**
- Multilingual customer support call tracking
- International business meeting transcripts
- Cross-border service interaction logs
- Quality assurance and compliance auditing
