# Discount Rule Overview

This document provides comprehensive documentation for the Discount Rule system, covering discount configurations for order pricing including percentage and fixed amount discounts.

## Table of Contents

1. [Overview](#overview)
2. [DiscountRule](#discountrule)
3. [Discount Calculation](#discount-calculation)
4. [Validation Rules](#validation-rules)
5. [Enums](#enums)
6. [Query Options](#query-options)
7. [Relationships](#relationships)
8. [Best Practices](#best-practices)

---

## Overview

The Discount Rule system manages discount configurations for order pricing. It provides:

- **Multiple discount types** supporting percentage and fixed amount discounts
- **Flexible scoping** for order-level, item-level, or category-level discounts
- **Promo code support** with usage tracking and limits
- **Customer targeting** with segments and first-order restrictions
- **Time-based validity** with effective date ranges
- **Stackable discounts** with priority-based application order

**Use Cases:**
- Promotional campaigns with percentage discounts
- Fixed amount coupons for customer acquisition
- Category-specific sales events
- First-order customer incentives
- Loyalty program rewards

---

## DiscountRule

Defines discount configurations for orders.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | - | Business location where discount applies |
| name | string | Yes | - | Discount display name (1-100 chars) |
| code | string | No | - | Discount/promo code for redemption |
| scope | enum | Yes | ORDER | Discount scope (order, item, category) |
| type | enum | Yes | PERCENTAGE | Discount type (percentage, fixed) |
| value | number | Yes | - | Discount value (percentage or amount) |
| currency | string | Yes | USD | Currency code for fixed discounts (3 chars) |
| catalogScope | enum | Yes | ALL | Catalog scope for item-level discounts |
| externalDiscountId | string | No | - | External system discount ID |
| minSubtotal | number | No | - | Minimum order subtotal required |
| customerSegment | string | No | - | Target customer segment |
| firstOrderOnly | boolean | Yes | false | Whether for first orders only |
| maxUses | number | No | - | Maximum total uses allowed |
| maxUsesPerCustomer | number | No | - | Maximum uses per customer |
| isStackable | boolean | Yes | true | Whether can stack with other discounts |
| priority | number | Yes | 0 | Priority for application order |
| effectiveFrom | number | No | - | Start timestamp for validity |
| effectiveTo | number | No | - | End timestamp for validity |
| isActive | boolean | Yes | true | Whether currently active |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "disc_abc123xyz",
  "locationId": "loc_downtown",
  "name": "Summer Sale 20% Off",
  "code": "SUMMER20",
  "scope": "order",
  "type": "percentage",
  "value": 20,
  "currency": "USD",
  "catalogScope": "all",
  "minSubtotal": 50.00,
  "customerSegment": "loyalty_gold",
  "firstOrderOnly": false,
  "maxUses": 1000,
  "maxUsesPerCustomer": 3,
  "isStackable": false,
  "priority": 10,
  "effectiveFrom": 1717200000000,
  "effectiveTo": 1719878400000,
  "isActive": true,
  "createdAt": 1717100000000,
  "updatedAt": 1717100000000
}
```

### Fixed Amount Discount Example

```json
{
  "id": "disc_fixed_001",
  "name": "$10 Off First Order",
  "code": "WELCOME10",
  "scope": "order",
  "type": "fixed",
  "value": 10.00,
  "currency": "USD",
  "catalogScope": "all",
  "minSubtotal": 25.00,
  "firstOrderOnly": true,
  "maxUsesPerCustomer": 1,
  "isStackable": true,
  "priority": 5,
  "isActive": true
}
```

### Category-Specific Discount Example

```json
{
  "id": "disc_cat_001",
  "locationId": "loc_main",
  "name": "Electronics 15% Off",
  "scope": "category",
  "type": "percentage",
  "value": 15,
  "currency": "USD",
  "catalogScope": "category",
  "externalDiscountId": "ext_promo_electronics",
  "isStackable": true,
  "priority": 20,
  "effectiveFrom": 1717200000000,
  "effectiveTo": 1717804800000,
  "isActive": true
}
```

### Create Request Example

```json
{
  "name": "Black Friday 30% Off",
  "code": "BLACKFRIDAY30",
  "scope": "order",
  "type": "percentage",
  "value": 30,
  "minSubtotal": 100.00,
  "maxUses": 5000,
  "maxUsesPerCustomer": 1,
  "isStackable": false,
  "priority": 100,
  "effectiveFrom": 1732348800000,
  "effectiveTo": 1732521600000,
  "isActive": true
}
```

---

## Discount Calculation

### Application Order

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DISCOUNT APPLICATION ORDER                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   1. Filter Active Discounts                                        │
│      - isActive = true                                              │
│      - Current time within effectiveFrom/effectiveTo                │
│      - Usage limits not exceeded                                    │
│                                                                      │
│   2. Validate Eligibility                                           │
│      - Check minSubtotal requirement                                │
│      - Check customerSegment match                                  │
│      - Check firstOrderOnly restriction                             │
│      - Check maxUsesPerCustomer limit                               │
│                                                                      │
│   3. Sort by Priority                                               │
│      - Higher priority discounts applied first                      │
│      - Same priority: order by createdAt                            │
│                                                                      │
│   4. Apply Discounts                                                │
│      - If isStackable = false, only one discount applies            │
│      - If isStackable = true, multiple discounts can stack          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Calculation by Type

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DISCOUNT CALCULATION                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   PERCENTAGE DISCOUNT                                               │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ discountAmount = applicableAmount × (value / 100)            │  │
│   │                                                              │  │
│   │ Example: 20% off $150 order                                  │  │
│   │ discountAmount = $150 × 0.20 = $30                          │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   FIXED DISCOUNT                                                    │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ discountAmount = min(value, applicableAmount)                │  │
│   │                                                              │  │
│   │ Example: $10 off $150 order                                  │  │
│   │ discountAmount = min($10, $150) = $10                       │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   SCOPE APPLICATION                                                 │
│   - ORDER: Applied to entire order subtotal                        │
│   - ITEM: Applied to specific item(s)                              │
│   - CATEGORY: Applied to items in specific category                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Stacking Behavior

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STACKING BEHAVIOR                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   NON-STACKABLE (isStackable = false)                               │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Order Subtotal: $100                                         │  │
│   │                                                              │  │
│   │ Discount A (priority 10): 20% off = $20                     │  │
│   │ Discount B (priority 5): $15 off = $15  ← NOT APPLIED       │  │
│   │                                                              │  │
│   │ Final: $100 - $20 = $80                                     │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   STACKABLE (isStackable = true)                                    │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Order Subtotal: $100                                         │  │
│   │                                                              │  │
│   │ Discount A (priority 10): 20% off = $20                     │  │
│   │ Discount B (priority 5): $15 off = $15  ← APPLIED           │  │
│   │                                                              │  │
│   │ Final: $100 - $20 - $15 = $65                               │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Validation Rules

The schema includes built-in validation:

### Percentage Value Limit

```typescript
// Percentage discounts cannot exceed 100%
if (type === "percentage" && value > 100) {
  // Error: "value cannot exceed 100 for percentage discounts"
}
```

### Date Range Validation

```typescript
// effectiveTo must be after effectiveFrom
if (effectiveTo < effectiveFrom) {
  // Error: "effectiveTo must be greater than or equal to effectiveFrom"
}
```

### Field Constraints

| Field | Constraint |
|-------|------------|
| name | 1-100 characters |
| currency | Exactly 3 characters (ISO 4217) |
| value | Non-negative number |
| priority | Non-negative integer |
| maxUses | Positive integer |
| maxUsesPerCustomer | Positive integer |

---

## Enums

### DiscountScope

| Value | Description |
|-------|-------------|
| ORDER | Applied to entire order subtotal |
| ITEM | Applied to specific item(s) |
| CATEGORY | Applied to items in specific category |

### DiscountType

| Value | Description |
|-------|-------------|
| PERCENTAGE | Percentage of applicable amount |
| FIXED | Fixed currency amount |

### DiscountCatalogScope

| Value | Description |
|-------|-------------|
| ALL | Applies to all catalog items |
| CATEGORY | Applies to specific category items |
| ITEM | Applies to specific items only |

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search across name and code |
| locationId | string | Filter by business location |
| code | string | Filter by discount code |
| scope | enum | Filter by discount scope |
| type | enum | Filter by discount type |
| catalogScope | enum | Filter by catalog scope |
| isStackable | boolean | Filter by stackable status |
| isActive | boolean | Filter by active status |

### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | name, priority, value, createdAt | Field to sort by |
| direction | asc, desc | Sort direction |

### Pagination

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| page | integer | Yes | Page number (1-indexed) |
| pageSize | integer | Yes | Items per page |

### Query Example

```json
{
  "page": 1,
  "pageSize": 20,
  "filters": {
    "isActive": true,
    "scope": "order",
    "type": "percentage"
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
┌─────────────────────────────────────────────────────────────────────┐
│                    DISCOUNT RULE RELATIONSHIPS                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │     Location     │                                              │
│   │   (optional)     │                                              │
│   └────────┬─────────┘                                              │
│            │ N:1                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                │
│   │   DiscountRule   │         │   DisplayOrder   │                │
│   │                  │         │    Placement     │                │
│   │  - name          │────────►│   (optional)     │                │
│   │  - code          │  has    │                  │                │
│   │  - scope         │         │  - displayOrder  │                │
│   │  - type          │         │  - section       │                │
│   │  - value         │         └──────────────────┘                │
│   │  - priority      │                                              │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ applied to                                              │
│            ▼                                                         │
│   ┌──────────────────┐                                              │
│   │      Order       │                                              │
│   │                  │                                              │
│   │  - subtotal      │                                              │
│   │  - discounts[]   │                                              │
│   │  - total         │                                              │
│   └──────────────────┘                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| DiscountRule | Location | N:1 | Optional location-specific discount |
| DiscountRule | DisplayOrderPlacement | 1:1 | Optional UI display ordering |
| DiscountRule | Order | N:N | Discounts applied to orders |

---

## Best Practices

### Discount Configuration

1. **Set meaningful priorities** - Use priority to control which discounts apply first. Higher priority discounts are evaluated before lower ones.

2. **Use minSubtotal wisely** - Set minimum subtotal requirements to protect margins on small orders.

3. **Configure usage limits** - Set maxUses and maxUsesPerCustomer to prevent abuse and control promotion costs.

4. **Plan effective dates** - Always set effectiveFrom and effectiveTo for time-limited promotions to ensure automatic expiration.

### Stacking Strategy

5. **Be intentional with stacking** - Set isStackable=false for major promotions to prevent excessive discounts.

6. **Layer stackable discounts** - Use priority to ensure stackable discounts apply in the correct order.

7. **Test discount combinations** - Verify that stackable discount combinations don't result in unexpected totals.

### Code Management

8. **Use unique codes** - Ensure promo codes are unique and memorable for marketing campaigns.

9. **Track external IDs** - Use externalDiscountId to correlate with external promotion management systems.

10. **Segment effectively** - Use customerSegment to target discounts to specific customer groups.

### Maintenance

11. **Deactivate rather than delete** - Set isActive=false instead of deleting for historical tracking.

12. **Monitor usage** - Track usage against maxUses to know when promotions are exhausted.

13. **Review expired discounts** - Periodically review and clean up expired discounts.

---

## Quick Reference

### Discount Types

| Type | Value Example | Result on $100 Order |
|------|---------------|----------------------|
| PERCENTAGE | 20 | $20 discount |
| FIXED | 15.00 | $15 discount |

### Common Patterns

| Use Case | Configuration |
|----------|---------------|
| Site-wide sale | scope: ORDER, isStackable: false |
| Promo code | code: "SAVE10", maxUsesPerCustomer: 1 |
| First order | firstOrderOnly: true, maxUsesPerCustomer: 1 |
| Category sale | scope: CATEGORY, catalogScope: CATEGORY |
| VIP discount | customerSegment: "vip", isStackable: true |
