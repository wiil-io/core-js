[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateMenuCategory

# Type Alias: CreateMenuCategory

```ts
type CreateMenuCategory = {
  name: string;
  description?: string;
  displayOrder?: number;
  channelMappings?:   | {
     channelId: string;
     externalCategoryId: string;
   }[]
     | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:183](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/menu-management/menu-config.schema.ts#L183)

Schema for creating a new menu category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/menu-management/menu-config.schema.ts#L60) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/menu-management/menu-config.schema.ts#L61) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/menu-management/menu-config.schema.ts#L62) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/menu-management/menu-config.schema.ts#L63) |
