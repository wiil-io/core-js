[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.44**](../../README.md)

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

Defined in: [src/core/business-mgt/menu.order.schema.ts:163](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/menu.order.schema.ts#L163)

Quick status update schema for menu orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:151](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/menu.order.schema.ts#L151) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:152](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/menu.order.schema.ts#L152) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:153](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/menu.order.schema.ts#L153) |
| <a id="actualreadytime"></a> `actualReadyTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:154](https://github.com/wiil-io/core-js/blob/c98f65374adc98a7a53d84869a4ded3c42acf443/src/core/business-mgt/menu.order.schema.ts#L154) |
