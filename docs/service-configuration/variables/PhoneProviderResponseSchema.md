[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:214](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L214)

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
