[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

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

Defined in: [src/core/conversation/translation-conversation.schema.ts:188](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L188)

Translation service log schema.

Complete record of a translation session including participant information, session metadata, message
history, and operational status. Primary entity for managing and tracking real-time translation services
across organizations and projects.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L10) |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:148](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L148) |
| <a id="project_id"></a> `project_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:149](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L149) |
| <a id="partner_initiator_id"></a> `partner_initiator_id` | `string` | [src/core/conversation/translation-conversation.schema.ts:150](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L150) |
| <a id="partner_session_id"></a> `partner_session_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:151](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L151) |
| <a id="sdrtn_id"></a> `sdrtn_id?` | `string` | [src/core/conversation/translation-conversation.schema.ts:152](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L152) |
| <a id="translationconfigid"></a> `translationConfigId?` | `string` \| `null` | [src/core/conversation/translation-conversation.schema.ts:153](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L153) |
| <a id="participants"></a> `participants?` | `string`[] | [src/core/conversation/translation-conversation.schema.ts:154](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L154) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/translation-conversation.schema.ts:155](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L155) |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/translation-conversation.schema.ts:156](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L156) |
| <a id="direction"></a> `direction` | [`TranslationDirection`](../../type-definitions/enumerations/TranslationDirection.md) | [src/core/conversation/translation-conversation.schema.ts:157](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L157) |
| <a id="transcribedconversationlog"></a> `transcribedConversationLog?` | \{ `messageId`: `string`; `speakerParticipantId`: `string`; `targetParticipantId`: `string`; `originalText?`: `string`; `translatedText?`: `string`; `originalLanguage`: `string`; `targetLanguage`: `string`; `provisioningConfigId`: `string`; `timestamp`: `number`; `metadata?`: `Record`\<`string`, `any`\>; \}[] | [src/core/conversation/translation-conversation.schema.ts:158](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L158) |
| <a id="logtranscriptioninparticipantrecords"></a> `logTranscriptionInParticipantRecords` | `boolean` | [src/core/conversation/translation-conversation.schema.ts:159](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L159) |
| <a id="translationsummary"></a> `translationSummary?` | `string` | [src/core/conversation/translation-conversation.schema.ts:160](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L160) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/translation-conversation.schema.ts:161](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/conversation/translation-conversation.schema.ts#L161) |

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
