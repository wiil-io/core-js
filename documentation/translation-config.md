# Translation Configuration Overview

This document provides comprehensive documentation for the Translation Configuration system, covering the request and connection schemas for initiating real-time language translation sessions.

## Table of Contents

1. [Overview](#overview)
2. [TranslationServiceRequest](#translationservicerequest)
3. [TranslationConversationConfig](#translationconversationconfig)
4. [Translation Flow](#translation-flow)
5. [Language Codes](#language-codes)
6. [Relationships](#relationships)
7. [Best Practices](#best-practices)

---

## Overview

The Translation Configuration system enables real-time language translation sessions between participants speaking different languages. It provides:

- **Session initiation** for translation service requests
- **WebRTC connection credentials** for peer-to-peer audio streaming
- **Bidirectional translation** supporting multiple language pairs
- **Participant authentication** with session-scoped credentials

Translation sessions support cross-language communication through:
1. Speech-to-Text (STT) transcription
2. Language translation via LLM
3. Text-to-Speech (TTS) synthesis

**Use Cases:**
- Customer calling support in a different language than the agent
- International business calls requiring real-time translation
- Multilingual conference calls with language bridges

---

## TranslationServiceRequest

Request payload for initiating a real-time translation session between two participants.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| initiator_id | string | Yes | - | Unique identifier for the initiator participant |
| initiator_language_code | string | Yes | - | ISO 639-1 language code of the initiator's language |
| participant_language_code | string | Yes | - | ISO 639-1 language code of the other participant's language |
| session_id | string | No | - | Optional session ID for tracking related requests |
| translation_config_id | string | No | - | Optional translation configuration for specific provisioning |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "trans_req_abc123xyz",
  "initiator_id": "caller_john_smith",
  "initiator_language_code": "en-US",
  "participant_language_code": "es-MX",
  "session_id": "session_call_456",
  "translation_config_id": "prov_chain_translation_v2",
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Create Request Example

```json
{
  "initiator_id": "caller_john_smith",
  "initiator_language_code": "en-US",
  "participant_language_code": "es-MX",
  "session_id": "session_call_456"
}
```

### Multi-Language Session Example

```json
{
  "initiator_id": "customer_tokyo_branch",
  "initiator_language_code": "ja-JP",
  "participant_language_code": "de-DE",
  "translation_config_id": "prov_chain_asian_european"
}
```

---

## TranslationConversationConfig

Configuration returned when a translation session is successfully initiated, containing WebRTC connection parameters and participant credentials.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| sdrtn_id | string | No | SDRTN identifier for WebRTC connections |
| channel_identifier | string | Yes | Unique identifier for the communication channel |
| initiator_access_id | string | Yes | Access identifier for the initiator's WebRTC connection |
| initiator_token | string | Yes | Authentication token for the initiator |
| participant_access_id | string | Yes | Access identifier for the participant's WebRTC connection |
| participant_token | string | Yes | Authentication token for the participant |

### Example

```json
{
  "sdrtn_id": "sdrtn_webrtc_789xyz",
  "channel_identifier": "+12125551234",
  "initiator_access_id": "access_init_001",
  "initiator_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpbml0XzAwMSIsImV4cCI6MTY5OTkwMzYwMH0...",
  "participant_access_id": "access_part_002",
  "participant_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYXJ0XzAwMiIsImV4cCI6MTY5OTkwMzYwMH0..."
}
```

### WebRTC Channel Example

```json
{
  "sdrtn_id": "sdrtn_conf_room_456",
  "channel_identifier": "webrtc_channel_meeting_123",
  "initiator_access_id": "access_host_001",
  "initiator_token": "token_host_secure_abc123",
  "participant_access_id": "access_guest_002",
  "participant_token": "token_guest_secure_def456"
}
```

---

## Translation Flow

### Session Initiation Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRANSLATION SESSION INITIATION                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Client                          Server                            │
│     │                               │                                │
│     │  TranslationServiceRequest    │                                │
│     │  ─────────────────────────►  │                                │
│     │  {                            │                                │
│     │    initiator_id,              │                                │
│     │    initiator_language_code,   │  1. Validate request           │
│     │    participant_language_code  │  2. Create TranslationServiceLog│
│     │  }                            │  3. Create participant records │
│     │                               │  4. Provision WebRTC channel   │
│     │                               │                                │
│     │  TranslationConversationConfig│                                │
│     │  ◄─────────────────────────  │                                │
│     │  {                            │                                │
│     │    sdrtn_id,                  │                                │
│     │    initiator_access_id,       │                                │
│     │    initiator_token,           │                                │
│     │    participant_access_id,     │                                │
│     │    participant_token          │                                │
│     │  }                            │                                │
│     │                               │                                │
│     ▼                               ▼                                │
│                                                                      │
│   Both participants connect using their respective                   │
│   access_id and token for authenticated WebRTC streaming             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Real-Time Translation Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                    REAL-TIME TRANSLATION PIPELINE                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Participant A (English)              Participant B (Spanish)       │
│         │                                       │                    │
│         │ "Hello, how can I help you?"          │                    │
│         │                                       │                    │
│         ▼                                       │                    │
│   ┌─────────────┐                               │                    │
│   │    STT      │ Speech-to-Text                │                    │
│   │  (Whisper)  │                               │                    │
│   └──────┬──────┘                               │                    │
│          │ "Hello, how can I help you?"         │                    │
│          ▼                                      │                    │
│   ┌─────────────┐                               │                    │
│   │ Translation │ English → Spanish             │                    │
│   │   (LLM)     │                               │                    │
│   └──────┬──────┘                               │                    │
│          │ "Hola, ¿cómo puedo ayudarte?"        │                    │
│          ▼                                      │                    │
│   ┌─────────────┐                               │                    │
│   │    TTS      │ Text-to-Speech                │                    │
│   │ (ElevenLabs)│                               │                    │
│   └──────┬──────┘                               │                    │
│          │                                      │                    │
│          └──────────────────────────────────────►                    │
│                                       🔊 Audio in Spanish            │
│                                                                      │
│   (Same pipeline runs in reverse for B → A)                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Language Codes

The system uses ISO 639-1 language codes with optional regional variants.

### Common Language Codes

| Code | Language | Region |
|------|----------|--------|
| en-US | English | United States |
| en-GB | English | United Kingdom |
| es-ES | Spanish | Spain |
| es-MX | Spanish | Mexico |
| fr-FR | French | France |
| de-DE | German | Germany |
| ja-JP | Japanese | Japan |
| zh-CN | Chinese | Simplified (Mainland) |
| zh-TW | Chinese | Traditional (Taiwan) |
| ko-KR | Korean | South Korea |
| pt-BR | Portuguese | Brazil |
| it-IT | Italian | Italy |
| ru-RU | Russian | Russia |
| ar-SA | Arabic | Saudi Arabia |
| hi-IN | Hindi | India |

### Language Code Format

```
[language]-[REGION]
    │         │
    │         └── Optional 2-letter ISO 3166-1 country code (uppercase)
    │
    └── 2-letter ISO 639-1 language code (lowercase)
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRANSLATION CONFIG RELATIONSHIPS                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────────┐                                          │
│   │  Translation         │                                          │
│   │  ServiceRequest      │                                          │
│   │                      │                                          │
│   │  - initiator_id      │                                          │
│   │  - initiator_lang    │                                          │
│   │  - participant_lang  │                                          │
│   │  - session_id        │                                          │
│   └──────────┬───────────┘                                          │
│              │                                                       │
│              │ initiates                                             │
│              ▼                                                       │
│   ┌──────────────────────┐         ┌──────────────────────┐        │
│   │  Translation         │         │  Provisioning        │        │
│   │  ConversationConfig  │◄────────│  ConfigChain         │        │
│   │                      │  uses   │  (isTranslation=true)│        │
│   │  - sdrtn_id          │         │                      │        │
│   │  - channel_identifier│         │  - STT model         │        │
│   │  - initiator_token   │         │  - Translation LLM   │        │
│   │  - participant_token │         │  - TTS model         │        │
│   └──────────┬───────────┘         └──────────────────────┘        │
│              │                                                       │
│              │ creates                                               │
│              ▼                                                       │
│   ┌──────────────────────┐                                          │
│   │  Translation         │                                          │
│   │  ServiceLog          │◄─── See translation-conversation.md      │
│   │                      │                                          │
│   │  - participants[]    │                                          │
│   │  - messages[]        │                                          │
│   │  - status            │                                          │
│   └──────────────────────┘                                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| TranslationServiceRequest | TranslationServiceLog | 1:1 | Request creates a session log |
| TranslationServiceRequest | ProvisioningConfigChain | N:1 | Uses specific translation config |
| TranslationConversationConfig | TranslationServiceLog | 1:1 | Config for active session |
| TranslationConversationConfig | TranslationParticipant | 1:N | Credentials for participants |

---

## Best Practices

### Session Initiation

1. **Validate language codes** - Ensure both initiator_language_code and participant_language_code are valid ISO 639-1 codes with regional variants for optimal translation quality.

2. **Use session_id for grouping** - Set session_id to correlate multiple translation requests in conference scenarios or session resumption.

3. **Specify translation_config_id** - Use explicit translation configuration for specific language pairs that require specialized models or quality tuning.

### Connection Management

4. **Store tokens securely** - The initiator_token and participant_token are short-lived credentials. Never log or persist these in plain text.

5. **Handle token expiration** - Implement reconnection logic for sessions interrupted by token expiration.

6. **Use sdrtn_id for WebRTC** - The SDRTN identifier is essential for establishing peer-to-peer audio connections with low latency.

### Language Pairs

7. **Consider regional variants** - Use regional language codes (en-US vs en-GB) for better accent recognition and culturally appropriate translations.

8. **Test uncommon pairs** - Some language pairs may have lower translation quality. Test thoroughly before production deployment.

9. **Plan for asymmetric fluency** - In customer support scenarios, agents may have partial fluency in customer languages. Configure translation direction appropriately.

### Integration

10. **Link to external systems** - Use initiator_id to correlate with CRM or help desk participant records for unified customer profiles.

---

## Quick Reference

### Request Flow

```
TranslationServiceRequest
         │
         ▼
TranslationConversationConfig (credentials returned)
         │
         ▼
WebRTC Connection Established
         │
         ▼
TranslationServiceLog Created (see translation-conversation.md)
```

### Required Fields for Session Start

| Field | Example |
|-------|---------|
| initiator_id | "customer_12345" |
| initiator_language_code | "en-US" |
| participant_language_code | "es-MX" |
