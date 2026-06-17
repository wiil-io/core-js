# Reservation Management System Overview

This document provides comprehensive schema documentation for `src/core/business-mgt/reservation-mgt`.

The Reservation Management system models reservable inventory and bookings across three primary modes:

- **Table reservations** for restaurants, venues, floor plans, sections, and table assignments
- **Room reservations** for lodging inventory, nightly rates, physical room assignment, and maintenance blocks
- **Rental reservations** for rental fleets, rental tiers, deposits, waivers, identity checks, checklists, and unit assignments

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Detailed Domain Documentation](#detailed-domain-documentation)
4. [Domain Aggregates](#domain-aggregates)
5. [Resource Catalog](#resource-catalog)
6. [Reservation Records](#reservation-records)
7. [Assignment Records](#assignment-records)
8. [Floor Plans and Sections](#floor-plans-and-sections)
9. [Slot Query Schemas](#slot-query-schemas)
10. [Reservation Settings](#reservation-settings)
11. [Maintenance Blocks](#maintenance-blocks)
12. [Resource Versioning](#resource-versioning)
13. [Schema Relationships](#schema-relationships)
14. [Validation Rules](#validation-rules)
15. [External Integrations](#external-integrations)
16. [Query Options](#query-options)
17. [Best Practices](#best-practices)
18. [Quick Reference](#quick-reference)

---

## Detailed Domain Documentation

For detailed schema documentation by domain aggregate, see:

| Document | Domain |
|----------|--------|
| [Resource Catalog](./reservation-management/resource-catalog.md) | Resource categories, resources, instances, capacity, pricing, and versioning |
| [Reservation Records](./reservation-management/reservation-records.md) | Table, room, and rental reservation records |
| [Assignments](./reservation-management/assignments.md) | Table, room, and rental physical-instance assignments |
| [Floor Plans](./reservation-management/floor-plans.md) | Floor plans, sections, geometry, and table placements |
| [Slot Queries](./reservation-management/slot-queries.md) | Table, room, and rental availability request/response schemas |
| [Settings and Operations](./reservation-management/settings-and-operations.md) | Reservation settings, maintenance blocks, and resource versioning |

---

## Overview

Reservation Management is organized around a shared resource catalog and mode-specific reservation records.

The resource catalog defines what can be reserved:

- `ResourceCategory` groups resources by business use and display order.
- `Resource` defines a reservable resource type, such as a table type, room type, or rental item type.
- `ResourceInstance` represents a physical unit, such as table 12, room 204, or bike unit B-17.
- Resource definition payloads create a resource and its instances together for room and rental inventory.

Reservation records capture customer bookings:

- `TableReservation` stores party size, time, duration, floor-plan preference, VIP status, and special requests.
- `RoomReservation` stores stay dates, nights, per-night rates, deposit, and payment status.
- `RentalReservation` stores rental period, tier, payment, deposit status, checklist completion, waiver, and ID verification.

Operational records manage fulfillment:

- Assignment schemas bind a reservation to a physical resource instance.
- Floor plan schemas model table layout, sections, and table placement.
- Maintenance blocks remove physical instances from availability.
- Slot query schemas expose candidate availability for table, room, and rental flows.

---

## Architecture

```text
RESERVATION MANAGEMENT SYSTEM

Resource Catalog
  ResourceCategory
    -> Resource
       -> ResourceInstance

Reservations
  TableReservation
    -> TableAssignment
       -> ResourceInstance
       -> FloorPlan / Section / TablePlacement

  RoomReservation
    -> RoomAssignment
       -> ResourceInstance
       -> MaintenanceBlock

  RentalReservation
    -> RentalAssignment
       -> ResourceInstance
       -> ChecklistTemplateItem
       -> ReservationSettings.rental.tiers

Availability
  ReservationSlotQueryRequest
    -> TableReservationSlotQueryRequest
    -> RoomReservationSlotQueryRequest
    -> RentalReservationSlotQueryRequest

Configuration
  ReservationSettings
  ResourceDefinition / ResourceRevision
```

---

## Domain Aggregates

### Resource Catalog

| Schema | Description |
|--------|-------------|
| `ResourceCategory` | Groups reservation resources for browsing, filtering, and external channel mapping |
| `Resource` | Defines a reservable resource type and its capacity, pricing, booking, display, and checklist settings |
| `ResourceInstance` | Physical unit under a resource, such as a table, room, or rental item |

### Reservation Records

| Schema | Description |
|--------|-------------|
| `TableReservation` | Time-window reservation for table-based businesses |
| `RoomReservation` | Date-range lodging reservation with nightly pricing |
| `RentalReservation` | Time-window or date-range rental booking with deposit and inspection state |

### Assignment Records

| Schema | Description |
|--------|-------------|
| `TableAssignment` | Physical table assignment for a table reservation |
| `RoomAssignment` | Physical room assignment for a room reservation |
| `RentalAssignment` | Physical rental unit assignment for a rental reservation |

### Layout and Operations

| Schema | Description |
|--------|-------------|
| `FloorPlan` | Canvas and metadata for a table layout |
| `Section` | Named seating area in a floor plan |
| `TablePlacement` | Coordinates, size, shape, party range, and combinability for a physical table |
| `MaintenanceBlock` | Period where a resource instance is unavailable |
| `ReservationSettings` | Location-level settings for table, room, and rental reservation modes |

---

## Resource Catalog

### ResourceCategory

Groups resources by category, location scope, type, and display order.

#### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "resourceRevisionId": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": ["string", "null"] },
    "channelMappings": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "channelId": { "type": "string" },
          "externalCategoryId": { "type": "string" }
        },
        "required": ["channelId", "externalCategoryId"]
      }
    },
    "resourceType": { "type": ["string", "null"], "enum": ["table", "room", "rental", "rentals", "resource", null] },
    "displayOrder": { "type": ["integer", "null"] },
    "isActive": { "type": "boolean", "default": true },
    "metadata": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "name"]
}
```

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `resourceRevisionId` | string | No | Version-scoped resource revision ID |
| `locationId` | string \| null | No | Location scope. Null applies across locations |
| `name` | string | Yes | Category display name |
| `description` | string \| null | No | Category description |
| `channelMappings` | ResourceCategoryChannelMapping[] \| null | No | External category IDs by channel |
| `resourceType` | ResourceType \| null | No | Optional type scope |
| `displayOrder` | number \| null | No | Display order for category lists |
| `isActive` | boolean | Yes | Whether category is active |
| `metadata` | object \| null | No | Additional category metadata |

#### Example

```json
{
  "id": "rc_private_dining",
  "locationId": "loc_downtown",
  "name": "Private Dining",
  "description": "Reservable dining rooms and premium table areas",
  "resourceType": "table",
  "displayOrder": 10,
  "isActive": true,
  "channelMappings": [
    {
      "channelId": "opentable",
      "externalCategoryId": "ot_private_dining"
    }
  ],
  "metadata": {
    "visibleOnline": true
  },
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

### Resource

Defines a reservable type or category, including its capacity model, pricing model, instances, booking rules, and rental checklist.

#### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "resourceRevisionId": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "resourceType": { "type": "string", "enum": ["table", "room", "rental", "rentals", "resource"] },
    "categoryId": { "type": ["string", "null"] },
    "name": { "type": "string" },
    "description": { "type": ["string", "null"] },
    "imageUrls": { "type": ["array", "null"], "items": { "type": "string", "format": "uri" } },
    "capacity": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "capacityConfig": { "oneOf": [{ "$ref": "#/$defs/ResourceCapacity" }, { "type": "null" }] },
    "isAvailable": { "type": "boolean", "default": true },
    "channelMappings": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "channelId": { "type": "string" },
          "externalResourceId": { "type": "string" }
        },
        "required": ["channelId", "externalResourceId"]
      }
    },
    "location": { "type": "string" },
    "amenities": { "type": "array", "items": { "type": "string" }, "default": [] },
    "instances": { "type": ["array", "null"], "items": { "type": "string" } },
    "pricing": { "oneOf": [{ "$ref": "#/$defs/ResourcePricingStrategy" }, { "type": "null" }] },
    "turnoverMinutes": { "type": ["integer", "null"], "minimum": 0 },
    "attributes": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "key": { "type": "string" },
          "value": { "type": "string" }
        },
        "required": ["key", "value"]
      }
    },
    "bookingRules": { "type": ["object", "null"], "additionalProperties": true },
    "depositStrategy": { "type": ["string", "null"] },
    "reservationDuration": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "reservationDurationUnit": { "type": ["string", "null"], "enum": ["minutes", "hours", "nights", null] },
    "checklistTemplate": { "type": "array", "items": { "$ref": "#/$defs/ChecklistTemplateItem" }, "default": [] },
    "applicableTierIds": { "type": "array", "items": { "type": "string" }, "default": [] },
    "displayOrder": { "type": ["integer", "null"], "minimum": 0 },
    "metadata": { "type": "object", "additionalProperties": true }
  },
  "required": ["id", "resourceType", "name"]
}
```

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `resourceRevisionId` | string | No | Version-scoped resource revision ID |
| `locationId` | string \| null | No | Location scope. Null applies across locations |
| `resourceType` | ResourceType | Yes | table, room, rental, rentals, or resource |
| `categoryId` | string \| null | No | Resource category ID |
| `name` | string | Yes | Resource display name |
| `description` | string \| null | No | Resource description |
| `imageUrls` | string[] \| null | No | Public image URLs |
| `capacity` | number \| null | No | Simple maximum capacity |
| `capacityConfig` | ResourceCapacity \| null | No | Mode-specific capacity model |
| `isAvailable` | boolean | Yes | Whether resource can be reserved |
| `channelMappings` | ResourceChannelMapping[] \| null | No | External resource IDs by channel |
| `location` | string | No | Physical label such as floor, building, or pickup area |
| `amenities` | string[] | Yes | Resource amenities |
| `instances` | string[] \| null | No | Physical resource instance IDs |
| `pricing` | ResourcePricingStrategy \| null | No | Mode-specific pricing model |
| `turnoverMinutes` | number \| null | No | Reset time between reservations |
| `attributes` | ResourceAttribute[] \| null | No | Flexible key/value attributes |
| `bookingRules` | object \| null | No | Booking rules shared with service workflows |
| `depositStrategy` | ServiceDepositStrategy \| null | No | Deposit strategy |
| `reservationDuration` | number \| null | No | Default duration |
| `reservationDurationUnit` | ResourceReservationDurationUnit \| null | No | Duration unit |
| `checklistTemplate` | ChecklistTemplateItem[] | Yes | Rental pickup/return checklist |
| `applicableTierIds` | string[] | Yes | Rental tiers applicable to this resource |
| `displayOrder` | number \| null | No | Display order |
| `metadata` | object | No | Integration/rendering metadata |

### Capacity Models

```json
{
  "$id": "#/$defs/ResourceCapacity",
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "range" },
        "min": { "type": "integer", "exclusiveMinimum": 0 },
        "max": { "type": "integer", "exclusiveMinimum": 0 }
      },
      "required": ["kind", "min", "max"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "occupancy" },
        "standard": { "type": "integer", "exclusiveMinimum": 0 },
        "max": { "type": "integer", "exclusiveMinimum": 0 },
        "extraFee": { "type": ["number", "null"], "minimum": 0 }
      },
      "required": ["kind", "standard", "max"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "single" },
        "value": { "type": "integer", "exclusiveMinimum": 0 },
        "weightLimit": { "type": ["number", "null"], "exclusiveMinimum": 0 },
        "skillLevel": { "type": ["string", "null"] }
      },
      "required": ["kind", "value"]
    }
  ]
}
```

| Resource Type | Required Capacity Kind | Typical Use |
|---------------|------------------------|-------------|
| `table` | `range` | Minimum and maximum party size |
| `room` | `occupancy` | Standard and maximum guest occupancy |
| `rental` | `single` | One unit, optional weight/skill constraints |

### Pricing Models

```json
{
  "$id": "#/$defs/ResourcePricingStrategy",
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "none" },
        "holdPolicy": { "type": ["string", "null"] }
      },
      "required": ["kind"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "dayOfWeek" },
        "rates": {
          "type": "object",
          "properties": {
            "mon": { "type": "number", "minimum": 0 },
            "tue": { "type": "number", "minimum": 0 },
            "wed": { "type": "number", "minimum": 0 },
            "thu": { "type": "number", "minimum": 0 },
            "fri": { "type": "number", "minimum": 0 },
            "sat": { "type": "number", "minimum": 0 },
            "sun": { "type": "number", "minimum": 0 }
          },
          "required": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
        }
      },
      "required": ["kind", "rates"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "tiered" },
        "tiers": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "properties": {
              "from": { "type": "number", "minimum": 0 },
              "to": { "type": ["number", "null"], "minimum": 0 },
              "price": { "type": "number", "minimum": 0 }
            },
            "required": ["from", "price"]
          }
        }
      },
      "required": ["kind", "tiers"]
    }
  ]
}
```

| Resource Type | Required Pricing Kind | Typical Use |
|---------------|-----------------------|-------------|
| `table` | `none` | Hold policies without price quoting |
| `room` | `dayOfWeek` | Nightly room rates by weekday |
| `rental` | `tiered` | Duration or quantity bands |

### Resource Example: Table

```json
{
  "id": "res_table_standard",
  "locationId": "loc_downtown",
  "resourceType": "table",
  "categoryId": "rc_main_dining",
  "name": "Standard Dining Table",
  "description": "Standard indoor dining table",
  "capacity": 4,
  "capacityConfig": {
    "kind": "range",
    "min": 2,
    "max": 4
  },
  "isAvailable": true,
  "pricing": {
    "kind": "none",
    "holdPolicy": "Held for 15 minutes after reservation time"
  },
  "turnoverMinutes": 15,
  "amenities": ["indoor"],
  "displayOrder": 1,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

### Resource Example: Room

```json
{
  "id": "res_king_suite",
  "locationId": "loc_hotel",
  "resourceType": "room",
  "categoryId": "rc_suites",
  "name": "King Suite",
  "description": "King suite with separate living area",
  "capacityConfig": {
    "kind": "occupancy",
    "standard": 2,
    "max": 4,
    "extraFee": 25
  },
  "pricing": {
    "kind": "dayOfWeek",
    "rates": {
      "mon": 220,
      "tue": 220,
      "wed": 240,
      "thu": 260,
      "fri": 320,
      "sat": 340,
      "sun": 250
    }
  },
  "amenities": ["wifi", "kitchenette", "city-view"],
  "isAvailable": true
}
```

### Resource Example: Rental

```json
{
  "id": "res_ebike",
  "locationId": "loc_marina",
  "resourceType": "rental",
  "categoryId": "rc_bikes",
  "name": "Electric Bike",
  "capacityConfig": {
    "kind": "single",
    "value": 1,
    "weightLimit": 275,
    "skillLevel": "beginner"
  },
  "pricing": {
    "kind": "tiered",
    "tiers": [
      { "from": 0, "to": 120, "price": 35 },
      { "from": 121, "to": 240, "price": 55 },
      { "from": 241, "to": null, "price": 85 }
    ]
  },
  "applicableTierIds": ["tier_2hr", "tier_half_day", "tier_full_day"],
  "checklistTemplate": [
    {
      "id": "helmet",
      "label": "Helmet included",
      "required": true,
      "phase": "pickup"
    },
    {
      "id": "battery",
      "label": "Battery charge recorded",
      "required": true,
      "phase": "both"
    }
  ],
  "isAvailable": true
}
```

---

### ResourceInstance

Represents a physical unit under a resource.

#### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "resourceRevisionId": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "resourceId": { "type": "string" },
    "name": { "type": ["string", "null"] },
    "code": { "type": ["string", "null"] },
    "status": {
      "type": "string",
      "enum": ["available", "reserved", "occupied", "maintenance", "cleaning", "out_of_service"],
      "default": "available"
    },
    "isAvailable": { "type": "boolean", "default": true },
    "attributes": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "key": { "type": "string" },
          "value": { "type": "string" }
        },
        "required": ["key", "value"]
      }
    }
  },
  "required": ["id", "resourceId"]
}
```

#### ResourceInstanceStatus Enum

```json
["available", "reserved", "occupied", "maintenance", "cleaning", "out_of_service"]
```

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `resourceRevisionId` | string | No | Version-scoped resource revision ID |
| `locationId` | string \| null | No | Location where instance exists |
| `resourceId` | string | Yes | Parent resource ID |
| `name` | string \| null | No | Instance name |
| `code` | string \| null | No | Instance code or number |
| `status` | ResourceInstanceStatus | Yes | Operational status |
| `isAvailable` | boolean | Yes | Whether instance can be assigned |
| `attributes` | ResourceInstanceAttribute[] \| null | No | Instance attributes |

#### Example

```json
{
  "id": "room_204",
  "resourceId": "res_king_suite",
  "locationId": "loc_hotel",
  "name": "Room 204",
  "code": "204",
  "status": "available",
  "isAvailable": true,
  "attributes": [
    { "key": "floor", "value": "2" },
    { "key": "view", "value": "city" }
  ]
}
```

---

## Reservation Records

### TableReservation

Time-window reservation for table-based venues.

#### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "channelId": { "type": ["string", "null"] },
    "resourceId": { "type": "string" },
    "customerId": { "type": "string" },
    "floorPlanId": { "type": ["string", "null"] },
    "floorPlanSectionId": { "type": ["string", "null"] },
    "personsNumber": { "type": "integer", "exclusiveMinimum": 0 },
    "time": { "type": "number" },
    "duration": { "type": "integer", "exclusiveMinimum": 0 },
    "status": {
      "type": "string",
      "enum": ["pending", "confirmed", "seated", "checked_in", "completed", "cancelled", "no_show"],
      "default": "pending"
    },
    "source": { "type": ["string", "null"] },
    "notes": { "type": ["string", "null"] },
    "isVip": { "type": "boolean", "default": false },
    "specialRequests": { "type": ["string", "null"] },
    "externalRef": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "resourceId", "customerId", "personsNumber", "time", "duration"]
}
```

#### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `locationId` | string \| null | No | Business location ID |
| `channelId` | string \| null | No | Booking channel |
| `resourceId` | string | Yes | Table resource or category ID |
| `customerId` | string | Yes | Customer ID |
| `floorPlanId` | string \| null | No | Floor plan ID |
| `floorPlanSectionId` | string \| null | No | Floor plan section ID |
| `personsNumber` | number | Yes | Party size |
| `time` | number | Yes | Reservation start timestamp |
| `duration` | number | Yes | Expected duration in minutes |
| `status` | ReservationStatus | Yes | Reservation lifecycle status |
| `source` | string \| null | No | Source/channel label |
| `notes` | string \| null | No | Internal notes |
| `isVip` | boolean | Yes | VIP flag |
| `specialRequests` | string \| null | No | Guest special requests |
| `externalRef` | object \| null | No | External platform reference |

#### Example

```json
{
  "id": "tbl_res_123",
  "locationId": "loc_downtown",
  "channelId": "web",
  "resourceId": "res_table_standard",
  "customerId": "cust_123",
  "floorPlanId": "fp_main",
  "floorPlanSectionId": "sec_patio",
  "personsNumber": 4,
  "time": 1705330800,
  "duration": 90,
  "status": "confirmed",
  "source": "direct",
  "notes": "Anniversary dinner",
  "isVip": true,
  "specialRequests": "Window table if available",
  "externalRef": null,
  "createdAt": 1705250000,
  "updatedAt": 1705250000
}
```

