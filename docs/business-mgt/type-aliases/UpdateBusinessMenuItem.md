[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.38**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessMenuItem

# Type Alias: UpdateBusinessMenuItem

```ts
type UpdateBusinessMenuItem = {
  name?: string;
  description?: string;
  price?: number;
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
     calories?: number;
     protein?: number;
     carbs?: number;
     fat?: number;
  };
  isAvailable?: boolean;
  preparationTime?: number;
  isActive?: boolean;
  displayOrder?: number;
  categoryId?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-config.schema.ts:129](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L129)

Type definition for updating a business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-config.schema.ts:17](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L17) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-config.schema.ts:18](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L18) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/menu-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L21) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L24) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L25) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L26) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-config.schema.ts:27](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L27) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-config.schema.ts:28](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L28) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L29) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L30) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L34) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L35) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:38](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L38) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L39) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/menu-config.schema.ts:75](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L75) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-config.schema.ts:93](https://github.com/wiil-io/core-js/blob/f45aa5ab8c493a625bfd18afa3598271cb04182d/src/core/business-mgt/menu-config.schema.ts#L93) |
