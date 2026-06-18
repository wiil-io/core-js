[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppliedDiscount

# Type Alias: AppliedDiscount

```ts
type AppliedDiscount = {
  discountRuleId?: string;
  externalDiscountId?: string;
  name: string;
  code?: string;
  scope: DiscountScope;
  type: DiscountType;
  value: number;
  discountableAmount: number;
  discountAmount: number;
  isStacked: boolean;
};
```

Defined in: [src/core/business-mgt/order.schema.ts:88](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L88)

Applied discount schema.
Captures a discount applied to an order with calculated amounts.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="discountruleid"></a> `discountRuleId?` | `string` | [src/core/business-mgt/order.schema.ts:76](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L76) |
| <a id="externaldiscountid"></a> `externalDiscountId?` | `string` | [src/core/business-mgt/order.schema.ts:77](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L77) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/order.schema.ts:78](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L78) |
| <a id="code"></a> `code?` | `string` | [src/core/business-mgt/order.schema.ts:79](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L79) |
| <a id="scope"></a> `scope` | [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md) | [src/core/business-mgt/order.schema.ts:80](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L80) |
| <a id="type"></a> `type` | [`DiscountType`](../../type-definitions/enumerations/DiscountType.md) | [src/core/business-mgt/order.schema.ts:81](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L81) |
| <a id="value"></a> `value` | `number` | [src/core/business-mgt/order.schema.ts:82](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L82) |
| <a id="discountableamount"></a> `discountableAmount` | `number` | [src/core/business-mgt/order.schema.ts:83](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L83) |
| <a id="discountamount"></a> `discountAmount` | `number` | [src/core/business-mgt/order.schema.ts:84](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L84) |
| <a id="isstacked"></a> `isStacked` | `boolean` | [src/core/business-mgt/order.schema.ts:85](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/order.schema.ts#L85) |
