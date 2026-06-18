# Menu Items Domain

This document provides comprehensive documentation for the Menu Items domain, covering categories, menu items, and variants.

## Table of Contents

1. [Overview](#overview)
2. [MenuCategory](#menucategory)
3. [BusinessMenuItem](#businessmenuitem)
4. [MenuItemVariant](#menuitemvariant)
5. [Channel Mappings](#channel-mappings)
6. [Query Options](#query-options)
7. [Relationships](#relationships)
8. [Usage Examples](#usage-examples)

---

## Overview

The Menu Items domain provides the foundational schemas for organizing and managing restaurant menus:

- **MenuCategory** - Logical groupings for menu items (e.g., Appetizers, Main Course)
- **BusinessMenuItem** - Individual menu items with pricing and nutritional info
- **MenuItemVariant** - Size/option variations of menu items with independent pricing

---

## MenuCategory

Categories organize menu items into logical groups for navigation and display.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Category name (min 1 character) |
| description | string | No | null | Category description providing context |
| displayOrder | integer | No | null | Display order in listings (lower = first) |
| channelMappings | array | No | null | Per-channel external category ID mappings |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Category name is required" |

### Example

```json
{
  "name": "Appetizers",
  "description": "Start your meal with our delicious appetizers",
  "displayOrder": 1,
  "channelMappings": [
    { "channelId": "doordash", "externalCategoryId": "cat_123" },
    { "channelId": "uber-eats", "externalCategoryId": "ue_appetizers" }
  ]
}
```

---

## BusinessMenuItem

Represents individual menu items with complete details for ordering, display, and integration.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Item name (min 1 character) |
| description | string | No | null | Detailed item description |
| price | number | Yes | - | Base price (>= 0) |
| categoryId | string | Yes | - | Parent category reference |
| category | object | No | null | Populated MenuCategory object |
| ingredients | array | No | null | List of primary ingredients |
| allergens | array | No | null | Allergen warnings (e.g., "nuts", "dairy") |
| nutritionalInfo | object | No | null | Nutritional information |
| isAvailable | boolean | No | true | Real-time availability status |
| preparationTime | integer | No | null | Estimated prep time in minutes |
| isActive | boolean | No | true | Whether item appears in menu |
| displayOrder | integer | No | null | Display order within category |
| channelMappings | array | No | null | Per-channel external item ID mappings |
| dayParts | array | No | null | Recurring availability dayparts (breakfast, lunch, dinner) |
| orderCount | integer | No | null | Total orders for this item (all time) |
| recentOrderCount | integer | No | null | Orders in the last 30 days |
| lastOrderedAt | number | No | null | Unix timestamp of last order |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Daypart Object (MenuItemDaypart)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Daypart name (e.g., "Breakfast", "Lunch") |
| startTime | string | Yes | Start time in HH:MM format |
| endTime | string | Yes | End time in HH:MM format |
| daysOfWeek | array | No | Active days (0=Sunday, 6=Saturday) |

### Nutritional Info Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| calories | number | No | Caloric content per serving |
| protein | number | No | Protein content in grams |
| carbs | number | No | Carbohydrate content in grams |
| fat | number | No | Fat content in grams |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`, `category`, `orderCount`, `recentOrderCount`, `lastOrderedAt`

Adds: `variants` (**required**, at least one).

Note: `categoryId` becomes optional (nullable) for creation. Analytics fields are view-model-only and computed server-side.

**Required variants:** A menu item must be created with at least one variant. Each entry uses the [MenuItemVariant create schema](#menuitemvariant) with `menuItemId` omitted — the parent link is assigned by the server once the menu item is created.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| variants | array | Yes (min 1) | Variants to create with this menu item (each without `menuItemId`) |

### Create Response

On success, menu item creation returns the [MenuItemCatalog](#menuitemvariant) representation (`MenuItemCatalogSchema`) — the persisted menu item hydrated with its created `variants`, resolved `priceRange`, `isVariantSelectable`, and `modifierGroups` — rather than the raw create payload.

### Update Schema

All fields optional except `id` (required). `variants` is not enforced on update.

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Menu item name is required" |
| price >= 0 | Non-negative validation |
| preparationTime > 0 | Must be positive integer |
| variants minimum length 1 | "A menu item must have at least one variant" |

### Create Example

```json
{
  "name": "Margherita Pizza",
  "description": "Classic Italian pizza with fresh mozzarella and basil",
  "price": 12.99,
  "categoryId": "category_pizza_id",
  "isActive": true,
  "isAvailable": true,
  "variants": [
    { "name": "Small (10\")", "price": 12.99, "isDefault": true },
    { "name": "Medium (12\")", "price": 16.99 },
    { "name": "Large (14\")", "price": 19.99 }
  ]
}
```

### Example

```json
{
  "name": "Margherita Pizza",
  "description": "Classic Italian pizza with fresh mozzarella and basil",
  "price": 12.99,
  "categoryId": "category_pizza_id",
  "ingredients": ["flour", "tomatoes", "mozzarella", "basil", "olive oil"],
  "allergens": ["gluten", "dairy"],
  "nutritionalInfo": {
    "calories": 850,
    "protein": 35,
    "carbs": 95,
    "fat": 32
  },
  "isAvailable": true,
  "isActive": true,
  "preparationTime": 15,
  "displayOrder": 1,
  "channelMappings": [
    { "channelId": "doordash", "externalMenuItemId": "item_456" }
  ]
}
```

---

## MenuItemVariant

Variants represent different sizes, options, or configurations of a menu item with independent pricing.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| menuItemId | string | Yes | - | Parent menu item reference |
| name | string | Yes | - | Variant name (e.g., "Small", "Large") |
| description | string | No | null | Variant description |
| price | number | Yes | - | Variant price (>= 0) |
| isAvailable | boolean | No | true | Whether variant is available for ordering |
| isActive | boolean | No | true | Whether variant appears in menu |
| isDefault | boolean | No | false | Whether this is the default selection |
| variantChannelMappings | array | No | null | Per-channel external variant ID mappings |
| orderCount | integer | No | null | Total orders for this variant (all time) |
| recentOrderCount | integer | No | null | Orders in the last 30 days |
| lastOrderedAt | number | No | null | Unix timestamp of last order |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`, `orderCount`, `recentOrderCount`, `lastOrderedAt`

Note: Analytics fields are view-model-only and computed server-side.

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Variant name is required" |
| price >= 0 | Non-negative validation |

### Example

```json
[
  {
    "menuItemId": "pizza_margherita_id",
    "name": "Small (10\")",
    "description": "Perfect for one person",
    "price": 12.99,
    "isDefault": true,
    "isAvailable": true,
    "isActive": true
  },
  {
    "menuItemId": "pizza_margherita_id",
    "name": "Medium (12\")",
    "price": 16.99,
    "isDefault": false
  },
  {
    "menuItemId": "pizza_margherita_id",
    "name": "Large (14\")",
    "description": "Great for sharing",
    "price": 19.99,
    "isDefault": false,
    "variantChannelMappings": [
      { "channelId": "doordash", "externalVariantId": "var_large_123" }
    ]
  }
]
```

---

## Channel Mappings

Channel mappings enable synchronization with external delivery platforms.

### Category Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "doordash", "uber-eats") |
| externalCategoryId | string | Yes | Category ID in external platform |

### Menu Item Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier |
| externalMenuItemId | string | Yes | Item ID in external platform |
| externalCategoryId | string | No | Optional category ID for sync payloads |

### Variant Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier |
| externalVariantId | string | Yes | Variant ID in external platform |
| externalMenuItemId | string | No | Optional parent item ID |

---

## Query Options

### BusinessMenuItem Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description |
| locationId | string | Filter by business location |
| categoryId | string | Filter by category |
| isActive | boolean | Filter by active status |
| isAvailable | boolean | Filter by availability |
| allergens | array | Filter by allergens present |

**Sorting Fields:** `name`, `price`, `createdAt`, `displayOrder`

**Sorting Directions:** `asc`, `desc`

**Pagination:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

### MenuItemVariant Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search |
| menuItemId | string | Filter by parent menu item |
| isActive | boolean | Filter by active status |
| isAvailable | boolean | Filter by availability |
| priceRange | object | Filter by price range { min, max } |

**Sorting Fields:** `name`, `price`, `createdAt`

---

## Relationships

```
┌─────────────────┐
│  MenuCategory   │
│                 │
│  - id           │
│  - name         │
│  - displayOrder │
└────────┬────────┘
         │
         │ 1:N (categoryId)
         ▼
┌─────────────────┐
│BusinessMenuItem │
│                 │
│  - id           │
│  - categoryId   │
│  - name         │
│  - price        │
└────────┬────────┘
         │
         │ 1:N (menuItemId)
         ▼
┌─────────────────┐
│MenuItemVariant  │
│                 │
│  - id           │
│  - menuItemId   │
│  - name         │
│  - price        │
└─────────────────┘
```

---

## Usage Examples

### Query Menu Items by Category

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "categoryId": "category_appetizers_id",
    "isActive": true,
    "isAvailable": true
  },
  "sorting": {
    "field": "displayOrder",
    "direction": "asc"
  }
}
```

### Query Variants by Price Range

```json
{
  "page": 1,
  "pageSize": 50,
  "filters": {
    "menuItemId": "pizza_margherita_id",
    "isActive": true,
    "priceRange": { "min": 10.00, "max": 20.00 }
  },
  "sorting": {
    "field": "price",
    "direction": "asc"
  }
}
```

### Filter by Allergens

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "isActive": true,
    "allergens": ["gluten"]
  }
}
```

---

## Best Practices

1. **Always create at least one variant** - Even single-option items should have a variant for consistent ordering flow.

2. **Set explicit display orders** - Ensures consistent menu presentation across platforms.

3. **Maintain channel mappings** - Essential for multi-platform synchronization accuracy.

4. **Keep allergens updated** - Critical for customer safety and legal compliance.

5. **Use descriptive variant names** - Include size details (e.g., "Small (10\")" instead of just "Small").

6. **Mark one variant as default** - Ensures predictable UI behavior when displaying items.
