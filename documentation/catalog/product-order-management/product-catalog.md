# Product Catalog Domain

This document provides comprehensive documentation for the Product Catalog domain, covering read-optimized display schemas for rendering complete product catalogs.

## Table of Contents

1. [Overview](#overview)
2. [ProductVariantDisplay](#productvariantdisplay)
3. [ProductDisplay](#productdisplay)
4. [ProductCatalogDisplay](#productcatalogdisplay)
5. [BusinessProductCatalogDisplay](#businessproductcatalogdisplay)
6. [Relationships](#relationships)
7. [Usage Examples](#usage-examples)

---

## Overview

The Product Catalog domain provides read-optimized, denormalized display schemas for rendering complete product catalogs to customers. These schemas aggregate data from multiple sources into a single, efficient structure.

### Key Features

- **Denormalized structure** - All related data in one response
- **Pre-computed price ranges** - Min/max across variants
- **Stock status resolution** - Real-time availability status
- **Category-organized products** - Logical grouping for display

---

## ProductVariantDisplay

Extended variant schema with resolved stock status for display.

### Schema Definition

Inherits all fields from `ProductVariant` plus:

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| stockStatus | enum | Yes | - | Current stock status for this variant |

### Stock Status Enum

| Value | Description |
|-------|-------------|
| in_stock | Variant is available for purchase |
| low_stock | Variant is at or below low stock threshold |
| out_of_stock | Variant has zero stock quantity |

### Stock Status Resolution Logic

```javascript
// Pseudo-code for stockStatus computation
if (!trackInventory) {
  stockStatus = "in_stock"; // Unlimited inventory
} else if (stockQuantity <= 0) {
  stockStatus = "out_of_stock";
} else if (stockQuantity <= lowStockThreshold) {
  stockStatus = "low_stock";
} else {
  stockStatus = "in_stock";
}
```

### Example

```json
{
  "id": "variant_polo_l_blue",
  "productId": "product_polo_id",
  "axisValues": {
    "axis_size": "val_large",
    "axis_color": "val_blue"
  },
  "sku": "POLO-L-BLU",
  "price": 42.99,
  "stockQuantity": 15,
  "lowStockThreshold": 10,
  "isActive": true,
  "isDefault": false,
  "stockStatus": "low_stock"
}
```

---

## ProductDisplay

Extended product schema with variants and computed price range.

### Schema Definition

Inherits all fields from `BusinessProduct` plus:

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| variants | array | Yes | - | ProductVariantDisplay array (min 1 required) |
| priceRange | object | No | null | Resolved min/max price across variants |
| isVariantSelectable | boolean | No | true | Whether this product requires/uses variant selection |

### Price Range Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| min | number | Yes | Minimum price across all active variants |
| max | number | Yes | Maximum price across all active variants |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| variants minimum 1 | "Every product must have at least one variant" |

### Example

```json
{
  "id": "product_polo_id",
  "name": "Classic Polo Shirt",
  "description": "Premium cotton polo shirt with embroidered logo",
  "price": 39.99,
  "categoryId": "category_mens_id",
  "brand": "StyleCo",
  "trackInventory": true,
  "isActive": true,
  "variants": [
    {
      "id": "variant_polo_s_black",
      "axisValues": { "axis_size": "val_s", "axis_color": "val_black" },
      "sku": "POLO-S-BLK",
      "price": 39.99,
      "stockQuantity": 25,
      "stockStatus": "in_stock",
      "isDefault": true
    },
    {
      "id": "variant_polo_m_black",
      "axisValues": { "axis_size": "val_m", "axis_color": "val_black" },
      "sku": "POLO-M-BLK",
      "price": 39.99,
      "stockQuantity": 40,
      "stockStatus": "in_stock"
    },
    {
      "id": "variant_polo_l_black",
      "axisValues": { "axis_size": "val_l", "axis_color": "val_black" },
      "sku": "POLO-L-BLK",
      "price": 42.99,
      "stockQuantity": 30,
      "stockStatus": "in_stock"
    }
  ],
  "priceRange": {
    "min": 39.99,
    "max": 42.99
  },
  "isVariantSelectable": true
}
```

---

## ProductCatalogDisplay

Represents a category with its complete list of products for catalog display.

### Schema Definition

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| productCategory | object | Yes | The ProductCategory object |
| items | array | Yes | Array of ProductDisplay objects |

### Example

```json
{
  "productCategory": {
    "id": "category_mens_id",
    "name": "Men's Clothing",
    "description": "Premium men's apparel",
    "displayOrder": 1
  },
  "items": [
    {
      "id": "product_polo_id",
      "name": "Classic Polo Shirt",
      "price": 39.99,
      "variants": [...],
      "priceRange": { "min": 39.99, "max": 42.99 }
    },
    {
      "id": "product_jeans_id",
      "name": "Slim Fit Jeans",
      "price": 59.99,
      "variants": [...],
      "priceRange": { "min": 59.99, "max": 64.99 }
    }
  ]
}
```

---

## BusinessProductCatalogDisplay

Full business product catalog - an array of ProductCatalogDisplay objects representing the complete catalog.

### Schema Definition

Array of `ProductCatalogDisplay` objects.

### Structure

```
BusinessProductCatalogDisplay (array)
├── ProductCatalogDisplay (Men's Clothing)
│   ├── productCategory: ProductCategory
│   └── items: ProductDisplay[]
│       ├── ProductDisplay (Polo Shirt)
│       │   ├── variants: [S-Black, M-Black, L-Black, ...]
│       │   └── priceRange: { min: 39.99, max: 42.99 }
│       └── ProductDisplay (Jeans)
│           ├── variants: [30x30, 32x30, 34x32, ...]
│           └── priceRange: { min: 59.99, max: 64.99 }
│
├── ProductCatalogDisplay (Women's Clothing)
│   ├── productCategory: ProductCategory
│   └── items: ProductDisplay[]
│       └── ...
│
├── ProductCatalogDisplay (Electronics)
│   ├── productCategory: ProductCategory
│   └── items: ProductDisplay[]
│       └── ...
│
└── ProductCatalogDisplay (Accessories)
    ├── productCategory: ProductCategory
    └── items: ProductDisplay[]
        └── ...
```

### Example

```json
[
  {
    "productCategory": {
      "id": "category_mens_id",
      "name": "Men's Clothing",
      "displayOrder": 1
    },
    "items": [...]
  },
  {
    "productCategory": {
      "id": "category_womens_id",
      "name": "Women's Clothing",
      "displayOrder": 2
    },
    "items": [...]
  },
  {
    "productCategory": {
      "id": "category_electronics_id",
      "name": "Electronics",
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
│                  PRODUCT CATALOG STRUCTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   BusinessProductCatalogDisplay (array)                         │
│   │                                                              │
│   ├── ProductCatalogDisplay                                     │
│   │   ├── productCategory: ProductCategory                      │
│   │   │   ├── id, name, description                             │
│   │   │   └── displayOrder                                      │
│   │   │                                                          │
│   │   └── items: ProductDisplay[]                               │
│   │       ├── (BusinessProduct fields)                          │
│   │       │   ├── id, name, description, price                  │
│   │       │   ├── sku, barcode, brand                           │
│   │       │   ├── trackInventory, stockQuantity                 │
│   │       │   └── isActive, weight, dimensions                  │
│   │       │                                                      │
│   │       ├── variants: ProductVariantDisplay[]                 │
│   │       │   ├── (ProductVariant fields)                       │
│   │       │   │   └── axisValues, sku, price, stockQuantity     │
│   │       │   └── stockStatus: in_stock | low_stock | out_of_stock│
│   │       │                                                      │
│   │       ├── priceRange: { min, max }                          │
│   │       │                                                      │
│   │       └── isVariantSelectable: boolean                      │
│   │                                                              │
│   ├── ProductCatalogDisplay (another category)                  │
│   │   └── ...                                                    │
│   │                                                              │
│   └── ProductCatalogDisplay (another category)                  │
│       └── ...                                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Rendering a Product Category

```json
{
  "productCategory": {
    "id": "cat_electronics",
    "name": "Electronics",
    "displayOrder": 1
  },
  "items": [
    {
      "id": "prod_headphones",
      "name": "Wireless Headphones",
      "description": "Premium noise-cancelling headphones",
      "price": 149.99,
      "brand": "AudioTech",
      "isActive": true,
      "trackInventory": true,
      "variants": [
        {
          "id": "var_black",
          "axisValues": { "axis_color": "val_black" },
          "sku": "WH-BLK",
          "price": 149.99,
          "stockQuantity": 50,
          "stockStatus": "in_stock",
          "isDefault": true
        },
        {
          "id": "var_white",
          "axisValues": { "axis_color": "val_white" },
          "sku": "WH-WHT",
          "price": 149.99,
          "stockQuantity": 8,
          "stockStatus": "low_stock"
        }
      ],
      "priceRange": { "min": 149.99, "max": 149.99 },
      "isVariantSelectable": true
    }
  ]
}
```

### Price Display Logic

When displaying prices in the UI:

1. If `priceRange.min === priceRange.max`: Display single price
2. If `priceRange.min !== priceRange.max`: Display range (e.g., "$39.99 - $42.99")
3. If `isVariantSelectable === false`: Use base `price` field

### Stock Display Logic

```javascript
// Display stock status indicators
const getStockIndicator = (variant) => {
  switch (variant.stockStatus) {
    case "in_stock":
      return { text: "In Stock", color: "green" };
    case "low_stock":
      return { text: "Low Stock", color: "orange" };
    case "out_of_stock":
      return { text: "Out of Stock", color: "red" };
  }
};
```

### Filtering Available Products

```javascript
// Filter to only show products with available variants
const availableProducts = catalog.items.filter(product =>
  product.isActive &&
  product.variants.some(v =>
    v.isActive && v.stockStatus !== "out_of_stock"
  )
);
```

---

## Best Practices

1. **Pre-compute price ranges** - Calculate `priceRange` from active, available variants only.

2. **Resolve stock status server-side** - Compute `stockStatus` based on current inventory levels.

3. **Sort by displayOrder** - Ensure categories and products are sorted by `displayOrder` ascending.

4. **Filter inactive items** - Only include products and variants where `isActive === true`.

5. **Validate variant availability** - Products should have at least one available variant to be displayed.

6. **Cache catalog data** - The denormalized structure is ideal for caching to improve performance.

7. **Consider low_stock visibility** - Show "Low Stock" indicators to create urgency and manage expectations.

8. **Handle out_of_stock gracefully** - Either hide or disable unavailable variants in the UI.
