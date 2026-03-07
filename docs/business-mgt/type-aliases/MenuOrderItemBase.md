[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrderItemBase

# Type Alias: MenuOrderItemBase

```ts
type MenuOrderItemBase = {
  menuItemId: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specialInstructions: string | null;
  customizations:   | {
     name: string;
     value: string;
     additionalCost: number;
   }[]
     | null;
  status: OrderStatus;
  preparationTime: number | null;
  notes: string | null;
};
```

Defined in: [src/core/business-mgt/menu.order.schema.ts:160](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L160)

Base menu order item schema (without IDs for creation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu.order.schema.ts:27](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L27) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/menu.order.schema.ts:28](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L28) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/menu.order.schema.ts:29](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L29) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/menu.order.schema.ts:30](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L30) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/menu.order.schema.ts:31](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L31) |
| <a id="specialinstructions"></a> `specialInstructions` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:34](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L34) |
| <a id="customizations"></a> `customizations` | \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null` | [src/core/business-mgt/menu.order.schema.ts:35](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L35) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:41](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L41) |
| <a id="preparationtime"></a> `preparationTime` | `number` \| `null` | [src/core/business-mgt/menu.order.schema.ts:42](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L42) |
| <a id="notes"></a> `notes` | `string` \| `null` | [src/core/business-mgt/menu.order.schema.ts:43](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/business-mgt/menu.order.schema.ts#L43) |
