# Agent and Instruction Configuration

This document covers Agent Configuration and Instruction Configuration schemas, the core components that define AI agent behavior and capabilities.

## Table of Contents

1. [Overview](#overview)
2. [AgentConfiguration](#agentconfiguration)
3. [InstructionConfiguration](#instructionconfiguration)
4. [CallTransferConfig](#calltransferconfig)
5. [Relationships](#relationships)
6. [Best Practices](#best-practices)

---

## Overview

Agent and Instruction configurations work together to define complete AI agent personas:

- **Agent Configuration** - Defines capabilities, model selection, and operational mode
- **Instruction Configuration** - Defines behavioral guidelines, prompts, and conversation flow

Together they create reusable, composable agent personas that can be deployed across multiple channels.

---

## AgentConfiguration

Defines the core behavior, capabilities, and personality of AI agents.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| modelId | string | Yes | - | LLM model ID from Wiil Support Registry |
| name | string | Yes | - | Agent's personal name (max 30 chars) |
| defaultFunctionState | enum | Yes | MULTI_MODE | Operational mode (TEXT, VOICE, MULTI_MODE) |
| usesWiilSupportModel | boolean | No | true | Whether using Wiil registry model |
| requiredModelConfig | object | No | - | Additional model parameters |
| useCustomModel | boolean | No | false | Opt out of platform default model configurations and only use the specified modelId and requiredModelConfig |
| textProcessingModelId | string \| null | No | - | Specific model ID for text processing, if different from the main modelId |
| instructionConfigurationId | string | Yes | - | Reference to instruction configuration |
| assistantType | enum | Yes | GENERAL | Channel specialization |
| call_transfer_config | array | No | [] | Call transfer rules for phone |
| metadata | object | No | - | Additional custom metadata |
| model | object | No | - | Auto-populated model information |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "agent_abc123xyz",
  "modelId": "YUSI21217J1",
  "name": "Sarah",
  "defaultFunctionState": "MULTI_MODE",
  "usesWiilSupportModel": true,
  "requiredModelConfig": {
    "voiceId": "rachel",
    "languageId": "en-US",
    "temperature": 0.7
  },
  "useCustomModel": false,
  "textProcessingModelId": null,
  "instructionConfigurationId": "instr_456def",
  "assistantType": "PHONE",
  "call_transfer_config": [
    {
      "transfer_number": "+15551234567",
      "transfer_type": "warm",
      "transfer_conditions": ["speak to sales", "talk to manager"]
    }
  ],
  "metadata": {
    "department": "customer_support",
    "version": "2.1"
  },
  "model": {
    "modelId": "YUSI21217J1",
    "proprietor": "OPENAI",
    "name": "GPT-4 Turbo",
    "type": "MULTI_MODE"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Create Agent Example

```json
{
  "modelId": "YUSI21217J1",
  "name": "James",
  "defaultFunctionState": "TEXT",
  "usesWiilSupportModel": true,
  "instructionConfigurationId": "instr_789ghi",
  "assistantType": "WEB",
  "metadata": {
    "team": "sales"
  }
}
```

### Enums

#### LLMType (defaultFunctionState)

| Value | Description |
|-------|-------------|
| TEXT | Text-only processing |
| VOICE | Speech processing |
| MULTI_MODE | Combined text and voice |
| STT | Speech-to-text only |
| TTS | Text-to-speech only |

#### AssistantType

| Value | Description |
|-------|-------------|
| GENERAL | Multi-channel support |
| WEB | Optimized for web chat |
| PHONE | Optimized for telephony |
| EMAIL | Optimized for email |

---

## InstructionConfiguration

The heart of agent behavior - contains prompts, guidelines, and conversation patterns.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| instructionName | string | Yes | - | System-readable name |
| role | string | Yes | - | Persona the agent adopts |
| introductionMessage | string | Yes | - | Initial greeting message |
| instructions | string | Yes | - | Detailed behavioral guidelines |
| guardrails | string | Yes | - | Safety and compliance constraints |
| requiredSkills | array | No | - | Required capabilities |
| validationRules | object | No | - | Input/output validation rules |
| serviceId | string | No | - | Associated service ID |
| supportedServices | array | No | [] | Enabled business tools |
| tools | array | No | - | Tool identifiers agent can use |
| isTemplate | boolean | No | false | Whether this is a reusable template |
| isPrimary | boolean | Yes | false | Whether this is the primary template |
| metadata | object | No | - | Additional metadata |
| knowledgeSourceIds | array | No | [] | Referenced knowledge sources |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "instr_abc123xyz",
  "instructionName": "customer-support-agent",
  "role": "Customer Support Specialist",
  "introductionMessage": "Hello! I'm Sarah, your customer support specialist. How can I help you today?",
  "instructions": "You are a helpful and professional customer support agent for Acme Corporation. Your primary responsibilities include:\n\n1. Answering product questions accurately\n2. Helping customers with order status and tracking\n3. Processing returns and refunds when appropriate\n4. Escalating complex issues to human agents\n\nAlways maintain a friendly, professional tone. If you don't know the answer, acknowledge this and offer to connect the customer with a specialist.",
  "guardrails": "NEVER:\n- Share customer personal data with unauthorized parties\n- Make promises about delivery dates without verification\n- Process refunds over $500 without human approval\n- Discuss competitor products negatively\n- Share internal pricing strategies\n\nALWAYS:\n- Verify customer identity before discussing account details\n- Offer to escalate when the customer expresses frustration\n- Follow up on unresolved issues",
  "requiredSkills": [
    "order_management",
    "appointment_booking",
    "faq_answering"
  ],
  "supportedServices": [
    "PRODUCT_ORDER_MANAGEMENT",
    "APPOINTMENT_MANAGEMENT"
  ],
  "knowledgeSourceIds": [
    "knowledge_product_docs",
    "knowledge_company_policies"
  ],
  "isTemplate": false,
  "isPrimary": false,
  "metadata": {
    "version": "3.0",
    "lastReviewed": "2024-11-01"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Create Instruction Example

```json
{
  "instructionName": "sales-representative",
  "role": "Sales Representative",
  "introductionMessage": "Hi! I'm James from Acme Sales. I'd love to help you find the perfect solution for your needs.",
  "instructions": "You are a knowledgeable sales representative. Help customers understand our products and guide them toward solutions that fit their needs. Be consultative, not pushy.",
  "guardrails": "Never make false claims about products. Always be transparent about pricing. Escalate enterprise deals to the sales team.",
  "supportedServices": [
    "PRODUCT_ORDER_MANAGEMENT"
  ],
  "knowledgeSourceIds": [
    "knowledge_product_catalog"
  ],
  "isTemplate": false,
  "isPrimary": false
}
```

### Supported Business Services

| Service | Description |
|---------|-------------|
| PRODUCT_ORDER_MANAGEMENT | Product browsing and ordering |
| APPOINTMENT_MANAGEMENT | Scheduling and calendar management |
| RESERVATION_MANAGEMENT | Booking management |
| CUSTOMER_SUPPORT | Support ticket handling |

---

## CallTransferConfig

Defines call transfer rules for phone-based deployments.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| transfer_number | string | Yes | - | Phone number in E.164 format |
| transfer_type | enum | Yes | blind | Transfer type (blind or warm) |
| transfer_conditions | array | Yes | - | Trigger conditions for transfer |

### Example

```json
{
  "transfer_number": "+15551234567",
  "transfer_type": "warm",
  "transfer_conditions": [
    "speak to sales",
    "talk to a human",
    "escalate to manager",
    "billing question"
  ]
}
```

### Transfer Types

| Type | Description |
|------|-------------|
| blind | Immediate transfer without announcement |
| warm | Announced transfer where recipient can accept/decline |

### Multiple Transfer Configurations

```json
{
  "call_transfer_config": [
    {
      "transfer_number": "+15551111111",
      "transfer_type": "warm",
      "transfer_conditions": ["sales inquiry", "pricing question", "new customer"]
    },
    {
      "transfer_number": "+15552222222",
      "transfer_type": "warm",
      "transfer_conditions": ["technical support", "product issue", "troubleshooting"]
    },
    {
      "transfer_number": "+15553333333",
      "transfer_type": "blind",
      "transfer_conditions": ["billing", "payment", "invoice"]
    },
    {
      "transfer_number": "+15559999999",
      "transfer_type": "warm",
      "transfer_conditions": ["emergency", "urgent", "manager"]
    }
  ]
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│              AGENT & INSTRUCTION RELATIONSHIPS                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │  Wiil Support    │                                              │
│   │     Model        │                                              │
│   │                  │                                              │
│   │ - modelId        │                                              │
│   │ - proprietor     │                                              │
│   │ - voices[]       │                                              │
│   │ - languages[]    │                                              │
│   └────────┬─────────┘                                              │
│            │ N:1                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                │
│   │     Agent        │         │   Instruction    │                │
│   │  Configuration   │────────►│  Configuration   │                │
│   │                  │   N:1   │                  │                │
│   │ - modelId        │         │ - role           │                │
│   │ - name           │         │ - instructions   │                │
│   │ - assistantType  │         │ - guardrails     │                │
│   │ - call_transfer  │         │ - knowledge[]    │                │
│   └────────┬─────────┘         └────────┬─────────┘                │
│            │                            │                           │
│            │ N:1                        │ 1:N                       │
│            ▼                            ▼                           │
│   ┌──────────────────┐         ┌──────────────────┐                │
│   │   Deployment     │         │   Knowledge      │                │
│   │  Configuration   │         │    Source        │                │
│   │                  │         │                  │                │
│   │ Uses agent for   │         │ Provides context │                │
│   │ deployments      │         │ and information  │                │
│   └──────────────────┘         └──────────────────┘                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| AgentConfiguration | InstructionConfiguration | N:1 | Multiple agents can share instructions |
| AgentConfiguration | WiilSupportModel | N:1 | Agents reference models |
| InstructionConfiguration | KnowledgeSource | 1:N | Instructions reference knowledge |
| DeploymentConfiguration | AgentConfiguration | N:1 | Deployments use agents |

---

## Best Practices

### Agent Configuration

1. **Use descriptive names** - Agent names should be human-friendly and memorable (Sarah, James, Alex).

2. **Match assistantType to channel** - Use PHONE for telephony, WEB for chat widgets, GENERAL for multi-channel.

3. **Configure call transfers** - For phone deployments, always define transfer options for human escalation.

4. **Use metadata for organization** - Track department, version, team ownership in metadata.

### Instruction Configuration

5. **Be specific in instructions** - Detailed instructions produce better agent behavior than vague ones.

6. **Define clear guardrails** - Explicitly state what the agent should never do for safety and compliance.

7. **Link knowledge sources** - Connect relevant documentation to improve agent accuracy.

8. **Use templates wisely** - Create templates for common patterns, then customize for specific use cases.

### Call Transfer

9. **Use warm transfers for important calls** - Sales and support escalations benefit from warm transfers.

10. **Define specific conditions** - Clear transfer conditions prevent unnecessary escalations.

11. **Include emergency escalation** - Always have a path to human agents for urgent situations.

### Reusability

12. **Share instructions across agents** - One instruction set can govern multiple agent personas.

13. **Version your configurations** - Track versions in metadata for change management.

14. **Test before deployment** - Validate agent behavior in test deployments before production.

---

## Quick Reference

### Agent Types

| Type | Channel | Use Case |
|------|---------|----------|
| GENERAL | Any | Multi-purpose agents |
| WEB | Chat widget | Website support |
| PHONE | Telephony | Voice interactions |
| EMAIL | Email | Async communication |

### Common Configuration Patterns

| Pattern | Agent Config | Instruction Config |
|---------|--------------|-------------------|
| Support Bot | MULTI_MODE, GENERAL | Support-focused instructions |
| Sales Agent | TEXT, WEB | Sales-focused, product knowledge |
| Phone IVR | VOICE, PHONE | Call handling, transfers |
| Email Assistant | TEXT, EMAIL | Async, detailed responses |
