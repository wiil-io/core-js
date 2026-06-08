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

```typescript
ServicePricingRuleSchema = BaseModelSchema.safeExtend({
    locationId: z.string().nullable().optional(),
    name: z.string().min(1).max(120),
    applyLevel: z.enum(PricingRuleApplyLevel).default("ORDER"),
    isStackable: z.boolean().default(true),
    priority: z.number().int().nonnegative().default(0),
    channelMappings: z.array(PricingRuleChannelMappingSchema).nullable().optional(),
    condition: ServicePricingRuleConditionSchema,
    action: PricingRuleActionSchema,
    effectiveFrom: z.number().int().nonnegative().optional(),
    effectiveTo: z.number().int().nonnegative().optional(),
    isActive: z.boolean().default(true),
});
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

```typescript
enum PricingRuleApplyLevel {
    ORDER = "ORDER",  // Apply once to entire order
    LINE = "LINE",    // Apply to each matching line item
}

enum PricingRuleAdjustmentType {
    PERCENTAGE = "PERCENTAGE",  // Percentage discount (0-100)
    FIXED = "FIXED",            // Fixed amount discount
}

enum PricingChannel {
    ALL = "ALL",
    DIRECT = "DIRECT",
    ONLINE = "ONLINE",
    PHONE = "PHONE",
    WALK_IN = "WALK_IN",
}
```

### PricingRuleAction Structure

```typescript
interface PricingRuleAction {
    adjustmentType: PricingRuleAdjustmentType;
    adjustmentValue: number;  // Percentage (0-100) or fixed amount
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
    "daysOfWeek": ["1", "2", "3", "4", "5"],
    "timeRange": {
      "startMinute": 840,
      "endMinute": 1020
    },
    "channel": "ALL"
  },
  "action": {
    "adjustmentType": "PERCENTAGE",
    "adjustmentValue": 20
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

```typescript
ServicePricingRuleConditionSchema = PricingRuleCommonConditionSchema.safeExtend({
    allServices: z.boolean().default(false),
    serviceIdsAny: z.array(z.string()).default([]),
    serviceIdsAll: z.array(z.string()).default([]),
});
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allServices` | boolean | Yes | Apply to all services (default: false) |
| `serviceIdsAny` | string[] | Yes | Match if ANY of these services (default: []) |
| `serviceIdsAll` | string[] | Yes | Match only if ALL these services present (default: []) |
| `daysOfWeek` | string[] | No | Days of week (0=Sunday, 6=Saturday) |
| `timeRange` | object | No | Time range within day |
| `channel` | enum | Yes | Pricing channel (default: ALL) |

### Common Condition Fields (inherited)

```typescript
interface PricingRuleCommonCondition {
    daysOfWeek?: string[];  // ["0", "1", "2", "3", "4", "5", "6"]
    timeRange?: {
        startMinute: number;  // Minutes from midnight (0-1439)
        endMinute: number;    // Minutes from midnight (1-1440)
    };
    channel: PricingChannel;
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
  "daysOfWeek": ["1", "2", "3", "4", "5"],
  "timeRange": {
    "startMinute": 840,
    "endMinute": 1020
  },
  "channel": "ALL"
}
```

---

## Query Options

### ServicePricingRuleFilters

```typescript
interface ServicePricingRuleFilters {
    search?: string;                      // Search by name
    locationId?: string;                  // Filter by location
    applyLevel?: PricingRuleApplyLevel;   // Filter by apply level
    channel?: PricingChannel;             // Filter by channel
    isStackable?: boolean;                // Filter by stackability
    isActive?: boolean;                   // Filter by active status
}
```

### ServicePricingRuleSorting

```typescript
interface ServicePricingRuleSorting {
    field: "name" | "priority" | "createdAt";
    direction: "asc" | "desc";
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
