[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

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

Defined in: [src/core/business-mgt/tax-rule.schema.ts:100](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L100)

Schema for creating a new tax rule.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/tax-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L36) |
| <a id="name"></a> `name` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L37) |
| <a id="scope"></a> `scope` | [`TaxScope`](../../type-definitions/enumerations/TaxScope.md) | - | [src/core/business-mgt/tax-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L38) |
| <a id="ratetype"></a> `rateType` | [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md) | - | [src/core/business-mgt/tax-rule.schema.ts:39](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L39) |
| <a id="ratevalue"></a> `rateValue` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:40](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L40) |
| <a id="currency"></a> `currency` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:41](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L41) |
| <a id="catalogscope"></a> `catalogScope` | [`TaxCatalogScope`](../../type-definitions/enumerations/TaxCatalogScope.md) | - | [src/core/business-mgt/tax-rule.schema.ts:42](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L42) |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:43](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L43) |
| <a id="isinclusive"></a> `isInclusive` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:44](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L44) |
| <a id="priority"></a> `priority` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:45](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L45) |
| <a id="iscompound"></a> `isCompound` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:46](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L46) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:47](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L47) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:48](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L48) |
| <a id="isactive"></a> `isActive` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:49](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L49) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/tax-rule.schema.ts:84](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/tax-rule.schema.ts#L84) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L106) |
