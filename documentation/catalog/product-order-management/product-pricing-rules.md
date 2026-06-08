# Product Pricing Rules Domain

This document provides comprehensive documentation for the Product Pricing Rules domain, covering product-specific discounts, promotions, and conditional pricing.

## Table of Contents

1. [Overview](#overview)
2. [ProductPricingRule](#productpricingrule)
3. [Conditions](#conditions)
4. [Display Order Placement](#display-order-placement)
5. [Channel Mappings](#channel-mappings)
6. [Query Options](#query-options)
7. [Relationships](#relationships)
8. [Usage Examples](#usage-examples)

---

## Overview

The Product Pricing Rules domain enables conditional pricing and promotions for products:

- **Time-based promotions** - Flash sales, holiday specials
- **Channel-specific pricing** - Different prices per sales channel
- **Customer group targeting** - VIP discounts, loyalty rewards
- **Product set integration** - Pricing rules linked to specific sets

### Key Features

- Flexible condition matching (channel, time, customer group)
- Effective date ranges for scheduled promotions
- Location-specific rules via `locationId`
- External platform synchronization

---

## ProductPricingRule

Defines a pricing rule with conditions and associated discount.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | null | Location-specific rule |
| name | string | Yes | - | Rule name (1-120 characters) |
| channelMappings | array | No | null | Per-channel external rule ID mappings |
| discountId | string | Yes | - | Associated discount definition |
| productSetRevisionId | string | No | null | Product set revision for version scoping |
| condition | object | Yes | - | Conditions for rule application |
| effectiveFrom | number | No | null | Start timestamp for rule validity |
| effectiveTo | number | No | null | End timestamp for rule validity |
| isActive | boolean | No | true | Whether rule is active |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Create Schema

Omits: `id`, `createdAt`, `updatedAt`

Adds optional `placement` field for display ordering.

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| name length 1-120 | Required validation |
| discountId minimum 1 | Required validation |
| effectiveTo >= effectiveFrom | "effectiveTo must be greater than or equal to effectiveFrom" |

### Example

```json
{
  "name": "Summer Electronics Sale",
  "discountId": "discount_15pct_id",
  "condition": {
    "productSetId": "electronics_set_id",
    "channel": "ALL",
    "daysOfWeek": [0, 1, 2, 3, 4, 5, 6],
    "startMinute": 0,
    "endMinute": 1439
  },
  "effectiveFrom": 1717200000,
  "effectiveTo": 1725148800,
  "isActive": true
}
```

---

## Conditions

### Product Pricing Rule Condition Schema

Extends the common pricing rule condition with product-specific fields.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| productSetId | string | Yes | - | Product set ID this rule applies to |
| daysOfWeek | array | No | [] | Days of week (0=Sunday, 6=Saturday) |
| startMinute | integer | No | null | Start minute of day (0-1439) |
| endMinute | integer | No | null | End minute of day (0-1439) |
| customerSegmentIds | array | No | null | Target customer segment IDs |
| channel | enum | No | "ALL" | Target channel for rule |

### Pricing Channel Enum

| Value | Description |
|-------|-------------|
| ALL | Applies to all channels |
| DIRECT | Direct sales (in-person, phone) |
| ONLINE | Online orders (web, app) |
| PHONE | Phone orders |
| WALK_IN | Walk-in customers |

### Validation Rules

| Rule | Error Message |
|------|---------------|
| productSetId minimum 1 | Required validation |
| daysOfWeek values 0-6 | Valid day of week range |
| startMinute 0-1439 | Valid minute of day |
| endMinute 0-1439 | Valid minute of day |
| endMinute >= startMinute | "endMinute must be greater than or equal to startMinute" |

### Time Calculation

Minutes of day calculation:
- `startMinute: 0` = 00:00 (midnight)
- `startMinute: 540` = 09:00 (9 AM)
- `startMinute: 720` = 12:00 (noon)
- `startMinute: 1020` = 17:00 (5 PM)
- `endMinute: 1439` = 23:59 (end of day)

Formula: `minutes = (hours * 60) + minutes`

### Example Conditions

**All-Day Sale:**
```json
{
  "productSetId": "summer_collection_id",
  "channel": "ALL",
  "daysOfWeek": [0, 1, 2, 3, 4, 5, 6],
  "startMinute": 0,
  "endMinute": 1439
}
```

**Weekday Online Sale (9 AM - 6 PM):**
```json
{
  "productSetId": "clearance_items_id",
  "channel": "ONLINE",
  "daysOfWeek": [1, 2, 3, 4, 5],
  "startMinute": 540,
  "endMinute": 1080
}
```

**VIP Customer Discount:**
```json
{
  "productSetId": "premium_products_id",
  "channel": "ALL",
  "customerSegmentIds": ["segment_vip_id", "segment_gold_id"]
}
```

**Weekend Flash Sale:**
```json
{
  "productSetId": "featured_products_id",
  "channel": "ALL",
  "daysOfWeek": [0, 6],
  "startMinute": 600,
  "endMinute": 1200
}
```

---

## Display Order Placement

Schema for positioning rules in ordered lists.

### Schema Definition

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| position | enum | Yes | Position relative to reference ("before" or "after") |
| referenceId | string | No | Reference rule ID for positioning |

### Example

```json
{
  "placement": {
    "position": "after",
    "referenceId": "rule_summer_sale_id"
  }
}
```

---

## Channel Mappings

### Pricing Rule Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "shopify") |
| externalPricingRuleId | string | Yes | Rule ID in external platform |

### Example

```json
{
  "channelMappings": [
    { "channelId": "shopify", "externalPricingRuleId": "discount_abc123" },
    { "channelId": "amazon", "externalPricingRuleId": "promo_xyz789" }
  ]
}
```

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name |
| locationId | string | Filter by location |
| channel | enum | Filter by target channel |
| isActive | boolean | Filter by active status |

### Sorting

**Fields:** `name`, `createdAt`

**Directions:** `asc`, `desc`

### Pagination

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number |
| pageSize | integer | Yes | Items per page |

### Example Query

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "isActive": true,
    "channel": "ONLINE"
  },
  "sorting": {
    "field": "name",
    "direction": "asc"
  }
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                  PRICING RULE STRUCTURE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │ProductPricingRule│                                           │
│   │                 │                                           │
│   │  - locationId ──────────▶ Location                          │
│   │  - discountId ──────────▶ Discount Definition               │
│   │  - productSetRevisionId ▶ ProductSet Revision               │
│   │  - condition    │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ contains                                            │
│            ▼                                                     │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │         ProductPricingRuleCondition                      │   │
│   │                                                          │   │
│   │  - productSetId ───────────▶ ProductSet                  │   │
│   │  - channel (ALL, DIRECT, ONLINE, PHONE, WALK_IN)        │   │
│   │  - customerSegmentIds[] ───▶ CustomerSegment[]           │   │
│   │  - daysOfWeek[]                                          │   │
│   │  - startMinute, endMinute                                │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Rule Application Logic:                                        │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  1. Filter active rules                                  │   │
│   │  2. Filter by effectiveFrom/To date range               │   │
│   │  3. Match condition criteria:                            │   │
│   │     - Channel matches order channel                      │   │
│   │     - Customer in target segment                         │   │
│   │     - Current day/time matches                           │   │
│   │     - Products in productSetId                           │   │
│   │  4. Apply discount from discountId                       │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Summer Sale Promotion

```json
{
  "name": "Summer Sale - 20% Off",
  "discountId": "discount_20pct_id",
  "condition": {
    "productSetId": "summer_collection_id",
    "channel": "ALL",
    "daysOfWeek": [0, 1, 2, 3, 4, 5, 6]
  },
  "effectiveFrom": 1717200000,
  "effectiveTo": 1725148800,
  "isActive": true
}
```

### Flash Sale (Limited Hours)

```json
{
  "name": "Flash Sale - 12 Hour Special",
  "discountId": "discount_30pct_id",
  "condition": {
    "productSetId": "flash_sale_items_id",
    "channel": "ONLINE",
    "daysOfWeek": [5],
    "startMinute": 360,
    "endMinute": 1080
  },
  "effectiveFrom": 1699660800,
  "effectiveTo": 1699747200,
  "isActive": true
}
```

### VIP Member Discount

```json
{
  "name": "VIP Members - 15% Off Everything",
  "discountId": "discount_15pct_id",
  "condition": {
    "productSetId": "all_products_id",
    "channel": "ALL",
    "customerSegmentIds": ["segment_vip_id"]
  },
  "isActive": true
}
```

### Online-Only Discount

```json
{
  "name": "Online Exclusive - Free Shipping",
  "discountId": "discount_free_shipping_id",
  "condition": {
    "productSetId": "shippable_products_id",
    "channel": "ONLINE"
  },
  "isActive": true
}
```

### Weekend Special

```json
{
  "name": "Weekend Special - 10% Off",
  "discountId": "discount_10pct_id",
  "condition": {
    "productSetId": "featured_products_id",
    "channel": "ALL",
    "daysOfWeek": [0, 6],
    "startMinute": 0,
    "endMinute": 1439
  },
  "isActive": true
}
```

### Limited-Time Launch Promotion

```json
{
  "name": "New Product Launch - Early Bird Discount",
  "discountId": "discount_25pct_id",
  "condition": {
    "productSetId": "new_arrivals_id",
    "channel": "ALL"
  },
  "effectiveFrom": 1699833600,
  "effectiveTo": 1700438400,
  "isActive": true
}
```

---

## Best Practices

1. **Use effective dates for scheduled promotions** - Enables set-and-forget campaign management without manual activation.

2. **Create product sets for targeting** - Group products into sets for precise rule targeting rather than individual products.

3. **Consider channel-specific pricing** - Online vs in-store pricing may differ; use channel conditions appropriately.

4. **Test rule combinations** - Ensure multiple active rules don't conflict or create unexpected discounts.

5. **Document rule descriptions** - Clear names help staff understand which promotions are active.

6. **Use customer segments for loyalty programs** - Enables tiered pricing without complex logic.

7. **Set reasonable time windows** - Account for time zones when setting startMinute/endMinute.

8. **Maintain channel mappings** - Keep external platform rule IDs synchronized for consistent pricing.

9. **Monitor rule effectiveness** - Track which rules drive sales to optimize future promotions.

10. **Plan rule hierarchy** - Determine which rules take precedence when multiple rules match.
