[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / DiscountRuleFilters

# Interface: DiscountRuleFilters

Defined in: src/core/business-mgt/discount-rule.schema.ts:121

Discount rule filter options.
 DiscountRuleFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across discount name and code | src/core/business-mgt/discount-rule.schema.ts:123 |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | src/core/business-mgt/discount-rule.schema.ts:125 |
| <a id="code"></a> `code?` | `string` | Filter by discount code | src/core/business-mgt/discount-rule.schema.ts:127 |
| <a id="scope"></a> `scope?` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | Filter by discount scope | src/core/business-mgt/discount-rule.schema.ts:129 |
| <a id="type"></a> `type?` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | Filter by discount type | src/core/business-mgt/discount-rule.schema.ts:131 |
| <a id="catalogscope"></a> `catalogScope?` | [`DiscountCatalogScope`](../../type-definitions/enumerations/DiscountCatalogScope.md) | Filter by catalog scope | src/core/business-mgt/discount-rule.schema.ts:133 |
| <a id="isstackable"></a> `isStackable?` | `boolean` | Filter by stackable status | src/core/business-mgt/discount-rule.schema.ts:135 |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | src/core/business-mgt/discount-rule.schema.ts:137 |
