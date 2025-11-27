[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneProviderResponse

# Type Alias: PhoneProviderResponse

```ts
type PhoneProviderResponse = {
  providerType: ProviderType;
  success: boolean;
  status?: number;
  data: unknown;
};
```

Defined in: src/core/service-configuration/phone-number.schema.ts:212

Type definition for phone provider response.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../enumerations/ProviderType.md) | src/core/service-configuration/phone-number.schema.ts:203 |
| <a id="success"></a> `success` | `boolean` | src/core/service-configuration/phone-number.schema.ts:204 |
| <a id="status"></a> `status?` | `number` | src/core/service-configuration/phone-number.schema.ts:205 |
| <a id="data"></a> `data` | `unknown` | src/core/service-configuration/phone-number.schema.ts:206 |
