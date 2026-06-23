# Service Conversation System Overview

This document provides comprehensive documentation for the Service Conversation system, covering conversation records, message schemas, summaries, and conversation lifecycle management.

## Table of Contents

1. [Overview](#overview)
2. [ServiceConversationConfig](#serviceconversationconfig)
3. [ConversationSummary](#conversationsummary)
4. [Message Types](#message-types)
5. [ConversationContext](#conversationcontext)
6. [CallTransfer](#calltransfer)
7. [ConversationStateHistory](#conversationstatehistory)
8. [Query Options](#query-options)
9. [Enums](#enums)
10. [Relationships](#relationships)
11. [Best Practices](#best-practices)

---

## Overview

The Service Conversation system tracks individual interaction sessions between users and AI agents across multiple communication channels. It provides:

- **Multi-channel support** for phone, SMS, web chat, email, and WhatsApp conversations
- **Message history** with support for user, AI agent, human agent, and system messages
- **AI-generated summaries** with sentiment analysis and action items
- **Conversation context** for deep-linking to products, services, or resources
- **Call transfer tracking** for telephony escalations to human agents
- **State history** for audit trails and lifecycle tracking

**Note:** ServiceConversationConfig is a **readonly** model - conversations are created and managed by the platform, not directly by API consumers.

---

## ServiceConversationConfig

The main conversation record tracking an individual interaction session.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| channel_id | string | Yes | - | ID of the deployment channel (phone, SMS, web, email) |
| project_id | string | Yes | - | Project this conversation belongs to |
| deployment_config_id | string | Yes | - | Deployment configuration powering this conversation |
| channel_identifier | string | Yes | - | Communication endpoint (phone number, chat ID, email) |
| instruction_config_id | string | No | - | Optional instruction override for A/B testing |
| partner_user_id | string | No | - | External user identifier from CRM/help desk |
| conversation_type | enum | Yes | - | Type of conversation channel |
| model_id | string | No | - | AI model ID override |
| user_id | number | No | - | Internal platform user ID |
| created_at | number | No | current time | Creation timestamp (milliseconds) |
| messages | array | No | - | Array of conversation messages |
| is_campaign | boolean | Yes | false | Whether part of outbound campaign |
| customer_id | string | No | - | Customer/contact ID from CRM |
| location_id | string | No | - | Business location ID |
| status | enum | No | - | Current conversation status |
| durationInSeconds | number | No | 15 | Conversation duration for billing |
| stt_model_id | string | No | - | Speech-to-Text model ID |
| tts_model_id | string | No | - | Text-to-Speech model ID |
| conversationSummary | object | No | - | AI-generated summary |
| created_day | string | No | - | Creation date (YYYY-MM-DD format) |
| state_history | array | No | - | Status change audit trail |
| updated_at | number | No | - | Last modification timestamp |
| deleted_at | number | No | - | Soft-delete timestamp |
| is_test_conversation | boolean | Yes | false | Whether this is a test conversation |
| conversation_context | object | No | - | Deep-linking context |

### Example

```json
{
  "id": "conv_abc123xyz",
  "channel_id": "ch_phone_main",
  "project_id": "proj_restaurant_ai",
  "deployment_config_id": "deploy_prod_v2",
  "channel_identifier": "+12125551234",
  "conversation_type": "TELEPHONY_CALL",
  "model_id": "gpt-4-turbo",
  "user_id": null,
  "created_at": 1699900000000,
  "messages": [
    {
      "message_type": "user",
      "content": "Hi, I'd like to make a reservation for tonight",
      "timestamp": "2024-11-13T18:00:00.000Z",
      "user_message_id": "msg_user_001"
    },
    {
      "message_type": "assistant",
      "content": "I'd be happy to help you with a reservation! How many guests will be dining tonight?",
      "timestamp": "2024-11-13T18:00:02.000Z",
      "assistant_message_id": "msg_asst_001",
      "last_user_message_id": "msg_user_001"
    }
  ],
  "is_campaign": false,
  "customer_id": "cust_jane_doe",
  "location_id": "loc_downtown",
  "status": "active",
  "durationInSeconds": 145,
  "stt_model_id": "whisper-v3",
  "tts_model_id": "eleven-labs-v2",
  "conversationSummary": {
    "summary": "Customer called to make a dinner reservation for 4 guests at 7:30 PM.",
    "keyPoints": ["Reservation for 4 guests", "7:30 PM tonight", "Downtown location"],
    "actionItems": ["Confirm reservation", "Send confirmation SMS"],
    "sentiment": "positive"
  },
  "created_day": "2024-11-13",
  "state_history": [
    { "status": "pending", "timestamp": 1699900000000 },
    { "status": "active", "timestamp": 1699900002000 }
  ],
  "is_test_conversation": false,
  "conversation_context": {
    "locationId": "loc_downtown",
    "serviceId": "svc_reservations"
  }
}
```

---

## ConversationSummary

AI-generated summary capturing the essence of a conversation.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| summary | string | Yes | Brief overview of the conversation |
| keyPoints | array | No | List of key discussion points |
| actionItems | array | No | Follow-up actions identified |
| sentiment | enum | Yes | Overall conversation sentiment |
| topics | array | No | Topics discussed in the conversation |
| resolutionStatus | string | No | Whether the issue was resolved |

### Example

```json
{
  "summary": "Customer inquired about return policy for a defective product purchased last week. Agent provided return instructions and initiated RMA process.",
  "keyPoints": [
    "Product purchased 5 days ago",
    "Defective power button",
    "Customer wants replacement not refund"
  ],
  "actionItems": [
    "Send RMA shipping label",
    "Process replacement order when return received",
    "Follow up in 5 business days"
  ],
  "sentiment": "neutral",
  "topics": ["returns", "product defect", "customer service"],
  "resolutionStatus": "pending_return"
}
```

---

## Message Types

Conversations support multiple message types for different senders and channels.

### UserChatMessage

Message sent by the end user/customer in chat.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_type | literal | Yes | Fixed to 'user' |
| content | string | Yes | Message content |
| timestamp | date | Yes | When the message was sent |
| metadata | object | No | Additional message metadata |
| user_message_id | string | Yes | Unique identifier for this message |

### AssistantChatMessage

Message sent by the AI agent in chat.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_type | literal | Yes | Fixed to 'assistant' |
| content | string | Yes | Message content |
| timestamp | date | Yes | When the message was sent |
| metadata | object | No | Additional message metadata |
| assistant_message_id | string | Yes | Unique identifier for this message |
| last_user_message_id | string | No | ID of the user message being responded to |

### HumanAgentChatMessage

Message sent by a human support agent after handover.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_type | literal | Yes | Fixed to 'human_agent' |
| content | string | Yes | Message content |
| timestamp | date | Yes | When the message was sent |
| metadata | object | No | Additional message metadata |
| agent_message_id | string | Yes | Unique identifier for this message |
| agent_session_id | string | Yes | Agent workforce session ID |
| last_user_message_id | string | No | ID of the user message being responded to |

### SystemMessage

System-generated message for tracking events.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_type | literal | Yes | Fixed to 'system' |
| content | string | Yes | Event description |
| timestamp | date | Yes | When the event occurred |
| system_message_id | string | Yes | Unique identifier for this message |
| event_type | enum | Yes | Type of system event |
| metadata | object | No | Event-specific metadata |

### Email Message Types

For EMAIL conversations, use `UserEmailMessage`, `AssistantEmailMessage`, or `HumanAgentEmailMessage` which include an additional `subject` field for email thread continuity.

### Message Examples

```json
{
  "message_type": "user",
  "content": "I need help with my order #12345",
  "timestamp": "2024-11-13T18:00:00.000Z",
  "user_message_id": "msg_user_001",
  "metadata": {
    "channel": "web_chat",
    "browser": "Chrome"
  }
}
```

```json
{
  "message_type": "system",
  "content": "Conversation transferred to human agent",
  "timestamp": "2024-11-13T18:05:00.000Z",
  "system_message_id": "msg_sys_001",
  "event_type": "handover_completed",
  "metadata": {
    "agent_id": "agent_john",
    "queue": "tier_2_support",
    "wait_time_seconds": 45
  }
}
```

---

## ConversationContext

Optional context to guide conversations with deep-linking support.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message | string | No | Auto-sends as the user's first message |
| productId | string | No | Deep-link to a specific product |
| menuItemId | string | No | Deep-link to a menu item |
| serviceId | string | No | Deep-link to a service |
| propertyId | string | No | Deep-link to a property |
| resourceId | string | No | Deep-link to a resource (rental/room) |
| requiredServiceId | string | No | Pre-select a required service |
| locationId | string | No | Context of a specific business location |

### Example

```json
{
  "message": "I want to learn more about this product",
  "productId": "prod_wireless_earbuds",
  "locationId": "loc_manhattan"
}
```

---

## CallTransfer

Tracks call transfer details for telephony conversations.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| transferType | string | Yes | Type of transfer (warm, cold, conference) |
| transferInitiatedAt | number | Yes | Timestamp when transfer was initiated |
| transferCompletedAt | number | No | Timestamp when transfer completed |
| destinationNumber | string | No | Phone number transferred to |
| destinationQueue | string | No | Queue transferred to |
| transferReason | string | No | Reason for transfer |
| transferOutcome | string | No | Outcome (completed, failed, abandoned) |

### Example

```json
{
  "transferType": "warm",
  "transferInitiatedAt": 1699900300000,
  "transferCompletedAt": 1699900345000,
  "destinationQueue": "billing_support",
  "transferReason": "Customer requested to speak with billing department",
  "transferOutcome": "completed"
}
```

---

## ConversationStateHistory

Audit trail of status changes throughout the conversation lifecycle.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| status | enum | Yes | Conversation status at this point |
| timestamp | number | Yes | When the status changed |
| reason | string \| null | No | Reason for status change |
| metadata | object \| null | No | Additional context about the state change |

### Example

```json
[
  { "status": "pending", "timestamp": 1699900000000 },
  { "status": "started", "timestamp": 1699900001000 },
  { "status": "active", "timestamp": 1699900002000 },
  { "status": "paused", "timestamp": 1699900300000, "reason": "Transfer to human agent" },
  { "status": "active", "timestamp": 1699900345000 },
  { "status": "ended", "timestamp": 1699900500000 },
  { "status": "summarized", "timestamp": 1699900510000 }
]
```

---

## Query Options

### Conversation Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across conversation content |
| conversationType | array | Filter by conversation type(s) |
| channelId | string | Filter by channel ID |
| locationId | string | Filter by location ID |
| customerId | string | Filter by customer ID |
| hasMessages | boolean | Filter by presence of messages |
| dateRange | object | Filter by date range ({ start, end }) |

### Conversation Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | created_at, customer_id | Field to sort by |
| direction | asc, desc | Sort direction |

### Pagination

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Enums

### ServiceConversationType

| Value | Description |
|-------|-------------|
| OTT_CALL | WebRTC or OTT voice call |
| OTT_CHAT | WebRTC or OTT text chat |
| TELEPHONY_CALL | Traditional PSTN/SIP telephony call |
| SMS | SMS text messaging |
| EMAIL | Email communication |
| WHATSAPP | WhatsApp messaging |
| TELEGRAM | Telegram messaging |

### ConversationStatus

| Value | Description |
|-------|-------------|
| pending | Conversation created but not yet started |
| started | Conversation initiated, awaiting connection |
| active | Conversation actively in progress |
| paused | Temporarily paused (hold, transfer) |
| ended | Conversation ended, awaiting post-processing |
| summarized | AI summary generated |
| updated_summarized | Summary updated after additional processing |

### ConversationDirection

| Value | Description |
|-------|-------------|
| inbound | Customer-initiated conversation |
| outbound | Business-initiated conversation |

### ConversationSummarySentiment

| Value | Description |
|-------|-------------|
| positive | Customer expressed satisfaction |
| neutral | Neutral interaction |
| negative | Customer expressed frustration |

### MessageType

| Value | Description |
|-------|-------------|
| user | Message from end user/customer |
| assistant | Message from AI agent |
| human_agent | Message from human support agent |
| system | System-generated event message |

### SystemMessageEventType

| Value | Description |
|-------|-------------|
| handover_requested | User or AI requested handover |
| handover_accepted | Human agent accepted handover |
| handover_completed | Handover completed successfully |
| handover_failed | Handover attempt failed |
| agent_joined | Human agent joined conversation |
| agent_left | Human agent left conversation |
| conversation_transferred | Conversation transferred to another agent/queue |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────┐
│                   CONVERSATION STRUCTURE                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐         ┌──────────────────┐                 │
│   │     Project      │◀────────│ ServiceConversation│                │
│   │                  │   N:1   │     Config         │                │
│   └──────────────────┘         │                    │                │
│                                │  - channel_id      │                │
│   ┌──────────────────┐         │  - messages[]      │                │
│   │   Deployment     │◀────────│  - status          │                │
│   │  Configuration   │   N:1   │  - summary         │                │
│   └──────────────────┘         │  - state_history[] │                │
│                                └─────────┬──────────┘                │
│   ┌──────────────────┐                   │                           │
│   │    Customer      │◀──────────────────┤ N:1 (optional)            │
│   │   (optional)     │                   │                           │
│   └──────────────────┘                   │                           │
│                                          │                           │
│   ┌──────────────────┐                   │                           │
│   │    Location      │◀──────────────────┘ N:1 (optional)            │
│   │   (optional)     │                                               │
│   └──────────────────┘                                               │
│                                                                      │
│   Messages Array (embedded):                                         │
│   ┌─────────────┬─────────────┬─────────────┬─────────────┐         │
│   │ UserChat    │ Assistant   │ HumanAgent  │ System      │         │
│   │ Message     │ ChatMessage │ ChatMessage │ Message     │         │
│   └─────────────┴─────────────┴─────────────┴─────────────┘         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| ServiceConversationConfig | Project | N:1 | Conversations belong to a project |
| ServiceConversationConfig | DeploymentConfiguration | N:1 | Powered by a deployment config |
| ServiceConversationConfig | Customer | N:1 | May link to a customer record |
| ServiceConversationConfig | Location | N:1 | May be associated with a location |
| ServiceConversationConfig | Messages | 1:N | Contains embedded message array |

---

## Best Practices

### Conversation Tracking

1. **Use customer_id for personalization** - Link conversations to customer records for history and personalization.

2. **Track location context** - Set location_id for multi-location businesses to enable location-specific analytics.

3. **Monitor state_history** - Use the state history for troubleshooting and measuring time-to-resolution.

4. **Leverage conversation summaries** - Use AI-generated summaries for QA, reporting, and follow-up prioritization.

### Message Handling

5. **Maintain message threading** - Use last_user_message_id for proper message threading and context.

6. **Track system events** - Use SystemMessage for audit trails of handovers, transfers, and agent activity.

7. **Include metadata** - Add relevant metadata to messages for channel-specific attributes and delivery status.

### Integration

8. **Use partner_user_id** - Set partner_user_id when integrating with external CRM or help desk systems.

9. **Link to conversation context** - Use conversation_context to provide AI agents with relevant product/service context.

10. **Track test conversations** - Set is_test_conversation for testing to exclude from analytics and billing.

### Performance

11. **Query by created_day** - Use created_day for efficient daily aggregation queries and time-series reporting.

12. **Filter by conversation type** - Use conversationType filter to analyze specific channels.

13. **Monitor duration** - Use durationInSeconds for billing calculations and average handling time metrics.

---

## Quick Reference

### Status Lifecycle

```
PENDING → STARTED → ACTIVE → PAUSED → ACTIVE → ENDED → SUMMARIZED
                         ↘ ENDED (if abandoned)
```

### Common Query Patterns

All queries support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
