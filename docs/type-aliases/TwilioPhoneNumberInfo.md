[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TwilioPhoneNumberInfo

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

Defined in: src/core/service-configuration/phone-number.schema.ts:162

Type definition for Twilio phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | src/core/service-configuration/phone-number.schema.ts:79 |
| <a id="phonenumber"></a> `phoneNumber` | `string` | src/core/service-configuration/phone-number.schema.ts:80 |
| <a id="lata"></a> `lata?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:81 |
| <a id="ratecenter"></a> `rateCenter?` | `string` | src/core/service-configuration/phone-number.schema.ts:82 |
| <a id="region"></a> `region?` | `string` | src/core/service-configuration/phone-number.schema.ts:83 |
| <a id="postalcode"></a> `postalCode?` | `string` | src/core/service-configuration/phone-number.schema.ts:84 |
| <a id="isocountry"></a> `isoCountry` | `string` | src/core/service-configuration/phone-number.schema.ts:85 |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | src/core/service-configuration/phone-number.schema.ts:86 |
| `capabilities.voice` | `boolean` | src/core/service-configuration/phone-number.schema.ts:87 |
| `capabilities.SMS` | `boolean` | src/core/service-configuration/phone-number.schema.ts:88 |
| `capabilities.MMS` | `boolean` | src/core/service-configuration/phone-number.schema.ts:89 |
| <a id="beta"></a> `beta` | `boolean` | src/core/service-configuration/phone-number.schema.ts:91 |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../enumerations/PhoneNumberType.md) | src/core/service-configuration/phone-number.schema.ts:92 |
| <a id="locality"></a> `locality?` | `string` | src/core/service-configuration/phone-number.schema.ts:153 |
| <a id="latitude"></a> `latitude?` | `number` | src/core/service-configuration/phone-number.schema.ts:154 |
| <a id="longitude"></a> `longitude?` | `number` | src/core/service-configuration/phone-number.schema.ts:155 |
| <a id="providertype"></a> `providerType` | [`TWILIO`](../enumerations/ProviderType.md#twilio) | src/core/service-configuration/phone-number.schema.ts:156 |
