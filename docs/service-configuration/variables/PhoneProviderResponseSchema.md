[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponseSchema

# Variable: PhoneProviderResponseSchema

```ts
const PhoneProviderResponseSchema: ZodObject<PhoneProviderResponse>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:84](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/phone-number.schema.ts#L84)

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
