[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

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

Defined in: [src/core/business-mgt/product-order.schema.ts:174](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/business-mgt/product-order.schema.ts#L174)

Schema for inventory updates triggered by order fulfillment.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="orderid"></a> `orderId` | `string` | [src/core/business-mgt/product-order.schema.ts:158](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/business-mgt/product-order.schema.ts#L158) |
| <a id="inventoryadjustments"></a> `inventoryAdjustments` | \{ `productId`: `string`; `quantityUsed`: `number`; `reason`: `"order_fulfillment"`; \}[] | [src/core/business-mgt/product-order.schema.ts:159](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/business-mgt/product-order.schema.ts#L159) |
