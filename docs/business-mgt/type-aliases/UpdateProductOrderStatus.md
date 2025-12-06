[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProductOrderStatus

# Type Alias: UpdateProductOrderStatus

```ts
type UpdateProductOrderStatus = {
  id: string;
  status: OrderStatus;
  shippedDate?: number;
  deliveredDate?: number;
  trackingNumber?: string;
};
```

Defined in: [src/core/business-mgt/product-order.schema.ts:172](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L172)

Quick status update schema for product orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-order.schema.ts:147](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L147) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-order.schema.ts:148](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L148) |
| <a id="shippeddate"></a> `shippedDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:149](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L149) |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | [src/core/business-mgt/product-order.schema.ts:150](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L150) |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | [src/core/business-mgt/product-order.schema.ts:151](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/business-mgt/product-order.schema.ts#L151) |
