[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuItemVariantCatalog

# Type Alias: MenuItemVariantCatalog

```ts
type MenuItemVariantCatalog = {
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

Defined in: src/core/business-mgt/menu-management/menu-catalog.schema.ts:67

Menu item variant catalog schema.
Variant schema for catalog display.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="menuitemid"></a> `menuItemId` | `string` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:53 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:55 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:56 |
| <a id="price"></a> `price` | `number` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:57 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:59 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:60 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:61 |
| <a id="variantchannelmappings"></a> `variantChannelMappings?` | \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:63 |
| <a id="ordercount"></a> `orderCount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:66 |
| <a id="recentordercount"></a> `recentOrderCount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:67 |
| <a id="lastorderedat"></a> `lastOrderedAt?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-item-variant.schema.ts:68 |
