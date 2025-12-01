[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TwilioPhoneNumberInfo

# Type Alias: TwilioPhoneNumberInfo

```ts
type TwilioPhoneNumberInfo = {
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
  locality?: string;
  latitude?: number;
  longitude?: number;
  providerType: TWILIO;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:174](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L174)

Type definition for Twilio phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:91](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L91) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:92](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L92) |
| <a id="lata"></a> `lata?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:93](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L93) |
| <a id="ratecenter"></a> `rateCenter?` | `string` | [src/core/service-configuration/phone-number.schema.ts:94](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L94) |
| <a id="region"></a> `region?` | `string` | [src/core/service-configuration/phone-number.schema.ts:95](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L95) |
| <a id="postalcode"></a> `postalCode?` | `string` | [src/core/service-configuration/phone-number.schema.ts:96](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L96) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:97](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L97) |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | [src/core/service-configuration/phone-number.schema.ts:98](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L98) |
| `capabilities.voice` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:99](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L99) |
| `capabilities.SMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:100](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L100) |
| `capabilities.MMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:101](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L101) |
| <a id="beta"></a> `beta` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:103](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L103) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:104](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L104) |
| <a id="locality"></a> `locality?` | `string` | [src/core/service-configuration/phone-number.schema.ts:165](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L165) |
| <a id="latitude"></a> `latitude?` | `number` | [src/core/service-configuration/phone-number.schema.ts:166](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L166) |
| <a id="longitude"></a> `longitude?` | `number` | [src/core/service-configuration/phone-number.schema.ts:167](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L167) |
| <a id="providertype"></a> `providerType` | [`TWILIO`](../../type-definitions/enumerations/ProviderType.md#twilio) | [src/core/service-configuration/phone-number.schema.ts:168](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/phone-number.schema.ts#L168) |
