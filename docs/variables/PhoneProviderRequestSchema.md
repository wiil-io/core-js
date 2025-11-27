[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneProviderRequestSchema

# Variable: PhoneProviderRequestSchema

```ts
const PhoneProviderRequestSchema: ZodObject<PhoneProviderRequest>;
```

Defined in: src/core/service-configuration/phone-number.schema.ts:177

Zod schema for phone provider request.

Used to request available phone numbers from a specific provider and region.

## Example

```typescript
const request: PhoneProviderRequest = {
  providerType: ProviderType.TWILIO,
  region: 'us-west'
};
```
