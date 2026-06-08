[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuSetSelector

# Type Alias: MenuSetSelector

```ts
type MenuSetSelector = {
  menuItemIdsAny: string[];
  menuItemIdsAll: string[];
  allMenuItems: boolean;
  quantityExact?: number;
  quantityMin?: number;
  quantityMax?: number;
};
```

Defined in: src/core/business-mgt/menu-management/menu-set.schema.ts:278

Menu set selector schema.
Defines dynamic rules for set membership.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemidsany"></a> `menuItemIdsAny` | `string`[] | src/core/business-mgt/menu-management/menu-set.schema.ts:96 |
| <a id="menuitemidsall"></a> `menuItemIdsAll` | `string`[] | src/core/business-mgt/menu-management/menu-set.schema.ts:97 |
| <a id="allmenuitems"></a> `allMenuItems` | `boolean` | src/core/business-mgt/menu-management/menu-set.schema.ts:98 |
| <a id="quantityexact"></a> `quantityExact?` | `number` | src/core/business-mgt/menu-management/menu-set.schema.ts:99 |
| <a id="quantitymin"></a> `quantityMin?` | `number` | src/core/business-mgt/menu-management/menu-set.schema.ts:100 |
| <a id="quantitymax"></a> `quantityMax?` | `number` | src/core/business-mgt/menu-management/menu-set.schema.ts:101 |
