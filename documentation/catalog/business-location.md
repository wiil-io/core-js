# Business Location Domain

This document details the Business Location schema used across business management. A Business Location is a physical or operational site that carries contact details, operating hours, geographic coordinates, and lifecycle status, and is referenced by downstream business-management resources.

## Table of Contents

1. [Overview](#overview)
2. [BusinessLocation](#businesslocation)
3. [GeoCoordinates](#geocoordinates)
4. [Create and Update](#create-and-update)
5. [Query Options](#query-options)
6. [Implementation Notes](#implementation-notes)

---

## Overview

A location groups operating context (hours, address, coordinates, contact details) under a single addressable record.

```text
BusinessLocation
  -> AddressSchema
  -> WeeklyScheduleSchema (businessHours)
  -> GeoCoordinatesSchema (coordinates)
```

Locations extend the shared base model, inheriting `id`, `createdAt`, and `updatedAt`.

---

## BusinessLocation

Represents a physical or operational site.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "name": { "type": "string", "minLength": 1 },
    "code": { "type": "string" },
    "externalLocationId": { "type": ["string", "null"] },
    "status": { "type": "string", "enum": ["ACTIVE", "INACTIVE"], "default": "ACTIVE" },
    "isPrimary": { "type": "boolean", "default": false },
    "timezone": { "type": "string" },
    "businessHours": { "$ref": "#/$defs/WeeklySchedule" },
    "phoneNumber": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "address": { "$ref": "#/$defs/Address" },
    "coordinates": { "$ref": "#/$defs/GeoCoordinates", "nullable": true },
    "metadata": { "type": "object", "additionalProperties": true }
  },
  "required": ["id", "name", "businessHours"],
  "$defs": {
    "GeoCoordinates": {
      "type": "object",
      "properties": {
        "latitude": { "type": "number", "minimum": -90, "maximum": 90 },
        "longitude": { "type": "number", "minimum": -180, "maximum": 180 }
      },
      "required": ["latitude", "longitude"]
    },
    "Address": {
      "type": "object",
      "properties": {
        "street": { "type": "string", "minLength": 2 },
        "street2": { "type": "string" },
        "city": { "type": "string", "minLength": 2 },
        "state": { "type": "string", "minLength": 2 },
        "postalCode": { "type": "string", "minLength": 2 },
        "country": { "type": "string", "minLength": 2 }
      },
      "required": ["street", "city", "state", "postalCode", "country"]
    },
    "WeeklySchedule": {
      "type": "object",
      "description": "Record of day index (0-6) to a day schedule with optional breaks.",
      "patternProperties": {
        "^[0-6]$": {
          "type": "object",
          "properties": {
            "isOpen": { "type": "boolean" },
            "startTime": { "type": "string", "pattern": "^([01]?[0-9]|2[0-3]):[0-5][0-9]$" },
            "endTime": { "type": "string", "pattern": "^([01]?[0-9]|2[0-3]):[0-5][0-9]$" },
            "breakTimes": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "startTime": { "type": "string", "pattern": "^([01]?[0-9]|2[0-3]):[0-5][0-9]$" },
                  "endTime": { "type": "string", "pattern": "^([01]?[0-9]|2[0-3]):[0-5][0-9]$" }
                },
                "required": ["startTime", "endTime"]
              }
            }
          },
          "required": ["isOpen", "startTime", "endTime"]
        }
      }
    }
  }
}
```

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | auto-generated | Unique identifier |
| `createdAt` | integer | No | auto-generated | Creation timestamp |
| `updatedAt` | integer | No | auto-generated | Last modification timestamp |
| `name` | string | Yes | - | Human-readable location name |
| `code` | string | No | - | Short internal reference code |
| `externalLocationId` | string \| null | No | - | Identifier in an external system, if synced/imported |
| `status` | enum | No | `ACTIVE` | Lifecycle status (`ACTIVE`, `INACTIVE`) |
| `isPrimary` | boolean | No | `false` | Whether this is the organization's primary location |
| `timezone` | string | No | - | IANA timezone identifier (e.g., `America/New_York`) |
| `businessHours` | object | Yes | - | Weekly operating hours (day index `0-6` → schedule) |
| `phoneNumber` | string | No | - | Primary contact phone number |
| `email` | string | No | - | Primary contact email |
| `address` | object | No | - | Physical mailing address |
| `coordinates` | object \| null | No | - | Geographic coordinates |
| `metadata` | object | No | - | Additional custom metadata |

### Status Values

| Value | Meaning |
|-------|---------|
| `ACTIVE` | Location is operational |
| `INACTIVE` | Location is not currently operational |

### Example

```json
{
  "id": "loc_downtown",
  "name": "Downtown Branch",
  "code": "DTWN",
  "externalLocationId": null,
  "status": "ACTIVE",
  "isPrimary": true,
  "timezone": "America/New_York",
  "businessHours": {
    "1": {
      "isOpen": true,
      "startTime": "09:00",
      "endTime": "17:00",
      "breakTimes": [{ "startTime": "12:00", "endTime": "13:00" }]
    },
    "0": { "isOpen": false, "startTime": "00:00", "endTime": "00:00" }
  },
  "phoneNumber": "+15551234567",
  "email": "downtown@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Springfield",
    "state": "IL",
    "postalCode": "62701",
    "country": "US"
  },
  "coordinates": {
    "latitude": 39.7817,
    "longitude": -89.6501
  },
  "metadata": {
    "region": "midwest"
  },
  "createdAt": 1705359000,
  "updatedAt": 1705359000
}
```

---

## GeoCoordinates

Reusable geographic point used by `coordinates`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `latitude` | number | Yes | Latitude in decimal degrees (-90 to 90) |
| `longitude` | number | Yes | Longitude in decimal degrees (-180 to 180) |

---

## Create and Update

- **Create** (`CreateBusinessLocationSchema`) omits the auto-generated fields `id`, `createdAt`, and `updatedAt`.
- **Update** (`UpdateBusinessLocationSchema`) makes all create fields optional and requires `id` to identify the record.

```json
{
  "name": "Airport Kiosk",
  "status": "ACTIVE",
  "isPrimary": false,
  "timezone": "America/Chicago",
  "businessHours": {
    "1": { "isOpen": true, "startTime": "06:00", "endTime": "22:00" }
  }
}
```

---

## Query Options

```typescript
interface BusinessLocationQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        status?: BusinessLocationStatus;
        isPrimary?: boolean;
        search?: string;
        nearLocation?: {
            latitude: number;
            longitude: number;
            radiusKm: number;
        };
        boundingBox?: {
            minLatitude: number;
            maxLatitude: number;
            minLongitude: number;
            maxLongitude: number;
        };
    };
    sorting?: {
        field: "name" | "createdAt" | "updatedAt" | "status";
        direction: "asc" | "desc";
    };
}
```

| Filter | Type | Description |
|--------|------|-------------|
| `status` | enum | Filter by lifecycle status |
| `isPrimary` | boolean | Restrict to primary locations |
| `search` | string | Free-text search across name, code, and address |
| `nearLocation` | object | Radius search around a point (`latitude`, `longitude`, `radiusKm`) |
| `boundingBox` | object | Geographic bounding-box search |

---

## Implementation Notes

1. `businessHours` is required; every location must declare its weekly schedule.
2. `status` is the single source of truth for active state — there is no separate `isActive` flag.
3. Geographic filters (`nearLocation`, `boundingBox`) require `coordinates` to be populated to match.
4. `externalLocationId` links a location to a record in an external system when synced or imported.
5. Timestamps (`createdAt`, `updatedAt`) and `id` are system-managed and excluded from create payloads.
```