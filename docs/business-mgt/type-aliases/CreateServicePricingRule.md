[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServicePricingRule

# Type Alias: CreateServicePricingRule

```ts
type CreateServicePricingRule = {
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
};
```

Defined in: src/core/business-mgt/service-management/service-pricing-rule.schema.ts:136

Schema for creating a new service pricing rule.
Omits auto-generated fields, includes optional placement for ordering.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:71 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:72 |
| <a id="applylevel"></a> `applyLevel` | [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md) | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:73 |
| <a id="isstackable"></a> `isStackable` | `boolean` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:74 |
| <a id="priority"></a> `priority` | `number` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:75 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:76 |
| <a id="condition"></a> `condition` | \{ `daysOfWeek`: `number`[]; `startMinute?`: `number`; `endMinute?`: `number`; `customerSegmentIds?`: `string`[]; `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `allServices`: `boolean`; `serviceIdsAny`: `string`[]; `serviceIdsAll`: `string`[]; \} | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:77 |
| `condition.daysOfWeek` | `number`[] | - | src/core/business-mgt/pricing-rule.shared.schema.ts:47 |
| `condition.startMinute?` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:48 |
| `condition.endMinute?` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:49 |
| `condition.customerSegmentIds?` | `string`[] | - | src/core/business-mgt/pricing-rule.shared.schema.ts:50 |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | - | src/core/business-mgt/pricing-rule.shared.schema.ts:51 |
| `condition.allServices` | `boolean` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:35 |
| `condition.serviceIdsAny` | `string`[] | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:36 |
| `condition.serviceIdsAll` | `string`[] | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:37 |
| <a id="action"></a> `action` | \{ `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `currency`: `string`; `maxAdjustmentAmount?`: `number`; \} | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:84 |
| `action.adjustmentType` | [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md) | - | src/core/business-mgt/pricing-rule.shared.schema.ts:73 |
| `action.adjustmentValue` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:74 |
| `action.currency` | `string` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:75 |
| `action.maxAdjustmentAmount?` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:76 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:85 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:86 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:87 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/service-management/service-pricing-rule.schema.ts:119 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
