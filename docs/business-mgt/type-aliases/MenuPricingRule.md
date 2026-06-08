[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuPricingRule

# Type Alias: MenuPricingRule

```ts
type MenuPricingRule = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  name: string;
  description?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalPricingRuleId: string;
   }[]
     | null;
  discountId: string;
  menuSetRevisionId?: string | null;
  condition: {
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
  effectiveFrom?: number | null;
  effectiveTo?: number | null;
  priority: number;
  displayOrder: number;
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:133

Menu pricing rule schema.
Defines pricing rules for menu-specific discounts and promotions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:79 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:80 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:81 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:82 |
| <a id="discountid"></a> `discountId` | `string` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:83 |
| <a id="menusetrevisionid"></a> `menuSetRevisionId?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:84 |
| <a id="condition"></a> `condition` | \{ `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `minOrderAmount?`: `number` \| `null`; `maxOrderAmount?`: `number` \| `null`; `customerGroupIds?`: `string`[] \| `null`; `dayOfWeek?`: `number`[] \| `null`; `timeStart?`: `string` \| `null`; `timeEnd?`: `string` \| `null`; `menuSetId`: `string`; `menuItemIds?`: `string`[] \| `null`; `categoryIds?`: `string`[] \| `null`; \} | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:85 |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:32 |
| `condition.minOrderAmount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:33 |
| `condition.maxOrderAmount?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:34 |
| `condition.customerGroupIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:35 |
| `condition.dayOfWeek?` | `number`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:36 |
| `condition.timeStart?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:37 |
| `condition.timeEnd?` | `string` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:38 |
| `condition.menuSetId` | `string` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:51 |
| `condition.menuItemIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:52 |
| `condition.categoryIds?` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:53 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:86 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:87 |
| <a id="priority"></a> `priority` | `number` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:88 |
| <a id="displayorder"></a> `displayOrder` | `number` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:89 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:90 |
