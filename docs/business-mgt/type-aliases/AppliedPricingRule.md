[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppliedPricingRule

# Type Alias: AppliedPricingRule

```ts
type AppliedPricingRule = {
  pricingRuleId?: string;
  externalPricingRuleId?: string;
  name: string;
  applyLevel: PricingRuleApplyLevel;
  adjustmentType: PricingRuleAdjustmentType;
  adjustmentValue: number;
  baseAmount: number;
  adjustedAmount: number;
  deltaAmount: number;
  appliedAt?: number;
};
```

Defined in: [src/core/business-mgt/order.schema.ts:123](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L123)

Applied pricing rule schema.
Captures a pricing rule applied to an order with calculated adjustments.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="pricingruleid"></a> `pricingRuleId?` | `string` | [src/core/business-mgt/order.schema.ts:111](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L111) |
| <a id="externalpricingruleid"></a> `externalPricingRuleId?` | `string` | [src/core/business-mgt/order.schema.ts:112](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L112) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/order.schema.ts:113](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L113) |
| <a id="applylevel"></a> `applyLevel` | [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md) | [src/core/business-mgt/order.schema.ts:114](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L114) |
| <a id="adjustmenttype"></a> `adjustmentType` | [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md) | [src/core/business-mgt/order.schema.ts:115](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L115) |
| <a id="adjustmentvalue"></a> `adjustmentValue` | `number` | [src/core/business-mgt/order.schema.ts:116](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L116) |
| <a id="baseamount"></a> `baseAmount` | `number` | [src/core/business-mgt/order.schema.ts:117](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L117) |
| <a id="adjustedamount"></a> `adjustedAmount` | `number` | [src/core/business-mgt/order.schema.ts:118](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L118) |
| <a id="deltaamount"></a> `deltaAmount` | `number` | [src/core/business-mgt/order.schema.ts:119](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L119) |
| <a id="appliedat"></a> `appliedAt?` | `number` | [src/core/business-mgt/order.schema.ts:120](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/business-mgt/order.schema.ts#L120) |
