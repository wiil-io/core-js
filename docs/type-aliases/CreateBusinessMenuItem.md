[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateBusinessMenuItem

# Type Alias: CreateBusinessMenuItem

```ts
type CreateBusinessMenuItem = {
  version?: number;
  organizationId: string;
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
  category?: string | null;
};
```

Defined in: src/core/business-mgt/menu-config.schema.ts:125

Type definition for creating a business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/menu-config.schema.ts:20 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-config.schema.ts:21 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/menu-config.schema.ts:22 |
| <a id="price"></a> `price` | `number` | src/core/business-mgt/menu-config.schema.ts:25 |
| <a id="ingredients"></a> `ingredients?` | `string`[] | src/core/business-mgt/menu-config.schema.ts:28 |
| <a id="allergens"></a> `allergens?` | `string`[] | src/core/business-mgt/menu-config.schema.ts:29 |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | src/core/business-mgt/menu-config.schema.ts:30 |
| `nutritionalInfo.calories?` | `number` | src/core/business-mgt/menu-config.schema.ts:31 |
| `nutritionalInfo.protein?` | `number` | src/core/business-mgt/menu-config.schema.ts:32 |
| `nutritionalInfo.carbs?` | `number` | src/core/business-mgt/menu-config.schema.ts:33 |
| `nutritionalInfo.fat?` | `number` | src/core/business-mgt/menu-config.schema.ts:34 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/menu-config.schema.ts:38 |
| <a id="preparationtime"></a> `preparationTime?` | `number` | src/core/business-mgt/menu-config.schema.ts:39 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-config.schema.ts:42 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/menu-config.schema.ts:43 |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | src/core/business-mgt/menu-config.schema.ts:80 |
| <a id="category"></a> `category?` | `string` \| `null` | src/core/business-mgt/menu-config.schema.ts:81 |
