[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:132

Menu pricing rule condition schema.
Menu-specific conditions for pricing rule application.

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
| <a id="menusetid"></a> `menuSetId` | `string` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:51 |
| <a id="menuitemids"></a> `menuItemIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:52 |
| <a id="categoryids"></a> `categoryIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:53 |
