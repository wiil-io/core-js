[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRegionSchema

# Variable: PhoneProviderRegionSchema

```ts
const PhoneProviderRegionSchema: ZodObject<PhoneProviderRegion>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:33](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L33)

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
