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

```json
{
  "type": "string",
  "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
}
```

### ReservationTimeOfDayValue

Human-readable business-local time of day such as `6:00 PM`.

```json
{
  "type": "string",
  "pattern": "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(AM|PM)$"
}
```

---

## ReservationSlotQueryRequest

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
| `resourceType` | ResourceType | Yes | Discriminator for table, room, or rental |
| `locationId` | string \| null | No | Location scope |
| `resourceId` | string \| null | No | Optional resource scope |
| `localDate` | string | Yes | Business-local date |
| `maxResults` | number | Yes | Maximum candidates to return |

---

## Table Slot Queries

Table slot queries search a single business-local date for time windows that can fit a party size.

### Request Schema

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

### Candidate Schema

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

### Candidate Schema

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

### Candidate Schema

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
