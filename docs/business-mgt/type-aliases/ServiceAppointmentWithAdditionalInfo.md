[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAppointmentWithAdditionalInfo

# Type Alias: ServiceAppointmentWithAdditionalInfo

```ts
type ServiceAppointmentWithAdditionalInfo = {
  appointment: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
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
     cancelReason?: string | null;
     serviceConversationConfigId?: string | null;
     externalRef?:   | {
        externalId: string;
        source: string;
        url?: string | null;
        syncedAt?: number | null;
      }
        | null;
  };
  additionalInfo: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     businessServiceId: string;
     appointmentId: string;
     customerId: string;
     data: Record<string, any>;
  };
};
```

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:132](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L132)

Schema for an appointment with its additional info.
Used for displaying complete appointment details.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="appointment"></a> `appointment` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `businessServiceId`: `string`; `locationId?`: `string` \| `null`; `channelId?`: `string` \| `null`; `customerId`: `string`; `customerName?`: `string`; `customerEmail?`: `string`; `startTime`: `number`; `endTime?`: `number`; `duration?`: `number`; `totalPrice?`: `number`; `pricing?`: \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \}; `depositPaid`: `number`; `status`: [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md); `providerId?`: `string` \| `null`; `serviceProviderId?`: `string` \| `null`; `slotIndex?`: `number` \| `null`; `assignedUserAccountId?`: `string` \| `null`; `calendarId?`: `string` \| `null`; `calendarEventId?`: `string` \| `null`; `calendarProvider?`: \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null`; `cancelReason?`: `string` \| `null`; `serviceConversationConfigId?`: `string` \| `null`; `externalRef?`: \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null`; \} | [src/core/business-mgt/service-management/service-appointment.schema.ts:128](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L128) |
| `appointment.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L8) |
| `appointment.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L9) |
| `appointment.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L10) |
| `appointment.businessServiceId` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:49](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L49) |
| `appointment.locationId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:50](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L50) |
| `appointment.channelId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:51](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L51) |
| `appointment.customerId` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:52](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L52) |
| `appointment.customerName?` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:53](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L53) |
| `appointment.customerEmail?` | `string` | [src/core/business-mgt/service-management/service-appointment.schema.ts:54](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L54) |
| `appointment.startTime` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:55](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L55) |
| `appointment.endTime?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:56](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L56) |
| `appointment.duration?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:57](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L57) |
| `appointment.totalPrice?` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:58](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L58) |
| `appointment.pricing?` | \{ `subtotalBeforeTax?`: `number`; `subtotal`: `number`; `appliedPricingRules`: \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[]; `totalPricingAdjustmentAmount`: `number`; `subtotalAfterPricingRules?`: `number`; `appliedDiscounts`: \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[]; `totalDiscountAmount`: `number`; `subtotalAfterDiscount?`: `number`; `appliedTaxes`: \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[]; `totalTaxAmount`: `number`; `tax`: `number`; `tip`: `number`; `shippingAmount`: `number`; `discount`: `number`; `subtotalAfterTax?`: `number`; `total`: `number`; `currency`: `string`; \} | [src/core/business-mgt/service-management/service-appointment.schema.ts:59](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L59) |
| `appointment.pricing.subtotalBeforeTax?` | `number` | [src/core/business-mgt/order.schema.ts:176](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L176) |
| `appointment.pricing.subtotal` | `number` | [src/core/business-mgt/order.schema.ts:177](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L177) |
| `appointment.pricing.appliedPricingRules` | \{ `pricingRuleId?`: `string`; `externalPricingRuleId?`: `string`; `name`: `string`; `applyLevel`: [`PricingRuleApplyLevel`](../../type-definitions/enumerations/PricingRuleApplyLevel.md); `adjustmentType`: [`PricingRuleAdjustmentType`](../../type-definitions/enumerations/PricingRuleAdjustmentType.md); `adjustmentValue`: `number`; `baseAmount`: `number`; `adjustedAmount`: `number`; `deltaAmount`: `number`; `appliedAt?`: `number`; \}[] | [src/core/business-mgt/order.schema.ts:178](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L178) |
| `appointment.pricing.totalPricingAdjustmentAmount` | `number` | [src/core/business-mgt/order.schema.ts:179](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L179) |
| `appointment.pricing.subtotalAfterPricingRules?` | `number` | [src/core/business-mgt/order.schema.ts:180](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L180) |
| `appointment.pricing.appliedDiscounts` | \{ `discountRuleId?`: `string`; `externalDiscountId?`: `string`; `name`: `string`; `code?`: `string`; `scope`: [`DiscountScope`](../../type-definitions/enumerations/DiscountScope.md); `type`: [`DiscountType`](../../type-definitions/enumerations/DiscountType.md); `value`: `number`; `discountableAmount`: `number`; `discountAmount`: `number`; `isStacked`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:181](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L181) |
| `appointment.pricing.totalDiscountAmount` | `number` | [src/core/business-mgt/order.schema.ts:182](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L182) |
| `appointment.pricing.subtotalAfterDiscount?` | `number` | [src/core/business-mgt/order.schema.ts:183](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L183) |
| `appointment.pricing.appliedTaxes` | \{ `taxRuleId?`: `string`; `externalTaxId?`: `string`; `name`: `string`; `scope`: [`TaxScope`](../../type-definitions/enumerations/TaxScope.md); `rateType`: [`TaxRateType`](../../type-definitions/enumerations/TaxRateType.md); `rateValue`: `number`; `taxableAmount`: `number`; `taxAmount`: `number`; `isInclusive`: `boolean`; \}[] | [src/core/business-mgt/order.schema.ts:184](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L184) |
| `appointment.pricing.totalTaxAmount` | `number` | [src/core/business-mgt/order.schema.ts:185](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L185) |
| `appointment.pricing.tax` | `number` | [src/core/business-mgt/order.schema.ts:186](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L186) |
| `appointment.pricing.tip` | `number` | [src/core/business-mgt/order.schema.ts:187](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L187) |
| `appointment.pricing.shippingAmount` | `number` | [src/core/business-mgt/order.schema.ts:188](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L188) |
| `appointment.pricing.discount` | `number` | [src/core/business-mgt/order.schema.ts:189](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L189) |
| `appointment.pricing.subtotalAfterTax?` | `number` | [src/core/business-mgt/order.schema.ts:190](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L190) |
| `appointment.pricing.total` | `number` | [src/core/business-mgt/order.schema.ts:191](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L191) |
| `appointment.pricing.currency` | `string` | [src/core/business-mgt/order.schema.ts:192](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/order.schema.ts#L192) |
| `appointment.depositPaid` | `number` | [src/core/business-mgt/service-management/service-appointment.schema.ts:60](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L60) |
| `appointment.status` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md) | [src/core/business-mgt/service-management/service-appointment.schema.ts:61](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L61) |
| `appointment.providerId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:62](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L62) |
| `appointment.serviceProviderId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:63](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L63) |
| `appointment.slotIndex?` | `number` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:64](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L64) |
| `appointment.assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:67](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L67) |
| `appointment.calendarId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:68](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L68) |
| `appointment.calendarEventId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:69](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L69) |
| `appointment.calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:70](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L70) |
| `appointment.cancelReason?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:71](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L71) |
| `appointment.serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:72](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L72) |
| `appointment.externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/service-management/service-appointment.schema.ts:73](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L73) |
| <a id="additionalinfo"></a> `additionalInfo` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `businessServiceId`: `string`; `appointmentId`: `string`; `customerId`: `string`; `data`: `Record`\<`string`, `any`\>; \} | [src/core/business-mgt/service-management/service-appointment.schema.ts:129](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L129) |
| `additionalInfo.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L8) |
| `additionalInfo.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L9) |
| `additionalInfo.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L10) |
| `additionalInfo.businessServiceId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:56](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L56) |
| `additionalInfo.appointmentId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:57](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L57) |
| `additionalInfo.customerId` | `string` | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:58](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L58) |
| `additionalInfo.data` | `Record`\<`string`, `any`\> | [src/core/business-mgt/service-management/appointment-additional-info.schema.ts:59](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/appointment-additional-info.schema.ts#L59) |
