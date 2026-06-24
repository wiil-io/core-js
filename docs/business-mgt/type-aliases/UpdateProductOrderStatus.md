[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-order.schema.ts:180](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L180)

Quick status update schema for product orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:164](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L164) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/product-management/product-order.schema.ts:165](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L165) |
| <a id="shippeddate"></a> `shippedDate?` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:166](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L166) |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:167](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L167) |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:168](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-order.schema.ts#L168) |
