[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / BasePhoneNumberInfoSchema

# Variable: BasePhoneNumberInfoSchema

```ts
const BasePhoneNumberInfoSchema: ZodObject<BasePhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:90](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L90)

Zod schema for base phone number information.

Common properties shared across all phone number providers.

## Example

```typescript
const phoneInfo: BasePhoneNumberInfo = {
  friendlyName: 'Customer Support Line',
  phoneNumber: '+12125551234',
  isoCountry: 'US',
  capabilities: { voice: true, SMS: true, MMS: false },
  beta: false,
  numberType: PhoneNumberType.LOCAL
};
```
