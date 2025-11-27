[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneProviderRegionSchema

# Variable: PhoneProviderRegionSchema

```ts
const PhoneProviderRegionSchema: ZodObject<PhoneProviderRegion>;
```

Defined in: src/core/service-configuration/phone-number.schema.ts:33

Zod schema for phone provider region information.

Represents geographic region information for phone number providers.

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
