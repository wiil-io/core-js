[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ModifierGroup

# Type Alias: ModifierGroup

```ts
type ModifierGroup = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  modifierRevisionId?: string | null;
  locationId?: string | null;
  name: string;
  description?: string | null;
  options: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     modifierRevisionId?: string | null;
     locationId?: string | null;
     modifierGroupId: string;
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
  minSelection: number;
  maxSelection?: number | null;
  isRequired: boolean;
  displayOrder: number;
  channelMappings?:   | {
     channelId: string;
     externalModifierGroupId: string;
   }[]
     | null;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:375](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L375)

Modifier group schema.
Group of related modifier options (e.g., Size, Add-ons, Toppings).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L10) |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:99](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L99) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:100](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L100) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:101](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L101) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:102](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L102) |
| <a id="options"></a> `options` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `modifierRevisionId?`: `string` \| `null`; `locationId?`: `string` \| `null`; `modifierGroupId`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[] | [src/core/business-mgt/menu-management/modifier.schema.ts:103](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L103) |
| <a id="minselection"></a> `minSelection` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:104](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L104) |
| <a id="maxselection"></a> `maxSelection?` | `number` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:105](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L105) |
| <a id="isrequired"></a> `isRequired` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:106](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L106) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:107](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L107) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:108](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L108) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:109](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/menu-management/modifier.schema.ts#L109) |
