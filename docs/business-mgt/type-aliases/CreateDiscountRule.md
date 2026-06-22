[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateDiscountRule

# Type Alias: CreateDiscountRule

```ts
type CreateDiscountRule = {
  locationId?: string | null;
  name: string;
  code?: string;
  scope: DiscountScope;
  type: DiscountType;
  value: number;
  currency: string;
  catalogScope: DiscountCatalogScope;
  externalDiscountId?: string;
  minSubtotal?: number | null;
  customerSegment?: string;
  firstOrderOnly: boolean;
  maxUses?: number | null;
  maxUsesPerCustomer?: number | null;
  isStackable: boolean;
  priority: number;
  effectiveFrom?: number | null;
  effectiveTo?: number | null;
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

Defined in: [src/core/business-mgt/discount-rule.schema.ts:120](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L120)

Schema for creating a new discount rule.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:41](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L41) |
| <a id="name"></a> `name` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:42](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L42) |
| <a id="code"></a> `code?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:43](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L43) |
| <a id="scope"></a> `scope` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | - | [src/core/business-mgt/discount-rule.schema.ts:44](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L44) |
| <a id="type"></a> `type` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | - | [src/core/business-mgt/discount-rule.schema.ts:45](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L45) |
| <a id="value"></a> `value` | `number` | - | [src/core/business-mgt/discount-rule.schema.ts:46](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L46) |
| <a id="currency"></a> `currency` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:47](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L47) |
| <a id="catalogscope"></a> `catalogScope` | [`DiscountCatalogScope`](../../type-definitions/enumerations/DiscountCatalogScope.md) | - | [src/core/business-mgt/discount-rule.schema.ts:48](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L48) |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:49](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L49) |
| <a id="minsubtotal"></a> `minSubtotal?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:50](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L50) |
| <a id="customersegment"></a> `customerSegment?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:51](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L51) |
| <a id="firstorderonly"></a> `firstOrderOnly` | `boolean` | - | [src/core/business-mgt/discount-rule.schema.ts:52](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L52) |
| <a id="maxuses"></a> `maxUses?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:53](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L53) |
| <a id="maxusespercustomer"></a> `maxUsesPerCustomer?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:54](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L54) |
| <a id="isstackable"></a> `isStackable` | `boolean` | - | [src/core/business-mgt/discount-rule.schema.ts:55](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L55) |
| <a id="priority"></a> `priority` | `number` | - | [src/core/business-mgt/discount-rule.schema.ts:56](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L56) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:57](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L57) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:58](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L58) |
| <a id="isactive"></a> `isActive` | `boolean` | - | [src/core/business-mgt/discount-rule.schema.ts:59](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L59) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/discount-rule.schema.ts:96](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/discount-rule.schema.ts#L96) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/type-definitions/display-order.ts#L106) |
