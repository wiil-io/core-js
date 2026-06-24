[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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
  customerGroupId?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/customer-management/customer.schema.ts:103](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L103)

Schema for updating an existing customer.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:55](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L55) |
| <a id="phone_number"></a> `phone_number?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:56](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L56) |
| <a id="firstname"></a> `firstname?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:57](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L57) |
| <a id="lastname"></a> `lastname?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:58](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L58) |
| <a id="company"></a> `company?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:59](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L59) |
| <a id="timezone"></a> `timezone?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:60](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L60) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:61](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L61) |
| <a id="preferred_language"></a> `preferred_language?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:62](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L62) |
| <a id="preferred_contact_method"></a> `preferred_contact_method?` | \| [`EMAIL`](../../type-definitions/enumerations/PreferredContactMethod.md#email) \| [`PHONE`](../../type-definitions/enumerations/PreferredContactMethod.md#phone) \| [`SMS`](../../type-definitions/enumerations/PreferredContactMethod.md#sms) | [src/core/business-mgt/customer-management/customer.schema.ts:63](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L63) |
| <a id="best_time_to_call"></a> `best_time_to_call?` | \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime) | [src/core/business-mgt/customer-management/customer.schema.ts:64](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L64) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:65](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L65) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/business-mgt/customer-management/customer.schema.ts:66](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L66) |
| <a id="custom_fields"></a> `custom_fields?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/customer-management/customer.schema.ts:67](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L67) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/customer-management/customer.schema.ts:69](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L69) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/base.schema.ts#L23) |
| <a id="isvalidatednames"></a> `isValidatedNames?` | `boolean` | [src/core/business-mgt/customer-management/customer.schema.ts:70](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L70) |
| <a id="customergroupid"></a> `customerGroupId?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:71](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L71) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:94](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/customer-management/customer.schema.ts#L94) |
