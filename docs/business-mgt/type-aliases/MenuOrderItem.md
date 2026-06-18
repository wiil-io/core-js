[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrderItem

# Type Alias: MenuOrderItem

```ts
type MenuOrderItem = {
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
  id: string;
  menuOrderId: string;
};
```

Defined in: [src/core/business-mgt/menu-management/menu.order.schema.ts:223](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L223)

Menu order item schema.
Item with IDs (for existing items).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:38](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L38) |
| <a id="variantid"></a> `variantId` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:39](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L39) |
| <a id="menusetid"></a> `menuSetId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:40](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L40) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:41](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L41) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:42](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L42) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:43](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L43) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:44](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L44) |
| <a id="specialinstructions"></a> `specialInstructions` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:47](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L47) |
| <a id="customizations"></a> `customizations` | \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:48](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L48) |
| <a id="modifiers"></a> `modifiers?` | \| \{ `modifierGroupId?`: `string` \| `null`; `modifierOptionId?`: `string` \| `null`; `externalModifierGroupId?`: `string` \| `null`; `externalModifierOptionId?`: `string` \| `null`; `groupName`: `string`; `optionName`: `string`; `quantity`: `number`; `priceDelta`: `number`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:53](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L53) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu-management/menu.order.schema.ts:55](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L55) |
| <a id="preparationtime"></a> `preparationTime` | `number` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:56](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L56) |
| <a id="notes"></a> `notes` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:57](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L57) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:69](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L69) |
| <a id="menuorderid"></a> `menuOrderId` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:70](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/menu-management/menu.order.schema.ts#L70) |
