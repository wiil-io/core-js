# Menu Pricing Rules Domain

This document provides comprehensive documentation for the Menu Pricing Rules domain, covering menu-specific discounts, promotions, and conditional pricing.

## Table of Contents

1. [Overview](#overview)
2. [MenuPricingRule](#menupricingrule)
3. [Conditions](#conditions)
4. [Display Order Placement](#display-order-placement)
5. [Channel Mappings](#channel-mappings)
6. [Query Options](#query-options)
7. [Relationships](#relationships)
8. [Usage Examples](#usage-examples)

---

## Overview

The Menu Pricing Rules domain enables conditional pricing and promotions for menu items:

- **Time-based promotions** - Happy hour, lunch specials
- **Channel-specific pricing** - Different prices for delivery vs dine-in
- **Customer group targeting** - VIP discounts, loyalty rewards
- **Order amount conditions** - Minimum spend requirements
- **Menu set integration** - Pricing rules linked to specific sets

### Key Features

- Flexible condition matching (channel, time, amount, customer group)
- Priority-based rule application
- Effective date ranges for scheduled promotions
- Location-specific rules via `locationId`
- External platform synchronization

---

## MenuPricingRule

Defines a pricing rule with conditions and associated discount.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | null | Location-specific rule |
| name | string | Yes | - | Rule name (1-120 characters) |
| description | string | No | null | Rule description |
| channelMappings | array | No | null | Per-channel external rule ID mappings |
| discountId | string | Yes | - | Associated discount definition |
| menuSetRevisionId | string | No | null | Menu set revision for version scoping |
| condition | object | Yes | - | Conditions for rule application |
| effectiveFrom | number | No | null | Start timestamp for rule validity |
| effectiveTo | number | No | null | End timestamp for rule validity |
| priority | integer | No | 0 | Rule priority (higher = applied first) |
| displayOrder | integer | No | 0 | Display order in rule list |
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
  "name": "Happy Hour Pizza Deal",
  "description": "20% off all pizzas from 4-6 PM",
  "discountId": "discount_20pct_id",
  "condition": {
    "channel": "all",
    "menuSetId": "pizza_category_set_id",
    "dayOfWeek": [1, 2, 3, 4, 5],
    "timeStart": "16:00",
    "timeEnd": "18:00"
  },
  "effectiveFrom": 1699833600,
  "effectiveTo": 1702425600,
  "priority": 10,
  "isActive": true
}
```

---

## Conditions

### Common Condition Fields

Base condition fields available for all pricing rules.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| channel | enum | No | "all" | Target channel for rule |
| minOrderAmount | number | No | null | Minimum order amount to apply |
| maxOrderAmount | number | No | null | Maximum order amount to apply |
| customerGroupIds | array | No | null | Target customer group IDs |
| dayOfWeek | array | No | null | Days of week (0=Sunday, 6=Saturday) |
| timeStart | string | No | null | Start time (HH:mm format) |
| timeEnd | string | No | null | End time (HH:mm format) |

### Menu-Specific Condition Fields

Additional fields for menu pricing rules.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| menuSetId | string | Yes | Menu set ID this rule applies to |
| menuItemIds | array | No | Specific menu item IDs to target |
| categoryIds | array | No | Menu category IDs to target |

### Pricing Channel Enum

| Value | Description |
|-------|-------------|
| all | Applies to all channels |
| dine_in | Dine-in orders only |
| takeout | Takeout orders only |
| delivery | Delivery orders only |
| online | Online orders (web/app) |

### Example Conditions

**Happy Hour (Time-Based):**
```json
{
  "channel": "dine_in",
  "menuSetId": "drinks_set_id",
  "dayOfWeek": [1, 2, 3, 4, 5],
  "timeStart": "16:00",
  "timeEnd": "19:00"
}
```

**Delivery Discount (Channel-Based):**
```json
{
  "channel": "delivery",
  "menuSetId": "all_items_set_id",
  "minOrderAmount": 30.00
}
```

**VIP Customer Discount:**
```json
{
  "channel": "all",
  "menuSetId": "premium_items_set_id",
  "customerGroupIds": ["group_vip_id", "group_gold_id"]
}
```

**Category-Specific Promotion:**
```json
{
  "channel": "all",
  "menuSetId": "appetizers_set_id",
  "categoryIds": ["category_appetizers_id"],
  "dayOfWeek": [0, 6]
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
    "referenceId": "rule_happy_hour_id"
  }
}
```

---

## Channel Mappings

### Pricing Rule Channel Mapping

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| channelId | string | Yes | Platform identifier (e.g., "doordash") |
| externalPricingRuleId | string | Yes | Rule ID in external platform |

### Example

```json
{
  "channelMappings": [
    { "channelId": "doordash", "externalPricingRuleId": "dd_promo_123" },
    { "channelId": "uber-eats", "externalPricingRuleId": "ue_deal_456" }
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
| channel | enum | Filter by target channel |
| menuSetId | string | Filter by menu set |
| discountId | string | Filter by discount |
| isActive | boolean | Filter by active status |
| effectiveAt | number | Filter by timestamp (rule must be effective) |

### Sorting

**Fields:** `name`, `createdAt`, `priority`, `displayOrder`

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
    "locationId": "location_main_id",
    "isActive": true,
    "channel": "dine_in",
    "effectiveAt": 1699900000
  },
  "sorting": {
    "field": "priority",
    "direction": "desc"
  }
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                   PRICING RULE STRUCTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │MenuPricingRule  │                                           │
│   │                 │                                           │
│   │  - locationId ──────────▶ Location                          │
│   │  - discountId ──────────▶ Discount Definition               │
│   │  - menuSetRevisionId ───▶ MenuSet Revision                  │
│   │  - condition    │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ contains                                            │
│            ▼                                                     │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │           MenuPricingRuleCondition                       │   │
│   │                                                          │   │
│   │  - channel (all, dine_in, takeout, delivery, online)    │   │
│   │  - menuSetId ────────────▶ MenuSet                       │   │
│   │  - menuItemIds[] ────────▶ BusinessMenuItem[]            │   │
│   │  - categoryIds[] ────────▶ MenuCategory[]                │   │
│   │  - customerGroupIds[] ───▶ CustomerGroup[]               │   │
│   │  - minOrderAmount, maxOrderAmount                        │   │
│   │  - dayOfWeek[], timeStart, timeEnd                       │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Rule Application Logic:                                        │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  1. Filter active rules                                  │   │
│   │  2. Filter by effectiveFrom/To date range               │   │
│   │  3. Match condition criteria:                            │   │
│   │     - Channel matches order channel                      │   │
│   │     - Order amount within range                          │   │
│   │     - Customer in target group                           │   │
│   │     - Current day/time matches                           │   │
│   │     - Items match menuSetId/menuItemIds/categoryIds     │   │
│   │  4. Sort by priority (highest first)                     │   │
│   │  5. Apply discount from discountId                       │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Happy Hour Promotion

```json
{
  "name": "Happy Hour - 25% Off Appetizers",
  "description": "Weekday happy hour special on all appetizers",
  "discountId": "discount_25pct_id",
  "condition": {
    "channel": "dine_in",
    "menuSetId": "appetizers_set_id",
    "dayOfWeek": [1, 2, 3, 4, 5],
    "timeStart": "16:00",
    "timeEnd": "18:00"
  },
  "priority": 20,
  "isActive": true
}
```

### Delivery Minimum Spend Discount

```json
{
  "name": "Free Delivery Over $30",
  "description": "Free delivery on orders $30 or more",
  "discountId": "discount_free_delivery_id",
  "condition": {
    "channel": "delivery",
    "menuSetId": "all_items_set_id",
    "minOrderAmount": 30.00
  },
  "priority": 10,
  "isActive": true
}
```

### VIP Customer Discount

```json
{
  "name": "VIP Member 15% Off",
  "description": "Exclusive discount for VIP members",
  "discountId": "discount_15pct_id",
  "condition": {
    "channel": "all",
    "menuSetId": "premium_items_set_id",
    "customerGroupIds": ["group_vip_id"]
  },
  "priority": 30,
  "isActive": true
}
```

### Weekend Brunch Special

```json
{
  "name": "Weekend Brunch Special",
  "description": "20% off brunch items Saturday and Sunday",
  "discountId": "discount_20pct_id",
  "condition": {
    "channel": "all",
    "menuSetId": "brunch_set_id",
    "categoryIds": ["category_brunch_id"],
    "dayOfWeek": [0, 6],
    "timeStart": "09:00",
    "timeEnd": "14:00"
  },
  "effectiveFrom": 1699833600,
  "effectiveTo": 1702425600,
  "priority": 15,
  "isActive": true
}
```

### Limited-Time Promotion

```json
{
  "name": "Summer Pizza Festival",
  "description": "Buy one pizza, get 50% off second",
  "discountId": "discount_bogo_50_id",
  "condition": {
    "channel": "all",
    "menuSetId": "pizza_set_id",
    "menuItemIds": ["pizza_margherita_id", "pizza_pepperoni_id", "pizza_supreme_id"]
  },
  "effectiveFrom": 1688169600,
  "effectiveTo": 1693526400,
  "priority": 25,
  "isActive": true
}
```

---

## Best Practices

1. **Set appropriate priorities** - Higher priority rules take precedence when multiple rules match.

2. **Use effective dates for scheduled promotions** - Enables set-and-forget campaign management.

3. **Target specific menu sets** - More precise than broad category targeting.

4. **Consider channel-specific pricing** - Delivery often has different pricing structures.

5. **Test rule combinations** - Ensure rules don't conflict or stack unexpectedly.

6. **Document rule descriptions** - Clear descriptions help staff understand active promotions.

7. **Use customer groups for loyalty programs** - Enables tiered pricing without complex logic.

8. **Set reasonable time windows** - Ensure time-based rules account for time zones.
