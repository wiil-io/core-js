# Menu Catalog Domain

This document provides comprehensive documentation for the Menu Catalog domain, covering read-optimized view schemas for rendering complete menus.

## Table of Contents

1. [Overview](#overview)
2. [MenuItemCatalog](#menuitemcatalog)
3. [MenuCatalog](#menucatalog)
4. [BusinessMenuCatalog](#businessmenucatalog)
5. [Relationships](#relationships)
6. [Usage Examples](#usage-examples)

---

## Overview

The Menu Catalog domain provides read-optimized, denormalized views for rendering complete menus to customers. These schemas aggregate data from multiple sources into a single, efficient structure.

### Key Features

- **Denormalized structure** - All related data in one response
- **Pre-computed price ranges** - Min/max across variants
- **Hydrated modifier groups** - Merged with binding overrides
- **Category-organized items** - Logical grouping for display

---

## MenuItemCatalog

Extended menu item schema with variants and modifier groups for catalog display.

### Schema Definition

Inherits all fields from `BusinessMenuItem` plus:

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| variants | array | Yes | - | MenuItemVariant array (min 1 required) |
| priceRange | object | No | null | Resolved min/max price across variants |
| isVariantSelectable | boolean | No | true | Whether variant selection is used |
| modifierGroups | array | No | [] | Hydrated ModifierGroupView array with merged binding overrides |

### Price Range Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| min | number | Yes | Minimum price across all variants |
| max | number | Yes | Maximum price across all variants |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| variants minimum 1 | "Every menu item must have at least one variant" |

### Example

```json
{
  "id": "pizza_margherita_id",
  "name": "Margherita Pizza",
  "description": "Classic Italian pizza with fresh mozzarella and basil",
  "price": 12.99,
  "categoryId": "category_pizza_id",
  "ingredients": ["flour", "tomatoes", "mozzarella", "basil"],
  "allergens": ["gluten", "dairy"],
  "isAvailable": true,
  "isActive": true,
  "displayOrder": 1,
  "variants": [
    {
      "id": "variant_small_id",
      "menuItemId": "pizza_margherita_id",
      "name": "Small (10\")",
      "price": 12.99,
      "isDefault": true,
      "isAvailable": true,
      "isActive": true
    },
    {
      "id": "variant_medium_id",
      "menuItemId": "pizza_margherita_id",
      "name": "Medium (12\")",
      "price": 16.99,
      "isDefault": false,
      "isAvailable": true,
      "isActive": true
    },
    {
      "id": "variant_large_id",
      "menuItemId": "pizza_margherita_id",
      "name": "Large (14\")",
      "price": 19.99,
      "isDefault": false,
      "isAvailable": true,
      "isActive": true
    }
  ],
  "priceRange": {
    "min": 12.99,
    "max": 19.99
  },
  "isVariantSelectable": true,
  "modifierGroups": [
    {
      "id": "toppings_group_id",
      "name": "Extra Toppings",
      "description": "Add extra toppings",
      "isRequired": false,
      "minSelection": 0,
      "maxSelection": 5,
      "displayOrder": 1,
      "isActive": true,
      "options": [
        {
          "id": "option_cheese_id",
          "name": "Extra Cheese",
          "priceDelta": 2.00,
          "isDefault": false,
          "displayOrder": 1
        },
        {
          "id": "option_pepperoni_id",
          "name": "Pepperoni",
          "priceDelta": 2.50,
          "isDefault": false,
          "displayOrder": 2
        }
      ]
    }
  ]
}
```

---

## MenuCatalog

Represents a category with its complete list of menu items for catalog display.

### Schema Definition

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| category | object | Yes | The MenuCategory object |
| items | array | Yes | Array of MenuItemCatalog objects |

### Example

```json
{
  "category": {
    "id": "category_pizza_id",
    "name": "Pizzas",
    "description": "Our handcrafted pizzas",
    "displayOrder": 2
  },
  "items": [
    {
      "id": "pizza_margherita_id",
      "name": "Margherita Pizza",
      "price": 12.99,
      "variants": [...],
      "priceRange": { "min": 12.99, "max": 19.99 },
      "modifierGroups": [...]
    },
    {
      "id": "pizza_pepperoni_id",
      "name": "Pepperoni Pizza",
      "price": 14.99,
      "variants": [...],
      "priceRange": { "min": 14.99, "max": 21.99 },
      "modifierGroups": [...]
    }
  ]
}
```

---

## BusinessMenuCatalog

Full business menu catalog - an array of MenuCatalog objects representing the complete menu.

### Schema Definition

Array of `MenuCatalog` objects.

### Structure

```
BusinessMenuCatalog (array)
├── MenuCatalog (Appetizers)
│   ├── category: MenuCategory
│   └── items: MenuItemCatalog[]
│       ├── MenuItemCatalog (Spring Rolls)
│       │   ├── variants: [Small, Large]
│       │   ├── priceRange: { min: 5.99, max: 8.99 }
│       │   └── modifierGroups: [Sauces]
│       └── MenuItemCatalog (Soup of the Day)
│           ├── variants: [Cup, Bowl]
│           └── modifierGroups: []
│
├── MenuCatalog (Main Course)
│   ├── category: MenuCategory
│   └── items: MenuItemCatalog[]
│       ├── MenuItemCatalog (Grilled Salmon)
│       └── MenuItemCatalog (Ribeye Steak)
│
├── MenuCatalog (Pizzas)
│   ├── category: MenuCategory
│   └── items: MenuItemCatalog[]
│       └── ...
│
└── MenuCatalog (Desserts)
    ├── category: MenuCategory
    └── items: MenuItemCatalog[]
        └── ...
```

### Example

```json
[
  {
    "category": {
      "id": "category_appetizers_id",
      "name": "Appetizers",
      "displayOrder": 1
    },
    "items": [...]
  },
  {
    "category": {
      "id": "category_pizza_id",
      "name": "Pizzas",
      "displayOrder": 2
    },
    "items": [...]
  },
  {
    "category": {
      "id": "category_desserts_id",
      "name": "Desserts",
      "displayOrder": 3
    },
    "items": [...]
  }
]
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                    MENU CATALOG STRUCTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   BusinessMenuCatalog (array)                                   │
│   │                                                              │
│   ├── MenuCatalog                                               │
│   │   ├── category: MenuCategory                                │
│   │   │   ├── id, name, description                             │
│   │   │   └── displayOrder, channelMappings                     │
│   │   │                                                          │
│   │   └── items: MenuItemCatalog[]                              │
│   │       ├── (BusinessMenuItem fields)                         │
│   │       │   ├── id, name, description, price                  │
│   │       │   ├── ingredients, allergens, nutritionalInfo       │
│   │       │   └── isAvailable, isActive, displayOrder           │
│   │       │                                                      │
│   │       ├── variants: MenuItemVariant[]                       │
│   │       │   └── id, name, price, isDefault                    │
│   │       │                                                      │
│   │       ├── priceRange: { min, max }                          │
│   │       │                                                      │
│   │       └── modifierGroups: ModifierGroupView[]               │
│   │           ├── id, name, isRequired                          │
│   │           ├── minSelection, maxSelection                    │
│   │           └── options: ModifierOptionView[]                 │
│   │                                                              │
│   ├── MenuCatalog (another category)                            │
│   │   └── ...                                                    │
│   │                                                              │
│   └── MenuCatalog (another category)                            │
│       └── ...                                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Rendering a Menu Category

```json
{
  "category": {
    "id": "cat_main",
    "name": "Main Dishes",
    "displayOrder": 2
  },
  "items": [
    {
      "id": "item_1",
      "name": "Grilled Chicken",
      "description": "Herb-marinated chicken breast",
      "price": 18.99,
      "isAvailable": true,
      "variants": [
        { "id": "v1", "name": "Half Portion", "price": 12.99, "isDefault": false },
        { "id": "v2", "name": "Full Portion", "price": 18.99, "isDefault": true }
      ],
      "priceRange": { "min": 12.99, "max": 18.99 },
      "modifierGroups": [
        {
          "id": "sides",
          "name": "Choose Side",
          "isRequired": true,
          "minSelection": 1,
          "maxSelection": 1,
          "options": [
            { "id": "s1", "name": "French Fries", "priceDelta": 0 },
            { "id": "s2", "name": "Garden Salad", "priceDelta": 0 },
            { "id": "s3", "name": "Mashed Potatoes", "priceDelta": 0 }
          ]
        }
      ]
    }
  ]
}
```

### Price Display Logic

When displaying prices in the UI:

1. If `priceRange.min === priceRange.max`: Display single price
2. If `priceRange.min !== priceRange.max`: Display range (e.g., "$12.99 - $19.99")
3. If `isVariantSelectable === false`: Use base `price` field

### Filtering Available Items

```javascript
// Filter to only show available items with available variants
const availableItems = catalog.items.filter(item =>
  item.isAvailable &&
  item.isActive &&
  item.variants.some(v => v.isAvailable && v.isActive)
);
```

---

## Best Practices

1. **Pre-compute price ranges** - Calculate `priceRange` from active, available variants.

2. **Merge binding overrides** - Apply `ItemModifierBinding` overrides to modifier groups before populating `modifierGroups`.

3. **Sort by displayOrder** - Ensure categories and items are sorted by `displayOrder` ascending.

4. **Filter inactive items** - Only include items and variants where `isActive === true`.

5. **Validate variant availability** - Items should have at least one available variant to be displayed.

6. **Cache catalog data** - The denormalized structure is ideal for caching to improve performance.
