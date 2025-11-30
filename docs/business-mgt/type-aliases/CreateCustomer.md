[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateCustomer

# Type Alias: CreateCustomer

```ts
type CreateCustomer = {
  customerId?: string | null;
  phone_number?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  company?: string;
  timezone?: string;
  email?: string;
  preferred_language: string;
  call_priority: CallPriority;
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
```

Defined in: [src/core/business-mgt/customer.schema.ts:78](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L78)

Schema for creating a new customer.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:40](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L40) |
| <a id="phone_number"></a> `phone_number?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:41](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L41) |
| <a id="firstname"></a> `firstname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:42](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L42) |
| <a id="lastname"></a> `lastname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:43](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L43) |
| <a id="company"></a> `company?` | `string` | [src/core/business-mgt/customer.schema.ts:44](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L44) |
| <a id="timezone"></a> `timezone?` | `string` | [src/core/business-mgt/customer.schema.ts:45](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L45) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/customer.schema.ts:46](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L46) |
| <a id="preferred_language"></a> `preferred_language` | `string` | [src/core/business-mgt/customer.schema.ts:47](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L47) |
| <a id="call_priority"></a> `call_priority` | [`CallPriority`](../../type-definitions/enumerations/CallPriority.md) | [src/core/business-mgt/customer.schema.ts:48](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L48) |
| <a id="preferred_contact_method"></a> `preferred_contact_method` | [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md) | [src/core/business-mgt/customer.schema.ts:49](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L49) |
| <a id="best_time_to_call"></a> `best_time_to_call?` | \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime) | [src/core/business-mgt/customer.schema.ts:50](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L50) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/customer.schema.ts:51](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L51) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/business-mgt/customer.schema.ts:52](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L52) |
| <a id="custom_fields"></a> `custom_fields?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/customer.schema.ts:53](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L53) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:54](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L54) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/customer.schema.ts:55](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L55) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L23) |
| <a id="isvalidatednames"></a> `isValidatedNames` | `boolean` | [src/core/business-mgt/customer.schema.ts:56](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/business-mgt/customer.schema.ts#L56) |
