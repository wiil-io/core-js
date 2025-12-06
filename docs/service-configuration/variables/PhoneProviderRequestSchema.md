[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRequestSchema

# Variable: PhoneProviderRequestSchema

```ts
const PhoneProviderRequestSchema: ZodObject<PhoneProviderRequest>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:189](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/phone-number.schema.ts#L189)

Zod schema for phone provider request.

Used to request available phone numbers from a specific provider and region.

## Example

```typescript
const request: PhoneProviderRequest = {
  providerType: ProviderType.TWILIO,
  region: 'us-west'
};
```
