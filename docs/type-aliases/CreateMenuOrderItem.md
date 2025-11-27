[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateMenuOrderItem

# Type Alias: CreateMenuOrderItem

```ts
type CreateMenuOrderItem = {
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
};
```

Defined in: src/core/business-mgt/menu.order.schema.ts:167

Base menu order item schema (without IDs for creation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | src/core/business-mgt/menu.order.schema.ts:27 |
| <a id="itemname"></a> `itemName` | `string` | src/core/business-mgt/menu.order.schema.ts:28 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/menu.order.schema.ts:29 |
| <a id="unitprice"></a> `unitPrice` | `number` | src/core/business-mgt/menu.order.schema.ts:30 |
| <a id="totalprice"></a> `totalPrice` | `number` | src/core/business-mgt/menu.order.schema.ts:31 |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` | src/core/business-mgt/menu.order.schema.ts:34 |
| <a id="customizations"></a> `customizations?` | \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] | src/core/business-mgt/menu.order.schema.ts:35 |
| <a id="status"></a> `status` | [`OrderStatus`](../enumerations/OrderStatus.md) | src/core/business-mgt/menu.order.schema.ts:41 |
| <a id="preparationtime"></a> `preparationTime?` | `number` | src/core/business-mgt/menu.order.schema.ts:42 |
| <a id="notes"></a> `notes?` | `string` | src/core/business-mgt/menu.order.schema.ts:43 |
