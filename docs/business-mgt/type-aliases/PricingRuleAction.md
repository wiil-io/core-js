[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.64**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PricingRuleAction

# Type Alias: PricingRuleAction

```ts
type PricingRuleAction = {
  adjustmentType: PricingRuleAdjustmentType;
  adjustmentValue: number;
  currency: string;
  maxAdjustmentAmount?: number;
};
```

Defined in: [src/core/business-mgt/pricing-rule.shared.schema.ts:84](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/pricing-rule.shared.schema.ts#L84)

Pricing rule action schema.
Defines the price adjustment to apply when rule conditions are met.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="adjustmenttype"></a> `adjustmentType` | [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md) | [src/core/business-mgt/pricing-rule.shared.schema.ts:73](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/pricing-rule.shared.schema.ts#L73) |
| <a id="adjustmentvalue"></a> `adjustmentValue` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:74](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/pricing-rule.shared.schema.ts#L74) |
| <a id="currency"></a> `currency` | `string` | [src/core/business-mgt/pricing-rule.shared.schema.ts:75](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/pricing-rule.shared.schema.ts#L75) |
| <a id="maxadjustmentamount"></a> `maxAdjustmentAmount?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:76](https://github.com/wiil-io/core-js/blob/ef506f541e734fb6e21f90ac213a4af673554dd5/src/core/business-mgt/pricing-rule.shared.schema.ts#L76) |
