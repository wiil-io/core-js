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

```typescript
ResourceCategorySchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().optional(),
    locationId: z.string().nullable().optional(),
    name: z.string().min(1),
    description: z.string().nullable().optional(),
    channelMappings: z.array(ResourceCategoryChannelMappingSchema).nullable().optional(),
    resourceType: z.enum(ResourceType).nullable().optional(),
    displayOrder: z.number().int().nullable().optional(),
    isActive: z.boolean().default(true),
    metadata: z.record(z.string(), z.any()).nullable().optional(),
});
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

```typescript
ResourceSchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().optional(),
    locationId: z.string().nullable().optional(),
    resourceType: z.enum(ResourceType),
    categoryId: z.string().nullable().optional(),
    name: z.string(),
    description: z.string().nullable().optional(),
    imageUrls: z.array(z.url()).nullable().optional(),
    capacity: z.number().int().positive().nullable().optional(),
    capacityConfig: ResourceCapacitySchema.nullable().optional(),
    isAvailable: z.boolean().default(true),
    channelMappings: z.array(ResourceChannelMappingSchema).nullable().optional(),
    location: z.string().optional(),
    amenities: z.array(z.string()).default([]),
    instances: z.array(z.string()).nullable().optional(),
    pricing: ResourcePricingStrategySchema.nullable().optional(),
    turnoverMinutes: z.number().int().nonnegative().nullable().optional(),
    attributes: z.array(ResourceAttributeSchema).nullable().optional(),
    bookingRules: ServiceBookingRulesSchema.nullable().optional(),
    depositStrategy: z.enum(ServiceDepositStrategy).nullable().optional(),
    reservationDuration: z.number().int().positive().nullable().optional(),
    reservationDurationUnit: z.enum(ResourceReservationDurationUnit).nullable().optional(),
    checklistTemplate: z.array(ChecklistTemplateItemSchema).default([]),
    applicableTierIds: z.array(z.string()).default([]),
    displayOrder: z.number().int().nonnegative().nullable().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
});
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

```typescript
ResourceCapacityRangeSchema = z.object({
    kind: z.literal("range"),
    min: z.number().int().positive(),
    max: z.number().int().positive(),
});

ResourceCapacityOccupancySchema = z.object({
    kind: z.literal("occupancy"),
    standard: z.number().int().positive(),
    max: z.number().int().positive(),
    extraFee: z.number().nonnegative().nullable().optional(),
});

ResourceCapacitySingleSchema = z.object({
    kind: z.literal("single"),
    value: z.number().int().positive(),
    weightLimit: z.number().positive().nullable().optional(),
    skillLevel: z.string().nullable().optional(),
});
```

| Resource Type | Required Capacity Kind | Typical Use |
|---------------|------------------------|-------------|
| `table` | `range` | Minimum and maximum party size |
| `room` | `occupancy` | Standard and maximum guest occupancy |
| `rental` | `single` | One unit, optional weight/skill constraints |

### Pricing Models

```typescript
ResourcePricingNoneSchema = z.object({
    kind: z.literal("none"),
    holdPolicy: z.string().nullable().optional(),
});

ResourcePricingDayOfWeekSchema = z.object({
    kind: z.literal("dayOfWeek"),
    rates: {
        mon: number,
        tue: number,
        wed: number,
        thu: number,
        fri: number,
        sat: number,
        sun: number,
    },
});

ResourcePricingTieredSchema = z.object({
    kind: z.literal("tiered"),
    tiers: z.array(ResourcePricingTierSchema).min(1),
});
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

```typescript
ResourceInstanceSchema = BaseModelSchema.safeExtend({
    resourceRevisionId: z.string().optional(),
    locationId: z.string().nullable().optional(),
    resourceId: z.string(),
    name: z.string().nullable().optional(),
    code: z.string().nullable().optional(),
    status: z.enum(ResourceInstanceStatus).default("available"),
    isAvailable: z.boolean().default(true),
    attributes: z.array(ResourceInstanceAttributeSchema).nullable().optional(),
});
```

#### ResourceInstanceStatus Enum

```typescript
enum ResourceInstanceStatus {
    AVAILABLE = "available",
    RESERVED = "reserved",
    OCCUPIED = "occupied",
    MAINTENANCE = "maintenance",
    CLEANING = "cleaning",
    OUT_OF_SERVICE = "out_of_service",
}
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

