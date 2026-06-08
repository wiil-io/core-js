[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMenuOrderStatus

# Type Alias: UpdateMenuOrderStatus

```ts
type UpdateMenuOrderStatus = {
  id: string;
  status: OrderStatus;
  estimatedReadyTime: number | null;
  actualReadyTime: number | null;
};
```

Defined in: src/core/business-mgt/menu-management/menu.order.schema.ts:227

Quick status update schema for menu orders.
Streamlined update for status transitions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/menu-management/menu.order.schema.ts:193 |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | src/core/business-mgt/menu-management/menu.order.schema.ts:194 |
| <a id="estimatedreadytime"></a> `estimatedReadyTime` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:195 |
| <a id="actualreadytime"></a> `actualReadyTime` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:196 |
