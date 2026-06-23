[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ModifierOptionView

# Type Alias: ModifierOptionView

```ts
type ModifierOptionView = {
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
};
```

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:379](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L379)

Modifier option view schema.
Simplified view for display purposes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:257](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L257) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:258](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L258) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:259](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L259) |
| <a id="pricedelta"></a> `priceDelta` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:260](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L260) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:261](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L261) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:262](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L262) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:263](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L263) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:264](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/menu-management/modifier.schema.ts#L264) |
