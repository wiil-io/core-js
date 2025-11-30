[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:212](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L212)

Type definition for phone provider response.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:203](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L203) |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/phone-number.schema.ts:204](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L204) |
| <a id="status"></a> `status?` | `number` | [src/core/service-configuration/phone-number.schema.ts:205](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L205) |
| <a id="data"></a> `data` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:206](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L206) |
