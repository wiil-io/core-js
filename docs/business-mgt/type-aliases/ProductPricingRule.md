[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductPricingRule

# Type Alias: ProductPricingRule

```ts
type ProductPricingRule = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  name: string;
  channelMappings?:   | {
     channelId: string;
     externalPricingRuleId: string;
   }[]
     | null;
  discountId: string;
  productSetRevisionId?: string;
  condition: {
     daysOfWeek: number[];
     startMinute?: number;
     endMinute?: number;
     customerSegmentIds?: string[];
     channel: PricingChannel;
     productSetId: string;
  };
  effectiveFrom?: number;
  effectiveTo?: number;
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/product-management/product-pricing-rule.schema.ts:80

Product pricing rule schema.
Defines promotional pricing logic applied to product orders.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:32 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:33 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:34 |
| <a id="discountid"></a> `discountId` | `string` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:35 |
| <a id="productsetrevisionid"></a> `productSetRevisionId?` | `string` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:36 |
| <a id="condition"></a> `condition` | \{ `daysOfWeek`: `number`[]; `startMinute?`: `number`; `endMinute?`: `number`; `customerSegmentIds?`: `string`[]; `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `productSetId`: `string`; \} | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:37 |
| `condition.daysOfWeek` | `number`[] | src/core/business-mgt/pricing-rule.shared.schema.ts:47 |
| `condition.startMinute?` | `number` | src/core/business-mgt/pricing-rule.shared.schema.ts:48 |
| `condition.endMinute?` | `number` | src/core/business-mgt/pricing-rule.shared.schema.ts:49 |
| `condition.customerSegmentIds?` | `string`[] | src/core/business-mgt/pricing-rule.shared.schema.ts:50 |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | src/core/business-mgt/pricing-rule.shared.schema.ts:51 |
| `condition.productSetId` | `string` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:20 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:38 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:39 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-management/product-pricing-rule.schema.ts:40 |
