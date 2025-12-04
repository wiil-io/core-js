[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrderItem

# Type Alias: MenuOrderItem

```ts
type MenuOrderItem = {
  menuItemId: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specialInstructions?: string;
  customizations?: {
     name: string;
     value: string;
     additionalCost: number;
  }[];
  status: OrderStatus;
  preparationTime?: number;
  notes?: string;
  id: string;
  menuOrderId: string;
};
```

Defined in: [src/core/business-mgt/menu.order.schema.ts:160](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L160)

Menu order item schema with IDs (for existing items).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu.order.schema.ts:27](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L27) |
| <a id="itemname"></a> `itemName` | `string` | [src/core/business-mgt/menu.order.schema.ts:28](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L28) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/menu.order.schema.ts:29](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L29) |
| <a id="unitprice"></a> `unitPrice` | `number` | [src/core/business-mgt/menu.order.schema.ts:30](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L30) |
| <a id="totalprice"></a> `totalPrice` | `number` | [src/core/business-mgt/menu.order.schema.ts:31](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L31) |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | [src/core/business-mgt/menu.order.schema.ts:34](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L34) |
| <a id="customizations"></a> `customizations?` | \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] | [src/core/business-mgt/menu.order.schema.ts:35](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L35) |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | [src/core/business-mgt/menu.order.schema.ts:41](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L41) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu.order.schema.ts:42](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L42) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/menu.order.schema.ts:43](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L43) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu.order.schema.ts:50](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L50) |
| <a id="menuorderid"></a> `menuOrderId` | `string` | [src/core/business-mgt/menu.order.schema.ts:51](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/business-mgt/menu.order.schema.ts#L51) |
