[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuSetItemView

# Type Alias: MenuSetItemView

```ts
type MenuSetItemView = {
  menuItemId: string;
  menuItemVariantId: string;
  quantity: number;
  isRequired: boolean;
  displayOrder?: number | null;
  menuItem?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     name: string;
     description?: string | null;
     price: number;
     categoryId: string;
     category?: {
        id: string;
        createdAt?: number;
        updatedAt?: number;
        name: string;
        description?: string | null;
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
     preparationTime?: number | null;
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
   }
     | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-set.schema.ts:318](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L318)

Menu set item view schema.
Read-optimized view with resolved menu item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="menuitemid"></a> `menuItemId` | `string` | [src/core/business-mgt/menu-management/menu-set.schema.ts:72](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L72) |
| <a id="menuitemvariantid"></a> `menuItemVariantId` | `string` | [src/core/business-mgt/menu-management/menu-set.schema.ts:73](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L73) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/menu-management/menu-set.schema.ts:74](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L74) |
| <a id="isrequired"></a> `isRequired` | `boolean` | [src/core/business-mgt/menu-management/menu-set.schema.ts:75](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L75) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:76](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L76) |
| <a id="menuitem"></a> `menuItem?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `categoryId`: `string`; `category?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; \}; `ingredients?`: `string`[]; `allergens?`: `string`[]; `nutritionalInfo?`: \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \}; `isAvailable`: `boolean`; `preparationTime?`: `number` \| `null`; `isActive`: `boolean`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `dayParts?`: \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/menu-management/menu-set.schema.ts:300](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/menu-management/menu-set.schema.ts#L300) |