---

### RoomReservation

Date-range lodging reservation with nightly rates.

#### Validation Rules

- `checkOut` must be greater than `checkIn`.
- `nights` must be a positive integer.
- `totalWithTax` and `deposit` must be nonnegative.

#### Example

```json
{
  "id": "room_res_123",
  "locationId": "loc_hotel",
  "channelId": "booking-com",
  "resourceId": "res_king_suite",
  "guestId": "cust_456",
  "personsNumber": 2,
  "checkIn": 1705453200,
  "checkOut": 1705626000,
  "nights": 2,
  "status": "confirmed",
  "source": "booking-com",
  "ratePerNight": [
    { "date": "2024-01-16", "amount": 220 },
    { "date": "2024-01-17", "amount": 240 }
  ],
  "totalWithTax": 501.4,
  "deposit": 100,
  "paymentStatus": "partial",
  "notes": "Late arrival",
  "externalRef": {
    "externalId": "booking_98765",
    "source": "booking-com",
    "url": "https://booking.example/reservations/98765",
    "syncedAt": 1705250000
  }
}
```

---

### RentalReservation

Time-bounded or date-bounded rental booking.

#### Validation Rules

- `endAt` must be greater than `startAt`.
- `actualReturnAt`, when provided, must be greater than or equal to `startAt`.
- `payment.rentalCharge` and `payment.securityDeposit` must be nonnegative.

