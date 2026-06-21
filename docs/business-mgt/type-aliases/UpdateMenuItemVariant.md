[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMenuItemVariant

# Type Alias: UpdateMenuItemVariant

```ts
type UpdateMenuItemVariant = {
  menuItemId?: string;
  name?: string;
  description?: string | null;
  price?: number;
  isAvailable?: boolean;
  isActive?: boolean;
  isDefault?: boolean;
  variantChannelMappings?:   | {
     channelId: string;
     externalVariantId: string;
     externalMenuItemId?: string | null;
   }[]
     | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:103](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L103)

Schema for updating an existing menu item variant.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId?` | `string` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:53](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L53) |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:55](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L55) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:56](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L56) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:57](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L57) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:59](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L59) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:60](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L60) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:61](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L61) |
| <a id="variantchannelmappings"></a> `variantChannelMappings?` | \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:63](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L63) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/menu-item-variant.schema.ts:94](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/menu-management/menu-item-variant.schema.ts#L94) |
