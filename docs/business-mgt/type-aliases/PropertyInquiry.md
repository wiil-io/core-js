[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / PropertyInquiry

# Type Alias: PropertyInquiry

```ts
type PropertyInquiry = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  propertyId: string;
  customerId?: string | null;
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
     customerGroupId?: string | null;
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
  appointmentRecordId?: string | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
};
```

Defined in: src/core/business-mgt/property-management/property-inquiry.schema.ts:138

Property Inquiry schema.
Tracks customer inquiries about properties with viewing and follow-up management.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="propertyid"></a> `propertyId` | `string` | src/core/business-mgt/property-management/property-inquiry.schema.ts:54 |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:57 |
| <a id="customer"></a> `customer?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `customerId?`: `string` \| `null`; `phone_number?`: `string` \| `null`; `firstname?`: `string` \| `null`; `lastname?`: `string` \| `null`; `company?`: `string`; `timezone?`: `string`; `email?`: `string`; `preferred_language`: `string`; `preferred_contact_method`: [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md); `best_time_to_call?`: \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime); `notes?`: `string`; `tags?`: `string`[]; `custom_fields?`: `Record`\<`string`, `any`\>; `channelId?`: `string` \| `null`; `address?`: \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \}; `isValidatedNames`: `boolean`; `customerGroupId?`: `string` \| `null`; \} \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:58 |
| <a id="inquirytype"></a> `inquiryType` | [`PropertyInquiryType`](../../type-definitions/enumerations/PropertyInquiryType.md) | src/core/business-mgt/property-management/property-inquiry.schema.ts:61 |
| <a id="message"></a> `message?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:62 |
| <a id="source"></a> `source` | `string` | src/core/business-mgt/property-management/property-inquiry.schema.ts:63 |
| <a id="status"></a> `status` | [`PropertyInquiryStatus`](../../type-definitions/enumerations/PropertyInquiryStatus.md) | src/core/business-mgt/property-management/property-inquiry.schema.ts:66 |
| <a id="preferredviewingdate"></a> `preferredViewingDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:69 |
| <a id="preferredviewingtime"></a> `preferredViewingTime?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:70 |
| <a id="scheduledviewingdate"></a> `scheduledViewingDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:71 |
| <a id="viewingcompleted"></a> `viewingCompleted` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:72 |
| <a id="viewingnotes"></a> `viewingNotes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:73 |
| <a id="followupdate"></a> `followUpDate?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:76 |
| <a id="followupnotes"></a> `followUpNotes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:77 |
| <a id="assignedagentid"></a> `assignedAgentId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:78 |
| <a id="convertedtotransaction"></a> `convertedToTransaction` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:81 |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:82 |
| <a id="transactiontype"></a> `transactionType?` | `"purchase"` \| `"lease"` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:83 |
| <a id="interestedinbuying"></a> `interestedInBuying` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:86 |
| <a id="interestedinrenting"></a> `interestedInRenting` | `boolean` | src/core/business-mgt/property-management/property-inquiry.schema.ts:87 |
| <a id="budgetmin"></a> `budgetMin?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:88 |
| <a id="budgetmax"></a> `budgetMax?` | `number` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:89 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:92 |
| <a id="appointmentrecordid"></a> `appointmentRecordId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:95 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:96 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/business-mgt/property-management/property-inquiry.schema.ts:97 |
