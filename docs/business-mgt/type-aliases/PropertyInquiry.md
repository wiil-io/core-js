[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiry

# Type Alias: PropertyInquiry

```ts
type PropertyInquiry = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
  propertyId: string;
  customerId: string;
  customer: {
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
  };
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

Defined in: [src/core/business-mgt/property-inquiry.schema.ts:130](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L130)

Property inquiry schema for tracking customer interest in properties.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:46](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L46) |
| <a id="propertyid"></a> `propertyId` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:47](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L47) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:50](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L50) |
| <a id="customer"></a> `customer` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `customerId?`: `string` \| `null`; `phone_number?`: `string` \| `null`; `firstname?`: `string` \| `null`; `lastname?`: `string` \| `null`; `company?`: `string`; `timezone?`: `string`; `email?`: `string`; `preferred_language`: `string`; `preferred_contact_method`: [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md); `best_time_to_call?`: \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime); `notes?`: `string`; `tags?`: `string`[]; `custom_fields?`: `Record`\<`string`, `any`\>; `channelId?`: `string` \| `null`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \}; `isValidatedNames`: `boolean`; \} | [src/core/business-mgt/property-inquiry.schema.ts:51](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L51) |
| `customer.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L8) |
| `customer.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L9) |
| `customer.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L10) |
| `customer.customerId?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:39](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L39) |
| `customer.phone_number?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:40](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L40) |
| `customer.firstname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:41](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L41) |
| `customer.lastname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:42](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L42) |
| `customer.company?` | `string` | [src/core/business-mgt/customer.schema.ts:43](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L43) |
| `customer.timezone?` | `string` | [src/core/business-mgt/customer.schema.ts:44](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L44) |
| `customer.email?` | `string` | [src/core/business-mgt/customer.schema.ts:45](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L45) |
| `customer.preferred_language` | `string` | [src/core/business-mgt/customer.schema.ts:46](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L46) |
| `customer.preferred_contact_method` | [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md) | [src/core/business-mgt/customer.schema.ts:47](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L47) |
| `customer.best_time_to_call?` | \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime) | [src/core/business-mgt/customer.schema.ts:48](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L48) |
| `customer.notes?` | `string` | [src/core/business-mgt/customer.schema.ts:49](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L49) |
| `customer.tags?` | `string`[] | [src/core/business-mgt/customer.schema.ts:50](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L50) |
| `customer.custom_fields?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/customer.schema.ts:51](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L51) |
| `customer.channelId?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:52](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L52) |
| `customer.address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/customer.schema.ts:53](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L53) |
| `customer.address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L18) |
| `customer.address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L19) |
| `customer.address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L20) |
| `customer.address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L21) |
| `customer.address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L22) |
| `customer.address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L23) |
| `customer.isValidatedNames` | `boolean` | [src/core/business-mgt/customer.schema.ts:54](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/customer.schema.ts#L54) |
| <a id="inquirytype"></a> `inquiryType` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | [src/core/business-mgt/property-inquiry.schema.ts:54](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L54) |
| <a id="message"></a> `message?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:55](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L55) |
| <a id="source"></a> `source` | `string` | [src/core/business-mgt/property-inquiry.schema.ts:56](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L56) |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | [src/core/business-mgt/property-inquiry.schema.ts:59](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L59) |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:62](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L62) |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:63](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L63) |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:64](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L64) |
| <a id="viewingcompleted"></a> `viewingCompleted` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:65](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L65) |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:66](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L66) |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:69](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L69) |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:70](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L70) |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:71](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L71) |
| <a id="convertedtotransaction"></a> `convertedToTransaction` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:74](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L74) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:75](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L75) |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:76](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L76) |
| <a id="interestedinbuying"></a> `interestedInBuying` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:79](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L79) |
| <a id="interestedinrenting"></a> `interestedInRenting` | `boolean` | [src/core/business-mgt/property-inquiry.schema.ts:80](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L80) |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:81](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L81) |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:82](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L82) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:85](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L85) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:88](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L88) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:89](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L89) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:90](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L90) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:91](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L91) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:92](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L92) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/property-inquiry.schema.ts:93](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/business-mgt/property-inquiry.schema.ts#L93) |
