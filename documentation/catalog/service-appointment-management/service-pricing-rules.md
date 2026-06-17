# Service Pricing Rules Domain

This document details the conditional pricing and promotion schemas for services.

## Table of Contents

1. [Overview](#overview)
2. [ServicePricingRule](#servicepricingrule)
3. [ServicePricingRuleCondition](#servicepricingrulecondition)
4. [Query Options](#query-options)
5. [Rule Evaluation](#rule-evaluation)

---

## Overview

Service pricing rules enable dynamic pricing adjustments based on various conditions:

- **Time-based promotions** - Happy hour, seasonal discounts
- **Channel-specific pricing** - Different prices for online vs walk-in
- **Service targeting** - Discounts on specific services or all services
- **Priority ordering** - Control which rules take precedence
- **Stackable rules** - Combine multiple discounts or make them exclusive

---

## ServicePricingRule

Defines a pricing rule for service-based pricing adjustments.

### Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "createdAt": { "type": "integer" },
    "updatedAt": { "type": "integer" },
    "locationId": { "type": ["string", "null"] },
    "name": { "type": "string", "minLength": 1, "maxLength": 120 },
    "applyLevel": { "type": "string", "enum": ["ITEM", "ORDER"], "default": "ORDER" },
    "isStackable": { "type": "boolean", "default": true },
    "priority": { "type": "integer", "minimum": 0, "default": 0 },
    "channelMappings": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "properties": {
          "channelId": { "type": "string" },
          "externalPricingRuleId": { "type": "string" }
        },
        "required": ["channelId", "externalPricingRuleId"]
      }
    },
    "condition": { "$ref": "#/$defs/ServicePricingRuleCondition" },
    "action": { "$ref": "#/$defs/PricingRuleAction" },
    "effectiveFrom": { "type": "integer", "minimum": 0 },
    "effectiveTo": { "type": "integer", "minimum": 0 },
    "isActive": { "type": "boolean", "default": true }
  },
  "required": ["id", "name", "action"]
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `locationId` | string \| null | No | Location scope. Null = all locations |
| `name` | string | Yes | Rule display name (1-120 chars) |
| `applyLevel` | enum | Yes | Apply at ORDER or LINE level (default: ORDER) |
| `isStackable` | boolean | Yes | Can combine with other rules (default: true) |
| `priority` | number | Yes | Priority (higher = applied first, default: 0) |
| `channelMappings` | array | No | External channel ID mappings |
| `condition` | object | Yes | Matching conditions |
| `action` | object | Yes | Pricing adjustment action |
| `effectiveFrom` | number | No | Start timestamp (Unix) |
| `effectiveTo` | number | No | End timestamp (Unix) |
| `isActive` | boolean | Yes | Whether rule is active (default: true) |

### Enums

```json
{
  "applyLevel": ["ITEM", "ORDER"],
  "adjustmentType": ["PERCENTAGE", "FIXED", "OVERRIDE"],
  "channel": ["ALL", "DIRECT", "ONLINE", "PHONE", "WALK_IN"]
}
```

### PricingRuleAction Structure

```json
{
  "$id": "#/$defs/PricingRuleAction",
  "type": "object",
  "properties": {
    "adjustmentType": { "type": "string", "enum": ["PERCENTAGE", "FIXED", "OVERRIDE"] },
    "adjustmentValue": { "type": "number", "minimum": 0 },
    "currency": { "type": "string", "minLength": 3, "maxLength": 3, "default": "USD" },
    "maxAdjustmentAmount": { "type": "number", "minimum": 0 }
  },
  "required": ["adjustmentType", "adjustmentValue"]
}
```

### Validation Rules

- If `adjustmentType` is PERCENTAGE, `adjustmentValue` cannot exceed 100
- `effectiveTo` must be >= `effectiveFrom` if both are provided

### Example

```json
{
  "id": "spr_happy_hour",
  "locationId": null,
  "name": "Happy Hour - 20% Off All Services",
  "applyLevel": "ORDER",
  "isStackable": false,
  "priority": 10,
  "channelMappings": null,
  "condition": {
    "allServices": true,
    "serviceIdsAny": [],
    "serviceIdsAll": [],
    "daysOfWeek": [1, 2, 3, 4, 5],
    "startMinute": 840,
    "endMinute": 1020,
    "channel": "ALL"
  },
  "action": {
    "adjustmentType": "PERCENTAGE",
    "adjustmentValue": 20,
    "currency": "USD"
  },
  "effectiveFrom": 1704067200,
  "effectiveTo": 1735689600,
  "isActive": true,
  "createdAt": 1699900000,
  "updatedAt": 1699900000
}
```

---

## ServicePricingRuleCondition

Extends common pricing conditions with service-specific targeting.

### Schema Definition

```json
{
  "$id": "#/$defs/ServicePricingRuleCondition",
  "type": "object",
  "properties": {
    "allServices": { "type": "boolean", "default": false },
    "serviceIdsAny": { "type": "array", "items": { "type": "string" }, "default": [] },
    "serviceIdsAll": { "type": "array", "items": { "type": "string" }, "default": [] },
    "daysOfWeek": {
      "type": "array",
      "items": { "type": "integer", "minimum": 0, "maximum": 6 },
      "default": []
    },
    "startMinute": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "endMinute": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "customerSegmentIds": { "type": "array", "items": { "type": "string" } },
    "channel": { "type": "string", "enum": ["ALL", "DIRECT", "ONLINE", "PHONE", "WALK_IN"], "default": "ALL" }
  }
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allServices` | boolean | Yes | Apply to all services (default: false) |
| `serviceIdsAny` | string[] | Yes | Match if ANY of these services (default: []) |
| `serviceIdsAll` | string[] | Yes | Match only if ALL these services present (default: []) |
| `daysOfWeek` | number[] | No | Days of week (0=Sunday, 6=Saturday) |
| `startMinute` | number | No | Start minute of day (0-1439) |
| `endMinute` | number | No | End minute of day (0-1439) |
| `customerSegmentIds` | string[] | No | Target customer segment IDs |
| `channel` | enum | Yes | Pricing channel (default: ALL) |

### Common Condition Fields (inherited)

```json
{
  "type": "object",
  "properties": {
    "daysOfWeek": {
      "type": "array",
      "items": { "type": "integer", "minimum": 0, "maximum": 6 },
      "default": []
    },
    "startMinute": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "endMinute": { "type": "integer", "minimum": 0, "maximum": 1439 },
    "customerSegmentIds": { "type": "array", "items": { "type": "string" } },
    "channel": { "type": "string", "enum": ["ALL", "DIRECT", "ONLINE", "PHONE", "WALK_IN"], "default": "ALL" }
  }
}
```

### Validation Rules

- Cannot combine `allServices: true` with `serviceIdsAny` or `serviceIdsAll`
- Use `serviceIdsAny` for "match any of these" logic
- Use `serviceIdsAll` for "require all of these" logic (bundle discounts)

### Examples

**All Services:**
```json
{
  "allServices": true,
  "serviceIdsAny": [],
  "serviceIdsAll": [],
  "channel": "ALL"
}
```

**Specific Services (any match):**
```json
{
  "allServices": false,
  "serviceIdsAny": ["svc_haircut", "svc_coloring", "svc_styling"],
  "serviceIdsAll": [],
  "channel": "ONLINE"
}
```

**Bundle Discount (all required):**
```json
{
  "allServices": false,
  "serviceIdsAny": [],
  "serviceIdsAll": ["svc_haircut", "svc_blowdry"],
  "channel": "ALL"
}
```

**Time-Based (Weekday Happy Hour):**
```json
{
  "allServices": true,
  "serviceIdsAny": [],
  "serviceIdsAll": [],
  "daysOfWeek": [1, 2, 3, 4, 5],
  "startMinute": 840,
  "endMinute": 1020,
  "channel": "ALL"
}
```

---

## Query Options

### ServicePricingRuleFilters

```json
{
  "type": "object",
  "properties": {
    "search": { "type": "string" },
    "locationId": { "type": "string" },
    "applyLevel": { "type": "string", "enum": ["ITEM", "ORDER"] },
    "channel": { "type": "string", "enum": ["ALL", "DIRECT", "ONLINE", "PHONE", "WALK_IN"] },
    "isStackable": { "type": "boolean" },
    "isActive": { "type": "boolean" }
  }
}
```

### ServicePricingRuleSorting

```json
{
  "type": "object",
  "properties": {
    "field": { "type": "string", "enum": ["name", "priority", "createdAt"] },
    "direction": { "type": "string", "enum": ["asc", "desc"] }
  },
  "required": ["field", "direction"]
}
```

---

## Rule Evaluation

### Evaluation Order

1. Filter rules by `isActive: true`
2. Filter by `effectiveFrom` <= now <= `effectiveTo`
3. Filter by `locationId` match (or null for all locations)
4. Sort by `priority` (descending - highest first)
5. Evaluate conditions in order
6. For non-stackable rules, stop after first match
7. For stackable rules, continue and combine discounts

### Apply Level Behavior

**ORDER Level:**
- Rule applies once to the entire appointment/order
- Discount calculated on total price
- Example: "20% off your entire visit"

**LINE Level:**
- Rule applies to each matching service line
- Discount calculated per line item
- Example: "$5 off each haircut"

### Stackability

**Stackable Rules (`isStackable: true`):**
- Multiple rules can apply simultaneously
- Discounts are combined (typically additive)
- Use for combinable promotions

**Non-Stackable Rules (`isStackable: false`):**
- Only one rule applies (highest priority wins)
- Prevents discount stacking abuse
- Use for exclusive promotions

### Example Scenarios

**Scenario 1: Happy Hour + Loyalty Discount**
```
Rule A: Happy Hour 20% (priority: 10, stackable: true)
Rule B: Loyalty 10% (priority: 5, stackable: true)

Result: Both apply → 30% total discount
```

**Scenario 2: Flash Sale vs Regular Discount**
```
Rule A: Flash Sale 50% (priority: 20, stackable: false)
Rule B: Regular 15% (priority: 5, stackable: true)

Result: Only Flash Sale applies → 50% discount
```

**Scenario 3: Bundle Discount**
```
Rule: Haircut + Blowdry Bundle 25%
Condition: serviceIdsAll: ["svc_haircut", "svc_blowdry"]

Booking: Haircut only → Rule doesn't apply
Booking: Haircut + Blowdry → 25% off total
```
