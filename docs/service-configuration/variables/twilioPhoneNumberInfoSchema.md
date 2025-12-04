[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / twilioPhoneNumberInfoSchema

# Variable: twilioPhoneNumberInfoSchema

```ts
const twilioPhoneNumberInfoSchema: ZodObject<TwilioPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:164](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L164)

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
