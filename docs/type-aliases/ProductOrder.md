[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ProductOrder

# Type Alias: ProductOrder

```ts
type ProductOrder = {
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  id: string;
  organizationId: string;
  orderNumber?: string;
  status: OrderStatus;
  items: {
     productId: string;
     itemName: string;
     sku?: string;
     quantity: number;
     unitPrice: number;
     totalPrice: number;
     selectedVariant?: string;
     warrantyInfo?: string;
     status: OrderStatus;
     notes?: string;
     id: string;
     productOrderId: string;
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
  billingAddress?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
  orderDate: number;
  requestedDeliveryDate?: number;
  shippedDate?: number;
  shippingAddress?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
  deliveredDate?: number;
  shippingMethod?: string;
  trackingNumber?: string;
  shippingCarrier?: string;
  externalOrderId?: string;
  source: string;
  cancelReason?: string | null;
  notes?: string | null;
  serviceConversationConfigId?: string | null;
};
```

Defined in: src/core/business-mgt/product-order.schema.ts:170

Product order schema - for retail/product sales.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="id"></a> `id` | `string` | - | src/core/business-mgt/product-order.schema.ts:81 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/business-mgt/product-order.schema.ts:82 |
| <a id="ordernumber"></a> `orderNumber?` | `string` | - | src/core/business-mgt/product-order.schema.ts:83 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | - | src/core/business-mgt/product-order.schema.ts:84 |
| <a id="items"></a> `items` | \{ `productId`: `string`; `itemName`: `string`; `sku?`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `selectedVariant?`: `string`; `warrantyInfo?`: `string`; `status`: [`OrderStatus`](../enumerations/OrderStatus.md); `notes?`: `string`; `id`: `string`; `productOrderId`: `string`; \}[] | - | src/core/business-mgt/product-order.schema.ts:85 |
| <a id="customerid"></a> `customerId` | `string` | - | src/core/business-mgt/product-order.schema.ts:86 |
| <a id="customer"></a> `customer?` | \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} | - | src/core/business-mgt/product-order.schema.ts:88 |
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
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | `OrderPricingSchema` | src/core/business-mgt/product-order.schema.ts:89 |
| `pricing.subtotal` | `number` | - | src/core/business-mgt/order.schema.ts:47 |
| `pricing.tax` | `number` | - | src/core/business-mgt/order.schema.ts:48 |
| `pricing.tip` | `number` | - | src/core/business-mgt/order.schema.ts:49 |
| `pricing.shippingAmount` | `number` | - | src/core/business-mgt/order.schema.ts:50 |
| `pricing.discount` | `number` | - | src/core/business-mgt/order.schema.ts:51 |
| `pricing.total` | `number` | - | src/core/business-mgt/order.schema.ts:52 |
| `pricing.currency` | `string` | - | src/core/business-mgt/order.schema.ts:53 |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../enumerations/PaymentStatus.md) | - | src/core/business-mgt/product-order.schema.ts:92 |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | - | src/core/business-mgt/product-order.schema.ts:93 |
| <a id="paymentreference"></a> `paymentReference?` | `string` | - | src/core/business-mgt/product-order.schema.ts:94 |
| <a id="billingaddress"></a> `billingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | - | src/core/business-mgt/product-order.schema.ts:95 |
| `billingAddress.street` | `string` | - | src/core/base.schema.ts:19 |
| `billingAddress.street2?` | `string` | - | src/core/base.schema.ts:20 |
| `billingAddress.city` | `string` | - | src/core/base.schema.ts:21 |
| `billingAddress.state` | `string` | - | src/core/base.schema.ts:22 |
| `billingAddress.postalCode` | `string` | - | src/core/base.schema.ts:23 |
| `billingAddress.country` | `string` | - | src/core/base.schema.ts:24 |
| `billingAddress.deliveryInstructions?` | `string` | - | src/core/business-mgt/order.schema.ts:13 |
| <a id="orderdate"></a> `orderDate` | `number` | - | src/core/business-mgt/product-order.schema.ts:98 |
| <a id="requesteddeliverydate"></a> `requestedDeliveryDate?` | `number` | - | src/core/business-mgt/product-order.schema.ts:99 |
| <a id="shippeddate"></a> `shippedDate?` | `number` | - | src/core/business-mgt/product-order.schema.ts:100 |
| <a id="shippingaddress"></a> `shippingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | - | src/core/business-mgt/product-order.schema.ts:101 |
| `shippingAddress.street` | `string` | - | src/core/base.schema.ts:19 |
| `shippingAddress.street2?` | `string` | - | src/core/base.schema.ts:20 |
| `shippingAddress.city` | `string` | - | src/core/base.schema.ts:21 |
| `shippingAddress.state` | `string` | - | src/core/base.schema.ts:22 |
| `shippingAddress.postalCode` | `string` | - | src/core/base.schema.ts:23 |
| `shippingAddress.country` | `string` | - | src/core/base.schema.ts:24 |
| `shippingAddress.deliveryInstructions?` | `string` | - | src/core/business-mgt/order.schema.ts:13 |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | - | src/core/business-mgt/product-order.schema.ts:102 |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | - | src/core/business-mgt/product-order.schema.ts:105 |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | - | src/core/business-mgt/product-order.schema.ts:106 |
| <a id="shippingcarrier"></a> `shippingCarrier?` | `string` | - | src/core/business-mgt/product-order.schema.ts:107 |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | - | src/core/business-mgt/product-order.schema.ts:110 |
| <a id="source"></a> `source` | `string` | - | src/core/business-mgt/product-order.schema.ts:111 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | - | src/core/business-mgt/product-order.schema.ts:112 |
| <a id="notes"></a> `notes?` | `string` \| `null` | - | src/core/business-mgt/product-order.schema.ts:113 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | - | src/core/business-mgt/product-order.schema.ts:114 |
