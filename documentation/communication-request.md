# Communication Request System Overview

This document provides comprehensive documentation for the Communication Request system, covering outbound call, email, and SMS request schemas for multi-channel customer communication.

## Table of Contents

1. [Overview](#overview)
2. [BusinessCallRequest](#businesscallrequest)
3. [EmailRequest](#emailrequest)
4. [SmsRequest](#smsrequest)
5. [Supporting Schemas](#supporting-schemas)
6. [Result Schemas](#result-schemas)
7. [Query Options](#query-options)
8. [Enums](#enums)
9. [Relationships](#relationships)
10. [Best Practices](#best-practices)

---

## Overview

The Communication Request system enables outbound customer communications across multiple channels. It provides:

- **Multi-channel support** for phone calls, emails, and SMS messages
- **Scheduling capabilities** for time-delayed delivery
- **Retry logic** with configurable attempts and delays
- **Template support** for consistent, personalized messaging
- **Delivery tracking** with status updates and result schemas
- **Calling hours compliance** for telephony campaigns

All communication requests can be linked to a ServiceConversationConfig for unified conversation history tracking.

---

## BusinessCallRequest

Represents scheduled or immediate AI-powered voice calls to customers.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| phoneConfigurationId | string | No | - | Phone configuration for caller ID and routing |
| to | string | Yes | - | Destination phone number in E.164 format |
| from | string | Yes | - | Caller ID phone number in E.164 format |
| agentConfigurationId | string | Yes | - | Agent configuration for AI behavior |
| instructionConfigurationId | string | No | - | Instruction override for call |
| maxDuration | number | No | - | Maximum call duration in seconds |
| scheduleType | enum | Yes | - | Call timing strategy |
| serviceConversationConfigId | string | No | - | Linked conversation record |
| timeZone | string | No | UTC | IANA timezone identifier |
| scheduledAt | number | No | - | Unix timestamp for scheduled execution |
| callingHours | object | No | - | Permitted calling window configuration |
| maxRetries | number | No | - | Maximum retry attempts (0-5) |
| retryDelayMinutes | number | No | - | Delay between retries in minutes |
| status | enum | Yes | PENDING | Current call request status |
| metadata | object | No | - | Additional custom metadata |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### CallingHours Configuration

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| startTime | string | Yes | - | Start time in HH:MM 24-hour format |
| endTime | string | Yes | - | End time in HH:MM 24-hour format |
| daysOfWeek | array | No | [1,2,3,4,5] | Permitted days (0=Sunday to 6=Saturday) |

### Example

```json
{
  "id": "call_abc123xyz",
  "phoneConfigurationId": "phone_config_main",
  "to": "+12125551234",
  "from": "+18005559999",
  "agentConfigurationId": "agent_sales_v2",
  "instructionConfigurationId": "instr_appointment_reminder",
  "maxDuration": 300,
  "scheduleType": "scheduled",
  "serviceConversationConfigId": "conv_linked_001",
  "timeZone": "America/New_York",
  "scheduledAt": 1699963200000,
  "callingHours": {
    "startTime": "09:00",
    "endTime": "17:00",
    "daysOfWeek": [1, 2, 3, 4, 5]
  },
  "maxRetries": 3,
  "retryDelayMinutes": 30,
  "status": "scheduled",
  "metadata": {
    "campaignId": "camp_q4_outreach",
    "leadSource": "website_signup"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Immediate Call Example

```json
{
  "to": "+12125551234",
  "from": "+18005559999",
  "agentConfigurationId": "agent_support_v1",
  "scheduleType": "immediate",
  "maxDuration": 600,
  "maxRetries": 2,
  "retryDelayMinutes": 15,
  "status": "pending"
}
```

---

## EmailRequest

Represents outbound email communications with support for templates, attachments, and delivery tracking.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| emailConfigurationId | string | No | - | Email configuration for sender settings |
| configuredEmailAddress | string | No | - | Configured sender email address |
| templateId | string | No | - | Pre-defined template ID |
| to | array | Yes | - | Primary recipients (min 1) |
| cc | array | No | - | Carbon copy recipients |
| bcc | array | No | - | Blind carbon copy recipients |
| replyTo | string | No | - | Reply-to email address |
| subject | string | Yes | - | Email subject line |
| bodyHtml | string | Yes | - | HTML content of the email |
| bodyText | string | No | - | Plain text alternative |
| variables | object | No | - | Template variable substitutions |
| attachments | array | No | - | File attachments |
| scheduledAt | number | No | - | Unix timestamp for scheduled delivery |
| serviceConversationConfigId | string | No | - | Linked conversation record |
| status | enum | Yes | QUEUED | Current delivery status |
| maxRetries | number | No | - | Maximum retry attempts (0-5) |
| retryCount | number | No | 0 | Current retry attempt count |
| retryDelayMinutes | number | No | - | Delay between retries in minutes |
| metadata | object | No | - | Additional custom metadata |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### EmailRecipient Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | Yes | Email address in standard format |
| name | string | No | Display name for the recipient |

### EmailAttachment Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| filename | string | Yes | Name of the attachment file |
| content | string | Yes | Base64-encoded file content |
| contentType | string | Yes | MIME type of the attachment |

### Example

```json
{
  "id": "email_abc123xyz",
  "emailConfigurationId": "email_config_marketing",
  "configuredEmailAddress": "noreply@company.com",
  "templateId": "tmpl_welcome_series_1",
  "to": [
    { "email": "customer@example.com", "name": "John Smith" }
  ],
  "cc": [
    { "email": "sales@company.com", "name": "Sales Team" }
  ],
  "bcc": [
    { "email": "archive@company.com" }
  ],
  "replyTo": "support@company.com",
  "subject": "Welcome to {{companyName}}, {{firstName}}!",
  "bodyHtml": "<html><body><h1>Welcome, {{firstName}}!</h1><p>Thank you for joining {{companyName}}.</p></body></html>",
  "bodyText": "Welcome, {{firstName}}! Thank you for joining {{companyName}}.",
  "variables": {
    "firstName": "John",
    "companyName": "Acme Corp",
    "accountUrl": "https://app.acme.com/account"
  },
  "attachments": [
    {
      "filename": "welcome_guide.pdf",
      "content": "JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwo+Pg...",
      "contentType": "application/pdf"
    }
  ],
  "scheduledAt": 1699963200000,
  "serviceConversationConfigId": "conv_email_thread_001",
  "status": "queued",
  "maxRetries": 3,
  "retryCount": 0,
  "retryDelayMinutes": 60,
  "metadata": {
    "campaignId": "camp_onboarding",
    "segmentId": "seg_new_users"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Simple Email Example

```json
{
  "to": [
    { "email": "customer@example.com" }
  ],
  "subject": "Your order has shipped!",
  "bodyHtml": "<p>Your order #12345 has shipped and will arrive by Friday.</p>",
  "status": "queued"
}
```

---

## SmsRequest

Represents outbound SMS text message communications.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| phoneConfigurationId | string | No | - | Phone configuration for sender number |
| to | string | Yes | - | Recipient phone number in E.164 format |
| from | string | No | - | Sender phone number or short code |
| body | string | Yes | - | Text content of the SMS message |
| templateId | string | No | - | Pre-defined SMS template ID |
| variables | object | No | - | Template variable substitutions |
| scheduledAt | number | No | - | Unix timestamp for scheduled delivery |
| serviceConversationConfigId | string | No | - | Linked conversation record |
| status | enum | Yes | QUEUED | Current delivery status |
| maxRetries | number | No | - | Maximum retry attempts (0-5) |
| retryCount | number | No | 0 | Current retry attempt count |
| retryDelayMinutes | number | No | - | Delay between retries in minutes |
| metadata | object | No | - | Additional custom metadata |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "sms_abc123xyz",
  "phoneConfigurationId": "phone_config_sms",
  "to": "+12125551234",
  "from": "+18005559999",
  "body": "Hi {{firstName}}, your appointment is confirmed for {{appointmentTime}} on {{appointmentDate}}. Reply CONFIRM to confirm or CANCEL to cancel.",
  "templateId": "tmpl_appointment_reminder",
  "variables": {
    "firstName": "John",
    "appointmentTime": "3:00 PM",
    "appointmentDate": "November 15"
  },
  "scheduledAt": 1699876800000,
  "serviceConversationConfigId": "conv_sms_thread_001",
  "status": "queued",
  "maxRetries": 2,
  "retryCount": 0,
  "retryDelayMinutes": 15,
  "metadata": {
    "appointmentId": "appt_12345",
    "reminderType": "24_hour"
  },
  "createdAt": 1699900000000,
  "updatedAt": 1699900000000
}
```

### Simple SMS Example

```json
{
  "to": "+12125551234",
  "body": "Your verification code is 123456. This code expires in 10 minutes.",
  "status": "queued"
}
```

---

## Supporting Schemas

### EmailRecord (Delivery Tracking)

Tracks individual delivery events and status updates from email providers.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier |
| emailRequestId | string | Yes | Reference to the original EmailRequest |
| providerMessageId | string | Yes | Provider-specific message ID |
| status | enum | Yes | Current delivery status |
| sentAt | number | No | Timestamp when email was sent |
| deliveredAt | number | No | Timestamp when email was delivered |
| bouncedAt | number | No | Timestamp when email bounced |
| errorCode | string | No | Provider error code if failed |
| errorMessage | string | No | Provider error message if failed |
| metadata | object | No | Additional provider metadata |
| createdAt | number | Yes | Creation timestamp |
| updatedAt | number | No | Last modification timestamp |

### EmailRecord Example

```json
{
  "id": "record_abc123xyz",
  "emailRequestId": "email_abc123xyz",
  "providerMessageId": "sg_msg_12345abcde",
  "status": "delivered",
  "sentAt": 1699900100000,
  "deliveredAt": 1699900150000,
  "metadata": {
    "ip": "192.168.1.1",
    "userAgent": "Mozilla/5.0"
  },
  "createdAt": 1699900100000,
  "updatedAt": 1699900150000
}
```

---

## Result Schemas

All communication requests return a result schema after submission.

### CallRequestResult

```json
{
  "success": true,
  "request": { /* BusinessCallRequest object */ },
  "error_message": null
}
```

### EmailRequestResult

```json
{
  "success": true,
  "request": { /* EmailRequest object */ },
  "error_message": null
}
```

### SmsRequestResult

```json
{
  "success": true,
  "request": { /* SmsRequest object */ },
  "error_message": null
}
```

### Error Response Example

```json
{
  "success": false,
  "request": null,
  "error_message": "Invalid phone number format. Expected E.164 format."
}
```

---

## Query Options

### Call Request Query Options

#### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across phone numbers |
| status | enum | Filter by call status |
| scheduleType | enum | Filter by schedule type |
| agentConfigurationId | string | Filter by agent configuration |
| dateRange | object | Filter by date range ({ start, end }) |

#### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | scheduledAt, status, createdAt | Field to sort by |
| direction | asc, desc | Sort direction |

### Email Request Query Options

#### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across subject |
| emailConfigurationId | string | Filter by email configuration |
| configuredEmailAddress | string | Filter by sender email address |
| templateId | string | Filter by template ID |
| status | enum | Filter by delivery status |
| serviceConversationConfigId | string | Filter by linked conversation |
| scheduledAtRange | object | Filter by scheduled date range ({ from, to }) |

#### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | createdAt, scheduledAt, status, subject, retryCount | Field to sort by |
| direction | asc, desc | Sort direction |

### SMS Request Query Options

#### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across phone numbers and body |
| phoneConfigurationId | string | Filter by phone configuration |
| to | string | Filter by recipient phone number |
| from | string | Filter by sender phone number |
| templateId | string | Filter by template ID |
| status | enum | Filter by delivery status |
| serviceConversationConfigId | string | Filter by linked conversation |
| scheduledAtRange | object | Filter by scheduled date range ({ from, to }) |

#### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | createdAt, scheduledAt, status, retryCount | Field to sort by |
| direction | asc, desc | Sort direction |

### Email Record Query Options

#### Filters

| Field | Type | Description |
|-------|------|-------------|
| emailRequestId | string | Filter by email request ID |
| providerMessageId | string | Filter by provider message ID |
| status | enum | Filter by delivery status |
| sentAtRange | object | Filter by sent date range ({ from, to }) |
| deliveredAtRange | object | Filter by delivered date range ({ from, to }) |

#### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | createdAt, status, sentAt, deliveredAt | Field to sort by |
| direction | asc, desc | Sort direction |

### Pagination

All query options support pagination:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Enums

### CallRequestStatus

| Value | Description |
|-------|-------------|
| PENDING | Call created, awaiting processing |
| SCHEDULED | Call scheduled for future execution |
| IN_PROGRESS | Call currently active |
| COMPLETED | Call completed successfully |
| FAILED | Call failed (no answer, busy, error) |
| CANCELLED | Call cancelled before execution |

### ScheduleType

| Value | Description |
|-------|-------------|
| immediate | Execute ASAP within calling hours |
| scheduled | Execute at specific scheduledAt timestamp |
| recurring | Execute on callingHours schedule |

### EmailStatus

| Value | Description |
|-------|-------------|
| QUEUED | Email queued for sending |
| SENT | Email sent to provider |
| DELIVERED | Email confirmed delivered |
| BOUNCED | Email bounced (hard or soft) |
| FAILED | Email delivery failed |
| COMPLAINED | Recipient marked as spam |

### SmsStatus

| Value | Description |
|-------|-------------|
| QUEUED | SMS queued for sending |
| SENT | SMS sent to carrier |
| DELIVERED | SMS confirmed delivered |
| FAILED | SMS delivery failed |
| UNDELIVERED | SMS undeliverable (invalid number, etc.) |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   COMMUNICATION REQUEST SYSTEM                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌──────────────────┐                                                   │
│   │    Phone         │                                                   │
│   │  Configuration   │◀────────┐                                         │
│   └──────────────────┘         │                                         │
│                                │                                         │
│   ┌──────────────────┐         │         ┌──────────────────┐           │
│   │     Agent        │◀────────┼─────────│ BusinessCall     │           │
│   │  Configuration   │         │         │   Request        │           │
│   └──────────────────┘         │         │                  │           │
│                                │         │  - to            │           │
│   ┌──────────────────┐         │         │  - from          │           │
│   │  Instruction     │◀────────┤         │  - scheduleType  │           │
│   │  Configuration   │         │         │  - callingHours  │           │
│   └──────────────────┘         │         │  - status        │           │
│                                │         └────────┬─────────┘           │
│                                │                  │                      │
│   ┌──────────────────┐         │                  │                      │
│   │     Email        │◀────────┼──────────────────┼──────────────────┐  │
│   │  Configuration   │         │                  │                  │  │
│   └──────────────────┘         │                  │                  │  │
│                                │                  │                  │  │
│   ┌──────────────────┐         │         ┌───────▼────────┐          │  │
│   │  ServiceConv     │◀────────┴─────────│   Email        │          │  │
│   │  ersationConfig  │                   │   Request      │◀─────┐   │  │
│   │                  │◀──────────────────│                │      │   │  │
│   │  (unified        │                   │  - to[]        │      │   │  │
│   │   conversation   │         ┌─────────│  - cc[]        │      │   │  │
│   │   history)       │         │         │  - attachments │      │   │  │
│   └──────────────────┘         │         │  - status      │      │   │  │
│           ▲                    │         └────────────────┘      │   │  │
│           │                    │                                 │   │  │
│           │                    │         ┌──────────────────┐    │   │  │
│           │                    │         │   EmailRecord    │────┘   │  │
│           │                    │         │   (Delivery      │        │  │
│           │                    │         │    Tracking)     │        │  │
│           │                    │         └──────────────────┘        │  │
│           │                    │                                     │  │
│           │                    │         ┌──────────────────┐        │  │
│           └────────────────────┼─────────│   SmsRequest     │────────┘  │
│                                │         │                  │           │
│                                │         │  - to            │           │
│                                │         │  - body          │           │
│                                └─────────│  - status        │           │
│                                          └──────────────────┘           │
│                                                                          │
│   ┌──────────────────┐                                                   │
│   │   Template       │◀──────── Used by Email & SMS requests             │
│   │   (Email/SMS)    │                                                   │
│   └──────────────────┘                                                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| BusinessCallRequest | PhoneConfiguration | N:1 | Uses phone config for caller ID |
| BusinessCallRequest | AgentConfiguration | N:1 | Required AI agent behavior |
| BusinessCallRequest | InstructionConfiguration | N:1 | Optional instruction override |
| BusinessCallRequest | ServiceConversationConfig | N:1 | Links to conversation record |
| EmailRequest | EmailConfiguration | N:1 | Uses email config for sender |
| EmailRequest | ServiceConversationConfig | N:1 | Links to conversation record |
| EmailRecord | EmailRequest | N:1 | Tracks delivery for request |
| SmsRequest | PhoneConfiguration | N:1 | Uses phone config for sender |
| SmsRequest | ServiceConversationConfig | N:1 | Links to conversation record |

---

## Best Practices

### General

1. **Link to ServiceConversationConfig** - Always set serviceConversationConfigId to maintain unified conversation history across channels.

2. **Use templates for consistency** - Leverage templateId with variables for consistent, personalized messaging that's easier to maintain.

3. **Implement retry logic** - Configure maxRetries and retryDelayMinutes for critical communications to handle transient failures.

4. **Add metadata for tracking** - Include relevant metadata (campaign IDs, lead sources, etc.) for analytics and troubleshooting.

### Calls

5. **Configure calling hours** - Always set callingHours for outbound campaigns to ensure TCPA compliance and respect customer preferences.

6. **Use appropriate schedule types** - Choose 'immediate' for urgent calls, 'scheduled' for specific times, 'recurring' for regular touchpoints.

7. **Set max duration** - Configure maxDuration to prevent runaway calls and control costs.

8. **Specify timezone** - Always set timeZone for scheduled calls to ensure correct execution time.

### Emails

9. **Include plain text fallback** - Always provide bodyText for accessibility and email client compatibility.

10. **Validate recipient lists** - Ensure email addresses are valid before submission to reduce bounces.

11. **Mind attachment size** - Keep total attachment size under 25MB for reliable delivery.

12. **Track delivery with EmailRecord** - Monitor EmailRecord entries for delivery confirmation and bounce handling.

### SMS

13. **Use E.164 format** - Always use E.164 format for phone numbers (+country code + number).

14. **Mind character limits** - Standard SMS supports 160 characters (GSM-7). Longer messages auto-split into segments.

15. **Respect opt-outs** - Implement opt-out handling (STOP, UNSUBSCRIBE) for compliance.

---

## Quick Reference

### Request Lifecycle

```
CALLS:    PENDING → SCHEDULED → IN_PROGRESS → COMPLETED/FAILED/CANCELLED

EMAILS:   QUEUED → SENT → DELIVERED/BOUNCED/FAILED/COMPLAINED

SMS:      QUEUED → SENT → DELIVERED/FAILED/UNDELIVERED
```

### Retry Flow

```
Request Created
      │
      ▼
   Attempt 1 ──── Success ──── DELIVERED
      │
      ▼ (failure)
   Wait retryDelayMinutes
      │
      ▼
   Attempt 2 ──── Success ──── DELIVERED
      │
      ▼ (failure)
   ... (up to maxRetries)
      │
      ▼ (all failed)
   FAILED
```

### Common Query Patterns

All queries support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
