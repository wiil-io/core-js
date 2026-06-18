[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / BasePhoneNumberInfoSchema

# Variable: BasePhoneNumberInfoSchema

```ts
const BasePhoneNumberInfoSchema: ZodObject<BasePhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:47](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/service-configuration/phone-number.schema.ts#L47)

Zod schema for base phone number information.

Common properties shared across all phone number providers.

## Example

```typescript
const phoneInfo: BasePhoneNumberInfo = {
  friendlyName: 'Customer Support Line',
  phoneNumber: '+12125551234',
  countryCode: 'US',
  capabilities: { voice: true, SMS: true, MMS: false },
  beta: false,
  numberType: PhoneNumberType.LOCAL
};
```
