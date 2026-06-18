[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / OrderPricing

# Type Alias: OrderPricing

```ts
type OrderPricing = {
  subtotalBeforeTax?: number;
  subtotal: number;
  appliedPricingRules: {
     pricingRuleId?: string;
     externalPricingRuleId?: string;
     name: string;
     applyLevel: PricingRuleApplyLevel;
     adjustmentType: PricingRuleAdjustmentType;
     adjustmentValue: number;
     baseAmount: number;
     adjustedAmount: number;
     deltaAmount: number;
     appliedAt?: number;
  }[];
  totalPricingAdjustmentAmount: number;
  subtotalAfterPricingRules?: number;
  appliedDiscounts: {
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
  }[];
  totalDiscountAmount: number;
  subtotalAfterDiscount?: number;
  appliedTaxes: {
     taxRuleId?: string;
     externalTaxId?: string;
     name: string;
     scope: TaxScope;
     rateType: TaxRateType;
     rateValue: number;
     taxableAmount: number;
     taxAmount: number;
     isInclusive: boolean;
  }[];
  totalTaxAmount: number;
  tax: number;
  tip: number;
  shippingAmount: number;
  discount: number;
  subtotalAfterTax?: number;
  total: number;
  currency: string;
};
```

Defined in: [src/core/business-mgt/order.schema.ts:200](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L200)

Order pricing schema.
Comprehensive pricing breakdown including subtotals, discounts, taxes, and fees.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="subtotalbeforetax"></a> `subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L176) |
| <a id="subtotal"></a> `subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L177) |
| <a id="appliedpricingrules"></a> `appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L178) |
| <a id="totalpricingadjustmentamount"></a> `totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L179) |
| <a id="subtotalafterpricingrules"></a> `subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L180) |
| <a id="applieddiscounts"></a> `appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L181) |
| <a id="totaldiscountamount"></a> `totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L182) |
| <a id="subtotalafterdiscount"></a> `subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L183) |
| <a id="appliedtaxes"></a> `appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L184) |
| <a id="totaltaxamount"></a> `totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L185) |
| <a id="tax"></a> `tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L186) |
| <a id="tip"></a> `tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L187) |
| <a id="shippingamount"></a> `shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L188) |
| <a id="discount"></a> `discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L189) |
| <a id="subtotalaftertax"></a> `subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L190) |
| <a id="total"></a> `total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L191) |
| <a id="currency"></a> `currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/order.schema.ts#L192) |
