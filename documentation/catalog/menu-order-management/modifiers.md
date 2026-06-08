# Modifiers Domain

This document provides comprehensive documentation for the Modifiers domain, covering modifier groups, options, bindings, and applied modifiers.

## Table of Contents

1. [Overview](#overview)
2. [ModifierGroup](#modifiergroup)
3. [ModifierOption](#modifieroption)
4. [ItemModifierBinding](#itemmodifierbinding)
5. [ModifierOptionOverride](#modifieroptionoverride)
6. [AppliedModifier](#appliedmodifier)
7. [View Schemas](#view-schemas)
8. [Channel Mappings](#channel-mappings)
9. [Query Options](#query-options)
10. [Relationships](#relationships)
11. [Usage Examples](#usage-examples)

---

## Overview

The Modifiers domain enables customization options for menu items:

- **ModifierGroup** - Groups of related options (e.g., "Size", "Add-ons", "Sauces")
- **ModifierOption** - Individual options within a group with price adjustments
- **ItemModifierBinding** - Links modifier groups to specific menu items/variants/sets
- **AppliedModifier** - Captures selected modifiers on order items

### Key Features

- Flexible selection rules (min/max selections, required)
- Per-binding overrides for context-specific behavior
- Location-specific modifiers via `locationId`
- Version control via `modifierRevisionId`
- External platform sync via channel mappings

---

## ModifierGroup

Groups of related modifier options that can be applied to menu items.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| modifierRevisionId | string | No | null | Version control ID for tracking changes |
| locationId | string | No | null | Location-specific modifier group |
| name | string | Yes | - | Group name (e.g., "Size", "Add-ons") |
| description | string | No | null | Group description |
| options | array | Yes | - | ModifierOption array (min 1 required) |
| minSelection | integer | No | 0 | Minimum options customer must select |
| maxSelection | integer | No | null | Maximum options customer can select |
| isRequired | boolean | No | false | Whether selection is required |
| displayOrder | integer | No | 0 | Display order in menu |
| isActive | boolean | No | true | Whether group is active |
| channelMappings | array | No | null | Per-channel external group ID mappings |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

Options use `CreateModifierGroupOptionSchema` (omits `modifierGroupId`).

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | Required validation |
| options minimum 1 | "At least one modifier option is required" |
| maxSelection >= minSelection | "maxSelection must be greater than or equal to minSelection" |
| maxSelection <= options.length | "maxSelection cannot exceed the number of provided options" |

### Example

```json
{
  "name": "Pizza Size",
  "description": "Choose your pizza size",
  "minSelection": 1,
  "maxSelection": 1,
  "isRequired": true,
  "displayOrder": 1,
  "options": [
    { "name": "Small (10\")", "priceDelta": 0, "isDefault": true, "displayOrder": 1 },
    { "name": "Medium (12\")", "priceDelta": 4.00, "isDefault": false, "displayOrder": 2 },
    { "name": "Large (14\")", "priceDelta": 7.00, "isDefault": false, "displayOrder": 3 }
  ]
}
```

---

## ModifierOption

Individual options within a modifier group.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| modifierRevisionId | string | No | null | Version control ID |
| locationId | string | No | null | Location-specific option |
| modifierGroupId | string | Yes | - | Parent modifier group reference |
| name | string | Yes | - | Option name (e.g., "Extra Cheese") |
| description | string | No | null | Option description |
| priceDelta | number | No | 0 | Price adjustment when selected |
| isDefault | boolean | No | false | Whether this is pre-selected |
| displayOrder | integer | No | 0 | Display order within group |
| isActive | boolean | No | true | Whether option is active |
| channelMappings | array | No | null | Per-channel external option ID mappings |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | Required validation |

### Example

```json
{
  "modifierGroupId": "toppings_group_id",
  "name": "Extra Cheese",
  "description": "Add extra mozzarella cheese",
  "priceDelta": 2.00,
  "isDefault": false,
  "displayOrder": 1,
  "isActive": true
}
```

---

## ItemModifierBinding

Links modifier groups to menu items, variants, or menu sets with optional overrides.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| modifierRevisionId | string | No | null | Version control ID |
| locationId | string | No | null | Location-specific binding |
| menuItemId | string | Conditional | null | Target menu item (exactly one target required) |
| menuItemVariantId | string | No | null | Target variant (requires menuItemId) |
| menuSetId | string | Conditional | null | Target menu set (exactly one target required) |
| modifierGroupId | string | Yes | - | Modifier group to bind |
| isRequiredOverride | boolean | No | null | Override group's isRequired |
| minSelectionOverride | integer | No | null | Override group's minSelection |
| maxSelectionOverride | integer | No | null | Override group's maxSelection |
| excludedOptionIds | array | No | null | Option IDs to exclude from this binding |
| optionOverrides | array | No | null | Per-option overrides (ModifierOptionOverride[]) |
| displayOrder | integer | No | 0 | Display order for this binding |
| isActive | boolean | No | true | Whether binding is active |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| Exactly one of menuItemId or menuSetId | "Exactly one of menuItemId or menuSetId is required" |
| menuItemVariantId requires menuItemId | "menuItemVariantId can only be provided when menuItemId is set" |
| maxSelectionOverride >= minSelectionOverride | "maxSelectionOverride must be >= minSelectionOverride" |

### Example

```json
{
  "menuItemId": "pizza_margherita_id",
  "modifierGroupId": "extra_toppings_group_id",
  "isRequiredOverride": false,
  "minSelectionOverride": 0,
  "maxSelectionOverride": 3,
  "excludedOptionIds": ["option_anchovy_id"],
  "optionOverrides": [
    {
      "modifierOptionId": "option_cheese_id",
      "priceDeltaOverride": 1.50
    }
  ],
  "displayOrder": 1,
  "isActive": true
}
```

---

## ModifierOptionOverride

Per-option overrides within a binding for context-specific behavior.

### Schema Definition

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| modifierOptionId | string | Yes | Target modifier option ID |
| priceDeltaOverride | number | No | Override price adjustment |
| isDefaultOverride | boolean | No | Override default selection |
| displayOrderOverride | integer | No | Override display order |

### Example

```json
{
  "modifierOptionId": "option_extra_cheese_id",
  "priceDeltaOverride": 1.50,
  "isDefaultOverride": true,
  "displayOrderOverride": 1
}
```

---

## AppliedModifier

Captures a modifier selected on an order item, preserving both internal and external references.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| modifierGroupId | string | No | null | Internal modifier group ID |
| modifierOptionId | string | No | null | Internal modifier option ID |
| externalModifierGroupId | string | No | null | External platform group ID |
| externalModifierOptionId | string | No | null | External platform option ID |
| groupName | string | Yes | - | Modifier group name (preserved) |
| optionName | string | Yes | - | Modifier option name (preserved) |
| quantity | integer | No | 1 | Quantity of this modifier |
| priceDelta | number | No | 0 | Price adjustment applied |

### Example

```json
{
  "modifierGroupId": "toppings_group_id",
  "modifierOptionId": "option_extra_cheese_id",
  "groupName": "Extra Toppings",
  "optionName": "Extra Cheese",
  "quantity": 1,
  "priceDelta": 2.00
}
```

---

## View Schemas

Simplified schemas optimized for display purposes.

### ModifierOptionView

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| id | string | - | Modifier option ID |
| name | string | - | Option name |
| description | string | null | Option description |
| priceDelta | number | 0 | Price adjustment |
| isDefault | boolean | false | Whether default |
| displayOrder | integer | 0 | Display order |
| channelMappings | array | null | Channel mappings |
| isActive | boolean | true | Whether active |

### ModifierGroupView

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| id | string | - | Modifier group ID |
| name | string | - | Group name |
| description | string | null | Group description |
| displayOrder | integer | 0 | Display order |
| channelMappings | array | null | Channel mappings |
| isActive | boolean | true | Whether active |
| isRequired | boolean | false | Whether required |
| minSelection | integer | 0 | Minimum selections |
| maxSelection | integer | null | Maximum selections |
| options | array | [] | ModifierOptionView array |

---

## Channel Mappings

### Modifier Group Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "doordash") |
| externalModifierGroupId | string | Yes | Group ID in external platform |

### Modifier Option Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier |
| externalModifierOptionId | string | Yes | Option ID in external platform |
| externalModifierGroupId | string | No | Optional parent group ID |

---

## Query Options

### ModifierGroup Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search |
| locationId | string | Filter by location |
| isRequired | boolean | Filter by required status |
| isActive | boolean | Filter by active status |

**Sorting Fields:** `name`, `displayOrder`, `createdAt`

### ModifierOption Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search |
| locationId | string | Filter by location |
| modifierGroupId | string | Filter by parent group |
| isDefault | boolean | Filter by default status |
| isActive | boolean | Filter by active status |

**Sorting Fields:** `name`, `displayOrder`, `createdAt`

### ItemModifierBinding Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| locationId | string | Filter by location |
| menuItemId | string | Filter by menu item |
| menuSetId | string | Filter by menu set |
| modifierGroupId | string | Filter by modifier group |
| isActive | boolean | Filter by active status |

**Sorting Fields:** `displayOrder`, `createdAt`

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                      MODIFIER SYSTEM                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │ Modifier Group  │                                           │
│   │ (e.g., "Size")  │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N (contains)                                      │
│            ▼                                                     │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│   │ Modifier Option │  │ Modifier Option │  │ Modifier Option │ │
│   │    "Small"      │  │    "Medium"     │  │    "Large"      │ │
│   │   priceDelta: 0 │  │  priceDelta: 4  │  │  priceDelta: 7  │ │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                  │
│            ▲                                                     │
│            │ N:1 (references)                                    │
│            │                                                     │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │              Item Modifier Binding                       │   │
│   │  Links modifier group to menu item/variant/set          │   │
│   │  - Overrides: minSelection, maxSelection, isRequired    │   │
│   │  - Excludes: specific options                           │   │
│   │  - Per-option overrides: priceDelta, isDefault          │   │
│   └─────────────────────────────────────────────────────────┘   │
│            │                                                     │
│            │ N:1 (targets)                                       │
│            ▼                                                     │
│   ┌─────────────────┐  OR  ┌─────────────────┐                  │
│   │ BusinessMenuItem│      │    MenuSet      │                  │
│   │ (+ optional     │      │                 │                  │
│   │   variant)      │      │                 │                  │
│   └─────────────────┘      └─────────────────┘                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Create a Size Modifier Group

```json
{
  "name": "Size",
  "description": "Select your portion size",
  "minSelection": 1,
  "maxSelection": 1,
  "isRequired": true,
  "options": [
    { "name": "Regular", "priceDelta": 0, "isDefault": true },
    { "name": "Large", "priceDelta": 3.00, "isDefault": false }
  ]
}
```

### Create an Add-ons Modifier Group

```json
{
  "name": "Add-ons",
  "description": "Customize with extra toppings",
  "minSelection": 0,
  "maxSelection": 5,
  "isRequired": false,
  "options": [
    { "name": "Extra Cheese", "priceDelta": 2.00 },
    { "name": "Bacon", "priceDelta": 2.50 },
    { "name": "Avocado", "priceDelta": 1.50 },
    { "name": "Jalapeños", "priceDelta": 0.75 }
  ]
}
```

### Bind Modifier to Menu Item with Overrides

```json
{
  "menuItemId": "burger_classic_id",
  "modifierGroupId": "addons_group_id",
  "isRequiredOverride": false,
  "maxSelectionOverride": 3,
  "excludedOptionIds": ["option_avocado_id"],
  "optionOverrides": [
    {
      "modifierOptionId": "option_bacon_id",
      "priceDeltaOverride": 2.00,
      "isDefaultOverride": true
    }
  ],
  "displayOrder": 2
}
```

### Query Modifier Groups

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "locationId": "location_main_id",
    "isActive": true,
    "isRequired": true
  },
  "sorting": {
    "field": "displayOrder",
    "direction": "asc"
  }
}
```

---

## Best Practices

1. **Set appropriate selection limits** - Use `minSelection` and `maxSelection` to guide customer choices.

2. **Use bindings for context-specific rules** - Override group defaults at the binding level for item-specific behavior.

3. **Mark default options** - Set `isDefault: true` for recommended or popular options.

4. **Leverage exclusions** - Use `excludedOptionIds` to hide inapplicable options for specific items.

5. **Maintain version control** - Use `modifierRevisionId` for tracking changes across menu revisions.

6. **Keep display orders consistent** - Set explicit `displayOrder` values for predictable UI rendering.
