[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Customer

# Type Alias: Customer

```ts
type Customer = {
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
};
```

Defined in: [src/core/business-mgt/customer-management/customer.schema.ts:101](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L101)

Customer schema.
Individual customer record with contact info and preferences.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L10) |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:55](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L55) |
| <a id="phone_number"></a> `phone_number?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:56](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L56) |
| <a id="firstname"></a> `firstname?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:57](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L57) |
| <a id="lastname"></a> `lastname?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:58](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L58) |
| <a id="company"></a> `company?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:59](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L59) |
| <a id="timezone"></a> `timezone?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:60](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L60) |
| <a id="email"></a> `email?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:61](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L61) |
| <a id="preferred_language"></a> `preferred_language` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:62](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L62) |
| <a id="preferred_contact_method"></a> `preferred_contact_method` | [`PreferredContactMethod`](../../type-definitions/enumerations/PreferredContactMethod.md) | [src/core/business-mgt/customer-management/customer.schema.ts:63](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L63) |
| <a id="best_time_to_call"></a> `best_time_to_call?` | \| [`MORNING`](../../type-definitions/enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../../type-definitions/enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../../type-definitions/enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../../type-definitions/enumerations/BestTimeToCall.md#anytime) | [src/core/business-mgt/customer-management/customer.schema.ts:64](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L64) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/customer-management/customer.schema.ts:65](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L65) |
| <a id="tags"></a> `tags?` | `string`[] | [src/core/business-mgt/customer-management/customer.schema.ts:66](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L66) |
| <a id="custom_fields"></a> `custom_fields?` | `Record`\<`string`, `any`\> | [src/core/business-mgt/customer-management/customer.schema.ts:67](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L67) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:68](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L68) |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | [src/core/business-mgt/customer-management/customer.schema.ts:69](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L69) |
| `address.street` | `string` | [src/core/base.schema.ts:18](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L18) |
| `address.street2?` | `string` | [src/core/base.schema.ts:19](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L19) |
| `address.city` | `string` | [src/core/base.schema.ts:20](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L20) |
| `address.state` | `string` | [src/core/base.schema.ts:21](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L21) |
| `address.postalCode` | `string` | [src/core/base.schema.ts:22](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L22) |
| `address.country` | `string` | [src/core/base.schema.ts:23](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L23) |
| <a id="isvalidatednames"></a> `isValidatedNames` | `boolean` | [src/core/business-mgt/customer-management/customer.schema.ts:70](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L70) |
| <a id="customergroupid"></a> `customerGroupId?` | `string` \| `null` | [src/core/business-mgt/customer-management/customer.schema.ts:71](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/customer-management/customer.schema.ts#L71) |
