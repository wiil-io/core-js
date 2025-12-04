[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRegionSchema

# Variable: PhoneProviderRegionSchema

```ts
const PhoneProviderRegionSchema: ZodObject<PhoneProviderRegion>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:45](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L45)

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
