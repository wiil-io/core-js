[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.26**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductOrder

# Type Alias: CreateProductOrder

```ts
type CreateProductOrder = {
  status: OrderStatus;
  customerId: string;
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
  shippingAddress?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
  shippingMethod?: string;
  trackingNumber?: string;
  shippingCarrier?: string;
  externalOrderId?: string;
  source: string;
  notes?: string | null;
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
  }[];
};
```

Defined in: [src/core/business-mgt/product-order.schema.ts:170](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L170)

Schema for creating a new product order.
Omits auto-generated fields and uses base items without IDs.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-order.schema.ts:82](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L82) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/product-order.schema.ts:84](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L84) |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:87](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L87) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:47](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L47) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:48](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L48) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:49](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L49) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:50](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L50) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:51](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L51) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:52](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L52) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:53](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L53) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | [src/core/business-mgt/product-order.schema.ts:90](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L90) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | [src/core/business-mgt/product-order.schema.ts:91](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L91) |
| <a id="paymentreference"></a> `paymentReference?` | `string` | [src/core/business-mgt/product-order.schema.ts:92](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L92) |
| <a id="billingaddress"></a> `billingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:93](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L93) |
| `billingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L18) |
| `billingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L19) |
| `billingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L20) |
| `billingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L21) |
| `billingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L22) |
| `billingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L23) |
| `billingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L13) |
| <a id="orderdate"></a> `orderDate` | `number` | [src/core/business-mgt/product-order.schema.ts:96](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L96) |
| <a id="requesteddeliverydate"></a> `requestedDeliveryDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:97](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L97) |
| <a id="shippingaddress"></a> `shippingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-order.schema.ts:99](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L99) |
| `shippingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L18) |
| `shippingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L19) |
| `shippingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L20) |
| `shippingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L21) |
| `shippingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L22) |
| `shippingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L23) |
| `shippingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/order.schema.ts#L13) |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | [src/core/business-mgt/product-order.schema.ts:103](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L103) |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | [src/core/business-mgt/product-order.schema.ts:104](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L104) |
| <a id="shippingcarrier"></a> `shippingCarrier?` | `string` | [src/core/business-mgt/product-order.schema.ts:105](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L105) |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | [src/core/business-mgt/product-order.schema.ts:108](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L108) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/product-order.schema.ts:109](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L109) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/product-order.schema.ts:111](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L111) |
| <a id="items"></a> `items` | \{ `productId`: `string`; `itemName`: `string`; `sku?`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `selectedVariant?`: `string`; `warrantyInfo?`: `string`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `notes?`: `string`; \}[] | [src/core/business-mgt/product-order.schema.ts:131](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/product-order.schema.ts#L131) |
