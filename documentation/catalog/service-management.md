# Service Management System Overview

This document provides a high-level overview of the Service Management system. For detailed schema documentation, see the domain-specific files in the [service-order-management](./service-order-management/) directory.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Domain Aggregates](#domain-aggregates)
4. [Schema Relationships](#schema-relationships)
5. [External Integrations](#external-integrations)
6. [Best Practices](#best-practices)

---

## Overview

The Service Management system provides a comprehensive solution for managing service-based businesses (salons, spas, consultations, etc.). It supports:

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
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │   Service    │───▶│  ServiceProvider │───▶│  ServicePerson   │  │
│  │  (external)  │    │  (assignment)    │    │     (staff)      │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│                              │                        │             │
│                              │                        │             │
│                              ▼                        ▼             │
│                      ┌──────────────────┐    ┌──────────────────┐  │
│                      │    Service       │    │  ServiceProvider │  │
│                      │   Appointment    │    │    TimeOff       │  │
│                      └──────────────────┘    └──────────────────┘  │
│                              │                                      │
│         ┌────────────────────┼────────────────────┐                │
│         │                    │                    │                │
│         ▼                    ▼                    ▼                │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │ Appointment  │    │  Appointment     │    │  ServiceSlot     │  │
│  │ FieldConfig  │    │ AdditionalInfo   │    │    Query         │  │
│  │  (org-level) │    │  (field values)  │    │  (availability)  │  │
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

## Domain Aggregates

The Service Management system is organized into distinct domain aggregates:

### [Service Providers](./service-order-management/service-providers.md)

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

### [Service Appointments](./service-order-management/service-appointments.md)

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

### [Dynamic Field Configuration](./service-order-management/appointment-fields.md)

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

### [Service Pricing Rules](./service-order-management/service-pricing-rules.md)

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
                    │  ServicePerson   │
                    │  (staff member)  │
                    └────────┬─────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
   ┌─────────────────┐  ┌─────────────┐  ┌─────────────────┐
   │ ServiceProvider │  │ TimeOff     │  │ ServiceSlot     │
   │ (service join)  │  │ (absence)   │  │ Query           │
   └────────┬────────┘  └─────────────┘  └─────────────────┘
            │
            │ references
            ▼
   ┌─────────────────┐     ┌──────────────────────┐
   │ Service         │     │ AppointmentFieldConfig│
   │ (external)      │     │ (org-level fields)   │
   └────────┬────────┘     └──────────┬───────────┘
            │                         │
            │                         │ defines fields for
            ▼                         ▼
   ┌─────────────────┐     ┌──────────────────────┐
   │ ServiceAppoint- │────▶│ AppointmentAdditional│
   │ ment            │     │ Info (field values)  │
   └────────┬────────┘     └──────────────────────┘
            │
            │ applies
            ▼
   ┌─────────────────┐
   │ServicePricing   │
   │Rule             │
   └─────────────────┘
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

### External Reference (Appointments)

For appointments synced from external platforms:

```json
{
  "externalRef": {
    "externalId": "calendly_event_12345",
    "source": "calendly",
    "url": "https://calendly.com/event/12345",
    "syncedAt": 1699900000
  }
}
```

---

## Best Practices

### Provider Management

1. **Always link user accounts** - Connect ServicePerson to userAccountId for calendar sync and staff login.

2. **Define skills consistently** - Use organization-level skill definitions and assign to providers.

3. **Set explicit schedules** - Link providers to scheduleId for accurate availability calculations.

4. **Use location assignments** - Assign providers to specific locations or leave null for all-location availability.

### Appointments

5. **Capture customer info at booking** - Store customerName and customerEmail for communication.

6. **Use pricing breakdowns** - Store detailed pricing in the `pricing` field for transparency.

7. **Track deposits separately** - Use `depositPaid` field for partial payment tracking.

8. **Record cancellation reasons** - Always populate `cancelReason` when cancelling.

### Dynamic Fields

9. **Design fields at org level** - Define reusable field configurations that services can inherit.

10. **Enable data reuse** - Set `reuseDetails: true` to pre-populate forms for returning customers.

11. **Group related fields** - Use field groups for logical form sections.

### Pricing Rules

12. **Use effective dates** - Schedule promotions with `effectiveFrom`/`effectiveTo` timestamps.

13. **Set appropriate priorities** - Higher priority rules take precedence.

14. **Consider stackability** - Decide if rules should combine or be exclusive.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
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
