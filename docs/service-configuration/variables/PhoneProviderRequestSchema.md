[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRequestSchema

# Variable: PhoneProviderRequestSchema

```ts
const PhoneProviderRequestSchema: ZodObject<PhoneProviderRequest>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:189](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/service-configuration/phone-number.schema.ts#L189)

Zod schema for phone provider request.

Used to request available phone numbers from a specific provider and region.

## Example

```typescript
const request: PhoneProviderRequest = {
  providerType: ProviderType.TWILIO,
  region: 'us-west'
};
```
