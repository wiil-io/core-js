[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BusinessMenuItem

# Type Alias: BusinessMenuItem

```ts
type BusinessMenuItem = {
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  id: string;
  organizationId: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  category?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     version?: number;
     organizationId: string;
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

Defined in: src/core/business-mgt/menu-config.schema.ts:110

Type definition for business menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/menu-config.schema.ts:19 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/menu-config.schema.ts:20 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-config.schema.ts:21 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/menu-config.schema.ts:22 |
| <a id="price"></a> `price` | `number` | src/core/business-mgt/menu-config.schema.ts:25 |
| <a id="categoryid"></a> `categoryId` | `string` | src/core/business-mgt/menu-config.schema.ts:26 |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `organizationId`: `string`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `isDefault`: `boolean`; \} | src/core/business-mgt/menu-config.schema.ts:27 |
| `category.id` | `string` | src/core/base.schema.ts:8 |
| `category.createdAt?` | `number` | src/core/base.schema.ts:9 |
| `category.updatedAt?` | `number` | src/core/base.schema.ts:10 |
| `category.version?` | `number` | src/core/base.schema.ts:11 |
| `category.organizationId` | `string` | src/core/business-mgt/menu-config.schema.ts:11 |
| `category.name` | `string` | src/core/business-mgt/menu-config.schema.ts:12 |
| `category.description?` | `string` | src/core/business-mgt/menu-config.schema.ts:13 |
| `category.displayOrder?` | `number` | src/core/business-mgt/menu-config.schema.ts:14 |
| `category.isDefault` | `boolean` | src/core/business-mgt/menu-config.schema.ts:15 |
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
