[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:380](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L380)

Modifier group view schema.
Simplified view for display purposes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:284](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L284) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:285](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L285) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:286](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L286) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:287](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L287) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:288](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L288) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:289](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L289) |
| <a id="isrequired"></a> `isRequired` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:290](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L290) |
| <a id="minselection"></a> `minSelection` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:291](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L291) |
| <a id="maxselection"></a> `maxSelection?` | `number` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:292](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L292) |
| <a id="options"></a> `options` | \{ `id`: `string`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[] | [src/core/business-mgt/menu-management/modifier.schema.ts:293](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/menu-management/modifier.schema.ts#L293) |
