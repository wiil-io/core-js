[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / twilioPhoneNumberInfoSchema

# Variable: twilioPhoneNumberInfoSchema

```ts
const twilioPhoneNumberInfoSchema: ZodObject<TwilioPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:152](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L152)

Zod schema for Twilio-specific phone number information.

Extends base phone number schema with Twilio-specific fields.

## Example

```typescript
const twilioPhone: TwilioPhoneNumberInfo = {
  friendlyName: 'Twilio Support Line',
  phoneNumber: '+12125551234',
  isoCountry: 'US',
  capabilities: { voice: true, SMS: true, MMS: true },
  beta: false,
  numberType: PhoneNumberType.LOCAL,
  locality: 'New York',
  latitude: 40.7128,
  longitude: -74.0060,
  providerType: ProviderType.TWILIO
};
```
