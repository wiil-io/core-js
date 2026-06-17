[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateModifierOption

# Type Alias: CreateModifierOption

```ts
type CreateModifierOption = {
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

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:383](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L383)

Schema for creating a new modifier option.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:65](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L65) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:66](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L66) |
| <a id="modifiergroupid"></a> `modifierGroupId` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:67](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L67) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:68](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L68) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:69](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L69) |
| <a id="pricedelta"></a> `priceDelta` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:70](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L70) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:71](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L71) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:72](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L72) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:73](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L73) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:74](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/modifier.schema.ts#L74) |