#### RentalReservationStatus Enum

```json
["upcoming", "pickup_soon", "out", "returned", "overdue", "cancelled"]
```

#### Example

```json
{
  "id": "rental_res_123",
  "locationId": "loc_marina",
  "channelId": "web",
  "customerId": "cust_789",
  "resourceId": "res_ebike",
  "startAt": 1705330800,
  "endAt": 1705345200,
  "actualReturnAt": null,
  "tierId": "tier_half_day",
  "status": "upcoming",
  "payment": {
    "rentalCharge": 55,
    "securityDeposit": 150,
    "depositStatus": "pending"
  },
  "checklistCompletions": [
    {
      "itemId": "helmet",
      "completed": true,
      "completedAt": 1705330200,
      "completedBy": "staff_1"
    }
  ],
  "waiver": {
    "waiverId": "waiver_123",
    "signedAt": 1705329900,
    "status": "signed"
  },
  "idVerification": {
    "verificationId": "idv_123",
    "provider": "stripe_identity",
    "verifiedAt": 1705329800,
    "status": "verified"
  },
  "notes": "Customer requested child seat",
  "externalRef": null
}
```

---

## Assignment Records

Assignments bind reservations to physical resource instances. Assignments are separate from reservations so optimization, reassignment, release, and audit workflows can evolve independently.

### TableAssignment

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "tableInstanceId": { "type": "string" },
    "floorPlanId": { "type": "string" },
    "floorPlanSectionId": { "type": ["string", "null"] },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "assignedBy": { "type": ["string", "null"] },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "tableInstanceId", "floorPlanId", "slotStart", "slotEnd", "assignedAt"]
}
```

### RoomAssignment

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "roomInstanceId": { "type": "string" },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "assignedBy": { "type": ["string", "null"] },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "housekeepingNotes": { "type": ["string", "null"] },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "roomInstanceId", "slotStart", "slotEnd", "assignedAt"]
}
```

### RentalAssignment

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "rentalInstanceId": { "type": "string" },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "assignedBy": { "type": ["string", "null"] },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "conditionAtPickup": { "oneOf": [{ "$ref": "#/$defs/RentalUnitCondition" }, { "type": "null" }] },
    "conditionAtReturn": { "oneOf": [{ "$ref": "#/$defs/RentalUnitCondition" }, { "type": "null" }] },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "rentalInstanceId", "slotStart", "slotEnd", "assignedAt"]
}
```

### Assignment Enums

```json
{
  "assignmentType": ["soft", "hard"],
  "status": ["assigned", "reassigned", "released"]
}
```

Room and rental assignments use the same `soft` / `hard` type values and `assigned` / `reassigned` / `released` status values.

### Rental Unit Condition

```json
{
  "$id": "#/$defs/RentalUnitCondition",
  "type": "object",
  "properties": {
    "recordedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "recordedBy": { "type": "string" },
    "notes": { "type": ["string", "null"] },
    "damageReported": { "type": "boolean", "default": false },
    "imageUrls": {
      "type": ["array", "null"],
      "items": { "type": "string", "format": "uri" }
    }
  },
  "required": ["recordedAt", "recordedBy"]
}
```

### Assignment Example

```json
{
  "id": "assign_table_123",
  "locationId": "loc_downtown",
  "reservationId": "tbl_res_123",
  "tableInstanceId": "table_12",
  "floorPlanId": "fp_main",
  "floorPlanSectionId": "sec_patio",
  "assignmentType": "hard",
  "status": "assigned",
  "assignedAt": 1705329000,
  "assignedBy": "staff_host_1",
  "releasedAt": null,
  "releasedBy": null,
  "notes": "VIP guest requested this table"
}
```

---

## Floor Plans and Sections

### FloorPlan

Defines a floor plan canvas and metadata.

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": "string" },
    "imageUrls": { "type": ["array", "null"], "items": { "type": "string", "format": "uri" } },
    "isActive": { "type": "boolean", "default": true },
    "canvasDimensions": { "$ref": "#/$defs/CanvasDimensions" },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "metadata": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "name", "description", "canvasDimensions", "capacity"]
}
```

