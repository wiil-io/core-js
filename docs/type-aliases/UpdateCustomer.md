[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateCustomer

# Type Alias: UpdateCustomer

```ts
type UpdateCustomer = {
  version?: number;
  organizationId?: string;
  customerId?: string | null;
  phone_number?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  company?: string;
  timezone?: string;
  email?: string;
  preferred_language?: string;
  call_priority?:   | HIGH
     | MEDIUM
     | LOW;
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
  channelId?: string | null;
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

Defined in: src/core/business-mgt/customer.schema.ts:81

Schema for updating an existing customer.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/business-mgt/customer.schema.ts:41 |
| <a id="customerid"></a> `customerId?` | `string` \| `null` | src/core/business-mgt/customer.schema.ts:42 |
| <a id="phone_number"></a> `phone_number?` | `string` \| `null` | src/core/business-mgt/customer.schema.ts:43 |
| <a id="firstname"></a> `firstname?` | `string` \| `null` | src/core/business-mgt/customer.schema.ts:44 |
| <a id="lastname"></a> `lastname?` | `string` \| `null` | src/core/business-mgt/customer.schema.ts:45 |
| <a id="company"></a> `company?` | `string` | src/core/business-mgt/customer.schema.ts:46 |
| <a id="timezone"></a> `timezone?` | `string` | src/core/business-mgt/customer.schema.ts:47 |
| <a id="email"></a> `email?` | `string` | src/core/business-mgt/customer.schema.ts:48 |
| <a id="preferred_language"></a> `preferred_language?` | `string` | src/core/business-mgt/customer.schema.ts:49 |
| <a id="call_priority"></a> `call_priority?` | \| [`HIGH`](../enumerations/CallPriority.md#high) \| [`MEDIUM`](../enumerations/CallPriority.md#medium) \| [`LOW`](../enumerations/CallPriority.md#low) | src/core/business-mgt/customer.schema.ts:50 |
| <a id="preferred_contact_method"></a> `preferred_contact_method?` | \| [`EMAIL`](../enumerations/PreferredContactMethod.md#email) \| [`PHONE`](../enumerations/PreferredContactMethod.md#phone) \| [`SMS`](../enumerations/PreferredContactMethod.md#sms) | src/core/business-mgt/customer.schema.ts:51 |
| <a id="best_time_to_call"></a> `best_time_to_call?` | \| [`MORNING`](../enumerations/BestTimeToCall.md#morning) \| [`AFTERNOON`](../enumerations/BestTimeToCall.md#afternoon) \| [`EVENING`](../enumerations/BestTimeToCall.md#evening) \| [`ANYTIME`](../enumerations/BestTimeToCall.md#anytime) | src/core/business-mgt/customer.schema.ts:52 |
| <a id="notes"></a> `notes?` | `string` | src/core/business-mgt/customer.schema.ts:53 |
| <a id="tags"></a> `tags?` | `string`[] | src/core/business-mgt/customer.schema.ts:54 |
| <a id="custom_fields"></a> `custom_fields?` | `Record`\<`string`, `any`\> | src/core/business-mgt/customer.schema.ts:55 |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | src/core/business-mgt/customer.schema.ts:56 |
| <a id="address"></a> `address?` | \{ `street`: `string`; `street2?`: `string`; `city`: `string`; `state`: `string`; `postalCode`: `string`; `country`: `string`; \} | src/core/business-mgt/customer.schema.ts:57 |
| `address.street` | `string` | src/core/base.schema.ts:19 |
| `address.street2?` | `string` | src/core/base.schema.ts:20 |
| `address.city` | `string` | src/core/base.schema.ts:21 |
| `address.state` | `string` | src/core/base.schema.ts:22 |
| `address.postalCode` | `string` | src/core/base.schema.ts:23 |
| `address.country` | `string` | src/core/base.schema.ts:24 |
| <a id="isvalidatednames"></a> `isValidatedNames?` | `boolean` | src/core/business-mgt/customer.schema.ts:58 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/customer.schema.ts:76 |
