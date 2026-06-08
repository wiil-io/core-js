# Service Configuration System Overview

This document provides comprehensive documentation for the Service Configuration system, the core architecture for managing AI agents, deployments, and multi-channel interactions.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Core Components](#core-components)
4. [Configuration Layers](#configuration-layers)
5. [Deployment Patterns](#deployment-patterns)
6. [Related Documentation](#related-documentation)

---

## Overview

The Service Configuration system is the foundational architecture for managing AI-powered conversational agents. It provides:

- **Agent Configuration** - Core behavior, capabilities, and LLM model selection
- **Instruction Configuration** - Behavioral guidelines, prompts, and conversation patterns
- **Deployment Configuration** - Central composition bringing together agents, instructions, and channels
- **Deployment Channels** - Multi-channel access (phone, SMS, web, mobile)
- **Knowledge Sources** - Domain knowledge and contextual information for agents
- **Provisioning Chains** - Voice processing pipelines (STT → Agent → TTS)
- **Telephony Management** - Phone numbers, configurations, and call transfer

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SERVICE CONFIGURATION ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     DEPLOYMENT CONFIGURATION                         │   │
│   │                    (Central Composition Entity)                      │   │
│   │                                                                      │   │
│   │   Brings together all components into a deployable unit             │   │
│   └──────────────────────────────┬──────────────────────────────────────┘   │
│                                  │                                           │
│           ┌──────────────────────┼──────────────────────┐                   │
│           │                      │                      │                   │
│           ▼                      ▼                      ▼                   │
│   ┌───────────────┐    ┌─────────────────┐    ┌─────────────────┐         │
│   │    Agent      │    │  Instruction    │    │   Deployment    │         │
│   │ Configuration │    │  Configuration  │    │    Channel      │         │
│   │               │    │                 │    │                 │         │
│   │ - modelId     │    │ - role          │    │ - type (phone,  │         │
│   │ - name        │    │ - instructions  │    │   SMS, web)     │         │
│   │ - capabilities│    │ - guardrails    │    │ - identifier    │         │
│   │ - call_transfer│   │ - knowledge[]   │    │ - config        │         │
│   └───────┬───────┘    └────────┬────────┘    └─────────────────┘         │
│           │                     │                                          │
│           │                     │                                          │
│           ▼                     ▼                                          │
│   ┌───────────────┐    ┌─────────────────┐                                │
│   │  Wiil Support │    │   Knowledge     │                                │
│   │    Model      │    │    Sources      │                                │
│   │               │    │                 │                                │
│   │ - proprietor  │    │ - documents     │                                │
│   │ - voices[]    │    │ - URLs          │                                │
│   │ - languages[] │    │ - websites      │                                │
│   └───────────────┘    └─────────────────┘                                │
│                                                                              │
│   FOR VOICE DEPLOYMENTS:                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                   PROVISIONING CONFIG CHAIN                          │   │
│   │                                                                      │   │
│   │   User Speech → [STT] → Text → [Agent] → Text → [TTS] → Agent Speech│   │
│   │                                                                      │   │
│   │   sttConfig          agentConfigurationId       ttsConfig           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Agent Configuration

Defines the core behavior, capabilities, and personality of AI agents.

| Component | Purpose |
|-----------|---------|
| modelId | LLM model from Wiil Support Registry |
| name | Agent's personal name (e.g., "Sarah") |
| defaultFunctionState | Operational mode (TEXT, VOICE, MULTI_MODE) |
| instructionConfigurationId | Reference to behavioral guidelines |
| assistantType | Channel specialization (GENERAL, WEB, PHONE) |
| call_transfer_config | Call transfer rules for phone deployments |

**Documentation:** [agent-config.md](agent-config.md)

### 2. Instruction Configuration

The heart of agent behavior - contains prompts, guidelines, and conversation patterns.

| Component | Purpose |
|-----------|---------|
| role | Persona the agent adopts |
| introductionMessage | Initial greeting |
| instructions | Detailed behavioral guidelines |
| guardrails | Safety and compliance constraints |
| supportedServices | Enabled business tools |
| knowledgeSourceIds | Referenced knowledge bases |

**Documentation:** [agent-config.md](agent-config.md)

### 3. Deployment Configuration

Central composition entity bringing together all components.

| Component | Purpose |
|-----------|---------|
| projectId | Organizational grouping |
| deploymentChannelId | Communication channel (1:1) |
| agentConfigurationId | Agent behavior reference |
| instructionConfigurationId | Behavioral guidelines |
| provisioningType | DIRECT or CHAINED processing |
| deploymentStatus | PENDING, ACTIVE, SUSPENDED, FAILED |

**Documentation:** [deployment-config.md](deployment-config.md)

### 4. Deployment Channels

Communication channels through which deployments are accessible.

| Channel Type | Use Case |
|--------------|----------|
| CALLS | Voice telephony (inbound/outbound) |
| SMS | Text messaging |
| WEB | Browser chat widget |
| MOBILE | Native iOS/Android apps |

**Documentation:** [deployment-config.md](deployment-config.md)

### 5. Knowledge Sources

Domain knowledge and contextual information for agents.

| Source Type | Description |
|-------------|-------------|
| DOCUMENT | PDF, Word, text files |
| URL | Single web page |
| BUSINESS_WEBSITE | Full site crawl |
| CORPUS | Document collections |
| BATCH_DOCUMENT | Multiple files |

**Documentation:** [knowledge-provisioning.md](knowledge-provisioning.md)

### 6. Provisioning Chains

Voice processing pipelines for CHAINED deployments.

| Stage | Purpose |
|-------|---------|
| STT | Speech-to-Text (user voice → text) |
| Agent | Text processing and response generation |
| TTS | Text-to-Speech (agent text → voice) |

**Documentation:** [knowledge-provisioning.md](knowledge-provisioning.md)

### 7. Telephony Management

Phone numbers and telephony configuration.

| Component | Purpose |
|-----------|---------|
| PhoneConfiguration | Manages phone number resources |
| PhoneNumberPurchase | Phone acquisition lifecycle |

**Documentation:** [telephony.md](telephony.md)

### 8. Dynamic Agent Setup

Streamlined agent creation for phone and web channels.

| Component | Purpose |
|-----------|---------|
| DynamicPhoneAgentSetup | Phone agent configuration |
| DynamicWebAgentSetup | Web agent configuration |
| DynamicAgentSetupResult | Setup result with processing state |

**Documentation:** [dynamic-setup.md](dynamic-setup.md)

---

## Configuration Layers

The Service Configuration uses a layered approach:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LAYER 1: FOUNDATIONS                          │
│                                                                      │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│   │ Wiil Support    │  │   Knowledge     │  │     Voice/      │    │
│   │    Models       │  │    Sources      │  │   Languages     │    │
│   │                 │  │                 │  │                 │    │
│   │ LLM registry    │  │ Domain info     │  │ TTS/STT config  │    │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘    │
├─────────────────────────────────────────────────────────────────────┤
│                      LAYER 2: CONFIGURATIONS                         │
│                                                                      │
│   ┌─────────────────────────┐  ┌─────────────────────────┐         │
│   │   Agent Configuration   │  │ Instruction Configuration│         │
│   │                         │  │                          │         │
│   │   Uses: Models          │  │   Uses: Knowledge        │         │
│   │   Defines: Capabilities │  │   Defines: Behavior      │         │
│   └─────────────────────────┘  └─────────────────────────┘         │
├─────────────────────────────────────────────────────────────────────┤
│                       LAYER 3: DEPLOYMENT                            │
│                                                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │              Deployment Configuration                        │   │
│   │                                                              │   │
│   │   Composes: Agent + Instruction + Channel                   │   │
│   │   Optional: Provisioning Chain (for voice)                  │   │
│   └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                        LAYER 4: CHANNELS                             │
│                                                                      │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐      │
│   │   Phone   │  │    SMS    │  │    Web    │  │  Mobile   │      │
│   │  (Calls)  │  │           │  │  (Chat)   │  │   (App)   │      │
│   └───────────┘  └───────────┘  └───────────┘  └───────────┘      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Deployment Patterns

### Pattern 1: Direct Text Deployment (Web Chat)

```
User → Web Channel → Deployment → Agent → Response → User
```

- provisioningType: DIRECT
- No voice processing needed
- Text-based interaction

### Pattern 2: Chained Voice Deployment (Phone)

```
User Speech → STT → Text → Agent → Text → TTS → Agent Speech
```

- provisioningType: CHAINED
- Requires ProvisioningConfigChain
- Full voice processing pipeline

### Pattern 3: Multi-Channel Agent

One agent, multiple channels:

```
┌───────────────────────────────────────────────────────────────┐
│                     SHARED RESOURCES                           │
│   ┌─────────────────┐       ┌─────────────────────────┐      │
│   │    Agent        │       │    Instruction          │      │
│   │  Configuration  │       │    Configuration        │      │
│   └────────┬────────┘       └───────────┬─────────────┘      │
│            │                            │                     │
│            └──────────┬─────────────────┘                     │
│                       │                                       │
│      ┌────────────────┼────────────────┐                     │
│      │                │                │                     │
│      ▼                ▼                ▼                     │
│ ┌──────────┐   ┌──────────┐   ┌──────────┐                  │
│ │Deployment│   │Deployment│   │Deployment│                  │
│ │ (Phone)  │   │  (SMS)   │   │  (Web)   │                  │
│ └──────────┘   └──────────┘   └──────────┘                  │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

## Related Documentation

| Document | Description |
|----------|-------------|
| [agent-config.md](agent-config.md) | Agent and Instruction configuration details |
| [deployment-config.md](deployment-config.md) | Deployment and channel configuration |
| [telephony.md](telephony.md) | Phone configuration and number management |
| [voice-language.md](voice-language.md) | Voice, language, and model registry |
| [knowledge-provisioning.md](knowledge-provisioning.md) | Knowledge sources and provisioning chains |
| [dynamic-setup.md](dynamic-setup.md) | Dynamic agent setup for phone and web |

---

## Key Relationships Summary

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| DeploymentConfiguration | AgentConfiguration | N:1 | Multiple deployments can share an agent |
| DeploymentConfiguration | InstructionConfiguration | N:1 | Multiple deployments can share instructions |
| DeploymentConfiguration | DeploymentChannel | 1:1 | Each deployment has exactly one channel |
| DeploymentConfiguration | ProvisioningConfigChain | N:1 | Voice deployments reference a chain |
| AgentConfiguration | InstructionConfiguration | N:1 | Multiple agents can share instructions |
| AgentConfiguration | WiilSupportModel | N:1 | Agents reference models from registry |
| InstructionConfiguration | KnowledgeSource | N:N | Instructions reference multiple sources |
| PhoneConfiguration | DeploymentChannel | 1:N | One phone can have voice + SMS channels |