### CanvasDimensions

```json
{
  "$id": "#/$defs/CanvasDimensions",
  "type": "object",
  "properties": {
    "width": { "type": "number", "exclusiveMinimum": 0 },
    "height": { "type": "number", "exclusiveMinimum": 0 },
    "unit": { "type": "string", "enum": ["px", "ft", "m"], "default": "px" }
  },
  "required": ["width", "height"]
}
```

### Section

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": "string" },
    "floorPlanId": { "type": "string" },
    "name": { "type": "string", "minLength": 1 },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "color": { "type": "string", "pattern": "^#[0-9A-Fa-f]{6}$" },
    "isActive": { "type": "boolean", "default": true },
    "sortOrder": { "type": "integer", "minimum": 0, "default": 0 },
    "tables": { "type": "array", "items": { "$ref": "#/$defs/TablePlacement" }, "default": [] },
    "geometry": { "type": ["object", "null"] }
  },
  "required": ["id", "locationId", "floorPlanId", "name", "capacity", "color"]
}
```

### TablePlacement

```json
{
  "$id": "#/$defs/TablePlacement",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "tableResourceId": { "type": "string" },
    "floorPlanSectionId": { "type": "string" },
    "number": { "type": "string" },
    "x": { "type": "number" },
    "y": { "type": "number" },
    "width": { "type": "number", "exclusiveMinimum": 0 },
    "height": { "type": "number", "exclusiveMinimum": 0 },
    "shape": { "type": "string", "enum": ["round", "square", "booth", "rect", "curved", "high_top", "bar"] },
    "rotation": { "type": ["number", "null"] },
    "minParty": { "type": "integer", "exclusiveMinimum": 0 },
    "maxParty": { "type": "integer", "exclusiveMinimum": 0 },
    "combinableWith": { "type": "array", "items": { "type": "string" }, "default": [] },
    "serverSectionId": { "type": ["string", "null"] }
  },
  "required": ["id", "tableResourceId", "floorPlanSectionId", "number", "x", "y", "width", "height", "shape", "minParty", "maxParty"]
}
```

### TableShape Enum

```json
["round", "square", "booth", "rect", "curved", "high_top", "bar"]
```

### Layout Validation Rules

- `TablePlacement.maxParty` must be greater than or equal to `minParty`.
- `TablePlacement.combinableWith` cannot include the table's own `tableResourceId`.
- `Section.color` must be a six-character hex color such as `#336699`.
- `SectionGeometry.kind = "polygon"` requires 3 to 64 points.

### Floor Plan Example

```json
{
  "id": "fp_main",
  "locationId": "loc_downtown",
  "name": "Main Dining Room",
  "description": "Primary indoor dining layout",
  "imageUrls": null,
  "isActive": true,
  "canvasDimensions": {
    "width": 1200,
    "height": 800,
    "unit": "px"
  },
  "capacity": 96,
  "metadata": {
    "floor": "1"
  }
}
```

---

## Slot Query Schemas

Slot query schemas model availability requests and responses for each resource type.

### Request Union

```json
{
  "oneOf": [
    { "$ref": "#/$defs/TableReservationSlotQueryRequest" },
    { "$ref": "#/$defs/RoomReservationSlotQueryRequest" },
    { "$ref": "#/$defs/RentalReservationSlotQueryRequest" }
  ],
  "discriminator": {
    "propertyName": "resourceType"
  }
}
```

### Shared Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resourceType` | ResourceType | Yes | table, room, or rental |
| `locationId` | string \| null | No | Location scope |
| `resourceId` | string \| null | No | Resource or category scope |
| `localDate` | string | Yes | Business-local date in YYYY-MM-DD format |
| `maxResults` | number | Yes | Max results, default 20, max 1000 |

### TableReservationSlotQueryRequest

```json
{
  "$id": "#/$defs/TableReservationSlotQueryRequest",
  "type": "object",
  "properties": {
    "resourceType": { "type": "string", "const": "table" },
    "locationId": { "type": ["string", "null"] },
    "resourceId": { "type": ["string", "null"] },
    "localDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "maxResults": { "type": "integer", "exclusiveMinimum": 0, "maximum": 1000, "default": 20 },
    "partySize": { "type": "integer", "exclusiveMinimum": 0 },
    "floorPlanId": { "type": ["string", "null"] },
    "floorPlanSectionId": { "type": ["string", "null"] }
  },
  "required": ["resourceType", "localDate", "partySize"]
}
```

### RoomReservationSlotQueryRequest

```json
{
  "$id": "#/$defs/RoomReservationSlotQueryRequest",
  "type": "object",
  "properties": {
    "resourceType": { "type": "string", "const": "room" },
    "locationId": { "type": ["string", "null"] },
    "resourceId": { "type": ["string", "null"] },
    "localDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "maxResults": { "type": "integer", "exclusiveMinimum": 0, "maximum": 1000, "default": 20 },
    "nights": { "type": "integer", "exclusiveMinimum": 0, "default": 1 },
    "occupancy": { "type": ["integer", "null"], "exclusiveMinimum": 0 }
  },
  "required": ["resourceType", "localDate"]
}
```

### RentalReservationSlotQueryRequest

```json
{
  "$id": "#/$defs/RentalReservationSlotQueryRequest",
  "type": "object",
  "properties": {
    "resourceType": { "type": "string", "const": "rental" },
    "locationId": { "type": ["string", "null"] },
    "resourceId": { "type": ["string", "null"] },
    "localDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "maxResults": { "type": "integer", "exclusiveMinimum": 0, "maximum": 1000, "default": 20 },
    "returnDate": { "type": ["string", "null"], "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "tierId": { "type": ["string", "null"] },
    "durationMinutes": { "type": ["integer", "null"], "exclusiveMinimum": 0 }
  },
  "required": ["resourceType", "localDate"]
}
```

### Candidate Slot Schemas

#### Table Candidate

