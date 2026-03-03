[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRequestSchema

# Variable: PhoneProviderRequestSchema

```ts
const PhoneProviderRequestSchema: ZodObject<PhoneProviderRequest>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:189](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/service-configuration/phone-number.schema.ts#L189)

Zod schema for phone provider request.

Used to request available phone numbers from a specific provider and region.

## Example

```typescript
const request: PhoneProviderRequest = {
  providerType: ProviderType.TWILIO,
  region: 'us-west'
};
```
