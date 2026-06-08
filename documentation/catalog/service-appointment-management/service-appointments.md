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

```typescript
ServiceAppointmentSchema = BaseModelSchema.safeExtend({
    businessServiceId: z.string(),
    locationId: z.string().nullable().optional(),
    channelId: z.string().nullable().optional(),
    customerId: z.string(),
    customerName: z.string().optional(),
    customerEmail: z.email().optional(),
    startTime: z.number().int().positive(),
    endTime: z.number().int().positive().optional(),
    duration: z.number().int().positive().default(30).optional(),
    totalPrice: z.number().nonnegative().default(0).optional(),
    pricing: OrderPricingSchema.optional(),
    depositPaid: z.number().nonnegative().default(0),
    status: z.enum(AppointmentStatus).default("pending"),
    providerId: z.string().nullable().optional(),
    serviceProviderId: z.string().nullable().optional(),
    slotIndex: z.number().int().nonnegative().nullable().optional(),

    // Calendar Integration
    assignedUserAccountId: z.string().nullable().optional(),
    calendarId: z.string().nullable().optional(),
    calendarEventId: z.string().nullable().optional(),
    calendarProvider: z.enum(CalendarProvider).nullable().optional(),
    cancelReason: z.string().nullable().optional(),
    serviceConversationConfigId: z.string().nullable().optional(),
    externalRef: ExternalRefSchema.nullable().optional(),
});
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

```typescript
enum AppointmentStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    NO_SHOW = "no_show",  // For revenue tracking
}
```

### CalendarProvider Enum

```typescript
enum CalendarProvider {
    GOOGLE = "google",
    OUTLOOK = "outlook",
    CALENDLY = "calendly",
}
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

```typescript
CreateServiceAppointmentWithCustomDataSchema = z.object({
    appointment: CreateServiceAppointmentSchema,
    customData: z.record(z.string(), DynamicFieldValueSchema).default({}),
});
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

```typescript
ServiceAppointmentWithAdditionalInfoSchema = z.object({
    appointment: ServiceAppointmentSchema,
    additionalInfo: AppointmentAdditionalInfoSchema,
});
```

---

## Slot Query Schemas

### ServiceSlotQueryRequest

Request for available appointment slots.

```typescript
ServiceSlotQueryRequestSchema = z.object({
    organizationId: z.string(),
    serviceId: z.string(),
    localDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    locationId: z.string().nullable().optional(),
    providerId: z.string(),
    maxResults: z.number().int().positive().max(1000).default(10),
});
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

```typescript
ServiceCandidateSlotSchema = z.object({
    providerId: z.string(),
    serviceProviderId: z.string().nullable().optional(),
    startTimeOfDay: z.string().regex(/^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i),
    startMinuteOfDay: z.number().int().min(0).max(1439),
    endMinuteOfDay: z.number().int().min(1).max(1440),
    startTimeUtcSec: z.number(),
    endTimeUtcSec: z.number(),
});
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

```typescript
ServiceSlotQueryResponseSchema = z.object({
    localDate: LocalDateSchema,
    timezone: z.string().min(1),
    generatedAt: z.number(),
    slots: z.array(ServiceCandidateSlotSchema),
});
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

```typescript
interface ServiceAppointmentFilters {
    search?: string;                    // Search customer name/email
    locationId?: string;                // Filter by location
    channelId?: string;                 // Filter by booking channel
    status?: AppointmentStatus[];       // Filter by status(es)
    businessServiceId?: string;         // Filter by service
    customerId?: string;                // Filter by customer
    assignedUserAccountId?: string;     // Filter by assigned user
    calendarProvider?: CalendarProvider[]; // Filter by calendar provider(s)
    externalSource?: string;            // Filter by external source
    dateRange?: {                       // Filter by date range
        start?: number;
        end?: number;
    };
}
```

### ServiceAppointmentSorting

```typescript
interface ServiceAppointmentSorting {
    field: "startTime" | "endTime" | "createdAt" | "customerName";
    direction: "asc" | "desc";
}
```
