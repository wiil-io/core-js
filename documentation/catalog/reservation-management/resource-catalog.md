# Reservation Resource Catalog Domain

This document details the resource catalog schemas used by reservation management.

## Table of Contents

1. [Overview](#overview)
2. [ResourceCategory](#resourcecategory)
3. [Resource](#resource)
4. [ResourceInstance](#resourceinstance)
5. [Resource Versioning](#resource-versioning)
6. [Query Options](#query-options)
7. [Implementation Notes](#implementation-notes)

---

## Overview

The resource catalog separates bookable concepts from physical inventory.

- `ResourceCategory` groups resources for browsing, display order, channel mapping, and resource-type filtering.
- `Resource` defines a bookable resource type such as a dining table type, room type, or rental product.
- `ResourceInstance` represents a physical unit that can be assigned, blocked, cleaned, or taken out of service.
- Resource versioning allows catalog revisions to be drafted, derived, published, and archived without changing existing reservations.

```text
ResourceCategory
  -> Resource
     -> ResourceInstance

ResourceDefinition
  -> ResourceRevision
     -> ResourceCategory
     -> Resource
     -> ResourceInstance
```

---

## ResourceCategory

Groups reservation resources by business use, location scope, resource type, and external channel mapping.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
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
    "resourceType": {
      "type": ["string", "null"],
      "enum": ["table", "room", "rental", "rentals", "resource", null]
    },
    "displayOrder": { "type": ["integer", "null"] },
    "isActive": { "type": "boolean", "default": true },
    "metadata": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "name"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique category identifier |
| `resourceRevisionId` | string | No | Version revision this category belongs to |
| `locationId` | string \| null | No | Location scope. Null applies across locations |
| `name` | string | Yes | Category display name |
| `description` | string \| null | No | Public or administrative category description |
| `channelMappings` | ResourceCategoryChannelMapping[] \| null | No | External channel category IDs |
| `resourceType` | ResourceType \| null | No | Optional table, room, rental, or resource scope |
| `displayOrder` | number \| null | No | Stable ordering value for catalog displays |
| `isActive` | boolean | Yes | Whether the category is usable |
| `metadata` | object \| null | No | Integration-specific or rendering metadata |

### Example

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
  }
}
```

---

## Resource

Defines a reservable type, including capacity, pricing, booking behavior, checklist templates, and display metadata.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "resourceRevisionId": { "type": "string" },
    "locationId": { "type": ["string", "null"] },
    "resourceType": { "type": "string", "enum": ["table", "room", "rental", "rentals", "resource"] },
    "categoryId": { "type": ["string", "null"] },
    "name": { "type": "string" },
    "description": { "type": ["string", "null"] },
    "imageUrls": {
      "type": ["array", "null"],
      "items": { "type": "string", "format": "uri" }
    },
    "capacity": { "type": ["integer", "null"], "exclusiveMinimum": 0 },
    "capacityConfig": {
      "oneOf": [
        { "$ref": "#/$defs/ResourceCapacity" },
        { "type": "null" }
      ]
    },
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
    "pricing": {
      "oneOf": [
        { "$ref": "#/$defs/ResourcePricingStrategy" },
        { "type": "null" }
      ]
    },
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
    "checklistTemplate": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "label": { "type": "string" },
          "required": { "type": "boolean", "default": true },
          "phase": { "type": "string", "enum": ["pickup", "return", "both"], "default": "both" }
        },
        "required": ["id", "label"]
      },
      "default": []
    },
    "applicableTierIds": { "type": "array", "items": { "type": "string" }, "default": [] },
    "displayOrder": { "type": ["integer", "null"], "minimum": 0 },
    "metadata": { "type": "object", "additionalProperties": true }
  },
  "required": ["id", "resourceType", "name"]
}
```

### Capacity Strategies

| Strategy | Resource Type | Fields | Purpose |
|----------|---------------|--------|---------|
| `range` | table | `min`, `max` | Supports party-size matching |
| `occupancy` | room | `standard`, `max`, `extraFee` | Supports lodging occupancy pricing |
| `single` | rental | `value`, `weightLimit`, `skillLevel` | Supports single-unit rental constraints |

### Capacity Schema

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

### Pricing Strategies

| Strategy | Resource Type | Fields | Purpose |
|----------|---------------|--------|---------|
| `none` | table | `holdPolicy` | No price quote required for a slot |
| `dayOfWeek` | room | `rates.mon` through `rates.sun` | Nightly rate generation |
| `tiered` | rental | `tiers` | Duration or quantity based pricing |

### Pricing Schema

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

### Example: Room Resource

```json
{
  "id": "res_king_suite",
  "locationId": "loc_hotel",
  "resourceType": "room",
  "categoryId": "rc_suites",
  "name": "King Suite",
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

### Example: Rental Resource

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
    }
  ],
  "isAvailable": true
}
```

---

## ResourceInstance

Represents a physical table, room, rental unit, or other concrete unit under a resource.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
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

### Status Values

| Value | Meaning |
|-------|---------|
| `available` | Can be assigned |
| `reserved` | Reserved for a future booking |
| `occupied` | Currently in use |
| `maintenance` | Temporarily blocked for maintenance |
| `cleaning` | Temporarily blocked for reset or cleaning |
| `out_of_service` | Not usable until restored |

### Example

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

## Resource Versioning

Resource versioning separates stable catalog definitions from mutable revisions.

### ResourceDefinition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
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
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "resourceId": { "type": "string" },
    "label": { "type": ["string", "null"] },
    "status": { "type": "string", "enum": ["draft", "active", "archived"], "default": "draft" },
    "derivedFromRevisionId": { "type": ["string", "null"] },
    "publishedAt": { "type": ["integer", "null"], "exclusiveMinimum": 0 }
  },
  "required": ["id", "resourceId"]
}
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

### Versioning Guidance

- Use draft revisions for catalog editing workflows.
- Publish a revision before exposing it to booking channels.
- Keep historical reservations tied to the resource and instance IDs that existed when they were booked.
- Use `resourceRevisionId` on catalog records when a revision-specific view is needed.

---

## Query Options

### ResourceCategoryQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "search": { "type": "string" },
        "locationId": { "type": "string" },
        "resourceType": {
          "type": "array",
          "items": { "type": "string", "enum": ["table", "room", "rental", "rentals", "resource"] }
        },
        "isActive": { "type": "boolean" }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["name", "displayOrder", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

### ResourceQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "search": { "type": "string" },
        "locationId": { "type": "string" },
        "resourceType": {
          "type": "array",
          "items": { "type": "string", "enum": ["table", "room", "rental", "rentals", "resource"] }
        },
        "categoryId": { "type": "string" },
        "isAvailable": { "type": "boolean" },
        "capacityRange": {
          "type": "object",
          "properties": {
            "min": { "type": "number" },
            "max": { "type": "number" }
          }
        },
        "location": { "type": "string" },
        "amenities": { "type": "array", "items": { "type": "string" } },
        "priceRange": {
          "type": "object",
          "properties": {
            "min": { "type": "number" },
            "max": { "type": "number" }
          }
        }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["name", "capacity", "createdAt"] },
        "direction": { "type": "string", "enum": ["asc", "desc"] }
      },
      "required": ["field", "direction"]
    }
  },
  "required": ["page", "pageSize"]
}
```

### ResourceInstanceQueryOptions

```json
{
  "type": "object",
  "properties": {
    "page": { "type": "integer", "minimum": 1 },
    "pageSize": { "type": "integer", "minimum": 1 },
    "filters": {
      "type": "object",
      "properties": {
        "resourceId": { "type": "string" },
        "locationId": { "type": "string" },
        "status": {
          "type": "array",
          "items": { "type": "string", "enum": ["available", "reserved", "occupied", "maintenance", "cleaning", "out_of_service"] }
        },
        "isAvailable": { "type": "boolean" }
      }
    },
    "sorting": {
      "type": "object",
      "properties": {
        "field": { "type": "string", "enum": ["name", "status", "createdAt"] },
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

1. Do not define `organizationId` on reservation catalog schemas.
2. Do not expose `includeDeleted` or `includedDeleted` in reservation catalog query options.
3. Use `locationId` for location scope.
4. Use `resourceType` as the discriminator for type-specific behavior.
5. Keep physical availability on `ResourceInstance`; keep product/catalog availability on `Resource`.
6. Use structured `attributes` for filterable values and `metadata` for integration payloads.
