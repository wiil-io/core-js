[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessMenuItem

# Type Alias: CreateBusinessMenuItem

```ts
type CreateBusinessMenuItem = {
  name: string;
  description?: string;
  price: number;
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
  categoryId?: string | null;
};
```

Defined in: [src/core/business-mgt/menu-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L121)

Type definition for creating a business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-config.schema.ts:18](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L18) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-config.schema.ts:19](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L19) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/menu-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L22) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:25](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L25) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L26) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-config.schema.ts:27](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L27) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-config.schema.ts:28](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L28) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L29) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L30) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L31) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L35) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L36) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L39) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L40) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/menu-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/menu-config.schema.ts#L77) |
