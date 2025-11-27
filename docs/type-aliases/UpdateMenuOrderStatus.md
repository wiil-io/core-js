[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateMenuOrderStatus

# Type Alias: UpdateMenuOrderStatus

```ts
type UpdateMenuOrderStatus = {
  id: string;
  status: OrderStatus;
  estimatedReadyTime?: number;
  actualReadyTime?: number;
};
```

Defined in: src/core/business-mgt/menu.order.schema.ts:166

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/menu.order.schema.ts:154 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | src/core/business-mgt/menu.order.schema.ts:155 |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | src/core/business-mgt/menu.order.schema.ts:156 |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | src/core/business-mgt/menu.order.schema.ts:157 |
