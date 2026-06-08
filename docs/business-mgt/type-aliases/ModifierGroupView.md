[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ModifierGroupView

# Type Alias: ModifierGroupView

```ts
type ModifierGroupView = {
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
};
```

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:380

Modifier group view schema.
Simplified view for display purposes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:284 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:285 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:286 |
| <a id="displayorder"></a> `displayOrder` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:287 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:288 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:289 |
| <a id="isrequired"></a> `isRequired` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:290 |
| <a id="minselection"></a> `minSelection` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:291 |
| <a id="maxselection"></a> `maxSelection?` | `number` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:292 |
| <a id="options"></a> `options` | \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[] | src/core/business-mgt/menu-management/modifier.schema.ts:293 |
