# Reservation Floor Plans Domain

This document details floor plan, section, geometry, and table placement schemas.

## Table of Contents

1. [Overview](#overview)
2. [FloorPlan](#floorplan)
3. [Section](#section)
4. [TablePlacement](#tableplacement)
5. [Geometry Models](#geometry-models)
6. [Query Options](#query-options)
7. [Validation Rules](#validation-rules)
8. [Implementation Notes](#implementation-notes)

---

## Overview

Floor plan schemas model table-based reservation layouts. They are used for host stand views, table assignment workflows, section filtering, and availability matching.

```text
FloorPlan
  -> Section
     -> TablePlacement
        -> Resource
        -> ResourceInstance
```

---

## FloorPlan

Represents a location-level canvas for table layouts.

### Schema Definition

```typescript
FloorPlanSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    name: z.string().min(1),
    description: z.string(),
    imageUrls: z.array(z.url()).nullable().optional(),
    isActive: z.boolean().default(true),
    canvasDimensions: CanvasDimensionsSchema,
    capacity: z.number().int().positive(),
    metadata: z.record(z.string(), z.any()).nullable().optional(),
});
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique floor plan identifier |
| `locationId` | string \| null | No | Business location scope |
| `name` | string | Yes | Floor plan display name |
| `description` | string | Yes | Description for staff or integrations |
| `imageUrls` | string[] \| null | No | Optional background or reference images |
| `isActive` | boolean | Yes | Whether the layout can be used |
| `canvasDimensions` | CanvasDimensions | Yes | Layout coordinate system |
| `capacity` | number | Yes | Total seating capacity |
| `metadata` | object \| null | No | Renderer or integration metadata |

### Example

```json
{
  "id": "fp_main",
  "locationId": "loc_downtown",
  "name": "Main Dining Room",
  "description": "Primary indoor dining layout",
  "imageUrls": null,
  "isActive": true,
  "canvasDimensions": {
    "width": 1200,
    "height": 800,
    "unit": "px"
  },
  "capacity": 96,
  "metadata": {
    "floor": "1"
  }
}
```

---

## Section

Represents a named area within a floor plan.

### Schema Definition

```typescript
SectionSchema = BaseModelSchema.safeExtend({
    locationId: z.string(),
    floorPlanId: z.string(),
    name: z.string().min(1),
    capacity: z.number().int().positive(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    isActive: z.boolean().default(true),
    sortOrder: z.number().int().nonnegative().default(0),
    tables: z.array(TablePlacementSchema).default([]),
    geometry: SectionGeometrySchema.nullable().optional(),
});
```

### Example

```json
{
  "id": "sec_window",
  "locationId": "loc_downtown",
  "floorPlanId": "fp_main",
  "name": "Window",
  "capacity": 24,
  "color": "#2F80ED",
  "isActive": true,
  "sortOrder": 1,
  "tables": [],
  "geometry": {
    "kind": "rect",
    "x": 40,
    "y": 80,
    "width": 420,
    "height": 220,
    "rotation": 0
  }
}
```

---

## TablePlacement

Represents a table placed on a floor plan canvas.

### Schema Definition

```typescript
TablePlacementSchema = BaseModelSchema.safeExtend({
    floorPlanSectionId: z.string().nullable().optional(),
    tableResourceId: z.string(),
    number: z.string(),
    x: z.number(),
    y: z.number(),
    width: z.number().positive(),
    height: z.number().positive(),
    shape: z.enum(TableShape),
    rotation: z.number().nullable().optional(),
    minParty: z.number().int().positive(),
    maxParty: z.number().int().positive(),
    combinableWith: z.array(z.string()).default([]),
    serverSectionId: z.string().nullable().optional(),
});
```

### Table Shapes

| Value | Typical Rendering |
|-------|-------------------|
| `round` | Circular table |
| `square` | Square table |
| `booth` | Booth seating |
| `rect` | Rectangular table |
| `curved` | Curved booth or banquette |
| `high_top` | High-top table |
| `bar` | Bar seat or bar area |

### Example

```json
{
  "id": "tp_12",
  "floorPlanSectionId": "sec_window",
  "tableResourceId": "res_table_standard",
  "number": "12",
  "x": 220,
  "y": 180,
  "width": 80,
  "height": 60,
  "rotation": 0,
  "shape": "rect",
  "minParty": 2,
  "maxParty": 4,
  "combinableWith": ["res_table_13"],
  "serverSectionId": "server_sec_a"
}
```

---

## Geometry Models

### CanvasDimensions

```typescript
CanvasDimensionsSchema = z.object({
    width: z.number().positive(),
    height: z.number().positive(),
    unit: z.enum(CanvasUnit).default("px"),
});
```

### SectionGeometry

```typescript
SectionGeometrySchema = z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("auto") }),
    z.object({
        kind: z.literal("rect"),
        x: z.number(),
        y: z.number(),
        width: z.number().positive(),
        height: z.number().positive(),
        rotation: z.number().min(-360).max(360).optional(),
    }),
    z.object({
        kind: z.literal("polygon"),
        points: z.array(point2DSchema).min(3).max(64),
        rotation: z.number().min(-360).max(360).optional(),
    }),
]);
```

### Canvas Units

| Value | Meaning |
|-------|---------|
| `px` | Pixel-based layout |
| `ft` | Feet-based physical layout |
| `m` | Meter-based physical layout |

---

## Query Options

### FloorPlanQueryOptions

```typescript
interface FloorPlanQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        locationId?: string;
        isActive?: boolean;
    };
    sorting?: {
        field: keyof FloorPlan;
        direction: "asc" | "desc";
    };
}
```

### SectionQueryOptions

```typescript
interface SectionQueryOptions {
    page: number;
    pageSize: number;
    filters?: {
        locationId?: string;
        isActive?: boolean;
    };
    sorting?: {
        field: keyof Section;
        direction: "asc" | "desc";
    };
}
```

## Validation Rules

- `FloorPlan.name` must be non-empty.
- Canvas dimensions must have positive width and height.
- Rect section geometry must have positive width and height.
- Polygon section geometry must include at least three points.
- Table placement width and height must be positive.
- `TablePlacement.maxParty` must be greater than or equal to `minParty` when both are provided.
- `TablePlacement.combinableWith` cannot contain its own `tableResourceId`.

---

## Implementation Notes

1. Floor-plan schemas should not define `organizationId`.
2. Query options should not expose `includeDeleted` or `includedDeleted`.
3. Store coordinate-system details in `canvasDimensions`.
4. Use `metadata` only for renderer-specific or integration-specific details.
5. Use `floorPlanId` and `floorPlanSectionId` on table assignments to preserve layout context.
