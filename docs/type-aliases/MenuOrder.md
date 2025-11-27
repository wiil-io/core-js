[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / MenuOrder

# Type Alias: MenuOrder

```ts
type MenuOrder = {
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  id: string;
  organizationId: string;
  orderNumber?: string;
  type: MenuOrderType;
  status: OrderStatus;
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
     id: string;
     menuOrderId: string;
  }[];
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
  actualReadyTime?: number;
  specialInstructions?: string;
  allergies?: string[];
  tableNumber?: string;
  externalOrderId?: string;
  source: string;
  cancelReason?: string | null;
  notes?: string | null;
  serviceConversationConfigId?: string | null;
  deliveryAddress?: {
     street: string;
     city?: string;
     postalCode?: string;
  };
};
```

Defined in: src/core/business-mgt/menu.order.schema.ts:163

Menu order schema - for restaurants/food service.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="id"></a> `id` | `string` | - | src/core/business-mgt/menu.order.schema.ts:85 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/business-mgt/menu.order.schema.ts:86 |
| <a id="ordernumber"></a> `orderNumber?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:87 |
| <a id="type"></a> `type` | [`MenuOrderType`](../enumerations/MenuOrderType.md) | - | src/core/business-mgt/menu.order.schema.ts:89 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | - | src/core/business-mgt/menu.order.schema.ts:90 |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions?`: `string`; `customizations?`: \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[]; `status`: [`OrderStatus`](../enumerations/OrderStatus.md); `preparationTime?`: `number`; `notes?`: `string`; `id`: `string`; `menuOrderId`: `string`; \}[] | - | src/core/business-mgt/menu.order.schema.ts:91 |
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
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | - | src/core/business-mgt/menu.order.schema.ts:105 |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:108 |
| <a id="allergies"></a> `allergies?` | `string`[] | - | src/core/business-mgt/menu.order.schema.ts:109 |
| <a id="tablenumber"></a> `tableNumber?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:110 |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:113 |
| <a id="source"></a> `source` | `string` | - | src/core/business-mgt/menu.order.schema.ts:114 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:115 |
| <a id="notes"></a> `notes?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:116 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | - | src/core/business-mgt/menu.order.schema.ts:117 |
| <a id="deliveryaddress"></a> `deliveryAddress?` | \{ `street`: `string`; `city?`: `string`; `postalCode?`: `string`; \} | - | src/core/business-mgt/menu.order.schema.ts:118 |
| `deliveryAddress.street` | `string` | - | src/core/business-mgt/menu.order.schema.ts:119 |
| `deliveryAddress.city?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:120 |
| `deliveryAddress.postalCode?` | `string` | - | src/core/business-mgt/menu.order.schema.ts:121 |
