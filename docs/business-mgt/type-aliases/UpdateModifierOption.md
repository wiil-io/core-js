[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateModifierOption

# Type Alias: UpdateModifierOption

```ts
type UpdateModifierOption = {
  modifierRevisionId?: string | null;
  locationId?: string | null;
  modifierGroupId?: string;
  name?: string;
  description?: string | null;
  priceDelta?: number;
  isDefault?: boolean;
  displayOrder?: number;
  channelMappings?:   | {
     channelId: string;
     externalModifierOptionId: string;
     externalModifierGroupId?: string | null;
   }[]
     | null;
  isActive?: boolean;
  id: string;
};
```

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:387

Schema for updating an existing modifier option.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:65 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:66 |
| <a id="modifiergroupid"></a> `modifierGroupId?` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:67 |
| <a id="name"></a> `name?` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:68 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:69 |
| <a id="pricedelta"></a> `priceDelta?` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:70 |
| <a id="isdefault"></a> `isDefault?` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:71 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:72 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:73 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:74 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:350 |
