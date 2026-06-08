# Reservation Settings and Operations Domain

This document details reservation settings, maintenance blocks, and operational rules.

## Table of Contents

1. [Overview](#overview)
2. [ReservationSettings](#reservationsettings)
3. [TableReservationSettings](#tablereservationsettings)
4. [RoomReservationSettings](#roomreservationsettings)
5. [RentalReservationSettings](#rentalreservationsettings)
6. [MaintenanceBlock](#maintenanceblock)
7. [Query Options](#query-options)
8. [Operational Guidance](#operational-guidance)

---

## Overview

Settings define location-level reservation behavior. Maintenance blocks remove physical instances from availability without changing catalog definitions or reservation records.

```text
ReservationSettings
  -> table rules
  -> room rules
  -> rental rules

MaintenanceBlock
  -> ResourceInstance
```

---

## ReservationSettings

Stores table, room, and rental settings for a location.

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

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `locationId` | string \| null | No | Business location scope |
| `table` | TableReservationSettings \| null | No | Table booking rules |
| `room` | RoomReservationSettings \| null | No | Lodging booking rules |
| `rental` | RentalReservationSettings \| null | No | Rental booking rules |
| `supportTableReservations` | boolean | Yes | Whether table reservations are supported |
| `supportRoomReservations` | boolean | Yes | Whether room reservations are supported |
| `supportRentalReservations` | boolean | Yes | Whether rental reservations are supported |

### Example

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

## TableReservationSettings

Controls slot duration, turnover, booking window, and party-size limits for table reservations.

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

| Field | Description |
|-------|-------------|
| `settingType` | Capacity-based or resource-specific table settings |
| `defaultDurationMinutes` | Default table hold duration |
| `turnoverMinutes` | Reset time between parties |
| `slotIntervalMinutes` | Availability slot interval |
| `maxPartySize` | Optional maximum party size |
| `advanceBookingDays` | Future booking horizon |

---

## RoomReservationSettings

Controls lodging check-in/check-out times and stay limits.

```typescript
RoomReservationSettingsSchema = z.object({
    checkInTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("15:00"),
    checkOutTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("11:00"),
    minStayNights: z.number().int().positive().default(1),
    maxStayNights: z.number().int().positive().nullable().optional(),
    advanceBookingDays: z.number().int().positive().default(90),
});
```

| Field | Description |
|-------|-------------|
| `checkInTime` | Local check-in time in `HH:mm` |
| `checkOutTime` | Local check-out time in `HH:mm` |
| `minStayNights` | Minimum nights per reservation |
| `maxStayNights` | Optional maximum nights per reservation |
| `advanceBookingDays` | Future booking horizon |

---

## RentalReservationSettings

Controls rental tiers, waiver requirements, ID verification, and default deposit percent.

```typescript
RentalReservationSettingsSchema = z.object({
    tiers: z.array(RentalTierDefinitionSchema).default([]),
    requireWaiver: z.boolean().default(false),
    requireIdVerification: z.boolean().default(false),
    defaultDepositPercent: z.number().nonnegative().max(100).nullable().optional(),
});
```

### RentalTierDefinition

```typescript
RentalTierDefinitionSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    durationMinutes: z.number().int().positive(),
    sortOrder: z.number().int().nonnegative().default(0),
});
```

---

## MaintenanceBlock

Blocks a physical resource instance for maintenance, cleaning, repair, or operational downtime.

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

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique maintenance block identifier |
| `locationId` | string \| null | No | Business location scope |
| `resourceInstanceId` | string | Yes | Physical instance being blocked |
| `startDate` | number | Yes | Block start Unix timestamp |
| `endDate` | number | Yes | Block end Unix timestamp |
| `reason` | string \| null | No | Reason for the downtime |

### Example

```json
{
  "id": "maint_room_204",
  "locationId": "loc_hotel",
  "resourceInstanceId": "room_204",
  "startDate": 1705330800,
  "endDate": 1705417200,
  "reason": "HVAC repair"
}
```

---

## Query Options

### ReservationSettingsQueryOptions

```typescript
interface ReservationSettingsQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        locationId?: string;
    };
}
```

### MaintenanceBlockQueryOptions

```typescript
interface MaintenanceBlockQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        locationId?: string;
        resourceInstanceId?: string;
        dateRange?: { start?: number; end?: number };
    };
    sorting?: {
        field: keyof MaintenanceBlock;
        direction: "asc" | "desc";
    };
}
```

---

## Operational Guidance

1. Use settings support flags to enable or disable reservation modes by location.
2. Use table settings to drive slot interval, default duration, and turnover calculations.
3. Use room settings to normalize check-in/check-out timestamps from local dates.
4. Use rental tiers as canonical duration options for rental resources.
5. Use maintenance blocks for downtime instead of creating synthetic reservations.
6. Maintenance block `endDate` must be greater than or equal to `startDate`.
7. Settings and operations schemas should not define `organizationId`.
8. Query options should not expose `includeDeleted` or `includedDeleted`.
