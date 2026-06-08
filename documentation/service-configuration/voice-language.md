# Voice, Language, and Model Configuration

This document covers Voice, Language, and Wiil Support Model schemas for configuring speech synthesis, recognition, and LLM model selection.

## Table of Contents

1. [Overview](#overview)
2. [Voice Configuration](#voice-configuration)
3. [Language Configuration](#language-configuration)
4. [WiilSupportModel](#wiilsupportmodel)
5. [Enums](#enums)
6. [Relationships](#relationships)
7. [Best Practices](#best-practices)

---

## Overview

Voice and Language configurations define the speech processing capabilities:

- **Voice** - Synthetic voice options for Text-to-Speech (TTS)
- **Language** - Supported languages for Speech-to-Text (STT) and TTS
- **WiilSupportModel** - Registry of supported LLM models from various providers

These configurations are referenced by Agent Configurations and Provisioning Chains.

---

## Voice Configuration

Represents a synthetic voice option for TTS synthesis.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| voiceId | string | Yes | - | Unique identifier for the voice |
| name | string | Yes | - | Human-readable display name |
| description | string | Yes | - | Voice characteristics description |
| gender | enum | Yes | - | Gender classification (male, female, neutral) |
| language | string | No | - | Optimal language for this voice |
| isDefault | boolean | No | false | Whether this is the default voice |

### Example

```json
{
  "voiceId": "adam",
  "name": "Adam",
  "description": "Deep, authoritative male voice suitable for professional announcements and formal communications",
  "gender": "male",
  "language": "en-US",
  "isDefault": true
}
```

### Voice Collection Example

```json
[
  {
    "voiceId": "rachel",
    "name": "Rachel",
    "description": "Warm, friendly female voice ideal for customer support and conversational interactions",
    "gender": "female",
    "language": "en-US",
    "isDefault": false
  },
  {
    "voiceId": "sam",
    "name": "Sam",
    "description": "Gender-neutral voice with clear articulation, suitable for accessibility and inclusive applications",
    "gender": "neutral",
    "language": "en-US",
    "isDefault": false
  },
  {
    "voiceId": "carlos",
    "name": "Carlos",
    "description": "Professional male voice with natural Spanish accent, optimized for Latin American Spanish",
    "gender": "male",
    "language": "es-MX",
    "isDefault": true
  }
]
```

---

## Language Configuration

Represents a language supported for speech processing.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| languageId | string | Yes | - | Unique identifier for the language |
| name | string | Yes | - | Human-readable language name |
| code | string | Yes | - | ISO 639-1 code with optional region |
| isDefault | boolean | No | false | Whether this is the default language |
| isExperimental | boolean | No | false | Whether in beta/experimental support |

### Example

```json
{
  "languageId": "en-us",
  "name": "English (United States)",
  "code": "en-US",
  "isDefault": true,
  "isExperimental": false
}
```

### Language Collection Example

```json
[
  {
    "languageId": "en-us",
    "name": "English (United States)",
    "code": "en-US",
    "isDefault": true,
    "isExperimental": false
  },
  {
    "languageId": "en-gb",
    "name": "English (United Kingdom)",
    "code": "en-GB",
    "isDefault": false,
    "isExperimental": false
  },
  {
    "languageId": "es-mx",
    "name": "Spanish (Mexico)",
    "code": "es-MX",
    "isDefault": false,
    "isExperimental": false
  },
  {
    "languageId": "ja-jp",
    "name": "Japanese (Japan)",
    "code": "ja-JP",
    "isDefault": false,
    "isExperimental": true
  }
]
```

---

## WiilSupportModel

Registry entry for supported LLM models from various providers.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| modelId | string | Yes | - | Wiil Platform unique model identifier |
| proprietor | enum | Yes | - | Model provider (OPENAI, ANTHROPIC, etc.) |
| name | string | Yes | - | Human-readable model name |
| provider_model_id | string | No | - | Original provider's model ID |
| description | string | Yes | - | Model capabilities description |
| type | enum | Yes | - | LLM type (TEXT, VOICE, STT, TTS, MULTI_MODE) |
| discontinued | boolean | No | false | Whether model is discontinued |
| supportedVoices | array | No | - | Available voices (for TTS models) |
| supportLanguages | array | No | - | Supported languages |

### Example (Text Model)

```json
{
  "modelId": "YUSI21217J1",
  "proprietor": "OPENAI",
  "name": "GPT-4 Turbo",
  "provider_model_id": "gpt-4-1106-preview",
  "description": "Latest GPT-4 model with improved performance, longer context window (128k tokens), and enhanced instruction following. Recommended for complex reasoning and detailed responses.",
  "type": "TEXT",
  "discontinued": false,
  "supportedVoices": null,
  "supportLanguages": [
    {
      "languageId": "en",
      "name": "English",
      "code": "en",
      "isDefault": true
    },
    {
      "languageId": "es",
      "name": "Spanish",
      "code": "es",
      "isDefault": false
    }
  ]
}
```

### Example (TTS Model)

```json
{
  "modelId": "ELEVEN_MULTI_V2",
  "proprietor": "ELEVENLABS",
  "name": "ElevenLabs Multilingual v2",
  "provider_model_id": "eleven_multilingual_v2",
  "description": "High-quality multilingual text-to-speech model with natural prosody and emotional range. Supports 28+ languages with consistent voice quality.",
  "type": "TTS",
  "discontinued": false,
  "supportedVoices": [
    {
      "voiceId": "rachel",
      "name": "Rachel",
      "description": "Warm, friendly female voice",
      "gender": "female",
      "language": "en-US",
      "isDefault": true
    },
    {
      "voiceId": "adam",
      "name": "Adam",
      "description": "Deep, authoritative male voice",
      "gender": "male",
      "language": "en-US",
      "isDefault": false
    }
  ],
  "supportLanguages": [
    {
      "languageId": "en-us",
      "name": "English (US)",
      "code": "en-US",
      "isDefault": true
    },
    {
      "languageId": "es-es",
      "name": "Spanish (Spain)",
      "code": "es-ES",
      "isDefault": false
    }
  ]
}
```

### Example (STT Model)

```json
{
  "modelId": "WHISPER_V3",
  "proprietor": "OPENAI",
  "name": "Whisper v3",
  "provider_model_id": "whisper-1",
  "description": "State-of-the-art speech recognition model with excellent accuracy across accents and background noise. Supports automatic language detection.",
  "type": "STT",
  "discontinued": false,
  "supportedVoices": null,
  "supportLanguages": [
    {
      "languageId": "multi",
      "name": "Multilingual (Auto-detect)",
      "code": "auto",
      "isDefault": true
    },
    {
      "languageId": "en-us",
      "name": "English (US)",
      "code": "en-US",
      "isDefault": false
    }
  ]
}
```

### Example (Multi-Mode Model)

```json
{
  "modelId": "GPT4_REALTIME",
  "proprietor": "OPENAI",
  "name": "GPT-4 Realtime",
  "provider_model_id": "gpt-4o-realtime-preview",
  "description": "Real-time conversational AI with native speech-to-speech capabilities. Combines understanding, reasoning, and speech generation in a single model for natural voice interactions.",
  "type": "MULTI_MODE",
  "discontinued": false,
  "supportedVoices": [
    {
      "voiceId": "alloy",
      "name": "Alloy",
      "description": "Balanced, versatile voice",
      "gender": "neutral",
      "language": "en-US",
      "isDefault": true
    }
  ],
  "supportLanguages": [
    {
      "languageId": "en-us",
      "name": "English (US)",
      "code": "en-US",
      "isDefault": true
    }
  ]
}
```

---

## Enums

### VoiceGender

| Value | Description |
|-------|-------------|
| male | Male voice |
| female | Female voice |
| neutral | Gender-neutral voice |

### LLMType

| Value | Description |
|-------|-------------|
| TEXT | Text generation only |
| VOICE | Speech processing |
| STT | Speech-to-text only |
| TTS | Text-to-speech only |
| MULTI_MODE | Combined text and speech |

### SupportedProprietor

| Value | Description |
|-------|-------------|
| OPENAI | OpenAI (GPT models, Whisper) |
| ANTHROPIC | Anthropic (Claude models) |
| GOOGLE | Google (Gemini, PaLM) |
| ELEVENLABS | ElevenLabs (TTS voices) |
| SIGNALWIRE | SignalWire (telephony) |
| DEEPGRAM | Deepgram (STT) |
| AZURE | Microsoft Azure (various) |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│              VOICE, LANGUAGE, AND MODEL RELATIONSHIPS                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │                   WIIL SUPPORT MODEL                      │      │
│   │                                                           │      │
│   │   modelId: YUSI21217J1                                   │      │
│   │   proprietor: OPENAI                                     │      │
│   │   type: MULTI_MODE                                       │      │
│   │                                                           │      │
│   │   ┌─────────────────┐     ┌─────────────────┐           │      │
│   │   │ supportedVoices │     │supportLanguages │           │      │
│   │   │                 │     │                 │           │      │
│   │   │  - rachel       │     │  - en-US        │           │      │
│   │   │  - adam         │     │  - es-MX        │           │      │
│   │   │  - sam          │     │  - fr-FR        │           │      │
│   │   └─────────────────┘     └─────────────────┘           │      │
│   └──────────────────────────────┬───────────────────────────┘      │
│                                  │                                   │
│                                  │ referenced by                     │
│                                  ▼                                   │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │                  AGENT CONFIGURATION                      │      │
│   │                                                           │      │
│   │   modelId: YUSI21217J1  ◄──── References registry        │      │
│   │                                                           │      │
│   │   requiredModelConfig: {                                 │      │
│   │     voiceId: "rachel",    ◄──── From supportedVoices     │      │
│   │     languageId: "en-US"   ◄──── From supportLanguages    │      │
│   │   }                                                       │      │
│   └──────────────────────────────────────────────────────────┘      │
│                                                                      │
│                                                                      │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │              PROVISIONING CONFIG CHAIN                    │      │
│   │                                                           │      │
│   │   sttConfig: {                                           │      │
│   │     modelId: "WHISPER_V3",  ◄──── STT model              │      │
│   │     defaultLanguage: "en-US"                             │      │
│   │   }                                                       │      │
│   │                                                           │      │
│   │   ttsConfig: {                                           │      │
│   │     modelId: "ELEVEN_MULTI_V2",  ◄──── TTS model         │      │
│   │     voiceId: "rachel",                                   │      │
│   │     defaultLanguage: "en-US"                             │      │
│   │   }                                                       │      │
│   └──────────────────────────────────────────────────────────┘      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| AgentConfiguration | WiilSupportModel | N:1 | Agents reference models |
| WiilSupportModel | Voice | 1:N | TTS models have voices |
| WiilSupportModel | Language | 1:N | Models support languages |
| ProvisioningConfigChain | WiilSupportModel | N:1 | Chains reference STT/TTS models |

---

## Best Practices

### Voice Selection

1. **Match voice to brand** - Choose voices that align with your brand personality.

2. **Consider target audience** - Select voices appropriate for your demographic.

3. **Use language-optimized voices** - Choose voices optimized for the target language.

4. **Test multiple voices** - A/B test different voices to find the best fit.

### Language Configuration

5. **Start with defaults** - Use isDefault languages as starting points.

6. **Handle experimental carefully** - Languages with isExperimental may have limited accuracy.

7. **Match STT and TTS languages** - Ensure consistency across the voice pipeline.

8. **Support regional variants** - Use region-specific codes (en-US vs en-GB) for better accuracy.

### Model Selection

9. **Use appropriate model types** - Match LLMType to your use case (TEXT for chat, MULTI_MODE for voice).

10. **Check discontinued status** - Avoid discontinued models for new deployments.

11. **Verify provider capabilities** - Different providers excel at different tasks.

12. **Consider latency** - Some models are faster; consider this for real-time voice.

### Model Registry

13. **Use Wiil modelId** - Always use the Wiil Platform modelId, not provider_model_id.

14. **Verify voice availability** - Check supportedVoices before configuring TTS.

15. **Check language support** - Verify supportLanguages includes your target languages.

---

## Quick Reference

### Model Types by Use Case

| Use Case | LLMType | Example Models |
|----------|---------|----------------|
| Text chat | TEXT | GPT-4, Claude 3 |
| Voice calls | MULTI_MODE | GPT-4 Realtime |
| Speech recognition | STT | Whisper, Deepgram Nova |
| Speech synthesis | TTS | ElevenLabs, Azure Neural |

### Common Language Codes

| Code | Language |
|------|----------|
| en-US | English (United States) |
| en-GB | English (United Kingdom) |
| es-ES | Spanish (Spain) |
| es-MX | Spanish (Mexico) |
| fr-FR | French (France) |
| de-DE | German (Germany) |
| ja-JP | Japanese (Japan) |
| zh-CN | Chinese (Simplified) |
| pt-BR | Portuguese (Brazil) |

### Voice Selection Guide

| Scenario | Recommended Voice Type |
|----------|----------------------|
| Customer support | Warm, friendly female |
| Enterprise sales | Professional, authoritative |
| Accessibility | Clear, gender-neutral |
| Regional market | Native accent for region |
