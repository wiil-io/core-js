[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyInquiry

# Type Alias: UpdatePropertyInquiry

```ts
type UpdatePropertyInquiry = {
  propertyId?: string;
  customerId?: string | null;
  inquiryType?:   | OFFER
     | GENERAL;
  message?: string | null;
  source?: string;
  status?:   | NEW
     | CONTACTED
     | VIEWING_SCHEDULED
     | FOLLOW_UP
     | CONVERTED
     | CLOSED;
  preferredViewingDate?: number | null;
  preferredViewingTime?: string | null;
  scheduledViewingDate?: number | null;
  viewingCompleted?: boolean;
  viewingNotes?: string | null;
  followUpDate?: number | null;
  followUpNotes?: string | null;
  assignedAgentId?: string | null;
  convertedToTransaction?: boolean;
  transactionId?: string | null;
  transactionType?: "purchase" | "lease" | null;
  interestedInBuying?: boolean;
  interestedInRenting?: boolean;
  budgetMin?: number | null;
  budgetMax?: number | null;
  notes?: string | null;
  appointmentRecordId?: string | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
  id: string;
};
```

Defined in: src/core/business-mgt/property-management/property-inquiry.schema.ts:140

Schema for updating an existing property inquiry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="propertyid"></a> `propertyId?` | `string` | src/core/business-mgt/property-management/property-inquiry.schema.ts:54 |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:57 |
| <a id="inquirytype"></a> `inquiryType?` | \| [`OFFER`](../../type-definitions/enumerations/PropertyInquiryType.md#offer) \| [`GENERAL`](../../type-definitions/enumerations/PropertyInquiryType.md#general) | src/core/business-mgt/property-management/property-inquiry.schema.ts:61 |
| <a id="message"></a> `message?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:62 |
| <a id="source"></a> `source?` | `string` | src/core/business-mgt/property-management/property-inquiry.schema.ts:63 |
| <a id="status"></a> `status?` | \| [`NEW`](../../type-definitions/enumerations/PropertyInquiryStatus.md#new) \| [`CONTACTED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#contacted) \| [`VIEWING_SCHEDULED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#viewing_scheduled) \| [`FOLLOW_UP`](../../type-definitions/enumerations/PropertyInquiryStatus.md#follow_up) \| [`CONVERTED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#converted) \| [`CLOSED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#closed) | src/core/business-mgt/property-management/property-inquiry.schema.ts:66 |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:69 |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:70 |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:71 |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:72 |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:73 |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:76 |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:77 |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:78 |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:81 |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:82 |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:83 |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:86 |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:87 |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:88 |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:89 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:92 |
| <a id="appointmentrecordid"></a> `appointmentRecordId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:95 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:96 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:97 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/property-management/property-inquiry.schema.ts:118 |
