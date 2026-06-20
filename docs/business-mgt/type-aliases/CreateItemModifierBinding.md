[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateItemModifierBinding

# Type Alias: CreateItemModifierBinding

```ts
type CreateItemModifierBinding = {
  modifierRevisionId?: string | null;
  locationId?: string | null;
  menuItemId?: string | null;
  menuItemVariantId?: string | null;
  menuSetId?: string | null;
  modifierGroupId: string;
  isRequiredOverride?: boolean | null;
  minSelectionOverride?: number | null;
  maxSelectionOverride?: number | null;
  excludedOptionIds?: string[] | null;
  optionOverrides?:   | {
     modifierOptionId: string;
     priceDeltaOverride?: number | null;
     isDefaultOverride?: boolean | null;
     displayOrderOverride?: number | null;
   }[]
     | null;
  displayOrder: number;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/menu-management/modifier.schema.ts:386](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L386)

Schema for creating a new item modifier binding.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifierrevisionid"></a> `modifierRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:161](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L161) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:162](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L162) |
| <a id="menuitemid"></a> `menuItemId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:163](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L163) |
| <a id="menuitemvariantid"></a> `menuItemVariantId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:164](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L164) |
| <a id="menusetid"></a> `menuSetId?` | `string` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:165](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L165) |
| <a id="modifiergroupid"></a> `modifierGroupId` | `string` | [src/core/business-mgt/menu-management/modifier.schema.ts:166](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L166) |
| <a id="isrequiredoverride"></a> `isRequiredOverride?` | `boolean` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:167](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L167) |
| <a id="minselectionoverride"></a> `minSelectionOverride?` | `number` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:168](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L168) |
| <a id="maxselectionoverride"></a> `maxSelectionOverride?` | `number` \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:169](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L169) |
| <a id="excludedoptionids"></a> `excludedOptionIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:170](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L170) |
| <a id="optionoverrides"></a> `optionOverrides?` | \| \{ `modifierOptionId`: `string`; `priceDeltaOverride?`: `number` \| `null`; `isDefaultOverride?`: `boolean` \| `null`; `displayOrderOverride?`: `number` \| `null`; \}[] \| `null` | [src/core/business-mgt/menu-management/modifier.schema.ts:171](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L171) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/modifier.schema.ts:172](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L172) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/modifier.schema.ts:173](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/menu-management/modifier.schema.ts#L173) |
