[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiry

# Type Alias: PropertyInquiry

```ts
type PropertyInquiry = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  propertyId: string;
  customerId: string;
  customer?:   | {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     customerId?: string | null;
     phone_number?: string | null;
     firstname?: string | null;
     lastname?: string | null;
     company?: string;
     timezone?: string;
     email?: string;
     preferred_language: string;
     preferred_contact_method: PreferredContactMethod;
     best_time_to_call?:   | MORNING
        | AFTERNOON
        | EVENING
        | ANYTIME;
     notes?: string;
     tags?: string[];
     custom_fields?: Record<string, any>;
     channelId?: string | null;
     address?: {
        street: string;
        street2?: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
     };
     isValidatedNames: boolean;
   }
     | null;
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
  assignedUserAccountId?: string | null;
  calendarId?: string | null;
  calendarEventId?: string | null;
  calendarProvider?:   | GOOGLE
     | OUTLOOK
     | CALENDLY
     | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
};
```

Defined in: [src/core/business-mgt/property-inquiry.schema.ts:128](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L128)

Property inquiry schema for tracking customer interest in properties.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L10) |
| <a id="propertyid"></a> `propertyId` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:45](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L45) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:48](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L48) |
| <a id="customer"></a> `customer?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `customerId?`: `string` \| `null`; `phone_number?`: `string` \| `null`; `firstname?`: `string` \| `null`; `lastname?`: `string` \| `null`; `company?`: `string`; `timezone?`: `string`; `email?`: `string`; `preferred_language`: `string`; `preferred_contact_method`: [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md); `best_time_to_call?`: \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime); `notes?`: `string`; `tags?`: `string`[]; `custom_fields?`: `Record`\<`string`, `any`\>; `channelId?`: `string` \| `null`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \}; `isValidatedNames`: `boolean`; \} \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:49](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L49) |
| <a id="inquirytype"></a> `inquiryType` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | [src/core/business-mgt/property-inquiry.schema.ts:52](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L52) |
| <a id="message"></a> `message?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:53](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L53) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:54](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L54) |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | [src/core/business-mgt/property-inquiry.schema.ts:57](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L57) |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:60](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L60) |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:61](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L61) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:62](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L62) |
| <a id="viewingcompleted"></a> `viewingCompleted` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:63](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L63) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:64](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L64) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:67](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L67) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:68](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L68) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:69](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L69) |
| <a id="convertedtotransaction"></a> `convertedToTransaction` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:72](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L72) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:73](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L73) |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:74](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L74) |
| <a id="interestedinbuying"></a> `interestedInBuying` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:77](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L77) |
| <a id="interestedinrenting"></a> `interestedInRenting` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:78](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L78) |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:79](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L79) |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:80](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L80) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:83](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L83) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:86](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L86) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:87](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L87) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:88](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L88) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:89](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L89) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:90](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L90) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:91](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/business-mgt/property-inquiry.schema.ts#L91) |
