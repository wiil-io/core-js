[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppliedTax

# Type Alias: AppliedTax

```ts
type AppliedTax = {
  taxRuleId?: string;
  externalTaxId?: string;
  name: string;
  scope: TaxScope;
  rateType: TaxRateType;
  rateValue: number;
  taxableAmount: number;
  taxAmount: number;
  isInclusive: boolean;
};
```

Defined in: [src/core/business-mgt/order.schema.ts:156](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L156)

Applied tax schema.
Captures a tax applied to an order with calculated amounts.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="taxruleid"></a> `taxRuleId?` | `string` | [src/core/business-mgt/order.schema.ts:145](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L145) |
| <a id="externaltaxid"></a> `externalTaxId?` | `string` | [src/core/business-mgt/order.schema.ts:146](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L146) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/order.schema.ts:147](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L147) |
| <a id="scope"></a> `scope` | [`TaxScope`](../../type-definitions/enumerations/TaxScope.md) | [src/core/business-mgt/order.schema.ts:148](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L148) |
| <a id="ratetype"></a> `rateType` | [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md) | [src/core/business-mgt/order.schema.ts:149](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L149) |
| <a id="ratevalue"></a> `rateValue` | `number` | [src/core/business-mgt/order.schema.ts:150](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L150) |
| <a id="taxableamount"></a> `taxableAmount` | `number` | [src/core/business-mgt/order.schema.ts:151](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L151) |
| <a id="taxamount"></a> `taxAmount` | `number` | [src/core/business-mgt/order.schema.ts:152](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L152) |
| <a id="isinclusive"></a> `isInclusive` | `boolean` | [src/core/business-mgt/order.schema.ts:153](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/order.schema.ts#L153) |
