# Product Orders Domain

This document provides comprehensive documentation for the Product Orders domain, covering retail/product sales order management.

## Table of Contents

1. [Overview](#overview)
2. [ProductOrder](#productorder)
3. [ProductOrderItem](#productorderitem)
4. [ProductOrderItemBase](#productorderitembase)
5. [Status Updates](#status-updates)
6. [Inventory Updates](#inventory-updates)
7. [Query Options](#query-options)
8. [Relationships](#relationships)
9. [Usage Examples](#usage-examples)

---

## Overview

The Product Orders domain handles order management for retail and product sales:

- **Multi-channel orders** - Web, marketplace, wholesale, direct
- **Shipping tracking** - Carrier, tracking numbers, delivery dates
- **Inventory integration** - Automatic stock deduction on fulfillment
- **External integrations** - Shopify, Amazon, etc.
- **Payment tracking** - Status, method, and references

### Key Features

- Complete pricing breakdown with tax, shipping, discounts
- Customer information with billing and shipping addresses
- Warehouse workflow support with status tracking
- External platform synchronization
- Multi-location and multi-channel support

---

## ProductOrder

Represents a complete product order with items, shipping, and fulfillment details.

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | auto-generated | Unique identifier |
| locationId | string | No | null | Business location/warehouse ID |
| channelId | string | No | null | Order channel (shopify, amazon, web) |
| terminalId | string | No | null | Terminal/register ID for POS integration |
| operatorId | string | No | null | Staff user ID who created order |
| orderNumber | string | No | null | Human-readable order number (e.g., "ORD-12345") |
| status | enum | No | "pending" | Order status |
| items | array | Yes | - | ProductOrderItem array (min 1 required) |
| customerId | string | Yes | - | Customer reference |
| pricing | object | Yes | - | Complete pricing breakdown |
| paymentStatus | enum | No | "pending" | Payment status |
| paymentMethod | string | No | null | Payment method used |
| paymentReference | string | No | null | External payment transaction ID |
| billingAddress | object | No | null | Billing address for invoicing |
| orderDate | number | Yes | - | Unix timestamp of order placement |
| requestedDeliveryDate | number | No | null | Customer's requested delivery date |
| shippedDate | number | No | null | Unix timestamp when order shipped |
| shippingAddress | object | No | null | Delivery address for shipment |
| deliveredDate | number | No | null | Unix timestamp when delivered |
| shippingMethod | string | No | null | Shipping service level |
| trackingNumber | string | No | null | Carrier tracking number |
| shippingCarrier | string | No | null | Shipping carrier name |
| externalRef | object | No | null | External system reference |
| source | string | No | "direct" | Order source channel |
| cancelReason | string | No | null | Reason if order is cancelled |
| notes | string | No | null | Internal staff notes |
| serviceConversationConfigId | string | No | null | AI conversation config reference |
| createdAt | number | No | auto-generated | Unix timestamp of creation |
| updatedAt | number | No | auto-generated | Unix timestamp of last update |

### Enums

**OrderStatus:**

| Value | Description |
|-------|-------------|
| pending | Order received, not started |
| confirmed | Order confirmed by business |
| preparing | Warehouse is picking/packing |
| ready | Order ready for shipment |
| out_for_delivery | Order with carrier |
| completed | Order delivered |
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

### Address Object (OrderAddress)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| street | string | Yes | Street address |
| city | string | No | City name |
| state | string | No | State/province |
| postalCode | string | No | Postal/ZIP code |
| country | string | No | Country |
| deliveryInstructions | string | No | Special delivery instructions |

### External Reference Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| externalId | string | Yes | Record ID in external system |
| source | string | Yes | Platform identifier (e.g., "shopify") |
| url | string (URL) | No | Direct link to record |
| syncedAt | number | No | Last sync timestamp |

### Create Schema

Omits: `id`, `orderNumber`, `createdAt`, `updatedAt`, `deliveredDate`, `shippedDate`, `serviceConversationConfigId`

Uses `ProductOrderItemBaseSchema` for items (without IDs).

### Update Schema

All fields optional except `id` (required).

### Validation Rules

| Rule | Error Message |
|------|---------------|
| items minimum 1 | "Order must have at least one item" |

### Example

```json
{
  "locationId": "warehouse_main_id",
  "channelId": "web",
  "customerId": "customer_123",
  "items": [
    {
      "productId": "headphones_id",
      "variantId": "variant_black_id",
      "itemName": "Wireless Headphones (Black)",
      "sku": "WH-BLK-001",
      "quantity": 1,
      "unitPrice": 149.99,
      "totalPrice": 149.99,
      "status": "pending"
    }
  ],
  "pricing": {
    "subtotal": 149.99,
    "tax": 12.00,
    "shippingAmount": 9.99,
    "discount": 0,
    "total": 171.98,
    "currency": "USD"
  },
  "orderDate": 1699900000,
  "requestedDeliveryDate": 1700073600,
  "shippingAddress": {
    "street": "123 Main Street",
    "city": "Springfield",
    "state": "IL",
    "postalCode": "62701",
    "country": "US",
    "deliveryInstructions": "Leave at front door"
  },
  "billingAddress": {
    "street": "123 Main Street",
    "city": "Springfield",
    "state": "IL",
    "postalCode": "62701",
    "country": "US"
  },
  "shippingMethod": "Standard",
  "source": "web"
}
```

---

## ProductOrderItem

Order item with IDs for existing/persisted items.

### Schema Definition

Inherits all fields from `ProductOrderItemBase` plus:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique item identifier |
| productOrderId | string | Yes | Parent order reference |

---

## ProductOrderItemBase

Base order item schema without IDs (used for creation).

### Schema Definition

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| productId | string | Yes | - | Product reference |
| variantId | string | No | null | Product variant reference |
| itemName | string | Yes | - | Product name captured at order time |
| sku | string | No | null | SKU captured at order time |
| quantity | integer | Yes | - | Quantity ordered (positive) |
| unitPrice | number | Yes | - | Price per unit at order time |
| totalPrice | number | Yes | - | Total: unitPrice × quantity |
| selectedVariant | string | No | null | Selected variant specification |
| warrantyInfo | string | No | null | Warranty terms captured at purchase |
| status | enum | No | "pending" | Item fulfillment status |
| notes | string | No | null | Internal notes for item |

### Example

```json
{
  "productId": "laptop_id",
  "variantId": "variant_16gb_512ssd_id",
  "itemName": "Pro Laptop (16GB RAM, 512GB SSD)",
  "sku": "LAPTOP-PRO-16-512",
  "quantity": 1,
  "unitPrice": 1299.99,
  "totalPrice": 1299.99,
  "selectedVariant": "16GB RAM / 512GB SSD",
  "warrantyInfo": "2-year manufacturer warranty",
  "status": "pending"
}
```

---

## Status Updates

### UpdateProductOrderStatus Schema

Quick status update for order workflow.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | string | Yes | - | Order ID to update |
| status | enum | Yes | - | New order status |
| shippedDate | number | No | null | Set when status transitions to shipped |
| deliveredDate | number | No | null | Set when status transitions to delivered |
| trackingNumber | string | No | null | Carrier tracking number |

### Example

```json
{
  "id": "order_12345",
  "status": "out_for_delivery",
  "shippedDate": 1699986400,
  "trackingNumber": "1Z999AA10123456784"
}
```

### Status Workflow

```
pending → confirmed → preparing → ready → out_for_delivery → completed
                                    │
                                    │ [If carrier pickup]
                                    │
                                    ▼
                               out_for_delivery → completed

Any status → cancelled (with cancelReason)
completed → returned (with cancelReason for return reason)
```

---

## Inventory Updates

### OrderInventoryUpdate Schema

Defines inventory adjustments triggered by order fulfillment.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | Yes | ProductOrder that triggered update |
| inventoryAdjustments | array | Yes | Array of inventory deductions |

### Inventory Adjustment Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | Yes | Product to deduct from |
| quantityUsed | number | Yes | Quantity to deduct |
| reason | literal | Yes | Always "order_fulfillment" |

### Example

```json
{
  "orderId": "order_12345",
  "inventoryAdjustments": [
    {
      "productId": "headphones_id",
      "quantityUsed": 1,
      "reason": "order_fulfillment"
    },
    {
      "productId": "charging_cable_id",
      "quantityUsed": 2,
      "reason": "order_fulfillment"
    }
  ]
}
```

### Inventory Deduction Timing

Inventory is typically deducted when:
- Order status transitions to `preparing` (reservation)
- Order status transitions to `out_for_delivery` (committed)
- Or upon specific business rules

---

## Query Options

### Filters

| Field | Type | Description |
|-------|------|-------------|
| search | string | Text search |
| locationId | string | Filter by warehouse/location |
| channelId | string | Filter by order channel |
| terminalId | string | Filter by terminal |
| operatorId | string | Filter by staff member |
| status | array | Filter by order statuses |
| paymentStatus | array | Filter by payment statuses |
| customerId | string | Filter by customer |
| shippingMethod | string | Filter by shipping method |
| source | string | Filter by order source |
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
    "locationId": "warehouse_main_id",
    "status": ["pending", "confirmed", "preparing"],
    "source": "web",
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
│                     PRODUCT ORDER STRUCTURE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────┐                                           │
│   │  ProductOrder   │                                           │
│   │                 │                                           │
│   │  - locationId ──────────▶ Location/Warehouse                │
│   │  - customerId ──────────▶ Customer                          │
│   │  - channelId             (order source)                     │
│   │  - externalRef ─────────▶ External System                   │
│   │  - shippingCarrier       (carrier integration)              │
│   └────────┬────────┘                                           │
│            │                                                     │
│            │ 1:N                                                 │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │ProductOrderItem │                                           │
│   │                 │                                           │
│   │  - productId ───────────▶ BusinessProduct                   │
│   │  - variantId ───────────▶ ProductVariant                    │
│   │  - itemName              (captured at order time)           │
│   │  - sku                   (captured at order time)           │
│   │  - quantity, unitPrice   │                                  │
│   │  - status                (per-item tracking)                │
│   └─────────────────┘                                           │
│            │                                                     │
│            │ triggers                                            │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │InventoryUpdate  │                                           │
│   │                 │                                           │
│   │  - productId ───────────▶ Product.stockQuantity             │
│   │  - quantityUsed          (deducted from stock)              │
│   │  - reason: "order_fulfillment"                              │
│   └─────────────────┘                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Usage Examples

### Create Web Order

```json
{
  "locationId": "warehouse_main_id",
  "channelId": "web",
  "source": "web",
  "customerId": "customer_web_123",
  "items": [
    {
      "productId": "tshirt_id",
      "variantId": "variant_m_blue_id",
      "itemName": "Classic T-Shirt (Medium, Blue)",
      "sku": "TSHIRT-M-BLU",
      "quantity": 2,
      "unitPrice": 29.99,
      "totalPrice": 59.98
    }
  ],
  "pricing": {
    "subtotal": 59.98,
    "tax": 4.80,
    "shippingAmount": 5.99,
    "total": 70.77,
    "currency": "USD"
  },
  "orderDate": 1699900000,
  "shippingAddress": {
    "street": "456 Oak Avenue",
    "city": "Portland",
    "state": "OR",
    "postalCode": "97201",
    "country": "US"
  },
  "shippingMethod": "Standard"
}
```

### Create Order from External Platform

```json
{
  "locationId": "warehouse_main_id",
  "channelId": "shopify",
  "source": "marketplace",
  "customerId": "customer_external_id",
  "externalRef": {
    "externalId": "shopify_order_789",
    "source": "shopify",
    "url": "https://mystore.myshopify.com/admin/orders/789",
    "syncedAt": 1699900000
  },
  "items": [
    {
      "productId": "headphones_id",
      "variantId": "variant_wireless_id",
      "itemName": "Wireless Headphones",
      "sku": "WH-001",
      "quantity": 1,
      "unitPrice": 149.99,
      "totalPrice": 149.99
    }
  ],
  "pricing": {
    "subtotal": 149.99,
    "tax": 12.00,
    "shippingAmount": 0,
    "total": 161.99,
    "currency": "USD"
  },
  "orderDate": 1699900000,
  "shippingAddress": {
    "street": "789 Pine Street",
    "city": "Seattle",
    "state": "WA",
    "postalCode": "98101",
    "country": "US"
  },
  "shippingMethod": "Free Shipping"
}
```

### Update Order to Shipped

```json
{
  "id": "order_12345",
  "status": "out_for_delivery",
  "shippedDate": 1699986400,
  "trackingNumber": "1Z999AA10123456784",
  "shippingCarrier": "UPS"
}
```

### Mark Order Delivered

```json
{
  "id": "order_12345",
  "status": "completed",
  "deliveredDate": 1700159200
}
```

---

## Best Practices

1. **Capture product details at order time** - Store `itemName` and `sku` to preserve accuracy even if products change.

2. **Use appropriate order sources** - Differentiate between "web", "marketplace", "wholesale", "direct" for attribution.

3. **Track external references** - Essential for multi-platform order reconciliation and support.

4. **Include both addresses** - Shipping and billing addresses may differ; capture both.

5. **Set shipping method** - Affects delivery timeframe and customer expectations.

6. **Update tracking information** - Customers rely on tracking numbers for delivery visibility.

7. **Handle cancellations properly** - Always include `cancelReason` when cancelling orders.

8. **Validate inventory before confirmation** - Check stock availability before moving to `confirmed` status.

9. **Consider partial shipments** - For multi-item orders, track status at item level if items ship separately.

10. **Integrate with carriers** - Use standard carrier codes (UPS, FedEx, USPS) for tracking integration.
