# Reservation Records Domain

This document details the table, room, and rental reservation record schemas.

## Table of Contents

1. [Overview](#overview)
2. [TableReservation](#tablereservation)
3. [RoomReservation](#roomreservation)
4. [RentalReservation](#rentalreservation)
5. [Status Models](#status-models)
6. [Query Options](#query-options)
7. [Validation Rules](#validation-rules)
8. [Implementation Notes](#implementation-notes)

---

## Overview

Reservation records capture customer intent and commercial state. They do not own the physical inventory assignment. Physical assignment is modeled by assignment schemas.

```text
TableReservation
  -> TableAssignment

RoomReservation
  -> RoomAssignment

RentalReservation
  -> RentalAssignment
```

All reservation record schemas use `BaseModelSchema`, location scope through `locationId`, and external reconciliation through `externalRef`.

---

## TableReservation

Represents a time-window booking for table-based businesses.

### Schema Definition

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

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique reservation identifier |
| `locationId` | string \| null | No | Business location scope |
| `channelId` | string \| null | No | Booking channel |
| `resourceId` | string | Yes | Requested table resource |
| `customerId` | string | Yes | Customer identifier |
| `floorPlanId` | string \| null | No | Preferred or selected floor plan |
| `floorPlanSectionId` | string \| null | No | Preferred or selected section |
| `personsNumber` | number | Yes | Party size |
| `time` | number | Yes | Reservation start Unix timestamp |
| `duration` | number | Yes | Expected duration in minutes |
| `status` | ReservationStatus | Yes | Reservation lifecycle state |
| `source` | string \| null | No | Source label such as web, phone, or partner |
| `notes` | string \| null | No | Internal notes |
| `isVip` | boolean | Yes | VIP handling flag |
| `specialRequests` | string \| null | No | Customer-facing requests |
| `externalRef` | object \| null | No | External platform reference |

### Example

```json
{
  "id": "tbl_res_123",
  "locationId": "loc_downtown",
  "channelId": "web",
  "resourceId": "res_table_standard",
  "customerId": "cust_123",
  "floorPlanId": "fp_main",
  "floorPlanSectionId": "sec_window",
  "personsNumber": 4,
  "time": 1705359600,
  "duration": 90,
  "status": "confirmed",
  "source": "web",
  "notes": "Anniversary",
  "isVip": true,
  "specialRequests": "Window table if available",
  "externalRef": {
    "externalId": "resy_456",
    "source": "resy",
    "syncedAt": 1705350000
  }
}
```

---

## RoomReservation

Represents a lodging reservation with date-range stay details, guest information, payment state, and per-night rate snapshots.

### Schema Definition

```typescript
RoomReservationSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    channelId: z.string().nullable().optional(),
    resourceId: z.string(),
    guestId: z.string(),
    personsNumber: z.number().int().positive(),
    checkIn: z.number(),
    checkOut: z.number(),
    nights: z.number().int().positive(),
    status: z.enum(ReservationStatus).default("pending"),
    source: z.string().nullable().optional(),
    ratePerNight: z.array(RoomRatePerNightSchema).default([]),
    totalWithTax: z.number().nonnegative(),
    deposit: z.number().nonnegative().default(0),
    paymentStatus: z.enum(PaymentStatus).nullable().optional(),
    notes: z.string().nullable().optional(),
    externalRef: ExternalRefSchema.nullable().optional(),
});
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resourceId` | string | Yes | Requested room resource |
| `guestId` | string | Yes | Guest or customer identifier |
| `personsNumber` | number | Yes | Guest party size |
| `checkIn` | number | Yes | Check-in Unix timestamp |
| `checkOut` | number | Yes | Check-out Unix timestamp |
| `nights` | number | Yes | Number of nights |
| `status` | ReservationStatus | Yes | Reservation lifecycle state |
| `source` | string \| null | No | Source or channel label |
| `ratePerNight` | RoomRatePerNight[] | Yes | Nightly price snapshot |
| `totalWithTax` | number | Yes | Total reservation amount including tax |
| `deposit` | number | Yes | Deposit amount collected or required |
| `paymentStatus` | PaymentStatus | Yes | Payment lifecycle state |

### Example

```json
{
  "id": "room_res_123",
  "locationId": "loc_hotel",
  "channelId": "direct",
  "resourceId": "res_king_suite",
  "guestId": "cust_789",
  "personsNumber": 3,
  "checkIn": 1705388400,
  "checkOut": 1705561200,
  "nights": 2,
  "status": "confirmed",
  "source": "direct",
  "ratePerNight": [
    { "date": "2024-01-16", "amount": 220 },
    { "date": "2024-01-17", "amount": 240 }
  ],
  "totalWithTax": 501.4,
  "deposit": 100,
  "paymentStatus": "partial",
  "notes": "Late check-in"
}
```

---

## RentalReservation

Represents a rental booking with pickup/return timing, tier selection, deposit status, waiver and identity verification, checklist completion, and return state.

### Schema Definition

```typescript
RentalReservationSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    channelId: z.string().nullable().optional(),
    customerId: z.string(),
    resourceId: z.string(),
    startAt: z.number(),
    endAt: z.number(),
    actualReturnAt: z.number().nullable().optional(),
    tierId: z.string(),
    status: z.enum(RentalReservationStatus).default("upcoming"),
    payment: RentalReservationPaymentSchema,
    checklistCompletions: z.array(ChecklistCompletionSchema).default([]),
    waiver: WaiverRefSchema.nullable().optional(),
    idVerification: IDRefSchema.nullable().optional(),
    notes: z.string().nullable().optional(),
    externalRef: ExternalRefSchema.nullable().optional(),
});
```

### Operational Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tierId` | string \| null | No | Rental tier from reservation settings |
| `startAt` | number | Yes | Pickup or rental start timestamp |
| `endAt` | number | Yes | Expected return timestamp |
| `actualReturnAt` | number \| null | No | Actual return timestamp |
| `payment` | RentalReservationPayment | Yes | Rental charge and security deposit state |
| `waiver` | WaiverRef \| null | No | Waiver document reference and status |
| `idVerification` | IDRef \| null | No | Identity verification reference and status |
| `checklistCompletions` | ChecklistCompletion[] | Yes | Pickup/return checklist result snapshots |

### Example

```json
{
  "id": "rental_res_123",
  "locationId": "loc_marina",
  "channelId": "web",
  "resourceId": "res_ebike",
  "customerId": "cust_456",
  "tierId": "tier_half_day",
  "startAt": 1705359600,
  "endAt": 1705374000,
  "actualReturnAt": null,
  "status": "upcoming",
  "payment": {
    "rentalCharge": 110,
    "securityDeposit": 50,
    "depositStatus": "held"
  },
  "checklistCompletions": [
    {
      "itemId": "helmet",
      "completed": true,
      "completedAt": 1705359000,
      "completedBy": "user_counter"
    }
  ],
  "waiver": {
    "waiverId": "waiver_123",
    "signedAt": 1705358500,
    "status": "signed"
  },
  "idVerification": {
    "verificationId": "idv_123",
    "provider": "stripe_identity",
    "verifiedAt": 1705358400,
    "status": "verified"
  },
  "notes": "Customer requested child seat"
}
```

---

## Status Models

### ReservationStatus

| Value | Typical Use |
|-------|-------------|
| `pending` | Awaiting confirmation or payment |
| `confirmed` | Confirmed booking |
| `seated` | Table party is seated |
| `checked_in` | Guest has checked in |
| `completed` | Reservation is completed |
| `cancelled` | Reservation was cancelled |
| `no_show` | Customer did not arrive |

### RentalReservationStatus

| Value | Typical Use |
|-------|-------------|
| `upcoming` | Future rental |
| `pickup_soon` | Near pickup window |
| `out` | Unit is currently rented |
| `returned` | Unit has been returned |
| `overdue` | Expected return has passed |
| `cancelled` | Rental was cancelled |

---

## Query Options

### TableReservationQueryOptions

```typescript
interface TableReservationQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        search?: string;
        locationId?: string;
        channelId?: string;
        customerId?: string;
        status?: ReservationStatus[];
        tableId?: string;
        dateRange?: { start?: number; end?: number };
        externalSource?: string;
    };
    sorting?: {
        field: keyof TableReservation;
        direction: "asc" | "desc";
    };
}
```

### RoomReservationQueryOptions

```typescript
interface RoomReservationQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        search?: string;
        locationId?: string;
        channelId?: string;
        resourceId?: string;
        guestId?: string;
        status?: ReservationStatus[];
        paymentStatus?: PaymentStatus[];
        dateRange?: { start?: number; end?: number };
        externalSource?: string;
    };
    sorting?: {
        field: keyof RoomReservation;
        direction: "asc" | "desc";
    };
}
```

### RentalReservationQueryOptions

```typescript
interface RentalReservationQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
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
    };
    sorting?: {
        field: keyof RentalReservation;
        direction: "asc" | "desc";
    };
}
```

---

## Validation Rules

- `TableReservation.personsNumber` must be positive.
- `TableReservation.duration` must be positive.
- `RoomReservation.checkOut` must be greater than `checkIn`.
- `RoomReservation.nights` must be positive.
- `RoomReservation.totalWithTax` must be nonnegative.
- `RentalReservation.endAt` must be greater than `startAt`.
- `RentalReservation.actualReturnAt`, when present, must be greater than or equal to `startAt`.
- `RentalReservation.payment.rentalCharge` must be nonnegative.
- `RentalReservation.payment.securityDeposit` must be nonnegative.

---

## Implementation Notes

1. Reservation records should not define `organizationId`.
2. Query options should not expose `includeDeleted` or `includedDeleted`.
3. Use `externalRef` for external booking identifiers instead of adding channel-specific top-level fields.
4. Preserve pricing snapshots on the reservation record because catalog pricing can change later.
5. Use assignment records for physical units; do not overload reservation records with instance lifecycle state.
