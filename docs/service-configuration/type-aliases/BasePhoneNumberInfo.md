[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:110](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L110)

Type definition for base phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:91](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L91) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:92](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L92) |
| <a id="lata"></a> `lata?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:93](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L93) |
| <a id="ratecenter"></a> `rateCenter?` | `string` | [src/core/service-configuration/phone-number.schema.ts:94](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L94) |
| <a id="region"></a> `region?` | `string` | [src/core/service-configuration/phone-number.schema.ts:95](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L95) |
| <a id="postalcode"></a> `postalCode?` | `string` | [src/core/service-configuration/phone-number.schema.ts:96](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L96) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:97](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L97) |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | [src/core/service-configuration/phone-number.schema.ts:98](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L98) |
| `capabilities.voice` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:99](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L99) |
| `capabilities.SMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:100](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L100) |
| `capabilities.MMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:101](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L101) |
| <a id="beta"></a> `beta` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:103](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L103) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:104](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L104) |
