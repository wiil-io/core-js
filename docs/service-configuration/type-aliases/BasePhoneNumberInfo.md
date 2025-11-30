[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / BasePhoneNumberInfo

# Type Alias: BasePhoneNumberInfo

```ts
type BasePhoneNumberInfo = {
  friendlyName: string;
  phoneNumber: string;
  lata?: string | null;
  rateCenter?: string;
  region?: string;
  postalCode?: string;
  isoCountry: string;
  capabilities: {
     voice: boolean;
     SMS: boolean;
     MMS: boolean;
  };
  beta: boolean;
  numberType: PhoneNumberType;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:98](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L98)

Type definition for base phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:79](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L79) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:80](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L80) |
| <a id="lata"></a> `lata?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:81](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L81) |
| <a id="ratecenter"></a> `rateCenter?` | `string` | [src/core/service-configuration/phone-number.schema.ts:82](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L82) |
| <a id="region"></a> `region?` | `string` | [src/core/service-configuration/phone-number.schema.ts:83](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L83) |
| <a id="postalcode"></a> `postalCode?` | `string` | [src/core/service-configuration/phone-number.schema.ts:84](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L84) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:85](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L85) |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | [src/core/service-configuration/phone-number.schema.ts:86](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L86) |
| `capabilities.voice` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:87](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L87) |
| `capabilities.SMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:88](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L88) |
| `capabilities.MMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:89](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L89) |
| <a id="beta"></a> `beta` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:91](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L91) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:92](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L92) |
