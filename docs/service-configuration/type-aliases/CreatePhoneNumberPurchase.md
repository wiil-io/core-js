[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchase

# Type Alias: CreatePhoneNumberPurchase

```ts
type CreatePhoneNumberPurchase = {
  friendlyName: string;
  phoneNumber: string;
  countryCode: string;
  numberType: PhoneNumberType;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:184](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L184)

Type definition for creating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:133](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L133) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:134](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L134) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:135](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L135) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:138](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L138) |
