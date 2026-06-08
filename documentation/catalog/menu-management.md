# Menu Management System Overview

This document provides a high-level overview of the Menu Management system. For detailed schema documentation, see the domain-specific files in the [menu-order-management](./menu-order-management/) directory.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Domain Aggregates](#domain-aggregates)
4. [Schema Relationships](#schema-relationships)
5. [External Integrations](#external-integrations)
6. [Best Practices](#best-practices)

---

## Overview

The Menu Management system provides a flexible, scalable solution for managing restaurant and business menus. It supports:

- **Multi-location menus** with location-specific configurations
- **External platform integrations** (DoorDash, Uber Eats, etc.) via channel mappings
- **Variant-based pricing** for items with multiple sizes/options
- **Modifier groups** for customizations and add-ons
- **Menu sets/bundles** with flexible pricing modes
- **Pricing rules** for promotions and conditional discounts
- **Order management** with multi-channel support
- **Version control** through revision IDs

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        MENU MANAGEMENT SYSTEM                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │   Category   │───▶│  Business Menu   │───▶│  Menu Item       │  │
│  │              │    │      Item        │    │    Variant       │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│         │                    │                        │             │
│         │                    │                        │             │
│         ▼                    ▼                        ▼             │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │   Channel    │    │  Item Modifier   │    │  Variant Channel │  │
│  │   Mappings   │    │    Bindings      │    │    Mappings      │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│                      ┌──────────────────┐                          │
│                      │  Modifier Groups │                          │
│                      │    & Options     │                          │
│                      └──────────────────┘                          │
│                                                                      │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│  │  Menu Sets   │    │  Pricing Rules   │    │   Menu Orders    │  │
│  │  (Bundles)   │    │  (Promotions)    │    │   (Fulfillment)  │  │
│  └──────────────┘    └──────────────────┘    └──────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Domain Aggregates

The Menu Management system is organized into distinct domain aggregates, each with dedicated documentation:

### [Menu Items](./menu-order-management/menu-items.md)

Core menu structure including categories, items, and variants.

| Schema | Description |
|--------|-------------|
| MenuCategory | Logical groupings for menu items |
| BusinessMenuItem | Individual menu items with pricing and details |
| MenuItemVariant | Size/option variations with independent pricing |

**Key Features:**
- Category-based organization
- Nutritional information and allergens
- Real-time availability control
- External platform channel mappings
- Daypart availability (breakfast, lunch, dinner windows)
- Ordering analytics (orderCount, recentOrderCount, lastOrderedAt)

---

### [Modifiers](./menu-order-management/modifiers.md)

Customization options for menu items.

| Schema | Description |
|--------|-------------|
| ModifierGroup | Groups of related options (e.g., "Size", "Add-ons") |
| ModifierOption | Individual options with price adjustments |
| ItemModifierBinding | Links modifier groups to menu items/sets |
| ModifierOptionOverride | Per-option overrides within bindings |
| AppliedModifier | Selected modifiers on order items |

**Key Features:**
- Flexible selection rules (min/max)
- Per-binding overrides
- Location-specific modifiers
- Version control via revision IDs

---

### [Menu Catalog](./menu-order-management/menu-catalog.md)

Read-optimized views for rendering complete menus.

| Schema | Description |
|--------|-------------|
| MenuItemCatalog | Extended item with variants and modifier groups |
| MenuCatalog | Category with its complete item list |
| BusinessMenuCatalog | Full menu catalog |

**Key Features:**
- Denormalized structure for fast rendering
- Pre-computed price ranges
- Hydrated modifier groups with merged overrides

---

### [Menu Sets](./menu-order-management/menu-sets.md)

Bundled menu items (combos, deals, packages).

| Schema | Description |
|--------|-------------|
| MenuSet | Bundle configuration with pricing mode |
| MenuSetItem | Items included in a set |
| MenuSetSelector | Dynamic item matching criteria |

**Key Features:**
- Fixed or sum-of-items pricing
- Explicit or selector-based targeting
- Variant-level specificity
- Optional and required items

---

### [Menu Orders](./menu-order-management/menu-orders.md)

Order management for food service.

| Schema | Description |
|--------|-------------|
| MenuOrder | Complete order with items and fulfillment |
| MenuOrderItem | Order line items with modifiers |
| MenuOrderItemBase | Item schema for order creation |

**Key Features:**
- Multi-type orders (dine-in, takeout, delivery)
- Item-level status tracking
- Payment processing integration
- External platform synchronization

---

### [Menu Pricing Rules](./menu-order-management/menu-pricing-rules.md)

Conditional pricing and promotions.

| Schema | Description |
|--------|-------------|
| MenuPricingRule | Pricing rule with conditions and discount |
| MenuPricingRuleCondition | Matching criteria for rule application |

**Key Features:**
- Time-based promotions (happy hour)
- Channel-specific pricing
- Customer group targeting
- Priority-based rule application

---

## Schema Relationships

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SCHEMA RELATIONSHIPS                               │
└─────────────────────────────────────────────────────────────────────────────┘

                              ┌─────────────────┐
                              │  MenuCategory   │
                              └────────┬────────┘
                                       │ 1:N
                                       ▼
                              ┌─────────────────┐
                              │BusinessMenuItem │◀──────────────┐
                              └────────┬────────┘               │
                                       │                        │
                          ┌────────────┼────────────┐           │
                          │ 1:N        │            │ N:M       │
                          ▼            │            ▼           │
               ┌─────────────────┐     │   ┌─────────────────┐  │
               │MenuItemVariant  │     │   │ItemModifierBinding│  │
               └─────────────────┘     │   └────────┬────────┘  │
                                       │            │ N:1       │
                                       │            ▼           │
                                       │   ┌─────────────────┐  │
                                       │   │ ModifierGroup   │  │
                                       │   └────────┬────────┘  │
                                       │            │ 1:N       │
                                       │            ▼           │
                                       │   ┌─────────────────┐  │
                                       │   │ ModifierOption  │  │
                                       │   └─────────────────┘  │
                                       │                        │
┌─────────────────┐                    │                        │
│    MenuSet      │────────────────────┼────────────────────────┘
│  (items[])      │                    │
└────────┬────────┘                    │
         │                             │
         │ references                  ▼
         │                    ┌─────────────────┐
         │                    │  MenuCatalog    │
         │                    │    (View)       │
         │                    └─────────────────┘
         │
         ▼
┌─────────────────┐           ┌─────────────────┐
│MenuPricingRule  │           │   MenuOrder     │
│ (condition)     │           │   (items[])     │
└─────────────────┘           └─────────────────┘
```

---

## External Integrations

The system supports integration with external delivery platforms via channel mappings:

### Supported Patterns

| Entity | Channel Mapping Field |
|--------|----------------------|
| MenuCategory | channelMappings (externalCategoryId) |
| BusinessMenuItem | channelMappings (externalMenuItemId) |
| MenuItemVariant | variantChannelMappings (externalVariantId) |
| ModifierGroup | channelMappings (externalModifierGroupId) |
| ModifierOption | channelMappings (externalModifierOptionId) |
| MenuSet | channelMappings (externalMenuSetId) |
| MenuPricingRule | channelMappings (externalPricingRuleId) |

### Channel Mapping Flow

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Internal Menu  │────▶│ Channel Mappings │────▶│ External Platform│
│     System      │     │   (per entity)   │     │  (DoorDash etc) │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

### External Reference (Orders)

For orders synced from external platforms:

```json
{
  "externalRef": {
    "externalId": "dd_order_12345",
    "source": "doordash",
    "url": "https://doordash.com/orders/dd_order_12345",
    "syncedAt": 1699900000
  }
}
```

---

## Best Practices

### Menu Structure

1. **Always create at least one variant** - Even single-option items should have a variant for consistent ordering flow.

2. **Set explicit display orders** - Ensures consistent menu presentation across platforms.

3. **Keep allergens updated** - Critical for customer safety and legal compliance.

4. **Use descriptive names** - Include size details in variant names (e.g., "Small (10\")" instead of just "Small").

### Modifiers

5. **Set appropriate selection limits** - Use `minSelection` and `maxSelection` to guide customer choices.

6. **Leverage binding overrides** - Apply context-specific rules at the binding level rather than duplicating modifier groups.

7. **Maintain version control** - Use `modifierRevisionId` for tracking changes across menu revisions.

### Orders

8. **Capture item names at order time** - Preserves accuracy even if menu items are renamed later.

9. **Track external references** - Essential for multi-platform order reconciliation.

10. **Set realistic prep times** - Helps with customer communication and kitchen scheduling.

### Pricing Rules

11. **Use effective dates for scheduled promotions** - Enables set-and-forget campaign management.

12. **Set appropriate priorities** - Higher priority rules take precedence when multiple rules match.

13. **Test rule combinations** - Ensure rules don't conflict or stack unexpectedly.

---

## Quick Reference

### Enums

| Enum | Values |
|------|--------|
| MenuOrderType | dine_in, takeout, delivery |
| OrderStatus | pending, confirmed, preparing, ready, out_for_delivery, completed, cancelled, returned |
| PaymentStatus | pending, paid, partial, failed, refunded |
| MenuSetPricingMode | FIXED, SUM_OF_ITEMS |
| MenuSetTargetingMode | EXPLICIT, SELECTOR |
| PricingChannel | ALL, DIRECT, ONLINE, PHONE, WALK_IN |

### Common Query Patterns

All domains support pagination with:
- `page` (integer) - Page number
- `pageSize` (integer) - Items per page
- `filters` (object) - Domain-specific filters
- `sorting` (object) - Field and direction
