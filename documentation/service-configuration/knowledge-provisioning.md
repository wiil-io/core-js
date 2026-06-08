# Knowledge Sources and Provisioning Chains

This document covers Knowledge Source and Provisioning Configuration Chain schemas for managing domain knowledge and voice processing pipelines.

## Table of Contents

1. [Overview](#overview)
2. [KnowledgeSource](#knowledgesource)
3. [ProvisioningConfigChain](#provisioningconfigchain)
4. [TranslationChainConfig](#translationchainconfig)
5. [STT/TTS Model Configs](#stttts-model-configs)
6. [Enums](#enums)
7. [Relationships](#relationships)
8. [Best Practices](#best-practices)

---

## Overview

### Knowledge Sources

Knowledge Sources provide domain knowledge for AI agents:

- **Documents** - PDFs, Word docs, text files
- **URLs** - Single web pages
- **Business Websites** - Full site crawls
- **Corpus** - Document collections
- **Batch Documents** - Multiple file uploads

### Provisioning Chains

Provisioning Chains orchestrate voice processing:

```
User Speech → [STT] → Text → [Agent] → Text → [TTS] → Agent Speech
```

- **STT Stage** - Speech-to-Text conversion
- **Agent Stage** - Text processing and response
- **TTS Stage** - Text-to-Speech synthesis

---

## KnowledgeSource

Provides contextual information and domain knowledge for AI agents.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Human-readable name |
| sourceType | enum | Yes | - | Type of knowledge source |
| request_success | boolean | Yes | - | Whether creation request succeeded |
| processingStatus | enum | Yes | PENDING | Current processing status |
| content | string | No | - | Raw extracted content |
| prepped_content | string | No | - | Processed content for AI |
| content_path | string | No | - | Storage path for raw content |
| prepped_content_path | string | No | - | Storage path for processed content |
| original_content_url | string | No | - | Original source URL |
| stored_content_url | string | No | - | Cloud storage URL for raw |
| prepped_content_url | string | No | - | Cloud storage URL for processed |
| content_size | number | No | - | Raw content size in bytes |
| prepped_content_size | number | No | - | Processed content size |
| storage_tier | enum | Yes | FIRESTORE | Current storage tier |
| last_accessed | number | No | - | Last access timestamp |
| access_count | number | Yes | 0 | Number of accesses |
| is_compressed | boolean | Yes | false | Whether content is compressed |
| compression_ratio | number | No | - | Compression ratio if compressed |
| metadata | object | No | {} | Additional metadata |
| original_content_type | string | No | - | Original MIME type |
| content_hash | string | No | - | Content hash for deduplication |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example (Document)

```json
{
  "id": "knowledge_product_docs",
  "name": "Product Documentation v3.0",
  "sourceType": "DOCUMENT",
  "request_success": true,
  "processingStatus": "COMPLETED",
  "content": "# Product Manual\n\nWelcome to our product documentation...",
  "prepped_content": "## Product Overview\nThis documentation covers the key features and usage guidelines for Product X...",
  "content_size": 45000,
  "prepped_content_size": 52000,
  "storage_tier": "FIRESTORE",
  "access_count": 156,
  "is_compressed": false,
  "metadata": {
    "version": "3.0",
    "department": "product",
    "lastReviewed": "2024-11-01"
  },
  "original_content_type": "application/pdf",
  "content_hash": "sha256:abc123def456...",
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Example (URL)

```json
{
  "id": "knowledge_faq_page",
  "name": "Company FAQ Page",
  "sourceType": "URL",
  "request_success": true,
  "processingStatus": "COMPLETED",
  "original_content_url": "https://www.example.com/faq",
  "content": "Frequently Asked Questions...",
  "prepped_content": "## FAQ Content\n\n**Q: What are your business hours?**\nA: We are open Monday-Friday 9am-5pm...",
  "storage_tier": "FIRESTORE",
  "access_count": 89,
  "metadata": {
    "crawledAt": 1699900000000,
    "pageTitle": "FAQ - Example Company"
  },
  "createdAt": 1699900000000
}
```

### Example (Business Website Crawl)

```json
{
  "id": "knowledge_website_crawl",
  "name": "Company Website Knowledge Base",
  "sourceType": "BUSINESS_WEBSITE",
  "request_success": true,
  "processingStatus": "COMPLETED",
  "original_content_url": "https://www.example.com",
  "content_path": "knowledge/org-123/website/content.json",
  "prepped_content_path": "knowledge/org-123/website/prepped.json",
  "stored_content_url": "https://storage.example.com/knowledge/org-123/website/content.json",
  "prepped_content_url": "https://storage.example.com/knowledge/org-123/website/prepped.json",
  "content_size": 2500000,
  "prepped_content_size": 3200000,
  "storage_tier": "CLOUD_STORAGE",
  "access_count": 45,
  "is_compressed": true,
  "compression_ratio": 0.65,
  "metadata": {
    "pagesProcessed": 150,
    "crawlDepth": 3,
    "excludedPaths": ["/admin", "/internal"]
  },
  "createdAt": 1699900000000
}
```

---

## ProvisioningConfigChain

Orchestrates the complete voice interaction pipeline.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| chainName | string | Yes | - | Human-readable name |
| description | string | No | - | Chain purpose description |
| sttConfig | object | Yes | - | Speech-to-Text configuration |
| agentConfigurationId | string | Yes | - | Agent configuration reference |
| ttsConfig | object | Yes | - | Text-to-Speech configuration |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "chain_customer_support_en",
  "chainName": "Customer Support Voice Chain (English)",
  "description": "Voice processing chain for English customer support calls with high-quality TTS",
  "sttConfig": {
    "modelId": "WHISPER_V3",
    "defaultLanguage": "en-US"
  },
  "agentConfigurationId": "agent_support_voice",
  "ttsConfig": {
    "modelId": "ELEVEN_MULTI_V2",
    "voiceId": "rachel",
    "defaultLanguage": "en-US",
    "voiceSettings": {
      "stability": 0.75,
      "similarity_boost": 0.5
    }
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Create Chain Request Example

```json
{
  "chainName": "Multilingual Sales Pipeline",
  "description": "Voice pipeline supporting English and Spanish for sales calls",
  "sttConfig": {
    "providerType": "Deepgram",
    "providerModelId": "nova-2",
    "languageId": "en"
  },
  "processingConfig": {
    "providerType": "OpenAI",
    "providerModelId": "gpt-4o-mini"
  },
  "ttsConfig": {
    "providerType": "ElevenLabs",
    "providerModelId": "eleven_multilingual_v2",
    "languageId": "en",
    "voiceId": "rachel"
  }
}
```

---

## TranslationChainConfig

Extends provisioning chains with real-time translation capabilities.

### Additional Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| processingModelId | string | Yes | - | LLM model for translation |
| isTranslation | boolean | Yes | true | Flag indicating translation chain |

### Example

```json
{
  "id": "chain_translation_en_es",
  "chainName": "English-Spanish Translation Chain",
  "description": "Real-time translation between English speakers and Spanish agents",
  "sttConfig": {
    "modelId": "WHISPER_V3",
    "defaultLanguage": "en-US"
  },
  "processingModelId": "GPT4_TRANSLATOR",
  "ttsConfig": {
    "modelId": "ELEVEN_MULTI_V2",
    "voiceId": "carlos",
    "defaultLanguage": "es-MX"
  },
  "isTranslation": true,
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Translation Pipeline Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRANSLATION PIPELINE                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   English Speaker                        Spanish Agent               │
│         │                                      ▲                     │
│         │ "Hello, how can I help?"             │                     │
│         ▼                                      │                     │
│   ┌─────────────┐                              │                     │
│   │    STT      │  Speech-to-Text              │                     │
│   │  (en-US)    │                              │                     │
│   └──────┬──────┘                              │                     │
│          │ "Hello, how can I help?"            │                     │
│          ▼                                     │                     │
│   ┌─────────────┐                              │                     │
│   │ Translation │  English → Spanish           │                     │
│   │   (LLM)     │                              │                     │
│   └──────┬──────┘                              │                     │
│          │ "Hola, ¿cómo puedo ayudarte?"       │                     │
│          ▼                                     │                     │
│   ┌─────────────┐                              │                     │
│   │    TTS      │  Text-to-Speech              │                     │
│   │  (es-MX)    │                              │                     │
│   └──────┬──────┘                              │                     │
│          │                                     │                     │
│          └─────────────────────────────────────┘                     │
│                                                                      │
│   (Reverse direction works the same way)                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## STT/TTS Model Configs

### SttModelConfig

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| modelId | string | Yes | - | STT model identifier |
| defaultLanguage | string | No | en-US | Default language code |

### TtsModelConfig

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| modelId | string | Yes | - | TTS model identifier |
| voiceId | string | Yes | - | Voice identifier |
| defaultLanguage | string | No | en-US | Default language code |
| voiceSettings | object | No | - | Voice-specific settings |

### Voice Settings Example

```json
{
  "voiceSettings": {
    "stability": 0.75,
    "similarity_boost": 0.5,
    "pitch": 1.0,
    "speed": 1.1,
    "style": "conversational"
  }
}
```

---

## Enums

### KnowledgeTypes

| Value | Description |
|-------|-------------|
| DOCUMENT | Single document (PDF, Word, etc.) |
| URL | Single web page |
| BUSINESS_WEBSITE | Full website crawl |
| CORPUS | Document collection |
| BATCH_DOCUMENT | Multiple file upload |

### KnowledgeBaseProcessingStatus

| Value | Description |
|-------|-------------|
| PENDING | Awaiting processing |
| PROCESSING | Currently being processed |
| COMPLETED | Processing complete, ready to use |
| FAILED | Processing encountered errors |

### StorageTier

| Value | Description |
|-------|-------------|
| FIRESTORE | Fast access, stored in database |
| CLOUD_STORAGE | Cost-effective, stored in cloud storage |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│              KNOWLEDGE & PROVISIONING RELATIONSHIPS                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │   Instruction    │                                              │
│   │  Configuration   │                                              │
│   │                  │                                              │
│   │ knowledgeSource- │                                              │
│   │ Ids: [...]       │                                              │
│   └────────┬─────────┘                                              │
│            │ 1:N                                                     │
│            ▼                                                         │
│   ┌──────────────────┐                                              │
│   │  Knowledge       │                                              │
│   │   Source         │                                              │
│   │                  │                                              │
│   │ Provides domain  │                                              │
│   │ knowledge to     │                                              │
│   │ agents           │                                              │
│   └──────────────────┘                                              │
│                                                                      │
│                                                                      │
│   ┌──────────────────┐                                              │
│   │   Deployment     │                                              │
│   │  Configuration   │                                              │
│   │                  │                                              │
│   │ provisioningType:│                                              │
│   │   CHAINED        │                                              │
│   │                  │                                              │
│   │ provisioningConf-│                                              │
│   │ igChainId: xxx   │                                              │
│   └────────┬─────────┘                                              │
│            │ N:1                                                     │
│            ▼                                                         │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │              PROVISIONING CONFIG CHAIN                    │      │
│   │                                                           │      │
│   │   ┌─────────┐      ┌─────────┐      ┌─────────┐         │      │
│   │   │   STT   │ ──►  │  Agent  │ ──►  │   TTS   │         │      │
│   │   │ Config  │      │ Config  │      │ Config  │         │      │
│   │   └─────────┘      └─────────┘      └─────────┘         │      │
│   │                                                           │      │
│   └──────────────────────────────────────────────────────────┘      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| InstructionConfiguration | KnowledgeSource | 1:N | Instructions reference knowledge |
| DeploymentConfiguration | ProvisioningConfigChain | N:1 | Voice deployments use chains |
| ProvisioningConfigChain | AgentConfiguration | N:1 | Chains use agents |
| ProvisioningConfigChain | WiilSupportModel | N:N | Chains reference STT/TTS models |

---

## Best Practices

### Knowledge Sources

1. **Name descriptively** - Use clear names that indicate content type and version.

2. **Monitor processing status** - Ensure sources reach COMPLETED before referencing.

3. **Track access patterns** - High access_count sources should stay in FIRESTORE tier.

4. **Use compression for large content** - Enable compression for cost efficiency.

5. **Maintain metadata** - Store version info, department, and review dates.

6. **Hash for deduplication** - Use content_hash to detect duplicate uploads.

### Provisioning Chains

7. **Match languages** - Ensure STT and TTS defaultLanguage are appropriate for your use case.

8. **Test voice settings** - Adjust stability, pitch, and speed for optimal quality.

9. **Consider latency** - Choose models that balance quality with response time.

10. **Use descriptive chain names** - Include language and purpose in the name.

### Translation Chains

11. **Set correct source/target languages** - STT language should match the speaker, TTS should match the listener.

12. **Use high-quality translation models** - Translation accuracy is critical for communication.

13. **Test both directions** - Verify translation works correctly in both directions.

### Storage Management

14. **Monitor storage tiers** - Move infrequently accessed content to CLOUD_STORAGE.

15. **Clean up failed sources** - Remove or retry sources stuck in FAILED status.

16. **Version knowledge content** - Track versions when content is updated.

---

## Quick Reference

### Knowledge Source Types

| Type | Use Case | Example |
|------|----------|---------|
| DOCUMENT | Single file | Product manual PDF |
| URL | Single page | FAQ page |
| BUSINESS_WEBSITE | Full site | Company knowledge base |
| CORPUS | Collection | Training materials |
| BATCH_DOCUMENT | Multiple files | Policy documents |

### Processing Status Flow

```
PENDING ──► PROCESSING ──► COMPLETED
                │
                └──► FAILED
```

### Provisioning Chain Types

| Type | Use Case | isTranslation |
|------|----------|---------------|
| Standard | Voice conversations | false |
| Translation | Cross-language | true |

### Storage Tier Selection

| Scenario | Recommended Tier |
|----------|-----------------|
| Frequently accessed | FIRESTORE |
| Large content (>1MB) | CLOUD_STORAGE |
| Rarely accessed | CLOUD_STORAGE |
| Real-time required | FIRESTORE |
