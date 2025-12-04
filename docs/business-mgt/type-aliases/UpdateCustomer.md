[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.20**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateCustomer

# Type Alias: UpdateCustomer

```ts
type UpdateCustomer = {
  customerId?: string | null;
  phone_number?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  company?: string;
  timezone?: string;
  email?: string;
  preferred_language?: string;
  preferred_contact_method?:   | EMAIL
     | PHONE
     | SMS;
  best_time_to_call?:   | MORNING
     | AFTERNOON
     | EVENING
     | ANYTIME;
  notes?: string;
  tags?: string[];
  custom_fields?: Record<string, any>;
  address?: {
     street: string;
     street2?: string;
     city: string;
     state: string;
     postalCode: string;
     country: string;
  };
  isValidatedNames?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/customer.schema.ts:78](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L78)

Schema for updating an existing customer.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:39](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L39) |
| <a id="phone_number"></a> `phone_number?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:40](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L40) |
| <a id="firstname"></a> `firstname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:41](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L41) |
| <a id="lastname"></a> `lastname?` | `string` \| `null` | [src/core/business-mgt/customer.schema.ts:42](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L42) |
| <a id="company"></a> `company?` | `string` | [src/core/business-mgt/customer.schema.ts:43](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L43) |
| <a id="timezone"></a> `timezone?` | `string` | [src/core/business-mgt/customer.schema.ts:44](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L44) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/customer.schema.ts:45](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L45) |
| <a id="preferred_language"></a> `preferred_language?` | `string` | [src/core/business-mgt/customer.schema.ts:46](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L46) |
| <a id="preferred_contact_method"></a> `preferred_contact_method?` | \| [`EMAIL`](../../type-definitions/enumerations/PreferredContactMethod.md#email) \| [`PHONE`](../../type-definitions/enumerations/PreferredContactMethod.md#phone) \| [`SMS`](../../type-definitions/enumerations/PreferredContactMethod.md#sms) | [src/core/business-mgt/customer.schema.ts:47](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L47) |
| <a id="best_time_to_call"></a> `best_time_to_call?` | \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime) | [src/core/business-mgt/customer.schema.ts:48](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L48) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/customer.schema.ts:49](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L49) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/business-mgt/customer.schema.ts:50](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L50) |
| <a id="custom_fields"></a> `custom_fields?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/customer.schema.ts:51](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L51) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/customer.schema.ts:53](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L53) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/base.schema.ts#L23) |
| <a id="isvalidatednames"></a> `isValidatedNames?` | `boolean` | [src/core/business-mgt/customer.schema.ts:54](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L54) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/customer.schema.ts:73](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/business-mgt/customer.schema.ts#L73) |
