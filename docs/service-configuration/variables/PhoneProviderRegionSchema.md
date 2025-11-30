[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRegionSchema

# Variable: PhoneProviderRegionSchema

```ts
const PhoneProviderRegionSchema: ZodObject<PhoneProviderRegion>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:33](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L33)

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
