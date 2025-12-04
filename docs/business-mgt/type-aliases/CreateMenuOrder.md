[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.20**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateMenuOrder

# Type Alias: CreateMenuOrder

```ts
type CreateMenuOrder = {
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

Defined in: [src/core/business-mgt/menu.order.schema.ts:163](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L163)

Schema for creating a new menu order.
Omits auto-generated fields and uses base items without IDs.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="type"></a> `type` | [`MenuOrderType`](../../type-definitions/enumerations/MenuOrderType.md) | [src/core/business-mgt/menu.order.schema.ts:87](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L87) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:88](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L88) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/menu.order.schema.ts:90](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L90) |
| <a id="customer"></a> `customer?` | \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} | [src/core/business-mgt/menu.order.schema.ts:91](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L91) |
| `customer.customerId?` | `string` | [src/core/business-mgt/order.schema.ts:27](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L27) |
| `customer.name` | `string` | [src/core/business-mgt/order.schema.ts:28](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L28) |
| `customer.phone?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L29) |
| `customer.email?` | `string` | [src/core/business-mgt/order.schema.ts:30](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L30) |
| `customer.address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/order.schema.ts:31](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L31) |
| `customer.address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L18) |
| `customer.address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L19) |
| `customer.address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L20) |
| `customer.address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L21) |
| `customer.address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L22) |
| `customer.address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L23) |
| `customer.address.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L13) |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/menu.order.schema.ts:92](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L92) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:47](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L47) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:48](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L48) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:49](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L49) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:50](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L50) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:51](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L51) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:52](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L52) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:53](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/order.schema.ts#L53) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | [src/core/business-mgt/menu.order.schema.ts:95](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L95) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | [src/core/business-mgt/menu.order.schema.ts:96](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L96) |
| <a id="paymentreference"></a> `paymentReference?` | `string` | [src/core/business-mgt/menu.order.schema.ts:97](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L97) |
| <a id="orderdate"></a> `orderDate` | `number` | [src/core/business-mgt/menu.order.schema.ts:100](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L100) |
| <a id="requestedtime"></a> `requestedTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:101](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L101) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:102](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L102) |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | [src/core/business-mgt/menu.order.schema.ts:106](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L106) |
| <a id="allergies"></a> `allergies?` | `string`[] | [src/core/business-mgt/menu.order.schema.ts:107](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L107) |
| <a id="tablenumber"></a> `tableNumber?` | `string` | [src/core/business-mgt/menu.order.schema.ts:108](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L108) |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | [src/core/business-mgt/menu.order.schema.ts:111](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L111) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/menu.order.schema.ts:112](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L112) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:114](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L114) |
| <a id="deliveryaddress"></a> `deliveryAddress?` | \{ `street`: `string`; `city?`: `string`; `postalCode?`: `string`; \} | [src/core/business-mgt/menu.order.schema.ts:116](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L116) |
| `deliveryAddress.street` | `string` | [src/core/business-mgt/menu.order.schema.ts:117](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L117) |
| `deliveryAddress.city?` | `string` | [src/core/business-mgt/menu.order.schema.ts:118](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L118) |
| `deliveryAddress.postalCode?` | `string` | [src/core/business-mgt/menu.order.schema.ts:119](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L119) |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions?`: `string`; `customizations?`: \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[]; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `preparationTime?`: `number`; `notes?`: `string`; \}[] | [src/core/business-mgt/menu.order.schema.ts:137](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L137) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:138](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/menu.order.schema.ts#L138) |
