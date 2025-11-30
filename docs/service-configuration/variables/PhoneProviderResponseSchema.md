[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:202](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L202)

Zod schema for phone provider response.

Response from phone number provider API calls.

## Example

```typescript
const response: PhoneProviderResponse = {
  providerType: ProviderType.TWILIO,
  success: true,
  status: 200,
  data: { availableNumbers: [...] }
};
```
