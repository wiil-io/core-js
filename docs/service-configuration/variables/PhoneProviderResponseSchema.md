[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:214](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/service-configuration/phone-number.schema.ts#L214)

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
