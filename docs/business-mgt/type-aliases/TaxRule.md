[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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
  effectiveFrom?: number | null;
  effectiveTo?: number | null;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/tax-rule.schema.ts:101](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L101)

Tax rule schema.
Defines tax configurations for orders including percentage and fixed amount taxes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/tax-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L36) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/tax-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L37) |
| <a id="scope"></a> `scope` | [`TaxScope`](../../type-definitions/enumerations/TaxScope.md) | [src/core/business-mgt/tax-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L38) |
| <a id="ratetype"></a> `rateType` | [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md) | [src/core/business-mgt/tax-rule.schema.ts:39](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L39) |
| <a id="ratevalue"></a> `rateValue` | `number` | [src/core/business-mgt/tax-rule.schema.ts:40](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L40) |
| <a id="currency"></a> `currency` | `string` | [src/core/business-mgt/tax-rule.schema.ts:41](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L41) |
| <a id="catalogscope"></a> `catalogScope` | [`TaxCatalogScope`](../../type-definitions/enumerations/TaxCatalogScope.md) | [src/core/business-mgt/tax-rule.schema.ts:42](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L42) |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | [src/core/business-mgt/tax-rule.schema.ts:43](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L43) |
| <a id="isinclusive"></a> `isInclusive` | `boolean` | [src/core/business-mgt/tax-rule.schema.ts:44](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L44) |
| <a id="priority"></a> `priority` | `number` | [src/core/business-mgt/tax-rule.schema.ts:45](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L45) |
| <a id="iscompound"></a> `isCompound` | `boolean` | [src/core/business-mgt/tax-rule.schema.ts:46](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L46) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | [src/core/business-mgt/tax-rule.schema.ts:47](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L47) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | [src/core/business-mgt/tax-rule.schema.ts:48](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L48) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/tax-rule.schema.ts:49](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/tax-rule.schema.ts#L49) |
