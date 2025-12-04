[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ProviderPhoneNumberInfo

# Type Alias: ProviderPhoneNumberInfo

```ts
type ProviderPhoneNumberInfo = {
  id: string;
  name?: string;
  number: string;
  call_handler?: string;
  call_receive_mode: string;
  call_request_url?: string;
  call_request_method?: "POST" | "GET";
  message_handler?: string;
  message_request_url?: string;
  message_request_method?: "POST" | "GET";
  message_fallback_url?: string;
  message_fallback_method?: "POST" | "GET";
  created_at?: string;
  updated_at?: string;
  next_billed_at?: string;
  number_type?: "toll-free" | "longcode";
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:479](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L479)

Type definition for provider phone number configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/phone-number.schema.ts:457](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L457) |
| <a id="name"></a> `name?` | `string` | [src/core/service-configuration/phone-number.schema.ts:458](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L458) |
| <a id="number"></a> `number` | `string` | [src/core/service-configuration/phone-number.schema.ts:459](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L459) |
| <a id="call_handler"></a> `call_handler?` | `string` | [src/core/service-configuration/phone-number.schema.ts:461](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L461) |
| <a id="call_receive_mode"></a> `call_receive_mode` | `string` | [src/core/service-configuration/phone-number.schema.ts:462](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L462) |
| <a id="call_request_url"></a> `call_request_url?` | `string` | [src/core/service-configuration/phone-number.schema.ts:463](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L463) |
| <a id="call_request_method"></a> `call_request_method?` | `"POST"` \| `"GET"` | [src/core/service-configuration/phone-number.schema.ts:464](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L464) |
| <a id="message_handler"></a> `message_handler?` | `string` | [src/core/service-configuration/phone-number.schema.ts:465](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L465) |
| <a id="message_request_url"></a> `message_request_url?` | `string` | [src/core/service-configuration/phone-number.schema.ts:466](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L466) |
| <a id="message_request_method"></a> `message_request_method?` | `"POST"` \| `"GET"` | [src/core/service-configuration/phone-number.schema.ts:467](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L467) |
| <a id="message_fallback_url"></a> `message_fallback_url?` | `string` | [src/core/service-configuration/phone-number.schema.ts:468](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L468) |
| <a id="message_fallback_method"></a> `message_fallback_method?` | `"POST"` \| `"GET"` | [src/core/service-configuration/phone-number.schema.ts:469](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L469) |
| <a id="created_at"></a> `created_at?` | `string` | [src/core/service-configuration/phone-number.schema.ts:470](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L470) |
| <a id="updated_at"></a> `updated_at?` | `string` | [src/core/service-configuration/phone-number.schema.ts:471](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L471) |
| <a id="next_billed_at"></a> `next_billed_at?` | `string` | [src/core/service-configuration/phone-number.schema.ts:472](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L472) |
| <a id="number_type"></a> `number_type?` | `"toll-free"` \| `"longcode"` | [src/core/service-configuration/phone-number.schema.ts:473](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L473) |
