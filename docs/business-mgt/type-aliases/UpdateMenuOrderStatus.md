[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

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

Defined in: [src/core/business-mgt/menu.order.schema.ts:164](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/business-mgt/menu.order.schema.ts#L164)

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:152](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/business-mgt/menu.order.schema.ts#L152) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:153](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/business-mgt/menu.order.schema.ts#L153) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:154](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/business-mgt/menu.order.schema.ts#L154) |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:155](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/business-mgt/menu.order.schema.ts#L155) |
