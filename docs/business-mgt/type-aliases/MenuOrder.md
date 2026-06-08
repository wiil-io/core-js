[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MenuOrder

# Type Alias: MenuOrder

```ts
type MenuOrder = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  channelId?: string | null;
  terminalId: string | null;
  operatorId: string | null;
  orderNumber: string | null;
  type: MenuOrderType;
  status: OrderStatus;
  items: {
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
     id: string;
     menuOrderId: string;
  }[];
  customerId: string;
  pricing: {
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
  paymentStatus: PaymentStatus;
  paymentMethod: string | null;
  paymentReference: string | null;
  orderDate: number;
  requestedTime: number | null;
  estimatedReadyTime: number | null;
  actualReadyTime: number | null;
  specialInstructions: string | null;
  allergies: string[] | null;
  tableNumber: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
  cancelReason: string | null;
  notes: string | null;
  serviceConversationConfigId: string | null;
  deliveryAddress:   | {
     street: string;
     city: string | null;
     postalCode: string | null;
   }
     | null;
  shippingAddressId?: string | null;
  tip: number | null;
};
```

Defined in: src/core/business-mgt/menu-management/menu.order.schema.ts:224

Menu order schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:110 |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:111 |
| <a id="terminalid"></a> `terminalId` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:112 |
| <a id="operatorid"></a> `operatorId` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:113 |
| <a id="ordernumber"></a> `orderNumber` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:114 |
| <a id="type"></a> `type` | [`MenuOrderType`](../../type-definitions/enumerations/MenuOrderType.md) | src/core/business-mgt/menu-management/menu.order.schema.ts:116 |
| <a id="status"></a> `status` | [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md) | src/core/business-mgt/menu-management/menu.order.schema.ts:117 |
| <a id="items"></a> `items` | \{ `menuItemId`: `string`; `variantId`: `string`; `menuSetId?`: `string` \| `null`; `itemName`: `string`; `quantity`: `number`; `unitPrice`: `number`; `totalPrice`: `number`; `specialInstructions`: `string` \| `null`; `customizations`: \| \{ `name`: `string`; `value`: `string`; `additionalCost`: `number`; \}[] \| `null`; `modifiers?`: \| \{ `modifierGroupId?`: `string` \| `null`; `modifierOptionId?`: `string` \| `null`; `externalModifierGroupId?`: `string` \| `null`; `externalModifierOptionId?`: `string` \| `null`; `groupName`: `string`; `optionName`: `string`; `quantity`: `number`; `priceDelta`: `number`; \}[] \| `null`; `status`: [`OrderStatus`](../../type-definitions/enumerations/OrderStatus.md); `preparationTime`: `number` \| `null`; `notes`: `string` \| `null`; `id`: `string`; `menuOrderId`: `string`; \}[] | src/core/business-mgt/menu-management/menu.order.schema.ts:118 |
| <a id="customerid"></a> `customerId` | `string` | src/core/business-mgt/menu-management/menu.order.schema.ts:119 |
| <a id="pricing"></a> `pricing` | \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \} | src/core/business-mgt/menu-management/menu.order.schema.ts:120 |
| `pricing.subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L176) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L177) |
| `pricing.appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L178) |
| `pricing.totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L179) |
| `pricing.subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L180) |
| `pricing.appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L181) |
| `pricing.totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L182) |
| `pricing.subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L183) |
| `pricing.appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L184) |
| `pricing.totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L185) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L186) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L187) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L188) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L189) |
| `pricing.subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L190) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L191) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/business-mgt/order.schema.ts#L192) |
| <a id="paymentstatus"></a> `paymentStatus` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md) | src/core/business-mgt/menu-management/menu.order.schema.ts:123 |
| <a id="paymentmethod"></a> `paymentMethod` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:124 |
| <a id="paymentreference"></a> `paymentReference` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:125 |
| <a id="orderdate"></a> `orderDate` | `number` | src/core/business-mgt/menu-management/menu.order.schema.ts:128 |
| <a id="requestedtime"></a> `requestedTime` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:129 |
| <a id="estimatedreadytime"></a> `estimatedReadyTime` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:130 |
| <a id="actualreadytime"></a> `actualReadyTime` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:131 |
| <a id="specialinstructions"></a> `specialInstructions` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:134 |
| <a id="allergies"></a> `allergies` | `string`[] \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:135 |
| <a id="tablenumber"></a> `tableNumber` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:136 |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:139 |
| <a id="cancelreason"></a> `cancelReason` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:140 |
| <a id="notes"></a> `notes` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:141 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:142 |
| <a id="deliveryaddress"></a> `deliveryAddress` | \| \{ `street`: `string`; `city`: `string` \| `null`; `postalCode`: `string` \| `null`; \} \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:143 |
| <a id="shippingaddressid"></a> `shippingAddressId?` | `string` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:148 |
| <a id="tip"></a> `tip` | `number` \| `null` | src/core/business-mgt/menu-management/menu.order.schema.ts:149 |
