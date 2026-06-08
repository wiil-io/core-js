[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppliedModifier

# Type Alias: AppliedModifier

```ts
type AppliedModifier = {
  modifierGroupId?: string | null;
  modifierOptionId?: string | null;
  externalModifierGroupId?: string | null;
  externalModifierOptionId?: string | null;
  groupName: string;
  optionName: string;
  quantity: number;
  priceDelta: number;
};
```

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:378

Applied modifier schema.
Modifier selected on an order item.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifiergroupid"></a> `modifierGroupId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:228 |
| <a id="modifieroptionid"></a> `modifierOptionId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:229 |
| <a id="externalmodifiergroupid"></a> `externalModifierGroupId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:230 |
| <a id="externalmodifieroptionid"></a> `externalModifierOptionId?` | `string` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:231 |
| <a id="groupname"></a> `groupName` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:232 |
| <a id="optionname"></a> `optionName` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:233 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:234 |
| <a id="pricedelta"></a> `priceDelta` | `number` | src/core/business-mgt/menu-management/modifier.schema.ts:235 |
