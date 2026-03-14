[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:84](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/service-configuration/phone-number.schema.ts#L84)

Zod schema for phone provider response.

Response from phone number provider API calls.

## Example

```typescript
const response: PhoneProviderResponse = {
  success: true,
  status: 200,
  data: { availableNumbers: [...] }
};
```
