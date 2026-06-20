[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProductOrder

# Type Alias: UpdateProductOrder

```ts
type UpdateProductOrder = {
  locationId?: string | null;
  channelId?: string | null;
  terminalId?: string | null;
  operatorId?: string | null;
  status?:   | PENDING
     | CONFIRMED
     | PREPARING
     | READY
     | OUT_FOR_DELIVERY
     | COMPLETED
     | CANCELLED
     | RETURNED;
  customerId?: string;
  pricing?: {
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
  paymentStatus?:   | PENDING
     | PAID
     | PARTIAL
     | FAILED
     | REFUNDED;
  paymentMethod?: string;
  paymentReference?: string;
  billingAddress?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
  orderDate?: number;
  requestedDeliveryDate?: number;
  shippingAddress?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
     deliveryInstructions?: string;
  };
  shippingMethod?: string;
  trackingNumber?: string;
  shippingCarrier?: string;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
  source?: string;
  notes?: string | null;
  items?: {
     productId: string;
     variantId?: string | null;
     itemName: string;
     sku?: string | null;
     quantity: number;
     unitPrice: number;
     totalPrice: number;
     selectedVariant?: string;
     warrantyInfo?: string | null;
     status: OrderStatus;
     notes?: string | null;
  }[];
  id: string;
  cancelReason?: string | null;
};
```

Defined in: [src/core/business-mgt/product-management/product-order.schema.ts:179](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L179)

Schema for updating an existing product order.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:88](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L88) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:89](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L89) |
| <a id="terminalid"></a> `terminalId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:90](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L90) |
| <a id="operatorid"></a> `operatorId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:91](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L91) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/OrderStatus.md#pending) \| [`CONFIRMED`](../../type-definitions/enumerations/OrderStatus.md#confirmed) \| [`PREPARING`](../../type-definitions/enumerations/OrderStatus.md#preparing) \| [`READY`](../../type-definitions/enumerations/OrderStatus.md#ready) \| [`OUT_FOR_DELIVERY`](../../type-definitions/enumerations/OrderStatus.md#out_for_delivery) \| [`COMPLETED`](../../type-definitions/enumerations/OrderStatus.md#completed) \| [`CANCELLED`](../../type-definitions/enumerations/OrderStatus.md#cancelled) \| [`RETURNED`](../../type-definitions/enumerations/OrderStatus.md#returned) | [src/core/business-mgt/product-management/product-order.schema.ts:93](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L93) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:95](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L95) |
| <a id="pricing"></a> `pricing?` | \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/product-management/product-order.schema.ts:96](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L96) |
| `pricing.subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L176) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L177) |
| `pricing.appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L178) |
| `pricing.totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L179) |
| `pricing.subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L180) |
| `pricing.appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L181) |
| `pricing.totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L182) |
| `pricing.subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L183) |
| `pricing.appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L184) |
| `pricing.totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L185) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L186) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L187) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L188) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L189) |
| `pricing.subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L190) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L191) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L192) |
| <a id="paymentstatus"></a> `paymentStatus?` | \| [`PENDING`](../../type-definitions/enumerations/PaymentStatus.md#pending) \| [`PAID`](../../type-definitions/enumerations/PaymentStatus.md#paid) \| [`PARTIAL`](../../type-definitions/enumerations/PaymentStatus.md#partial) \| [`FAILED`](../../type-definitions/enumerations/PaymentStatus.md#failed) \| [`REFUNDED`](../../type-definitions/enumerations/PaymentStatus.md#refunded) | [src/core/business-mgt/product-management/product-order.schema.ts:99](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L99) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:100](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L100) |
| <a id="paymentreference"></a> `paymentReference?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:101](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L101) |
| <a id="billingaddress"></a> `billingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-management/product-order.schema.ts:102](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L102) |
| `billingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L18) |
| `billingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L19) |
| `billingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L20) |
| `billingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L21) |
| `billingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L22) |
| `billingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L23) |
| `billingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L29) |
| <a id="orderdate"></a> `orderDate?` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:105](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L105) |
| <a id="requesteddeliverydate"></a> `requestedDeliveryDate?` | `number` | [src/core/business-mgt/product-management/product-order.schema.ts:106](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L106) |
| <a id="shippingaddress"></a> `shippingAddress?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; `deliveryInstructions?`: `string`; \} | [src/core/business-mgt/product-management/product-order.schema.ts:108](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L108) |
| `shippingAddress.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L18) |
| `shippingAddress.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L19) |
| `shippingAddress.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L20) |
| `shippingAddress.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L21) |
| `shippingAddress.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L22) |
| `shippingAddress.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/base.schema.ts#L23) |
| `shippingAddress.deliveryInstructions?` | `string` | [src/core/business-mgt/order.schema.ts:29](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/order.schema.ts#L29) |
| <a id="shippingmethod"></a> `shippingMethod?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:112](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L112) |
| <a id="trackingnumber"></a> `trackingNumber?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:113](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L113) |
| <a id="shippingcarrier"></a> `shippingCarrier?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:114](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L114) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:117](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L117) |
| <a id="source"></a> `source?` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:118](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L118) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:120](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L120) |
| <a id="items"></a> `items?` | \{ `productId`: `string`; `variantId?`: `string` \| `null`; `itemName`: `string`; `sku?`: `string` \| `null`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `selectedVariant?`: `string`; `warrantyInfo?`: `string` \| `null`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `notes?`: `string` \| `null`; \}[] | [src/core/business-mgt/product-management/product-order.schema.ts:143](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L143) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-order.schema.ts:152](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L152) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/product-management/product-order.schema.ts:153](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/product-management/product-order.schema.ts#L153) |
