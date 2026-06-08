# Translation Conversation Overview

This document provides comprehensive documentation for the Translation Conversation system, covering session logs, participants, and message schemas for real-time language translation sessions.

## Table of Contents

1. [Overview](#overview)
2. [TranslationServiceLog](#translationservicelog)
3. [TranslationParticipant](#translationparticipant)
4. [TranslationMessage](#translationmessage)
5. [Session Lifecycle](#session-lifecycle)
6. [Enums](#enums)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Best Practices](#best-practices)

---

## Overview

The Translation Conversation system manages the lifecycle, participants, and message history of real-time language translation sessions. It provides:

- **Session tracking** with TranslationServiceLog for complete session records
- **Participant management** with roles, languages, and credentials
- **Message history** capturing the full translation pipeline (STT → Translation → TTS)
- **Bidirectional translation** supporting simultaneous two-way communication
- **Audit logging** for compliance and quality assurance

**Key Concepts:**
- Each translation session creates a `TranslationServiceLog`
- Sessions have multiple `TranslationParticipant` records (typically 2)
- Each spoken utterance creates a `TranslationMessage` with original and translated text
- Messages flow through: Speaker audio → STT → Translation → TTS → Listener audio

---

## TranslationServiceLog

Complete record of a translation session including participants, messages, and operational status.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| organization_id | string | Yes | - | Organization requesting the service |
| project_id | string | No | - | Optional project association |
| partner_initiator_id | string | Yes | - | Initiator ID from external systems |
| partner_session_id | string | No | - | External session ID for correlation |
| sdrtn_id | string | No | - | SDRTN identifier for WebRTC |
| translationConfigId | string | No | - | Translation configuration chain ID |
| participants | array | No | - | Array of participant IDs |
| durationInSeconds | number | No | 60 | Session duration for billing |
| status | enum | Yes | ACTIVE | Current session status |
| direction | enum | Yes | BIDIRECTIONAL | Translation direction mode |
| transcribedConversationLog | array | No | - | Array of translation messages |
| logTranscriptionInParticipantRecords | boolean | No | false | Store messages per participant |
| translationSummary | string | No | - | AI-generated session summary |
| created_day | string | No | - | Creation date (YYYY-MM-DD) |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "trans_log_abc123xyz",
  "organization_id": "org_acme_corp",
  "project_id": "proj_customer_support",
  "partner_initiator_id": "caller_john_smith",
  "partner_session_id": "call_session_456",
  "sdrtn_id": "sdrtn_webrtc_789",
  "translationConfigId": "prov_chain_en_es_v2",
  "participants": ["part_001", "part_002"],
  "durationInSeconds": 245,
  "status": "completed",
  "direction": "bidirectional",
  "transcribedConversationLog": [
    {
      "messageId": "msg_001",
      "speakerParticipantId": "part_001",
      "targetParticipantId": "part_002",
      "originalText": "Hello, how can I help you today?",
      "translatedText": "Hola, ¿cómo puedo ayudarte hoy?",
      "originalLanguage": "en-US",
      "targetLanguage": "es-MX",
      "provisioningConfigId": "prov_chain_en_es_v2",
      "timestamp": 1699900010000
    },
    {
      "messageId": "msg_002",
      "speakerParticipantId": "part_002",
      "targetParticipantId": "part_001",
      "originalText": "Necesito ayuda con mi pedido",
      "translatedText": "I need help with my order",
      "originalLanguage": "es-MX",
      "targetLanguage": "en-US",
      "provisioningConfigId": "prov_chain_en_es_v2",
      "timestamp": 1699900015000
    }
  ],
  "logTranscriptionInParticipantRecords": true,
  "translationSummary": "Customer called regarding order #12345. Agent confirmed shipping status and provided tracking information. Issue resolved successfully.",
  "created_day": "2024-11-13",
  "createdAt": 1699900000000,
  "updatedAt": 1699900245000
}
```

### Create Request Example

```json
{
  "organization_id": "org_acme_corp",
  "partner_initiator_id": "caller_john_smith",
  "direction": "bidirectional",
  "translationConfigId": "prov_chain_en_es_v2"
}
```

### Unidirectional Session Example

```json
{
  "organization_id": "org_acme_corp",
  "project_id": "proj_broadcast",
  "partner_initiator_id": "speaker_main",
  "direction": "unidirectional",
  "translationConfigId": "prov_chain_broadcast_multi",
  "status": "active"
}
```

---

## TranslationParticipant

Represents an individual participant in a translation session with language preferences and credentials.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| translationServiceLogId | string | No | - | Parent session ID |
| partnerParticipantRecordId | string | No | - | External participant record ID |
| name | string | No | - | Human-readable participant name |
| isAnchor | boolean | No | false | Whether this is the session initiator |
| nativeLanguage | string | Yes | - | ISO 639-1 language code (2-5 chars) |
| participantAccessId | number | Yes | - | Numeric ID for WebRTC authentication |
| participantToken | string | Yes | - | Authentication token for WebRTC |
| transcriptions | array | No | - | Translation messages for this participant |
| participantTranscribedLogs | array | No | - | Full conversation messages for audit |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "part_001",
  "translationServiceLogId": "trans_log_abc123xyz",
  "partnerParticipantRecordId": "crm_contact_john_smith",
  "name": "John Smith",
  "isAnchor": true,
  "nativeLanguage": "en-US",
  "participantAccessId": 12345,
  "participantToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "transcriptions": [
    {
      "messageId": "msg_001",
      "speakerParticipantId": "part_001",
      "targetParticipantId": "part_002",
      "originalText": "Hello, how can I help you today?",
      "translatedText": "Hola, ¿cómo puedo ayudarte hoy?",
      "originalLanguage": "en-US",
      "targetLanguage": "es-MX",
      "provisioningConfigId": "prov_chain_en_es_v2",
      "timestamp": 1699900010000
    }
  ],
  "createdAt": 1699900000000,
  "updatedAt": 1699900010000
}
```

### Secondary Participant Example

```json
{
  "id": "part_002",
  "translationServiceLogId": "trans_log_abc123xyz",
  "partnerParticipantRecordId": "agent_maria_garcia",
  "name": "Maria Garcia",
  "isAnchor": false,
  "nativeLanguage": "es-MX",
  "participantAccessId": 12346,
  "participantToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "createdAt": 1699900001000,
  "updatedAt": 1699900015000
}
```

### Create Participant Example

```json
{
  "translationServiceLogId": "trans_log_abc123xyz",
  "name": "John Smith",
  "isAnchor": true,
  "nativeLanguage": "en-US",
  "participantAccessId": 12345,
  "participantToken": "secure_token_abc123"
}
```

---

## TranslationMessage

Individual translation message capturing the complete pipeline from speaker's speech to translated output.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | Yes | Unique identifier (UUID) |
| speakerParticipantId | string | Yes | ID of the speaking participant |
| targetParticipantId | string | Yes | ID of the receiving participant |
| originalText | string | No | Transcribed text from STT |
| translatedText | string | No | Translated text for target |
| originalLanguage | string | Yes | ISO 639-1 code of original language |
| targetLanguage | string | Yes | ISO 639-1 code of target language |
| provisioningConfigId | string | Yes | Provisioning chain that processed this message |
| timestamp | number | Yes | Unix timestamp when processed |
| metadata | object | No | Additional metadata (audio URLs, confidence, etc.) |

### Example

```json
{
  "messageId": "msg_abc123xyz",
  "speakerParticipantId": "part_001",
  "targetParticipantId": "part_002",
  "originalText": "I'd like to schedule an appointment for next Tuesday.",
  "translatedText": "Me gustaría programar una cita para el próximo martes.",
  "originalLanguage": "en-US",
  "targetLanguage": "es-MX",
  "provisioningConfigId": "prov_chain_en_es_v2",
  "timestamp": 1699900025000,
  "metadata": {
    "audio_url": "https://storage.example.com/audio/msg_abc123xyz.wav",
    "confidence_score": 0.95,
    "processing_time_ms": 450,
    "translation_model": "gpt-4-turbo",
    "stt_model": "whisper-v3",
    "tts_model": "eleven-labs-v2"
  }
}
```

### Message with Low Confidence Example

```json
{
  "messageId": "msg_def456xyz",
  "speakerParticipantId": "part_002",
  "targetParticipantId": "part_001",
  "originalText": "El número de pedido es... [inaudible]",
  "translatedText": "The order number is... [inaudible]",
  "originalLanguage": "es-MX",
  "targetLanguage": "en-US",
  "provisioningConfigId": "prov_chain_en_es_v2",
  "timestamp": 1699900030000,
  "metadata": {
    "confidence_score": 0.62,
    "low_confidence_warning": true,
    "background_noise_detected": true
  }
}
```

---

## Session Lifecycle

### Status Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRANSLATION SESSION LIFECYCLE                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                         ┌─────────┐                                  │
│                         │ ACTIVE  │                                  │
│                         └────┬────┘                                  │
│                              │                                       │
│              ┌───────────────┼───────────────┐                      │
│              │               │               │                      │
│              ▼               ▼               ▼                      │
│        ┌───────────┐  ┌───────────┐  ┌───────────┐                 │
│        │ COMPLETED │  │  FAILED   │  │ ABANDONED │                 │
│        └───────────┘  └───────────┘  └───────────┘                 │
│                                                                      │
│   ACTIVE → Session in progress, real-time translation streaming     │
│   COMPLETED → Session concluded successfully by participants        │
│   FAILED → Session encountered errors (connection, processing)      │
│   ABANDONED → Participants disconnected prematurely                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Translation Direction Modes

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TRANSLATION DIRECTIONS                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   BIDIRECTIONAL (Default)                                           │
│   ┌─────────────┐                    ┌─────────────┐               │
│   │ Participant │ ◄─────────────────► │ Participant │               │
│   │      A      │    Both receive     │      B      │               │
│   │  (English)  │    translations     │  (Spanish)  │               │
│   └─────────────┘                    └─────────────┘               │
│                                                                      │
│   UNIDIRECTIONAL                                                    │
│   ┌─────────────┐                    ┌─────────────┐               │
│   │   Speaker   │ ─────────────────► │  Listener   │               │
│   │  (English)  │   One-way only     │  (Spanish)  │               │
│   └─────────────┘                    └─────────────┘               │
│                                                                      │
│   Use Cases:                                                        │
│   - Bidirectional: Customer support, business meetings              │
│   - Unidirectional: Broadcasts, presentations, announcements        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Message Processing Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MESSAGE PROCESSING PIPELINE                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Speaker Audio                                                      │
│       │                                                              │
│       ▼                                                              │
│   ┌─────────────────┐                                               │
│   │      STT        │  Speech-to-Text                               │
│   │   (Whisper)     │  speakerParticipantId identifies speaker      │
│   └────────┬────────┘                                               │
│            │                                                         │
│            ▼ originalText                                            │
│   ┌─────────────────┐                                               │
│   │   Translation   │  originalLanguage → targetLanguage            │
│   │     (LLM)       │  e.g., en-US → es-MX                          │
│   └────────┬────────┘                                               │
│            │                                                         │
│            ▼ translatedText                                          │
│   ┌─────────────────┐                                               │
│   │      TTS        │  Text-to-Speech                               │
│   │  (ElevenLabs)   │  targetParticipantId identifies listener      │
│   └────────┬────────┘                                               │
│            │                                                         │
│            ▼                                                         │
│   Listener Audio                                                     │
│                                                                      │
│   TranslationMessage created with:                                  │
│   - Both originalText and translatedText                            │
│   - Speaker and target participant IDs                              │
│   - provisioningConfigId tracking the model chain                   │
│   - timestamp for ordering and latency analysis                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Enums

### ConversationStatus

| Value | Description |
|-------|-------------|
| active | Translation session in progress |
| completed | Session concluded successfully |
| failed | Session encountered errors |
| abandoned | Participants disconnected prematurely |

### TranslationDirection

| Value | Description |
|-------|-------------|
| bidirectional | Both participants receive translations (default) |
| unidirectional | Only one direction of translation |

---

## Query Options

### TranslationServiceLog Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across session content |
| organizationId | string | Filter by organization |
| projectId | string | Filter by project |
| status | enum | Filter by session status |
| direction | enum | Filter by translation direction |
| participantId | string | Filter by participant involvement |
| dateRange | object | Filter by date range ({ start, end }) |
| durationRange | object | Filter by duration ({ min, max }) |

### TranslationServiceLog Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | createdAt, durationInSeconds, status | Field to sort by |
| direction | asc, desc | Sort direction |

### TranslationParticipant Filters

| Field | Type | Description |
|-------|------|-------------|
| translationServiceLogId | string | Filter by session |
| nativeLanguage | string | Filter by language code |
| isAnchor | boolean | Filter by anchor status |
| partnerParticipantRecordId | string | Filter by external ID |

### TranslationParticipant Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | createdAt, name, nativeLanguage | Field to sort by |
| direction | asc, desc | Sort direction |

### Pagination

All query options support pagination:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│                 TRANSLATION CONVERSATION RELATIONSHIPS               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │   Organization   │                                              │
│   └────────┬─────────┘                                              │
│            │ 1:N                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                │
│   │   Translation    │         │   Provisioning   │                │
│   │   ServiceLog     │◄────────│   ConfigChain    │                │
│   │                  │  uses   │                  │                │
│   │  - status        │         │  - STT model     │                │
│   │  - direction     │         │  - Translation   │                │
│   │  - duration      │         │  - TTS model     │                │
│   │  - summary       │         └──────────────────┘                │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ 1:N                                                     │
│            ▼                                                         │
│   ┌──────────────────┐                                              │
│   │   Translation    │                                              │
│   │   Participant    │                                              │
│   │                  │                                              │
│   │  - nativeLanguage│                                              │
│   │  - isAnchor      │                                              │
│   │  - token         │                                              │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ 1:N (referenced by)                                    │
│            ▼                                                         │
│   ┌──────────────────┐                                              │
│   │   Translation    │                                              │
│   │   Message        │                                              │
│   │                  │                                              │
│   │  - originalText  │                                              │
│   │  - translatedText│                                              │
│   │  - speaker/target│                                              │
│   └──────────────────┘                                              │
│                                                                      │
│   Messages stored in:                                               │
│   1. TranslationServiceLog.transcribedConversationLog (always)      │
│   2. TranslationParticipant.transcriptions (if flag enabled)        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| TranslationServiceLog | Organization | N:1 | Session belongs to organization |
| TranslationServiceLog | Project | N:1 | Optional project association |
| TranslationServiceLog | ProvisioningConfigChain | N:1 | Uses translation config |
| TranslationServiceLog | TranslationParticipant | 1:N | Session has participants |
| TranslationServiceLog | TranslationMessage | 1:N | Session contains messages |
| TranslationParticipant | TranslationServiceLog | N:1 | Participant belongs to session |
| TranslationMessage | TranslationParticipant | N:1 | Message has speaker and target |

---

## Best Practices

### Session Management

1. **Set logTranscriptionInParticipantRecords wisely** - Enable for participant-specific views, disable to reduce storage when session-level logs suffice.

2. **Track partner_session_id** - Always correlate with external call/meeting systems for unified reporting.

3. **Monitor durationInSeconds** - Use for billing calculations and identifying unusually long or short sessions.

4. **Generate translationSummary** - Enable AI summaries for quality assurance and quick session review.

### Participant Handling

5. **Use isAnchor consistently** - Mark session initiators as anchors for clear role identification.

6. **Link partnerParticipantRecordId** - Connect to CRM/HR systems for unified participant profiles across sessions.

7. **Validate nativeLanguage** - Ensure language codes match supported translation pairs.

8. **Secure participantToken** - Tokens are session-scoped credentials. Never log or persist in plain text.

### Message Tracking

9. **Preserve message ordering** - Use timestamp for chronological ordering and latency analysis.

10. **Monitor confidence scores** - Low confidence_score in metadata indicates potential transcription issues.

11. **Track provisioningConfigId** - Enables analysis of which model configurations produce best results.

12. **Store audio references** - Include audio_url in metadata for quality review and dispute resolution.

### Performance

13. **Query by created_day** - Use for efficient daily aggregation and time-series reporting.

14. **Filter by organization_id** - Always scope queries to organization for multi-tenant performance.

15. **Paginate message retrieval** - For long sessions, paginate transcribedConversationLog queries.

---

## Quick Reference

### Session Creation Flow

```
TranslationServiceRequest (see translation-config.md)
         │
         ▼
TranslationServiceLog created (status: ACTIVE)
         │
         ▼
TranslationParticipant records created
         │
         ▼
WebRTC connections established
         │
         ▼
TranslationMessage records created per utterance
         │
         ▼
Session ends (status: COMPLETED/FAILED/ABANDONED)
```

### Common Query Patterns

All queries support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
