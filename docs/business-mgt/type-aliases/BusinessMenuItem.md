[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessMenuItem

# Type Alias: BusinessMenuItem

```ts
type BusinessMenuItem = {
  createdAt?: number;
  updatedAt?: number;
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  category?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     name: string;
     description?: string;
     displayOrder?: number;
     isDefault: boolean;
  };
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
     calories?: number;
     protein?: number;
     carbs?: number;
     fat?: number;
  };
  isAvailable: boolean;
  preparationTime?: number;
  isActive: boolean;
  displayOrder?: number;
};
```

Defined in: [src/core/business-mgt/menu-config.schema.ts:107](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L107)

Type definition for business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/base.schema.ts#L10) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-config.schema.ts:18](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L18) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-config.schema.ts:19](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L19) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L20) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/menu-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L23) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/menu-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L24) |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `isDefault`: `boolean`; \} | [src/core/business-mgt/menu-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L25) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/base.schema.ts#L10) |
| `category.name` | `string` | [src/core/business-mgt/menu-config.schema.ts:11](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L11) |
| `category.description?` | `string` | [src/core/business-mgt/menu-config.schema.ts:12](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L12) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/menu-config.schema.ts:13](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L13) |
| `category.isDefault` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:14](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L14) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L26) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:27](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L27) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-config.schema.ts:28](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L28) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L29) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L30) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L31) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L32) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L36) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L37) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L40) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/menu-config.schema.ts#L41) |
