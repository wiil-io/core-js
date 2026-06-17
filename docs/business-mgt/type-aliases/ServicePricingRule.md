[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServicePricingRule

# Type Alias: ServicePricingRule

```ts
type ServicePricingRule = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  name: string;
  applyLevel: PricingRuleApplyLevel;
  isStackable: boolean;
  priority: number;
  channelMappings?:   | {
     channelId: string;
     externalPricingRuleId: string;
   }[]
     | null;
  condition: {
     daysOfWeek: number[];
     startMinute?: number;
     endMinute?: number;
     customerSegmentIds?: string[];
     channel: PricingChannel;
     allServices: boolean;
     serviceIdsAny: string[];
     serviceIdsAll: string[];
  };
  action: {
     adjustmentType: PricingRuleAdjustmentType;
     adjustmentValue: number;
     currency: string;
     maxAdjustmentAmount?: number;
  };
  effectiveFrom?: number;
  effectiveTo?: number;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:135](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L135)

Service Pricing Rule schema.
Defines a pricing rule for service-based pricing adjustments.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:71](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L71) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:72](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L72) |
| <a id="applylevel"></a> `applyLevel` | [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md) | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:73](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L73) |
| <a id="isstackable"></a> `isStackable` | `boolean` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:74](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L74) |
| <a id="priority"></a> `priority` | `number` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:75](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L75) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:76](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L76) |
| <a id="condition"></a> `condition` | \{ `daysOfWeek`: `number`[]; `startMinute?`: `number`; `endMinute?`: `number`; `customerSegmentIds?`: `string`[]; `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `allServices`: `boolean`; `serviceIdsAny`: `string`[]; `serviceIdsAll`: `string`[]; \} | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:77](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L77) |
| `condition.daysOfWeek` | `number`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:47](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L47) |
| `condition.startMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:48](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L48) |
| `condition.endMinute?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:49](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L49) |
| `condition.customerSegmentIds?` | `string`[] | [src/core/business-mgt/pricing-rule.shared.schema.ts:50](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L50) |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | [src/core/business-mgt/pricing-rule.shared.schema.ts:51](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L51) |
| `condition.allServices` | `boolean` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L35) |
| `condition.serviceIdsAny` | `string`[] | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L36) |
| `condition.serviceIdsAll` | `string`[] | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L37) |
| <a id="action"></a> `action` | \{ `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `currency`: `string`; `maxAdjustmentAmount?`: `number`; \} | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:84](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L84) |
| `action.adjustmentType` | [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md) | [src/core/business-mgt/pricing-rule.shared.schema.ts:73](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L73) |
| `action.adjustmentValue` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:74](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L74) |
| `action.currency` | `string` | [src/core/business-mgt/pricing-rule.shared.schema.ts:75](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L75) |
| `action.maxAdjustmentAmount?` | `number` | [src/core/business-mgt/pricing-rule.shared.schema.ts:76](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/pricing-rule.shared.schema.ts#L76) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:85](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L85) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:86](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L86) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:87](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L87) |
