[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateModifierGroup

# Type Alias: CreateModifierGroup

```ts
type CreateModifierGroup = {
  modifierRevisionId?: string | null;
  locationId?: string | null;
  name: string;
  description?: string | null;
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
  options: {
     modifierRevisionId?: string | null;
     locationId?: string | null;
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

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:385

Schema for creating a new modifier group.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:99 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:100 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:101 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:102 |
| <a id="minselection"></a> `minSelection` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:104 |
| <a id="maxselection"></a> `maxSelection?` | `number` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:105 |
| <a id="isrequired"></a> `isRequired` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:106 |
| <a id="displayorder"></a> `displayOrder` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:107 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:108 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:109 |
| <a id="options"></a> `options` | \{ `modifierRevisionId?`: `string` \| `null`; `locationId?`: `string` \| `null`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[] | src/core/business-mgt/menu-management/modifier.schema.ts:324 |