```json
{
  "$id": "#/$defs/ReservationCandidateSlot",
  "type": "object",
  "properties": {
    "resourceId": { "type": "string" },
    "startTimeOfDay": { "type": "string", "pattern": "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(AM|PM)$" },
    "startMinuteOfDay": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "endMinuteOfDay": { "type": "integer", "minimum": 1, "maximum": 1440 },
    "startTimeUtcSec": { "type": "number" },
    "endTimeUtcSec": { "type": "number" },
    "isAvailable": { "type": "boolean", "default": true },
    "capacityRemaining": { "type": ["integer", "null"], "minimum": 0 },
    "priceQuote": { "type": ["number", "null"], "minimum": 0 }
  },
  "required": ["resourceId", "startTimeOfDay", "startMinuteOfDay", "endMinuteOfDay", "startTimeUtcSec", "endTimeUtcSec"]
}
```

#### Room Candidate

```json
{
  "$id": "#/$defs/RoomCandidateSlot",
  "type": "object",
  "properties": {
    "resourceId": { "type": "string" },
    "checkInDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "checkOutDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "nights": { "type": "integer", "exclusiveMinimum": 0 },
    "occupancy": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "roomsAvailable": { "type": "integer", "minimum": 0 },
    "ratePerNight": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "date": { "type": "string" },
          "amount": { "type": "number", "minimum": 0 }
        },
        "required": ["date", "amount"]
      },
      "default": []
    },
    "totalWithTax": { "type": "number", "minimum": 0 },
    "isAvailable": { "type": "boolean", "default": true }
  },
  "required": ["resourceId", "checkInDate", "checkOutDate", "nights", "roomsAvailable", "totalWithTax"]
}
```

#### Rental Candidate

```json
{
  "$id": "#/$defs/RentalCandidateSlot",
  "type": "object",
  "properties": {
    "resourceId": { "type": "string" },
    "pickupDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "returnDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
    "pickupTimeOfDay": { "type": ["string", "null"], "pattern": "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(AM|PM)$" },
    "returnTimeOfDay": { "type": ["string", "null"], "pattern": "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(AM|PM)$" },
    "durationMinutes": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "startTimeUtcSec": { "type": "number" },
    "endTimeUtcSec": { "type": "number" },
    "unitsAvailable": { "type": "integer", "minimum": 0 },
    "totalWithTax": { "type": "number", "minimum": 0 },
    "priceQuote": { "type": ["number", "null"], "minimum": 0 },
    "isAvailable": { "type": "boolean", "default": true }
  },
  "required": ["resourceId", "pickupDate", "returnDate", "startTimeUtcSec", "endTimeUtcSec", "unitsAvailable", "totalWithTax"]
}
```

### Response Examples

#### Table Slot Response

```json
{
  "resourceType": "table",
  "localDate": "2024-01-15",
  "generatedAt": 1705330000,
  "slots": [
    {
      "resourceId": "res_table_standard",
      "startTimeOfDay": "6:00 PM",
      "startMinuteOfDay": 1080,
      "endMinuteOfDay": 1170,
      "startTimeUtcSec": 1705360800,
      "endTimeUtcSec": 1705366200,
      "isAvailable": true,
      "capacityRemaining": 3,
      "priceQuote": null
    }
  ]
}
```

#### Room Slot Response

```json
{
  "resourceType": "room",
  "checkInDate": "2024-01-16",
  "checkOutDate": "2024-01-18",
  "nights": 2,
  "generatedAt": 1705330000,
  "slots": [
    {
      "resourceId": "res_king_suite",
      "checkInDate": "2024-01-16",
      "checkOutDate": "2024-01-18",
      "nights": 2,
      "occupancy": 4,
      "roomsAvailable": 2,
      "ratePerNight": [
        { "date": "2024-01-16", "amount": 220 },
        { "date": "2024-01-17", "amount": 240 }
      ],
      "totalWithTax": 501.4,
      "isAvailable": true
    }
  ]
}
```

---

## Reservation Settings

`ReservationSettings` stores location-level configuration for table, room, and rental reservation modes.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "table": { "oneOf": [{ "$ref": "#/$defs/TableReservationSettings" }, { "type": "null" }] },
    "room": { "oneOf": [{ "$ref": "#/$defs/RoomReservationSettings" }, { "type": "null" }] },
    "rental": { "oneOf": [{ "$ref": "#/$defs/RentalReservationSettings" }, { "type": "null" }] },
    "supportTableReservations": { "type": "boolean", "default": false },
    "supportRoomReservations": { "type": "boolean", "default": false },
    "supportRentalReservations": { "type": "boolean", "default": false }
  },
  "required": ["id"]
}
```

### TableReservationSettings

```json
{
  "$id": "#/$defs/TableReservationSettings",
  "type": "object",
  "properties": {
    "settingType": { "type": "string", "enum": ["capacity", "resource_specific"], "default": "capacity" },
    "defaultDurationMinutes": { "type": "integer", "exclusiveMinimum": 0, "default": 90 },
    "turnoverMinutes": { "type": "integer", "minimum": 0, "default": 15 },
    "slotIntervalMinutes": { "type": "integer", "exclusiveMinimum": 0, "default": 15 },
    "maxPartySize": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "advanceBookingDays": { "type": "integer", "exclusiveMinimum": 0, "default": 30 }
  }
}
```

### RoomReservationSettings

```json
{
  "$id": "#/$defs/RoomReservationSettings",
  "type": "object",
  "properties": {
    "checkInTime": { "type": "string", "pattern": "^([01]\\d|2[0-3]):([0-5]\\d)$", "default": "15:00" },
    "checkOutTime": { "type": "string", "pattern": "^([01]\\d|2[0-3]):([0-5]\\d)$", "default": "11:00" },
    "minStayNights": { "type": "integer", "exclusiveMinimum": 0, "default": 1 },
    "maxStayNights": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "advanceBookingDays": { "type": "integer", "exclusiveMinimum": 0, "default": 90 }
  }
}
```

### RentalReservationSettings

```json
{
  "$id": "#/$defs/RentalReservationSettings",
  "type": "object",
  "properties": {
    "tiers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string", "minLength": 1 },
          "durationMinutes": { "type": "integer", "exclusiveMinimum": 0 },
          "sortOrder": { "type": "integer", "minimum": 0, "default": 0 }
        },
        "required": ["id", "name", "durationMinutes"]
      },
      "default": []
    },
    "requireWaiver": { "type": "boolean", "default": false },
    "requireIdVerification": { "type": "boolean", "default": false },
    "defaultDepositPercent": { "type": ["number", "null"], "minimum": 0, "maximum": 100 }
  }
}
```

### Settings Example

```json
{
  "id": "res_settings_loc_marina",
  "locationId": "loc_marina",
  "table": null,
  "room": null,
  "rental": {
    "tiers": [
      {
        "id": "tier_2hr",
        "name": "2 Hours",
        "durationMinutes": 120,
        "sortOrder": 1
      },
      {
        "id": "tier_half_day",
        "name": "Half Day",
        "durationMinutes": 240,
        "sortOrder": 2
      }
    ],
    "requireWaiver": true,
    "requireIdVerification": true,
    "defaultDepositPercent": 25
  },
  "supportTableReservations": false,
  "supportRoomReservations": false,
  "supportRentalReservations": true
}
```

---

## Maintenance Blocks

Maintenance blocks remove a physical resource instance from availability for a time period.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "resourceInstanceId": { "type": "string" },
    "startDate": { "type": "number" },
    "endDate": { "type": "number" },
    "reason": { "type": ["string", "null"] }
  },
  "required": ["id", "resourceInstanceId", "startDate", "endDate"]
}
```

