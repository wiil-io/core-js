# Product Variants & Axes Domain

This document provides comprehensive documentation for the Product Variants domain, covering variant axes, axis values, product variants, and axis bindings.

## Table of Contents

1. [Overview](#overview)
2. [VariantAxis](#variantaxis)
3. [VariantAxisValue](#variantaxisvalue)
4. [ProductVariant](#productvariant)
5. [ProductAxisBinding](#productaxisbinding)
6. [Channel Mappings](#channel-mappings)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Usage Examples](#usage-examples)

---

## Overview

The Product Variants domain provides an axis-driven system for managing product variations:

- **VariantAxis** - Organization-level axis definitions (e.g., Size, Color, Material)
- **VariantAxisValue** - Individual values within an axis (e.g., Small, Medium, Large)
- **ProductVariant** - SKU-level variants with axis value selections
- **ProductAxisBinding** - Links products to applicable variant axes

### Key Concepts

**Axes are organization-wide:** Axes like "Size" or "Color" are defined once and reused across products. This ensures consistency in variant options across the catalog.

**Products bind to axes:** Each product specifies which axes apply to it via `ProductAxisBinding`. A T-shirt might use "Size" and "Color", while a laptop might use "Storage" and "RAM".

**Variants combine axis values:** Each `ProductVariant` specifies a combination of axis values (e.g., `{ size: "large", color: "red" }`) and represents a unique SKU.

---

## VariantAxis

Organization-level axis definition for product variants.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Axis name (e.g., "Size", "Color", "Material") |
| type | enum | Yes | - | Axis rendering type |
| values | array | Yes | - | Available values for this axis (min 1) |
| isActive | boolean | No | true | Whether this axis is active |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Axis Type Enum (VariantAxisType)

| Value | Description | Use Case |
|-------|-------------|----------|
| swatch | Color swatch display | Color options with visual preview |
| text | Plain text display | Sizes, materials, text-based options |
| image | Image-based display | Pattern, style, or visual variations |
| numeric | Numeric value display | Storage capacity, memory size |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | Required validation |
| values minimum 1 item | "Available values for this axis" |

### Example

```json
{
  "name": "Size",
  "type": "text",
  "values": [
    { "id": "val_xs", "label": "Extra Small (XS)", "sortOrder": 1 },
    { "id": "val_s", "label": "Small (S)", "sortOrder": 2 },
    { "id": "val_m", "label": "Medium (M)", "sortOrder": 3 },
    { "id": "val_l", "label": "Large (L)", "sortOrder": 4 },
    { "id": "val_xl", "label": "Extra Large (XL)", "sortOrder": 5 }
  ],
  "isActive": true
}
```

---

## VariantAxisValue

Individual value within a variant axis.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | - | Unique axis value ID |
| label | string | Yes | - | Display label (e.g., "Small", "Red", "32GB") |
| swatchColor | string | No | null | Hex color code for swatch type (e.g., "#FF0000") |
| imageId | string | No | null | Image ID for image type |
| numericValue | number | No | null | Numeric value for numeric type |
| sortOrder | integer | No | 0 | Display order within axis |

### Example: Color Axis with Swatches

```json
{
  "name": "Color",
  "type": "swatch",
  "values": [
    { "id": "val_red", "label": "Red", "swatchColor": "#FF0000", "sortOrder": 1 },
    { "id": "val_blue", "label": "Blue", "swatchColor": "#0000FF", "sortOrder": 2 },
    { "id": "val_green", "label": "Green", "swatchColor": "#00FF00", "sortOrder": 3 },
    { "id": "val_black", "label": "Black", "swatchColor": "#000000", "sortOrder": 4 }
  ]
}
```

### Example: Storage Axis with Numeric Values

```json
{
  "name": "Storage",
  "type": "numeric",
  "values": [
    { "id": "val_128", "label": "128GB", "numericValue": 128, "sortOrder": 1 },
    { "id": "val_256", "label": "256GB", "numericValue": 256, "sortOrder": 2 },
    { "id": "val_512", "label": "512GB", "numericValue": 512, "sortOrder": 3 },
    { "id": "val_1tb", "label": "1TB", "numericValue": 1024, "sortOrder": 4 }
  ]
}
```

---

## ProductVariant

SKU-level variant with axis value selections and override-capable fields.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| productRevisionId | string | No | null | Optional product revision ID for version scoping |
| productId | string | Yes | - | Parent product ID |
| axisValues | object | Yes | - | Map of axisId to selected valueId |
| sku | string | No | null | Stock Keeping Unit identifier (overrides parent) |
| barcode | string | No | null | Product barcode (EAN-13, UPC-A, etc.) |
| partNumber | string | No | null | Manufacturer part number |
| globalTradeItemNumber | string | No | null | Global Trade Item Number (GTIN) |
| price | number | No | null | Variant price (null = inherit from parent) |
| cost | number | No | null | Variant cost |
| compareAtPrice | number | No | null | Compare-at price for sale display |
| stockQuantity | integer | No | null | Variant stock quantity |
| lowStockThreshold | integer | No | null | Variant low stock threshold |
| unitDefinitionId | string | No | null | Inventory unit definition reference |
| inventoryUnit | enum | No | null | Inventory unit for this variant |
| weight | number | No | null | Variant weight (overrides parent) |
| dimensions | object | No | null | Variant dimensions (overrides parent) |
| imageId | string | No | null | Primary variant image ID |
| imageIds | array | No | null | Variant gallery image IDs |
| channelMappings | array | No | null | Per-channel external variant ID mappings |
| isActive | boolean | No | true | Whether variant is available for sale |
| isDefault | boolean | No | false | Whether this is the default variant |
| orderCount | integer | No | null | Total orders for this variant (all time) |
| recentOrderCount | integer | No | null | Orders in the last 30 days |
| lastOrderedAt | number | No | null | Unix timestamp of last order |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Axis Values Object

The `axisValues` field is a map from axis ID to selected value ID:

```json
{
  "axisValues": {
    "axis_size": "val_large",
    "axis_color": "val_red"
  }
}
```

### Override Pattern

Variant fields can override parent product values:
- `null` value = inherit from parent product
- Explicit value = use variant-specific value

This enables:
- Per-variant pricing (e.g., larger sizes cost more)
- Per-variant inventory tracking (each SKU has its own stock)
- Per-variant shipping attributes (weight/dimensions per size)

### Inventory Unit Enum

| Value | Description |
|-------|-------------|
| EACH | Individual units |
| CASE | Case of items |
| PACK | Pack of items |
| BOX | Box of items |
| PALLET | Pallet of items |
| ... | Additional units defined in InventoryUnit enum |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`, `orderCount`, `recentOrderCount`, `lastOrderedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| productId required | Required validation |
| axisValues required | Required validation |
| price >= 0 | Non-negative when provided |
| cost >= 0 | Non-negative when provided |
| compareAtPrice >= 0 | Non-negative when provided |
| weight > 0 | Positive when provided |

### Example

```json
{
  "productId": "product_tshirt_id",
  "axisValues": {
    "axis_size": "val_large",
    "axis_color": "val_blue"
  },
  "sku": "TSHIRT-L-BLU",
  "barcode": "012345678901",
  "price": 29.99,
  "cost": 12.00,
  "compareAtPrice": 34.99,
  "stockQuantity": 45,
  "lowStockThreshold": 10,
  "weight": 0.35,
  "imageId": "img_tshirt_blue_large",
  "isActive": true,
  "isDefault": false,
  "channelMappings": [
    { "channelId": "shopify", "externalVariantId": "var_12345", "externalProductId": "prod_67890" }
  ]
}
```

---

## ProductAxisBinding

Links a product to an applicable variant axis.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| productRevisionId | string | No | null | Optional product revision ID for version scoping |
| productId | string | Yes | - | Product ID |
| axisId | string | Yes | - | Variant axis ID |
| displayOrder | integer | No | 0 | Display order for this axis on the product |
| isActive | boolean | No | true | Whether this binding is active |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Example

```json
{
  "productId": "product_tshirt_id",
  "axisId": "axis_size_id",
  "displayOrder": 1,
  "isActive": true
}
```

---

## Channel Mappings

### Product Variant Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "shopify", "amazon") |
| externalVariantId | string | Yes | Variant ID in external platform |
| externalProductId | string | No | Optional parent product ID in external platform |

### Example

```json
{
  "channelMappings": [
    {
      "channelId": "shopify",
      "externalVariantId": "gid://shopify/ProductVariant/12345",
      "externalProductId": "gid://shopify/Product/67890"
    },
    {
      "channelId": "amazon",
      "externalVariantId": "ASIN_B0001234"
    }
  ]
}
```

---

## Query Options

### VariantAxis Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name |
| type | enum | Filter by axis type |
| isActive | boolean | Filter by active status |

**Sorting Fields:** `name`, `createdAt`

### ProductVariant Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| productId | string | Filter by parent product |
| axisValueId | string | Filter by specific axis value |
| sku | string | Filter by SKU |
| isActive | boolean | Filter by active status |
| inStock | boolean | Filter by stock availability |

**Sorting Fields:** `sku`, `price`, `stockQuantity`, `createdAt`

**Pagination:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number |
| pageSize | integer | Yes | Items per page |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       VARIANT AXIS STRUCTURE                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────┐                                                        │
│   │   VariantAxis   │ (Organization-level, reusable across products)        │
│   │                 │                                                        │
│   │  - id           │                                                        │
│   │  - name: "Size" │                                                        │
│   │  - type: "text" │                                                        │
│   │  - values[]     │                                                        │
│   │    ├── XS       │                                                        │
│   │    ├── S        │                                                        │
│   │    ├── M        │                                                        │
│   │    ├── L        │                                                        │
│   │    └── XL       │                                                        │
│   └────────┬────────┘                                                        │
│            │                                                                  │
│            │ bound via                                                        │
│            ▼                                                                  │
│   ┌─────────────────┐                                                        │
│   │ProductAxisBinding│                                                        │
│   │                 │                                                        │
│   │  - productId ───────────▶ BusinessProduct                                │
│   │  - axisId ──────────────▶ VariantAxis                                    │
│   │  - displayOrder │                                                        │
│   └─────────────────┘                                                        │
│                                                                              │
│   ┌─────────────────┐                                                        │
│   │ ProductVariant  │ (SKU-level, unique axis value combination)             │
│   │                 │                                                        │
│   │  - productId ───────────▶ BusinessProduct                                │
│   │  - axisValues: {│                                                        │
│   │      axis_size: │──────────▶ VariantAxisValue (e.g., "L")                │
│   │      axis_color:│──────────▶ VariantAxisValue (e.g., "Red")              │
│   │    }            │                                                        │
│   │  - sku          │                                                        │
│   │  - price        │ (override or null to inherit)                          │
│   │  - stockQuantity│                                                        │
│   └─────────────────┘                                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Create Size Axis

```json
{
  "name": "Size",
  "type": "text",
  "values": [
    { "id": "val_s", "label": "Small", "sortOrder": 1 },
    { "id": "val_m", "label": "Medium", "sortOrder": 2 },
    { "id": "val_l", "label": "Large", "sortOrder": 3 }
  ],
  "isActive": true
}
```

### Create Color Axis with Swatches

```json
{
  "name": "Color",
  "type": "swatch",
  "values": [
    { "id": "val_black", "label": "Black", "swatchColor": "#000000", "sortOrder": 1 },
    { "id": "val_white", "label": "White", "swatchColor": "#FFFFFF", "sortOrder": 2 },
    { "id": "val_navy", "label": "Navy", "swatchColor": "#001F3F", "sortOrder": 3 }
  ],
  "isActive": true
}
```

### Bind Axes to Product

```json
[
  {
    "productId": "product_polo_shirt_id",
    "axisId": "axis_size_id",
    "displayOrder": 1,
    "isActive": true
  },
  {
    "productId": "product_polo_shirt_id",
    "axisId": "axis_color_id",
    "displayOrder": 2,
    "isActive": true
  }
]
```

### Create Variants for Size × Color Combinations

```json
[
  {
    "productId": "product_polo_shirt_id",
    "axisValues": { "axis_size": "val_s", "axis_color": "val_black" },
    "sku": "POLO-S-BLK",
    "price": 39.99,
    "stockQuantity": 25,
    "isDefault": true
  },
  {
    "productId": "product_polo_shirt_id",
    "axisValues": { "axis_size": "val_m", "axis_color": "val_black" },
    "sku": "POLO-M-BLK",
    "price": 39.99,
    "stockQuantity": 40
  },
  {
    "productId": "product_polo_shirt_id",
    "axisValues": { "axis_size": "val_l", "axis_color": "val_black" },
    "sku": "POLO-L-BLK",
    "price": 42.99,
    "stockQuantity": 30
  },
  {
    "productId": "product_polo_shirt_id",
    "axisValues": { "axis_size": "val_s", "axis_color": "val_navy" },
    "sku": "POLO-S-NAV",
    "price": 39.99,
    "stockQuantity": 20
  }
]
```

### Query Variants by Product

```json
{
  "page": 1,
  "pageSize": 50,
  "filters": {
    "productId": "product_polo_shirt_id",
    "isActive": true,
    "inStock": true
  },
  "sorting": {
    "field": "sku",
    "direction": "asc"
  }
}
```

---

## Best Practices

1. **Define axes at organization level** - Create reusable axes like "Size" and "Color" once, then bind them to applicable products.

2. **Use consistent value IDs** - Maintain stable value IDs across the organization for reliable axis-to-variant mappings.

3. **Set sortOrder for values** - Ensure logical display order (e.g., XS → S → M → L → XL).

4. **Use appropriate axis types** - Swatches for colors, text for sizes, numeric for storage/memory.

5. **Track inventory at variant level** - Each SKU (variant) should have its own `stockQuantity` for accurate fulfillment.

6. **Mark one variant as default** - Ensures predictable UI behavior when displaying products.

7. **Use override pattern wisely** - Only set variant-level values when they differ from the parent product.

8. **Include SKU for every variant** - Essential for inventory tracking and order fulfillment.

9. **Maintain channel mappings** - Keep external platform IDs updated for accurate multi-channel synchronization.
