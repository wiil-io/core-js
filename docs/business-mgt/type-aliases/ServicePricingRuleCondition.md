[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.57**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServicePricingRuleCondition

# Type Alias: ServicePricingRuleCondition

```ts
type ServicePricingRuleCondition = {
  daysOfWeek: number[];
  startMinute?: number;
  endMinute?: number;
  customerSegmentIds?: string[];
  channel: PricingChannel;
  allServices: boolean;
  serviceIdsAny: string[];
  serviceIdsAll: string[];
};
```

Defined in: [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:134](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L134)

Service pricing rule condition schema.
Extends common pricing conditions with service-specific targeting.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="daysofweek"></a> `daysOfWeek` | `number`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:47](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/pricing-rule.shared.schema.ts#L47) |
| <a id="startminute"></a> `startMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:48](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/pricing-rule.shared.schema.ts#L48) |
| <a id="endminute"></a> `endMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:49](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/pricing-rule.shared.schema.ts#L49) |
| <a id="customersegmentids"></a> `customerSegmentIds?` | `string`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:50](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/pricing-rule.shared.schema.ts#L50) |
| <a id="channel"></a> `channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | [src/core/business-mgt/pricing-rule.shared.schema.ts:51](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/pricing-rule.shared.schema.ts#L51) |
| <a id="allservices"></a> `allServices` | `boolean` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L35) |
| <a id="serviceidsany"></a> `serviceIdsAny` | `string`[] | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L36) |
| <a id="serviceidsall"></a> `serviceIdsAll` | `string`[] | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L37) |