### Validation Rules

- `endDate` must be greater than or equal to `startDate`.

### Example

```json
{
  "id": "maint_room_204",
  "locationId": "loc_hotel",
  "resourceInstanceId": "room_204",
  "startDate": 1705330800,
  "endDate": 1705417200,
  "reason": "HVAC repair",
  "createdAt": 1705250000,
  "updatedAt": 1705250000
}
```

---

## Resource Versioning

Resource versioning provides stable definitions and revisions for resource catalog changes.

### ResourceDefinition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": ["string", "null"] },
    "isActive": { "type": "boolean", "default": true }
  },
  "required": ["id", "name"]
}
```

### ResourceRevision

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "resourceId": { "type": "string" },
    "label": { "type": ["string", "null"] },
    "status": { "type": "string", "enum": ["draft", "active", "archived"], "default": "draft" },
    "derivedFromRevisionId": { "type": ["string", "null"] },
    "publishedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 }
  },
  "required": ["id", "resourceId"]
}
```

### ResourceRevisionStatus Enum

```json
["draft", "active", "archived"]
```

### DeriveResourceRevisionRequest

```json
{
  "type": "object",
  "properties": {
    "resourceId": { "type": "string" },
    "sourceRevisionId": { "type": ["string", "null"] },
    "strategy": { "type": "string", "enum": ["copy_current", "empty"], "default": "copy_current" },
    "label": { "type": ["string", "null"] }
  },
  "required": ["resourceId"]
}
```

---

## Schema Relationships

```text
ResourceCategory
  -> Resource.categoryId

Resource
  -> ResourceInstance.resourceId
  -> TablePlacement.tableResourceId
  -> ReservationSlotQueryRequest.resourceId
  -> TableReservation.resourceId
  -> RoomReservation.resourceId
  -> RentalReservation.resourceId

ResourceInstance
  -> TableAssignment.tableInstanceId
  -> RoomAssignment.roomInstanceId
  -> RentalAssignment.rentalInstanceId
  -> MaintenanceBlock.resourceInstanceId

FloorPlan
  -> Section.floorPlanId
  -> TablePlacement.floorPlanSectionId
  -> TableReservation.floorPlanId
  -> TableReservation.floorPlanSectionId
  -> TableAssignment.floorPlanId
  -> TableAssignment.floorPlanSectionId

ReservationSettings
  -> RentalReservation.tierId
  -> Resource.applicableTierIds

Resource.checklistTemplate
  -> RentalReservation.checklistCompletions.itemId
```

---

## Validation Rules

### Resource Validation

- Table resources must use `capacityConfig.kind = "range"` when capacityConfig is provided.
- Room resources must use `capacityConfig.kind = "occupancy"` when capacityConfig is provided.
- Rental resources must use `capacityConfig.kind = "single"` when capacityConfig is provided.
- Table resources must use `pricing.kind = "none"` when pricing is provided.
- Room resources must use `pricing.kind = "dayOfWeek"` when pricing is provided.
- Rental resources must use `pricing.kind = "tiered"` when pricing is provided.
- Range capacity `max` must be greater than or equal to `min`.
- Occupancy capacity `max` must be greater than or equal to `standard`.

### Reservation Validation

- Room reservation `checkOut` must be greater than `checkIn`.
- Rental reservation `endAt` must be greater than `startAt`.
- Rental reservation `actualReturnAt`, when provided, must be greater than or equal to `startAt`.

### Slot Validation

- Table candidate `endMinuteOfDay` must be greater than `startMinuteOfDay`.
- Table candidate `endTimeUtcSec` must be greater than `startTimeUtcSec`.
- Room candidate `checkOutDate` must be after `checkInDate`.
- Rental candidate `returnDate` must be on or after `pickupDate`.
- Rental candidate `endTimeUtcSec` must be greater than `startTimeUtcSec`.
- Rental candidate `pickupTimeOfDay` and `returnTimeOfDay` must both be present or both absent.

### Assignment and Layout Validation

- Table placement `maxParty` must be greater than or equal to `minParty`.
- Table placement `combinableWith` cannot contain its own `tableResourceId`.
- Maintenance block `endDate` must be greater than or equal to `startDate`.

---

## External Integrations

External booking systems are represented by `externalRef` on reservation records and channel mappings on resource/category schemas.

### External Reference Example

```json
{
  "externalRef": {
    "externalId": "resy_12345",
    "source": "resy",
    "url": "https://resy.example/reservations/12345",
    "syncedAt": 1705250000
  }
}
```

### Channel Mapping Example

```json
{
  "channelMappings": [
    {
      "channelId": "opentable",
      "externalResourceId": "ot_table_standard"
    },
    {
      "channelId": "resy",
      "externalResourceId": "resy_table_standard"
    }
  ]
}
```

---

## Query Options

All query option request bodies follow the same JSON shape:

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": { "type": "object" },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string" },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

### Reservation Filters

