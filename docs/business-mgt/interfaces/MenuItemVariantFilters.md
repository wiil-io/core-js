[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuItemVariantFilters

# Interface: MenuItemVariantFilters

Defined in: src/core/business-mgt/menu-management/menu-item-variant.schema.ts:114

Menu item variant filter options.
 MenuItemVariantFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:116 |
| <a id="menuitemid"></a> `menuItemId?` | `string` | Filter by parent menu item ID | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:118 |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:120 |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | Filter by availability status | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:122 |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by price range | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:124 |
| `priceRange.min?` | `number` | - | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:124 |
| `priceRange.max?` | `number` | - | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:124 |
