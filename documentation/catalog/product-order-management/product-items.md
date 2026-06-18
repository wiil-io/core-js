# Product Items Domain

This document provides comprehensive documentation for the Product Items domain, covering categories, products, attribute definitions, and channel mappings.

## Table of Contents

1. [Overview](#overview)
2. [Enums](#enums)
3. [AttributeDef](#attributedef)
4. [ProductCategory](#productcategory)
5. [BusinessProduct](#businessproduct)
6. [Channel Mappings](#channel-mappings)
7. [Catalog Schemas](#catalog-schemas)
8. [Query Options](#query-options)
9. [Relationships](#relationships)
10. [Usage Examples](#usage-examples)

---

## Overview

The Product Items domain provides the foundational schemas for organizing and managing retail products:

- **AttributeDef** - Organization-level attribute definitions for custom product specifications
- **ProductCategory** - Hierarchical groupings with attribute bindings and channel mappings
- **BusinessProduct** - Individual products with full pricing, inventory, shipping, and tax configuration
- **Channel Mappings** - External platform synchronization for multi-channel commerce

### Key Features

- Nested category hierarchy with parent-child relationships
- Custom attribute system with type validation
- Multi-channel synchronization for Shopify, Amazon, etc.
- Advanced inventory management with reorder points and supplier tracking
- Tax and shipping class integration
- Product tagging and search optimization

---

## Enums

### AttributeDefType

Determines the data type of attribute values.

| Value | Description |
|-------|-------------|
| string | Text value |
| number | Numeric value |
| boolean | True/false value |
| enum | Constrained to allowed values |
| date | Date value |
| url | URL value |

### CategoryLocationScope

Determines whether category is inherited or local.

| Value | Description |
|-------|-------------|
| inherited | Category is inherited from parent organization |
| local | Category is local to specific location |

### BarcodeFormat

Supported barcode formats for product identifiers.

| Value | Description |
|-------|-------------|
| UPC_A | 12-digit Universal Product Code |
| UPC_E | 8-digit compressed UPC |
| EAN_13 | 13-digit European Article Number |
| EAN_8 | 8-digit EAN |
| CODE_128 | High-density alphanumeric barcode |
| CODE_39 | Alphanumeric barcode |
| ITF_14 | Interleaved 2 of 5 for shipping |
| QR | Quick Response 2D code |

---

## AttributeDef

Organization-level attribute definitions for products. Categories bind to these definitions, and products store values.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| name | string | Yes | - | Attribute name (e.g., "Voltage", "Warranty Months") |
| slug | string | Yes | - | URL-friendly slug for filtering and API queries |
| type | enum | Yes | - | Attribute value type (AttributeDefType) |
| unit | string | No | null | Unit of measurement (e.g., "V", "kg", "cm") |
| enumValues | array | No | null | Allowed values for enum type |
| isActive | boolean | No | true | Whether attribute definition is active |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### CategoryAttributeBinding

Links categories to attribute definitions.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| attributeDefId | string | Yes | - | Reference to AttributeDef.id |
| required | boolean | No | false | Whether attribute is required for products |
| displayOrder | integer | No | 0 | Display order in category |

### ProductAttributeValue

Stores actual attribute values for products.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| attributeDefId | string | Yes | Reference to AttributeDef.id |
| value | string/number/boolean | Yes | Attribute value (type must match AttributeDef.type) |

### Example

```json
{
  "name": "Voltage",
  "slug": "voltage",
  "type": "number",
  "unit": "V",
  "isActive": true
}
```

```json
{
  "name": "Material",
  "slug": "material",
  "type": "enum",
  "enumValues": ["Cotton", "Polyester", "Silk", "Wool"],
  "isActive": true
}
```

---

## ProductCategory

Categories organize products into a hierarchical structure with support for attribute bindings, channel mappings, and business rules.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| productRevisionId | string | No | null | Version control for category changes |
| parentId | string | No | null | Parent category ID for nested hierarchy |
| name | string | Yes | - | Category name (min 1 character) |
| slug | string | No | null | URL-friendly slug for SEO and deep linking |
| description | string | No | null | Category description |
| channelMappings | array | No | null | Per-channel external category ID mappings |
| iconId | string | No | null | Icon image ID for navigation menus |
| heroImageId | string | No | null | Hero/banner image ID for landing pages |
| displayOrder | integer | No | null | Display order in catalog |
| isDefault | boolean | No | false | Whether this is the default category |
| attributeBindings | array | No | null | Attribute bindings for products in this category |
| defaultAxisIds | array | No | null | Default variant axis IDs (e.g., Size, Color) |
| defaultChannelIds | array | No | null | Default channel IDs for products |
| taxClassId | string | No | null | Tax class ID for products |
| targetMargin | number | No | null | Target profit margin (0-1) |
| ageRestricted | boolean | No | null | Whether products are age-restricted |
| requireImage | boolean | No | null | Whether products must have an image |
| locationScope | enum | No | null | Location inheritance scope |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

Adds: `placement` (optional) for display ordering.

### Update Schema

All fields optional except `id` (required).

### ProductCategoryWithDescendants

Extended schema for hierarchical queries:

| Field | Type | Description |
|-------|------|-------------|
| descendants | array | Nested descendant categories |
| descendantIds | array | Flattened list of descendant category IDs |
| descendantCount | integer | Total number of descendants |

### Example

```json
{
  "name": "Electronics",
  "slug": "electronics",
  "description": "Smartphones, laptops, and accessories",
  "parentId": null,
  "displayOrder": 1,
  "attributeBindings": [
    { "attributeDefId": "attr_voltage_id", "required": false, "displayOrder": 1 },
    { "attributeDefId": "attr_warranty_id", "required": true, "displayOrder": 2 }
  ],
  "defaultAxisIds": ["axis_color_id", "axis_storage_id"],
  "defaultChannelIds": ["channel_web_id", "channel_amazon_id"],
  "taxClassId": "tax_electronics_id",
  "targetMargin": 0.35,
  "ageRestricted": false,
  "requireImage": true,
  "channelMappings": [
    { "channelId": "shopify", "externalCategoryId": "gid://shopify/Collection/123" },
    { "channelId": "amazon", "externalCategoryId": "Electronics_Node" }
  ]
}
```

---

## BusinessProduct

Represents individual products with complete details for ordering, inventory, shipping, and multi-channel commerce.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| productRevisionId | string | No | null | Version control for product changes |
| channelMappings | array | No | null | Per-channel product ID mappings |
| name | string | Yes | - | Product name (min 1 character) |
| description | string | No | null | Detailed product description |
| imageUrl | string (URL) | No | null | Primary image URL |
| imageUrls | array (URLs) | No | null | Product gallery image URLs |
| tags | array | No | null | Product tags for search and filtering |
| price | number | Yes | - | Base price (>= 0) |
| cost | number | No | null | Cost of goods for margin calculation |
| compareAtPrice | number | No | null | Original price for sale display |
| sku | string | No | null | Stock Keeping Unit identifier |
| skuPattern | string | No | null | SKU template for variant generation |
| barcode | string | No | null | Product barcode |
| barcodeFormat | enum | No | null | Barcode format (BarcodeFormat enum) |
| isAlcoholic | boolean | No | false | Whether product is alcoholic |
| categoryId | string | Yes | - | Parent category reference |
| category | object | No | null | Populated ProductCategory object |
| brand | string | No | null | Product brand name |
| brandId | string | No | null | Product brand ID |
| trackInventory | boolean | No | false | Whether inventory tracking is enabled |
| stockQuantity | integer | No | null | Current available stock quantity |
| lowStockThreshold | integer | No | null | Low inventory alert threshold |
| stockedAt | number | No | null | Unix timestamp when stock was last updated |
| reorderPoint | integer | No | null | Inventory threshold for replenishment |
| leadTime | integer | No | null | Supplier lead time in days |
| supplierId | string | No | null | Preferred supplier ID |
| weight | number | No | null | Product weight for shipping |
| dimensions | object | No | null | Physical dimensions |
| shippingClassId | string | No | null | Shipping class ID |
| HSCode | string | No | null | Harmonized System Code for customs |
| taxRuleIds | array | No | null | Tax rule IDs (overrides category) |
| attributes | array | No | null | Product attribute values |
| isActive | boolean | No | true | Whether product is available for sale |
| displayOrder | integer | No | null | Display order in category |
| orderCount | integer | No | null | Total orders (all time) - read-only |
| recentOrderCount | integer | No | null | Orders in last 30 days - read-only |
| lastOrderedAt | number | No | null | Unix timestamp of last order - read-only |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Dimensions Object

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| length | number | Yes | - | Product length (positive) |
| width | number | Yes | - | Product width (positive) |
| height | number | Yes | - | Product height (positive) |
| unit | enum | No | "inches" | Measurement unit: "inches" or "cm" |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`, `category`, `orderCount`, `recentOrderCount`, `lastOrderedAt`

Adds: `placement` (optional) for display ordering, and `variants` (**required**, at least one).

Note: `categoryId` becomes optional for creation.

**Required variants:** A product must be created with at least one variant. Each entry uses the ProductVariant create schema with `productId` omitted — the parent link is assigned by the server once the product is created.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| variants | array | Yes (min 1) | Variants to create with this product (each without `productId`) |

### Create Response

On success, product creation returns the ProductDisplay representation (`ProductDisplaySchema`) — the persisted product hydrated with its created `variants` (including resolved stock status), the computed `priceRange`, and `isVariantSelectable` — rather than the raw create payload.

### Update Schema

All fields optional except `id` (required). `variants` is not enforced on update.

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name minimum length 1 | "Product name is required" |
| price >= 0 | Non-negative validation |
| variants minimum length 1 | "A product must have at least one variant" |

### Create Example (with required variants)

```json
{
  "name": "Wireless Bluetooth Headphones",
  "price": 149.99,
  "categoryId": "category_electronics_id",
  "isActive": true,
  "variants": [
    {
      "axisValues": { "axis_color_id": "value_black_id" },
      "sku": "WBH-2024-BLK",
      "isDefault": true
    },
    {
      "axisValues": { "axis_color_id": "value_white_id" },
      "sku": "WBH-2024-WHT"
    }
  ]
}
```

### Example

```json
{
  "name": "Wireless Bluetooth Headphones",
  "description": "Premium noise-cancelling wireless headphones with 30-hour battery life",
  "imageUrl": "https://cdn.example.com/products/wbh-2024-blk.jpg",
  "imageUrls": [
    "https://cdn.example.com/products/wbh-2024-blk-front.jpg",
    "https://cdn.example.com/products/wbh-2024-blk-side.jpg"
  ],
  "tags": ["wireless", "bluetooth", "noise-cancelling", "headphones"],
  "price": 149.99,
  "cost": 65.00,
  "compareAtPrice": 199.99,
  "sku": "WBH-2024-BLK",
  "skuPattern": "WBH-2024-{color}",
  "barcode": "012345678901",
  "barcodeFormat": "UPC_A",
  "categoryId": "category_electronics_id",
  "brand": "AudioTech",
  "brandId": "brand_audiotech_id",
  "trackInventory": true,
  "stockQuantity": 150,
  "lowStockThreshold": 20,
  "reorderPoint": 50,
  "leadTime": 14,
  "supplierId": "supplier_audio_corp_id",
  "weight": 0.55,
  "dimensions": {
    "length": 8.5,
    "width": 7.0,
    "height": 3.5,
    "unit": "inches"
  },
  "shippingClassId": "shipping_standard_id",
  "HSCode": "8518.30.20",
  "taxRuleIds": ["tax_electronics_id"],
  "attributes": [
    { "attributeDefId": "attr_warranty_id", "value": 24 },
    { "attributeDefId": "attr_connectivity_id", "value": "Bluetooth 5.2" }
  ],
  "channelMappings": [
    { "channelId": "shopify", "externalProductId": "gid://shopify/Product/123", "externalCategoryId": "gid://shopify/Collection/456" },
    { "channelId": "amazon", "externalProductId": "B0ABC123XYZ" }
  ],
  "isActive": true,
  "displayOrder": 1
}
```

---

## Channel Mappings

### ProductCategoryChannelMapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "shopify", "amazon") |
| externalCategoryId | string | Yes | Category ID in external platform |

### ProductChannelMapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier |
| externalProductId | string | Yes | Product ID in external platform |
| externalCategoryId | string | No | Category ID in channel (for sync payloads) |

### Example

```json
{
  "channelMappings": [
    { "channelId": "shopify", "externalProductId": "gid://shopify/Product/123" },
    { "channelId": "amazon", "externalProductId": "B0ABC123XYZ" },
    { "channelId": "ebay", "externalProductId": "123456789012" }
  ]
}
```

---

## Catalog Schemas

### ProductCatalog

Represents a category with its list of products.

| Field | Type | Description |
|-------|------|-------------|
| productCategory | ProductCategory | The category for this catalog section |
| items | array | List of BusinessProduct objects |

### BusinessProductCatalog

Full catalog as array of ProductCatalog sections (one per category).

```json
[
  {
    "productCategory": {
      "id": "cat_electronics",
      "name": "Electronics",
      "displayOrder": 1
    },
    "items": [
      { "id": "prod_headphones", "name": "Wireless Headphones", "price": 129.99 }
    ]
  },
  {
    "productCategory": {
      "id": "cat_clothing",
      "name": "Clothing",
      "displayOrder": 2
    },
    "items": [
      { "id": "prod_polo", "name": "Classic Polo Shirt", "price": 39.99 }
    ]
  }
]
```

---

## Query Options

### AttributeDef Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/slug |
| type | enum | Filter by attribute type |
| isActive | boolean | Filter by active status |

**Sorting Fields:** `name`, `slug`, `createdAt`

### ProductCategory Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description |
| parentId | string/null | Filter by parent category (null = root categories only) |
| includeDescendants | boolean | Whether to include descendant categories |
| locationScope | enum | Filter by location scope |
| ageRestricted | boolean | Filter by age-restricted status |

**Sorting Fields:** `name`, `displayOrder`, `createdAt`

### BusinessProduct Query Options

**Filters:**

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name/description |
| locationId | string | Filter by location |
| categoryId | string | Filter by category |
| isActive | boolean | Filter by active status |
| brand | string | Filter by brand name |
| brandId | string | Filter by brand ID |
| trackInventory | boolean | Filter by inventory tracking status |
| priceRange | object | Filter by price range { min, max } |
| lowStock | boolean | Filter products at or below low stock threshold |
| isAlcoholic | boolean | Filter by alcoholic status |
| tags | array | Filter by tags |

**Sorting Fields:** `name`, `price`, `createdAt`, `displayOrder`

**Pagination:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCT ITEMS STRUCTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │  AttributeDef   │ (organization-level)                      │
│   │                 │                                           │
│   │  - name, slug   │                                           │
│   │  - type, unit   │                                           │
│   │  - enumValues   │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ bound via CategoryAttributeBinding                  │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ ProductCategory │                                           │
│   │                 │                                           │
│   │  - parentId ───────────▶ ProductCategory (self-reference)   │
│   │  - attributeBindings[]   │                                  │
│   │  - defaultAxisIds[]      │                                  │
│   │  - channelMappings[] ───▶ External Platforms                │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N (categoryId)                                    │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ BusinessProduct │                                           │
│   │                 │                                           │
│   │  - attributes[] ────────▶ ProductAttributeValue             │
│   │  - channelMappings[] ───▶ External Platforms                │
│   │  - taxRuleIds[]          │                                  │
│   │  - supplierId ──────────▶ Supplier                          │
│   │  - brandId ─────────────▶ Brand                             │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N (productId)                                     │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ ProductVariant  │                                           │
│   │                 │                                           │
│   │  - axisValues   │                                           │
│   │  - sku, price   │                                           │
│   │  - stockQuantity│                                           │
│   └─────────────────┘                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Create Category with Attribute Bindings

```json
{
  "name": "Laptops",
  "slug": "laptops",
  "parentId": "category_electronics_id",
  "description": "Portable computers for work and gaming",
  "attributeBindings": [
    { "attributeDefId": "attr_processor_id", "required": true, "displayOrder": 1 },
    { "attributeDefId": "attr_ram_id", "required": true, "displayOrder": 2 },
    { "attributeDefId": "attr_storage_id", "required": true, "displayOrder": 3 },
    { "attributeDefId": "attr_screen_size_id", "required": false, "displayOrder": 4 }
  ],
  "defaultAxisIds": ["axis_color_id", "axis_ram_id", "axis_storage_id"],
  "taxClassId": "tax_electronics_id",
  "requireImage": true
}
```

### Create Product with All Features

```json
{
  "name": "Pro Gaming Laptop",
  "description": "High-performance laptop for gaming and content creation",
  "imageUrl": "https://cdn.example.com/laptop-pro.jpg",
  "imageUrls": [
    "https://cdn.example.com/laptop-pro-open.jpg",
    "https://cdn.example.com/laptop-pro-ports.jpg"
  ],
  "tags": ["gaming", "laptop", "high-performance", "rtx"],
  "price": 1999.99,
  "cost": 1400.00,
  "compareAtPrice": 2299.99,
  "sku": "LAPTOP-PRO-001",
  "barcode": "012345678901",
  "barcodeFormat": "UPC_A",
  "categoryId": "category_laptops_id",
  "brand": "TechPro",
  "brandId": "brand_techpro_id",
  "trackInventory": true,
  "stockQuantity": 50,
  "lowStockThreshold": 10,
  "reorderPoint": 20,
  "leadTime": 21,
  "supplierId": "supplier_techpro_id",
  "weight": 5.5,
  "dimensions": { "length": 14.5, "width": 10.0, "height": 0.8, "unit": "inches" },
  "shippingClassId": "shipping_fragile_id",
  "HSCode": "8471.30.01",
  "taxRuleIds": ["tax_electronics_id"],
  "attributes": [
    { "attributeDefId": "attr_processor_id", "value": "Intel Core i9-13900HX" },
    { "attributeDefId": "attr_ram_id", "value": 32 },
    { "attributeDefId": "attr_storage_id", "value": "1TB NVMe SSD" },
    { "attributeDefId": "attr_screen_size_id", "value": 15.6 }
  ],
  "channelMappings": [
    { "channelId": "shopify", "externalProductId": "gid://shopify/Product/789" },
    { "channelId": "amazon", "externalProductId": "B0XYZ789ABC" }
  ],
  "isActive": true
}
```

### Query Root Categories

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "parentId": null
  },
  "sorting": {
    "field": "displayOrder",
    "direction": "asc"
  }
}
```

### Query Products by Tags

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "tags": ["gaming", "wireless"],
    "isActive": true
  },
  "sorting": {
    "field": "price",
    "direction": "desc"
  }
}
```

### Query Alcoholic Products

```json
{
  "page": 1,
  "pageSize": 50,
  "filters": {
    "isAlcoholic": true,
    "isActive": true
  },
  "sorting": {
    "field": "name",
    "direction": "asc"
  }
}
```

---

## Best Practices

1. **Use attribute definitions for specifications** - Create organization-level AttributeDefs for product specifications, then bind them to categories.

2. **Build category hierarchy logically** - Use parentId to create a navigable category tree (e.g., Electronics > Computers > Laptops).

3. **Maintain channel mappings** - Keep externalProductId and externalCategoryId synchronized with external platforms.

4. **Set reorder points for inventory** - Configure reorderPoint and leadTime for automated replenishment alerts.

5. **Use SKU patterns for variants** - Define skuPattern templates to auto-generate variant SKUs consistently.

6. **Include cost for margin analysis** - Track cost of goods to calculate profitability per product.

7. **Use tags for discovery** - Add relevant tags to improve search and enable faceted navigation.

8. **Configure shipping attributes** - Include weight, dimensions, and shippingClassId for accurate shipping calculations.

9. **Set HSCode for international sales** - Required for customs and international shipping compliance.

10. **Mark alcoholic products** - Set isAlcoholic to trigger age verification in order flows.
