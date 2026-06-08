# Reservation Slot Queries Domain

This document details availability request and response schemas for table, room, and rental reservations.

## Table of Contents

1. [Overview](#overview)
2. [Shared Date and Time Models](#shared-date-and-time-models)
3. [ReservationSlotQueryRequest](#reservationslotqueryrequest)
4. [Table Slot Queries](#table-slot-queries)
5. [Room Slot Queries](#room-slot-queries)
6. [Rental Slot Queries](#rental-slot-queries)
7. [Validation Rules](#validation-rules)
8. [Implementation Notes](#implementation-notes)

---

## Overview

Slot query schemas model the contract for availability generation. The request is discriminated by `resourceType`, and each response returns type-specific candidate slots.

```text
ReservationSlotQueryRequest
  -> TableReservationSlotQueryRequest
  -> RoomReservationSlotQueryRequest
  -> RentalReservationSlotQueryRequest

ReservationSlotQueryResponse
  -> Table slots
  -> Room slots
  -> Rental slots
```

Slot queries should be treated as read models. They do not create reservations or assignments.

---

## Shared Date and Time Models

### ReservationLocalDate

Business-local date string in `YYYY-MM-DD` format.

```typescript
ReservationLocalDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
```

### ReservationTimeOfDayValue

Human-readable business-local time of day such as `6:00 PM`.

```typescript
ReservationTimeOfDayValueSchema = z.string().min(1);
```

---

## ReservationSlotQueryRequest

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
| `resourceType` | ResourceType | Yes | Discriminator for table, room, or rental |
| `locationId` | string \| null | No | Location scope |
| `resourceId` | string \| null | No | Optional resource scope |
| `localDate` | string | Yes | Business-local date |
| `maxResults` | number | Yes | Maximum candidates to return |

---

## Table Slot Queries

Table slot queries search a single business-local date for time windows that can fit a party size.

### Request Schema

```typescript
TableReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.TABLE),
    partySize: z.number().int().positive(),
    floorPlanId: z.string().nullable().optional(),
    floorPlanSectionId: z.string().nullable().optional(),
});
```

### Candidate Schema

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

### Example Request

```json
{
  "resourceType": "table",
  "locationId": "loc_downtown",
  "resourceId": "res_table_standard",
  "localDate": "2024-01-15",
  "maxResults": 20,
  "partySize": 4,
  "floorPlanId": "fp_main",
  "floorPlanSectionId": "sec_window"
}
```

### Example Response

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

---

## Room Slot Queries

Room slot queries search a check-in date and stay length for room resources that can satisfy occupancy.

### Request Schema

```typescript
RoomReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.ROOM),
    nights: z.number().int().positive().default(1),
    occupancy: z.number().int().positive().nullable().optional(),
});
```

### Candidate Schema

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

### Example Request

```json
{
  "resourceType": "room",
  "locationId": "loc_hotel",
  "resourceId": "res_king_suite",
  "localDate": "2024-01-16",
  "maxResults": 20,
  "nights": 2,
  "occupancy": 4
}
```

### Example Response

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

## Rental Slot Queries

Rental slot queries search pickup and return availability for rental resources and optional tier duration.

### Request Schema

```typescript
RentalReservationSlotQueryRequestSchema = ReservationSlotQueryRequestBaseSchema.extend({
    resourceType: z.literal(ResourceType.RENTAL),
    returnDate: ReservationLocalDateSchema.nullable().optional(),
    tierId: z.string().nullable().optional(),
    durationMinutes: z.number().int().positive().nullable().optional(),
});
```

### Candidate Schema

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

### Example Request

```json
{
  "resourceType": "rental",
  "locationId": "loc_marina",
  "resourceId": "res_ebike",
  "localDate": "2024-01-15",
  "returnDate": "2024-01-15",
  "maxResults": 20,
  "tierId": "tier_half_day",
  "durationMinutes": 240
}
```

### Example Response

```json
{
  "resourceType": "rental",
  "pickupDate": "2024-01-15",
  "returnDate": "2024-01-15",
  "generatedAt": 1705330000,
  "slots": [
    {
      "resourceId": "res_ebike",
      "pickupDate": "2024-01-15",
      "returnDate": "2024-01-15",
      "pickupTimeOfDay": "10:00 AM",
      "returnTimeOfDay": "2:00 PM",
      "durationMinutes": 240,
      "startTimeUtcSec": 1705341600,
      "endTimeUtcSec": 1705356000,
      "unitsAvailable": 6,
      "totalWithTax": 59.95,
      "priceQuote": 55,
      "isAvailable": true
    }
  ]
}
```

---

## Validation Rules

- `localDate`, `checkInDate`, `checkOutDate`, `pickupDate`, and `returnDate` use `YYYY-MM-DD`.
- `maxResults` should remain bounded to protect availability generation.
- Table candidate `endMinuteOfDay` must be greater than `startMinuteOfDay`.
- Table candidate `endTimeUtcSec` must be greater than `startTimeUtcSec`.
- Room candidate `checkOutDate` must be after `checkInDate`.
- Rental candidate `returnDate` must be on or after `pickupDate`.
- Rental candidate `endTimeUtcSec` must be greater than `startTimeUtcSec`.
- Rental candidate `pickupTimeOfDay` and `returnTimeOfDay` should both be present or both absent.

---

## Implementation Notes

1. Slot query schemas should not define `organizationId`.
2. Slot query contracts should not expose `includeDeleted` or `includedDeleted`.
3. Use business-local dates in requests and UTC timestamps in candidates.
4. Use `resourceType` as the discriminant for request and response handling.
5. Treat slot queries as generated availability read models, not persisted reservation records.
