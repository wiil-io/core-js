[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SWPhoneNumberInfo

# Type Alias: SWPhoneNumberInfo

```ts
type SWPhoneNumberInfo = {
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
  latitude?: string;
  longitude?: string;
  providerType: SIGNALWIRE;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:129](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L129)

Type definition for SignalWire phone number information.

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
| <a id="latitude"></a> `latitude?` | `string` | [src/core/service-configuration/phone-number.schema.ts:121](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L121) |
| <a id="longitude"></a> `longitude?` | `string` | [src/core/service-configuration/phone-number.schema.ts:122](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L122) |
| <a id="providertype"></a> `providerType` | [`SIGNALWIRE`](../../type-definitions/enumerations/ProviderType.md#signalwire) | [src/core/service-configuration/phone-number.schema.ts:123](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L123) |
