[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

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

Defined in: [src/core/business-mgt/product-order.schema.ts:172](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/business-mgt/product-order.schema.ts#L172)

Schema for inventory updates triggered by order fulfillment.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="orderid"></a> `orderId` | `string` | [src/core/business-mgt/product-order.schema.ts:156](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/business-mgt/product-order.schema.ts#L156) |
| <a id="inventoryadjustments"></a> `inventoryAdjustments` | \{ `productId`: `string`; `quantityUsed`: `number`; `reason`: `"order_fulfillment"`; \}[] | [src/core/business-mgt/product-order.schema.ts:157](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/business-mgt/product-order.schema.ts#L157) |
