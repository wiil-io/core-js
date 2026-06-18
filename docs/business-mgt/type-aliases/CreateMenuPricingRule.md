[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateMenuPricingRule

# Type Alias: CreateMenuPricingRule

```ts
type CreateMenuPricingRule = {
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

Defined in: [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:134](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L134)

Schema for creating a new menu pricing rule.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:79](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L79) |
| <a id="name"></a> `name` | `string` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:80](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L80) |
| <a id="description"></a> `description?` | `string` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:81](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L81) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalPricingRuleId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:82](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L82) |
| <a id="discountid"></a> `discountId` | `string` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:83](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L83) |
| <a id="menusetrevisionid"></a> `menuSetRevisionId?` | `string` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:84](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L84) |
| <a id="condition"></a> `condition` | \{ `channel`: [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md); `minOrderAmount?`: `number` \| `null`; `maxOrderAmount?`: `number` \| `null`; `customerGroupIds?`: `string`[] \| `null`; `dayOfWeek?`: `number`[] \| `null`; `timeStart?`: `string` \| `null`; `timeEnd?`: `string` \| `null`; `menuSetId`: `string`; `menuItemIds?`: `string`[] \| `null`; `categoryIds?`: `string`[] \| `null`; \} | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:85](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L85) |
| `condition.channel` | [`PricingChannel`](../../type-definitions/enumerations/PricingChannel.md) | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:32](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L32) |
| `condition.minOrderAmount?` | `number` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:33](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L33) |
| `condition.maxOrderAmount?` | `number` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:34](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L34) |
| `condition.customerGroupIds?` | `string`[] \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:35](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L35) |
| `condition.dayOfWeek?` | `number`[] \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:36](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L36) |
| `condition.timeStart?` | `string` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:37](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L37) |
| `condition.timeEnd?` | `string` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:38](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L38) |
| `condition.menuSetId` | `string` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:51](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L51) |
| `condition.menuItemIds?` | `string`[] \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:52](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L52) |
| `condition.categoryIds?` | `string`[] \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:53](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L53) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:86](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L86) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:87](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L87) |
| <a id="priority"></a> `priority` | `number` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:88](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L88) |
| <a id="displayorder"></a> `displayOrder` | `number` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:89](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L89) |
| <a id="isactive"></a> `isActive` | `boolean` | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:90](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L90) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts:116](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu-pricing-rule.schema.ts#L116) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/type-definitions/display-order.ts#L106) |
