[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneConfigurationSchema

# Variable: PhoneConfigurationSchema

```ts
const PhoneConfigurationSchema: ZodObject<PhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-config.schema.ts#L66)

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
