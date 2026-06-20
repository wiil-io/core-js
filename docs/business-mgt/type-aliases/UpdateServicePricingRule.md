[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServicePricingRule

# Type Alias: UpdateServicePricingRule

```ts
type UpdateServicePricingRule = {
  locationId?: string | null;
  name?: string;
  applyLevel?:   | ITEM
     | ORDER;
  isStackable?: boolean;
  priority?: number;
  channelMappings?:   | {
     channelId: string;
     externalPricingRuleId: string;
   }[]
     | null;
  condition?: {
     daysOfWeek: number[];
     startMinute?: number;
     endMinute?: number;
     customerSegmentIds?: string[];
     channel: PricingChannel;
     allServices: boolean;
     serviceIdsAny: string[];
     serviceIdsAll: string[];
  };
  action?: {
     adjustmentType: PricingRuleAdjustmentType;
     adjustmentValue: number;
     currency: string;
     maxAdjustmentAmount?: number;
  };
  effectiveFrom?: number;
  effectiveTo?: number;
  isActive?: boolean;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
  id: string;
};
```

Defined in: [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:137](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L137)

Schema for updating an existing service pricing rule.
All fields optional except id (required).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:71](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L71) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:72](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L72) |
| <a id="applylevel"></a> `applyLevel?` | \| [`ITEM`](../../type-definitions/enumerations/PricingRuleApplyLevel.md#item) \| [`ORDER`](../../type-definitions/enumerations/PricingRuleApplyLevel.md#order) | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:73](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L73) |
| <a id="isstackable"></a> `isStackable?` | `boolean` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:74](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L74) |
| <a id="priority"></a> `priority?` | `number` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:75](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L75) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:76](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L76) |
| <a id="condition"></a> `condition?` | \{ `daysOfWeek`: `number`[]; `startMinute?`: `number`; `endMinute?`: `number`; `customerSegmentIds?`: `string`[]; `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `allServices`: `boolean`; `serviceIdsAny`: `string`[]; `serviceIdsAll`: `string`[]; \} | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:77](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L77) |
| `condition.daysOfWeek` | `number`[] | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:47](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L47) |
| `condition.startMinute?` | `number` | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:48](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L48) |
| `condition.endMinute?` | `number` | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:49](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L49) |
| `condition.customerSegmentIds?` | `string`[] | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:50](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L50) |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:51](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L51) |
| `condition.allServices` | `boolean` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L35) |
| `condition.serviceIdsAny` | `string`[] | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L36) |
| `condition.serviceIdsAll` | `string`[] | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L37) |
| <a id="action"></a> `action?` | \{ `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `currency`: `string`; `maxAdjustmentAmount?`: `number`; \} | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:84](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L84) |
| `action.adjustmentType` | [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md) | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:73](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L73) |
| `action.adjustmentValue` | `number` | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:74](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L74) |
| `action.currency` | `string` | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:75](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L75) |
| `action.maxAdjustmentAmount?` | `number` | - | [src/core/business-mgt/pricing-rule.shared.schema.ts:76](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/pricing-rule.shared.schema.ts#L76) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:85](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L85) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:86](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L86) |
| <a id="isactive"></a> `isActive?` | `boolean` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:87](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L87) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:119](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L119) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/type-definitions/display-order.ts#L106) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/service-management/service-pricing-rule.schema.ts:127](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/service-management/service-pricing-rule.schema.ts#L127) |
