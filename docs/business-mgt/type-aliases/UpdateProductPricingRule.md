[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProductPricingRule

# Type Alias: UpdateProductPricingRule

```ts
type UpdateProductPricingRule = {
  locationId?: string | null;
  name?: string;
  channelMappings?:   | {
     channelId: string;
     externalPricingRuleId: string;
   }[]
     | null;
  discountId?: string;
  productSetRevisionId?: string;
  condition?: {
     daysOfWeek: number[];
     startMinute?: number;
     endMinute?: number;
     customerSegmentIds?: string[];
     channel: PricingChannel;
     productSetId: string;
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

Defined in: src/core/business-mgt/product-management/product-pricing-rule.schema.ts:82

Schema for updating an existing product pricing rule.
All fields optional except id (required).

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:32 |
| <a id="name"></a> `name?` | `string` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:33 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:34 |
| <a id="discountid"></a> `discountId?` | `string` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:35 |
| <a id="productsetrevisionid"></a> `productSetRevisionId?` | `string` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:36 |
| <a id="condition"></a> `condition?` | \{ `daysOfWeek`: `number`[]; `startMinute?`: `number`; `endMinute?`: `number`; `customerSegmentIds?`: `string`[]; `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `productSetId`: `string`; \} | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:37 |
| `condition.daysOfWeek` | `number`[] | - | src/core/business-mgt/pricing-rule.shared.schema.ts:47 |
| `condition.startMinute?` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:48 |
| `condition.endMinute?` | `number` | - | src/core/business-mgt/pricing-rule.shared.schema.ts:49 |
| `condition.customerSegmentIds?` | `string`[] | - | src/core/business-mgt/pricing-rule.shared.schema.ts:50 |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | - | src/core/business-mgt/pricing-rule.shared.schema.ts:51 |
| `condition.productSetId` | `string` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:20 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:38 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:39 |
| <a id="isactive"></a> `isActive?` | `boolean` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:40 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:64 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
| <a id="id"></a> `id` | `string` | - | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:72 |
