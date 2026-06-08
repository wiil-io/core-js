[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateTaxRule

# Type Alias: CreateTaxRule

```ts
type CreateTaxRule = {
  locationId?: string | null;
  name: string;
  scope: TaxScope;
  rateType: TaxRateType;
  rateValue: number;
  currency: string;
  catalogScope: TaxCatalogScope;
  externalTaxId?: string;
  isInclusive: boolean;
  priority: number;
  isCompound: boolean;
  effectiveFrom?: number;
  effectiveTo?: number;
  isActive: boolean;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
};
```

Defined in: src/core/business-mgt/tax-rule.schema.ts:100

Schema for creating a new tax rule.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/tax-rule.schema.ts:36 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/tax-rule.schema.ts:37 |
| <a id="scope"></a> `scope` | [`TaxScope`](../../type-definitions/enumerations/TaxScope.md) | - | src/core/business-mgt/tax-rule.schema.ts:38 |
| <a id="ratetype"></a> `rateType` | [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md) | - | src/core/business-mgt/tax-rule.schema.ts:39 |
| <a id="ratevalue"></a> `rateValue` | `number` | - | src/core/business-mgt/tax-rule.schema.ts:40 |
| <a id="currency"></a> `currency` | `string` | - | src/core/business-mgt/tax-rule.schema.ts:41 |
| <a id="catalogscope"></a> `catalogScope` | [`TaxCatalogScope`](../../type-definitions/enumerations/TaxCatalogScope.md) | - | src/core/business-mgt/tax-rule.schema.ts:42 |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | - | src/core/business-mgt/tax-rule.schema.ts:43 |
| <a id="isinclusive"></a> `isInclusive` | `boolean` | - | src/core/business-mgt/tax-rule.schema.ts:44 |
| <a id="priority"></a> `priority` | `number` | - | src/core/business-mgt/tax-rule.schema.ts:45 |
| <a id="iscompound"></a> `isCompound` | `boolean` | - | src/core/business-mgt/tax-rule.schema.ts:46 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | src/core/business-mgt/tax-rule.schema.ts:47 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | src/core/business-mgt/tax-rule.schema.ts:48 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/business-mgt/tax-rule.schema.ts:49 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/tax-rule.schema.ts:84 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
