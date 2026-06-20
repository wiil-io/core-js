[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateModifierGroup

# Type Alias: UpdateModifierGroup

```ts
type UpdateModifierGroup = {
  modifierRevisionId?: string | null;
  locationId?: string | null;
  name?: string;
  description?: string | null;
  minSelection?: number;
  maxSelection?: number | null;
  isRequired?: boolean;
  displayOrder?: number;
  channelMappings?:   | {
     channelId: string;
     externalModifierGroupId: string;
   }[]
     | null;
  isActive?: boolean;
  options?: {
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
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:388](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L388)

Schema for updating an existing modifier group.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:99](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L99) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:100](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L100) |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:101](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L101) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:102](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L102) |
| <a id="minselection"></a> `minSelection?` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:104](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L104) |
| <a id="maxselection"></a> `maxSelection?` | `number` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:105](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L105) |
| <a id="isrequired"></a> `isRequired?` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:106](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L106) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:107](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L107) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalModifierGroupId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:108](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L108) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:109](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L109) |
| <a id="options"></a> `options?` | \{ `modifierRevisionId?`: `string` \| `null`; `locationId?`: `string` \| `null`; `name`: `string`; `description?`: `string` \| `null`; `priceDelta`: `number`; `isDefault`: `boolean`; `displayOrder`: `number`; `channelMappings?`: \| \{ `channelId`: `string`; `externalModifierOptionId`: `string`; `externalModifierGroupId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; \}[] | [src/core/business-mgt/menu-management/modifier.schema.ts:324](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L324) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:358](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/menu-management/modifier.schema.ts#L358) |
