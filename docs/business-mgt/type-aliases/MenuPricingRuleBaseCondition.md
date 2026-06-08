[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuPricingRuleBaseCondition

# Type Alias: MenuPricingRuleBaseCondition

```ts
type MenuPricingRuleBaseCondition = {
  channel: PricingChannel;
  minOrderAmount?: number | null;
  maxOrderAmount?: number | null;
  customerGroupIds?: string[] | null;
  dayOfWeek?: number[] | null;
  timeStart?: string | null;
  timeEnd?: string | null;
};
```

Defined in: src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:131

Menu pricing rule base condition schema.
Base conditions for menu pricing rules including time and amount restrictions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:32 |
| <a id="minorderamount"></a> `minOrderAmount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:33 |
| <a id="maxorderamount"></a> `maxOrderAmount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:34 |
| <a id="customergroupids"></a> `customerGroupIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:35 |
| <a id="dayofweek"></a> `dayOfWeek?` | `number`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:36 |
| <a id="timestart"></a> `timeStart?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:37 |
| <a id="timeend"></a> `timeEnd?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:38 |
