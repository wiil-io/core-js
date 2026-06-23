[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServiceAppointment

# Type Alias: CreateServiceAppointment

```ts
type CreateServiceAppointment = {
  businessServiceId: string;
  locationId?: string | null;
  channelId?: string | null;
  customerId: string;
  customerName?: string;
  customerEmail?: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  totalPrice?: number;
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
  depositPaid: number;
  status: AppointmentStatus;
  providerId?: string | null;
  serviceProviderId?: string | null;
  slotIndex?: number | null;
  assignedUserAccountId?: string | null;
  calendarId?: string | null;
  calendarEventId?: string | null;
  calendarProvider?:   | GOOGLE
     | OUTLOOK
     | CALENDLY
     | null;
  serviceConversationConfigId?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
};
```

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:105](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L105)

Schema for creating a new service appointment.
Omits auto-generated fields and cancelReason (set during cancellation).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:49](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L49) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:50](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L50) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:51](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L51) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:52](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L52) |
| <a id="customername"></a> `customerName?` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:53](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L53) |
| <a id="customeremail"></a> `customerEmail?` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:54](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L54) |
| <a id="starttime"></a> `startTime` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:55](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L55) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:56](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L56) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:57](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L57) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:58](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L58) |
| <a id="pricing"></a> `pricing?` | \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/service-management/service-appointment.schema.ts:59](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L59) |
| `pricing.subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L176) |
| `pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L177) |
| `pricing.appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L178) |
| `pricing.totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L179) |
| `pricing.subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L180) |
| `pricing.appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L181) |
| `pricing.totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L182) |
| `pricing.subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L183) |
| `pricing.appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L184) |
| `pricing.totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L185) |
| `pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L186) |
| `pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L187) |
| `pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L188) |
| `pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L189) |
| `pricing.subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L190) |
| `pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L191) |
| `pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/order.schema.ts#L192) |
| <a id="depositpaid"></a> `depositPaid` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:60](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L60) |
| <a id="status"></a> `status` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md) | [src/core/business-mgt/service-management/service-appointment.schema.ts:61](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L61) |
| <a id="providerid"></a> `providerId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:62](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L62) |
| <a id="serviceproviderid"></a> `serviceProviderId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:63](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L63) |
| <a id="slotindex"></a> `slotIndex?` | `number` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:64](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L64) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:67](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L67) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:68](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L68) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:69](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L69) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:70](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L70) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:72](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L72) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:73](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/service-management/service-appointment.schema.ts#L73) |
