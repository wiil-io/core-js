[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

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

Defined in: [src/core/business-mgt/menu.order.schema.ts:165](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/menu.order.schema.ts#L165)

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:153](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/menu.order.schema.ts#L153) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:154](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/menu.order.schema.ts#L154) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:155](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/menu.order.schema.ts#L155) |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:156](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/business-mgt/menu.order.schema.ts#L156) |
