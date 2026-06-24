# Service Management System Overview

This document provides a high-level overview of the Service Management system. For detailed schema documentation, see the domain-specific files in the [service-appointment-management](./service-appointment-management/) directory.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Core Schemas](#core-schemas)
4. [Domain Aggregates](#domain-aggregates)
5. [Schema Relationships](#schema-relationships)
6. [External Integrations](#external-integrations)
7. [Best Practices](#best-practices)

---

## Overview

The Service Management system provides a comprehensive solution for managing service-based businesses (salons, spas, consultations, etc.). It supports:

- **Service catalog management** with categories, pricing, and availability
- **Service providers (staff)** with skills, schedules, and commission tracking
- **Appointment booking** with calendar integration and multi-channel support
- **Dynamic field configurations** for customizable booking forms
- **Provider time-off management** with recurring and one-time entries
- **Pricing rules** for promotions and conditional discounts
- **Slot availability queries** for real-time booking availability
- **External calendar sync** (Google, Outlook, Calendly)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      SERVICE MANAGEMENT SYSTEM                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────┐  │
│  │  ServiceCategory │───▶│ BusinessService  │───▶│ServiceProvider│  │
│  │   (grouping)     │    │   (offering)     │    │ (assignment) │  │
│  └──────────────────┘    └──────────────────┘    └──────────────┘  │
│                                  │                       │          │
│                                  │                       │          │
│                                  ▼                       ▼          │
│                          ┌──────────────────┐    ┌──────────────┐  │
│                          │    Service       │    │ServicePerson │  │
│                          │   Appointment    │    │   (staff)    │  │
│                          └──────────────────┘    └──────────────┘  │
│                                  │                       │          │
│         ┌────────────────────────┼───────────────────────┤          │
│         │                        │                       │          │
│         ▼                        ▼                       ▼          │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │ Appointment  │    │  Appointment     │    │  ServiceProvider │  │
│  │ FieldConfig  │    │ AdditionalInfo   │    │    TimeOff       │  │
│  │  (org-level) │    │  (field values)  │    │                  │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    ServicePricingRule                         │  │
│  │                     (promotions)                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Core Schemas

### BusinessServiceConfig

Defines a service offering with pricing, scheduling, and booking rules.

#### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | auto | Unique identifier |
| `serviceRevisionId` | string \| null | No | - | Version-scoped data reference |
| `name` | string | Yes | - | Service name |
| `description` | string \| null | No | - | Detailed description |
| `imageUrl` | string \| null | No | - | Service image URL |
| `categoryId` | string \| null | No | - | Service category ID |
| `bookingCode` | string \| null | No | - | Short booking code |
| `duration` | number | Yes | 60 | Duration in minutes (max 480) |
| `durationSegments` | object \| null | No | - | Segmented duration breakdown |
| `bufferBefore` | number | Yes | 0 | Buffer before appointment (minutes) |
| `bufferAfter` | number | Yes | 0 | Buffer after appointment (minutes) |
| `isBookable` | boolean | Yes | true | Can be booked online |
| `allowsProcessingChairSwap` | boolean \| null | No | - | Allow resource swap during processing |
| `serviceAvailability` | object \| null | No | - | Service-specific availability |
| `maxConcurrentBookings` | number \| null | No | - | Max simultaneous bookings (null = 1) |
| `basePrice` | number | Yes | 0 | Base price in account currency |
| `priceMode` | enum \| null | No | - | Pricing mode |
| `gratuityMode` | enum \| null | No | - | Gratuity policy |
| `isActive` | boolean | Yes | true | Currently available |
| `displayOrder` | number \| null | No | - | Display order in listings |
| `channelMappings` | array \| null | No | - | Per-channel service ID mappings |
| `primaryServiceUserAccountId` | string \| null | No | - | Primary responsible user |
| `requiredResources` | string[] | Yes | [] | Required resource IDs |
| `bookingRules` | object \| null | No | - | Booking constraints |
| `depositStrategy` | enum \| null | No | - | Deposit strategy |
| `depositValue` | number \| null | No | - | Deposit amount/percentage |
| `lateCancelFeePercent` | number | Yes | 0 | Late cancellation fee % |
| `noShowFeePercent` | number | Yes | 0 | No-show fee % |
| `requiredDatafieldConfig` | object \| null | No | - | Dynamic field configuration |
| `createdAt` | number | No | auto | Creation timestamp |
| `updatedAt` | number | No | auto | Last update timestamp |

#### Example

```json
{
  "id": "svc_haircut",
  "name": "Women's Haircut",
  "description": "Professional haircut with styling",
  "categoryId": "cat_hair",
  "duration": 60,
  "durationSegments": {
    "prep": 5,
    "active": 45,
    "processing": 0,
    "finish": 10,
    "turnover": 5
  },
  "bufferBefore": 0,
  "bufferAfter": 15,
  "isBookable": true,
  "basePrice": 75.00,
  "priceMode": "FIXED",
  "gratuityMode": "OPTIONAL",
  "isActive": true,
  "displayOrder": 1,
  "bookingRules": {
    "onlineEnabled": true,
    "existingOnly": false,
    "requiresConsult": false,
    "maxDaysOut": 30,
    "minNoticeHours": 2,
    "lateCancelHours": 24
  },
  "depositStrategy": "PERCENTAGE",
  "depositValue": 25,
  "lateCancelFeePercent": 50,
  "noShowFeePercent": 100,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

### ServiceCategory

Groups related services for organization and display.

#### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | auto | Unique identifier |
| `serviceRevisionId` | string \| null | No | - | Version-scoped data reference |
| `name` | string | Yes | - | Category name |
| `description` | string \| null | No | - | Category description |
| `imageUrl` | string \| null | No | - | Category image URL |
| `channelMappings` | array \| null | No | - | Per-channel category ID mappings |
| `displayOrder` | number \| null | No | - | Display order in listing |
| `isActive` | boolean | Yes | true | Whether category is active |
| `createdAt` | number | No | auto | Creation timestamp |
| `updatedAt` | number | No | auto | Last update timestamp |

#### Example

```json
{
  "id": "cat_hair",
  "name": "Hair Services",
  "description": "Cuts, coloring, and styling",
  "imageUrl": "https://cdn.example.com/hair.jpg",
  "displayOrder": 1,
  "isActive": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

### ServiceDurationSegments

Breaks down service time into distinct phases.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `prep` | number | 0 | Preparation time in minutes |
| `active` | number | 60 | Hands-on active service time |
| `processing` | number | 0 | Processing/wait time |
| `finish` | number | 0 | Finishing time |
| `turnover` | number | 0 | Turnover/reset time |

---

### ServiceAvailability

Configures when a service is available for booking.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `mode` | enum | INHERIT | Availability mode |
| `weeklySchedule` | object | - | Weekly schedule (required when SCHEDULED) |
| `dateRanges` | array | - | Seasonal availability or blackout periods |

---

### ServiceBookingRules

Configures booking constraints and policies.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `onlineEnabled` | boolean | true | Online booking enabled |
| `existingOnly` | boolean | false | Only existing customers can book |
| `requiresConsult` | boolean | false | Consultation required first |
| `maxDaysOut` | number | 30 | Max days in advance |
| `minNoticeHours` | number | 0 | Minimum booking notice (hours) |
| `lateCancelHours` | number | 24 | Late cancellation threshold (hours) |

---

### ServiceAppointmentFieldConfig

Service-level field configuration (embedded in BusinessServiceConfig).

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `inheritedFieldKeys` | string[] | [] | Field keys inherited from org-level |
| `fieldOverrides` | array | [] | Service-specific field overrides |
| `additionalFields` | array | [] | Additional service-specific fields |
| `isActive` | boolean | true | Whether config is active |
| `reuseDetails` | boolean | false | Reuse customer details |

---

## Enums

### ServicePriceMode

| Value | Description |
|-------|-------------|
| `FIXED` | Fixed price for the service |
| `STARTS_AT` | Starting price, final may vary |
| `VARIABLE` | Variable pricing based on factors |

### ServiceGratuityMode

| Value | Description |
|-------|-------------|
| `NONE` | No gratuity accepted |
| `OPTIONAL` | Gratuity is optional |
| `REQUIRED` | Gratuity is required |

### ServiceAvailabilityMode

| Value | Description |
|-------|-------------|
| `ALWAYS` | Service available 24/7 |
| `SCHEDULED` | Service follows custom schedule |
| `INHERIT` | Service inherits business hours |

### ServiceDepositStrategy

| Value | Description |
|-------|-------------|
| `NONE` | No deposit required |
| `FIXED` | Fixed deposit amount |
| `PERCENTAGE` | Percentage of service price |

---

## Domain Aggregates

The Service Management system is organized into distinct domain aggregates:

### [Service Providers](./service-appointment-management/service-providers.md)

Staff members who perform services.

| Schema | Description |
|--------|-------------|
| ServicePerson | Staff member profile with skills, schedule, and booking settings |
| ServiceProvider | Links services to providers with optional overrides |
| ServiceProviderTimeOff | Time-off entries (recurring or one-time) |

**Key Features:**

- Provider profiles with avatar, description, and skills
- Commission percentage tracking for payroll
- Schedule linking for availability management
- Online/staff bookability controls
- Location assignment (or available at all locations)
- User account linking for calendar sync

---

### [Service Appointments](./service-appointment-management/service-appointments.md)

Booking management and calendar integration.

| Schema | Description |
|--------|-------------|
| ServiceAppointment | Scheduled appointment with customer and provider |
| ServiceSlotQueryRequest | Request for available time slots |
| ServiceSlotQueryResponse | Available slots response |
| ServiceCandidateSlot | Individual available time slot |

**Key Features:**

- Multi-channel booking (web, marketplace, partner)
- Calendar integration (Google, Outlook, Calendly)
- Pricing breakdown with deposits
- Provider assignment with slot indexing
- External system sync (Calendly, Acuity)
- Cancellation tracking with reasons

---

### [Dynamic Field Configuration](./service-appointment-management/appointment-fields.md)

Customizable booking form fields.

| Schema | Description |
|--------|-------------|
| AppointmentFieldConfig | Organization-level field library |
| AppointmentAdditionalInfo | Captured field values per appointment |

**Key Features:**

- Organization-level field definitions
- Field grouping for form sections
- Customer data reuse across appointments
- Required email/phone enforcement
- Dynamic field types (text, number, boolean, date, select)

---

### [Service Pricing Rules](./service-appointment-management/service-pricing-rules.md)

Conditional pricing and promotions.

| Schema | Description |
|--------|-------------|
| ServicePricingRule | Pricing rule with conditions and discount |
| ServicePricingRuleCondition | Matching criteria for rule application |

**Key Features:**

- Time-based promotions (effective dates)
- Channel-specific pricing
- Service targeting (all, any, or specific services)
- Stackable vs. exclusive rules
- Priority-based rule ordering
- Percentage or fixed amount adjustments

---

## Schema Relationships

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SCHEMA RELATIONSHIPS                               │
└─────────────────────────────────────────────────────────────────────────────┘

         ┌──────────────────┐
         │ ServiceCategory  │
         │   (grouping)     │
         └────────┬─────────┘
                  │ 1:N
                  ▼
         ┌──────────────────┐
         │ BusinessService  │───────────────────────┐
         │   (offering)     │                       │
         └────────┬─────────┘                       │
                  │                                 │
     ┌────────────┼────────────┐                    │
     │            │            │                    │
     ▼            ▼            ▼                    │
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐ │
│ServiceAvail-│ │ServiceDura- │ │ServiceBooking   │ │
│ability      │ │tionSegments │ │Rules            │ │
└─────────────┘ └─────────────┘ └─────────────────┘ │
                                                    │
                  ┌─────────────────────────────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ ServiceProvider  │
         │  (assignment)    │
         └────────┬─────────┘
                  │
     ┌────────────┼────────────┐
     │            │            │
     ▼            ▼            ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ServicePerson│ │ServiceAppt  │ │ServiceProvider  │
│  (staff)    │ │             │ │TimeOff          │
└─────────────┘ └─────────────┘ └─────────────────┘
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            ▼            ▼
┌─────────────┐ ┌─────────────────┐ ┌─────────────────┐
│Appointment  │ │AppointmentAddi- │ │ServicePricing   │
│FieldConfig  │ │tionalInfo       │ │Rule             │
└─────────────┘ └─────────────────┘ └─────────────────┘
```

---

## External Integrations

The system supports integration with external calendar and booking platforms:

### Calendar Providers

| Provider | Description |
|----------|-------------|
| Google | Google Calendar sync for appointments |
| Outlook | Microsoft Outlook calendar sync |
| Calendly | Calendly integration for external bookings |

### Channel Mappings

For services synced with external platforms:

```json
{
  "channelMappings": [
    {
      "channelId": "mindbody",
      "externalServiceId": "mb_12345",
      "externalCategoryId": "mb_cat_hair"
    },
    {
      "channelId": "yelp",
      "externalServiceId": "yelp_service_abc"
    }
  ]
}
```

---

## Best Practices

### Service Configuration

1. **Organize with categories** - Group related services into categories for better navigation.

2. **Use duration segments** - Break down complex services into prep/active/processing/finish/turnover phases.

3. **Set appropriate buffers** - Use `bufferBefore` and `bufferAfter` to prevent scheduling conflicts.

4. **Configure booking rules** - Set `maxDaysOut`, `minNoticeHours`, and `lateCancelHours` to match business policies.

5. **Use deposit strategies** - Require deposits for high-value or frequently cancelled services.

### Provider Management

6. **Always link user accounts** - Connect ServicePerson to userAccountId for calendar sync and staff login.

7. **Define skills consistently** - Use organization-level skill definitions and assign to providers.

8. **Set explicit schedules** - Link providers to scheduleId for accurate availability calculations.

9. **Use location assignments** - Assign providers to specific locations or leave null for all-location availability.

### Appointments

10. **Capture customer info at booking** - Store customerName and customerEmail for communication.

11. **Use pricing breakdowns** - Store detailed pricing in the `pricing` field for transparency.

12. **Track deposits separately** - Use `depositPaid` field for partial payment tracking.

13. **Record cancellation reasons** - Always populate `cancelReason` when cancelling.

### Dynamic Fields

14. **Design fields at org level** - Define reusable field configurations that services can inherit.

15. **Enable data reuse** - Set `reuseDetails: true` to pre-populate forms for returning customers.

16. **Group related fields** - Use field groups for logical form sections.

### Pricing Rules

17. **Use effective dates** - Schedule promotions with `effectiveFrom`/`effectiveTo` timestamps.

18. **Set appropriate priorities** - Higher priority rules take precedence.

19. **Consider stackability** - Decide if rules should combine or be exclusive.

---

## Quick Reference

### All Enums

| Enum | Values |
|------|--------|
| ServicePriceMode | FIXED, STARTS_AT, VARIABLE |
| ServiceGratuityMode | NONE, OPTIONAL, REQUIRED |
| ServiceAvailabilityMode | ALWAYS, SCHEDULED, INHERIT |
| ServiceDepositStrategy | NONE, FIXED, PERCENTAGE |
| AppointmentStatus | pending, confirmed, completed, cancelled, no_show |
| CalendarProvider | google, outlook, calendly |
| ServiceProviderTimeOffType | recurring, specific |
| ServiceProviderTimeOffStatus | approved, pending, rejected |
| PricingRuleApplyLevel | ORDER, LINE |
| PricingRuleAdjustmentType | PERCENTAGE, FIXED |
| PricingChannel | ALL, DIRECT, ONLINE, PHONE, WALK_IN |

### Common Query Patterns

All domains support pagination with:
- `page` (integer) - Page number (1-indexed)
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
