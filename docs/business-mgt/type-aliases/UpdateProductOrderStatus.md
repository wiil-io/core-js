[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/product-management/product-order.schema.ts:180

Quick status update schema for product orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:164 |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | src/core/business-mgt/product-management/product-order.schema.ts:165 |
| <a id="shippeddate"></a> `shippedDate?` | `number` | src/core/business-mgt/product-management/product-order.schema.ts:166 |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | src/core/business-mgt/product-management/product-order.schema.ts:167 |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | src/core/business-mgt/product-management/product-order.schema.ts:168 |
