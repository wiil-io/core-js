# Menu Orders Domain

This document provides comprehensive documentation for the Menu Orders domain, covering restaurant/food service order management.

## Table of Contents

1. [Overview](#overview)
2. [MenuOrder](#menuorder)
3. [MenuOrderItem](#menuorderitem)
4. [MenuOrderItemBase](#menuorderitembase)
5. [Status Updates](#status-updates)
6. [Pricing Preview](#pricing-preview)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Usage Examples](#usage-examples)

---

## Overview

The Menu Orders domain handles order management for restaurants and food service businesses:

- **Multi-type orders** - Dine-in, takeout, delivery
- **Item-level tracking** - Per-item status and preparation
- **Modifier support** - Applied modifiers with pricing
- **External integrations** - DoorDash, Uber Eats, etc.
- **Payment tracking** - Status, method, and references

### Key Features

- Complete pricing breakdown with tax, tip, discounts
- Customer information with delivery addresses
- Kitchen workflow support with preparation times
- External platform synchronization
- Multi-location and multi-channel support

---

## MenuOrder

Represents a complete food service order with items, pricing, and fulfillment details.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | null | Business location ID |
| channelId | string | No | null | Order channel (doordash, uber-eats, web, app) |
| terminalId | string | No | null | Terminal/register ID for POS integration |
| operatorId | string | No | null | Staff user ID who created order |
| orderNumber | string | No | null | Human-readable order number (e.g., "#1234") |
| type | enum | Yes | - | Order type: DINE_IN, TAKEOUT, DELIVERY |
| status | enum | No | "pending" | Order status |
| items | array | Yes | - | MenuOrderItem array (min 1 required) |
| customerId | string | Yes | - | Customer reference |
| customer | object | No | null | Populated customer information |
| pricing | object | Yes | - | Complete pricing breakdown |
| paymentStatus | enum | No | "pending" | Payment status |
| paymentMethod | string | No | null | Payment method used |
| paymentReference | string | No | null | External payment transaction ID |
| orderDate | number | Yes | - | Unix timestamp of order placement |
| requestedTime | number | No | null | Requested pickup/delivery time |
| estimatedReadyTime | number | No | null | Kitchen's estimated ready time |
| actualReadyTime | number | No | null | Actual completion time |
| specialInstructions | string | No | null | Order-level instructions |
| allergies | array | No | null | Customer allergy information |
| tableNumber | string | No | null | Table number for dine-in |
| externalRef | object | No | null | External system reference |
| cancelReason | string | No | null | Reason if order is cancelled |
| notes | string | No | null | Internal staff notes |
| serviceConversationConfigId | string | No | null | AI conversation config reference |
| deliveryAddress | object | No | null | Delivery address for DELIVERY orders |
| shippingAddressId | string | No | null | Reference to saved shipping address |
| tip | number | No | null | Tip amount for the order |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Enums

**MenuOrderType:**
| Value | Description |
|-------|-------------|
| dine_in | Customer eats at restaurant |
| takeout | Customer picks up order |
| delivery | Order delivered to customer |

**OrderStatus:**
| Value | Description |
|-------|-------------|
| pending | Order received, not started |
| confirmed | Order confirmed by restaurant |
| preparing | Kitchen is preparing order |
| ready | Order ready for pickup/delivery |
| out_for_delivery | Order with delivery driver |
| completed | Order fulfilled |
| cancelled | Order cancelled |
| returned | Order returned |

**PaymentStatus:**
| Value | Description |
|-------|-------------|
| pending | Payment not processed |
| paid | Payment complete |
| partial | Partial payment received |
| failed | Payment failed |
| refunded | Payment refunded |

### Delivery Address Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| street | string | Yes | Street address |
| city | string | No | City name |
| postalCode | string | No | Postal/ZIP code |

### External Reference Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| externalId | string | Yes | Record ID in external system |
| source | string | Yes | Platform identifier (e.g., "doordash") |
| url | string (URL) | No | Direct link to record |
| syncedAt | number | No | Last sync timestamp |

### Create Schema

Omits: `id`, `orderNumber`, `createdAt`, `updatedAt`, `actualReadyTime`, `serviceConversationConfigId`

Uses `MenuOrderItemBaseSchema` for items (without IDs).

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| items minimum 1 | "Order must have at least one item" |

### Example

```json
{
  "locationId": "location_main_id",
  "channelId": "web",
  "type": "delivery",
  "customerId": "customer_123",
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-123-4567"
  },
  "items": [
    {
      "menuItemId": "pizza_margherita_id",
      "variantId": "variant_large_id",
      "itemName": "Margherita Pizza (Large)",
      "quantity": 2,
      "unitPrice": 19.99,
      "totalPrice": 39.98,
      "modifiers": [
        { "groupName": "Toppings", "optionName": "Extra Cheese", "priceDelta": 2.00 }
      ]
    }
  ],
  "pricing": {
    "subtotal": 43.98,
    "tax": 3.52,
    "deliveryFee": 4.99,
    "tip": 5.00,
    "total": 57.49
  },
  "orderDate": 1699900000,
  "requestedTime": 1699903600,
  "deliveryAddress": {
    "street": "123 Main Street",
    "city": "Springfield",
    "postalCode": "12345"
  },
  "specialInstructions": "Ring doorbell, leave at door"
}
```

---

## MenuOrderItem

Order item with IDs for existing/persisted items.

### Schema Definition

Inherits all fields from `MenuOrderItemBase` plus:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique item identifier |
| menuOrderId | string | Yes | Parent order reference |

---

## MenuOrderItemBase

Base order item schema without IDs (used for creation).

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| menuItemId | string | Yes | - | Menu item reference |
| variantId | string | Yes | - | Menu item variant reference |
| menuSetId | string | No | null | Menu set reference if from a set |
| itemName | string | Yes | - | Item name captured at order time |
| quantity | integer | Yes | - | Quantity ordered (positive) |
| unitPrice | number | Yes | - | Price per unit at order time |
| totalPrice | number | Yes | - | Total: unitPrice × quantity + modifiers |
| specialInstructions | string | No | null | Item-specific preparation requests |
| customizations | array | No | null | Item customizations with pricing |
| modifiers | array | No | null | Applied modifiers (AppliedModifier[]) |
| status | enum | No | "pending" | Item preparation status |
| preparationTime | integer | No | null | Estimated prep time in minutes |
| notes | string | No | null | Internal staff notes for item |

### Customization Object

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| name | string | Yes | - | Customization name |
| value | string | Yes | - | Selected value |
| additionalCost | number | No | 0 | Extra charge |

### Example

```json
{
  "menuItemId": "burger_classic_id",
  "variantId": "variant_double_id",
  "itemName": "Classic Burger (Double)",
  "quantity": 1,
  "unitPrice": 14.99,
  "totalPrice": 18.49,
  "specialInstructions": "Medium-well, no pickles",
  "customizations": [
    { "name": "Add Bacon", "value": "Yes", "additionalCost": 2.00 },
    { "name": "Cheese Type", "value": "Cheddar", "additionalCost": 0 }
  ],
  "modifiers": [
    {
      "modifierGroupId": "sides_group_id",
      "modifierOptionId": "option_fries_id",
      "groupName": "Choice of Side",
      "optionName": "French Fries",
      "quantity": 1,
      "priceDelta": 1.50
    }
  ],
  "status": "pending",
  "preparationTime": 12
}
```

---

## Status Updates

### UpdateMenuOrderStatus Schema

Quick status update for order workflow.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | - | Order ID to update |
| status | enum | Yes | - | New order status |
| estimatedReadyTime | number | No | null | Updated ready time estimate |
| actualReadyTime | number | No | null | Actual completion time |

### Example

```json
{
  "id": "order_12345",
  "status": "ready",
  "actualReadyTime": 1699901800
}
```

### Status Workflow

```
pending → confirmed → preparing → ready → completed
                                    │
                              [DELIVERY]
                                    │
                                    ▼
                           out_for_delivery → completed

Any status → cancelled (with cancelReason)
```

---

## Pricing Preview

### MenuOrderPricingPreview Schema

Validates and previews order pricing before submission.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| success | boolean | Yes | Whether calculation succeeded |
| items | array | Yes | Items with calculated pricing |
| pricing | object | No | Calculated pricing breakdown (null if failed) |
| errors | array | Yes | List of errors encountered |
| warnings | array | Yes | List of warnings (e.g., price changes) |

### Example

```json
{
  "success": true,
  "items": [
    {
      "menuItemId": "pizza_margherita_id",
      "variantId": "variant_large_id",
      "itemName": "Margherita Pizza (Large)",
      "quantity": 1,
      "unitPrice": 19.99,
      "totalPrice": 21.99,
      "modifiers": [
        {
          "modifierGroupId": "mod_group_toppings_id",
          "modifierOptionId": "mod_extra_cheese_id",
          "name": "Extra Cheese",
          "price": 2.00
        }
      ]
    }
  ],
  "pricing": {
    "subtotal": 21.99,
    "tax": 1.76,
    "total": 23.75
  },
  "errors": [],
  "warnings": ["Item 'Garlic Bread' price changed from $4.99 to $5.49"]
}
```

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search |
| locationId | string | Filter by location |
| channelId | string | Filter by order channel |
| terminalId | string | Filter by terminal |
| operatorId | string | Filter by staff member |
| type | array | Filter by order types |
| status | array | Filter by order statuses |
| paymentStatus | array | Filter by payment statuses |
| customerId | string | Filter by customer |
| tableNumber | string | Filter by table |
| externalSource | string | Filter by external platform |
| dateRange | object | Filter by date range { start, end } |

### Sorting

**Fields:** `orderDate`, `createdAt`, `totalAmount`

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
  "pageSize": 50,
  "filters": {
    "locationId": "location_main_id",
    "status": ["pending", "confirmed", "preparing"],
    "type": ["dine_in", "takeout"],
    "dateRange": {
      "start": 1699833600,
      "end": 1699920000
    }
  },
  "sorting": {
    "field": "orderDate",
    "direction": "desc"
  }
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                      MENU ORDER STRUCTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │    MenuOrder    │                                           │
│   │                 │                                           │
│   │  - locationId ──────────▶ Location                          │
│   │  - customerId ──────────▶ Customer                          │
│   │  - channelId             (external platform)                │
│   │  - externalRef ─────────▶ External System                   │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N                                                 │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ MenuOrderItem   │                                           │
│   │                 │                                           │
│   │  - menuItemId ──────────▶ BusinessMenuItem                  │
│   │  - variantId ───────────▶ MenuItemVariant                   │
│   │  - menuSetId ───────────▶ MenuSet (optional)                │
│   │  - modifiers[]  │                                           │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N                                                 │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ AppliedModifier │                                           │
│   │                 │                                           │
│   │  - modifierGroupId ─────▶ ModifierGroup                     │
│   │  - modifierOptionId ────▶ ModifierOption                    │
│   │  - groupName, optionName (preserved at order time)          │
│   │  - priceDelta            (captured pricing)                 │
│   └─────────────────┘                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Create Dine-In Order

```json
{
  "locationId": "location_main_id",
  "type": "dine_in",
  "tableNumber": "12",
  "operatorId": "staff_server_id",
  "customerId": "customer_walkin_id",
  "items": [
    {
      "menuItemId": "steak_ribeye_id",
      "variantId": "variant_12oz_id",
      "itemName": "Ribeye Steak (12oz)",
      "quantity": 1,
      "unitPrice": 34.99,
      "totalPrice": 34.99,
      "specialInstructions": "Medium-rare"
    }
  ],
  "pricing": {
    "subtotal": 34.99,
    "tax": 2.80,
    "total": 37.79
  },
  "orderDate": 1699900000
}
```

### Create Delivery Order from External Platform

```json
{
  "locationId": "location_main_id",
  "channelId": "doordash",
  "type": "delivery",
  "customerId": "customer_external_id",
  "externalRef": {
    "externalId": "dd_order_789",
    "source": "doordash",
    "url": "https://doordash.com/orders/dd_order_789"
  },
  "items": [
    {
      "menuItemId": "pizza_margherita_id",
      "quantity": 1,
      "unitPrice": 19.99,
      "totalPrice": 19.99
    }
  ],
  "pricing": {
    "subtotal": 19.99,
    "tax": 1.60,
    "deliveryFee": 3.99,
    "total": 25.58
  },
  "orderDate": 1699900000,
  "deliveryAddress": {
    "street": "456 Oak Avenue",
    "city": "Springfield",
    "postalCode": "12345"
  }
}
```

### Update Order Status

```json
{
  "id": "order_12345",
  "status": "preparing",
  "estimatedReadyTime": 1699901200
}
```

---

## Best Practices

1. **Capture item names at order time** - Preserves accuracy even if menu items are renamed.

2. **Use pricing preview** - Validate pricing before order submission to catch issues.

3. **Track external references** - Essential for multi-platform order reconciliation.

4. **Set realistic prep times** - Helps with customer communication and kitchen scheduling.

5. **Record allergies clearly** - Critical for customer safety in food preparation.

6. **Use appropriate order types** - Determines workflow (e.g., delivery needs address).
