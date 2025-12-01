[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMenuOrderStatus

# Type Alias: UpdateMenuOrderStatus

```ts
type UpdateMenuOrderStatus = {
  id: string;
  status: OrderStatus;
  estimatedReadyTime?: number;
  actualReadyTime?: number;
};
```

Defined in: [src/core/business-mgt/menu.order.schema.ts:164](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/menu.order.schema.ts#L164)

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:152](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/menu.order.schema.ts#L152) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:153](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/menu.order.schema.ts#L153) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:154](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/menu.order.schema.ts#L154) |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:155](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/menu.order.schema.ts#L155) |
