[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / OrderInventoryUpdate

# Type Alias: OrderInventoryUpdate

```ts
type OrderInventoryUpdate = {
  orderId: string;
  inventoryAdjustments: {
     productId: string;
     quantityUsed: number;
     reason: "order_fulfillment";
  }[];
};
```

Defined in: [src/core/business-mgt/product-order.schema.ts:173](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-order.schema.ts#L173)

Schema for inventory updates triggered by order fulfillment.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="orderid"></a> `orderId` | `string` | [src/core/business-mgt/product-order.schema.ts:157](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-order.schema.ts#L157) |
| <a id="inventoryadjustments"></a> `inventoryAdjustments` | \{ `productId`: `string`; `quantityUsed`: `number`; `reason`: `"order_fulfillment"`; \}[] | [src/core/business-mgt/product-order.schema.ts:158](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-order.schema.ts#L158) |
