# Reservation Assignments Domain

This document details the physical inventory assignment schemas used by reservation management.

## Table of Contents

1. [Overview](#overview)
2. [TableAssignment](#tableassignment)
3. [RoomAssignment](#roomassignment)
4. [RentalAssignment](#rentalassignment)
5. [Rental Unit Conditions](#rental-unit-conditions)
6. [Query Options](#query-options)
7. [Implementation Notes](#implementation-notes)

---

## Overview

Assignment records bind a reservation to a concrete `ResourceInstance`.

```text
Reservation
  -> Assignment
     -> ResourceInstance
```

Assignments keep operational state separate from customer booking state. This allows a reservation to remain confirmed while a physical room, table, or rental unit is changed before fulfillment.

---

## TableAssignment

Assigns a table reservation to a physical table instance and optional floor-plan placement.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "tableInstanceId": { "type": "string" },
    "floorPlanId": { "type": "string" },
    "floorPlanSectionId": { "type": ["string", "null"] },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedBy": { "type": ["string", "null"] },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "tableInstanceId", "floorPlanId", "slotStart", "slotEnd", "assignedAt"]
}
```

### Status Values

| Value | Meaning |
|-------|---------|
| `assigned` | Table is assigned to the reservation |
| `reassigned` | Assignment was superseded by a new table |
| `released` | Table assignment has ended or been released |

### Assignment Types

| Value | Meaning |
|-------|---------|
| `soft` | Assignment may be optimized or substituted |
| `hard` | Assignment is staff-locked |

### Example

```json
{
  "id": "ta_123",
  "locationId": "loc_downtown",
  "reservationId": "tbl_res_123",
  "tableInstanceId": "table_12",
  "floorPlanId": "fp_main",
  "floorPlanSectionId": "sec_window",
  "slotStart": 1705392000,
  "slotEnd": 1705399200,
  "assignmentType": "hard",
  "status": "assigned",
  "assignedBy": "user_host",
  "assignedAt": 1705359000,
  "releasedAt": null,
  "releasedBy": null,
  "notes": "Hold window table"
}
```

---

## RoomAssignment

Assigns a lodging reservation to a physical room instance.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "roomInstanceId": { "type": "string" },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedBy": { "type": ["string", "null"] },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "housekeepingNotes": { "type": ["string", "null"] },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "roomInstanceId", "slotStart", "slotEnd", "assignedAt"]
}
```

### Status Values

| Value | Meaning |
|-------|---------|
| `assigned` | Room is assigned |
| `reassigned` | Assignment was superseded by a new room |
| `released` | Room assignment has ended or been released |

### Assignment Types

| Value | Meaning |
|-------|---------|
| `soft` | Assignment may be optimized or substituted |
| `hard` | Assignment is staff-locked |

### Example

```json
{
  "id": "ra_123",
  "locationId": "loc_hotel",
  "reservationId": "room_res_123",
  "roomInstanceId": "room_204",
  "slotStart": 1705464000,
  "slotEnd": 1705550400,
  "assignmentType": "hard",
  "status": "assigned",
  "assignedBy": "user_frontdesk",
  "assignedAt": 1705380000,
  "releasedAt": null,
  "releasedBy": null,
  "housekeepingNotes": "Prepare extra towels",
  "notes": "Guest prefers high floor"
}
```

---

## RentalAssignment

Assigns a rental reservation to a physical rental unit and captures condition at pickup and return.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "reservationId": { "type": "string" },
    "rentalInstanceId": { "type": "string" },
    "slotStart": { "type": "integer", "exclusiveMinimum": 0 },
    "slotEnd": { "type": "integer", "exclusiveMinimum": 0 },
    "assignmentType": { "type": "string", "enum": ["soft", "hard"], "default": "soft" },
    "status": { "type": "string", "enum": ["assigned", "reassigned", "released"], "default": "assigned" },
    "assignedBy": { "type": ["string", "null"] },
    "assignedAt": { "type": "integer", "exclusiveMinimum": 0 },
    "releasedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "releasedBy": { "type": ["string", "null"] },
    "conditionAtPickup": { "$ref": "#/$defs/RentalUnitCondition", "nullable": true },
    "conditionAtReturn": { "$ref": "#/$defs/RentalUnitCondition", "nullable": true },
    "notes": { "type": ["string", "null"] }
  },
  "required": ["id", "reservationId", "rentalInstanceId", "slotStart", "slotEnd", "assignedAt"],
  "$defs": {
    "RentalUnitCondition": {
      "type": "object",
      "properties": {
        "recordedAt": { "type": "integer", "exclusiveMinimum": 0 },
        "recordedBy": { "type": "string" },
        "notes": { "type": ["string", "null"] },
        "damageReported": { "type": "boolean", "default": false },
        "imageUrls": { "type": ["array", "null"], "items": { "type": "string", "format": "uri" } }
      },
      "required": ["recordedAt", "recordedBy", "damageReported"]
    }
  }
}
```

### Status Values

| Value | Meaning |
|-------|---------|
| `assigned` | Unit is assigned |
| `reassigned` | Assignment was superseded by a new rental unit |
| `released` | Rental unit assignment has ended or been released |

### Example

```json
{
  "id": "renta_123",
  "locationId": "loc_marina",
  "reservationId": "rental_res_123",
  "rentalInstanceId": "bike_17",
  "slotStart": 1705357800,
  "slotEnd": 1705377600,
  "assignmentType": "hard",
  "status": "assigned",
  "assignedBy": "user_counter",
  "assignedAt": 1705357800,
  "releasedAt": null,
  "releasedBy": null,
  "conditionAtPickup": {
    "recordedAt": 1705359000,
    "recordedBy": "user_counter",
    "notes": "Small scratch on frame",
    "damageReported": false,
    "imageUrls": ["https://cdn.example.com/rentals/bike_17_pickup.jpg"]
  },
  "conditionAtReturn": null,
  "notes": null
}
```

---

## Rental Unit Conditions

Rental condition schemas capture state snapshots before and after use.

### Condition Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `recordedAt` | number | Yes | Condition recording timestamp |
| `recordedBy` | string | Yes | Staff user ID that recorded the condition |
| `notes` | string \| null | No | Staff notes |
| `damageReported` | boolean | Yes | Whether damage was reported |
| `imageUrls` | string[] \| null | No | Supporting photo URLs |

### Usage Pattern

```text
Before pickup:
  conditionAtPickup is recorded.

During rental:
  reservation status tracks pickup and return progress.

After return:
  conditionAtReturn is recorded.
  damageReported is stored inside the condition snapshot.
```

---

## Query Options

### TableAssignmentQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "reservationId": { "type": "string" },
        "tableInstanceId": { "type": "string" },
        "status": {
          "type": "array",
          "items": { "type": "string", "enum": ["assigned", "reassigned", "released"] }
        },
        "assignedBy": { "type": "string" },
        "locationId": { "type": "string" }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["assignedAt", "releasedAt", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

### RoomAssignmentQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "reservationId": { "type": "string" },
        "roomInstanceId": { "type": "string" },
        "status": {
          "type": "array",
          "items": { "type": "string", "enum": ["assigned", "reassigned", "released"] }
        },
        "assignmentType": { "type": "string", "enum": ["soft", "hard"] },
        "assignedBy": { "type": "string" },
        "locationId": { "type": "string" }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["assignedAt", "releasedAt", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

### RentalAssignmentQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "reservationId": { "type": "string" },
        "rentalInstanceId": { "type": "string" },
        "status": {
          "type": "array",
          "items": { "type": "string", "enum": ["assigned", "reassigned", "released"] }
        },
        "assignmentType": { "type": "string", "enum": ["soft", "hard"] },
        "assignedBy": { "type": "string" },
        "locationId": { "type": "string" },
        "damageReported": { "type": "boolean" }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["assignedAt", "releasedAt", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

---

## Implementation Notes

1. Assignments should use `locationId` for scope and should not define `organizationId`.
2. Assignment query options should not expose `includeDeleted` or `includedDeleted`.
3. Physical availability should be derived from assignments, maintenance blocks, and instance status.
4. Keep reservation status and assignment status separate.
5. Use `assignedBy`, `assignedAt`, and lifecycle timestamps for audit-like operational history.
