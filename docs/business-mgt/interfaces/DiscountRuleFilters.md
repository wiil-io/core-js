[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / DiscountRuleFilters

# Interface: DiscountRuleFilters

Defined in: [src/core/business-mgt/discount-rule.schema.ts:131](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L131)

Discount rule filter options.
 DiscountRuleFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across discount name and code | [src/core/business-mgt/discount-rule.schema.ts:133](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L133) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/discount-rule.schema.ts:135](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L135) |
| <a id="code"></a> `code?` | `string` | Filter by discount code | [src/core/business-mgt/discount-rule.schema.ts:137](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L137) |
| <a id="scope"></a> `scope?` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | Filter by discount scope | [src/core/business-mgt/discount-rule.schema.ts:139](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L139) |
| <a id="type"></a> `type?` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | Filter by discount type | [src/core/business-mgt/discount-rule.schema.ts:141](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L141) |
| <a id="catalogscope"></a> `catalogScope?` | [`DiscountCatalogScope`](../../type-definitions/enumerations/DiscountCatalogScope.md) | Filter by catalog scope | [src/core/business-mgt/discount-rule.schema.ts:143](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L143) |
| <a id="isstackable"></a> `isStackable?` | `boolean` | Filter by stackable status | [src/core/business-mgt/discount-rule.schema.ts:145](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L145) |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | [src/core/business-mgt/discount-rule.schema.ts:147](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/discount-rule.schema.ts#L147) |
