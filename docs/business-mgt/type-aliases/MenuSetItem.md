[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuSetItem

# Type Alias: MenuSetItem

```ts
type MenuSetItem = {
  menuItemId: string;
  menuItemVariantId: string;
  quantity: number;
  isRequired: boolean;
  displayOrder?: number | null;
};
```

Defined in: src/core/business-mgt/menu-management/menu-set.schema.ts:276

Menu set item schema.
Individual item within a menu set.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | src/core/business-mgt/menu-management/menu-set.schema.ts:72 |
| <a id="menuitemvariantid"></a> `menuItemVariantId` | `string` | src/core/business-mgt/menu-management/menu-set.schema.ts:73 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/menu-management/menu-set.schema.ts:74 |
| <a id="isrequired"></a> `isRequired` | `boolean` | src/core/business-mgt/menu-management/menu-set.schema.ts:75 |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-set.schema.ts:76 |
