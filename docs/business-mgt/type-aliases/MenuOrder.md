[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrder

# Type Alias: MenuOrder

```ts
type MenuOrder = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  orderNumber: string | null;
  type: MenuOrderType;
  status: OrderStatus;
  items: {
     menuItemId: string;
     itemName: string;
     quantity: number;
     unitPrice: number;
     totalPrice: number;
     specialInstructions: string | null;
     customizations:   | {
        name: string;
        value: string;
        additionalCost: number;
      }[]
        | null;
     status: OrderStatus;
     preparationTime: number | null;
     notes: string | null;
     id: string;
     menuOrderId: string;
  }[];
  customerId: string;
  customer:   | {
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
   }
     | null;
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
  paymentMethod: string | null;
  paymentReference: string | null;
  orderDate: number;
  requestedTime: number | null;
  estimatedReadyTime: number | null;
  actualReadyTime: number | null;
  specialInstructions: string | null;
  allergies: string[] | null;
  tableNumber: string | null;
  externalOrderId: string | null;
  source: string;
  cancelReason: string | null;
  notes: string | null;
  serviceConversationConfigId: string | null;
  deliveryAddress:   | {
     street: string;
     city: string | null;
     postalCode: string | null;
   }
     | null;
  tip: number | null;
};
```

Defined in: [src/core/business-mgt/menu.order.schema.ts:162](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L162)

Menu order schema - for restaurants/food service.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L10) |
| <a id="ordernumber"></a> `orderNumber` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:84](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L84) |
| <a id="type"></a> `type` | [`MenuOrderType`](../../type-definitions/enumerations/MenuOrderType.md) | [src/core/business-mgt/menu.order.schema.ts:86](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L86) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:87](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L87) |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions`: `string` \| `null`; `customizations`: \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `preparationTime`: `number` \| `null`; `notes`: `string` \| `null`; `id`: `string`; `menuOrderId`: `string`; \}[] | [src/core/business-mgt/menu.order.schema.ts:88](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L88) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/menu.order.schema.ts:89](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L89) |
| <a id="customer"></a> `customer` | \| \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} \| `null` | [src/core/business-mgt/menu.order.schema.ts:90](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L90) |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/menu.order.schema.ts:91](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L91) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:47](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L47) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:48](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L48) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:49](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L49) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:50](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L50) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:51](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L51) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:52](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L52) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:53](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/order.schema.ts#L53) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | [src/core/business-mgt/menu.order.schema.ts:94](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L94) |
| <a id="paymentmethod"></a> `paymentMethod` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:95](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L95) |
| <a id="paymentreference"></a> `paymentReference` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:96](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L96) |
| <a id="orderdate"></a> `orderDate` | `number` | [src/core/business-mgt/menu.order.schema.ts:99](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L99) |
| <a id="requestedtime"></a> `requestedTime` | `number` \| `null` | [src/core/business-mgt/menu.order.schema.ts:100](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L100) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime` | `number` \| `null` | [src/core/business-mgt/menu.order.schema.ts:101](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L101) |
| <a id="actualreadytime"></a> `actualReadyTime` | `number` \| `null` | [src/core/business-mgt/menu.order.schema.ts:102](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L102) |
| <a id="specialinstructions"></a> `specialInstructions` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:105](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L105) |
| <a id="allergies"></a> `allergies` | `string`[] \| `null` | [src/core/business-mgt/menu.order.schema.ts:106](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L106) |
| <a id="tablenumber"></a> `tableNumber` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:107](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L107) |
| <a id="externalorderid"></a> `externalOrderId` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:110](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L110) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/menu.order.schema.ts:111](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L111) |
| <a id="cancelreason"></a> `cancelReason` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:112](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L112) |
| <a id="notes"></a> `notes` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:113](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L113) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:114](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L114) |
| <a id="deliveryaddress"></a> `deliveryAddress` | \| \{ `street`: `string`; `city`: `string` \| `null`; `postalCode`: `string` \| `null`; \} \| `null` | [src/core/business-mgt/menu.order.schema.ts:115](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L115) |
| <a id="tip"></a> `tip` | `number` \| `null` | [src/core/business-mgt/menu.order.schema.ts:120](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/menu.order.schema.ts#L120) |
