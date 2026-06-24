[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuCatalog

# Type Alias: MenuCatalog

```ts
type MenuCatalog = {
  category: {
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
  items: {
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
              externalModifierGroupId?: ... | ... | ...;
            }[]
              | null;
           isActive: boolean;
        }[];
     }[];
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
  }[];
};
```

Defined in: [src/core/business-mgt/menu-management/menu-catalog.schema.ts:69](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L69)

Menu catalog schema.
Represents a category with its menu items and variants.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="category"></a> `category` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; \} | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:53](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L53) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L10) |
| `category.name` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-config.schema.ts#L61) |
| `category.description?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-config.schema.ts#L62) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-config.schema.ts#L63) |
| `category.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-config.schema.ts#L64) |
| <a id="items"></a> `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `variants`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `menuItemId`: `string`; `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `isAvailable`: `boolean`; `isActive`: `boolean`; `isDefault`: `boolean`; `variantChannelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[]; `priceRange?`: \| \{ `min`: `number`; `max`: `number`; \} \| `null`; `isVariantSelectable`: `boolean`; `modifierGroups`: \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null`; `isActive`: `boolean`; `isRequired`: `boolean`; `minSelection`: `number`; `maxSelection?`: `number` \| `null`; `options`: \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: ... \| ... \| ...; \}[] \| `null`; `isActive`: `boolean`; \}[]; \}[]; `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `categoryId`: `string`; `category?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string` \| `null`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; \}; `ingredients?`: `string`[]; `allergens?`: `string`[]; `nutritionalInfo?`: \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \}; `isAvailable`: `boolean`; `preparationTime?`: `number` \| `null`; `isActive`: `boolean`; `displayOrder?`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `dayParts?`: \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[] | [src/core/business-mgt/menu-management/menu-catalog.schema.ts:54](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/menu-management/menu-catalog.schema.ts#L54) |
