[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ModifierOption

# Type Alias: ModifierOption

```ts
type ModifierOption = {
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
};
```

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:374

Modifier option schema.
Individual option within a modifier group.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:65 |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:66 |
| <a id="modifiergroupid"></a> `modifierGroupId` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:67 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:68 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:69 |
| <a id="pricedelta"></a> `priceDelta` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:70 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:71 |
| <a id="displayorder"></a> `displayOrder` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:72 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:73 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/modifier.schema.ts:74 |
