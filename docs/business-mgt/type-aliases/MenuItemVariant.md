[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuItemVariant

# Type Alias: MenuItemVariant

```ts
type MenuItemVariant = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  menuItemId: string;
  name: string;
  description?: string | null;
  price: number;
  isAvailable: boolean;
  isActive: boolean;
  isDefault: boolean;
  variantChannelMappings?:   | {
     channelId: string;
     externalVariantId: string;
     externalMenuItemId?: string | null;
   }[]
     | null;
  orderCount?: number | null;
  recentOrderCount?: number | null;
  lastOrderedAt?: number | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:101](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L101)

Menu item variant schema.
Different sizes/options for the same menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/base.schema.ts#L10) |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:53](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L53) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:55](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L55) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:56](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L56) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:57](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L57) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:59](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L59) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:60](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L60) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:61](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L61) |
| <a id="variantchannelmappings"></a> `variantChannelMappings?` | \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:63](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L63) |
| <a id="ordercount"></a> `orderCount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:66](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L66) |
| <a id="recentordercount"></a> `recentOrderCount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:67](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L67) |
| <a id="lastorderedat"></a> `lastOrderedAt?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:68](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L68) |
