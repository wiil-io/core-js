[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:141](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L141)

Type definition for SignalWire phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:91](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L91) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:92](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L92) |
| <a id="lata"></a> `lata?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:93](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L93) |
| <a id="ratecenter"></a> `rateCenter?` | `string` | [src/core/service-configuration/phone-number.schema.ts:94](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L94) |
| <a id="region"></a> `region?` | `string` | [src/core/service-configuration/phone-number.schema.ts:95](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L95) |
| <a id="postalcode"></a> `postalCode?` | `string` | [src/core/service-configuration/phone-number.schema.ts:96](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L96) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:97](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L97) |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | [src/core/service-configuration/phone-number.schema.ts:98](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L98) |
| `capabilities.voice` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:99](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L99) |
| `capabilities.SMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:100](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L100) |
| `capabilities.MMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:101](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L101) |
| <a id="beta"></a> `beta` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:103](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L103) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:104](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L104) |
| <a id="latitude"></a> `latitude?` | `string` | [src/core/service-configuration/phone-number.schema.ts:133](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L133) |
| <a id="longitude"></a> `longitude?` | `string` | [src/core/service-configuration/phone-number.schema.ts:134](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L134) |
| <a id="providertype"></a> `providerType` | [`SIGNALWIRE`](../../type-definitions/enumerations/ProviderType.md#signalwire) | [src/core/service-configuration/phone-number.schema.ts:135](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L135) |
