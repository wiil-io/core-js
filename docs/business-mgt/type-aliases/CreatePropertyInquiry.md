[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreatePropertyInquiry

# Type Alias: CreatePropertyInquiry

```ts
type CreatePropertyInquiry = {
  propertyId: string;
  customerId?: string | null;
  inquiryType: PropertyInquiryType;
  message?: string | null;
  source: string;
  status: PropertyInquiryStatus;
  preferredViewingDate?: number | null;
  preferredViewingTime?: string | null;
  scheduledViewingDate?: number | null;
  viewingCompleted: boolean;
  viewingNotes?: string | null;
  followUpDate?: number | null;
  followUpNotes?: string | null;
  assignedAgentId?: string | null;
  convertedToTransaction: boolean;
  transactionId?: string | null;
  transactionType?: "purchase" | "lease" | null;
  interestedInBuying: boolean;
  interestedInRenting: boolean;
  budgetMin?: number | null;
  budgetMax?: number | null;
  notes?: string | null;
  appointmentRecordId?: string | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
};
```

Defined in: [src/core/business-mgt/property-management/property-inquiry.schema.ts:139](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L139)

Schema for creating a new property inquiry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="propertyid"></a> `propertyId` | `string` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:54](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L54) |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:57](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L57) |
| <a id="inquirytype"></a> `inquiryType` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | [src/core/business-mgt/property-management/property-inquiry.schema.ts:61](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L61) |
| <a id="message"></a> `message?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:62](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L62) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:63](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L63) |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | [src/core/business-mgt/property-management/property-inquiry.schema.ts:66](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L66) |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:69](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L69) |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:70](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L70) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:71](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L71) |
| <a id="viewingcompleted"></a> `viewingCompleted` | `boolean` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:72](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L72) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:73](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L73) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:76](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L76) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:77](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L77) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:78](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L78) |
| <a id="convertedtotransaction"></a> `convertedToTransaction` | `boolean` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:81](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L81) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:82](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L82) |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:83](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L83) |
| <a id="interestedinbuying"></a> `interestedInBuying` | `boolean` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:86](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L86) |
| <a id="interestedinrenting"></a> `interestedInRenting` | `boolean` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:87](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L87) |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:88](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L88) |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:89](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L89) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:92](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L92) |
| <a id="appointmentrecordid"></a> `appointmentRecordId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:95](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L95) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:96](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L96) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/property-management/property-inquiry.schema.ts:97](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/property-management/property-inquiry.schema.ts#L97) |
