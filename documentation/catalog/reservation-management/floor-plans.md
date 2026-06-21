# Reservation Floor Plans Domain

This document details floor plan, section, geometry, and table placement schemas.

## Table of Contents

1. [Overview](#overview)
2. [FloorPlan](#floorplan)
3. [Section](#section)
4. [TablePlacement](#tableplacement)
5. [Floor Plan Definition (Graph)](#floor-plan-definition-graph)
6. [Geometry Models](#geometry-models)
7. [Query Options](#query-options)
8. [Validation Rules](#validation-rules)
9. [Implementation Notes](#implementation-notes)

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

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": "string" },
    "imageUrls": {
      "type": ["array", "null"],
      "items": { "type": "string", "format": "uri" }
    },
    "isActive": { "type": "boolean", "default": true },
    "canvasDimensions": { "$ref": "#/$defs/CanvasDimensions" },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "metadata": { "type": ["object", "null"], "additionalProperties": true }
  },
  "required": ["id", "name", "description", "canvasDimensions", "capacity"]
}
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

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": "string" },
    "floorPlanId": { "type": "string" },
    "name": { "type": "string", "minLength": 1 },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "color": { "type": "string", "pattern": "^#[0-9A-Fa-f]{6}$" },
    "isActive": { "type": "boolean", "default": true },
    "sortOrder": { "type": "integer", "minimum": 0, "default": 0 },
    "tables": {
      "type": "array",
      "items": { "$ref": "#/$defs/TablePlacement" },
      "default": []
    },
    "geometry": {
      "oneOf": [
        { "$ref": "#/$defs/SectionGeometry" },
        { "type": "null" }
      ]
    }
  },
  "required": ["id", "locationId", "floorPlanId", "name", "capacity", "color"]
}
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

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "floorPlanSectionId": { "type": "string" },
    "tableResourceId": { "type": "string" },
    "number": { "type": "string" },
    "x": { "type": "number" },
    "y": { "type": "number" },
    "width": { "type": "number", "exclusiveMinimum": 0 },
    "height": { "type": "number", "exclusiveMinimum": 0 },
    "shape": {
      "type": "string",
      "enum": ["round", "square", "booth", "rect", "curved", "high_top", "bar"]
    },
    "rotation": { "type": ["number", "null"] },
    "minParty": { "type": "integer", "exclusiveMinimum": 0 },
    "maxParty": { "type": "integer", "exclusiveMinimum": 0 },
    "combinableWith": {
      "type": "array",
      "items": { "type": "string" },
      "default": []
    },
    "serverSectionId": { "type": ["string", "null"] }
  },
  "required": ["id", "floorPlanSectionId", "tableResourceId", "number", "x", "y", "width", "height", "shape", "minParty", "maxParty"]
}
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

## Floor Plan Definition (Graph)

Aggregate schemas that compose a floor plan with its sections and nested table placements in a single graph.

- **CreateFloorPlanDefinition** — atomically create a floor plan, its sections, and their tables in one request. Nested sections/tables are supplied inline **without** server-assigned IDs (`floorPlanId`, `floorPlanSectionId`, `tableResourceId` are assigned during creation).
- **FloorPlanDefinition** — the hydrated graph response: a full `FloorPlan` plus its `Section[]` (each containing full `TablePlacement[]`).

### CreateFloorPlanDefinition

Extends the FloorPlan create payload (omits `id`, `createdAt`, `updatedAt`) with a nested `sections` array.

```json
{
  "type": "object",
  "properties": {
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": "string" },
    "imageUrls": { "type": ["array", "null"], "items": { "type": "string", "format": "uri" } },
    "isActive": { "type": "boolean", "default": true },
    "canvasDimensions": { "$ref": "#/$defs/CanvasDimensions" },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "metadata": { "type": ["object", "null"], "additionalProperties": true },
    "sections": {
      "type": "array",
      "items": { "$ref": "#/$defs/CreateFloorPlanSectionInput" },
      "minItems": 1
    }
  },
  "required": ["name", "description", "canvasDimensions", "capacity", "sections"],
  "$defs": {
    "CreateFloorPlanSectionInput": {
      "type": "object",
      "properties": {
        "name": { "type": "string", "minLength": 1 },
        "capacity": { "type": "integer", "exclusiveMinimum": 0 },
        "color": { "type": "string", "pattern": "^#[0-9A-Fa-f]{6}$" },
        "isActive": { "type": "boolean", "default": true },
        "sortOrder": { "type": "integer", "minimum": 0, "default": 0 },
        "geometry": { "oneOf": [{ "$ref": "#/$defs/SectionGeometry" }, { "type": "null" }] },
        "tables": {
          "type": "array",
          "items": { "$ref": "#/$defs/CreateFloorPlanTablePlacementInput" },
          "minItems": 1
        }
      },
      "required": ["name", "capacity", "color", "tables"]
    },
    "CreateFloorPlanTablePlacementInput": {
      "type": "object",
      "properties": {
        "number": { "type": "string" },
        "x": { "type": "number" },
        "y": { "type": "number" },
        "width": { "type": "number", "exclusiveMinimum": 0 },
        "height": { "type": "number", "exclusiveMinimum": 0 },
        "shape": { "type": "string", "enum": ["round", "square", "booth", "rect", "curved", "high_top", "bar"] },
        "rotation": { "type": ["number", "null"] },
        "minParty": { "type": "integer", "exclusiveMinimum": 0 },
        "maxParty": { "type": "integer", "exclusiveMinimum": 0 },
        "combinableWith": { "type": "array", "items": { "type": "string" }, "default": [] },
        "serverSectionId": { "type": ["string", "null"] }
      },
      "required": ["number", "x", "y", "width", "height", "shape", "minParty", "maxParty"]
    }
  }
}
```

> Note: the nested create-table input uses `number` (and an optional `serverSectionId`) rather than `tableResourceId`/`floorPlanSectionId` — the resource and section links are created and wired by the server. `combinableWith` references other table **numbers** within the same payload.

#### Create Example

```json
{
  "locationId": "loc_downtown",
  "name": "Main Dining Room",
  "description": "Primary indoor dining layout",
  "canvasDimensions": { "width": 1200, "height": 800, "unit": "px" },
  "capacity": 12,
  "sections": [
    {
      "name": "Window",
      "capacity": 8,
      "color": "#2F80ED",
      "sortOrder": 1,
      "geometry": { "kind": "rect", "x": 40, "y": 80, "width": 420, "height": 220 },
      "tables": [
        {
          "number": "12",
          "x": 220, "y": 180, "width": 80, "height": 60,
          "shape": "rect",
          "minParty": 2, "maxParty": 4,
          "combinableWith": ["13"]
        },
        {
          "number": "13",
          "x": 320, "y": 180, "width": 80, "height": 60,
          "shape": "rect",
          "minParty": 2, "maxParty": 4,
          "combinableWith": ["12"]
        }
      ]
    },
    {
      "name": "Bar",
      "capacity": 4,
      "color": "#EB5757",
      "sortOrder": 2,
      "tables": [
        {
          "number": "B1",
          "x": 700, "y": 120, "width": 120, "height": 40,
          "shape": "bar",
          "minParty": 1, "maxParty": 4,
          "combinableWith": []
        }
      ]
    }
  ]
}
```

Capacities are consistent with the validation rules: Window section `8` = tables `4 + 4`; Bar section `4` = its one table `4`; floor plan `12` = sections `8 + 4`.

### FloorPlanDefinition

The response graph — every `FloorPlan` field plus a `sections` array of full [Section](#section) objects (each with its full [TablePlacement](#tableplacement) list).

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1 },
    "description": { "type": "string" },
    "imageUrls": { "type": ["array", "null"], "items": { "type": "string", "format": "uri" } },
    "isActive": { "type": "boolean", "default": true },
    "canvasDimensions": { "$ref": "#/$defs/CanvasDimensions" },
    "capacity": { "type": "integer", "exclusiveMinimum": 0 },
    "metadata": { "type": ["object", "null"], "additionalProperties": true },
    "sections": {
      "type": "array",
      "items": { "$ref": "#/$defs/Section" },
      "default": []
    }
  },
  "required": ["id", "name", "description", "canvasDimensions", "capacity"]
}
```

### Validation Rules (nested create)

| Rule | Error Message |
|------|---------------|
| at least one section | "At least one section must be defined" |
| each section has at least one table | "Each section must have at least one table" |
| section `capacity` == sum of its tables' `maxParty` | "Section capacity (X) must equal the sum of its table maxParty values (Y)" |
| floor plan `capacity` == sum of section `capacity` | "Floor plan capacity (X) must equal the sum of its section capacities (Y)" |
| table `maxParty` >= `minParty` | "maxParty must be greater than or equal to minParty" |

Capacity is treated as **maximum seats**, so sums use each table's `maxParty`. These checks apply to `CreateFloorPlanDefinition`; the `FloorPlanDefinition` response is not constrained to be non-empty.

---

## Geometry Models

### CanvasDimensions

```json
{
  "$id": "#/$defs/CanvasDimensions",
  "type": "object",
  "properties": {
    "width": { "type": "number", "exclusiveMinimum": 0 },
    "height": { "type": "number", "exclusiveMinimum": 0 },
    "unit": { "type": "string", "enum": ["px", "ft", "m"], "default": "px" }
  },
  "required": ["width", "height"]
}
```

### SectionGeometry

```json
{
  "$id": "#/$defs/SectionGeometry",
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "auto" }
      },
      "required": ["kind"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "rect" },
        "x": { "type": "number" },
        "y": { "type": "number" },
        "width": { "type": "number", "exclusiveMinimum": 0 },
        "height": { "type": "number", "exclusiveMinimum": 0 },
        "rotation": { "type": "number", "minimum": -360, "maximum": 360 }
      },
      "required": ["kind", "x", "y", "width", "height"]
    },
    {
      "type": "object",
      "properties": {
        "kind": { "type": "string", "const": "polygon" },
        "points": {
          "type": "array",
          "minItems": 3,
          "maxItems": 64,
          "items": {
            "type": "object",
            "properties": {
              "x": { "type": "number" },
              "y": { "type": "number" }
            },
            "required": ["x", "y"]
          }
        },
        "rotation": { "type": "number", "minimum": -360, "maximum": 360 }
      },
      "required": ["kind", "points"]
    }
  ]
}
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
        "isActive": { "type": "boolean" }
      }
    }
  },
  "required": ["page", "pageSize"]
}
```

### SectionQueryOptions

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
        "isActive": { "type": "boolean" }
      }
    }
  },
  "required": ["page", "pageSize"]
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
