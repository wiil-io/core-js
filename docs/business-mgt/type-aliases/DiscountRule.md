[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / DiscountRule

# Type Alias: DiscountRule

```ts
type DiscountRule = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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
};
```

Defined in: src/core/business-mgt/discount-rule.schema.ts:109

Discount rule schema.
Defines discount configurations for orders including percentage and fixed amount discounts.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/discount-rule.schema.ts:41 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/discount-rule.schema.ts:42 |
| <a id="code"></a> `code?` | `string` | src/core/business-mgt/discount-rule.schema.ts:43 |
| <a id="scope"></a> `scope` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | src/core/business-mgt/discount-rule.schema.ts:44 |
| <a id="type"></a> `type` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | src/core/business-mgt/discount-rule.schema.ts:45 |
| <a id="value"></a> `value` | `number` | src/core/business-mgt/discount-rule.schema.ts:46 |
| <a id="currency"></a> `currency` | `string` | src/core/business-mgt/discount-rule.schema.ts:47 |
| <a id="catalogscope"></a> `catalogScope` | [`DiscountCatalogScope`](../../type-definitions/enumerations/DiscountCatalogScope.md) | src/core/business-mgt/discount-rule.schema.ts:48 |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | src/core/business-mgt/discount-rule.schema.ts:49 |
| <a id="minsubtotal"></a> `minSubtotal?` | `number` | src/core/business-mgt/discount-rule.schema.ts:50 |
| <a id="customersegment"></a> `customerSegment?` | `string` | src/core/business-mgt/discount-rule.schema.ts:51 |
| <a id="firstorderonly"></a> `firstOrderOnly` | `boolean` | src/core/business-mgt/discount-rule.schema.ts:52 |
| <a id="maxuses"></a> `maxUses?` | `number` | src/core/business-mgt/discount-rule.schema.ts:53 |
| <a id="maxusespercustomer"></a> `maxUsesPerCustomer?` | `number` | src/core/business-mgt/discount-rule.schema.ts:54 |
| <a id="isstackable"></a> `isStackable` | `boolean` | src/core/business-mgt/discount-rule.schema.ts:55 |
| <a id="priority"></a> `priority` | `number` | src/core/business-mgt/discount-rule.schema.ts:56 |
| <a id="effectivefrom"></a> `effectiveFrom?` | `number` | src/core/business-mgt/discount-rule.schema.ts:57 |
| <a id="effectiveto"></a> `effectiveTo?` | `number` | src/core/business-mgt/discount-rule.schema.ts:58 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/discount-rule.schema.ts:59 |
