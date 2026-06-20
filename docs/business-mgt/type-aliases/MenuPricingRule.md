[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

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
  displayOrder: number;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:131](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L131)

Menu pricing rule schema.
Defines pricing rules for menu-specific discounts and promotions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:78](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L78) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:79](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L79) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:80](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L80) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:81](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L81) |
| <a id="discountid"></a> `discountId` | `string` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:82](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L82) |
| <a id="menusetrevisionid"></a> `menuSetRevisionId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:83](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L83) |
| <a id="condition"></a> `condition` | \{ `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `minOrderAmount?`: `number` \| `null`; `maxOrderAmount?`: `number` \| `null`; `customerGroupIds?`: `string`[] \| `null`; `dayOfWeek?`: `number`[] \| `null`; `timeStart?`: `string` \| `null`; `timeEnd?`: `string` \| `null`; `menuSetId`: `string`; `menuItemIds?`: `string`[] \| `null`; `categoryIds?`: `string`[] \| `null`; \} | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:84](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L84) |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:32](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L32) |
| `condition.minOrderAmount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:33](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L33) |
| `condition.maxOrderAmount?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:34](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L34) |
| `condition.customerGroupIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L35) |
| `condition.dayOfWeek?` | `number`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L36) |
| `condition.timeStart?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L37) |
| `condition.timeEnd?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L38) |
| `condition.menuSetId` | `string` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:51](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L51) |
| `condition.menuItemIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:52](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L52) |
| `condition.categoryIds?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:53](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L53) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:85](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L85) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:86](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L86) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:87](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L87) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:88](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L88) |
