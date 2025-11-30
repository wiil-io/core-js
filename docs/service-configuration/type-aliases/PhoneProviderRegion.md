[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:44](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L44)

Type definition for phone provider region.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="regionid"></a> `regionId` | `string` | [src/core/service-configuration/phone-number.schema.ts:34](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L34) |
| <a id="regionname"></a> `regionName` | `string` | [src/core/service-configuration/phone-number.schema.ts:35](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L35) |
| <a id="countrycode"></a> `countryCode?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:36](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L36) |
| <a id="countryname"></a> `countryName?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:37](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L37) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:38](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L38) |
