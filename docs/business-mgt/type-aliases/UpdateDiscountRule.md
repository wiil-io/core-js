[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateDiscountRule

# Type Alias: UpdateDiscountRule

```ts
type UpdateDiscountRule = {
  locationId?: string | null;
  name?: string;
  code?: string;
  value?: number;
  externalDiscountId?: string;
  minSubtotal?: number | null;
  customerSegment?: string;
  maxUses?: number | null;
  maxUsesPerCustomer?: number | null;
  effectiveFrom?: number | null;
  effectiveTo?: number | null;
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
  scope?:   | ORDER
     | ITEM
     | SHIPPING
     | SET
     | null;
  type?:   | PERCENTAGE
     | FIXED
     | null;
  currency?: string | null;
  catalogScope?:   | ALL
     | MENU
     | PRODUCT
     | SERVICE
     | SET
     | null;
  firstOrderOnly?: boolean | null;
  isStackable?: boolean | null;
  priority?: number | null;
  isActive?: boolean | null;
};
```

Defined in: [src/core/business-mgt/discount-rule.schema.ts:121](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L121)

Schema for updating an existing discount rule.
All fields optional except id.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:41](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L41) |
| <a id="name"></a> `name?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:42](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L42) |
| <a id="code"></a> `code?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:43](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L43) |
| <a id="value"></a> `value?` | `number` | - | [src/core/business-mgt/discount-rule.schema.ts:46](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L46) |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:49](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L49) |
| <a id="minsubtotal"></a> `minSubtotal?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:50](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L50) |
| <a id="customersegment"></a> `customerSegment?` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:51](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L51) |
| <a id="maxuses"></a> `maxUses?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:53](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L53) |
| <a id="maxusespercustomer"></a> `maxUsesPerCustomer?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:54](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L54) |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:57](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L57) |
| <a id="effectiveto"></a> `effectiveTo?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:58](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L58) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/discount-rule.schema.ts:96](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L96) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/type-definitions/display-order.ts#L106) |
| <a id="id"></a> `id` | `string` | - | [src/core/business-mgt/discount-rule.schema.ts:104](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L104) |
| <a id="scope"></a> `scope?` | \| [`ORDER`](../../type-definitions/enumerations/DiscountScope.md#order) \| [`ITEM`](../../type-definitions/enumerations/DiscountScope.md#item) \| [`SHIPPING`](../../type-definitions/enumerations/DiscountScope.md#shipping) \| [`SET`](../../type-definitions/enumerations/DiscountScope.md#set) \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:105](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L105) |
| <a id="type"></a> `type?` | \| [`PERCENTAGE`](../../type-definitions/enumerations/DiscountType.md#percentage) \| [`FIXED`](../../type-definitions/enumerations/DiscountType.md#fixed) \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:106](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L106) |
| <a id="currency"></a> `currency?` | `string` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:107](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L107) |
| <a id="catalogscope"></a> `catalogScope?` | \| [`ALL`](../../type-definitions/enumerations/DiscountCatalogScope.md#all) \| [`MENU`](../../type-definitions/enumerations/DiscountCatalogScope.md#menu) \| [`PRODUCT`](../../type-definitions/enumerations/DiscountCatalogScope.md#product) \| [`SERVICE`](../../type-definitions/enumerations/DiscountCatalogScope.md#service) \| [`SET`](../../type-definitions/enumerations/DiscountCatalogScope.md#set) \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:108](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L108) |
| <a id="firstorderonly"></a> `firstOrderOnly?` | `boolean` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:109](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L109) |
| <a id="isstackable"></a> `isStackable?` | `boolean` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:110](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L110) |
| <a id="priority"></a> `priority?` | `number` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:111](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L111) |
| <a id="isactive"></a> `isActive?` | `boolean` \| `null` | - | [src/core/business-mgt/discount-rule.schema.ts:112](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L112) |
