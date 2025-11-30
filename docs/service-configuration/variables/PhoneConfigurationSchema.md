[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneConfigurationSchema

# Variable: PhoneConfigurationSchema

```ts
const PhoneConfigurationSchema: ZodObject<PhoneConfiguration>;
```

Defined in: src/core/service-configuration/phone-config.schema.ts:66

Zod schema for Phone Configuration validation.

Defines the complete configuration for a phone number, including provider information,
channel associations, and operational status.

## Example

```typescript
const phoneConfig: PhoneConfiguration = {
  id: '123*',
  phoneNumber: '+12125551234',
  providerPhoneNumberId: 'PN123abc*',
  phoneRequestId: 'REQ456*',
  friendlyName: 'Customer Support Line',
  regionId: 'us-ny',
  monthlyPrice: 1.00,
  regionOrCountryName: 'New York, United States',
  countryCode: 'US',
  providerType: ProviderType.SIGNALWIRE,
  status: PhoneStatus.ACTIVE,
  isImported: false,
  isPorted: false,
  isUSSMSPermitted: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
