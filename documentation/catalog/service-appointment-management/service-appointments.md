# Service Appointments Domain

This document details the appointment booking and slot availability schemas.

## Table of Contents

1. [ServiceAppointment](#serviceappointment)
2. [Composite Schemas](#composite-schemas)
3. [Slot Query Schemas](#slot-query-schemas)
4. [Query Options](#query-options)

---

## ServiceAppointment

Represents a scheduled appointment for a service.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "businessServiceId": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "channelId": { "type": ["string", "null"] },
    "customerId": { "type": "string" },
    "customerName": { "type": "string" },
    "customerEmail": { "type": "string", "format": "email" },
    "startTime": { "type": "integer", "exclusiveMinimum": 0 },
    "endTime": { "type": "integer", "exclusiveMinimum": 0 },
    "duration": { "type": "integer", "exclusiveMinimum": 0, "default": 30 },
    "totalPrice": { "type": "number", "minimum": 0, "default": 0 },
    "pricing": { "type": "object", "additionalProperties": true },
    "depositPaid": { "type": "number", "minimum": 0, "default": 0 },
    "status": {
      "type": "string",
      "enum": ["pending", "confirmed", "cancelled", "completed", "no_show"],
      "default": "pending"
    },
    "providerId": { "type": ["string", "null"] },
    "serviceProviderId": { "type": ["string", "null"] },
    "slotIndex": { "type": ["integer", "null"], "minimum": 0 },
    "assignedUserAccountId": { "type": ["string", "null"] },
    "calendarId": { "type": ["string", "null"] },
    "calendarEventId": { "type": ["string", "null"] },
    "calendarProvider": {
      "type": ["string", "null"],
      "enum": ["google", "outlook", "calendly", null]
    },
    "cancelReason": { "type": ["string", "null"] },
    "serviceConversationConfigId": { "type": ["string", "null"] },
    "externalRef": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "businessServiceId", "customerId", "startTime", "depositPaid"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `businessServiceId` | string | Yes | ID of the service being booked |
| `locationId` | string \| null | No | Business location ID |
| `channelId` | string \| null | No | Booking channel (web, marketplace, partner) |
| `customerId` | string | Yes | Customer ID |
| `customerName` | string | No | Customer's full name |
| `customerEmail` | string (email) | No | Customer's email address |
| `startTime` | number | Yes | Start time (Unix timestamp) |
| `endTime` | number | No | End time (Unix timestamp) |
| `duration` | number | No | Duration in minutes (default: 30) |
| `totalPrice` | number | No | Total price for the service |
| `pricing` | object | No | Detailed pricing breakdown |
| `depositPaid` | number | Yes | Deposit amount paid (default: 0) |
| `status` | enum | Yes | Current status (default: "pending") |
| `providerId` | string \| null | No | Assigned ServicePerson ID |
| `serviceProviderId` | string \| null | No | ServiceProvider assignment ID (for overrides) |
| `slotIndex` | number \| null | No | Slot index for concurrent bookings (0-based) |

### Calendar Integration Fields

| Field | Type | Description |
|-------|------|-------------|
| `assignedUserAccountId` | string \| null | User account managing the appointment |
| `calendarId` | string \| null | Calendar ID where appointment is stored |
| `calendarEventId` | string \| null | External calendar event ID |
| `calendarProvider` | enum \| null | Calendar provider (google, outlook, calendly) |
| `cancelReason` | string \| null | Reason for cancellation |
| `serviceConversationConfigId` | string \| null | Conversation config ID |
| `externalRef` | object \| null | External system reference |

### AppointmentStatus Enum

```json
["pending", "confirmed", "cancelled", "completed", "no_show"]
```

### CalendarProvider Enum

```json
["google", "outlook", "calendly"]
```

### Example

```json
{
  "id": "apt_12345",
  "businessServiceId": "svc_haircut",
  "locationId": "loc_downtown",
  "channelId": "web",
  "customerId": "cust_jane",
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "startTime": 1699963200,
  "endTime": 1699966800,
  "duration": 60,
  "totalPrice": 75.00,
  "pricing": {
    "subtotal": 75.00,
    "discount": 0,
    "tax": 6.00,
    "total": 81.00
  },
  "depositPaid": 20.00,
  "status": "confirmed",
  "providerId": "sp_abc123",
  "serviceProviderId": "svp_xyz789",
  "slotIndex": null,
  "assignedUserAccountId": "user_jane",
  "calendarId": "cal_primary",
  "calendarEventId": "evt_google_123",
  "calendarProvider": "google",
  "cancelReason": null,
  "externalRef": null,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## Composite Schemas

### CreateServiceAppointmentWithCustomData

Combines appointment creation with dynamic field values.

```json
{
  "type": "object",
  "properties": {
    "appointment": { "$ref": "#/$defs/CreateServiceAppointment" },
    "customData": {
      "type": "object",
      "additionalProperties": true,
      "default": {}
    }
  },
  "required": ["appointment"]
}
```

**Example:**
```json
{
  "appointment": {
    "businessServiceId": "svc_consultation",
    "customerId": "cust_john",
    "startTime": 1699963200,
    "duration": 30
  },
  "customData": {
    "preferredContact": "email",
    "specialRequests": "Quiet room please",
    "referralSource": "google"
  }
}
```

### ServiceAppointmentWithAdditionalInfo

Appointment with its captured field values (for display).

```json
{
  "type": "object",
  "properties": {
    "appointment": { "$ref": "#/$defs/ServiceAppointment" },
    "additionalInfo": { "$ref": "#/$defs/AppointmentAdditionalInfo" }
  },
  "required": ["appointment", "additionalInfo"]
}
```

---

## Slot Query Schemas

### ServiceSlotQueryRequest

Request for available appointment slots.

```json
{
  "type": "object",
  "properties": {
    "organizationId": { "type": "string" },
    "serviceId": { "type": "string" },
    "localDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "locationId": { "type": ["string", "null"] },
    "providerId": { "type": "string" },
    "maxResults": { "type": "integer", "exclusiveMinimum": 0, "maximum": 1000, "default": 10 }
  },
  "required": ["organizationId", "serviceId", "localDate", "providerId"]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organizationId` | string | Yes | Business account ID |
| `serviceId` | string | Yes | Service to query slots for |
| `localDate` | string | Yes | Date in YYYY-MM-DD format |
| `locationId` | string \| null | No | Optional location filter |
| `providerId` | string | Yes | Provider filter |
| `maxResults` | number | No | Max slots to return (default: 10, max: 1000) |

### ServiceCandidateSlot

Individual available time slot.

```json
{
  "$id": "#/$defs/ServiceCandidateSlot",
  "type": "object",
  "properties": {
    "providerId": { "type": "string" },
    "serviceProviderId": { "type": ["string", "null"] },
    "startTimeOfDay": { "type": "string", "pattern": "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(AM|PM)$" },
    "startMinuteOfDay": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "endMinuteOfDay": { "type": "integer", "minimum": 1, "maximum": 1440 },
    "startTimeUtcSec": { "type": "number" },
    "endTimeUtcSec": { "type": "number" }
  },
  "required": ["providerId", "startTimeOfDay", "startMinuteOfDay", "endMinuteOfDay", "startTimeUtcSec", "endTimeUtcSec"]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `providerId` | string | Provider that can serve this slot |
| `serviceProviderId` | string \| null | ServiceProvider assignment ID |
| `startTimeOfDay` | string | Local time in "h:mm AM/PM" format |
| `startMinuteOfDay` | number | Minutes from midnight (0-1439) |
| `endMinuteOfDay` | number | Minutes from midnight (1-1440) |
| `startTimeUtcSec` | number | Start time as UTC timestamp (seconds) |
| `endTimeUtcSec` | number | End time as UTC timestamp (seconds) |

### ServiceSlotQueryResponse

Response containing available slots.

```json
{
  "type": "object",
  "properties": {
    "localDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "timezone": { "type": "string", "minLength": 1 },
    "generatedAt": { "type": "number" },
    "slots": {
      "type": "array",
      "items": { "$ref": "#/$defs/ServiceCandidateSlot" }
    }
  },
  "required": ["localDate", "timezone", "generatedAt", "slots"]
}
```

**Example Response:**
```json
{
  "localDate": "2024-01-15",
  "timezone": "America/New_York",
  "generatedAt": 1705330800000,
  "slots": [
    {
      "providerId": "sp_abc123",
      "serviceProviderId": "svp_xyz789",
      "startTimeOfDay": "9:00 AM",
      "startMinuteOfDay": 540,
      "endMinuteOfDay": 600,
      "startTimeUtcSec": 1705323600,
      "endTimeUtcSec": 1705327200
    },
    {
      "providerId": "sp_abc123",
      "serviceProviderId": "svp_xyz789",
      "startTimeOfDay": "10:30 AM",
      "startMinuteOfDay": 630,
      "endMinuteOfDay": 690,
      "startTimeUtcSec": 1705329000,
      "endTimeUtcSec": 1705332600
    }
  ]
}
```

---

## Query Options

### ServiceAppointmentFilters

```json
{
  "type": "object",
  "properties": {
    "search": { "type": "string" },
    "locationId": { "type": "string" },
    "channelId": { "type": "string" },
    "status": {
      "type": "array",
      "items": { "type": "string", "enum": ["pending", "confirmed", "cancelled", "completed", "no_show"] }
    },
    "businessServiceId": { "type": "string" },
    "customerId": { "type": "string" },
    "assignedUserAccountId": { "type": "string" },
    "calendarProvider": {
      "type": "array",
      "items": { "type": "string", "enum": ["google", "outlook", "calendly"] }
    },
    "externalSource": { "type": "string" },
    "dateRange": {
      "type": "object",
      "properties": {
        "start": { "type": "number" },
        "end": { "type": "number" }
      }
    }
  }
}
```

### ServiceAppointmentSorting

```json
{
  "type": "object",
  "properties": {
    "field": { "type": "string", "enum": ["startTime", "endTime", "createdAt", "customerName"] },
    "direction": { "type": "string", "enum": ["asc", "desc"] }
  },
  "required": ["field", "direction"]
}
```
