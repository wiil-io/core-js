[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.37**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductOrder

# Type Alias: ProductOrder

```ts
type ProductOrder = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/business-mgt/product-order.schema.ts:167](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L167)

Product order schema - for retail/product sales.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L10) |
| <a id="ordernumber"></a> `orderNumber?` | `string` | [src/core/business-mgt/product-order.schema.ts:79](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L79) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-order.schema.ts:80](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L80) |
| <a id="items"></a> `items` | \{ `productId`: `string`; `itemName`: `string`; `sku?`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `selectedVariant?`: `string`; `warrantyInfo?`: `string`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `notes?`: `string`; `id`: `string`; `productOrderId`: `string`; \}[] | [src/core/business-mgt/product-order.schema.ts:81](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L81) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/product-order.schema.ts:82](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L82) |
| <a id="customer"></a> `customer?` | \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} | [src/core/business-mgt/product-order.schema.ts:84](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L84) |
| `customer.customerId?` | `string` | [src/core/business-mgt/order.schema.ts:27](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L27) |
| `customer.name` | `string` | [src/core/business-mgt/order.schema.ts:28](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L28) |
| `customer.phone?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L29) |
| `customer.email?` | `string` | [src/core/business-mgt/order.schema.ts:30](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L30) |
| `customer.address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/order.schema.ts:31](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L31) |
| `customer.address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L18) |
| `customer.address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L19) |
| `customer.address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L20) |
| `customer.address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L21) |
| `customer.address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L22) |
| `customer.address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L23) |
| `customer.address.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L13) |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:85](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L85) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:47](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L47) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:48](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L48) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:49](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L49) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:50](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L50) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:51](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L51) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:52](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L52) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:53](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L53) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | [src/core/business-mgt/product-order.schema.ts:88](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L88) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | [src/core/business-mgt/product-order.schema.ts:89](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L89) |
| <a id="paymentreference"></a> `paymentReference?` | `string` | [src/core/business-mgt/product-order.schema.ts:90](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L90) |
| <a id="billingaddress"></a> `billingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:91](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L91) |
| `billingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L18) |
| `billingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L19) |
| `billingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L20) |
| `billingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L21) |
| `billingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L22) |
| `billingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L23) |
| `billingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L13) |
| <a id="orderdate"></a> `orderDate` | `number` | [src/core/business-mgt/product-order.schema.ts:94](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L94) |
| <a id="requesteddeliverydate"></a> `requestedDeliveryDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:95](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L95) |
| <a id="shippeddate"></a> `shippedDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:96](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L96) |
| <a id="shippingaddress"></a> `shippingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:97](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L97) |
| `shippingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L18) |
| `shippingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L19) |
| `shippingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L20) |
| `shippingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L21) |
| `shippingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L22) |
| `shippingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L23) |
| `shippingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/order.schema.ts#L13) |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:98](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L98) |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | [src/core/business-mgt/product-order.schema.ts:101](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L101) |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | [src/core/business-mgt/product-order.schema.ts:102](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L102) |
| <a id="shippingcarrier"></a> `shippingCarrier?` | `string` | [src/core/business-mgt/product-order.schema.ts:103](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L103) |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | [src/core/business-mgt/product-order.schema.ts:106](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L106) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/product-order.schema.ts:107](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L107) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/product-order.schema.ts:108](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L108) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/product-order.schema.ts:109](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L109) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/product-order.schema.ts:110](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/business-mgt/product-order.schema.ts#L110) |
