[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

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
  categoryId?: string | null;
  variants?: {
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
  }[];
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L193)

Schema for updating an existing business menu item.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L95) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:96](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L96) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:99](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L99) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L102) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:103](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L103) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-management/menu-config.schema.ts:104](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L104) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:105](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L105) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L106) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:107](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L107) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:108](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L108) |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:112](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L112) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:113](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L113) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:116](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L116) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:117](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L117) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:118](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L118) |
| <a id="dayparts"></a> `dayParts?` | \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L121) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:164](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L164) |
| <a id="variants"></a> `variants?` | \{ `name`: `string`; `description?`: `string` \| `null`; `price`: `number`; `isAvailable`: `boolean`; `isActive`: `boolean`; `isDefault`: `boolean`; `variantChannelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalMenuItemId?`: `string` \| `null`; \}[] \| `null`; \}[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:165](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L165) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/menu-management/menu-config.schema.ts#L181) |
