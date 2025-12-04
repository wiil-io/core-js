[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

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

Defined in: [src/core/business-mgt/menu.order.schema.ts:164](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/business-mgt/menu.order.schema.ts#L164)

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:152](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/business-mgt/menu.order.schema.ts#L152) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:153](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/business-mgt/menu.order.schema.ts#L153) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:154](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/business-mgt/menu.order.schema.ts#L154) |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:155](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/business-mgt/menu.order.schema.ts#L155) |
