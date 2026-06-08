# Product Sets Domain

This document provides comprehensive documentation for the Product Sets domain, covering bundled products, pricing modes, and targeting strategies.

## Table of Contents

1. [Overview](#overview)
2. [ProductSet](#productset)
3. [ProductSetItem](#productsetitem)
4. [ProductSetSelector](#productsetselector)
5. [Display Schemas](#display-schemas)
6. [Channel Mappings](#channel-mappings)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Usage Examples](#usage-examples)

---

## Overview

The Product Sets domain enables bundling products into packages with flexible pricing and targeting:

- **Product kits** - Fixed-price bundles of specific products
- **Gift sets** - Curated product collections
- **Dynamic bundles** - Selector-based product matching

### Key Features

- **Dual targeting modes** - Explicit products or selector-based matching
- **Flexible pricing** - Fixed price or sum of component products
- **Variant-level specificity** - Bundle specific variants
- **Location-specific sets** - Via `locationId`
- **Version control** - Via `productRevisionId`

---

## ProductSet

Represents a bundle or set of products with configurable pricing and targeting.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| productRevisionId | string | No | null | Version control for product changes |
| code | string | No | null | Stable internal code for integration matching |
| name | string | Yes | - | Product set name (min 1 character) |
| description | string | No | null | Product set description |
| channelMappings | array | No | null | Per-channel external set ID mappings |
| targetingMode | enum | No | "EXPLICIT" | How set selects members (EXPLICIT or SELECTOR) |
| pricingMode | enum | No | "SUM_OF_ITEMS" | How pricing is calculated |
| fixedPrice | number | No | null | Set price when pricingMode is FIXED |
| items | array | No | null | Explicit product members (for EXPLICIT targeting) |
| selector | object | No | null | Selector definition (for SELECTOR targeting) |
| isActive | boolean | No | true | Whether product set is active |
| imageUrl | string | No | null | Public image URL for the set |
| imageUrls | array | No | null | Multiple image URLs |
| displayOrder | integer | No | null | Display order in catalog |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Enums

**ProductSetPricingMode:**

| Value | Description |
|-------|-------------|
| FIXED | Set has a fixed price regardless of component prices |
| SUM_OF_ITEMS | Set price is sum of included product prices |

**ProductSetTargetingMode:**

| Value | Description |
|-------|-------------|
| EXPLICIT | Set includes explicitly listed products |
| SELECTOR | Set includes products matching selector criteria |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Product set name is required" |
| fixedPrice required when pricingMode is FIXED | "fixedPrice is required when pricingMode is FIXED" |
| fixedPrice null when pricingMode is SUM_OF_ITEMS | "fixedPrice must be null or omitted when pricingMode is SUM_OF_ITEMS" |
| items required when targetingMode is EXPLICIT | "items is required when targetingMode is EXPLICIT" |
| selector null when targetingMode is EXPLICIT | "selector must be null or omitted when targetingMode is EXPLICIT" |
| selector required when targetingMode is SELECTOR | "selector is required when targetingMode is SELECTOR" |
| items empty when targetingMode is SELECTOR | "items must be empty when targetingMode is SELECTOR" |
| No duplicate productId + productVariantId combinations | "Duplicate productId + productVariantId combination is not allowed in a product set" |

### Example

```json
{
  "name": "Home Office Starter Kit",
  "description": "Everything you need to set up your home office",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 299.99,
  "items": [
    { "productId": "desk_lamp_id", "productVariantId": "variant_black_id", "quantity": 1, "isRequired": true },
    { "productId": "keyboard_id", "productVariantId": "variant_wireless_id", "quantity": 1, "isRequired": true },
    { "productId": "mouse_id", "productVariantId": "variant_ergonomic_id", "quantity": 1, "isRequired": true },
    { "productId": "mousepad_id", "productVariantId": "variant_xl_id", "quantity": 1, "isRequired": false }
  ],
  "isActive": true,
  "displayOrder": 1,
  "imageUrl": "https://example.com/images/home-office-kit.jpg"
}
```

---

## ProductSetItem

Represents a product included in a product set with quantity and requirement specifications.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| productId | string | Yes | - | Product ID included in set |
| productVariantId | string | No | null | Specific variant ID included (if applicable) |
| quantity | integer | Yes | - | Quantity of this product (positive) |
| isRequired | boolean | No | true | Whether product is required in set |
| displayOrder | integer | No | null | Display order inside the set |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| quantity > 0 | Must be positive integer |

### Example

```json
{
  "productId": "wireless_keyboard_id",
  "productVariantId": "variant_black_id",
  "quantity": 1,
  "isRequired": true,
  "displayOrder": 1
}
```

---

## ProductSetSelector

Defines criteria for dynamically selecting products to include in a set.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| productIdsAny | array | No | [] | Any matching catalog product IDs (max 5000) |
| productIdsAll | array | No | [] | All required catalog product IDs (max 5000) |
| allProducts | boolean | No | false | Include all catalog products |
| quantityExact | integer | No | null | Require exact matched quantity |
| quantityMin | integer | No | null | Require minimum matched quantity |
| quantityMax | integer | No | null | Cap maximum matched quantity |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| Exactly one selector mode active | "Exactly one of productIdsAny, productIdsAll, or allProducts must be set" |
| quantityExact cannot combine with min/max | "quantityExact cannot be combined with quantityMin or quantityMax" |
| quantityMax >= quantityMin | "quantityMax must be greater than or equal to quantityMin" |

### Selector Modes

| Mode | Description |
|------|-------------|
| productIdsAny | Cart must contain at least one product from the list |
| productIdsAll | Cart must contain all products from the list |
| allProducts | Applies to any products |

### Example: Any of Specific Products

```json
{
  "productIdsAny": ["headphones_id", "earbuds_id", "speakers_id"],
  "quantityMin": 2
}
```

### Example: All Required Products

```json
{
  "productIdsAll": ["laptop_id", "laptop_bag_id", "charger_id"],
  "quantityExact": 1
}
```

---

## Display Schemas

### ProductSetItemDisplay

Extended item schema with resolved product data.

| Field | Type | Description |
|-------|------|-------------|
| (all ProductSetItem fields) | - | Inherited from ProductSetItem |
| product | object | Resolved BusinessProduct snapshot (optional) |

### ProductSetDisplay

Extended set schema with resolved items and computed pricing.

| Field | Type | Description |
|-------|------|-------------|
| (all ProductSet fields except items) | - | Inherited from ProductSet |
| items | array | ProductSetItemDisplay array with resolved data |
| resolvedPrice | number | Computed display price for the set (nullable) |

### Resolved Price Calculation

For `SUM_OF_ITEMS` pricing mode:
```javascript
resolvedPrice = items.reduce((sum, item) => {
  const price = item.product?.price ?? 0;
  return sum + (price * item.quantity);
}, 0);
```

For `FIXED` pricing mode:
```javascript
resolvedPrice = fixedPrice;
```

---

## Channel Mappings

### Product Set Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "shopify", "amazon") |
| externalProductSetId | string | Yes | Set ID in external platform |

### Example

```json
{
  "channelMappings": [
    { "channelId": "shopify", "externalProductSetId": "bundle_12345" },
    { "channelId": "amazon", "externalProductSetId": "kit_B00ABC123" }
  ]
}
```

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description |
| productRevisionId | string | Filter by product revision |
| locationId | string | Filter by location |
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
│                     PRODUCT SET STRUCTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │   ProductSet    │                                           │
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
│     │    │ProductSetSelector│                                    │
│     │    │                 │                                    │
│     │    │ - productIdsAny │                                    │
│     │    │ - productIdsAll │                                    │
│     │    │ - allProducts   │                                    │
│     │    │ - quantity rules│                                    │
│     │    └─────────────────┘                                    │
│     │                                                            │
│     ▼                                                            │
│ ┌─────────────────┐                                             │
│ │ ProductSetItem[]│                                             │
│ │                 │                                             │
│ │ - productId ────────────▶ BusinessProduct                     │
│ │ - productVariantId ─────▶ ProductVariant                      │
│ │ - quantity      │                                             │
│ │ - isRequired    │                                             │
│ └─────────────────┘                                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Fixed-Price Gift Set

```json
{
  "name": "Premium Skincare Gift Set",
  "description": "Complete skincare routine in a beautiful gift box",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 89.99,
  "items": [
    { "productId": "cleanser_id", "productVariantId": "variant_30ml_id", "quantity": 1, "isRequired": true, "displayOrder": 1 },
    { "productId": "toner_id", "productVariantId": "variant_50ml_id", "quantity": 1, "isRequired": true, "displayOrder": 2 },
    { "productId": "moisturizer_id", "productVariantId": "variant_30ml_id", "quantity": 1, "isRequired": true, "displayOrder": 3 },
    { "productId": "eye_cream_id", "productVariantId": "variant_15ml_id", "quantity": 1, "isRequired": true, "displayOrder": 4 }
  ],
  "isActive": true,
  "imageUrl": "https://example.com/images/skincare-gift-set.jpg"
}
```

### Sum-of-Items Build-Your-Own Bundle

```json
{
  "name": "Build Your Own Audio Bundle",
  "description": "Pick any 3 audio accessories",
  "targetingMode": "SELECTOR",
  "pricingMode": "SUM_OF_ITEMS",
  "selector": {
    "productIdsAny": ["headphones_id", "earbuds_id", "speaker_id", "soundbar_id", "microphone_id"],
    "quantityExact": 3
  },
  "isActive": true
}
```

### Tech Starter Kit with Optional Items

```json
{
  "name": "Tech Starter Kit",
  "description": "Essential tech accessories with optional upgrades",
  "targetingMode": "EXPLICIT",
  "pricingMode": "FIXED",
  "fixedPrice": 199.99,
  "items": [
    { "productId": "usb_hub_id", "productVariantId": "variant_7port_id", "quantity": 1, "isRequired": true, "displayOrder": 1 },
    { "productId": "usb_cable_id", "productVariantId": "variant_6ft_id", "quantity": 3, "isRequired": true, "displayOrder": 2 },
    { "productId": "webcam_id", "productVariantId": "variant_1080p_id", "quantity": 1, "isRequired": true, "displayOrder": 3 },
    { "productId": "ring_light_id", "productVariantId": "variant_10inch_id", "quantity": 1, "isRequired": false, "displayOrder": 4 },
    { "productId": "greenscreen_id", "productVariantId": "variant_portable_id", "quantity": 1, "isRequired": false, "displayOrder": 5 }
  ],
  "isActive": true
}
```

### Subscription Box

```json
{
  "name": "Monthly Snack Box",
  "description": "Curated selection of premium snacks delivered monthly",
  "targetingMode": "SELECTOR",
  "pricingMode": "FIXED",
  "fixedPrice": 29.99,
  "selector": {
    "productIdsAny": ["snack_chips_id", "snack_nuts_id", "snack_dried_fruit_id", "snack_chocolate_id", "snack_popcorn_id"],
    "quantityMin": 5,
    "quantityMax": 8
  },
  "isActive": true
}
```

---

## Best Practices

1. **Use FIXED pricing for gift sets** - Provides clear value proposition and simplifies purchasing decisions.

2. **Set display orders for items** - Ensures consistent presentation of bundle contents.

3. **Validate variant availability** - Ensure all referenced variants exist and have stock before showing sets.

4. **Use codes for integrations** - The `code` field provides stable identifiers for external system matching.

5. **Avoid duplicate product/variant combinations** - Each product/variant pair should appear only once in a set.

6. **Consider required vs optional items** - Use `isRequired: false` for customizable bundles with optional upgrades.

7. **Include appealing images** - Product sets benefit from lifestyle images showing the complete bundle.

8. **Calculate savings for marketing** - Compare `fixedPrice` to sum of individual prices to show bundle savings.

9. **Keep selector rules simple** - Complex quantity rules can confuse customers and complicate fulfillment.
