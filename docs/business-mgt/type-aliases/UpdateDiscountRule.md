[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateDiscountRule

# Type Alias: UpdateDiscountRule

```ts
type UpdateDiscountRule = {
  locationId?: string | null;
  name?: string;
  code?: string;
  scope?:   | ORDER
     | ITEM
     | SHIPPING
     | SET;
  type?:   | PERCENTAGE
     | FIXED;
  value?: number;
  currency?: string;
  catalogScope?:   | ALL
     | MENU
     | PRODUCT
     | SERVICE
     | SET;
  externalDiscountId?: string;
  minSubtotal?: number;
  customerSegment?: string;
  firstOrderOnly?: boolean;
  maxUses?: number;
  maxUsesPerCustomer?: number;
  isStackable?: boolean;
  priority?: number;
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

Defined in: src/core/business-mgt/discount-rule.schema.ts:111

Schema for updating an existing discount rule.
All fields optional except id.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | src/core/business-mgt/discount-rule.schema.ts:41 |
| <a id="name"></a> `name?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:42 |
| <a id="code"></a> `code?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:43 |
| <a id="scope"></a> `scope?` | \| [`ORDER`](../../type-definitions/enumerations/DiscountScope.md#order) \| [`ITEM`](../../type-definitions/enumerations/DiscountScope.md#item) \| [`SHIPPING`](../../type-definitions/enumerations/DiscountScope.md#shipping) \| [`SET`](../../type-definitions/enumerations/DiscountScope.md#set) | - | src/core/business-mgt/discount-rule.schema.ts:44 |
| <a id="type"></a> `type?` | \| [`PERCENTAGE`](../../type-definitions/enumerations/DiscountType.md#percentage) \| [`FIXED`](../../type-definitions/enumerations/DiscountType.md#fixed) | - | src/core/business-mgt/discount-rule.schema.ts:45 |
| <a id="value"></a> `value?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:46 |
| <a id="currency"></a> `currency?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:47 |
| <a id="catalogscope"></a> `catalogScope?` | \| [`ALL`](../../type-definitions/enumerations/DiscountCatalogScope.md#all) \| [`MENU`](../../type-definitions/enumerations/DiscountCatalogScope.md#menu) \| [`PRODUCT`](../../type-definitions/enumerations/DiscountCatalogScope.md#product) \| [`SERVICE`](../../type-definitions/enumerations/DiscountCatalogScope.md#service) \| [`SET`](../../type-definitions/enumerations/DiscountCatalogScope.md#set) | - | src/core/business-mgt/discount-rule.schema.ts:48 |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:49 |
| <a id="minsubtotal"></a> `minSubtotal?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:50 |
| <a id="customersegment"></a> `customerSegment?` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:51 |
| <a id="firstorderonly"></a> `firstOrderOnly?` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:52 |
| <a id="maxuses"></a> `maxUses?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:53 |
| <a id="maxusespercustomer"></a> `maxUsesPerCustomer?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:54 |
| <a id="isstackable"></a> `isStackable?` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:55 |
| <a id="priority"></a> `priority?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:56 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:57 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | - | src/core/business-mgt/discount-rule.schema.ts:58 |
| <a id="isactive"></a> `isActive?` | `boolean` | - | src/core/business-mgt/discount-rule.schema.ts:59 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/discount-rule.schema.ts:94 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
| <a id="id"></a> `id` | `string` | - | src/core/business-mgt/discount-rule.schema.ts:102 |
