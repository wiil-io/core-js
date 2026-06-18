[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMenuCategory

# Type Alias: UpdateMenuCategory

```ts
type UpdateMenuCategory = {
  name?: string;
  description?: string;
  displayOrder?: number;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L192)

Schema for updating an existing menu category.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L61) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L62) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L63) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L64) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-config.schema.ts#L173) |
