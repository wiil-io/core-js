# Product Management System Overview

This document provides a high-level overview of the Product Management system. For detailed schema documentation, see the domain-specific files in the [product-order-management](./product-order-management/) directory.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Domain Aggregates](#domain-aggregates)
4. [Schema Relationships](#schema-relationships)
5. [External Integrations](#external-integrations)
6. [Best Practices](#best-practices)

---

## Overview

The Product Management system provides a flexible, scalable solution for managing retail products and inventory. It supports:

- **Multi-location products** with location-specific configurations
- **External platform integrations** (Shopify, Amazon, etc.) via channel mappings
- **Variant-based inventory** with axis-driven configurations (Size, Color, Material)
- **Attribute definitions** with organization-level product attributes and category bindings
- **Product sets/bundles** with flexible pricing modes
- **Pricing rules** for promotions and conditional discounts
- **Order management** with multi-channel support and shipping tracking
- **Version control** through revision IDs
- **Ordering analytics** with order counts and activity tracking
- **Hierarchical categories** with parent-child relationships and inherited settings

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PRODUCT MANAGEMENT SYSTEM                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │   Product    │───▶│    Business      │───▶│    Product       │  │
│  │   Category   │    │     Product      │    │     Variant      │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│         │                    │                        │             │
│         │                    │                        │             │
│         ▼                    ▼                        ▼             │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │  Attribute   │    │  Product Axis    │    │  Variant Channel │  │
│  │   Bindings   │    │    Bindings      │    │    Mappings      │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│         │                    │                                      │
│         ▼                    ▼                                      │
│  ┌──────────────┐    ┌──────────────────┐                          │
│  │ AttributeDef │    │   Variant Axes   │                          │
│  │ (Voltage,    │    │   (Size, Color)  │                          │
│  │  Warranty)   │    └──────────────────┘                          │
│  └──────────────┘                                                   │
│                                                                      │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │ Product Sets │    │  Pricing Rules   │    │  Product Orders  │  │
│  │  (Bundles)   │    │  (Promotions)    │    │   (Fulfillment)  │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Domain Aggregates

The Product Management system is organized into distinct domain aggregates, each with dedicated documentation:

### [Product Items](./product-order-management/product-items.md)

Core product structure including categories, products, variants, and attribute definitions.

| Schema | Description |
|--------|-------------|
| AttributeDef | Organization-level attribute definitions (Voltage, Warranty) |
| CategoryAttributeBinding | Links categories to attributes with settings |
| ProductAttributeValue | Product-level attribute values |
| ProductCategory | Hierarchical groupings with attribute bindings |
| BusinessProduct | Individual products with pricing, attributes, and details |
| ProductVariant | SKU-level variations with axis value selections |
| ProductCatalog | Category with its product items |
| BusinessProductCatalog | Full product catalog array |

**Key Features:**

- Hierarchical category organization with parent-child relationships
- Organization-level attribute definitions (string, number, boolean, enum, date, url)
- Category-to-attribute bindings with required/display order settings
- Inventory tracking with stock quantities and reorder points
- Channel mappings for categories and products (Shopify, Amazon, etc.)
- Physical attributes (weight, dimensions, shipping class)
- Ordering analytics (orderCount, recentOrderCount, lastOrderedAt)
- Tax rules and margin targets

---

### [Product Variants & Axes](./product-order-management/product-variants.md)

Axis-driven variant system for complex product configurations.

| Schema | Description |
|--------|-------------|
| VariantAxis | Organization-level axis definitions (Size, Color, Material) |
| VariantAxisValue | Individual values within an axis (Small, Medium, Large) |
| ProductVariant | SKU-level variants with axis value selections |
| ProductAxisBinding | Links products to applicable axes |

**Key Features:**
- Multiple axis types (swatch, text, image, numeric)
- Per-axis value definitions with display order
- Product-to-axis bindings with display ordering
- Override-capable fields (price, inventory, dimensions)
- Ordering analytics per variant

---

### [Product Catalog](./product-order-management/product-catalog.md)

Read-optimized display schemas for rendering complete product catalogs.

| Schema | Description |
|--------|-------------|
| ProductVariantDisplay | Extended variant with stock status |
| ProductDisplay | Extended product with variants and price range |
| ProductCatalogDisplay | Category with its complete product list |
| BusinessProductCatalogDisplay | Full product catalog |

**Key Features:**
- Denormalized structure for fast rendering
- Pre-computed price ranges
- Stock status resolution
- Category-organized products

---

### [Product Sets](./product-order-management/product-sets.md)

Bundled products (kits, packages, deals).

| Schema | Description |
|--------|-------------|
| ProductSet | Bundle configuration with pricing mode |
| ProductSetItem | Products included in a set |
| ProductSetSelector | Dynamic product matching criteria |

**Key Features:**
- Fixed or sum-of-items pricing
- Explicit or selector-based targeting
- Variant-level specificity
- Optional and required items

---

### [Product Orders](./product-order-management/product-orders.md)

Order management for retail/product sales.

| Schema | Description |
|--------|-------------|
| ProductOrder | Complete order with items and fulfillment |
| ProductOrderItem | Order line items with variants |
| ProductOrderItemBase | Item schema for order creation |

**Key Features:**
- Multi-channel orders (web, marketplace, wholesale)
- Shipping and delivery tracking
- Inventory integration
- External platform synchronization

---

### [Product Pricing Rules](./product-order-management/product-pricing-rules.md)

Conditional pricing and promotions.

| Schema | Description |
|--------|-------------|
| ProductPricingRule | Pricing rule with conditions and discount |
| ProductPricingRuleCondition | Matching criteria for rule application |

**Key Features:**
- Time-based promotions
- Channel-specific pricing
- Customer group targeting
- Product set integration

---

## Schema Relationships

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SCHEMA RELATIONSHIPS                               │
└─────────────────────────────────────────────────────────────────────────────┘

 ┌──────────────────┐                    ┌──────────────────┐
 │  AttributeDef    │                    │ VariantAxis      │
 │  (organization)  │                    │ (organization)   │
 └────────┬─────────┘                    └────────┬─────────┘
          │                                       │
          │ bound via                             │ bound via
          ▼                                       ▼
 ┌────────────────────┐               ┌──────────────────┐
 │CategoryAttribute   │               │ProductAxisBinding│
 │    Binding         │               └────────┬─────────┘
 └────────┬───────────┘                        │
          │                              ┌─────┴─────┐
          │                              │           │
          ▼                              ▼           │
        ┌─────────────────┐                         │
        │ ProductCategory │ ◀───────────────────────┤
        │  - parentId     │                         │
        │  - channelMappings                        │
        │  - attributeBindings                      │
        └────────┬────────┘                         │
                 │ 1:N                              │
                 ▼                                  │
        ┌─────────────────┐                         │
        │BusinessProduct  │◀────────────────────────┘
        │  - attributes   │
        │  - channelMappings
        └────────┬────────┘
                 │
    ┌────────────┼────────────┐
    │ 1:N        │            │
    ▼            │            │
┌─────────────────┐           │
│ ProductVariant  │           │
│                 │           │
│ - axisValues    │           │
│   (map of       │           │
│    axisId →     │           │
│    valueId)     │           │
└─────────────────┘           │
                              │
                              │
┌─────────────────┐           │
│   ProductSet    │───────────┘
│   (items[])     │
└────────┬────────┘
         │
         │ references
         │     ┌─────────────────┐
         │     │ ProductDisplay  │
         │     │   (Catalog)     │
         │     └─────────────────┘
         │
         ▼
┌─────────────────┐           ┌─────────────────┐
│ProductPricingRule│          │  ProductOrder   │
│  (condition)    │           │   (items[])     │
└─────────────────┘           └─────────────────┘
```

---

## External Integrations

The system supports integration with external platforms via channel mappings:

### Supported Patterns

| Entity | Channel Mapping Field |
|--------|----------------------|
| ProductCategory | channelMappings (externalCategoryId) |
| BusinessProduct | channelMappings (externalProductId, externalCategoryId) |
| ProductVariant | channelMappings (externalVariantId) |
| ProductSet | channelMappings (externalProductSetId) |
| ProductPricingRule | channelMappings (externalPricingRuleId) |

### Channel Mapping Flow

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ Internal Product│────▶│ Channel Mappings │────▶│ External Platform│
│     System      │     │   (per entity)   │     │ (Shopify, Amazon)│
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

### External Reference (Orders)

For orders synced from external platforms:

```json
{
  "externalRef": {
    "externalId": "shopify_order_12345",
    "source": "shopify",
    "url": "https://shop.myshopify.com/admin/orders/12345",
    "syncedAt": 1699900000
  }
}
```

---

## Best Practices

### Product Structure

1. **Always create at least one variant** - Even single-option products should have a variant for consistent ordering flow and SKU tracking.

2. **Define axes at organization level** - Share axis definitions across products for consistent variant configurations.

3. **Set explicit display orders** - Ensures consistent product presentation across platforms.

4. **Use descriptive axis value labels** - Include relevant details (e.g., "Small (S)" instead of just "Small").

### Variants

5. **Use axis bindings** - Link products to relevant axes rather than duplicating axis definitions.

6. **Set one variant as default** - Ensures predictable UI behavior when displaying products.

7. **Track inventory at variant level** - Each SKU should have its own stock quantity for accurate fulfillment.

### Orders

8. **Capture item names at order time** - Preserves accuracy even if products are renamed later.

9. **Track external references** - Essential for multi-platform order reconciliation.

10. **Use appropriate order sources** - Determines workflow and attribution tracking.

### Pricing Rules

11. **Use effective dates for scheduled promotions** - Enables set-and-forget campaign management.

12. **Set appropriate priorities** - Higher priority rules take precedence when multiple rules match.

13. **Test rule combinations** - Ensure rules don't conflict or stack unexpectedly.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
| AttributeDefType | string, number, boolean, enum, date, url |
| BarcodeFormat | UPC_A, UPC_E, EAN_13, EAN_8, CODE_128, CODE_39, ITF_14, QR |
| CategoryLocationScope | inherited, local |
| OrderStatus | pending, confirmed, preparing, ready, out_for_delivery, completed, cancelled, returned |
| PaymentStatus | pending, paid, partial, failed, refunded |
| ProductSetPricingMode | FIXED, SUM_OF_ITEMS |
| ProductSetTargetingMode | EXPLICIT, SELECTOR |
| PricingChannel | ALL, DIRECT, ONLINE, PHONE, WALK_IN |
| VariantAxisType | swatch, text, image, numeric |
| StockStatus | in_stock, low_stock, out_of_stock |
| InventoryUnit | EACH, CASE, PACK, BOX, PALLET, etc. |

### Common Query Patterns

All domains support pagination with:
- `page` (integer) - Page number
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
