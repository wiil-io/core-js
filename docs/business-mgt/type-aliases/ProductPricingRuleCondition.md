[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductPricingRuleCondition

# Type Alias: ProductPricingRuleCondition

```ts
type ProductPricingRuleCondition = {
  daysOfWeek: number[];
  startMinute?: number;
  endMinute?: number;
  customerSegmentIds?: string[];
  channel: PricingChannel;
  productSetId: string;
};
```

Defined in: [src/core/business-mgt/product-management/product-pricing-rule.schema.ts:79](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-pricing-rule.schema.ts#L79)

Product pricing rule condition schema.
Extends common pricing conditions with product set targeting.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="daysofweek"></a> `daysOfWeek` | `number`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:47](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/pricing-rule.shared.schema.ts#L47) |
| <a id="startminute"></a> `startMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:48](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/pricing-rule.shared.schema.ts#L48) |
| <a id="endminute"></a> `endMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:49](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/pricing-rule.shared.schema.ts#L49) |
| <a id="customersegmentids"></a> `customerSegmentIds?` | `string`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:50](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/pricing-rule.shared.schema.ts#L50) |
| <a id="channel"></a> `channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | [src/core/business-mgt/pricing-rule.shared.schema.ts:51](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/pricing-rule.shared.schema.ts#L51) |
| <a id="productsetid"></a> `productSetId` | `string` | [src/core/business-mgt/product-management/product-pricing-rule.schema.ts:20](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/product-management/product-pricing-rule.schema.ts#L20) |
