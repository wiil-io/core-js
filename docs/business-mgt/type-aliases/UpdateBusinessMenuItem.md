[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

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
  category?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-config.schema.ts:132](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L132)

Type definition for updating a business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-config.schema.ts:19](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L19) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L20) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/menu-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L23) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:26](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L26) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-config.schema.ts:27](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L27) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-config.schema.ts:28](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L28) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-config.schema.ts:29](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L29) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-config.schema.ts:30](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L30) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-config.schema.ts:31](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L31) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-config.schema.ts:32](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L32) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:36](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L36) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-config.schema.ts:37](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L37) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/menu-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L40) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L41) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/menu-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L77) |
| <a id="category"></a> `category?` | `string` \| `null` | [src/core/business-mgt/menu-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L78) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-config.schema.ts:96](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/business-mgt/menu-config.schema.ts#L96) |
