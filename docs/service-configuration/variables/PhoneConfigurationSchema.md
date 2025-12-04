[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneConfigurationSchema

# Variable: PhoneConfigurationSchema

```ts
const PhoneConfigurationSchema: ZodObject<PhoneConfiguration>;
```

Defined in: [src/core/service-configuration/phone-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/service-configuration/phone-config.schema.ts#L85)

Zod schema for Phone Configuration validation.

Manages a phone number resource from a telephony provider, tracking its configuration, status,
and associations with deployment channels. A single phone number can support both voice calls
and SMS through separate channel associations.

## Remarks

**Architecture Context:**
- **Referenced By**: PhoneChannelConfig (via phoneConfigurationId)
- **Purpose**: Manages telephony resources and provider integration
- **Dual Channel Support**: One phone number can have both voice and SMS channels
- **Providers**: SignalWire, Twilio, and other SIP/VoIP providers

**Phone Number Lifecycle:**
- **PENDING**: Purchase initiated, awaiting provisioning
- **ACTIVE**: Operational and ready for deployments
- **INACTIVE**: Purchased but not yet activated
- **SUSPENDED**: Temporarily disabled
- **RELEASED**: Disconnected and returned to provider

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
