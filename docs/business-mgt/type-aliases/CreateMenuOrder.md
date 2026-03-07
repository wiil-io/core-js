[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

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

Defined in: [src/core/business-mgt/menu.order.schema.ts:161](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L161)

Schema for creating a new menu order.
Omits auto-generated fields and uses base items without IDs.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="type"></a> `type` | [`MenuOrderType`](../../type-definitions/enumerations/MenuOrderType.md) | [src/core/business-mgt/menu.order.schema.ts:85](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L85) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:86](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L86) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/menu.order.schema.ts:88](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L88) |
| <a id="customer"></a> `customer?` | \{ `customerId?`: `string`; `name`: `string`; `phone?`: `string`; `email?`: `string`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \}; \} | [src/core/business-mgt/menu.order.schema.ts:89](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L89) |
| `customer.customerId?` | `string` | [src/core/business-mgt/order.schema.ts:27](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L27) |
| `customer.name` | `string` | [src/core/business-mgt/order.schema.ts:28](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L28) |
| `customer.phone?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L29) |
| `customer.email?` | `string` | [src/core/business-mgt/order.schema.ts:30](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L30) |
| `customer.address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/order.schema.ts:31](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L31) |
| `customer.address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L18) |
| `customer.address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L19) |
| `customer.address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L20) |
| `customer.address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L21) |
| `customer.address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L22) |
| `customer.address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/base.schema.ts#L23) |
| `customer.address.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:13](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L13) |
| <a id="pricing"></a> `pricing` | \{ `subtotal`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/menu.order.schema.ts:90](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L90) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:47](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L47) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:48](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L48) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:49](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L49) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:50](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L50) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:51](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L51) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:52](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L52) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:53](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/order.schema.ts#L53) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | [src/core/business-mgt/menu.order.schema.ts:93](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L93) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | [src/core/business-mgt/menu.order.schema.ts:94](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L94) |
| <a id="paymentreference"></a> `paymentReference?` | `string` | [src/core/business-mgt/menu.order.schema.ts:95](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L95) |
| <a id="orderdate"></a> `orderDate` | `number` | [src/core/business-mgt/menu.order.schema.ts:98](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L98) |
| <a id="requestedtime"></a> `requestedTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:99](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L99) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:100](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L100) |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | [src/core/business-mgt/menu.order.schema.ts:104](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L104) |
| <a id="allergies"></a> `allergies?` | `string`[] | [src/core/business-mgt/menu.order.schema.ts:105](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L105) |
| <a id="tablenumber"></a> `tableNumber?` | `string` | [src/core/business-mgt/menu.order.schema.ts:106](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L106) |
| <a id="externalorderid"></a> `externalOrderId?` | `string` | [src/core/business-mgt/menu.order.schema.ts:109](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L109) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/menu.order.schema.ts:110](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L110) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:112](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L112) |
| <a id="deliveryaddress"></a> `deliveryAddress?` | \{ `street`: `string`; `city?`: `string`; `postalCode?`: `string`; \} | [src/core/business-mgt/menu.order.schema.ts:114](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L114) |
| `deliveryAddress.street` | `string` | [src/core/business-mgt/menu.order.schema.ts:115](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L115) |
| `deliveryAddress.city?` | `string` | [src/core/business-mgt/menu.order.schema.ts:116](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L116) |
| `deliveryAddress.postalCode?` | `string` | [src/core/business-mgt/menu.order.schema.ts:117](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L117) |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions?`: `string`; `customizations?`: \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[]; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `preparationTime?`: `number`; `notes?`: `string`; \}[] | [src/core/business-mgt/menu.order.schema.ts:135](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L135) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:136](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/menu.order.schema.ts#L136) |
