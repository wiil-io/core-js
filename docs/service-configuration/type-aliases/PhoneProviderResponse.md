[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderResponse

# Type Alias: PhoneProviderResponse

```ts
type PhoneProviderResponse = {
  providerType: ProviderType;
  success: boolean;
  status?: number;
  data: unknown;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:224](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L224)

Type definition for phone provider response.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:215](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L215) |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:216](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L216) |
| <a id="status"></a> `status?` | `number` | [src/core/service-configuration/phone-number.schema.ts:217](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L217) |
| <a id="data"></a> `data` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:218](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L218) |
