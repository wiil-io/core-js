# Tax Rule Overview

This document provides comprehensive documentation for the Tax Rule system, covering tax configurations for order pricing including percentage and fixed amount taxes.

## Table of Contents

1. [Overview](#overview)
2. [TaxRule](#taxrule)
3. [Tax Calculation](#tax-calculation)
4. [Validation Rules](#validation-rules)
5. [Enums](#enums)
6. [Query Options](#query-options)
7. [Relationships](#relationships)
8. [Best Practices](#best-practices)

---

## Overview

The Tax Rule system manages tax configurations for order pricing. It provides:

- **Multiple tax types** supporting percentage and fixed amount taxes
- **Flexible scoping** for order-level, item-level, or category-level taxes
- **Inclusive/exclusive pricing** supporting tax-inclusive and tax-exclusive models
- **Compound taxes** for taxes calculated on top of other taxes
- **Time-based validity** with effective date ranges
- **Priority-based application** for correct tax calculation order

**Use Cases:**
- Sales tax configuration by jurisdiction
- VAT/GST tax setup for international commerce
- Category-specific tax rates (e.g., reduced rate for food)
- Location-specific tax rules
- Compound tax scenarios (e.g., provincial + federal)

---

## TaxRule

Defines tax configurations for orders.

### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | - | Business location where tax applies |
| name | string | Yes | - | Tax display name (1-100 chars) |
| scope | enum | Yes | ORDER | Tax scope (order, item, category) |
| rateType | enum | Yes | PERCENTAGE | Tax rate type (percentage, fixed) |
| rateValue | number | Yes | - | Tax rate value |
| currency | string | Yes | USD | Currency code for fixed taxes (3 chars) |
| catalogScope | enum | Yes | ALL | Catalog scope for item-level taxes |
| externalTaxId | string | No | - | External system tax ID |
| isInclusive | boolean | Yes | false | Whether tax is included in prices |
| priority | number | Yes | 0 | Priority for tax application order |
| isCompound | boolean | Yes | false | Whether tax compounds on other taxes |
| effectiveFrom | number | No | - | Start timestamp for validity |
| effectiveTo | number | No | - | End timestamp for validity |
| isActive | boolean | Yes | true | Whether currently active |
| createdAt | number | Yes | auto-generated | Creation timestamp |
| updatedAt | number | No | - | Last modification timestamp |

### Example

```json
{
  "id": "tax_abc123xyz",
  "locationId": "loc_california",
  "name": "California State Sales Tax",
  "scope": "order",
  "rateType": "percentage",
  "rateValue": 7.25,
  "currency": "USD",
  "catalogScope": "all",
  "externalTaxId": "ext_ca_sales_tax",
  "isInclusive": false,
  "priority": 10,
  "isCompound": false,
  "effectiveFrom": 1704067200000,
  "isActive": true,
  "createdAt": 1704000000000,
  "updatedAt": 1704000000000
}
```

### VAT Example (Inclusive)

```json
{
  "id": "tax_vat_uk",
  "locationId": "loc_uk",
  "name": "UK VAT Standard Rate",
  "scope": "order",
  "rateType": "percentage",
  "rateValue": 20,
  "currency": "GBP",
  "catalogScope": "all",
  "isInclusive": true,
  "priority": 10,
  "isCompound": false,
  "isActive": true
}
```

### Reduced Rate Category Tax Example

```json
{
  "id": "tax_food_reduced",
  "locationId": "loc_eu",
  "name": "Reduced VAT - Food Items",
  "scope": "category",
  "rateType": "percentage",
  "rateValue": 5,
  "currency": "EUR",
  "catalogScope": "category",
  "isInclusive": true,
  "priority": 5,
  "isCompound": false,
  "isActive": true
}
```

### Compound Tax Example

```json
{
  "id": "tax_compound_001",
  "locationId": "loc_canada_qc",
  "name": "Quebec Provincial Sales Tax (QST)",
  "scope": "order",
  "rateType": "percentage",
  "rateValue": 9.975,
  "currency": "CAD",
  "catalogScope": "all",
  "isInclusive": false,
  "priority": 5,
  "isCompound": true,
  "isActive": true
}
```

### Create Request Example

```json
{
  "locationId": "loc_new_york",
  "name": "New York State Sales Tax",
  "scope": "order",
  "rateType": "percentage",
  "rateValue": 8.875,
  "isInclusive": false,
  "priority": 10,
  "isCompound": false,
  "isActive": true
}
```

---

## Tax Calculation

### Application Order

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TAX APPLICATION ORDER                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   1. Filter Active Taxes                                            │
│      - isActive = true                                              │
│      - Current time within effectiveFrom/effectiveTo                │
│      - Matches location (if locationId specified)                   │
│                                                                      │
│   2. Sort by Priority                                               │
│      - Higher priority taxes calculated first                       │
│      - Affects compound tax calculations                            │
│                                                                      │
│   3. Calculate Non-Compound Taxes                                   │
│      - isCompound = false                                           │
│      - Calculate on base amount (subtotal)                          │
│                                                                      │
│   4. Calculate Compound Taxes                                       │
│      - isCompound = true                                            │
│      - Calculate on (subtotal + non-compound taxes)                 │
│                                                                      │
│   5. Sum All Tax Amounts                                            │
│      - Total tax = sum of all individual taxes                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Calculation by Type

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TAX CALCULATION                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   PERCENTAGE TAX (Exclusive)                                        │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ taxAmount = applicableAmount × (rateValue / 100)             │  │
│   │                                                              │  │
│   │ Example: 8% tax on $100 order                                │  │
│   │ taxAmount = $100 × 0.08 = $8                                │  │
│   │ Total = $100 + $8 = $108                                    │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   PERCENTAGE TAX (Inclusive)                                        │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ taxAmount = displayPrice - (displayPrice / (1 + rate/100))   │  │
│   │                                                              │  │
│   │ Example: 20% VAT inclusive on £120 displayed price          │  │
│   │ netAmount = £120 / 1.20 = £100                              │  │
│   │ taxAmount = £120 - £100 = £20                               │  │
│   │ Total displayed = £120 (tax already included)               │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   FIXED TAX                                                         │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ taxAmount = rateValue (per applicable unit)                  │  │
│   │                                                              │  │
│   │ Example: $2.50 fixed tax per order                          │  │
│   │ taxAmount = $2.50                                           │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Compound Tax Behavior

```
┌─────────────────────────────────────────────────────────────────────┐
│                    COMPOUND TAX CALCULATION                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   NON-COMPOUND (isCompound = false)                                 │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Order Subtotal: $100                                         │  │
│   │                                                              │  │
│   │ Federal Tax (5%): $100 × 0.05 = $5.00                       │  │
│   │ State Tax (8%):   $100 × 0.08 = $8.00                       │  │
│   │                                                              │  │
│   │ Total Tax: $5.00 + $8.00 = $13.00                           │  │
│   │ Order Total: $100 + $13.00 = $113.00                        │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   COMPOUND (isCompound = true for State Tax)                        │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Order Subtotal: $100                                         │  │
│   │                                                              │  │
│   │ Federal Tax (5%, priority 10): $100 × 0.05 = $5.00          │  │
│   │ State Tax (8%, compound, priority 5):                        │  │
│   │   Base = $100 + $5.00 = $105.00                             │  │
│   │   Tax = $105.00 × 0.08 = $8.40                              │  │
│   │                                                              │  │
│   │ Total Tax: $5.00 + $8.40 = $13.40                           │  │
│   │ Order Total: $100 + $13.40 = $113.40                        │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Inclusive vs Exclusive

```
┌─────────────────────────────────────────────────────────────────────┐
│                    INCLUSIVE VS EXCLUSIVE TAX                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   EXCLUSIVE (isInclusive = false) - Common in US                    │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Product Price:  $100.00                                      │  │
│   │ Sales Tax (8%): + $8.00                                      │  │
│   │ ─────────────────────────                                    │  │
│   │ Customer Pays:  $108.00                                      │  │
│   │                                                              │  │
│   │ Tax is ADDED to the displayed price                         │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│   INCLUSIVE (isInclusive = true) - Common in EU (VAT)               │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │ Product Price:  £120.00 (displayed, tax included)            │  │
│   │ Net Price:      £100.00                                      │  │
│   │ VAT (20%):      £20.00 (already in price)                    │  │
│   │ ─────────────────────────                                    │  │
│   │ Customer Pays:  £120.00                                      │  │
│   │                                                              │  │
│   │ Tax is INCLUDED in the displayed price                      │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Validation Rules

The schema includes built-in validation:

### Percentage Value Limit

```json
{
  "rule": "percentage_rate_limit",
  "when": {
    "rateType": "percentage",
    "rateValue": { "greaterThan": 100 }
  },
  "error": "rateValue cannot exceed 100 for percentage taxes"
}
```

### Date Range Validation

```json
{
  "rule": "effective_date_range",
  "when": {
    "effectiveTo": { "lessThanField": "effectiveFrom" }
  },
  "error": "effectiveTo must be greater than or equal to effectiveFrom"
}
```

### Field Constraints

| Field | Constraint |
|-------|------------|
| name | 1-100 characters |
| currency | Exactly 3 characters (ISO 4217) |
| rateValue | Non-negative number |
| priority | Non-negative integer |

---

## Enums

### TaxScope

| Value | Description |
|-------|-------------|
| ORDER | Applied to entire order subtotal |
| ITEM | Applied to specific item(s) |
| CATEGORY | Applied to items in specific category |

### TaxRateType

| Value | Description |
|-------|-------------|
| PERCENTAGE | Percentage of applicable amount |
| FIXED | Fixed currency amount |

### TaxCatalogScope

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
| search | string | Text search across tax name |
| locationId | string | Filter by business location |
| scope | enum | Filter by tax scope |
| rateType | enum | Filter by tax rate type |
| catalogScope | enum | Filter by catalog scope |
| isInclusive | boolean | Filter by inclusive status |
| isActive | boolean | Filter by active status |

### Sorting

| Field | Values | Description |
|-------|--------|-------------|
| field | name, priority, rateValue, createdAt | Field to sort by |
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
    "rateType": "percentage"
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
│                      TAX RULE RELATIONSHIPS                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────────┐                                              │
│   │     Location     │                                              │
│   │   (optional)     │                                              │
│   └────────┬─────────┘                                              │
│            │ N:1                                                     │
│            ▼                                                         │
│   ┌──────────────────┐         ┌──────────────────┐                │
│   │     TaxRule      │         │   DisplayOrder   │                │
│   │                  │         │    Placement     │                │
│   │  - name          │────────►│   (optional)     │                │
│   │  - scope         │  has    │                  │                │
│   │  - rateType      │         │  - displayOrder  │                │
│   │  - rateValue     │         │  - section       │                │
│   │  - isInclusive   │         └──────────────────┘                │
│   │  - isCompound    │                                              │
│   │  - priority      │                                              │
│   └────────┬─────────┘                                              │
│            │                                                         │
│            │ applied to                                              │
│            ▼                                                         │
│   ┌──────────────────┐                                              │
│   │      Order       │                                              │
│   │                  │                                              │
│   │  - subtotal      │                                              │
│   │  - taxes[]       │                                              │
│   │  - total         │                                              │
│   └──────────────────┘                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Relationships

| From | To | Relationship | Description |
|------|----|--------------|-------------|
| TaxRule | Location | N:1 | Optional location-specific tax |
| TaxRule | DisplayOrderPlacement | 1:1 | Optional UI display ordering |
| TaxRule | Order | N:N | Taxes applied to orders |

---

## Best Practices

### Tax Configuration

1. **Set correct priorities** - Use priority to control tax calculation order. Higher priority taxes are calculated first, which affects compound tax calculations.

2. **Understand inclusive vs exclusive** - Choose isInclusive based on regional requirements. EU typically uses inclusive (VAT), US typically uses exclusive (sales tax).

3. **Configure compound taxes correctly** - Set isCompound=true only when taxes should be calculated on top of other taxes (e.g., certain provincial taxes).

4. **Use effective dates** - Set effectiveFrom and effectiveTo when tax rates change to ensure historical accuracy.

### Location Management

5. **Create location-specific rules** - Different jurisdictions have different tax rates. Create separate rules for each location.

6. **Track external IDs** - Use externalTaxId to correlate with external tax compliance systems (Avalara, TaxJar, etc.).

7. **Handle nexus requirements** - Create tax rules for all jurisdictions where you have tax nexus obligations.

### Category Taxation

8. **Use scope appropriately** - Use CATEGORY scope for items with different tax rates (e.g., food vs. electronics).

9. **Configure reduced rates** - Some jurisdictions have reduced rates for essentials. Create category-specific rules for these.

10. **Handle tax exemptions** - Use a 0% rate rule for tax-exempt categories rather than skipping tax calculation.

### Maintenance

11. **Deactivate rather than delete** - Set isActive=false instead of deleting for historical tracking and audit purposes.

12. **Update for rate changes** - When tax rates change, create new rules with effectiveFrom dates rather than modifying existing rules.

13. **Audit regularly** - Tax compliance requirements change. Review tax rules periodically.

---

## Quick Reference

### Common Tax Rates

| Region | Tax Type | Typical Rate | Inclusive |
|--------|----------|--------------|-----------|
| US (State) | Sales Tax | 4-10% | No |
| UK | VAT | 20% | Yes |
| EU | VAT | 17-27% | Yes |
| Canada | GST | 5% | No |
| Canada | PST/HST | 0-15% | No |
| Australia | GST | 10% | Yes |

### Tax Scenarios

| Scenario | Configuration |
|----------|---------------|
| US Sales Tax | rateType: PERCENTAGE, isInclusive: false, isCompound: false |
| EU VAT | rateType: PERCENTAGE, isInclusive: true, isCompound: false |
| Canada GST+PST | Two rules: GST (priority 10), PST compound (priority 5, isCompound: true) |
| Reduced Food Rate | scope: CATEGORY, catalogScope: CATEGORY, lower rateValue |
| Fixed Per-Order Fee | rateType: FIXED, scope: ORDER |
