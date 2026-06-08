# Floor Plan Data Model

## Overview

The floor plan system enables restaurants and venues to manage physical table layouts for reservation management and visual floor planning.

## Entity Hierarchy

```
FloorPlan (canvas per location)
    └── Section[] (areas with embedded tables)
            └── TablePlacement[] (embedded)
```

---

## Entities

### FloorPlan

Root entity defining the canvas coordinate space for a location.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | string | Business account ID |
| `locationId` | string? | Business location ID |
| `name` | string | Floor plan name (e.g., "Main Floor", "Rooftop") |
| `isActive` | boolean | Whether floor plan is active |
| `canvasDimensions` | CanvasDimensions | Canvas coordinate space |

#### CanvasDimensions

| Field | Type | Description |
|-------|------|-------------|
| `width` | number | Canvas width |
| `height` | number | Canvas height |
| `unit` | `px` \| `ft` \| `m` | Coordinate unit |

---

### Section

Logical area within a floor plan with embedded table placements.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | string | Business account ID |
| `locationId` | string? | Business location ID |
| `floorPlanId` | string? | Parent floor plan ID |
| `name` | string | Section name |
| `color` | #hex? | Hex color for floor plan rendering |
| `isActive` | boolean | Whether section is active |
| `sortOrder` | number | Display order in lists |
| `tables` | TablePlacement[] | Tables in this section |

---

### TablePlacement

Individual table positioned on the floor plan (embedded in Section).

| Field | Type | Description |
|-------|------|-------------|
| `tableResourceId` | string | Table/resource ID |
| `number` | string | Human-readable table number |
| `x` | number | X position in layout coordinates |
| `y` | number | Y position in layout coordinates |
| `width` | number | Table width in layout units |
| `height` | number | Table height in layout units |
| `shape` | TableShape | Rendered table shape |
| `rotation` | number? | Rotation in degrees |
| `minParty` | number | Minimum party size |
| `maxParty` | number | Maximum party size |
| `combinableWith` | string[] | Table IDs that can be combined |
| `serverSectionId` | string? | Server section assignment |

#### TableShape

```typescript
enum TableShape {
    ROUND = "round",
    SQUARE = "square",
    BOOTH = "booth",
    RECT = "rect",
    BAR = "bar",
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                        FloorPlan                            │
│  organizationId, locationId, name, isActive                 │
│  canvasDimensions: { width, height, unit }                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ 1:N (by floorPlanId)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         Section                             │
│  organizationId, locationId, floorPlanId                    │
│  name, color, isActive, sortOrder                           │
│  tables: TablePlacement[]                                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ embedded
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TablePlacement                           │
│  tableResourceId, number, x, y, width, height, shape        │
│  rotation, minParty, maxParty, combinableWith               │
└─────────────────────────────────────────────────────────────┘
```

---

## Validation Rules

### TablePlacement

- `maxParty >= minParty`
- `combinableWith` cannot include the table's own ID

---

## Usage Example

```typescript
// Create a floor plan
const floorPlan: CreateFloorPlan = {
    organizationId: "org_123",
    locationId: "loc_456",
    name: "Main Floor",
    isActive: true,
    canvasDimensions: { width: 1000, height: 800, unit: "px" },
};

// Create section with tables
const patioSection: CreateSection = {
    organizationId: "org_123",
    locationId: "loc_456",
    floorPlanId: "fp_789",
    name: "Patio",
    color: "#4CAF50",
    isActive: true,
    sortOrder: 0,
    tables: [
        {
            tableResourceId: "table_1",
            number: "T1",
            x: 100,
            y: 100,
            width: 80,
            height: 80,
            shape: "round",
            minParty: 2,
            maxParty: 4,
            combinableWith: ["table_2"],
        },
        {
            tableResourceId: "table_2",
            number: "T2",
            x: 200,
            y: 100,
            width: 80,
            height: 80,
            shape: "round",
            minParty: 2,
            maxParty: 4,
            combinableWith: ["table_1"],
        },
    ],
};
```
