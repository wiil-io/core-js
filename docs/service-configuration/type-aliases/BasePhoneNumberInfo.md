[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.41**](../../README.md)

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
  countryCode: string;
  capabilities: {
     voice: boolean;
     SMS: boolean;
     MMS: boolean;
  };
  beta: boolean;
  numberType: PhoneNumberType;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:67](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L67)

Type definition for base phone number information.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:48](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L48) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:49](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L49) |
| <a id="lata"></a> `lata?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:50](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L50) |
| <a id="ratecenter"></a> `rateCenter?` | `string` | [src/core/service-configuration/phone-number.schema.ts:51](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L51) |
| <a id="region"></a> `region?` | `string` | [src/core/service-configuration/phone-number.schema.ts:52](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L52) |
| <a id="postalcode"></a> `postalCode?` | `string` | [src/core/service-configuration/phone-number.schema.ts:53](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L53) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:54](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L54) |
| <a id="capabilities"></a> `capabilities` | \{ `voice`: `boolean`; `SMS`: `boolean`; `MMS`: `boolean`; \} | [src/core/service-configuration/phone-number.schema.ts:55](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L55) |
| `capabilities.voice` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:56](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L56) |
| `capabilities.SMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:57](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L57) |
| `capabilities.MMS` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:58](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L58) |
| <a id="beta"></a> `beta` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:60](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L60) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:61](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/phone-number.schema.ts#L61) |
