[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:84](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/service-configuration/phone-number.schema.ts#L84)

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
