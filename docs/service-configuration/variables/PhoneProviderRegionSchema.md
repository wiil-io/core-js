[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRegionSchema

# Variable: PhoneProviderRegionSchema

```ts
const PhoneProviderRegionSchema: ZodObject<PhoneProviderRegion>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:45](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/service-configuration/phone-number.schema.ts#L45)

Zod schema for phone provider region information.

Represents geographic region information from telephony providers, used for filtering and
searching available phone numbers by location.

## Remarks

**Architecture Context:**
- **Usage**: Phone number discovery and filtering
- **Provider Integration**: Maps to provider regional offerings
- **Search**: Used to narrow number searches by geographic area

## Example

```typescript
const region: PhoneProviderRegion = {
  regionId: 'us-west',
  regionName: 'US West',
  countryCode: 'US',
  countryName: 'United States',
  providerType: ProviderType.TWILIO
};
```
