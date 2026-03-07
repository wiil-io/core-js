[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdatePropertyInquiry

# Type Alias: UpdatePropertyInquiry

```ts
type UpdatePropertyInquiry = {
  organizationId?: string;
  propertyId?: string;
  customerId?: string;
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
  assignedUserAccountId?: string | null;
  calendarId?: string | null;
  calendarEventId?: string | null;
  calendarProvider?:   | GOOGLE
     | OUTLOOK
     | CALENDLY
     | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/property-inquiry.schema.ts:132](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L132)

Schema for updating an existing property inquiry.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:46](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L46) |
| <a id="propertyid"></a> `propertyId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:47](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L47) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:50](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L50) |
| <a id="inquirytype"></a> `inquiryType?` | \| [`OFFER`](../../type-definitions/enumerations/PropertyInquiryType.md#offer) \| [`GENERAL`](../../type-definitions/enumerations/PropertyInquiryType.md#general) | [src/core/business-mgt/property-inquiry.schema.ts:54](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L54) |
| <a id="message"></a> `message?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:55](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L55) |
| <a id="source"></a> `source?` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:56](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L56) |
| <a id="status"></a> `status?` | \| [`NEW`](../../type-definitions/enumerations/PropertyInquiryStatus.md#new) \| [`CONTACTED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#contacted) \| [`VIEWING_SCHEDULED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#viewing_scheduled) \| [`FOLLOW_UP`](../../type-definitions/enumerations/PropertyInquiryStatus.md#follow_up) \| [`CONVERTED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#converted) \| [`CLOSED`](../../type-definitions/enumerations/PropertyInquiryStatus.md#closed) | [src/core/business-mgt/property-inquiry.schema.ts:59](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L59) |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:62](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L62) |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:63](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L63) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:64](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L64) |
| <a id="viewingcompleted"></a> `viewingCompleted?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:65](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L65) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:66](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L66) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:69](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L69) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:70](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L70) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:71](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L71) |
| <a id="convertedtotransaction"></a> `convertedToTransaction?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:74](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L74) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:75](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L75) |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:76](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L76) |
| <a id="interestedinbuying"></a> `interestedInBuying?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:79](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L79) |
| <a id="interestedinrenting"></a> `interestedInRenting?` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:80](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L80) |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:81](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L81) |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:82](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L82) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:85](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L85) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:88](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L88) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:89](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L89) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:90](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L90) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:91](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L91) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:92](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L92) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:93](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L93) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:112](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/business-mgt/property-inquiry.schema.ts#L112) |
