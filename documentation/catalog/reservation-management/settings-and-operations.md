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

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "table": {
      "oneOf": [
        { "$ref": "#/$defs/TableReservationSettings" },
        { "type": "null" }
      ]
    },
    "room": {
      "oneOf": [
        { "$ref": "#/$defs/RoomReservationSettings" },
        { "type": "null" }
      ]
    },
    "rental": {
      "oneOf": [
        { "$ref": "#/$defs/RentalReservationSettings" },
        { "type": "null" }
      ]
    },
    "supportTableReservations": { "type": "boolean", "default": false },
    "supportRoomReservations": { "type": "boolean", "default": false },
    "supportRentalReservations": { "type": "boolean", "default": false }
  },
  "required": ["id"]
}
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

```json
{
  "$id": "#/$defs/RentalReservationSettings",
  "type": "object",
  "properties": {
    "tiers": {
      "type": "array",
      "items": { "$ref": "#/$defs/RentalTierDefinition" },
      "default": []
    },
    "requireWaiver": { "type": "boolean", "default": false },
    "requireIdVerification": { "type": "boolean", "default": false },
    "defaultDepositPercent": { "type": ["number", "null"], "minimum": 0, "maximum": 100 }
  }
}
```

### RentalTierDefinition

```json
{
  "$id": "#/$defs/RentalTierDefinition",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string", "minLength": 1 },
    "durationMinutes": { "type": "integer", "exclusiveMinimum": 0 },
    "sortOrder": { "type": "integer", "minimum": 0, "default": 0 }
  },
  "required": ["id", "name", "durationMinutes"]
}
```

---

## MaintenanceBlock

Blocks a physical resource instance for maintenance, cleaning, repair, or operational downtime.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "resourceInstanceId": { "type": "string" },
    "startDate": { "type": "number" },
    "endDate": { "type": "number" },
    "reason": { "type": ["string", "null"] }
  },
  "required": ["id", "resourceInstanceId", "startDate", "endDate"]
}
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

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "locationId": { "type": "string" }
      }
    }
  },
  "required": ["page", "pageSize"]
}
```

### MaintenanceBlockQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "locationId": { "type": "string" },
        "resourceInstanceId": { "type": "string" },
        "dateRange": {
          "type": "object",
          "properties": {
            "start": { "type": "number" },
            "end": { "type": "number" }
          }
        }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["startDate", "endDate", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
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
