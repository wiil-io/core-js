[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrderItemBase

# Type Alias: MenuOrderItemBase

```ts
type MenuOrderItemBase = {
  menuItemId: string;
  variantId: string;
  menuSetId?: string | null;
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
  modifiers?:   | {
     modifierGroupId?: string | null;
     modifierOptionId?: string | null;
     externalModifierGroupId?: string | null;
     externalModifierOptionId?: string | null;
     groupName: string;
     optionName: string;
     quantity: number;
     priceDelta: number;
   }[]
     | null;
  status: OrderStatus;
  preparationTime: number | null;
  notes: string | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu.order.schema.ts:222](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L222)

Base menu order item schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:38](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L38) |
| <a id="variantid"></a> `variantId` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:39](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L39) |
| <a id="menusetid"></a> `menuSetId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:40](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L40) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:41](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L41) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:42](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L42) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:43](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L43) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:44](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L44) |
| <a id="specialinstructions"></a> `specialInstructions` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:47](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L47) |
| <a id="customizations"></a> `customizations` | \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:48](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L48) |
| <a id="modifiers"></a> `modifiers?` | \| \{ `modifierGroupId?`: `string` \| `null`; `modifierOptionId?`: `string` \| `null`; `externalModifierGroupId?`: `string` \| `null`; `externalModifierOptionId?`: `string` \| `null`; `groupName`: `string`; `optionName`: `string`; `quantity`: `number`; `priceDelta`: `number`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:53](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L53) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu-management/menu.order.schema.ts:55](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L55) |
| <a id="preparationtime"></a> `preparationTime` | `number` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:56](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L56) |
| <a id="notes"></a> `notes` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:57](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/menu-management/menu.order.schema.ts#L57) |
