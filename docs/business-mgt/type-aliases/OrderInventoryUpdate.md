[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

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

Defined in: [src/core/business-mgt/product-order.schema.ts:173](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/product-order.schema.ts#L173)

Schema for inventory updates triggered by order fulfillment.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="orderid"></a> `orderId` | `string` | [src/core/business-mgt/product-order.schema.ts:157](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/product-order.schema.ts#L157) |
| <a id="inventoryadjustments"></a> `inventoryAdjustments` | \{ `productId`: `string`; `quantityUsed`: `number`; `reason`: `"order_fulfillment"`; \}[] | [src/core/business-mgt/product-order.schema.ts:158](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/business-mgt/product-order.schema.ts#L158) |
