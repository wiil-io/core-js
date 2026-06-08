[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ModifierOptionOverride

# Type Alias: ModifierOptionOverride

```ts
type ModifierOptionOverride = {
  modifierOptionId: string;
  priceDeltaOverride?: number | null;
  isDefaultOverride?: boolean | null;
  displayOrderOverride?: number | null;
};
```

Defined in: src/core/business-mgt/menu-management/modifier.schema.ts:376

Modifier option override schema.
Per-option override within a binding.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modifieroptionid"></a> `modifierOptionId` | `string` | src/core/business-mgt/menu-management/modifier.schema.ts:135 |
| <a id="pricedeltaoverride"></a> `priceDeltaOverride?` | `number` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:136 |
| <a id="isdefaultoverride"></a> `isDefaultOverride?` | `boolean` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:137 |
| <a id="displayorderoverride"></a> `displayOrderOverride?` | `number` \| `null` | src/core/business-mgt/menu-management/modifier.schema.ts:138 |
