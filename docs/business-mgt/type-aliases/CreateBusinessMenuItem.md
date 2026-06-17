[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

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
};
```

Defined in: [src/core/business-mgt/menu-management/menu-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L184)

Schema for creating a new business menu item.
Omits auto-generated fields and allows optional category specification.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:94](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L94) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/menu-management/menu-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L95) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:98](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L98) |
| <a id="ingredients"></a> `ingredients?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:101](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L101) |
| <a id="allergens"></a> `allergens?` | `string`[] | [src/core/business-mgt/menu-management/menu-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L102) |
| <a id="nutritionalinfo"></a> `nutritionalInfo?` | \{ `calories?`: `number`; `protein?`: `number`; `carbs?`: `number`; `fat?`: `number`; \} | [src/core/business-mgt/menu-management/menu-config.schema.ts:103](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L103) |
| `nutritionalInfo.calories?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:104](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L104) |
| `nutritionalInfo.protein?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:105](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L105) |
| `nutritionalInfo.carbs?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L106) |
| `nutritionalInfo.fat?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:107](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L107) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:111](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L111) |
| <a id="preparationtime"></a> `preparationTime?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:112](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L112) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/menu-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L115) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/menu-config.schema.ts:116](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L116) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalMenuItemId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:117](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L117) |
| <a id="dayparts"></a> `dayParts?` | \| \{ `name`: `string`; `startTime`: `string`; `endTime`: `string`; `daysOfWeek?`: `string`[]; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:120](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L120) |
| <a id="categoryid"></a> `categoryId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-config.schema.ts:158](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-config.schema.ts#L158) |
