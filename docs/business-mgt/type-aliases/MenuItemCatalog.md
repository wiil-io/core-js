[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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

Defined in: [src/core/business-mgt/menu-management/menu-catalog.schema.ts:68](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L68)

Menu item catalog schema.
Menu item for catalog display - includes variants and modifier groups.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L10) |
| <a id="variants"></a> `variants` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `menuItemId`: `string`; `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `isAvailable`: `boolean`; `isActive`: `boolean`; `isDefault`: `boolean`; `variantChannelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[] | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:35](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L35) |
| <a id="pricerange"></a> `priceRange?` | \| \{ `min`: `number`; `max`: `number`; \} \| `null` | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:36](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L36) |
| <a id="isvariantselectable"></a> `isVariantSelectable` | `boolean` | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:40](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L40) |
| <a id="modifiergroups"></a> `modifierGroups` | \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null`; `isActive`: `boolean`; `isRequired`: `boolean`; `minSelection`: `number`; `maxSelection?`: `number` \| `null`; `options`: \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[]; \}[] | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:41](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L41) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L95) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:96](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L96) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:99](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L99) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:100](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L100) |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; \} | [src/core/business-mgt/menu-management/menu-config.schema.ts:101](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L101) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/base.schema.ts#L10) |
| `category.name` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L61) |
| `category.description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L62) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L63) |
| `category.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L64) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L102) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:103](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L103) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-management/menu-config.schema.ts:104](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L104) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:105](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L105) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L106) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:107](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L107) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:108](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L108) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:112](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L112) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:113](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L113) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:116](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L116) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:117](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L117) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:118](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L118) |
| <a id="dayparts"></a> `dayParts?` | \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L121) |
| <a id="ordercount"></a> `orderCount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:124](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L124) |
| <a id="recentordercount"></a> `recentOrderCount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:125](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L125) |
| <a id="lastorderedat"></a> `lastOrderedAt?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:126](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/menu-management/menu-config.schema.ts#L126) |
