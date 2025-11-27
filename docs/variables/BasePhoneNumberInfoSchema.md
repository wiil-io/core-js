[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BasePhoneNumberInfoSchema

# Variable: BasePhoneNumberInfoSchema

```ts
const BasePhoneNumberInfoSchema: ZodObject<BasePhoneNumberInfo>;
```

Defined in: src/core/service-configuration/phone-number.schema.ts:78

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
