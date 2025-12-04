[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / swPhoneNumberInfoSchema

# Variable: swPhoneNumberInfoSchema

```ts
const swPhoneNumberInfoSchema: ZodObject<SWPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:132](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L132)

Zod schema for SignalWire-specific phone number information.

Extends base phone number schema with SignalWire-specific fields.

## Example

```typescript
const swPhone: SWPhoneNumberInfo = {
  friendlyName: 'SW Support Line',
  phoneNumber: '+12125551234',
  isoCountry: 'US',
  capabilities: { voice: true, SMS: true, MMS: false },
  beta: false,
  numberType: PhoneNumberType.LOCAL,
  latitude: '40.7128',
  longitude: '-74.0060',
  providerType: ProviderType.SIGNALWIRE
};
```