```typescript
TableReservationSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    channelId: z.string().nullable().optional(),
    resourceId: z.string(),
    customerId: z.string(),
    floorPlanId: z.string().nullable().optional(),
    floorPlanSectionId: z.string().nullable().optional(),
    personsNumber: z.number().int().positive(),
    time: z.number(),
    duration: z.number().int().positive(),
    status: z.enum(ReservationStatus).default("pending"),
    source: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    isVip: z.boolean().default(false),
    specialRequests: z.string().nullable().optional(),
    externalRef: ExternalRefSchema.nullable().optional(),
});
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

```typescript
enum RentalReservationStatus {
    UPCOMING = "upcoming",
    PICKUP_SOON = "pickup_soon",
    OUT = "out",
    RETURNED = "returned",
    OVERDUE = "overdue",
    CANCELLED = "cancelled",
}
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

```typescript
TableAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    tableInstanceId: z.string(),
    floorPlanId: z.string(),
    floorPlanSectionId: z.string().nullable().optional(),
    assignmentType: z.enum(TableAssignmentType).default("soft"),
    status: z.enum(TableAssignmentStatus).default("assigned"),
    assignedAt: z.number().int().positive(),
    assignedBy: z.string().nullable().optional(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
});
```

### RoomAssignment

```typescript
RoomAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    roomInstanceId: z.string(),
    assignmentType: z.enum(RoomAssignmentType).default("soft"),
    status: z.enum(RoomAssignmentStatus).default("assigned"),
    assignedAt: z.number().int().positive(),
    assignedBy: z.string().nullable().optional(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    housekeepingNotes: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
});
```

### RentalAssignment

```typescript
RentalAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    rentalInstanceId: z.string(),
    assignmentType: z.enum(RentalAssignmentType).default("soft"),
    status: z.enum(RentalAssignmentStatus).default("assigned"),
    assignedAt: z.number().int().positive(),
    assignedBy: z.string().nullable().optional(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    conditionAtPickup: RentalUnitConditionSchema.nullable().optional(),
    conditionAtReturn: RentalUnitConditionSchema.nullable().optional(),
    notes: z.string().nullable().optional(),
});
```

### Assignment Enums

```typescript
enum TableAssignmentType {
    SOFT = "soft",
    HARD = "hard",
}

enum TableAssignmentStatus {
    ASSIGNED = "assigned",
    REASSIGNED = "reassigned",
    RELEASED = "released",
}
```

Room and rental assignments use the same `soft` / `hard` type values and `assigned` / `reassigned` / `released` status values.

### Rental Unit Condition

