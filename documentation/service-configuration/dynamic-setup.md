# Dynamic Agent Setup

This document covers the Dynamic Agent Setup schemas for streamlined AI assistant configuration across phone and web channels.

## Table of Contents

1. [Overview](#overview)
2. [Base Setup Schemas](#base-setup-schemas)
3. [Phone Agent Setup](#phone-agent-setup)
4. [Web Agent Setup](#web-agent-setup)
5. [Model Configuration](#model-configuration)
6. [Processing State](#processing-state)
7. [Relationships](#relationships)
8. [Best Practices](#best-practices)

---

## Overview

Dynamic Agent Setup provides a simplified interface for creating and configuring AI assistants. Instead of manually creating separate Agent Configurations, Instruction Configurations, and Deployment Configurations, the dynamic setup schemas enable:

- **Unified Creation** - Single request creates all required configurations
- **Channel-Specific Settings** - Phone and web channels have tailored options
- **Async Processing** - Track progress for long-running setup operations
- **Partial Updates** - Modify existing configurations with partial data

---

## Base Setup Schemas

### DynamicBaseAgentSetup

Base schema shared by all channel-specific agent setup schemas.

#### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| assistantName | string | Yes | - | Name of the AI assistant (max 30 chars) |
| instructionConfigurationId | string | No | - | Existing instruction config to use |
| role_template_identifier | enum | No | - | Role/persona template for the agent |
| capabilities | array | No | [] | List of enabled platform services |
| knowledgeSourceIds | array | No | - | Knowledge sources to associate |
| language | string | No | en | Language ID (e.g., en, es, fr) |
| voice | string | No | - | Voice ID for voice interactions |
| providerType | enum | No | - | AI model provider (OPENAI, etc.) |
| providerModelId | string | No | - | Specific model ID from provider |

#### Example

```json
{
  "assistantName": "Sarah",
  "role_template_identifier": "CUSTOMER_SUPPORT",
  "capabilities": ["APPOINTMENT_BOOKING", "FAQ_ANSWERING"],
  "knowledgeSourceIds": ["knowledge_product_docs", "knowledge_faq"],
  "language": "en",
  "voice": "rachel",
  "providerType": "OPENAI",
  "providerModelId": "gpt-4o"
}
```

### DynamicAgentSetupResult

Result schema returned after agent setup operations.

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier for the setup result |
| processingState | object | Yes | Real-time processing state |
| success | boolean | No | Whether setup was successful |
| agentConfigurationId | string | No | ID of created agent config |
| instructionConfigurationId | string | No | ID of created instruction config |
| errorMessage | string | No | Error message if setup failed |
| metadata | object | No | Additional metadata |
| createdAt | number | Yes | Creation timestamp |
| updatedAt | number | No | Last update timestamp |

#### Example (Success)

```json
{
  "id": "setup_result_abc123",
  "processingState": {
    "status": "completed",
    "progressPercentage": 100,
    "message": "Agent setup completed successfully"
  },
  "success": true,
  "agentConfigurationId": "agent_sarah_v1",
  "instructionConfigurationId": "instr_support_sarah",
  "metadata": {
    "setupDuration": 3500,
    "channel": "phone"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900003500
}
```

#### Example (In Progress)

```json
{
  "id": "setup_result_xyz789",
  "processingState": {
    "status": "in_progress",
    "progressPercentage": 45,
    "message": "Processing knowledge sources..."
  },
  "success": null,
  "agentConfigurationId": null,
  "instructionConfigurationId": null,
  "createdAt": 1699900000000
}
```

---

## Phone Agent Setup

### DynamicPhoneAgentSetup

Extends base setup with phone-specific configuration options.

#### Additional Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| phoneConfigurationId | string | No | - | Phone configuration to use |
| testPhoneNumber | string | No | - | Phone number for testing |
| sttConfiguration | object | No | - | Speech-to-text config |
| ttsConfiguration | object | No | - | Text-to-speech config |

**Note:** Both sttConfiguration and ttsConfiguration must be provided together, or neither.

#### Example (Create Phone Agent)

```json
{
  "assistantName": "Alex",
  "role_template_identifier": "SALES_REPRESENTATIVE",
  "capabilities": ["LEAD_CAPTURE", "APPOINTMENT_BOOKING"],
  "language": "en",
  "phoneConfigurationId": "phone_config_main",
  "testPhoneNumber": "+15551234567",
  "sttConfiguration": {
    "providerType": "DEEPGRAM",
    "providerModelId": "nova-2",
    "languageId": "en"
  },
  "ttsConfiguration": {
    "providerType": "ELEVENLABS",
    "providerModelId": "eleven_multilingual_v2",
    "languageId": "en",
    "voiceId": "adam"
  }
}
```

### DynamicPhoneAgentSetupResult

Result schema for phone agent setup, extending the base result.

#### Additional Fields

| Field | Type | Description |
|-------|------|-------------|
| phoneNumber | string | Phone number associated with the configuration |

#### Example

```json
{
  "id": "setup_result_phone_001",
  "processingState": {
    "status": "completed",
    "progressPercentage": 100
  },
  "success": true,
  "agentConfigurationId": "agent_alex_phone",
  "instructionConfigurationId": "instr_sales_alex",
  "phoneNumber": "+15551234567",
  "createdAt": 1699900000000,
  "updatedAt": 1699900005000
}
```

### UpdateDynamicPhoneAgent

Schema for updating existing phone agent configurations. All fields are optional except id.

**Note:** phoneConfigurationId cannot be changed after creation.

#### Example

```json
{
  "id": "agent_alex_phone",
  "assistantName": "Alex Updated",
  "capabilities": ["LEAD_CAPTURE", "APPOINTMENT_BOOKING", "ORDER_TAKING"],
  "ttsConfiguration": {
    "providerType": "ELEVENLABS",
    "providerModelId": "eleven_turbo_v2_5",
    "languageId": "en",
    "voiceId": "rachel"
  }
}
```

---

## Web Agent Setup

### DynamicWebAgentSetup

Extends base setup with web-specific configuration options.

#### Additional Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| websiteUrl | string | Yes | - | URL of the website |
| communicationType | enum | No | UNIFIED | Communication method |
| sttConfiguration | object | No | - | Speech-to-text config |
| ttsConfiguration | object | No | - | Text-to-speech config |

**Note:** Both sttConfiguration and ttsConfiguration must be provided together, or neither.

#### Communication Types

| Type | Description |
|------|-------------|
| UNIFIED | Combined text and media communication |
| TEXT_ONLY | Text-only communication |
| MEDIA_ENABLED | Rich media support |

#### Example (Create Web Agent)

```json
{
  "assistantName": "Maya",
  "role_template_identifier": "CUSTOMER_SUPPORT",
  "capabilities": ["FAQ_ANSWERING", "TICKET_CREATION"],
  "knowledgeSourceIds": ["knowledge_help_center"],
  "language": "en",
  "websiteUrl": "https://www.example.com",
  "communicationType": "UNIFIED"
}
```

#### Example (Web Agent with Voice)

```json
{
  "assistantName": "James",
  "role_template_identifier": "SALES_REPRESENTATIVE",
  "capabilities": ["LEAD_CAPTURE", "PRODUCT_RECOMMENDATIONS"],
  "websiteUrl": "https://shop.example.com",
  "communicationType": "UNIFIED",
  "sttConfiguration": {
    "providerType": "DEEPGRAM",
    "providerModelId": "nova-2",
    "languageId": "en"
  },
  "ttsConfiguration": {
    "providerType": "ELEVENLABS",
    "providerModelId": "eleven_multilingual_v2",
    "languageId": "en",
    "voiceId": "sam"
  }
}
```

### DynamicWebAgentSetupResult

Result schema for web agent setup, extending the base result.

#### Additional Fields

| Field | Type | Description |
|-------|------|-------------|
| integrationSnippets | array | Code snippets for deploying the web assistant |

#### Example

```json
{
  "id": "setup_result_web_001",
  "processingState": {
    "status": "completed",
    "progressPercentage": 100
  },
  "success": true,
  "agentConfigurationId": "agent_maya_web",
  "instructionConfigurationId": "instr_support_maya",
  "integrationSnippets": [
    "<script src=\"https://cdn.example.com/widget.js\" data-agent=\"agent_maya_web\"></script>",
    "<div id=\"chat-widget\"></div>"
  ],
  "createdAt": 1699900000000,
  "updatedAt": 1699900004000
}
```

### UpdateDynamicWebAgent

Schema for updating existing web agent configurations. All fields are optional except id.

#### Example

```json
{
  "id": "agent_maya_web",
  "assistantName": "Maya 2.0",
  "capabilities": ["FAQ_ANSWERING", "TICKET_CREATION", "LIVE_CHAT_HANDOFF"],
  "communicationType": "MEDIA_ENABLED"
}
```

---

## Model Configuration

### DynamicModelConfiguration

Base schema for configuring AI model providers.

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| providerType | enum | Yes | AI model provider (OPENAI, ANTHROPIC, etc.) |
| providerModelId | string | Yes | Specific model ID from provider |

#### Example

```json
{
  "providerType": "OPENAI",
  "providerModelId": "gpt-4o"
}
```

### DynamicSTTModelConfiguration

Speech-to-text model configuration extending base model config.

#### Additional Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| languageId | string | No | en | Language ID for speech recognition |

#### Example

```json
{
  "providerType": "DEEPGRAM",
  "providerModelId": "nova-2",
  "languageId": "en"
}
```

### DynamicTTSModelConfiguration

Text-to-speech model configuration extending base model config.

#### Additional Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| languageId | string | No | en | Language ID for speech synthesis |
| voiceId | string | No | - | Voice ID for speech output |

#### Example

```json
{
  "providerType": "ELEVENLABS",
  "providerModelId": "eleven_multilingual_v2",
  "languageId": "en",
  "voiceId": "rachel"
}
```

---

## Processing State

### DynamicAgentProcessingState

Tracks the progress of long-running agent setup operations.

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| status | enum | Yes | Current status (pending, in_progress, completed, failed) |
| progressPercentage | number | Yes | Progress percentage (0-100) |
| message | string | No | Additional details about current state |

#### Status Values

| Status | Description |
|--------|-------------|
| pending | Setup not yet started |
| in_progress | Setup is currently running |
| completed | Setup finished successfully |
| failed | Setup encountered an error |

#### Example (Pending)

```json
{
  "status": "pending",
  "progressPercentage": 0,
  "message": "Waiting to start setup"
}
```

#### Example (In Progress)

```json
{
  "status": "in_progress",
  "progressPercentage": 65,
  "message": "Configuring voice settings..."
}
```

#### Example (Completed)

```json
{
  "status": "completed",
  "progressPercentage": 100,
  "message": "Agent setup completed successfully"
}
```

#### Example (Failed)

```json
{
  "status": "failed",
  "progressPercentage": 45,
  "message": "Failed to process knowledge source: Invalid document format"
}
```

---

## Relationships

```
+---------------------------------------------------------------------+
|              DYNAMIC AGENT SETUP RELATIONSHIPS                       |
+---------------------------------------------------------------------+
|                                                                      |
|   +---------------------------+                                      |
|   |  DynamicBaseAgentSetup    |                                      |
|   |                           |                                      |
|   |  - assistantName          |                                      |
|   |  - capabilities           |                                      |
|   |  - providerType           |                                      |
|   +-------------+-------------+                                      |
|                 |                                                    |
|        +--------+--------+                                           |
|        |                 |                                           |
|        v                 v                                           |
|   +-----------+     +-----------+                                    |
|   |  Phone    |     |   Web     |                                    |
|   |  Agent    |     |   Agent   |                                    |
|   |  Setup    |     |   Setup   |                                    |
|   |           |     |           |                                    |
|   | +phoneId  |     | +website  |                                    |
|   | +stt/tts  |     | +commType |                                    |
|   +-----------+     +-----------+                                    |
|        |                 |                                           |
|        v                 v                                           |
|   +-----------+     +-----------+                                    |
|   |  Phone    |     |   Web     |                                    |
|   |  Result   |     |   Result  |                                    |
|   |           |     |           |                                    |
|   | +phoneNum |     | +snippets |                                    |
|   +-----------+     +-----------+                                    |
|        |                 |                                           |
|        +--------+--------+                                           |
|                 |                                                    |
|                 v                                                    |
|   +---------------------------+                                      |
|   |  DynamicAgentSetupResult  |                                      |
|   |                           |                                      |
|   |  - processingState        |                                      |
|   |  - agentConfigurationId   |                                      |
|   |  - instructionConfigId    |                                      |
|   +---------------------------+                                      |
|                 |                                                    |
|                 | creates                                            |
|                 v                                                    |
|   +---------------------------+                                      |
|   |    Standard Configs       |                                      |
|   |                           |                                      |
|   |  - AgentConfiguration     |                                      |
|   |  - InstructionConfig      |                                      |
|   |  - DeploymentConfig       |                                      |
|   +---------------------------+                                      |
|                                                                      |
+---------------------------------------------------------------------+
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| DynamicPhoneAgentSetup | DynamicBaseAgentSetup | extends | Inherits base fields |
| DynamicWebAgentSetup | DynamicBaseAgentSetup | extends | Inherits base fields |
| DynamicAgentSetupResult | AgentConfiguration | creates | Setup creates agent config |
| DynamicAgentSetupResult | InstructionConfiguration | creates | Setup creates instruction config |
| DynamicPhoneAgentSetup | PhoneConfiguration | references | Uses phone config for deployment |

---

## Best Practices

### General Setup

1. **Use descriptive names** - Keep assistantName short but meaningful (max 30 chars).

2. **Start with templates** - Use role_template_identifier to get pre-configured behaviors.

3. **Associate knowledge** - Link relevant knowledgeSourceIds for domain-specific responses.

4. **Match provider and model** - Ensure providerModelId matches the providerType.

### Phone Setup

5. **Pair STT and TTS** - Always provide both or neither; they must work together.

6. **Match languages** - Ensure STT and TTS languageId values are compatible.

7. **Test before production** - Use testPhoneNumber to validate configuration.

8. **Choose appropriate voices** - Select voices that match your brand and use case.

### Web Setup

9. **Specify correct URL** - Use the exact website URL where the widget will be deployed.

10. **Consider communication type** - Choose UNIFIED for most cases, TEXT_ONLY for simple chat.

11. **Deploy integration snippets** - Use the returned integrationSnippets for widget setup.

### Processing

12. **Poll for status** - Check processingState for long-running operations.

13. **Handle failures** - Implement retry logic when status is "failed".

14. **Monitor progress** - Use progressPercentage to show users setup progress.

### Updates

15. **Use partial updates** - Only include fields you want to change.

16. **Don't change phone config** - phoneConfigurationId is immutable after creation.

---

## Quick Reference

### Setup Flow

```
Create Request --> Processing (pending)
                       |
                       v
                   Processing (in_progress)
                       |
               +-------+-------+
               |               |
               v               v
         (completed)       (failed)
               |               |
               v               v
         Return IDs      Return Error
```

### Channel Comparison

| Feature | Phone | Web |
|---------|-------|-----|
| Required Field | phoneConfigurationId (optional) | websiteUrl |
| Voice Support | STT + TTS configs | Optional STT + TTS |
| Result Extra | phoneNumber | integrationSnippets |
| Update Restriction | Cannot change phoneConfigurationId | None |

### Provider Examples

| Provider | Type | Example Model ID |
|----------|------|------------------|
| OPENAI | LLM | gpt-4o, gpt-4-turbo |
| ANTHROPIC | LLM | claude-3-sonnet |
| DEEPGRAM | STT | nova-2, whisper |
| ELEVENLABS | TTS | eleven_multilingual_v2 |
