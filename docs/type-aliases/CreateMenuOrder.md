[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateMenuOrder

# Type Alias: CreateMenuOrder

```ts
type CreateMenuOrder = {
  version?: number;
  organizationId: string;
  type: MenuOrderType;
  status: OrderStatus;
  customerId: string;
  customer?: {
     customerId?: string;
     name: string;
     phone?: string;
     email?: string;
     address?: {
        street: string;
        street2?: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        deliveryInstructions?: string;
     };
  };
  pricing: {
     subtotal: number;
     tax: number;
     tip: number;
     shippingAmount: number;
     discount: number;
     total: number;
     currency: string;
  };
  paymentStatus: PaymentStatus;
  paymentMethod?: string;
  paymentReference?: string;
  orderDate: number;
  requestedTime?: number;
  estimatedReadyTime?: number;
  specialInstructions?: string;
  allergies?: string[];
  tableNumber?: string;
  externalOrderId?: string;
  source: string;
  notes?: string | null;
  serviceConversationConfigId?: string | null;
  deliveryAddress?: {
     street: string;
     city?: string;
     postalCode?: string;
  };
  items: {
     menuItemId: string;
     itemName: string;
     quantity: number;
     unitPrice: number;
     totalPrice: number;
     specialInstructions?: string;
     customizations?: {
        name: string;
        value: string;
        additionalCost: number;
     }[];
     status: OrderStatus;
     preparationTime?: number;
     notes?: string;
  }[];
  cancelReason?: string | null;
};
```

Defined in: src/core/business-mgt/menu.order.schema.ts:164

Schema for creating a new menu order.
Omits auto-generated fields and uses base items without IDs.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/business-mgt/menu.order.schema.ts:86 |
| <a id="type"></a> `type` | [`MenuOrderType`](../enumerations/MenuOrderType.md) | - | src/core/business-mgt/menu.order.schema.ts:89 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | - | src/core/business-mgt/menu.order.schema.ts:90 |
| <a id="customerid"></a> `customerId` | `string` | - | src/core/business-mgt/menu.order.schema.ts:92 |
| <a id="customer"></a> `customer?` | \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} | - | src/core/business-mgt/menu.order.schema.ts:93 |
| `customer.customerId?` | `string` | - | src/core/business-mgt/order.schema.ts:27 |
| `customer.name` | `string` | - | src/core/business-mgt/order.schema.ts:28 |
| `customer.phone?` | `string` | - | src/core/business-mgt/order.schema.ts:29 |
| `customer.email?` | `string` | - | src/core/business-mgt/order.schema.ts:30 |
| `customer.address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | `OrderAddress` | src/core/business-mgt/order.schema.ts:31 |
| `customer.address.street` | `string` | - | src/core/base.schema.ts:19 |
| `customer.address.street2?` | `string` | - | src/core/base.schema.ts:20 |
| `customer.address.city` | `string` | - | src/core/base.schema.ts:21 |
| `customer.address.state` | `string` | - | src/core/base.schema.ts:22 |
| `customer.address.postalCode` | `string` | - | src/core/base.schema.ts:23 |
| `customer.address.country` | `string` | - | src/core/base.schema.ts:24 |
| `customer.address.deliveryInstructions?` | `string` | - | src/core/business-mgt/order.schema.ts:13 |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | `OrderPricingSchema` | src/core/business-mgt/menu.order.schema.ts:94 |
| `pricing.subtotal` | `number` | - | src/core/business-mgt/order.schema.ts:47 |
| `pricing.tax` | `number` | - | src/core/business-mgt/order.schema.ts:48 |
| `pricing.tip` | `number` | - | src/core/business-mgt/order.schema.ts:49 |
| `pricing.shippingAmount` | `number` | - | src/core/business-mgt/order.schema.ts:50 |
| `pricing.discount` | `number` | - | src/core/business-mgt/order.schema.ts:51 |
| `pricing.total` | `number` | - | src/core/business-mgt/order.schema.ts:52 |
| `pricing.currency` | `string` | - | src/core/business-mgt/order.schema.ts:53 |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../enumerations/PaymentStatus.md) | - | src/core/business-mgt/menu.order.schema.ts:97 |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:98 |
| <a id="paymentreference"></a> `paymentReference?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:99 |
| <a id="orderdate"></a> `orderDate` | `number` | - | src/core/business-mgt/menu.order.schema.ts:102 |
| <a id="requestedtime"></a> `requestedTime?` | `number` | - | src/core/business-mgt/menu.order.schema.ts:103 |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | - | src/core/business-mgt/menu.order.schema.ts:104 |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:108 |
| <a id="allergies"></a> `allergies?` | `string`[] | - | src/core/business-mgt/menu.order.schema.ts:109 |
| <a id="tablenumber"></a> `tableNumber?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:110 |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:113 |
| <a id="source"></a> `source` | `string` | - | src/core/business-mgt/menu.order.schema.ts:114 |
| <a id="notes"></a> `notes?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:116 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:117 |
| <a id="deliveryaddress"></a> `deliveryAddress?` | \{ `street`: `string`; `city?`: `string`; `postalCode?`: `string`; \} | - | src/core/business-mgt/menu.order.schema.ts:118 |
| `deliveryAddress.street` | `string` | - | src/core/business-mgt/menu.order.schema.ts:119 |
| `deliveryAddress.city?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:120 |
| `deliveryAddress.postalCode?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:121 |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions?`: `string`; `customizations?`: \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[]; `status`: [`OrderStatus`](../enumerations/OrderStatus.md); `preparationTime?`: `number`; `notes?`: `string`; \}[] | - | src/core/business-mgt/menu.order.schema.ts:138 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:139 |
