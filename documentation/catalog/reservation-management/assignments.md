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

```typescript
TableAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    tableInstanceId: z.string(),
    floorPlanId: z.string(),
    floorPlanSectionId: z.string().nullable().optional(),
    assignmentType: z.enum(TableAssignmentType).default("soft"),
    status: z.enum(TableAssignmentStatus).default("assigned"),
    assignedBy: z.string().nullable().optional(),
    assignedAt: z.number().int().positive(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
});
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

```typescript
RoomAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    roomInstanceId: z.string(),
    assignmentType: z.enum(RoomAssignmentType).default("soft"),
    status: z.enum(RoomAssignmentStatus).default("assigned"),
    assignedBy: z.string().nullable().optional(),
    assignedAt: z.number().int().positive(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    housekeepingNotes: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
});
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

```typescript
RentalAssignmentSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    reservationId: z.string(),
    rentalInstanceId: z.string(),
    assignmentType: z.enum(RentalAssignmentType).default("soft"),
    status: z.enum(RentalAssignmentStatus).default("assigned"),
    assignedBy: z.string().nullable().optional(),
    assignedAt: z.number().int().positive(),
    releasedAt: z.number().int().positive().nullable().optional(),
    releasedBy: z.string().nullable().optional(),
    conditionAtPickup: RentalUnitConditionSchema.nullable().optional(),
    conditionAtReturn: RentalUnitConditionSchema.nullable().optional(),
    notes: z.string().nullable().optional(),
});
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

```typescript
interface TableAssignmentQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        reservationId?: string;
        tableInstanceId?: string;
        status?: TableAssignmentStatus[];
        assignedBy?: string;
        locationId?: string;
    };
    sorting?: {
        field: keyof TableAssignment;
        direction: "asc" | "desc";
    };
}
```

### RoomAssignmentQueryOptions

```typescript
interface RoomAssignmentQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        reservationId?: string;
        roomInstanceId?: string;
        status?: RoomAssignmentStatus[];
        assignmentType?: RoomAssignmentType;
        assignedBy?: string;
        locationId?: string;
    };
    sorting?: {
        field: keyof RoomAssignment;
        direction: "asc" | "desc";
    };
}
```

### RentalAssignmentQueryOptions

```typescript
interface RentalAssignmentQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        reservationId?: string;
        rentalInstanceId?: string;
        status?: RentalAssignmentStatus[];
        assignmentType?: RentalAssignmentType;
        assignedBy?: string;
        locationId?: string;
        damageReported?: boolean;
    };
    sorting?: {
        field: keyof RentalAssignment;
        direction: "asc" | "desc";
    };
}
```

---

## Implementation Notes

1. Assignments should use `locationId` for scope and should not define `organizationId`.
2. Assignment query options should not expose `includeDeleted` or `includedDeleted`.
3. Physical availability should be derived from assignments, maintenance blocks, and instance status.
4. Keep reservation status and assignment status separate.
5. Use `assignedBy`, `assignedAt`, and lifecycle timestamps for audit-like operational history.
