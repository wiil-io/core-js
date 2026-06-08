[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PricingRuleCommonCondition

# Type Alias: PricingRuleCommonCondition

```ts
type PricingRuleCommonCondition = {
  daysOfWeek: number[];
  startMinute?: number;
  endMinute?: number;
  customerSegmentIds?: string[];
  channel: PricingChannel;
};
```

Defined in: src/core/business-mgt/pricing-rule.shared.schema.ts:83

Pricing rule common condition schema.
Defines when a pricing rule should be applied based on time, day, customer, and channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="daysofweek"></a> `daysOfWeek` | `number`[] | src/core/business-mgt/pricing-rule.shared.schema.ts:47 |
| <a id="startminute"></a> `startMinute?` | `number` | src/core/business-mgt/pricing-rule.shared.schema.ts:48 |
| <a id="endminute"></a> `endMinute?` | `number` | src/core/business-mgt/pricing-rule.shared.schema.ts:49 |
| <a id="customersegmentids"></a> `customerSegmentIds?` | `string`[] | src/core/business-mgt/pricing-rule.shared.schema.ts:50 |
| <a id="channel"></a> `channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | src/core/business-mgt/pricing-rule.shared.schema.ts:51 |
