[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneProviderRegion

# Type Alias: PhoneProviderRegion

```ts
type PhoneProviderRegion = {
  regionId: string;
  regionName: string;
  countryCode?: string | null;
  countryName?: string | null;
  providerType: ProviderType;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:56](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L56)

Type definition for phone provider region.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="regionid"></a> `regionId` | `string` | [src/core/service-configuration/phone-number.schema.ts:46](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L46) |
| <a id="regionname"></a> `regionName` | `string` | [src/core/service-configuration/phone-number.schema.ts:47](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L47) |
| <a id="countrycode"></a> `countryCode?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:48](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L48) |
| <a id="countryname"></a> `countryName?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:49](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L49) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:50](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/phone-number.schema.ts#L50) |
