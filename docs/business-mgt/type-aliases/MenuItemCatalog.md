[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuItemCatalog

# Type Alias: MenuItemCatalog

```ts
type MenuItemCatalog = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  variants: {
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
  }[];
  priceRange?:   | {
     min: number;
     max: number;
   }
     | null;
  isVariantSelectable: boolean;
  modifierGroups: {
     id: string;
     name: string;
     description?: string | null;
     displayOrder: number;
     channelMappings?:   | {
        channelId: string;
        externalModifierGroupId: string;
      }[]
        | null;
     isActive: boolean;
     isRequired: boolean;
     minSelection: number;
     maxSelection?: number | null;
     options: {
        id: string;
        name: string;
        description?: string | null;
        priceDelta: number;
        isDefault: boolean;
        displayOrder: number;
        channelMappings?:   | {
           channelId: string;
           externalModifierOptionId: string;
           externalModifierGroupId?: string | null;
         }[]
           | null;
        isActive: boolean;
     }[];
  }[];
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
     channelMappings?:   | {
        channelId: string;
        externalCategoryId: string;
      }[]
        | null;
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
  channelMappings?:   | {
     channelId: string;
     externalMenuItemId: string;
     externalCategoryId?: string | null;
   }[]
     | null;
  dayParts?:   | {
     name: string;
     startTime: string;
     endTime: string;
     daysOfWeek?: string[];
   }[]
     | null;
  orderCount?: number | null;
  recentOrderCount?: number | null;
  lastOrderedAt?: number | null;
};
```

Defined in: src/core/business-mgt/menu-management/menu-catalog.schema.ts:68

Menu item catalog schema.
Menu item for catalog display - includes variants and modifier groups.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="variants"></a> `variants` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `menuItemId`: `string`; `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `isAvailable`: `boolean`; `isActive`: `boolean`; `isDefault`: `boolean`; `variantChannelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[] | src/core/business-mgt/menu-management/menu-catalog.schema.ts:35 |
| <a id="pricerange"></a> `priceRange?` | \| \{ `min`: `number`; `max`: `number`; \} \| `null` | src/core/business-mgt/menu-management/menu-catalog.schema.ts:36 |
| <a id="isvariantselectable"></a> `isVariantSelectable` | `boolean` | src/core/business-mgt/menu-management/menu-catalog.schema.ts:40 |
| <a id="modifiergroups"></a> `modifierGroups` | \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null`; `isActive`: `boolean`; `isRequired`: `boolean`; `minSelection`: `number`; `maxSelection?`: `number` \| `null`; `options`: \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[]; \}[] | src/core/business-mgt/menu-management/menu-catalog.schema.ts:41 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/menu-config.schema.ts:94 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/menu-management/menu-config.schema.ts:95 |
| <a id="price"></a> `price` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:98 |
| <a id="categoryid"></a> `categoryId` | `string` | src/core/business-mgt/menu-management/menu-config.schema.ts:99 |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; \} | src/core/business-mgt/menu-management/menu-config.schema.ts:100 |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| `category.name` | `string` | src/core/business-mgt/menu-management/menu-config.schema.ts:60 |
| `category.description?` | `string` | src/core/business-mgt/menu-management/menu-config.schema.ts:61 |
| `category.displayOrder?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:62 |
| `category.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:63 |
| <a id="ingredients"></a> `ingredients?` | `string`[] | src/core/business-mgt/menu-management/menu-config.schema.ts:101 |
| <a id="allergens"></a> `allergens?` | `string`[] | src/core/business-mgt/menu-management/menu-config.schema.ts:102 |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | src/core/business-mgt/menu-management/menu-config.schema.ts:103 |
| `nutritionalInfo.calories?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:104 |
| `nutritionalInfo.protein?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:105 |
| `nutritionalInfo.carbs?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:106 |
| `nutritionalInfo.fat?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:107 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/menu-management/menu-config.schema.ts:111 |
| <a id="preparationtime"></a> `preparationTime?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:112 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/menu-config.schema.ts:115 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/menu-management/menu-config.schema.ts:116 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:117 |
| <a id="dayparts"></a> `dayParts?` | \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:120 |
| <a id="ordercount"></a> `orderCount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:123 |
| <a id="recentordercount"></a> `recentOrderCount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:124 |
| <a id="lastorderedat"></a> `lastOrderedAt?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-config.schema.ts:125 |
