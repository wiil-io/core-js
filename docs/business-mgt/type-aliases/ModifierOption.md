[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

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

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:374](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L374)

Modifier option schema.
Individual option within a modifier group.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L10) |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:65](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L65) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:66](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L66) |
| <a id="modifiergroupid"></a> `modifierGroupId` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:67](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L67) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:68](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L68) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:69](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L69) |
| <a id="pricedelta"></a> `priceDelta` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:70](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L70) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:71](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L71) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:72](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L72) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:73](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L73) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:74](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/menu-management/modifier.schema.ts#L74) |
