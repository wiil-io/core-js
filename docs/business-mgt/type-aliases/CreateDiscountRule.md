[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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
  minSubtotal?: number;
  customerSegment?: string;
  firstOrderOnly: boolean;
  maxUses?: number;
  maxUsesPerCustomer?: number;
  isStackable: boolean;
  priority: number;
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

Defined in: src/core/business-mgt/discount-rule.schema.ts:110

Schema for creating a new discount rule.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/discount-rule.schema.ts:41 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:42 |
| <a id="code"></a> `code?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:43 |
| <a id="scope"></a> `scope` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | - | src/core/business-mgt/discount-rule.schema.ts:44 |
| <a id="type"></a> `type` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | - | src/core/business-mgt/discount-rule.schema.ts:45 |
| <a id="value"></a> `value` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:46 |
| <a id="currency"></a> `currency` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:47 |
| <a id="catalogscope"></a> `catalogScope` | [`DiscountCatalogScope`](../../type-definitions/enumerations/DiscountCatalogScope.md) | - | src/core/business-mgt/discount-rule.schema.ts:48 |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:49 |
| <a id="minsubtotal"></a> `minSubtotal?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:50 |
| <a id="customersegment"></a> `customerSegment?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:51 |
| <a id="firstorderonly"></a> `firstOrderOnly` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:52 |
| <a id="maxuses"></a> `maxUses?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:53 |
| <a id="maxusespercustomer"></a> `maxUsesPerCustomer?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:54 |
| <a id="isstackable"></a> `isStackable` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:55 |
| <a id="priority"></a> `priority` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:56 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:57 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:58 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:59 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/discount-rule.schema.ts:94 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