```typescript
RentalUnitConditionSchema = z.object({
    recordedAt: z.number().int().positive(),
    recordedBy: z.string(),
    notes: z.string().nullable().optional(),
    damageReported: z.boolean().default(false),
    imageUrls: z.array(z.url()).nullable().optional(),
});
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

```typescript
FloorPlanSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    name: z.string().min(1),
    description: z.string(),
    imageUrls: z.array(z.url()).nullable().optional(),
    isActive: z.boolean().default(true),
    canvasDimensions: CanvasDimensionsSchema,
    capacity: z.number().int().positive(),
    metadata: z.record(z.string(), z.any()).nullable().optional(),
});
```

### CanvasDimensions

```typescript
CanvasDimensionsSchema = z.object({
    width: z.number().positive(),
    height: z.number().positive(),
    unit: z.enum(CanvasUnit).default("px"),
});
```

### Section

```typescript
SectionSchema = BaseModelSchema.safeExtend({
    locationId: z.string(),
    floorPlanId: z.string(),
    name: z.string().min(1),
    capacity: z.number().int().positive(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    isActive: z.boolean().default(true),
    sortOrder: z.number().int().nonnegative().default(0),
    tables: z.array(TablePlacementSchema).default([]),
    geometry: SectionGeometrySchema.nullable().optional(),
});
```

### TablePlacement

```typescript
TablePlacementSchema = BaseModelSchema.safeExtend({
    tableResourceId: z.string(),
    floorPlanSectionId: z.string(),
    number: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number().positive(),
    height: z.number().positive(),
    shape: z.enum(TableShape),
    rotation: z.number().nullable().optional(),
    minParty: z.number().int().positive(),
    maxParty: z.number().int().positive(),
    combinableWith: z.array(z.string()).default([]),
    serverSectionId: z.string().nullable().optional(),
});
```

### TableShape Enum

```typescript
enum TableShape {
    ROUND = "round",
    SQUARE = "square",
    BOOTH = "booth",
    RECT = "rect",
    CURVED = "curved",
    HIGH_TOP = "high_top",
    BAR = "bar",
}
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

```typescript
ReservationSlotQueryRequestSchema = z.discriminatedUnion("resourceType", [
    TableReservationSlotQueryRequestSchema,
    RoomReservationSlotQueryRequestSchema,
    RentalReservationSlotQueryRequestSchema,
]);
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

```typescript
TableReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.TABLE),
    partySize: z.number().int().positive(),
    floorPlanId: z.string().nullable().optional(),
    floorPlanSectionId: z.string().nullable().optional(),
});
```

### RoomReservationSlotQueryRequest

```typescript
RoomReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.ROOM),
    nights: z.number().int().positive().default(1),
    occupancy: z.number().int().positive().nullable().optional(),
});
```

### RentalReservationSlotQueryRequest

```typescript
RentalReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.RENTAL),
    returnDate: ReservationLocalDateSchema.nullable().optional(),
    tierId: z.string().nullable().optional(),
    durationMinutes: z.number().int().positive().nullable().optional(),
});
```

### Candidate Slot Schemas

#### Table Candidate

```typescript
ReservationCandidateSlotSchema = z.object({
    resourceId: z.string(),
    startTimeOfDay: ReservationTimeOfDayValueSchema,
    startMinuteOfDay: z.number().int().min(0).max(1439),
    endMinuteOfDay: z.number().int().min(1).max(1440),
    startTimeUtcSec: z.number(),
    endTimeUtcSec: z.number(),
    isAvailable: z.boolean().default(true),
    capacityRemaining: z.number().int().nonnegative().nullable().optional(),
    priceQuote: z.number().nonnegative().nullable().optional(),
});
```

#### Room Candidate

```typescript
RoomCandidateSlotSchema = z.object({
    resourceId: z.string(),
    checkInDate: ReservationLocalDateSchema,
    checkOutDate: ReservationLocalDateSchema,
    nights: z.number().int().positive(),
    occupancy: z.number().int().positive().nullable().optional(),
    roomsAvailable: z.number().int().nonnegative(),
    ratePerNight: z.array(RoomRatePerNightSchema).default([]),
    totalWithTax: z.number().nonnegative(),
    isAvailable: z.boolean().default(true),
});
```

#### Rental Candidate

```typescript
RentalCandidateSlotSchema = z.object({
    resourceId: z.string(),
    pickupDate: ReservationLocalDateSchema,
    returnDate: ReservationLocalDateSchema,
    pickupTimeOfDay: ReservationTimeOfDayValueSchema.nullable().optional(),
    returnTimeOfDay: ReservationTimeOfDayValueSchema.nullable().optional(),
    durationMinutes: z.number().int().positive().nullable().optional(),
    startTimeUtcSec: z.number(),
    endTimeUtcSec: z.number(),
    unitsAvailable: z.number().int().nonnegative(),
    totalWithTax: z.number().nonnegative(),
    priceQuote: z.number().nonnegative().nullable().optional(),
    isAvailable: z.boolean().default(true),
});
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

```typescript
ReservationSettingsSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    table: TableReservationSettingsSchema.nullable().optional(),
    room: RoomReservationSettingsSchema.nullable().optional(),
    rental: RentalReservationSettingsSchema.nullable().optional(),
    supportTableReservations: z.boolean().default(false),
    supportRoomReservations: z.boolean().default(false),
    supportRentalReservations: z.boolean().default(false),
});
```

### TableReservationSettings

```typescript
TableReservationSettingsSchema = z.object({
    settingType: z.enum(ReservationSettingType).default("capacity"),
    defaultDurationMinutes: z.number().int().positive().default(90),
    turnoverMinutes: z.number().int().nonnegative().default(15),
    slotIntervalMinutes: z.number().int().positive().default(15),
    maxPartySize: z.number().int().positive().nullable().optional(),
    advanceBookingDays: z.number().int().positive().default(30),
});
```

### RoomReservationSettings

```typescript
RoomReservationSettingsSchema = z.object({
    checkInTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("15:00"),
    checkOutTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("11:00"),
    minStayNights: z.number().int().positive().default(1),
    maxStayNights: z.number().int().positive().nullable().optional(),
    advanceBookingDays: z.number().int().positive().default(90),
});
```

