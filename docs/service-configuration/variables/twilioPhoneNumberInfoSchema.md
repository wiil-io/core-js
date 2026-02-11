[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.32**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / twilioPhoneNumberInfoSchema

# Variable: twilioPhoneNumberInfoSchema

```ts
const twilioPhoneNumberInfoSchema: ZodObject<TwilioPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:164](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/service-configuration/phone-number.schema.ts#L164)

Zod schema for Twilio-specific phone number information.

Extends base phone number schema with Twilio-specific fields.

## Example

```typescript
const twilioPhone: TwilioPhoneNumberInfo = {
  friendlyName: 'Twilio Support Line',
  phoneNumber: '+12125551234',
  countryCode: 'US',
  capabilities: { voice: true, SMS: true, MMS: true },
  beta: false,
  numberType: PhoneNumberType.LOCAL,
  locality: 'New York',
  latitude: 40.7128,
  longitude: -74.0060,
  providerType: ProviderType.TWILIO
};
```
