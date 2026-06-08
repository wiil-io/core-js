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

### Capacity Strategies

| Strategy | Resource Type | Fields | Purpose |
|----------|---------------|--------|---------|
| `range` | table | `min`, `max` | Supports party-size matching |
| `occupancy` | room | `standard`, `max`, `extraFee` | Supports lodging occupancy pricing |
| `single` | rental | `value`, `weightLimit`, `skillLevel` | Supports single-unit rental constraints |

### Pricing Strategies

| Strategy | Resource Type | Fields | Purpose |
|----------|---------------|--------|---------|
| `none` | table | `holdPolicy` | No price quote required for a slot |
| `dayOfWeek` | room | `rates.mon` through `rates.sun` | Nightly rate generation |
| `tiered` | rental | `tiers` | Duration or quantity based pricing |

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

### DeriveResourceRevisionRequest

```typescript
DeriveResourceRevisionRequestSchema = z.object({
    resourceId: z.string(),
    sourceRevisionId: z.string().nullable().optional(),
    strategy: z.enum(ResourceRevisionDeriveStrategy).default("copy_current"),
    label: z.string().nullable().optional(),
});
```

### Versioning Guidance

- Use draft revisions for catalog editing workflows.
- Publish a revision before exposing it to booking channels.
- Keep historical reservations tied to the resource and instance IDs that existed when they were booked.
- Use `resourceRevisionId` on catalog records when a revision-specific view is needed.

---

## Query Options

### ResourceCategoryQueryOptions

```typescript
interface ResourceCategoryQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        search?: string;
        locationId?: string;
        resourceType?: ResourceType[];
        isActive?: boolean;
    };
    sorting?: {
        field: keyof ResourceCategory;
        direction: "asc" | "desc";
    };
}
```

### ResourceQueryOptions

```typescript
interface ResourceQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        search?: string;
        locationId?: string;
        resourceType?: ResourceType[];
        categoryId?: string;
        isAvailable?: boolean;
        capacityRange?: { min?: number; max?: number };
        location?: string;
        amenities?: string[];
        priceRange?: { min?: number; max?: number };
    };
    sorting?: {
        field: keyof Resource;
        direction: "asc" | "desc";
    };
}
```

### ResourceInstanceQueryOptions

```typescript
interface ResourceInstanceQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        resourceId?: string;
        locationId?: string;
        status?: ResourceInstanceStatus[];
        isAvailable?: boolean;
    };
    sorting?: {
        field: keyof ResourceInstance;
        direction: "asc" | "desc";
    };
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
