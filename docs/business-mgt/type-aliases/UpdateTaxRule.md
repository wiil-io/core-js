[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateTaxRule

# Type Alias: UpdateTaxRule

```ts
type UpdateTaxRule = {
  locationId?: string | null;
  name?: string;
  scope?:   | ORDER
     | ITEM
     | SERVICE
     | DELIVERY;
  rateType?:   | PERCENTAGE
     | FIXED;
  rateValue?: number;
  currency?: string;
  catalogScope?:   | ALL
     | MENU
     | PRODUCT
     | SERVICE
     | SET;
  externalTaxId?: string;
  isInclusive?: boolean;
  priority?: number;
  isCompound?: boolean;
  effectiveFrom?: number | null;
  effectiveTo?: number | null;
  isActive?: boolean;
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
  id: string;
};
```

Defined in: [src/core/business-mgt/tax-rule.schema.ts:103](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L103)

Schema for updating an existing tax rule.
All fields optional except id.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/tax-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L36) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L37) |
| <a id="scope"></a> `scope?` | \| [`ORDER`](../../type-definitions/enumerations/TaxScope.md#order) \| [`ITEM`](../../type-definitions/enumerations/TaxScope.md#item) \| [`SERVICE`](../../type-definitions/enumerations/TaxScope.md#service) \| [`DELIVERY`](../../type-definitions/enumerations/TaxScope.md#delivery) | - | [src/core/business-mgt/tax-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L38) |
| <a id="ratetype"></a> `rateType?` | \| [`PERCENTAGE`](../../type-definitions/enumerations/TaxRateType.md#percentage) \| [`FIXED`](../../type-definitions/enumerations/TaxRateType.md#fixed) | - | [src/core/business-mgt/tax-rule.schema.ts:39](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L39) |
| <a id="ratevalue"></a> `rateValue?` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:40](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L40) |
| <a id="currency"></a> `currency?` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:41](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L41) |
| <a id="catalogscope"></a> `catalogScope?` | \| [`ALL`](../../type-definitions/enumerations/TaxCatalogScope.md#all) \| [`MENU`](../../type-definitions/enumerations/TaxCatalogScope.md#menu) \| [`PRODUCT`](../../type-definitions/enumerations/TaxCatalogScope.md#product) \| [`SERVICE`](../../type-definitions/enumerations/TaxCatalogScope.md#service) \| [`SET`](../../type-definitions/enumerations/TaxCatalogScope.md#set) | - | [src/core/business-mgt/tax-rule.schema.ts:42](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L42) |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:43](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L43) |
| <a id="isinclusive"></a> `isInclusive?` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:44](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L44) |
| <a id="priority"></a> `priority?` | `number` | - | [src/core/business-mgt/tax-rule.schema.ts:45](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L45) |
| <a id="iscompound"></a> `isCompound?` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:46](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L46) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | - | [src/core/business-mgt/tax-rule.schema.ts:47](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L47) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | - | [src/core/business-mgt/tax-rule.schema.ts:48](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L48) |
| <a id="isactive"></a> `isActive?` | `boolean` | - | [src/core/business-mgt/tax-rule.schema.ts:49](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L49) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/tax-rule.schema.ts:86](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L86) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L106) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/tax-rule.schema.ts:94](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/tax-rule.schema.ts#L94) |