```json
{
  "tableReservation": {
    "search": "string",
    "locationId": "string",
    "channelId": "string",
    "customerId": "string",
    "status": ["pending", "confirmed", "seated", "checked_in", "completed", "cancelled", "no_show"],
    "tableId": "string",
    "dateRange": { "start": 1705330800, "end": 1705417200 },
    "externalSource": "string"
  },
  "roomReservation": {
    "search": "string",
    "locationId": "string",
    "channelId": "string",
    "resourceId": "string",
    "guestId": "string",
    "status": ["pending", "confirmed", "checked_in"],
    "paymentStatus": ["pending", "paid", "partial", "failed", "refunded"],
    "dateRange": { "start": 1705330800, "end": 1705417200 },
    "externalSource": "string"
  },
  "rentalReservation": {
    "search": "string",
    "locationId": "string",
    "channelId": "string",
    "customerId": "string",
    "resourceId": "string",
    "tierId": ["tier_half_day"],
    "status": ["upcoming", "pickup_soon", "out", "returned", "overdue", "cancelled"],
    "depositStatus": ["pending", "paid", "returned", "forfeited"],
    "dateRange": { "start": 1705330800, "end": 1705417200 },
    "externalSource": "string"
  }
}
```

### Resource Filters

```json
{
  "resource": {
    "search": "string",
    "locationId": "string",
    "resourceType": ["table", "room", "rental", "rentals", "resource"],
    "categoryId": "string",
    "isAvailable": true,
    "capacityRange": { "min": 2, "max": 4 },
    "location": "string",
    "amenities": ["wifi"],
    "priceRange": { "min": 0, "max": 250 }
  },
  "resourceInstance": {
    "resourceId": "string",
    "locationId": "string",
    "status": ["available", "reserved", "occupied", "maintenance", "cleaning", "out_of_service"],
    "isAvailable": true
  },
  "resourceCategory": {
    "search": "string",
    "locationId": "string",
    "resourceType": ["table", "room", "rental", "rentals", "resource"],
    "isActive": true
  }
}
```

### Assignment Filters

```json
{
  "tableAssignment": {
    "reservationId": "string",
    "tableInstanceId": "string",
    "status": ["assigned", "reassigned", "released"],
    "assignedBy": "string",
    "locationId": "string"
  },
  "roomAssignment": {
    "reservationId": "string",
    "roomInstanceId": "string",
    "status": ["assigned", "reassigned", "released"],
    "assignmentType": "soft",
    "assignedBy": "string",
    "locationId": "string"
  },
  "rentalAssignment": {
    "reservationId": "string",
    "rentalInstanceId": "string",
    "status": ["assigned", "reassigned", "released"],
    "assignmentType": "hard",
    "assignedBy": "string",
    "locationId": "string",
    "damageReported": false
  }
}
```

---

## Best Practices

### Resource Modeling

1. **Model resource types separately from instances** - Use `Resource` for bookable product/type definitions and `ResourceInstance` for physical units.

2. **Use the correct capacity model** - Tables use `range`, rooms use `occupancy`, and rentals use `single`.

3. **Use the correct pricing model** - Tables should use `none`, rooms should use `dayOfWeek`, and rentals should use `tiered`.

4. **Keep display order stable** - Use `displayOrder` and `placement` payloads for deterministic catalog ordering.

5. **Prefer structured attributes** - Use `attributes` for filterable properties and `metadata` for integration-specific payloads.

### Reservations

6. **Keep reservation records customer-centric** - Store customer, timing, source, status, and external reference on reservation records.

7. **Use assignments for physical inventory** - Do not overload reservation records with room/table/unit assignment state.

8. **Capture external references** - Store imported platform IDs in `externalRef` for reconciliation and sync.

9. **Preserve pricing snapshots** - Room reservations store `ratePerNight`; rental reservations store payment/deposit details.

10. **Use maintenance blocks for downtime** - Maintenance should be modeled separately from reservations and assignments.

### Slot Generation

11. **Generate slots using resource type** - Use the discriminated `resourceType` field to select table, room, or rental slot logic.

12. **Use business-local dates** - Slot requests use `YYYY-MM-DD` local dates to avoid timezone ambiguity.

13. **Return UTC timestamps with display labels** - Candidate slots include UTC timestamps and local time-of-day strings.

14. **Validate date/time boundaries** - Ensure end times and checkout dates are after starts before returning candidates.

### Rental Operations

15. **Define rental tiers in settings** - `ReservationSettings.rental.tiers` is the source for rental duration options.

16. **Use checklist templates on resources** - `Resource.checklistTemplate` defines pickup/return inspections.

17. **Store checklist completion on reservations** - `RentalReservation.checklistCompletions` records what happened for the booking.

18. **Capture condition at assignment** - Use `conditionAtPickup` and `conditionAtReturn` on rental assignments.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
| `ResourceType` | table, room, rental, rentals, resource |
| `ResourceReservationDurationUnit` | minutes, hours, nights |
| `ReservationSettingType` | capacity, resource_specific |
| `ReservationStatus` | pending, confirmed, seated, checked_in, completed, cancelled, no_show |
| `RentalReservationStatus` | upcoming, pickup_soon, out, returned, overdue, cancelled |
| `ResourceInstanceStatus` | available, reserved, occupied, maintenance, cleaning, out_of_service |
| `TableShape` | round, square, booth, rect, curved, high_top, bar |
| `CanvasUnit` | px, ft, m |
| `ResourceRevisionStatus` | draft, active, archived |

### Primary Files

| File | Purpose |
|------|---------|
| `reservation-table.schema.ts` | Table reservations |
| `reservation-room.schema.ts` | Room reservations and nightly rates |
| `reservation-rental.schema.ts` | Rental reservations, deposits, waivers, checklists |
| `reservation-slot-query.schema.ts` | Availability request/response schemas |
| `reservation-settings.schema.ts` | Table, room, and rental settings |
| `reservation-maintenance-block.schema.ts` | Maintenance downtime |
| `reservation-table-layout.schema.ts` | Floor plans and canvas dimensions |
| `reservation-section.schema.ts` | Sections and table placements |
| `resource/reservation-resource.schema.ts` | Resource catalog |
| `resource/reservation-resource-instance.schema.ts` | Physical resource instances |
| `resource/reservation-resource-category.schema.ts` | Resource categories |
| `assignment/*.schema.ts` | Physical resource assignment records |

### Common Query Pattern

```json
{
  "page": 1,
  "pageSize": 25,
  "filters": {
    "locationId": "loc_downtown"
  },
  "sorting": {
    "field": "createdAt",
    "direction": "desc"
  }
}
```