### RentalReservationSettings

```typescript
RentalReservationSettingsSchema = z.object({
    tiers: z.array(RentalTierDefinitionSchema).default([]),
    requireWaiver: z.boolean().default(false),
    requireIdVerification: z.boolean().default(false),
    defaultDepositPercent: z.number().nonnegative().max(100).nullable().optional(),
});
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

```typescript
MaintenanceBlockSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    resourceInstanceId: z.string(),
    startDate: z.number(),
    endDate: z.number(),
    reason: z.string().nullable().optional(),
});
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

```typescript
ResourceDefinitionSchema = BaseModelSchema.safeExtend({
    name: z.string().min(1),
    description: z.string().nullable().optional(),
    isActive: z.boolean().default(true),
});
```

### ResourceRevision

```typescript
ResourceRevisionSchema = BaseModelSchema.safeExtend({
    resourceId: z.string(),
    label: z.string().nullable().optional(),
    status: z.enum(ResourceRevisionStatus).default("draft"),
    derivedFromRevisionId: z.string().nullable().optional(),
    publishedAt: z.number().int().positive().nullable().optional(),
});
```

### ResourceRevisionStatus Enum

```typescript
enum ResourceRevisionStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVED = "archived",
}
```

### DeriveResourceRevisionRequest

```typescript
DeriveResourceRevisionRequestSchema = z.object({
    resourceId: z.string(),
    sourceRevisionId: z.string().nullable().optional(),
    strategy: z.enum(ResourceRevisionDeriveStrategy).default("copy_current"),
    label: z.string().nullable().optional(),
});
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

All query option interfaces follow the same pattern:

```typescript
interface QueryOptions {
    page: number;
    pageSize: number;
    filters?: Filters;
    sorting?: Sorting;
}
```

### Reservation Filters

```typescript
interface TableReservationFilters {
    search?: string;
    locationId?: string;
    channelId?: string;
    customerId?: string;
    status?: ReservationStatus[];
    tableId?: string;
    dateRange?: { start?: number; end?: number };
    externalSource?: string;
}

interface RoomReservationFilters {
    search?: string;
    locationId?: string;
    channelId?: string;
    resourceId?: string;
    guestId?: string;
    status?: ReservationStatus[];
    paymentStatus?: PaymentStatus[];
    dateRange?: { start?: number; end?: number };
    externalSource?: string;
}

interface RentalReservationFilters {
    search?: string;
    locationId?: string;
    channelId?: string;
    customerId?: string;
    resourceId?: string;
    tierId?: string[];
    status?: RentalReservationStatus[];
    depositStatus?: DepositStatus[];
    dateRange?: { start?: number; end?: number };
    externalSource?: string;
}
```

### Resource Filters

```typescript
interface ResourceFilters {
    search?: string;
    locationId?: string;
    resourceType?: ResourceType[];
    categoryId?: string;
    isAvailable?: boolean;
    capacityRange?: { min?: number; max?: number };
    location?: string;
    amenities?: string[];
    priceRange?: { min?: number; max?: number };
}

interface ResourceInstanceFilters {
    resourceId?: string;
    locationId?: string;
    status?: ResourceInstanceStatus[];
    isAvailable?: boolean;
}

interface ResourceCategoryFilters {
    search?: string;
    locationId?: string;
    resourceType?: ResourceType[];
    isActive?: boolean;
}
```

### Assignment Filters

```typescript
interface TableAssignmentFilters {
    reservationId?: string;
    tableInstanceId?: string;
    status?: TableAssignmentStatus[];
    assignedBy?: string;
    locationId?: string;
}

interface RoomAssignmentFilters {
    reservationId?: string;
    roomInstanceId?: string;
    status?: RoomAssignmentStatus[];
    assignmentType?: RoomAssignmentType;
    assignedBy?: string;
    locationId?: string;
}

interface RentalAssignmentFilters {
    reservationId?: string;
    rentalInstanceId?: string;
    status?: RentalAssignmentStatus[];
    assignmentType?: RentalAssignmentType;
    assignedBy?: string;
    locationId?: string;
    damageReported?: boolean;
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

```typescript
{
  page: 1,
  pageSize: 25,
  filters: {
    locationId: "loc_downtown"
  },
  sorting: {
    field: "createdAt",
    direction: "desc"
  }
}
```
