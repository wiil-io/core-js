[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TaxRule

# Type Alias: TaxRule

```ts
type TaxRule = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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
};
```

Defined in: src/core/business-mgt/tax-rule.schema.ts:99

Tax rule schema.
Defines tax configurations for orders including percentage and fixed amount taxes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/tax-rule.schema.ts:36 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/tax-rule.schema.ts:37 |
| <a id="scope"></a> `scope` | [`TaxScope`](../../type-definitions/enumerations/TaxScope.md) | src/core/business-mgt/tax-rule.schema.ts:38 |
| <a id="ratetype"></a> `rateType` | [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md) | src/core/business-mgt/tax-rule.schema.ts:39 |
| <a id="ratevalue"></a> `rateValue` | `number` | src/core/business-mgt/tax-rule.schema.ts:40 |
| <a id="currency"></a> `currency` | `string` | src/core/business-mgt/tax-rule.schema.ts:41 |
| <a id="catalogscope"></a> `catalogScope` | [`TaxCatalogScope`](../../type-definitions/enumerations/TaxCatalogScope.md) | src/core/business-mgt/tax-rule.schema.ts:42 |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | src/core/business-mgt/tax-rule.schema.ts:43 |
| <a id="isinclusive"></a> `isInclusive` | `boolean` | src/core/business-mgt/tax-rule.schema.ts:44 |
| <a id="priority"></a> `priority` | `number` | src/core/business-mgt/tax-rule.schema.ts:45 |
| <a id="iscompound"></a> `isCompound` | `boolean` | src/core/business-mgt/tax-rule.schema.ts:46 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | src/core/business-mgt/tax-rule.schema.ts:47 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | src/core/business-mgt/tax-rule.schema.ts:48 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/tax-rule.schema.ts:49 |
