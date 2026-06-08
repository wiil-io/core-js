# Deployment Configuration and Channels

This document covers Deployment Configuration and Deployment Channel schemas, the central composition entities for deploying AI agents across multiple channels.

## Table of Contents

1. [Overview](#overview)
2. [DeploymentConfiguration](#deploymentconfiguration)
3. [DeploymentChannel](#deploymentchannel)
4. [Channel Types](#channel-types)
5. [Enums](#enums)
6. [Relationships](#relationships)
7. [Best Practices](#best-practices)

---

## Overview

Deployment Configuration is the central composition entity that brings together:

- **Agent Configuration** - Core behavior and capabilities
- **Instruction Configuration** - Behavioral guidelines
- **Deployment Channel** - Communication endpoint (1:1 relationship)
- **Provisioning Chain** - Voice processing pipeline (optional, for CHAINED type)

Each deployment exposes an agent through exactly one channel. Multi-channel deployments require separate Deployment Configurations per channel.

---

## DeploymentConfiguration

Central composition entity for deployable agent units.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| projectId | string | Yes | - | Project for organizational grouping |
| deploymentChannelId | string | Yes | - | Associated channel (1:1) |
| deploymentName | string | No | - | Human-readable name |
| agentConfigurationId | string | Yes | - | Agent configuration reference |
| instructionConfigurationId | string | Yes | - | Instruction reference |
| deploymentStatus | enum | Yes | - | Current operational status |
| provisioningType | enum | Yes | DIRECT | Processing type |
| provisioningConfigChainId | string | No | - | Voice chain (for CHAINED) |
| isActive | boolean | Yes | false | Whether accepting interactions |
| channel | object | No | - | Populated channel details |
| project | object | No | - | Populated project details |
| agent | object | No | - | Populated agent details |
| instruction | object | No | - | Populated instruction details |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "deploy_abc123xyz",
  "projectId": "proj_customer_support",
  "deploymentChannelId": "channel_phone_main",
  "deploymentName": "Production Customer Support Line",
  "agentConfigurationId": "agent_sarah_v2",
  "instructionConfigurationId": "instr_support_guidelines",
  "deploymentStatus": "ACTIVE",
  "provisioningType": "CHAINED",
  "provisioningConfigChainId": "chain_voice_en_us",
  "isActive": true,
  "channel": {
    "id": "channel_phone_main",
    "deploymentType": "CALLS",
    "channelIdentifier": "+12125551234",
    "recordingEnabled": true
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Create Deployment Example (Direct)

```json
{
  "projectId": "proj_website",
  "deploymentChannelId": "channel_web_chat",
  "deploymentName": "Website Chat Widget",
  "agentConfigurationId": "agent_james_web",
  "instructionConfigurationId": "instr_sales_v3",
  "isActive": false
}
```

### Create Deployment Example (Chained Voice)

```json
{
  "projectId": "proj_call_center",
  "deploymentChannelId": "channel_phone_sales",
  "deploymentName": "Sales Hotline",
  "agentConfigurationId": "agent_sales_voice",
  "instructionConfigurationId": "instr_sales_phone",
  "provisioningConfigChainId": "chain_voice_multilingual",
  "deploymentStatus": "PENDING",
  "provisioningType": "CHAINED",
  "isActive": false
}
```

---

## DeploymentChannel

Defines the communication channel through which a deployment is accessible.

### Base Fields (All Channel Types)

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| deploymentType | enum | Yes | - | Channel type (CALLS, SMS, WEB, MOBILE) |
| channelName | string | No | - | Human-readable name |
| channelIdentifier | string | Yes | - | Type-specific identifier |
| recordingEnabled | boolean | Yes | true | Whether to record interactions |
| configuration | object | Yes | - | Type-specific configuration |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

---

## Channel Types

### 1. Call Channel (Voice Telephony)

For inbound and outbound phone calls.

**Configuration Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| phoneConfigurationId | string | Yes | Reference to PhoneConfiguration |

**Example:**

```json
{
  "id": "channel_phone_001",
  "deploymentType": "CALLS",
  "channelName": "Main Support Line",
  "channelIdentifier": "+12125551234",
  "recordingEnabled": true,
  "configuration": {
    "phoneConfigurationId": "phone_config_main"
  }
}
```

### 2. SMS Channel (Text Messaging)

For SMS-based text communication.

**Configuration Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| phoneConfigurationId | string | Yes | Reference to PhoneConfiguration |

**Example:**

```json
{
  "id": "channel_sms_001",
  "deploymentType": "SMS",
  "channelName": "SMS Support",
  "channelIdentifier": "+12125551234",
  "recordingEnabled": true,
  "configuration": {
    "phoneConfigurationId": "phone_config_main"
  }
}
```

### 3. Web Channel (Chat Widget)

For browser-based chat widgets.

**Configuration Fields:**

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| communicationType | enum | No | UNIFIED | OTT communication type |
| widgetConfiguration | object | No | - | Widget appearance settings |
| widgetConfiguration.position | enum | No | right | Widget position (left/right) |
| widgetConfiguration.customTheme | object | No | {} | Custom theme properties |

**Example:**

```json
{
  "id": "channel_web_001",
  "deploymentType": "WEB",
  "channelName": "Website Chat",
  "channelIdentifier": "https://www.example.com",
  "recordingEnabled": true,
  "configuration": {
    "communicationType": "UNIFIED",
    "widgetConfiguration": {
      "position": "right",
      "customTheme": {
        "primaryColor": "#007bff",
        "fontFamily": "Inter, sans-serif"
      }
    }
  }
}
```

### 4. Mobile App Channel (Native Apps)

For iOS and Android native applications.

**Configuration Fields:**

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| packageName | string | No | "" | App bundle ID / package name |
| platform | enum | No | IOS | Target platform (IOS, ANDROID) |

**Example:**

```json
{
  "id": "channel_mobile_001",
  "deploymentType": "MOBILE",
  "channelName": "iOS App Chat",
  "channelIdentifier": "com.example.myapp",
  "recordingEnabled": true,
  "configuration": {
    "packageName": "com.example.myapp",
    "platform": "IOS"
  }
}
```

---

## Enums

### DeploymentType

| Value | Description |
|-------|-------------|
| CALLS | Voice telephony channel |
| SMS | Text messaging channel |
| WEB | Browser chat widget |
| MOBILE | Native mobile app |

### DeploymentStatus

| Value | Description |
|-------|-------------|
| PENDING | Created, awaiting activation |
| ACTIVE | Operational, accepting interactions |
| SUSPENDED | Temporarily paused |
| FAILED | Encountered errors |

### DeploymentProvisioningType

| Value | Description |
|-------|-------------|
| DIRECT | Agent processes directly (text-based) |
| CHAINED | Uses provisioning chain (voice: STT → Agent → TTS) |

### OttCommunicationType

| Value | Description |
|-------|-------------|
| UNIFIED | Combined text/media communication |
| TEXT_ONLY | Text-only communication |
| MEDIA_ENABLED | Rich media support |

### MobilePlatform

| Value | Description |
|-------|-------------|
| IOS | Apple iOS |
| ANDROID | Google Android |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│              DEPLOYMENT CONFIGURATION RELATIONSHIPS                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │     Project      │                                              │
│   └────────┬─────────┘                                              │
│            │ N:1                                                     │
│            ▼                                                         │
│   ┌──────────────────────────────────────────────────────────┐     │
│   │              DEPLOYMENT CONFIGURATION                     │     │
│   │                                                           │     │
│   │  projectId ────────────────────────────► Project         │     │
│   │  agentConfigurationId ─────────────────► AgentConfig     │     │
│   │  instructionConfigurationId ───────────► InstructionConfig│     │
│   │  deploymentChannelId ──────────────────► DeploymentChannel│     │
│   │  provisioningConfigChainId ────────────► ProvisioningChain│     │
│   │                                           (optional)      │     │
│   └──────────────────────────────────────────────────────────┘     │
│                                                                      │
│            │ 1:1                                                     │
│            ▼                                                         │
│   ┌──────────────────────────────────────────────────────────┐     │
│   │              DEPLOYMENT CHANNEL                           │     │
│   │                                                           │     │
│   │   ┌────────────┐  ┌────────────┐  ┌────────────┐        │     │
│   │   │   CALLS    │  │    SMS     │  │    WEB     │        │     │
│   │   │            │  │            │  │            │        │     │
│   │   │ +1555...   │  │ +1555...   │  │ example.com│        │     │
│   │   │            │  │            │  │            │        │     │
│   │   │ phoneConfig│  │ phoneConfig│  │ widgetConfig│       │     │
│   │   └────────────┘  └────────────┘  └────────────┘        │     │
│   │                                                           │     │
│   └──────────────────────────────────────────────────────────┘     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| DeploymentConfiguration | Project | N:1 | Deployments belong to projects |
| DeploymentConfiguration | AgentConfiguration | N:1 | Multiple deployments can share an agent |
| DeploymentConfiguration | InstructionConfiguration | N:1 | Multiple deployments can share instructions |
| DeploymentConfiguration | DeploymentChannel | 1:1 | Each deployment has exactly one channel |
| DeploymentConfiguration | ProvisioningConfigChain | N:1 | Voice deployments reference chains |
| DeploymentChannel | PhoneConfiguration | N:1 | Phone channels reference phone configs |

---

## Best Practices

### Deployment Configuration

1. **Use meaningful names** - deploymentName should clearly identify the deployment's purpose.

2. **Start with isActive: false** - Activate deployments only after testing.

3. **Match provisioningType to channel** - Use CHAINED for voice, DIRECT for text-based channels.

4. **Group by project** - Use projects to organize related deployments.

### Channel Configuration

5. **One channel per deployment** - For multi-channel, create separate deployments sharing the same agent.

6. **Enable recording appropriately** - Consider privacy regulations when enabling recordingEnabled.

7. **Validate phone numbers** - Ensure E.164 format for telephony channels.

8. **Configure widgets for brand** - Use customTheme to match website branding for web channels.

### Multi-Channel Deployments

9. **Share configurations** - Use the same agent and instruction across channels for consistency.

10. **Customize per channel** - Adjust introduction messages per channel type if needed.

11. **Consider channel-specific instructions** - Phone conversations differ from text chat.

### Status Management

12. **Use PENDING for setup** - New deployments should start in PENDING status.

13. **SUSPEND rather than delete** - Temporarily disable with SUSPENDED for maintenance.

14. **Monitor FAILED status** - Implement alerts for deployments entering FAILED state.

---

## Quick Reference

### Deployment Setup Flow

```
1. Create AgentConfiguration
         │
         ▼
2. Create InstructionConfiguration
         │
         ▼
3. Create DeploymentChannel
         │
         ▼
4. (Optional) Create ProvisioningConfigChain (for voice)
         │
         ▼
5. Create DeploymentConfiguration
         │
         ▼
6. Set isActive: true to go live
```

### Channel Type Summary

| Channel | channelIdentifier | Configuration | Provisioning |
|---------|-------------------|---------------|--------------|
| CALLS | Phone number (E.164) | phoneConfigurationId | CHAINED |
| SMS | Phone number (E.164) | phoneConfigurationId | DIRECT |
| WEB | Website URL | widgetConfiguration | DIRECT |
| MOBILE | App package name | packageName, platform | DIRECT |

### Status Transitions

```
PENDING ──► ACTIVE ──► SUSPENDED ──► ACTIVE
    │                       │
    └───────────────────────┴──► FAILED
```
