# Menu Sets Domain

This document provides comprehensive documentation for the Menu Sets domain, covering bundled menu items, pricing modes, and targeting strategies.

## Table of Contents

1. [Overview](#overview)
2. [MenuSet](#menuset)
3. [MenuSetItem](#menusetitem)
4. [MenuSetSelector](#menusetselector)
5. [View Schemas](#view-schemas)
6. [Channel Mappings](#channel-mappings)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Usage Examples](#usage-examples)

---

## Overview

The Menu Sets domain enables bundling menu items into packages with flexible pricing and targeting:

- **Combo meals** - Fixed-price bundles of specific items
- **Family packs** - Bundled items with quantity specifications
- **Dynamic sets** - Selector-based item matching

### Key Features

- **Dual targeting modes** - Explicit items or selector-based matching
- **Flexible pricing** - Fixed price or sum of component items
- **Variant-level specificity** - Bundle specific variants
- **Location-specific sets** - Via `locationId`
- **Version control** - Via `menuRevisionId`

---

## MenuSet

Represents a bundle or set of menu items with configurable pricing and targeting.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | null | Location-specific menu set |
| menuRevisionId | string | No | null | Version control for menu changes |
| code | string | No | null | Stable internal code for integration matching |
| name | string | Yes | - | Menu set name (min 1 character) |
| description | string | No | null | Menu set description |
| channelMappings | array | No | null | Per-channel external set ID mappings |
| targetingMode | enum | No | "EXPLICIT" | How set selects members (EXPLICIT or SELECTOR) |
| pricingMode | enum | No | "SUM_OF_ITEMS" | How pricing is calculated |
| fixedPrice | number | No | null | Set price when pricingMode is FIXED |
| items | array | No | null | Explicit menu members (for EXPLICIT targeting) |
| selector | object | No | null | Selector definition (for SELECTOR targeting) |
| isActive | boolean | No | true | Whether menu set is active |
| imageUrl | string | No | null | Public image URL for the set |
| imageUrls | array | No | null | Multiple image URLs |
| displayOrder | integer | No | null | Display order in catalog |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Enums

**MenuSetPricingMode:**
| Value | Description |
|-------|-------------|
| FIXED | Set has a fixed price regardless of component prices |
| SUM_OF_ITEMS | Set price is sum of included item prices |

**MenuSetTargetingMode:**
| Value | Description |
|-------|-------------|
| EXPLICIT | Set includes explicitly listed items |
| SELECTOR | Set includes items matching selector criteria |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Menu set name is required" |
| fixedPrice required when pricingMode is FIXED | "fixedPrice is required when pricingMode is FIXED" |
| fixedPrice null when pricingMode is SUM_OF_ITEMS | "fixedPrice must be null or omitted when pricingMode is SUM_OF_ITEMS" |
| items required when targetingMode is EXPLICIT | "items is required when targetingMode is EXPLICIT" |
| selector null when targetingMode is EXPLICIT | "selector must be null or omitted when targetingMode is EXPLICIT" |
| selector required when targetingMode is SELECTOR | "selector is required when targetingMode is SELECTOR" |
| items empty when targetingMode is SELECTOR | "items must be empty when targetingMode is SELECTOR" |
| No duplicate menuItemId + menuItemVariantId combinations | "Duplicate menuItemId + menuItemVariantId combination is not allowed in a menu set" |

### Example

```json
{
  "name": "Family Pizza Deal",
  "description": "Two large pizzas, breadsticks, and a 2-liter drink",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 34.99,
  "items": [
    { "menuItemId": "pizza_margherita_id", "menuItemVariantId": "variant_large_id", "quantity": 2, "isRequired": true },
    { "menuItemId": "breadsticks_id", "menuItemVariantId": "variant_regular_id", "quantity": 1, "isRequired": true },
    { "menuItemId": "drink_2l_id", "menuItemVariantId": "variant_cola_id", "quantity": 1, "isRequired": true }
  ],
  "isActive": true,
  "displayOrder": 1,
  "imageUrl": "https://example.com/images/family-deal.jpg"
}
```

---

## MenuSetItem

Represents an item included in a menu set with quantity and requirement specifications.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| menuItemId | string | Yes | - | Menu item ID included in set |
| menuItemVariantId | string | Yes | - | Specific variant ID included |
| quantity | integer | Yes | - | Quantity of this item (positive) |
| isRequired | boolean | No | true | Whether item is required in set |
| displayOrder | integer | No | null | Display order inside the set |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| quantity > 0 | Must be positive integer |

### Example

```json
{
  "menuItemId": "pizza_pepperoni_id",
  "menuItemVariantId": "variant_large_id",
  "quantity": 1,
  "isRequired": true,
  "displayOrder": 1
}
```

---

## MenuSetSelector

Defines criteria for dynamically selecting items to include in a set.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| menuItemIdsAny | array | No | [] | Any matching catalog menu item IDs (max 5000) |
| menuItemIdsAll | array | No | [] | All required catalog menu item IDs (max 5000) |
| allMenuItems | boolean | No | false | Include all catalog menu items |
| quantityExact | integer | No | null | Require exact matched quantity |
| quantityMin | integer | No | null | Require minimum matched quantity |
| quantityMax | integer | No | null | Cap maximum matched quantity |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| Exactly one selector mode active | "Exactly one of menuItemIdsAny, menuItemIdsAll, or allMenuItems must be set" |
| quantityExact cannot combine with min/max | "quantityExact cannot be combined with quantityMin or quantityMax" |
| quantityMax >= quantityMin | "quantityMax must be greater than or equal to quantityMin" |

### Selector Modes

| Mode | Description |
|------|-------------|
| menuItemIdsAny | Cart must contain at least one item from the list |
| menuItemIdsAll | Cart must contain all items from the list |
| allMenuItems | Applies to any menu items |

### Example: Any of Specific Items

```json
{
  "menuItemIdsAny": ["pizza_margherita_id", "pizza_pepperoni_id", "pizza_hawaiian_id"],
  "quantityMin": 2
}
```

### Example: All Required Items

```json
{
  "menuItemIdsAll": ["burger_id", "fries_id", "drink_id"],
  "quantityExact": 1
}
```

---

## View Schemas

### MenuSetItemView

Extended item schema with resolved menu item data.

| Field | Type | Description |
|-------|------|-------------|
| (all MenuSetItem fields) | - | Inherited from MenuSetItem |
| menuItem | object | Resolved BusinessMenuItem snapshot (nullable) |

### MenuSetView

Extended set schema with resolved items and computed pricing.

| Field | Type | Description |
|-------|------|-------------|
| (all MenuSet fields except items) | - | Inherited from MenuSet |
| items | array | MenuSetItemView array with resolved data |
| resolvedPrice | number | Computed display price for the set (nullable) |

---

## Channel Mappings

### Menu Set Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "doordash") |
| externalMenuSetId | string | Yes | Set ID in external platform |

### Example

```json
{
  "channelMappings": [
    { "channelId": "doordash", "externalMenuSetId": "dd_combo_123" },
    { "channelId": "uber-eats", "externalMenuSetId": "ue_deal_456" }
  ]
}
```

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description |
| locationId | string | Filter by location |
| menuRevisionId | string | Filter by menu revision |
| code | string | Filter by internal code |
| targetingMode | enum | Filter by targeting mode (EXPLICIT/SELECTOR) |
| isActive | boolean | Filter by active status |
| pricingMode | enum | Filter by pricing mode (FIXED/SUM_OF_ITEMS) |

### Sorting

**Fields:** `name`, `createdAt`, `displayOrder`

**Directions:** `asc`, `desc`

### Pagination

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

### Example Query

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "locationId": "location_main_id",
    "isActive": true,
    "pricingMode": "FIXED"
  },
  "sorting": {
    "field": "displayOrder",
    "direction": "asc"
  }
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                       MENU SET STRUCTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │     MenuSet     │                                           │
│   │                 │                                           │
│   │ targetingMode:  │                                           │
│   │  EXPLICIT or    │                                           │
│   │  SELECTOR       │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│     ┌──────┴──────┐                                             │
│     │             │                                              │
│     ▼             ▼                                              │
│ [EXPLICIT]    [SELECTOR]                                        │
│     │             │                                              │
│     │             ▼                                              │
│     │    ┌─────────────────┐                                    │
│     │    │ MenuSetSelector │                                    │
│     │    │                 │                                    │
│     │    │ - menuItemIdsAny│                                    │
│     │    │ - menuItemIdsAll│                                    │
│     │    │ - allMenuItems  │                                    │
│     │    │ - quantity rules│                                    │
│     │    └─────────────────┘                                    │
│     │                                                            │
│     ▼                                                            │
│ ┌─────────────────┐                                             │
│ │  MenuSetItem[]  │                                             │
│ │                 │                                             │
│ │ - menuItemId    │───────▶ BusinessMenuItem                    │
│ │ - menuItemVariantId ────▶ MenuItemVariant                     │
│ │ - quantity      │                                             │
│ │ - isRequired    │                                             │
│ └─────────────────┘                                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Fixed-Price Combo Meal

```json
{
  "name": "Lunch Combo",
  "description": "Sandwich, chips, and drink",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 12.99,
  "items": [
    { "menuItemId": "sandwich_turkey_id", "menuItemVariantId": "variant_6inch_id", "quantity": 1, "isRequired": true },
    { "menuItemId": "chips_id", "menuItemVariantId": "variant_regular_id", "quantity": 1, "isRequired": true },
    { "menuItemId": "drink_id", "menuItemVariantId": "variant_medium_id", "quantity": 1, "isRequired": true }
  ],
  "isActive": true
}
```

### Sum-of-Items Bundle

```json
{
  "name": "Build Your Own Bundle",
  "description": "Pick any 3 appetizers",
  "targetingMode": "SELECTOR",
  "pricingMode": "SUM_OF_ITEMS",
  "selector": {
    "menuItemIdsAny": ["app_wings_id", "app_nachos_id", "app_rings_id", "app_sticks_id"],
    "quantityExact": 3
  },
  "isActive": true
}
```

### Family Pack with Optional Items

```json
{
  "name": "Family Feast",
  "description": "Main dishes with optional sides",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 49.99,
  "items": [
    { "menuItemId": "chicken_bucket_id", "menuItemVariantId": "variant_12pc_id", "quantity": 1, "isRequired": true, "displayOrder": 1 },
    { "menuItemId": "coleslaw_id", "menuItemVariantId": "variant_large_id", "quantity": 1, "isRequired": true, "displayOrder": 2 },
    { "menuItemId": "biscuits_id", "menuItemVariantId": "variant_6pack_id", "quantity": 1, "isRequired": false, "displayOrder": 3 },
    { "menuItemId": "gravy_id", "menuItemVariantId": "variant_pint_id", "quantity": 1, "isRequired": false, "displayOrder": 4 }
  ],
  "isActive": true
}
```

---

## Best Practices

1. **Use FIXED pricing for combos** - Provides clear value proposition to customers.

2. **Set display orders for items** - Ensures consistent presentation within sets.

3. **Validate variant availability** - Ensure all referenced variants exist and are active.

4. **Use codes for integrations** - The `code` field provides stable identifiers for external system matching.

5. **Avoid duplicate item/variant combinations** - Each item/variant pair should appear only once in a set.

6. **Consider required vs optional items** - Use `isRequired: false` for customizable bundles.
