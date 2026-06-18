[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMenuOrder

# Type Alias: UpdateMenuOrder

```ts
type UpdateMenuOrder = {
  locationId?: string | null;
  channelId?: string | null;
  terminalId?: string | null;
  operatorId?: string | null;
  type?:   | DINE_IN
     | TAKEOUT
     | DELIVERY;
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
  paymentMethod?: string | null;
  paymentReference?: string | null;
  orderDate?: number;
  requestedTime?: number | null;
  estimatedReadyTime?: number | null;
  specialInstructions?: string | null;
  allergies?: string[] | null;
  tableNumber?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
  notes?: string | null;
  deliveryAddress?:   | {
     street: string;
     city: string | null;
     postalCode: string | null;
   }
     | null;
  shippingAddressId?: string | null;
  tip?: number | null;
  items?: {
     menuItemId: string;
     variantId: string;
     menuSetId?: string | null;
     itemName: string;
     quantity: number;
     unitPrice: number;
     totalPrice: number;
     specialInstructions: string | null;
     customizations:   | {
        name: string;
        value: string;
        additionalCost: number;
      }[]
        | null;
     modifiers?:   | {
        modifierGroupId?: string | null;
        modifierOptionId?: string | null;
        externalModifierGroupId?: string | null;
        externalModifierOptionId?: string | null;
        groupName: string;
        optionName: string;
        quantity: number;
        priceDelta: number;
      }[]
        | null;
     status: OrderStatus;
     preparationTime: number | null;
     notes: string | null;
  }[];
  cancelReason?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/menu-management/menu.order.schema.ts:226](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L226)

Schema for updating an existing menu order.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:110](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L110) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:111](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L111) |
| <a id="terminalid"></a> `terminalId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:112](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L112) |
| <a id="operatorid"></a> `operatorId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:113](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L113) |
| <a id="type"></a> `type?` | \| [`DINE_IN`](../../type-definitions/enumerations/MenuOrderType.md#dine_in) \| [`TAKEOUT`](../../type-definitions/enumerations/MenuOrderType.md#takeout) \| [`DELIVERY`](../../type-definitions/enumerations/MenuOrderType.md#delivery) | [src/core/business-mgt/menu-management/menu.order.schema.ts:116](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L116) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/OrderStatus.md#pending) \| [`CONFIRMED`](../../type-definitions/enumerations/OrderStatus.md#confirmed) \| [`PREPARING`](../../type-definitions/enumerations/OrderStatus.md#preparing) \| [`READY`](../../type-definitions/enumerations/OrderStatus.md#ready) \| [`OUT_FOR_DELIVERY`](../../type-definitions/enumerations/OrderStatus.md#out_for_delivery) \| [`COMPLETED`](../../type-definitions/enumerations/OrderStatus.md#completed) \| [`CANCELLED`](../../type-definitions/enumerations/OrderStatus.md#cancelled) \| [`RETURNED`](../../type-definitions/enumerations/OrderStatus.md#returned) | [src/core/business-mgt/menu-management/menu.order.schema.ts:117](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L117) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:119](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L119) |
| <a id="pricing"></a> `pricing?` | \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/menu-management/menu.order.schema.ts:120](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L120) |
| `pricing.subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L176) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L177) |
| `pricing.appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L178) |
| `pricing.totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L179) |
| `pricing.subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L180) |
| `pricing.appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L181) |
| `pricing.totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L182) |
| `pricing.subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L183) |
| `pricing.appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L184) |
| `pricing.totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L185) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L186) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L187) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L188) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L189) |
| `pricing.subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L190) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L191) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/order.schema.ts#L192) |
| <a id="paymentstatus"></a> `paymentStatus?` | \| [`PENDING`](../../type-definitions/enumerations/PaymentStatus.md#pending) \| [`PAID`](../../type-definitions/enumerations/PaymentStatus.md#paid) \| [`PARTIAL`](../../type-definitions/enumerations/PaymentStatus.md#partial) \| [`FAILED`](../../type-definitions/enumerations/PaymentStatus.md#failed) \| [`REFUNDED`](../../type-definitions/enumerations/PaymentStatus.md#refunded) | [src/core/business-mgt/menu-management/menu.order.schema.ts:123](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L123) |
| <a id="paymentmethod"></a> `paymentMethod?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:124](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L124) |
| <a id="paymentreference"></a> `paymentReference?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:125](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L125) |
| <a id="orderdate"></a> `orderDate?` | `number` | [src/core/business-mgt/menu-management/menu.order.schema.ts:128](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L128) |
| <a id="requestedtime"></a> `requestedTime?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:129](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L129) |
| <a id="estimatedreadytime"></a> `estimatedReadyTime?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:130](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L130) |
| <a id="specialinstructions"></a> `specialInstructions?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:134](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L134) |
| <a id="allergies"></a> `allergies?` | `string`[] \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:135](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L135) |
| <a id="tablenumber"></a> `tableNumber?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:136](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L136) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:139](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L139) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:141](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L141) |
| <a id="deliveryaddress"></a> `deliveryAddress?` | \| \{ `street`: `string`; `city`: `string` \| `null`; `postalCode`: `string` \| `null`; \} \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:143](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L143) |
| <a id="shippingaddressid"></a> `shippingAddressId?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:148](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L148) |
| <a id="tip"></a> `tip?` | `number` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:149](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L149) |
| <a id="items"></a> `items?` | \{ `menuItemId`: `string`; `variantId`: `string`; `menuSetId?`: `string` \| `null`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions`: `string` \| `null`; `customizations`: \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null`; `modifiers?`: \| \{ `modifierGroupId?`: `string` \| `null`; `modifierOptionId?`: `string` \| `null`; `externalModifierGroupId?`: `string` \| `null`; `externalModifierOptionId?`: `string` \| `null`; `groupName`: `string`; `optionName`: `string`; `quantity`: `number`; `priceDelta`: `number`; \}[] \| `null`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `preparationTime`: `number` \| `null`; `notes`: `string` \| `null`; \}[] | [src/core/business-mgt/menu-management/menu.order.schema.ts:170](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L170) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/menu-management/menu.order.schema.ts:171](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L171) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/menu-management/menu.order.schema.ts:179](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/menu-management/menu.order.schema.ts#L179) |
