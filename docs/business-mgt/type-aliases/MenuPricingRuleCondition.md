[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuPricingRuleCondition

# Type Alias: MenuPricingRuleCondition

```ts
type MenuPricingRuleCondition = {
  channel: PricingChannel;
  minOrderAmount?: number | null;
  maxOrderAmount?: number | null;
  customerGroupIds?: string[] | null;
  dayOfWeek?: number[] | null;
  timeStart?: string | null;
  timeEnd?: string | null;
  menuSetId: string;
  menuItemIds?: string[] | null;
  categoryIds?: string[] | null;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:132](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L132)

Menu pricing rule condition schema.
Menu-specific conditions for pricing rule application.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:32](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L32) |
| <a id="minorderamount"></a> `minOrderAmount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:33](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L33) |
| <a id="maxorderamount"></a> `maxOrderAmount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:34](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L34) |
| <a id="customergroupids"></a> `customerGroupIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L35) |
| <a id="dayofweek"></a> `dayOfWeek?` | `number`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L36) |
| <a id="timestart"></a> `timeStart?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L37) |
| <a id="timeend"></a> `timeEnd?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L38) |
| <a id="menusetid"></a> `menuSetId` | `string` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:51](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L51) |
| <a id="menuitemids"></a> `menuItemIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:52](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L52) |
| <a id="categoryids"></a> `categoryIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:53](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L53) |
