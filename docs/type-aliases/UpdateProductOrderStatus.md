[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateProductOrderStatus

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

Defined in: src/core/business-mgt/product-order.schema.ts:173

Quick status update schema for product orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-order.schema.ts:148 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | src/core/business-mgt/product-order.schema.ts:149 |
| <a id="shippeddate"></a> `shippedDate?` | `number` | src/core/business-mgt/product-order.schema.ts:150 |
| <a id="delivereddate"></a> `deliveredDate?` | `number` | src/core/business-mgt/product-order.schema.ts:151 |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | src/core/business-mgt/product-order.schema.ts:152 |
