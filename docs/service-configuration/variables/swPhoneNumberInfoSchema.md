[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / swPhoneNumberInfoSchema

# Variable: swPhoneNumberInfoSchema

```ts
const swPhoneNumberInfoSchema: ZodObject<SWPhoneNumberInfo>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:120](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L120)

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
